<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlatRent extends Model
{
	protected $table = 'flat_rents';

    protected $fillable = [
		'flat_id', 'contract_id', 'cost'
	];

	public function flat()
	{
		return $this->belongsTo(Flat::class);
	}

    public function contract()
	{
		return $this->belongsTo(Contract::class);
	}
}
