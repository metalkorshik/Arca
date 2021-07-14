<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDocument extends Model
{
	protected $table = 'users_documents';

	public $timestamps = false;

    protected $fillable = [
		'title', 'path', 'validity', 'date_of_issue'
	];

	public function getUrl()
	{
		return '/storage/users/' . $this->user_id . '/' . $this->path;
	}
}
