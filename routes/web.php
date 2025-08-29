<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ActivityController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

// Authentication routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

// Admin Routes
Route::middleware(['admin'])->prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.dashboard');
    
    // Activity Management
    Route::resource('activities', ActivityController::class)->names([
        'index' => 'admin.activities.index',
        'create' => 'admin.activities.create',
        'store' => 'admin.activities.store',
        'show' => 'admin.activities.show',
        'edit' => 'admin.activities.edit',
        'update' => 'admin.activities.update',
        'destroy' => 'admin.activities.destroy',
    ]);
    
    // Gallery Management
    Route::resource('gallery', GalleryController::class)->names([
        'index' => 'admin.gallery.index',
        'create' => 'admin.gallery.create',
        'store' => 'admin.gallery.store',
        'show' => 'admin.gallery.show',
        'edit' => 'admin.gallery.edit',
        'update' => 'admin.gallery.update',
        'destroy' => 'admin.gallery.destroy',
    ]);
    
    // Testimonial Management
    Route::resource('testimonials', TestimonialController::class)->names([
        'index' => 'admin.testimonials.index',
        'create' => 'admin.testimonials.create',
        'store' => 'admin.testimonials.store',
        'show' => 'admin.testimonials.show',
        'edit' => 'admin.testimonials.edit',
        'update' => 'admin.testimonials.update',
        'destroy' => 'admin.testimonials.destroy',
    ]);
});
