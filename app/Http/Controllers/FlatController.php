<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Flat;
use App\FlatCost;

class FlatController extends Controller
{
	function index(Request $request)
	{
		$data = $request->all();

		$rawFilters = null;

		$allowFilter = [
			'address' => [
				'address', 'like'
			]
		];

		$filters = [];
		if (isset($data['filters']))
		{
			$rawFilters = $data['filters'];

			foreach($data['filters'] as $key => $value)
				if (isset($allowFilter[$key]) && trim($value) != '')
				{
					$search = $value;
					if ($allowFilter[$key][1] == 'like')
						$search = "%$value%";
					$filters[] = [$allowFilter[$key][0], $allowFilter[$key][1], $search];
				}
		}

		$flats = Flat::where($filters)->paginate(15);

		return view('flat.index', [
			'flats' => $flats,
			'filters' => $rawFilters
		]);
	}

	function get(Request $request, Flat $flat)
	{
		//$flat = Flat::with('lodgers', 'lodgers.lodger')->find($id);
		$flat = $flat::with('lodgers', 'lodgers.lodger')->find($flat->id);
		return $flat;
	}

	function store(Request $request)
	{
		$validated = $request->validate([
			'address' => 'required|max:100',
			'cost' => 'required|numeric'
		]);

		$flat = new Flat($request->all());
		$flat->save();

		FlatCost::create([
			'flat_id' => $flat->id,
			'cost' => $flat->cost,
			'date' => $this->getFirstMonthSqlDate()
		]);

		return redirect()->route('flats');
	}

	function update(Request $request, Flat $flat)
	{
		$validated = $request->validate([
			'address' => 'required|max:100',
			'cost' => 'required|numeric'
		]);

		//$flat = Flat::find($id);
		$flat->update($request->all());
		$cost = $flat->costs->where('date', $this->getFirstMonthSqlDate())->first();

		if($cost)
			$cost->update(['cost' => $flat->cost]);

		return ['id' => $flat->id];
	}

	function removeMultiple(Request $request)
	{
		$data = $request->all();
		$errors = [];

		if (isset($data['flats']))
		{
			$toDelete = [];
			foreach($data['flats'] as $flat)
			{
				$flat = Flat::find($flat);
				if ($flat)
				{
					if ($flat->lodgers->count() == 0)
						$toDelete[] = $flat->id;
					else
						$errors[$flat->id] = "В квартире по адресу {$flat->address} есть жильцы";
				}
			}

			Flat::destroy($toDelete);
		}

		return redirect()->route('flats')->withErrors($errors);
	}
}
