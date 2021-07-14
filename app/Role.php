<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
	protected $table = 'roles';

    protected $fillable = [
		'role', 'can_auth', 'title'
	];

	public static function get()
	{
		return Role::whereNotIn('role', ['root'])->get();
	}
}
