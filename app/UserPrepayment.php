<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserPrepayment extends Model
{
	protected $table = 'user_prepayments';

    protected $fillable = [
		'value', 'month', 'year'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
