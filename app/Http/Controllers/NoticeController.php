<?php
namespace App\Http\Controllers;

use App\User;
use App\Notice;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class NoticeController extends Controller
{
	private const take = 10;

	public function index(Request $request)
	{
		$notices = Notice::whereHas('user', function($query) {
				return $query->where('id', Auth::id());
			})
			->orderBy('id', 'desc')
			->take(self::take);
		$notices->update(['status' => 1]);
		$notices = $notices->get();

		return view('identity.notifications', [
			'notices' => $notices
		]);
	}

	public function loadMore(Request $request)
	{
		$skip = isset($request['skip']) ? $request['skip'] : 0;
		$notices = Notice::whereHas('user', function($query) {
				return $query->where('id', Auth::id());
			})
			->skip($skip)
			->orderBy('id', 'desc')
			->take(self::take)
			->get();

		/* UPDATE STATUS TO read */
		foreach ($notices as $notice)
			$notice->update(['status' => 1]);
		/*  */

		return response()->json(['notices' => $notices]);
	}

	public function remove(Request $request, $id)
	{
		$notice = Notice::find($id);

		if ($notice->user->id != Auth::id())
			throw ValidationException::withMessages(['id' => 'Accept denied']);

		$notice->delete();

		return response('OK', 200);
	}
}
