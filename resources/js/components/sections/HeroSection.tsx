import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Play, Star } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
    const scrollToActivities = () => {
        const element = document.querySelector('#activities');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Rafting Adventure"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-red-900/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-10 w-16 h-16 bg-red-500/20 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                        y: [20, -20, 20],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute top-1/3 right-16 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>Rated #1 Adventure Park in East Java</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Experience Ultimate
                        <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent block">
                            Adventure
                        </span>
                        at Quantum Landpark
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Dive into thrilling white-water rafting, peaceful riverside camping, 
                        and exciting outbound activities in our pristine natural paradise.
                    </motion.p>

                    {/* Location Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center justify-center gap-2 text-gray-300 mb-10"
                    >
                        <MapPin className="h-5 w-5 text-red-400" />
                        <span>Riverside Adventure Park, East Java</span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <Button variant="primary" size="lg" className="group">
                            <span>Book Your Adventure</span>
                            <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="ml-2"
                            >
                                →
                            </motion.div>
                        </Button>
                        
                        <Button variant="outline" size="lg" className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900">
                            <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                            Watch Video
                        </Button>
                    </motion.div>

                    {/* Statistics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
                    >
                        {[
                            { number: '5K+', label: 'Happy Adventurers' },
                            { number: '50+', label: 'Activities Available' },
                            { number: '10', label: 'Years Experience' },
                            { number: '4.9', label: 'Average Rating' },
                        ].map((stat, index) => (
                            <div key={stat.label} className="text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                    className="text-2xl sm:text-3xl font-bold text-white mb-1"
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-sm text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToActivities}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-red-400 transition-colors duration-300 z-10"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center"
                >
                    <span className="text-sm mb-2">Explore Adventures</span>
                    <ChevronDown className="h-6 w-6" />
                </motion.div>
            </motion.button>

            {/* Parallax Background Elements */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 20% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)`
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear',
                }}
            />
        </section>
    );
};