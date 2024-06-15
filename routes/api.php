<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Resources\UserResource;

Route::controller(AuthController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
    Route::post('forget', 'forget');
    Route::post('passwordresat', 'passwordresat');
    Route::post('changepassword', 'changepassword');
});

Route::apiResource('users', UserController::class);
Route::apiResource('products', ProductController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return new UserResource($request->user());
});
