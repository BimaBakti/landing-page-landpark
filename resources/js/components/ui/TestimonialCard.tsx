import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import React from 'react';

import { Testimonial } from '@/types';

interface TestimonialCardProps {
    testimonial: Testimonial;
    className?: string;
    index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className, index = 0 }) => {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={cn(
                    "h-4 w-4",
                    i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                )}
            />
        ));
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100",
                className
            )}
        >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4 text-red-100">
                <Quote className="h-8 w-8" />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
            </div>

            {/* Comment */}
            <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.message}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-3">
                <div className="relative">
                    <img
                        src={testimonial.customer_avatar || '/images/default-avatar.png'}
                        alt={testimonial.customer_name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-red-100"
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.customer_name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location || testimonial.activity_taken}</p>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};