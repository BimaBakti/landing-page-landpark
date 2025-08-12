import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, MapPin } from 'lucide-react';
import React from 'react';
import { Button } from './Button';

interface ActivityCardProps {
    activity: {
        id: number;
        name: string;
        description: string;
        image: string;
        price: number;
        duration: string;
        features: string[];
        location?: string;
    };
    className?: string;
    index?: number;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, className, index = 0 }) => {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105",
                className
            )}
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={activity.image}
                    alt={activity.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {formatPrice(activity.price)}
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    <Clock className="h-4 w-4" />
                    {activity.duration}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {activity.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {activity.description}
                </p>

                {activity.location && (
                    <div className="flex items-center gap-1 text-gray-500 mb-4">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{activity.location}</span>
                    </div>
                )}

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                    {activity.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Action Button */}
                <Button 
                    variant="primary" 
                    size="md" 
                    className="w-full"
                >
                    Book Now
                </Button>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};