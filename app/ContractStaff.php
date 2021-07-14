<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContractStaff extends Model
{
	protected $table = 'contract_staff';

	protected $fillable = [
		'user_id'
	];

	const WORKER = 'worker';
	const ENGINEER = 'engineer';
	const PLANNER = 'planner';

	public function contract()
    {
		return $this->belongsTo(Contract::class);
	}

	public function user()
    {
		return $this->belongsTo(User::class);
	}
}
