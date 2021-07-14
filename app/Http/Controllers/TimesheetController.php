<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Validation\ValidationException;
use App\User;
use App\Contract;
use App\ContractStaff;
use App\Timesheet;
use App\TimesheetData;

class TimesheetController extends Controller
{
	function index(Request $request)
	{
		if (! Auth::user()->can('viewAny', Timesheet::class))
		{
			echo 'ACESS DENIED';
			return;
		}

		$data = $request->all();
		$status = $data['status'] ?? 'active';

		$rules = [
			'title' => [
				'is_common_search' => true,
				'cond' => 'like',
				's' => ['%', '%']
			],
			'offer_number' => [
				'is_common_search' => true,
				'cond' => 'like',
				's' => ['%', '%']
			],
			'full_name' => [
				'is_common_search' => true,
				'is_name' => true,
				'keys' => ['customer_lname', 'customer_fname', 'customer_mname'],
				'cond' => 'like',
				's' => ['%', '%']
			],
			'status' => [
				'cond' => '='
			],
			'duration' => [
				'key' => 'date',
				'allowed_values' => ['1' => 1, '3' => 3, '6' => 6, '12' => 12],
				'is_months_filter' => true,
				'is_date' => true,
				'cond' => '>='
			]
		];

		$allowSort = [
			'customer_agent' => 'customer_lname',
			'contract_number' => 'offer_number',
			'date' => 'date',
			'title' => 'title',
		];

		$filters = $data['filters'] ?? [];
		$filters['status'] = $status == 'close' ? Contract::CLOSE : Contract::ACTIVE;
		$data['filters'] = $filters;

		$query = Contract::query();
		$contracts = $this->filter($rules, $data, $query);
		unset($data['filters']['status']);

		$ownRoles = ['engineer', 'fold_manager', 'hs_specialis'];
		$user = Auth::user();
		if (in_array($user->role, $ownRoles))
			$contracts = $contracts->whereHas('staff', function ($q) use ($user) {
				$q->whereHas('user', function($q) use ($user) {
					$q->where('id', $user->id);
				});
			});

		if (isset($data['sort']))
		{
			foreach($data['sort'] as $field => $type)
			{
				if (isset($allowSort[$field]) && in_array($type, ['asc', 'desc']))
					$contracts = $contracts->orderBy($allowSort[$field], $type);
			}
		}

		$contracts = $contracts->paginate(15);

		return view('timesheet.index', [
			'contracts' => $contracts,
			'filters' => $data['filters'] ?? null,
			'status' => $status,
			'sort' => isset($data['sort']) ? $data['sort'] : null
		]);
	}

	function show(Request $request, $id)
	{
		$data = $request->all();

		$visibleMonth = isset($data['month']) ? $data['month'] : date('m', time());
		$visibleYear = isset($data['year']) ? $data['year'] : date('Y', time());
		$dayInMonth = date('t', strtotime("$visibleYear-$visibleMonth-1"));

		$timesheet = Timesheet::find($id);
		$contract = Contract::find($timesheet->contract->id);
	
		$rules = [
			'full_name' => [
				'is_relation' => true,
				'relation' => 'user',
				'is_name' => true,
				'keys' => ['lname', 'fname', 'mname'],
				'cond' => 'like',
				's' => ['%', '%']
			]
		];

		$query = $contract->staff();
		$query = $this->filter($rules, $data, $query);
		$staff = $query->get();
		// $this->dumpQuery($query);

		/* FIND COTRACT DURATION */
		$startDate = date('Y-m-d', strtotime('01.01.' . $visibleYear ?? date('Y', time())));
		$endDate = date('Y-m-d', strtotime('31.12.' . $visibleYear ?? date('Y', time())));
		$start = (new \DateTime($startDate));
		$end = (new \DateTime($endDate));
		$interval = \DateInterval::createFromDateString('1 month');
		// $start = (new \DateTime($contract->date))->modify('first day of this month');
		// $end = (new \DateTime(date('Y-m-d', time())))->modify('first day of next month');
		// $interval = \DateInterval::createFromDateString('1 month');
		$period = new \DatePeriod($start, $interval, $end);
		$duration = [];
		$duration['fewYear'] = false;
		$currentYear = date('Y', time());
		foreach ($period as $dt)
		{
			$duration['date'][] = [
				'm' => $dt->format('m'),
				'y' => $dt->format('Y')
			];
			if (!$duration['fewYear'] && $currentYear != $dt->format('Y'))
				$duration['fewYear'] = true;
		}

		$minDate = $timesheet->data->min('date');
		$minYear = date('Y', strtotime($minDate));

		for ($year=$minYear; $year <= $currentYear; $year++) 
			$duration['years'][] = $year;
		/*  */

		return view('timesheet.show', [
			'contract' => $contract,
			'timesheet' => $timesheet,
			'staff' => $staff,
			'days' => $dayInMonth,
			'visibleMonth' => $visibleMonth,
			'visibleYear' => $visibleYear,
			'duration' => $duration,
			'filters' => isset($data['filters']) ? $data['filters'] : null
		]);
	}

