<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Timesheet extends Model
{
	protected $table = 'timesheets';

	public $timestamps = false;

	protected $fillable = [];

	public function data()
	{
		return $this->hasMany(TimesheetData::class);
	}

	/* id - user_id */
	public function getWorker($id)
	{
		return $this->data()->where('worker_id', $id)->get();
	}

	public function isUnemployedStaff($worker_id)
	{
		return $this->getWorker($worker_id)->count() <= 0;
	}
	
	public function contract()
	{
		return $this->belongsTo(Contract::class);
	}
}