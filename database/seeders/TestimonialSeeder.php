<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonials = [
            [
                'customer_name' => 'Sarah Johnson',
                'customer_avatar' => 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'message' => 'Absolutely amazing experience! The rafting was thrilling and the guides were professional and fun. This was the highlight of our East Java trip!',
                'rating' => 5,
                'location' => 'Jakarta',
                'activity_taken' => 'White Water Rafting',
                'is_featured' => true,
                'is_approved' => true
            ],
            [
                'customer_name' => 'Ahmad Rizki',
                'customer_avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'message' => 'Perfect for team building! Our company retreat was a huge success thanks to Quantum Landpark. The facilitators were excellent and the activities were challenging yet fun.',
                'rating' => 5,
                'location' => 'Surabaya',
                'activity_taken' => 'Team Building & Outbound',
                'is_featured' => true,
                'is_approved' => true
            ],
            [
                'customer_name' => 'Lisa Chen',
                'customer_avatar' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'message' => 'The camping experience was magical. Waking up by the river with the sound of flowing water was so peaceful. Great facilities and friendly staff!',
                'rating' => 5,
                'location' => 'Bandung',
                'activity_taken' => 'Riverside Camping',
                'is_featured' => true,
                'is_approved' => true
            ],
            [
                'customer_name' => 'Budi Santoso',
                'customer_avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'message' => 'Great value for money! The jungle trekking was adventurous and our guide showed us some amazing hidden spots. Will definitely come back!',
                'rating' => 4,
                'location' => 'Malang',
                'activity_taken' => 'Jungle Trekking',
                'is_featured' => false,
                'is_approved' => true
            ],
            [
                'customer_name' => 'Maria Santos',
                'customer_avatar' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'message' => 'Family-friendly adventure! Our kids loved every minute of it. The safety measures were top-notch and the staff was very patient with children.',
                'rating' => 5,
                'location' => 'Yogyakarta',
                'activity_taken' => 'White Water Rafting',
                'is_featured' => true,
                'is_approved' => true
            ]
        ];

        foreach ($testimonials as $testimonial) {
            \App\Models\Testimonial::create($testimonial);
        }
    }
}
