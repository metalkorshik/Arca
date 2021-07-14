<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

use App\Role;
use App\User;
use App\UserInfo;
use App\UserContact;
use App\UserDocument;
use App\UserPrepayment;
use App\Contract;
use App\ContractStaff;
use App\Payment;
use App\Flat;
use App\FlatLodger;
use Illuminate\Validation\ValidationException;

class StaffController extends Controller
{
    public function index(Request $request)
    {
        $data = $request->all();

        $countOnPage = 10;

        $rules = [
			'full_name' => [
				'is_name' => true,
				'keys' => ['lname', 'fname', 'mname'],
				'cond' => 'like',
				's' => ['%', '%']
            ],
            'role' => [
                'key' => 'role',
				'cond' => '='
            ],
            'rate_from' => [
                'key' => 'rate',
                'cond' => '>='
            ],
            'rate_to' => [
                'key' => 'rate',
                'cond' => '<='
            ]
		];

		$query = User::query();
		$staff = $this->filter($rules, $data, $query)->where('role', '!=', 'root');

        if (isset($data['filters']['show'])) {
            if ($data['filters']['show'] == 'all' || $data['filters']['show'] == null) {
                $countOnPage = $staff->count();
            } else {
                $countOnPage = $data['filters']['show'];
            }
        }

        if (isset($data['sort'])) {
            foreach ($data['sort'] as $field => $type) {
                if (isset($allowSort[$field]) && in_array($type, ['asc', 'desc'])) {
                    $staff = $staff->orderBy($allowSort[$field], $type);
                }
            }
        }
        $staff = $staff->groupBy('id')->paginate($countOnPage)->appends(request()->query());

        return view('staff.index', [
            'staff' => $staff,
            'roles' => Role::where('role', '!=', 'root')->orderBy('sort_position', 'ASC')->get(),
            'filters' => $data['filters'] ?? null,
            'sort' => isset($data['sort']) ? $data['sort'] : null
        ]);
    }

    public function create()
    {
        $documentsType = [
            'Удостоверение для работ с сосудами под давлением',
            'Охрана труда',
            'Пожарно технический минимум',
            'Электробезопасность',
            'Удостоверение для работ на высоте',
            'Эксплуатация погрузочной техники (погрузчик штабелер)',
            'Рабочий люльки',
            'Машинист подъемника',
            'Сварочные работы',
            'Стропальщик',
            'Такелажные работы',
            'Общие вопросы промышленной безопасности (А1)',
            'Эксплуатация грузоподъемной техники (краны подъемники)'
        ];

        // to remove
        $zip = new \ZipArchive;

        return view('staff.create', [
            'roles' => Role::where('role', '!=', 'root')->orderBy('sort_position', 'ASC')->get(),
            'documentsType' => $documentsType,
            'temp_path' => 'temp_' . time()
        ]);
    }

    public function uploadDocuments(Request $request)
    {
        $data = $request->all();

        if (! file_exists(User::getStorage() . $data['temp_path'])) {
            \File::makeDirectory(User::getStorage() . $data['temp_path']);
        }

        $result = [];
        $path = User::getStorage() . $data['temp_path'];
        $fileCounter = 0;

        foreach ($request->all()['documents'] as $document) {
            $extenstion = $document->guessExtension();

            if ($extenstion == 'zip') {
                $document->move($path, 'archive.zip');

                $zip = new \ZipArchive();
                $files = $zip->open($path . '/archive.zip');
                $zipFiles = [];

                for ($i = 0; $i < $zip->numFiles; ++$i) {
                    $info = $zip->statIndex($i);

                    if (substr($info['name'], 0, 9) === '__MACOSX/') {
                        continue;
                    }

                    $allowExt = ['jpg', 'jpeg', 'pdf', 'png'];

                    if (! in_array(pathinfo($info['name'], PATHINFO_EXTENSION), $allowExt)) {
                        continue;
                    }

                    $zipFiles[] = $info['name'];
                }

                $zip->extractTo($path);
                $zip->close();

                foreach ($zipFiles as $file) {
                    $extenstion = pathinfo($file, PATHINFO_EXTENSION);
                    $name = $fileCounter . time() . '.' . $extenstion;
                    \rename("$path/$file", "$path/$name");

                    $result[$fileCounter]['original'] = $file;
                    $result[$fileCounter]['name'] = $name;
                    ++$fileCounter;
                }
                \unlink($path . '/archive.zip');
                continue;
            } else {
                $name = $fileCounter . time() . '.' . $extenstion;
                $document->move(User::getStorage() . $data['temp_path'], $name);
                $result[$fileCounter]['original'] = pathinfo($document->getClientOriginalName(), PATHINFO_FILENAME);
                $result[$fileCounter]['name'] = $name;
                ++$fileCounter;
            }
        }

        return $result;
    }

