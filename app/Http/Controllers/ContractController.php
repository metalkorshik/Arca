<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\User;
use App\Contract;
use App\Flat;
use App\Timesheet;
use App\ContractCost;
use App\ContractStaff;
use App\CostDetail;
use App\ContractComment;

class ContractController extends Controller
{
	function index(Request $request)
	{
		$data = $request->all();
		$status = isset($data['status']) ? $data['status'] : 'active';
		$countOnPage = 10;
		
		$rules = [
			'full_name' => [
				'is_name' => true,
				'keys' => ['customer_lname', 'customer_fname', 'customer_mname'],
				'cond' => 'like',
				's' => ['%', '%']
            ],
            'date_from' => [
				'is_date' => true,
                'key' => 'date',
                'cond' => '>='
            ],
            'date_to' => [
				'is_date' => true,
                'key' => 'date',
                'cond' => '<='
            ]
		];

		$allowSort = [
			'customer' => 'legal_entity',
			'customer_agent' => 'customer_lname',
			'contract_number' => 'offer_number',
			'date' => 'date',
			'title' => 'title',
			'sum' => 'sum',
			'engineer' => 'engineer'
		];

		$query = Contract::query();
		$contracts = $this->filter($rules, $data, $query);

		if (isset($data['filters']['show'])) {
            if ($data['filters']['show'] == 'all' || $data['filters']['show'] == null) {
                $countOnPage = $contracts->count();
            } else {
                $countOnPage = $data['filters']['show'];
            }
        }

		if (! Auth::user()->can('viewAny', Contract::class))
			$contracts = $contracts->whereHas('staff', function ($query) {
				$query->where('user_id', Auth::user()->id);
			});

		$contracts = $contracts->get();
		
		if (isset($data['sort']))
		{
			foreach($data['sort'] as $field => $type)
			{
				if (isset($allowSort[$field]) && in_array($type, ['asc', 'desc']))
				{
					if($field == 'sum')
					{
						if($type == 'asc')
							$contracts = $contracts->sortBy(function ($contract) {
								return $contract->costs()->count() ? $contract->costs()->first()->sum : 0;
							});
						else 
							$contracts = $contracts->sortByDesc(function ($contract) {
								return $contract->costs()->count() ? $contract->costs()->first()->sum : 0;
							});
					}
					if($field == 'engineer')
					{
						if($type == 'asc')
							$contracts = $contracts->sortBy(function ($contract) {
								return $contract->getEngineers()->count() ? $contract->getEngineers()->first()->user->lname : '';
							});
						else 
							$contracts = $contracts->sortByDesc(function ($contract) {
								return $contract->getEngineers()->count() ? $contract->getEngineers()->first()->user->lname : '';
							});
					}
					
					else 
						$contracts = ($type == 'asc') ? $contracts->sortBy($allowSort[$field]) : $contracts->sortByDesc($allowSort[$field]);
				}
			}
		}

		$contracts = $this->paginate($contracts, $countOnPage)
			->appends(request()->query());

		$contracts->setPath('contracts');

		return view('contract.index', [
			'contracts' => $contracts,
			'status' => $status,
			'filters' => $data['filters'] ?? null,
			'sort' => isset($data['sort']) ? $data['sort'] : null
		]);
	}

	function paginate($items, $perPage = 15, $page = null, $options = [])
	{
		$page = $page ?: (\Illuminate\Pagination\Paginator::resolveCurrentPage() ?: 1);
		$items = $items instanceof \Illuminate\Support\Collection ? $items : \Illuminate\Support\Collection::make($items);
		return new \Illuminate\Pagination\LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
	}

