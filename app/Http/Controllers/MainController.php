<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;


class MainController extends Controller
{
	function index()
	{
		return view('main');
	}
}
