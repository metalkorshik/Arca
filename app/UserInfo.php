<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
	protected $table = 'users_info';

    protected $fillable = [
		'birthday', 'passport_seria', 'passport_number',
		'height', 'photo_path', 'shoe_size', 'clothing_size'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
