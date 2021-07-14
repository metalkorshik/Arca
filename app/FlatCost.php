<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlatCost extends Model
{
	protected $table = 'flat_costs';

    protected $fillable = [
		'flat_id', 'cost'
	];

	public function flat()
	{
		return $this->belongsTo(Flat::class);
	}
}
