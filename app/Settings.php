<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
	protected $table = 'settings';

    protected $fillable = [
		'key', 'value'
	];

	public static function get($key)
	{
		$option = Settings::where('key', $key)->first();
		return $option ? $option->value : null;
	}

	public static function set($key, $value)
	{
		$option = Settings::where('key', $key)->first();
		$option->value = $value;
		$option->save();
		return $option ? true : false;
	}
}
