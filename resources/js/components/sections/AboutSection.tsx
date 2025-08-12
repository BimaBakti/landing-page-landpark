import { motion } from 'framer-motion';
import { Award, Heart, Shield, Users, Zap } from 'lucide-react';
import React from 'react';

const FEATURES = [
    {
        icon: Shield,
        title: "Safety First",
        description: "International safety standards with certified equipment and trained professionals ensuring your adventure is both thrilling and secure."
    },
    {
        icon: Award,
        title: "10+ Years Experience",
        description: "Over a decade of creating unforgettable adventures with thousands of satisfied customers and industry-leading expertise."
    },
    {
        icon: Heart,
        title: "Eco-Friendly",
        description: "Committed to preserving our beautiful natural environment through sustainable tourism practices and conservation efforts."
    },
    {
        icon: Users,
        title: "Expert Guides",
        description: "Professional, certified guides with extensive local knowledge and passion for sharing the wonders of outdoor adventure."
    }
];

const STATS = [
    { number: '10,000+', label: 'Happy Adventurers', suffix: '' },
    { number: '98', label: 'Customer Satisfaction', suffix: '%' },
    { number: '15', label: 'Adventure Activities', suffix: '+' },
    { number: '24/7', label: 'Safety Support', suffix: '' },
];

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ef4444' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Zap className="h-4 w-4" />
                            <span>About Quantum Landpark</span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Where Adventure
                            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"> Meets Nature</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Nestled along the pristine banks of East Java's most beautiful river, Quantum Landpark 
                            has been the premier destination for outdoor adventures since 2014. Our mission is simple: 
                            to create unforgettable experiences that connect people with nature while prioritizing 
                            safety, sustainability, and pure excitement.
                        </p>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            From heart-pounding white-water rafting to peaceful camping under starlit skies, 
                            every adventure at Quantum Landpark is designed to push boundaries, create bonds, 
                            and leave you with memories that last a lifetime.
                        </p>

                        {/* Statistics */}
                        <div className="grid grid-cols-2 gap-6">
                            {STATS.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center lg:text-left"
                                >
                                    <div className="text-3xl font-bold text-red-600 mb-1">
                                        {stat.number}{stat.suffix}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img
                                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="River landscape"
                                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Forest adventure"
                                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                                />
                            </div>
                            <div className="space-y-4 pt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Mountain view"
                                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Campfire gathering"
                                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
                                <div className="text-sm text-gray-600 mb-2">Rating</div>
                                <div className="flex justify-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl" />
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-20 max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 lg:p-12 border border-red-100">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">
                            Our Mission
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed italic">
                            "To inspire courage, foster connections, and create extraordinary adventures 
                            that respect and celebrate the natural world. Every journey with us is a step 
                            towards discovering not just the beauty of nature, but the adventurer within yourself."
                        </p>
                        <div className="mt-6 text-red-600 font-semibold">
                            - The Quantum Landpark Team
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};