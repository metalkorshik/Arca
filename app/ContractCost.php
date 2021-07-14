<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class ContractCost extends Model
{
	protected $table = 'contract_costs';

    protected $fillable = [
		'title', 'sum'
	];

	public function contract()
    {
		return $this->belongsTo(Contract::class);
	}

	public function author()
	{
		return $this->belongsTo(User::class);
	}

	public function details()
    {
		return $this->hasMany(CostDetail::class);
	}

	public function getSpent()
	{
		return $this->details()->sum('sum');
	}

	public function getProfit()
	{
		return $this->sum - DB::select('select SUM(`sum`) as \'sum\' from contract_cost_details where contract_cost_id = :id', ['id' => $this->id])[0]->sum;
	}
}
