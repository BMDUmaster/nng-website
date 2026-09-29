<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Artisan;

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

// Web-based Artisan command triggers for live server environment
Route::get('/run-setup', function () {
    try {
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
        Artisan::call('view:clear');
        Artisan::call('route:clear');
        return "<div style='font-family:sans-serif;padding:2rem;background:#0d1117;color:#7ee787;border-radius:8px;'>".
               "<h2>✅ Live Server Setup & Caches Cleared Successfully!</h2>".
               "<p><a href='/' style='color:#58a6ff;'>Click here to view Live Website</a></p></div>";
    } catch (\Throwable $e) {
        return "<div style='font-family:sans-serif;padding:2rem;background:#0d1117;color:#f85149;'>".
               "<h2>❌ Setup Error: " . htmlspecialchars($e->getMessage()) . "</h2></div>";
    }
});

Route::get('/clear-cache', function () {
    try {
        Artisan::call('config:clear');
        Artisan::call('cache:clear');
        Artisan::call('view:clear');
        Artisan::call('route:clear');
        return "Cache cleared successfully!";
    } catch (\Throwable $e) {
        return "Error clearing cache: " . $e->getMessage();
    }
});
