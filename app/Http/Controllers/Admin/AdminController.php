<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use App\Models\Gallery;
use App\Models\Testimonial;
use App\Models\User;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $stats = [
            'activities' => Activity::count(),
            'gallery' => Gallery::count(),
            'testimonials' => Testimonial::count(),
            'users' => User::count(),
        ];

        return Inertia::render('admin/Dashboard', [
            'stats' => $stats,
        ]);
    }
}
