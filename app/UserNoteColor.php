<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserNoteColor extends Model
{
	protected $table = 'user_notes_colors';

    protected $fillable = [
		'color'
	];
}
