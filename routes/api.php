<?php

use Illuminate\Http\Request;

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

// messages
Route::middleware('auth:api')->get('/messages', 'MessagesController@index');
Route::middleware('auth:api')->post('/messages', 'MessagesController@create');

// users
Route::middleware('auth:api')->post('/user', 'UsersController@index');
