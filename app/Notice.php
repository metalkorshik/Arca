<?php

namespace App;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
  	protected $table = 'notices';
	public $timestamps = false;

	protected $fillable = [
		'user_id', 'title', 'content', 'status'
	];

	protected $casts = [
		'created_at'  => 'date:m/d/Y h:i'
	];

    public function user()
    {
    	return $this->belongsTo(User::class);
	}

	public static function getUnread()
	{
		return self::whereHas('user', function ($query) {
				return $query->where('id', Auth::id());
			})
			->where('status', 0)
			->count();
	}

	// public static function create($user, $title, $content)
	// {
	// 	$notice = new VoyagerNotice([
    //         'title' => $title,
    //         'content' => $content
	// 	]);
	// 	$notice->user()->associate($user);
	// 	$notice->save();

	// 	return $notice;
	// }
}
