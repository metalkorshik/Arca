<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TimesheetData extends Model
{
	protected $table = 'timesheets_data';

	public $timestamps = false;

	protected $fillable = [
		'date', 'hourse', 'comment', 'business',
		'premium', 'retention'
	];

	public function timesheet()
	{
		return $this->belongsTo(Timesheet::class);
	}

	public function worker()
	{
		return $this->belongsTo(User::class);
	}
}