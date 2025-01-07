<?php

use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

Route::resource('/', TodoController::class)->only('index', 'create', 'store');
