<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CostDetail extends Model
{
	protected $table = 'contract_cost_details';

    protected $fillable = [
		'date', 'sum', 'account_number',
		'counterparty', 'nomenclature'
	];

	public function cost()
    {
		return $this->belongsTo(ContractCost::class);
	}
}
