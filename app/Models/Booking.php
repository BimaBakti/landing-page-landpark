<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'activity_id',
        'customer_name',
        'customer_email',
        'customer_phone',
        'booking_date',
        'participants',
        'special_requests',
        'status',
        'total_amount'
    ];

    protected $casts = [
        'booking_date' => 'date',
        'total_amount' => 'decimal:2'
    ];

    public function activity()
    {
        return $this->belongsTo(Activity::class);
    }

    public function scopeConfirmed($query)
    {
        return $query->where('status', 'confirmed');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}
