<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserContact extends Model
{
	protected $table = 'users_contacts';

	public $timestamps = false;

    protected $fillable = [
		'type', 'value'
	];

	public function user()
    {
		return $this->belongsTo(User::class);
	}
}
