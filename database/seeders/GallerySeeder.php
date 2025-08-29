<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $galleryItems = [
            [
                'title' => 'Thrilling Rafting Adventure',
                'image' => 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'description' => 'Experience the adrenaline rush of white water rafting',
                'category' => 'rafting',
                'is_featured' => true,
                'order' => 1
            ],
            [
                'title' => 'Peaceful Riverside Camping',
                'image' => 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'description' => 'Reconnect with nature at our scenic campgrounds',
                'category' => 'camping',
                'is_featured' => true,
                'order' => 2
            ],
            [
                'title' => 'Team Building Excellence',
                'image' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'description' => 'Build stronger teams through adventure challenges',
                'category' => 'outbound',
                'is_featured' => true,
                'order' => 3
            ],
            [
                'title' => 'Jungle Exploration',
                'image' => 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'description' => 'Discover hidden waterfalls and wildlife',
                'category' => 'general',
                'is_featured' => false,
                'order' => 4
            ],
            [
                'title' => 'Rapids Navigation',
                'image' => 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'description' => 'Navigate through exciting river rapids',
                'category' => 'rafting',
                'is_featured' => false,
                'order' => 5
            ],
            [
                'title' => 'Campfire Moments',
                'image' => 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'description' => 'Enjoy memorable evenings around the campfire',
                'category' => 'camping',
                'is_featured' => false,
                'order' => 6
            ],
            [
                'title' => 'Adventure Training',
                'image' => 'https://images.unsplash.com/photo-1533051017-6632ea4d8405?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'description' => 'Professional outdoor training activities',
                'category' => 'outbound',
                'is_featured' => false,
                'order' => 7
            ],
            [
                'title' => 'Natural Beauty',
                'image' => 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'description' => 'Stunning natural landscapes surrounding our park',
                'category' => 'general',
                'is_featured' => false,
                'order' => 8
            ]
        ];

        foreach ($galleryItems as $item) {
            \App\Models\Gallery::create($item);
        }
    }
}
