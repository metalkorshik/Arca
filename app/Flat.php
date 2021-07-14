<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flat extends Model
{
	protected $table = 'flats';

    protected $fillable = [
		'address', 'cost'
	];

	public function lodgers()
	{
		return $this->hasMany(FlatLodger::class);
	}

	public function costs()
    {
        return $this->hasMany(FlatCost::class);
    }
}
