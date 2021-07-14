<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RateHistory extends Model
{
	protected $table = 'rate_history';

	public $timestamps = false;

    protected $fillable = [
		'rate'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function author()
	{
		return $this->belongsTo(User::class);
	}
}
