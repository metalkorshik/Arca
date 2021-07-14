<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
	protected $table = 'payment_history';

	public $timestamps = false;

    protected $fillable = [
		'type', 'date', 'sum'
	];

	const PRIZE = 'prize';
	const SALARY = 'salary';

	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
