<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/commercial/{id}/access', 'ContractController@accessCommercial')->name('access-commercial');
Route::post('/contract/{id}/close', 'ContractController@close')->name('contract-close');
Route::post('/contract/{id}/open', 'ContractController@open')->name('contract-open');
Route::post('/contract/{id}/remove', 'ContractController@remove')->name('contract-delete');
Route::post('/staff/documents/upload', 'StaffController@uploadDocuments');
Route::post('/staff/document/remove', 'StaffController@removeDocument');
Route::post('/timesheet/{id}/hour/add', 'TimesheetController@addHour');
Route::post('/timesheet/{id}/hour/clear', 'TimesheetController@clearData');

Route::post('/contract/{id}/consumption', 'ContractController@addConsumption')->name('add-consumption');
Route::get('/contract/consumption/{id}', 'ContractController@getConsumption')->name('get-consumption');
Route::post('/contract/consumption/{id}', 'ContractController@updateConsumption')->name('update-consumption');
Route::post('/contract/consumption/{id}/detail', 'ContractController@addConsumptionDeatil')->name('add-consumption-detail');