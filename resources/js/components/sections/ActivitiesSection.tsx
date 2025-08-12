import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import React from 'react';
import { ActivityCard } from '../ui/ActivityCard';
import { Button } from '../ui/Button';

const ACTIVITIES_DATA = [
    {
        id: 1,
        name: "White Water Rafting",
        description: "Experience the thrill of navigating pristine river rapids with our expert guides. Perfect for adrenaline seekers looking for an unforgettable adventure on the water.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 250000,
        duration: "3-4 hours",
        features: [
            "Professional certified guides",
            "Complete safety equipment provided",
            "Transport to/from river included",
            "Waterproof bag for belongings"
        ],
        location: "Brantas River Rapids"
    },
    {
        id: 2,
        name: "Riverside Camping",
        description: "Escape the city and reconnect with nature in our scenic riverside camping grounds. Wake up to the sound of flowing water and breathe in the fresh mountain air.",
        image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 150000,
        duration: "1-2 nights",
        features: [
            "Complete camping gear provided",
            "Dedicated campfire area",
            "Direct river access for activities",
            "24/7 security and assistance"
        ],
        location: "Riverside Campgrounds"
    },
    {
        id: 3,
        name: "Team Building & Outbound",
        description: "Strengthen bonds and build leadership skills through exciting team challenges and outdoor activities designed by professional facilitators.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 300000,
        duration: "Full day",
        features: [
            "Certified professional facilitators",
            "Customized team challenges",
            "Leadership development activities",
            "Team performance analysis"
        ],
        location: "Adventure Training Grounds"
    }
];

export const ActivitiesSection: React.FC = () => {
    return (
        <section id="activities" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>Adventure Activities</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Choose Your
                        <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"> Adventure</span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From heart-pounding rafting adventures to peaceful camping under the stars, 
                        discover the perfect activity to match your thrill level and create unforgettable memories.
                    </p>
                </motion.div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {ACTIVITIES_DATA.map((activity, index) => (
                        <ActivityCard
                            key={activity.id}
                            activity={activity}
                            index={index}
                        />
                    ))}
                </div>

                {/* Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Users className="h-4 w-4" />
                                <span>Group Packages Available</span>
                            </div>
                            
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Perfect for Groups & Corporate Events
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Planning a corporate retreat, family gathering, or adventure with friends? 
                                Our customizable group packages offer the best value and experience for parties of 10 or more. 
                                Enjoy exclusive access to facilities, dedicated guides, and special group rates.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {[
                                    'Special group discounts for 10+ participants',
                                    'Customizable activity combinations',
                                    'Dedicated event coordinator',
                                    'Flexible scheduling options',
                                    'Catering services available'
                                ].map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <Button variant="primary" size="lg" className="group">
                                <span>Get Group Quote</span>
                                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Group Adventure"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                
                                {/* Floating Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4"
                                >
                                    <div className="text-sm text-gray-600 mb-1">This Month</div>
                                    <div className="text-2xl font-bold text-gray-900">127</div>
                                    <div className="text-sm text-gray-600">Group Adventures</div>
                                </motion.div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};