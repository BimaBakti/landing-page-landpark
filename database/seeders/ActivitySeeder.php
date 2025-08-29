<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $activities = [
            [
                'name' => 'White Water Rafting',
                'description' => 'Experience the thrill of navigating pristine river rapids with our expert guides. Perfect for adrenaline seekers looking for an unforgettable adventure on the water.',
                'image' => 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'price' => 250000,
                'duration' => '3-4 hours',
                'features' => [
                    'Professional certified guides',
                    'Complete safety equipment provided',
                    'Transport to/from river included',
                    'Waterproof bag for belongings'
                ],
                'location' => 'Brantas River Rapids',
                'is_active' => true,
                'order' => 1
            ],
            [
                'name' => 'Riverside Camping',
                'description' => 'Escape the city and reconnect with nature in our scenic riverside camping grounds. Wake up to the sound of flowing water and breathe in the fresh mountain air.',
                'image' => 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'price' => 150000,
                'duration' => '1-2 nights',
                'features' => [
                    'Complete camping gear provided',
                    'Dedicated campfire area',
                    'Direct river access for activities',
                    '24/7 security and assistance'
                ],
                'location' => 'Riverside Campgrounds',
                'is_active' => true,
                'order' => 2
            ],
            [
                'name' => 'Team Building & Outbound',
                'description' => 'Strengthen bonds and build leadership skills through exciting team challenges and outdoor activities designed by professional facilitators.',
                'image' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'price' => 300000,
                'duration' => 'Full day',
                'features' => [
                    'Certified professional facilitators',
                    'Customized team challenges',
                    'Leadership development activities',
                    'Team performance analysis'
                ],
                'location' => 'Adventure Training Ground',
                'is_active' => true,
                'order' => 3
            ],
            [
                'name' => 'Jungle Trekking',
                'description' => 'Explore the untouched wilderness and discover hidden waterfalls on our guided jungle trekking adventures. Perfect for nature lovers and photography enthusiasts.',
                'image' => 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'price' => 200000,
                'duration' => '4-6 hours',
                'features' => [
                    'Experienced local guides',
                    'Wildlife spotting opportunities',
                    'Waterfall swimming stops',
                    'Trail snacks included'
                ],
                'location' => 'Mountain Forest Trails',
                'is_active' => true,
                'order' => 4
            ]
        ];

        foreach ($activities as $activity) {
            \App\Models\Activity::create($activity);
        }
    }
}
