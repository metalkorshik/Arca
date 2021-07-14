<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlatLodger extends Model
{
	protected $table = 'flat_lodgers';

	protected $fillable = [
		'entrance', 'leaving'
	];

	public function flat()
	{
		return $this->belongsTo(Flat::class);
	}

	public function lodger()
	{
		return $this->belongsTo(User::class);
	}
}
