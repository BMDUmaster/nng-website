<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Artisan;

// Public Website Routes
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/hand-holding-program', [PageController::class, 'handHoldingProgram'])->name('hand-holding-program');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/consultation', [PageController::class, 'consultation'])->name('consultation');

// SEO Landing Page Route
Route::get('/nng', [PageController::class, 'nngLanding'])->name('nng.landing');

// Public Customer Enquiry Form Submission Route
Route::post('/enquiry/store', [EnquiryController::class, 'store'])->name('enquiry.store');

// Admin Authentication & Backend Portal Routes
Route::get('/login', [AdminController::class, 'showLoginForm'])->name('login');
Route::get('/admin/login', [AdminController::class, 'showLoginForm'])->name('admin.login');
Route::post('/admin/login', [AdminController::class, 'login'])->name('admin.login.submit');

Route::middleware(['auth'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::post('/admin/enquiry/{id}/status', [AdminController::class, 'updateStatus'])->name('admin.enquiry.status');
    Route::delete('/admin/enquiry/{id}', [AdminController::class, 'destroy'])->name('admin.enquiry.delete');
    Route::post('/admin/logout', [AdminController::class, 'logout'])->name('admin.logout');
});

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
Route::get('/consultation/', [PageController::class, 'consultation']);