	function show(Request $request, Contract $contract)
	{
		$data = $request->all();

		if (isset($data['filters']))
		{
			$filters = [];

			if (isset($data['filters']['date_from']))
				$filters[] = ['date', '>', $this->getSqlDate($data['filters']['date_from'])];
			if (isset($data['filters']['date_to']))
				$filters[] = ['date', '<', $this->getSqlDate($data['filters']['date_to'])];

			$contract->costs = $contract->costs()->whereHas('details', function ($query) use ($filters) {
				$query->where($filters);
			})->get();
			foreach ($contract->costs as $cost)
				$cost->details = $cost->details()->where($filters)->get();
		}

		return view('contract.show', [
			'contract' => $contract,
			'comments' => $contract->getThreadedComments(),
			'filters' => isset($data['filters']) ? $data['filters'] : null
		]);
	}

	function create()
	{
		$flats = Flat::all();

		return view('contract.create', [
			'engineers' => User::getByRoles(['engineer', 'admin', 'fold_manager', 'supply_manager']),
			'planners' => User::getByRole('planner'),
			'staff' => User::getStaff(),
			'flats' => $flats,
		]);
	}

	function store(Request $request)
	{
		$data = $request->all();
		$validated = $request->validate([
			'title' => 'required|max:70',
			'customer_fname' => 'required|max:20',
			'customer_lname' => 'required|max:20',
			'email' => 'nullable|email|max:30',
			'date' => 'required',
			'costs.title' => 'max:30',
			'costs.sum' => 'numeric',
			'engineers' => 'required|array|min:1'
		]);

		DB::beginTransaction();

		$data['date'] = $this->getSqlDate($data['date']);
		$data['version'] = 1;//substr($data['offer_number'], -2);

		$contract = new Contract($data);
		$contract->author()->associate(Auth::user());
		$contract->save();

		if (isset($data['costs']))
			foreach ($data['costs'] as $cost)
			{
				$contractCost = new ContractCost($cost);
				$contractCost->author()->associate(Auth::user());
				$contract->costs()->save($contractCost);
			}


		$this->initStaff($contract, $data);

		DB::commit();

		return redirect()->route('contracts');
	}

	private function initStaff($contract, $data, $removeCurrent = false)
	{
		$removeStaff = [];

		if ($removeCurrent)
		{
			foreach ($contract->staff()->get() as $staff) {

				if($contract->isUnemployedStaff($staff->user->id))
					$staff->delete();

			}
		}

		if (isset($data['planner']))
			$this->addStaff($contract, $data['planner'], ContractStaff::PLANNER);

		if (isset($data['engineers']))
		{
			foreach ($data['engineers'] as $staff)
				$this->addStaff($contract, $staff, ContractStaff::ENGINEER);
		}

		if(isset($data['staff']))
		{
			foreach ($data['staff'] as $staff)
				$this->addStaff($contract, $staff, ContractStaff::WORKER);
		}

		return $removeStaff;
	}

	private function addStaff($contract, $id, $type)
	{
		if($contract->staff()->where('user_id', $id)->count() == 0)
		{
			$contractStaff = new ContractStaff();
			$contractStaff->type = $type;
			$contractStaff->user()->associate(User::find($id));
			$contract->staff()->save($contractStaff);
		}
	}

	function edit(Contract $contract)
	{
		return view('contract.edit', [
			'contract' => $contract,
			'engineers' => User::getByRoles(['engineer', 'admin', 'fold_manager', 'supply_manager']),
			'planners' => User::getByRole('planner'),
			'staff' => User::getStaff(),
		]);
	}

	function update(Request $request, Contract $contract)
	{
		$data = $request->all();
		$validated = $request->validate([
			'title' => 'required|max:70',
			'customer_fname' => 'required|max:20',
			'customer_lname' => 'required|max:20',
			'email' => 'nullable|email|max:30',
			'date' => 'required',
			'costs.title' => 'max:30',
			'costs.sum' => 'numeric',
			'engineers' => 'required|array|min:1'
		]);

		$data['date'] = $this->getSqlDate($data['date']);
		$data['version'] = 1;//substr($data['offer_number'], -2);

		$contract->update($data);

		if (! isset($data['planner']) && $contract->getPlanner() != null)
			$data['planner'] = $contract->getPlanner()->id;

		if (! isset($data['engineers']) && $contract->getEngineers()->count() != 0)
		{
			$engineers = [];

			foreach ($contract->getEngineers() as $engineer) 
				$engineers = $engineer->id;

			$data['engineers'] = $engineers;
		}

		$res = $this->initStaff($contract, $data, true);

		return redirect()->route('contracts');
	}

