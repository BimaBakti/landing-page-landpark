import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';
import React from 'react';
import { ImageGallery } from '../ui/ImageGallery';

const GALLERY_IMAGES = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "White water rafting adventure",
        caption: "Thrilling white-water rafting on pristine rapids"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Riverside camping experience",
        caption: "Peaceful camping under the stars by the river"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Team building activities",
        caption: "Exciting team building challenges and activities"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Group adventure activities",
        caption: "Friends and families enjoying adventure together"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Mountain hiking adventure",
        caption: "Breathtaking mountain trails and scenic views"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Forest exploration",
        caption: "Discovering hidden trails through lush forests"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Sunrise over the river",
        caption: "Magical sunrise moments by the riverside"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Adventure equipment",
        caption: "Professional grade safety and adventure equipment"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Campfire gathering",
        caption: "Evening campfire stories and bonding moments"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "River kayaking",
        caption: "Peaceful kayaking along calm river sections"
    }
];

export const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0zM0 20c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0zM20 0c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0zM0 0c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Floating Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [100, 200, 100],
                        y: [50, 150, 50],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [-50, 50, -50],
                        y: [200, 100, 200],
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
                />
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
                    <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Camera className="h-4 w-4" />
                        <span>Adventure Gallery</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Captured
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Moments</span>
                    </h2>
                    
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Experience the thrill, beauty, and excitement through the eyes of our adventurers. 
                        Every moment tells a story of courage, joy, and unforgettable memories.
                    </p>
                </motion.div>

                {/* Statistics Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-2xl mx-auto"
                >
                    {[
                        { number: '5,000+', label: 'Photos Captured', icon: Camera },
                        { number: '150+', label: 'Video Stories', icon: ImageIcon },
                        { number: '50+', label: 'Featured Locations', icon: Camera },
                        { number: '24/7', label: 'Memories Made', icon: ImageIcon },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                        >
                            <div className="flex justify-center mb-2">
                                <stat.icon className="h-6 w-6 text-red-400" />
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <ImageGallery images={GALLERY_IMAGES} />
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-red-500/20 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Ready to Create Your Own Adventure Story?
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Join thousands of adventurers who have discovered the magic of Quantum Landpark. 
                            Your next great adventure is just one booking away.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-red-700 hover:to-red-600"
                            >
                                Book Your Adventure Today
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                            >
                                View More Photos
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};