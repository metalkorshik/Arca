<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\User;
use App\UserInfo;
use App\UserContact;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
	function signin(Request $request)
	{
		$data = $request->all();

		$validated = $request->validate([
			'email' => 'required|max:50',
			'password' => 'required|max:50',
		]);

		$user = User::where('email', $data['email'])->first();

		if ($user && \Hash::check($data['password'], $user->password))
		{
			Auth::login($user, true);
			return redirect()->route('main');
		}
		else
			return back()->withInput($data);
	}

	function identity()
	{
		return view('identity.account', [
			'user' => Auth::user()
		]);
	}

	function update(Request $request)
	{
		$user = Auth::user();

		if ($request->file('photo'))
		{
			// TO DO remove old image
			// unlink(User::getStorage() . $user->id . '/' . $data['photo_path']);
			$fileName = time() . '.' . $request->file('photo')->guessExtension();
			$request->file('photo')->move(User::getStorage() . $user->id, $fileName);
			$request->merge(['photo_path' => $fileName]);
		}

		$data = $request->all();

		$validated = $request->validate([
			'fname' => 'required|max:20',
			'lname' => 'required|max:20',
			'mname' => 'required|max:20',
			'phones.*' => 'required|max:16',
			'password' => 'confirmed'
		]);

		if (isset($data['birthday']))
			$data['birthday'] = $this->getSqlDate($data['birthday']);

		if (isset($data['old_password']) && isset($data['password']) && $data['password'] != '' &&
				\Hash::check($data['old_password'], $user->password))
			$data['password'] = \Hash::make($data['password']);
		else
			unset($data['password']);

		foreach($data['phones'] as $phone)
		{
			$contact = new UserContact();
			$contact->value = $phone;
			$user->contacts()->delete();
			$user->contacts()->save($contact);
		}

		$user->update($data);
		$userInfo = UserInfo::find($user->info->id);
		$userInfo->update($data);

		return redirect()->route('account');
	}
}
