<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'home'])->name('home');

Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/about/', [PageController::class, 'about']);

Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/services/', [PageController::class, 'services']);

Route::get('/hand-holding-program', [PageController::class, 'handHoldingProgram'])->name('hand-holding-program');
Route::get('/hand-holding-program/', [PageController::class, 'handHoldingProgram']);

Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/contact/', [PageController::class, 'contact']);

Route::get('/consultation', [PageController::class, 'consultation'])->name('consultation');
Route::get('/consultation/', [PageController::class, 'consultation']);
