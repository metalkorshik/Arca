<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Settings;
use Illuminate\Support\Facades\Auth;

class SettingsController extends Controller
{
	function index()
	{
		return view('settings.index');
	}

	function save(Request $request)
	{
		$data = $request->all();

		foreach ($data['settings'] as $key => $value)
			Settings::set($key, $value);

		return view('settings.index');
	}
}