	function general(Request $request)
	{
		$data = $request->all();

		$visibleMonth = isset($data['month']) ? $data['month'] : date('m', time());
		$visibleYear = isset($data['year']) ? $data['year'] : date('Y', time());
		$dayInMonth = date('t', strtotime("$visibleYear-$visibleMonth-1"));

		$allowFilter = [
			'lname' => [
				'lname', 'like'
			],
			'fname' => [
				'fname', 'like'
			],
			'mname' => [
				'mname', 'like'
			],
		];

		$filters = [];
		if (isset($data['filters']))
		{
			foreach($data['filters'] as $key => $value)
				if (isset($allowFilter[$key]) && trim($value) != '')
				{
					$search = $value;
					if ($allowFilter[$key][1] == 'like')
						$search = "%$value%";
					$filters[] = [$allowFilter[$key][0], $allowFilter[$key][1], $search];
				}
		}

		// $contracts = Contract::where('status', Contract::ACTIVE);

		$staff = User::where([
			['role', '!=', 'root'],
			['role', '!=', 'admin'],
		])
		->where($filters)->get();

		$result = [];

		$timesheetData = TimesheetData::whereBetween('date', [
				"$visibleYear-$visibleMonth-01",
				"$visibleYear-$visibleMonth-31"
			])->get();

		foreach ($staff as $user)
		{
			$result[$user->id]['user'] = $user;
			$result[$user->id]['prepayment'] = $user->prepayments()->where([
				'month' => $visibleMonth,
				'year' => $visibleYear
			])->first();

            foreach ($timesheetData as $timesheetd) {
				$user = $timesheetd->worker()->first();
				if (!$user)
					continue;
				if (isset($result[$user->id])) {
					$day = date('d', strtotime($timesheetd->date));
					$result[$timesheetd->worker->id]['data'][$day] = $timesheetd;
				}
            }
		}

		/* FIND LONGER DURATION */
		$duration = [];

		$minDate = Contract::where('status', Contract::ACTIVE)->min('date');

		if ($minDate)
		{
			$startDate = date('Y-m-d', strtotime('01.01.' . $visibleYear ?? date('Y', time())));
			$endDate = date('Y-m-d', strtotime('31.12.' . $visibleYear ?? date('Y', time())));
			$start = (new \DateTime($startDate));
			$end = (new \DateTime($endDate));
			$interval = \DateInterval::createFromDateString('1 month');

			// $start = (new \DateTime(Contract::min('date')))->modify('first day of this month');
			// $end = (new \DateTime(date('Y-m-d', time())))->modify('first day of next month');
			// $interval = \DateInterval::createFromDateString('1 month');
			$period = new \DatePeriod($start, $interval, $end);
			$duration['fewYear'] = false;

			$currentYear = date('Y', time());
			foreach ($period as $dt)
			{
				$duration['date'][] = [
					'm' => $dt->format('m'),
					'y' => $dt->format('Y')
				];
				if (!$duration['fewYear'] && $currentYear != $dt->format('Y'))
					$duration['fewYear'] = true;
			}

			$minYear = date('Y', strtotime($minDate));

			for ($year=$minYear; $year <= $currentYear; $year++) 
				$duration['years'][] = $year;
		}
		/*  */

		return view('timesheet.general', [
			'data' => $result,
			'days' => $dayInMonth,
			'visibleMonth' => $visibleMonth,
			'visibleYear' => $visibleYear,
			'filters' => isset($data['filters']) ? $data['filters'] : null,
			'duration' => $duration,

			/* 'timesheet' => $timesheet,
			'staff' => $staff,
			'days' => $dayInMonth,
			'visibleMonth' => $visibleMonth,
			'visibleYear' => $visibleYear,
			'duration' => $duration,
			'filters' => isset($data['filters']) ? $data['filters'] : null */
		]);
	}

	function addHour(Request $request, $id)
	{
		$data = $request->all();
		$validated = $request->validate([
			'worker' => 'required',
			'date' => 'required|before:tomorrow',
			'hourse' => 'required|min:0|max:24',
			'comment' => 'max:100',
			'business' => 'nullable|numeric',
			'premium' => 'required|min:0',
			'retention' => 'required|min:0'
		]);

		$timesheet = Timesheet::find($id);
		// TO DO check on exist

		$exist = TimesheetData::where([
			'timesheet_id' => $id,
			'date' => $data['date'],
			'worker_id' => $data['worker'],
		])->first();

		/* CHECK EXISY ON ANOTHER PROJECT */
		$otherContractData = \App\TimesheetData::where([
				['worker_id', $data['worker']],
				['timesheet_id', '!=', $id],
				['date', $data['date']]
			])->count();

		if ($otherContractData != 0)
			throw ValidationException::withMessages(['timesheetData' => 'Exist']);
		if ($exist != null)
			$exist->update($data);
		else if ($exist == null)
		{
			$timesheetData = new TimesheetData($data);
			$timesheetData->worker()->associate(User::find($data['worker']));
			$timesheetData->timesheet()->associate($timesheet);
			$timesheetData->save();
		}

		return response('OK', 200);
	}

	function clearData(Request $request, $id)
	{
		$data = $request->all();
		$validated = $request->validate([
			'worker' => 'required',
			'date' => 'required|before:tomorrow'
		]);

		$exist = TimesheetData::where([
			'timesheet_id' => $id,
			'date' => $data['date'],
			'worker_id' => $data['worker'],
		])->first();

		if ($exist)
			$exist->delete();

		return response('OK', 200);
	}
}
