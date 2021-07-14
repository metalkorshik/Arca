<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
	protected $table = 'contracts';

    protected $fillable = [
		'legal_entity', 'title', 'offer_number', 'version', 'customer_fname',
		'customer_lname', 'customer_mname', 'phone', 'email', 'date',
		'comment', 'status'
	];

	const COMMERCIAL = 0;
	const ACTIVE = 1;
	const CLOSE = 2;

	public function getProfitAttribute()
	{
		return $this->getProfit();
	}

	public function author()
	{
		return $this->belongsTo(User::class);
	}

	public static function getType($type)
	{
		$result = 0;
		switch (strtolower($type))
		{
			case 'active':
				$result = 1;
			break;
			case 'close':
				$result = 2;
			break;
		}

		return $result;
	}

	public function customerFio()
	{
		return "{$this->customer_lname} {$this->customer_fname} {$this->customer_mname}";
	}

	public function costs()
    {
    	return $this->hasMany(ContractCost::class);
	}

	public function staff()
    {
    	return $this->hasMany(ContractStaff::class);
	}

	public function comments()
    {
    	return $this->hasMany(ContractComment::class);
	}

	public function getThreadedComments()
    {
        return $this->comments()->with('author')->get()->threaded();
    }

	/* public function planner()
    {
    	return $this->belongsTo(User::class);
	}

	public function responsible()
    {
    	return $this->belongsTo(User::class);
	} */

	public function timesheet()
    {
    	return $this->hasOne(Timesheet::class);
	}

	public function getEngineers()
	{
		$staff = $this->staff()->where([
			['contract_id', $this->id],
			['type', 'engineer']
		])->get();

		return $staff;
		// return $staff ? $staff->user : null;
	}

	public function getPlanner()
	{
		$staff = $this->staff()->where([
			['contract_id', $this->id],
			['type', 'planner']
		])->first();

		return $staff ? $staff->user : null;
	}
	
	public function getWorkers()
	{
		$staff = $this->staff()->where([
			['contract_id', $this->id],
			['type', 'worker']
		])->get();

		return $staff;
	}

	public function getSpent()
	{
		$sum = 0;
		foreach ($this->costs as $cost)
			$sum += $cost->getSpent();
		return $sum;
	}

	public function getProfit()
	{
		$sum = 0;
		foreach ($this->costs as $cost)
			$sum += $cost->getProfit();
		return $sum;
	}

	public function isUnemployedStaff($worker_id)
	{
		return $this->timesheet->isUnemployedStaff($worker_id);
	}
}