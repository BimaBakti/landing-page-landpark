import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MessageSquare, Star } from 'lucide-react';
import React from 'react';
import { TestimonialCard } from '../ui/TestimonialCard';

const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Adventure Enthusiast",
        rating: 5,
        comment: "Absolutely incredible experience! The white-water rafting was thrilling yet safe, and our guide was knowledgeable and fun. The scenic beauty of the location is breathtaking. Can't wait to come back for the camping experience!",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Corporate Team Leader",
        rating: 5,
        comment: "Brought our team of 25 for a corporate retreat. The outbound activities were perfectly designed for team building. Professional staff, excellent facilities, and the group packages offered great value. Highly recommended for corporate events!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 3,
        name: "Lisa Rodriguez",
        role: "Family Adventurer",
        rating: 5,
        comment: "Perfect family getaway! My kids (ages 10-16) loved every minute. From the safe yet exciting rafting to the cozy camping setup, everything was well-organized. The staff went above and beyond to make sure everyone felt included and safe.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 4,
        name: "David Kim",
        role: "Adventure Photographer",
        rating: 5,
        comment: "As a photographer, I've visited many adventure parks. Quantum Landpark stands out for its pristine natural beauty and authentic experiences. The riverside camping under the stars was magical. Perfect backdrop for both adventure and photography!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 5,
        name: "Emma Thompson",
        role: "Solo Traveler",
        rating: 5,
        comment: "Traveled solo and felt completely welcomed by the community here. The guides made sure I was paired with friendly groups, and I made lifelong friends. The safety standards are top-notch, and the adventures are life-changing!",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 6,
        name: "James Anderson",
        role: "Repeat Customer",
        rating: 5,
        comment: "This is my 4th visit to Quantum Landpark, and they never disappoint! Each season brings new activities and improvements. The consistency in quality and the passion of the staff keeps me coming back. Already booked my next adventure!",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
];

const RATINGS_BREAKDOWN = [
    { stars: 5, percentage: 87, count: 2610 },
    { stars: 4, percentage: 10, count: 300 },
    { stars: 3, percentage: 2, count: 60 },
    { stars: 2, percentage: 1, count: 30 },
    { stars: 1, percentage: 0, count: 0 },
];

export const TestimonialsSection: React.FC = () => {
    const totalReviews = RATINGS_BREAKDOWN.reduce((sum, rating) => sum + rating.count, 0);
    const averageRating = (
        RATINGS_BREAKDOWN.reduce((sum, rating) => sum + rating.stars * rating.count, 0) / totalReviews
    ).toFixed(1);

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.05'%3E%3Cpath d='M36 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-12-8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <MessageSquare className="h-4 w-4" />
                        <span>Customer Reviews</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        What Our
                        <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"> Adventurers Say</span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Don't just take our word for it. Hear from thousands of adventurers who have 
                        experienced the magic of Quantum Landpark firsthand.
                    </p>

                    {/* Overall Rating Display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gray-900 mb-1">{averageRating}</div>
                            <div className="flex justify-center space-x-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="text-sm text-gray-600">{totalReviews.toLocaleString()} reviews</div>
                        </div>
                        
                        <div className="hidden md:block h-16 w-px bg-gray-200" />
                        
                        <div className="space-y-2">
                            {RATINGS_BREAKDOWN.slice(0, 3).map((rating) => (
                                <div key={rating.stars} className="flex items-center gap-3 text-sm">
                                    <span className="text-gray-600 w-8">{rating.stars}★</span>
                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-yellow-400 h-2 rounded-full"
                                            style={{ width: `${rating.percentage}%` }}
                                        />
                                    </div>
                                    <span className="text-gray-500 w-12">{rating.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* Review Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { number: '98%', label: 'Would Recommend', color: 'text-green-600' },
                        { number: '4.9/5', label: 'Average Rating', color: 'text-yellow-600' },
                        { number: '3,000+', label: 'Happy Customers', color: 'text-blue-600' },
                        { number: '95%', label: 'Return Rate', color: 'text-purple-600' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                        >
                            <div className={cn("text-3xl font-bold mb-2", stat.color)}>
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-8 lg:p-12 text-white max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Join Our Community of Adventurers?
                        </h3>
                        <p className="text-red-100 leading-relaxed mb-8 max-w-2xl mx-auto text-lg">
                            Become part of the story. Create your own unforgettable adventure 
                            and join thousands of satisfied customers who keep coming back for more.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Book Your Adventure Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-red-700/50 backdrop-blur-sm border border-red-400/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700/70 transition-all duration-300"
                            >
                                Read More Reviews
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};