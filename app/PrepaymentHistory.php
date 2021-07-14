<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PrepaymentHistory extends Model
{
	protected $table = 'prepayment_history';

	public $timestamps = false;

    protected $fillable = [
		'value'
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
