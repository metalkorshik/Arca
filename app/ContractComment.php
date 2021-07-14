<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContractComment extends Model
{
	protected $table = 'contract_comments';

    protected $fillable = [
		'content'
	];

	public function contract()
    {
		return $this->belongsTo(Contract::class);
	}

	public function author()
    {
		return $this->belongsTo(User::class);
	}

	public function parent()
    {
		return $this->belongsTo(ContractComment::class);
	}

	public function newCollection(array $models = [])
    {
        return new ContractCommentCollection($models);
    }
}
