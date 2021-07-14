<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/auth', function () {
	return view('myauth.auth');
})->name('auth');

Route::post('/signin', 'UserController@signin')->name('user-signin');


Route::get('/forgot-password', function () {
	return view('myauth.forgot-pass');
})->name('forgot-pass');



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use App\Contract;


Route::post('/forgot-password', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
        $request->only('email')
	);

    return $status === Password::RESET_LINK_SENT
                ? back()->with(['status' => __($status)])->withInput()
                : back()->withErrors(['email' => __($status)])->withInput();
})->middleware(['guest'])->name('fff');

Route::get('password/reset/{token}', function (Request $request, $token) {
	return view('myauth.reset-pass', [
		'token' => $token,
		'email' => $request->all()['email']
	]);
})->name('reset-pass');
Route::get('password/sendemail', function (Request $request) {
	$token = $request->all()['token'];
	return view('myauth.reset-pass', [
		'token' => $token,
		'email' => $request->all()['email']
	]);
})->name('reset-pass');

Route::post('/password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
Route::post('/password/sendemail', 'Auth\ResetPasswordController@reset')->name('password.reset');

Route::group(['middleware' => ['auth']], function () {
	Route::get('/', 'MainController@index')->name('main');
	Route::get('/home', 'MainController@index')->name('home');

	Route::get('/contracts', 'ContractController@index')->name('contracts');
	Route::get('/contract/create', 'ContractController@create')->middleware('can:create,App\Contract')->name('contract-create');
	Route::post('/contract/store', 'ContractController@store')->middleware('can:create,App\Contract')->name('contract-store');
	Route::get('/contract/{contract}/', 'ContractController@show')->name('contract');
	Route::get('/contract/{contract}/edit/', 'ContractController@edit')->middleware('can:update,contract')->name('contract-edit');
	Route::post('/contract/{contract}/update/', 'ContractController@update')->middleware('can:update,contract')->name('contract-update');

	Route::post('/contract/{id}/comment', 'ContractController@addComment')->name('add-comment');
	Route::post('/comment/{id}', 'ContractController@editComment')->name('edit-comment');

	Route::get('/flats', 'FlatController@index')->middleware('can:viewAny,App\Flat')->name('flats');
	Route::post('/flat/store', 'FlatController@store')->middleware('can:create,App\Flat')->name('flat-store');
	Route::post('/flat/{flat}/update', 'FlatController@update')->middleware('can:update,flat')->name('flat-update');
	Route::post('/flat/remove', 'FlatController@removeMultiple')->middleware('can:delete,App\Flat')->name('remove-flat-multiple');
	Route::get('/flat/{flat}', 'FlatController@get')->middleware('can:view,flat')->name('get-flat');

	Route::get('/timesheet', 'TimesheetController@index')->name('timesheets');
	Route::get('/timesheet/general', 'TimesheetController@general')->name('timesheet-general');
	Route::get('/timesheet/{id}', 'TimesheetController@show')->name('timesheet');

	Route::get('/staff', 'StaffController@index')->name('staff');
	Route::get('/staff/create', 'StaffController@create')->middleware('can:create,App\User')->name('staff-create');
	Route::post('/staff/store', 'StaffController@store')->middleware('can:create,App\User')->name('staff-store');
	Route::get('/staff/{user}/', 'StaffController@showInfo')->middleware('can:view_info,user')->name('staff-info');
	Route::get('/staff/{user}/calendar', 'StaffController@showCalendar')->middleware('can:view_calendar,user')->name('staff-calendar');
	Route::get('/staff/{user}/another', 'StaffController@showAnother')->middleware('can:view_another,user')->name('staff-another');
	Route::post('/staff/{user}/update', 'StaffController@update')->middleware('can:update,user')->name('staff-update');
	Route::post('/staff/{user}/prepayment', 'StaffController@addPrepayment')->name('staff-add-prepayment');

	Route::post('/staff/{user}/prize/', 'StaffController@addPrize')->name('add-prize');
	Route::post('/staff/{user}/salary/', 'StaffController@addSalary')->name('add-salary');
	Route::get('/payment/{payment}/remove', 'StaffController@removePayment')->name('remove-payment');
	Route::post('/staff/{user}/flat/', 'StaffController@addFlat')->name('add-flat');
	Route::get('/staff/{user}/flat/{flat}', 'StaffController@removeFlat')->name('remove-flat');
	Route::post('/staff/remove', 'StaffController@removeMultiple')->middleware('can:delete,App\User')->name('remove-staff-multiple');

	Route::get('/identity', 'UserController@identity')->name('account');
	Route::post('/identity/update', 'UserController@update')->name('user-update');

	Route::get('/settings', 'SettingsController@index')->middleware('can:viewAny,App\Settings')->name('settings');
	Route::post('/settings/save', 'SettingsController@save')->middleware('can:viewAny,App\Settings')->name('settings-save');

	Route::get('/identity/notes', 'UserNoteController@index')->name('user-notes');
	Route::get('/identity/notes_colors', 'UserNoteController@getColors');
	Route::post('/note', 'UserNoteController@store');
	Route::post('/note/{id}/edit', 'UserNoteController@edit');
	Route::post('/note/{id}/remove', 'UserNoteController@remove');

	Route::get('/notice', 'NoticeController@index')->name('user-notice');
	Route::get('/notice/load', 'NoticeController@loadMore');
	Route::post('/notice/{id}/remove', 'NoticeController@remove');
	
	Route::get('/vue', function () {
		return view('vue.index');
	});
});


