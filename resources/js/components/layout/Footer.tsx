import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin, Mountain, Phone, Star } from 'lucide-react';
import React from 'react';

export const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
        { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    ];

    const contactInfo = [
        {
            icon: MapPin,
            label: 'Location',
            value: 'Riverside Adventure Park, East Java, Indonesia',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+62 812 3456 7890',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'info@quantumlandpark.com',
        },
    ];

    const quickLinks = [
        { name: 'Activities', href: '#activities' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'About Us', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    const activities = [
        { name: 'White Water Rafting', href: '#rafting' },
        { name: 'Riverside Camping', href: '#camping' },
        { name: 'Team Building', href: '#outbound' },
        { name: 'Adventure Packages', href: '#packages' },
    ];

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative">
                {/* Main Footer Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="col-span-1 lg:col-span-2"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-xl">
                                    <Mountain className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                                        Quantum Landpark
                                    </h2>
                                    <p className="text-gray-400 text-sm">Your Ultimate Adventure Destination</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                                Experience the thrill of adventure at our pristine riverside location. From heart-pumping 
                                rafting to peaceful camping under the stars, we offer unforgettable experiences for 
                                adventurers of all levels.
                            </p>
                            
                            <div className="flex items-center space-x-4 mb-6">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        className={cn(
                                            "p-2 bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110",
                                            social.color
                                        )}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </motion.a>
                                ))}
                            </div>

                            {/* Rating Display */}
                            <div className="flex items-center space-x-2">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-400">4.9/5 from 200+ reviews</span>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-lg font-semibold mb-6 text-red-400">Quick Links</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Activities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-lg font-semibold mb-6 text-red-400">Activities</h3>
                            <ul className="space-y-3">
                                {activities.map((activity) => (
                                    <li key={activity.name}>
                                        <a
                                            href={activity.href}
                                            className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                                        >
                                            {activity.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="border-t border-gray-800 pt-8 mt-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-start space-x-3">
                                    <div className="bg-red-600/20 p-2 rounded-lg">
                                        <info.icon className="h-5 w-5 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white mb-1">{info.label}</h4>
                                        <p className="text-gray-400 text-sm">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 bg-gray-950/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-400 text-sm">
                                © 2024 Quantum Landpark. All rights reserved.
                            </p>
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};