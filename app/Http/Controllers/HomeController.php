<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Gallery;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Get data for all sections
        $activities = Activity::active()->ordered()->get();
        $galleryImages = Gallery::ordered()->get();
        $testimonials = Testimonial::approved()->featured()->get();

        return Inertia::render('welcome', [
            'activities' => $activities,
            'gallery' => $galleryImages,
            'testimonials' => $testimonials,
        ]);
    }
}
