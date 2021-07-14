<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

use App\User;
use App\UserNote;
use App\UserNoteColor;
use Illuminate\Support\Facades\Auth;

class UserNoteController extends Controller
{
	function index()
	{
		return view('identity.notes', [
			'notes' => UserNote::whereHas('user', function ($query) {
				return $query->where('id', \Auth::user()->id);
			})->get(), 
			'colors' => UserNoteColor::get()->reverse()
		]);
	}

	function store(Request $request)
	{
		$note = new UserNote(['content' => '']);
		$note->user()->associate(\Auth::user());
		$note->save();

		return $note;
	}

	function edit(Request $request, $id)
	{
		$data = $request->all();
		$conditions = [];

		if(isset($data['color']))
			$conditions['color'] = 'required';
		else
			$conditions['content'] = 'required';

		$validated = $request->validate($conditions);
		$note = UserNote::find($id);

		if ($note == null)
			throw ValidationException::withMessages(['id' => 'Not found']);

		if ($note->user->id != \Auth::user()->id)
			throw ValidationException::withMessages(['id' => 'Access denied']);

		$note->update($data);

		return $note;
	}

	function remove(Request $request, $id)
	{
		$note = UserNote::find($id);

		if ($note == null)
			throw ValidationException::withMessages(['id' => 'Not found']);

		if ($note->user->id != \Auth::user()->id)
			throw ValidationException::withMessages(['id' => 'Access denied']);

		$note->delete();

		return response('OK', 200);
	}

	function getColors()
	{
		return UserNoteColor::get();
	}
}