    public function removeDocument(Request $request)
    {
        $data = $request->all();
        unlink(User::getStorage() . $data['temp_path'] . '/' . $data['file_path']);

        return response('OK', 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        if (! file_exists(User::getStorage() . $data['temp_path'])) {
            \File::makeDirectory(User::getStorage() . $data['temp_path']);
        }

        if ($request->file('photo')) {
            if (isset($data['photo_path'])) {
                unlink(User::getStorage() . $data['temp_path'] . '/' . $data['photo_path']);
            }

            $fileName = time() . '.' . $request->file('photo')->guessExtension();
            $request->file('photo')->move(User::getStorage() . $data['temp_path'], $fileName);
            $request->merge(['photo_path' => $fileName]);
        }

        /* Update data */
        $data = $request->all();

        $validated = $request->validate([
            'fname' => 'required|max:20',
            'lname' => 'required|max:20',
            'mname' => 'required|max:20',
            'phones.*' => 'required|max:16',
            'email' => 'email',
            'role' => 'required',
            'email' => 'nullable|email|unique:users',
            'password' => 'confirmed'
        ]);

        DB::beginTransaction();

        if (isset($data['birthday'])) {
            $data['birthday'] = $this->getSqlDate($data['birthday']);
        }

        if (isset($data['password']) && $data['password'] != '') {
            $data['password'] = \Hash::make($data['password']);
        }

        $user = new User($data);
        $user->save();
        $userInfo = new UserInfo($data);
        $user->info()->save($userInfo);

        foreach ($data['phones'] as $phone) {
            $contact = new UserContact();
            $contact->value = $phone;
            $user->contacts()->save($contact);
        }

        if (isset($data['documents'])) {
            foreach ($data['documents'] as $document) {
                $document['validity'] = $this->getSqlDate($document['validity']);
                $document['date_of_issue'] = $this->getSqlDate($document['date_of_issue']);
                $udocument = new UserDocument($document);
                $user->documents()->save($udocument);
            }
        }

        if(file_exists(User::getStorage() . $user->id))
        {
            $files = glob(User::getStorage() . $data['temp_path'] . '/*');

            foreach ($files as $file) {
                $name = basename($file);
                rename($file, User::getStorage() . $user->id . "/$name");
            }
        }
        else
        {
            rename(
                User::getStorage() . $data['temp_path'],
                User::getStorage() . $user->id
            );
        }

        DB::commit();

        return redirect()->route('staff');
    }

    public function showInfo(User $user)
    {
        $workingHours = [];
        $workingHours['today'] = \App\TimesheetData::where('date', date('Y.m.d'))->where('worker_id', $user->id)->sum('hourse');
        $workingHours['week'] = \App\TimesheetData::where('date', '>=', date('Y.m.d', strtotime('this week', time())))->where('worker_id', $user->id)->sum('hourse');
        $workingHours['month'] = \App\TimesheetData::where('date', '>=', date('Y.m.01'))->where('worker_id', $user->id)->sum('hourse');
        $is_visible_rate = \Auth::user()->can('view_rate', $user);
        $documents = [];

        foreach ($user->documents()->get() as $item) {

            $document = $item->toArray();
            $document['path'] = $item->getUrl();
            $documents[] = $document;

        }

        $documents = old('documents', $documents);

        return view('staff.show-info', [
            'user' => $user,
            'workingHours' => $workingHours,
            'roles' => Role::where('role', '!=', 'root')->orderBy('sort_position', 'ASC')->get(),
            'temp_path' => 'temp_' . time(),
            'documents' => $documents,
            'is_visible_rate' => $is_visible_rate
        ]);
    }

    public function showCalendar(Request $request, User $user)
    {
        $data = $request->all();

        $visibleMonth = isset($data['month']) ? $data['month'] : date('m', time());
        $visibleYear = isset($data['year']) ? $data['year'] : date('Y', time());
        $dayInMonth = date('t', strtotime("$visibleYear-$visibleMonth-1"));

        $contracts = Contract::where('status', Contract::ACTIVE)
            ->whereHas('staff', function (Builder $query) use ($user) {
                $query->where('user_id', $user->id);
            });

        $contractsId = '\'' . implode('\', \'', $contracts->pluck('id')->toArray()) . '\'';
        $contracts = $contracts->get();

        $duration = [];
        if ($contracts->count() != 0) {
            /* FIND LONGER DURATION */
            $contract = Contract::fromQuery("SELECT * FROM `contracts`
				WHERE `date` = (SELECT MIN(`date`) FROM `contracts` WHERE `id` IN ($contractsId))")->first();
            $start = (new \DateTime($contract->date))->modify('first day of this month');
            $end = (new \DateTime(date('Y-m-d', time())))->modify('first day of next month');
            $interval = \DateInterval::createFromDateString('1 month');
            $period = new \DatePeriod($start, $interval, $end);
            $duration['fewYear'] = false;
            $currentYear = date('Y', time());
            foreach ($period as $dt) {
                $duration['date'][] = [
                    'm' => $dt->format('m'),
                    'y' => $dt->format('Y')
                ];
                if (!$duration['fewYear'] && $currentYear != $dt->format('Y')) {
                    $duration['fewYear'] = true;
                }
            }
        }
        /*  */

        return view('staff.show-calendar', [
            'user' => $user,
            'contracts' => $contracts,
            'duration' => $duration,
            'days' => $dayInMonth,
            'visibleMonth' => $visibleMonth,
            'visibleYear' => $visibleYear,
        ]);
    }

    public function showAnother(User $user)
    {
        return view('staff.show-another', [
            'user' => $user,
            'flats' => Flat::get()
        ]);
    }

    public function update(Request $request, User $user)
    {
        if ($request->file('photo')) {
            // TO DO remove old image
            // unlink(User::getStorage() . $user->id . '/' . $data['photo_path']);
            $fileName = time() . '.' . $request->file('photo')->guessExtension();
            $request->file('photo')->move(User::getStorage() . $user->id, $fileName);
            $request->merge(['photo_path' => $fileName]);
        }

        $data = $request->all();
      
        $validated = $request->validate([
            'fname' => 'required|max:20',
            'lname' => 'required|max:20',
            'mname' => 'required|max:20',
            'phones.*' => 'required|max:16',
            'role' => 'required',
            'passport_seria' => 'nullable|size:4',
            'passport_number' => 'nullable|size:6',
            'password' => 'confirmed'
        ]);

        if ($user->role != $data['role'] && $user->hasContracts() != 0) {
            throw ValidationException::withMessages(['id' => 'У пользователя есть проект']);
        }

        if (isset($data['birthday'])) {
            $data['birthday'] = $this->getSqlDate($data['birthday']);
        }

        if (isset($data['password']) && $data['password'] != '') {
            $data['password'] = \Hash::make($data['password']);
        }
        else {
            unset($data['password']);
        }

        $user->update($data);
        $userInfo = UserInfo::find($user->info->id);
        $userInfo->update($data);

        $user->contacts()->delete();
        foreach ($data['phones'] as $phone) {
            $contact = new UserContact();
            $contact->value = $phone;
            $user->contacts()->save($contact);
        }

        $currentDocuments = [];

        if (isset($data['documents'])) {

            foreach ($data['documents'] as $document) {

                if($document['id'])
                    $currentDocuments[] = $document['id'];

            }

        }

        $documents = $user->documents()->get()->toArray();

        for ($i=0; $i < count($documents); $i++) { 

            $document = $documents[$i];

            if(!in_array($document['id'], $currentDocuments))
                UserDocument::findOrFail($document['id'])->delete();

        }

        if (isset($data['documents'])) {

            foreach ($data['documents'] as $document) {

                $document['validity'] = $this->getSqlDate($document['validity'], '/', '-');
                $document['date_of_issue'] = $this->getSqlDate($document['date_of_issue'], '/', '-');

                if($document['id'])
                {
                    $udocument = UserDocument::findOrFail($document['id']);
                    $udocument->update($document);
                }
                else
                {
                    $udocument = new UserDocument($document);
                    $user->documents()->save($udocument);
                }
            }
        }

        if(file_exists(User::getStorage() . $user->id))
        {
            $files = glob(User::getStorage() . $data['temp_path'] . '/*');

            foreach ($files as $file) {
                $name = basename($file);
                rename($file, User::getStorage() . $user->id . "/$name");
            }
        }
        else
        {
            rename(
                User::getStorage() . $data['temp_path'],
                User::getStorage() . $user->id
            );
        }

        return redirect()->route('staff-info', $user->id);
    }

    public function addPrize(Request $request, User $user)
    {
        $data = $request->all();

        $validated = $request->validate([
            'sum' => 'required|numeric|min:1',
        ]);

        $payment = new Payment();
        $payment->type = Payment::PRIZE;
        $payment->sum = $data['sum'];
        $payment->user()->associate($user);
        $payment->save();

        return redirect()->route('staff-calendar', $user->id);
    }

    public function addSalary(Request $request, User $user)
    {
        $data = $request->all();

        $validated = $request->validate([
            'sum' => 'required|numeric|min:1',
        ]);

        $payment = new Payment();
        $payment->type = Payment::SALARY;
        $payment->sum = $data['sum'];
        $payment->user()->associate($user);
        $payment->save();

        return redirect()->route('staff-calendar', $user->id);
    }

    public function removePayment(Request $request, Payment $payment)
    {
        $payment->delete();
        return response('OK', 200);
    }

    public function addFlat(Request $request, User $user)
    {
        $data = $request->all();

        $validated = $request->validate([
            'flat' => 'required',
            'entrance' => 'required',
            'leaving' => 'required'
        ]);

        $flat = Flat::find($data['flat']);
        if (!$flat) {
            return redirect()->route('staff-another', $user->id);
        }

        /* REMOVE OLDER FLAT */
        $lodger = FlatLodger::whereHas('lodger', function (Builder $query) use ($user) {
            $query->where('id', $user->id);
        })
            ->first();
        if ($lodger) {
            $lodger->delete();
        }
        /*  */

        $data['entrance'] = $this->getSqlDate($data['entrance']);
        $data['leaving'] = $this->getSqlDate($data['leaving']);

        $flatLodger = new FlatLodger($data);
        $flatLodger->flat()->associate($flat);
        $flatLodger->lodger()->associate($user);
        $flatLodger->save();

        return redirect()->route('staff-another', $user->id);
    }

    public function removeFlat(Request $request, $user, $flat)
    {
        $lodger = FlatLodger::whereHas('lodger', function (Builder $query) use ($user) {
            $query->where('id', $user);
        })
            ->whereHas('flat', function (Builder $query) use ($flat) {
                $query->where('id', $flat);
            })
            ->first();

        if (! $lodger) {
            #to do add error
            return redirect()->route('staff-another', $user);
        }

        $lodger->delete();
        return redirect()->route('staff-another', $user);
    }

    public function removeMultiple(Request $request)
    {
        $data = $request->all();
        $errors = [];

        if (isset($data['users'])) {
            $toDelete = [];
            foreach ($data['users'] as $user) {
                $user = User::find($user);
                if ($user) {
                    if ($user->hasContracts($user) == 0) {
                        $toDelete[] = $user->id;
                    } else {
                        $errors[$user->id] = "У пользователя {$user->getFio()} есть проект";
                    }
                }
            }

            User::destroy($toDelete);
        }

        return redirect()->route('staff')->withErrors($errors);
    }

    public function addPrepayment(Request $request, User $user)
	{
		$request->validate([
            'prepayment.value' => 'required|numeric|min:0',
            'prepayment.month' => 'required|integer|between:1,31',
            'prepayment.year' => 'required|string|min:4|max:4',
        ]);

        $prepayment = $user->prepayments()->where([
            'month' => $request->input('prepayment.month'),
            'year' => $request->input('prepayment.year')
        ])->first();

        if ($prepayment == null)
            $user->prepayments()->save(
                new UserPrepayment($request->input('prepayment'))
            );
        else
            $prepayment->update($request->input('prepayment'));

        return response('OK', 200);
	}
}
