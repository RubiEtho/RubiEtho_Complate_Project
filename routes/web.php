<?php

use Illuminate\Support\Facades\Route;

Route::get('/{vue_capture?}', function () {
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');

Route::get('/get-permissions', function () {
    return auth()->check()?auth()->user()->jsPermissions():0;
});