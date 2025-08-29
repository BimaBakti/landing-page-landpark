<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'customer_name',
        'customer_avatar',
        'message',
        'rating',
        'location',
        'activity_taken',
        'is_featured',
        'is_approved'
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_approved' => 'boolean'
    ];

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeApproved($query)
    {
        return $query->where('is_approved', true);
    }

    public function scopeWithRating($query, $rating)
    {
        return $query->where('rating', '>=', $rating);
    }
}
