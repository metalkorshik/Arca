<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;


class TestController extends Controller
{
	function test ()
	{
		return view('main');
	}
}