	function remove(Request $request, $id)
	{
		$contract = Contract::find($id);

		if ($contract->status != Contract::ACTIVE)
			$contract->delete();

		return response('OK', 200);
	}

	function accessCommercial(Request $request, $id)
	{
		$contract = Contract::find($id);

		if ($contract == null)
			throw ValidationException::withMessages(['id' => 'Not found']);

		if ($contract->status != Contract::ACTIVE)
		{
			$timesheet = new Timesheet();
			$contract->timesheet()->save($timesheet);

			$contract->status = Contract::ACTIVE;
			$contract->save();
		}

		return response('OK', 200);
	}

	function open(Request $request, $id)
	{
		$contract = Contract::find($id);

		if ($contract == null)
			throw ValidationException::withMessages(['id' => 'Not found']);

		if ($contract->status == Contract::CLOSE)
		{
			$timesheet = new Timesheet();
			$contract->timesheet()->save($timesheet);

			$contract->status = Contract::ACTIVE;
			$contract->save();
		}

		return response('OK', 200);
	}

	function close(Request $request, $id)
	{
		$contract = Contract::find($id);

		if ($contract->status != Contract::CLOSE)
		{
			$contract->status = Contract::CLOSE;
			$contract->save();
		}

		return response('OK', 200);
	}

	function addConsumption(Request $request, $id)
	{
		$data = $request->all();

		$validated = $request->validate([
			'title' => 'required|max:50',
			'sum' => 'required|numeric|min:0',
		]);

		$contract = Contract::find($id);

		if ($contract == null)
			throw ValidationException::withMessages(['id' => 'Not found']);

		$contractCost = new ContractCost($data);
		$contract->costs()->save($contractCost);

		return response()->json(['id' => $contractCost->id]);
	}

	function getConsumption(Request $request, $id)
	{
		return ContractCost::find($id);
	}

	function updateConsumption(Request $request, $id)
	{
		$data = $request->all();

		$validated = $request->validate([
			'title' => 'required|max:50',
			'sum' => 'required|numeric|min:0',
		]);

		$cost = ContractCost::find($id);

		if ($cost == null)
			throw ValidationException::withMessages(['id' => 'Not found']);

		$cost->update($data);

		return response()->json(['id' => $cost->id]);
	}

	function addConsumptionDeatil(Request $request, $id)
	{
		$data = $request->all();

		$validated = $request->validate([
			'sum' => 'required|numeric|min:0',
			'account_number' => 'required|max:50',
			'counterparty' => 'required|max:50',
			'nomenclature' => 'required|max:50',
			'date' => 'required',
		]);

		$cost = ContractCost::find($id);

		if ($cost == null)
			throw ValidationException::withMessages(['id' => 'Not found']);

		$data['date'] = $this->getSqlDate($data['date']);
		$costDetail = new CostDetail($data);

		$cost->details()->save($costDetail);

		return $costDetail;
	}

	function addComment(Request $request, $id)
	{
		$data = $request->all();

		$validated = $request->validate([
			'content' => 'required',
		]);

		$contract = Contract::find($id);

		if ($contract == null)
			throw ValidationException::withMessages(['id' => 'Not found']);

		$comment = new ContractComment($data);
		$comment->author()->associate(\Auth::user());
		if (isset($data['replyTo']))
			$comment->parent()->associate(ContractComment::find($data['replyTo']));
		$contract->comments()->save($comment);

		return $comment;
	}

	function editComment(Request $request, $id)
	{
		$data = $request->all();

		$validated = $request->validate([
			'content' => 'required',
		]);

		$comment = ContractComment::find($id);

		if ($comment == null)
			throw ValidationException::withMessages(['id' => 'Not found']);

		$comment->update($data);

		return $comment;
	}
}
