<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserNote extends Model
{
	protected $table = 'user_notes';

    protected $fillable = [
		'content', 'color'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
