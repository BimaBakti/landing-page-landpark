import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/Button';

const CONTACT_INFO = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: [
            "Riverside Adventure Park",
            "Jl. Sungai Indah No. 123",
            "Malang, East Java 65151",
            "Indonesia"
        ],
        color: "text-red-600 bg-red-100"
    },
    {
        icon: Phone,
        title: "Call Us",
        details: [
            "+62 812 3456 7890",
            "+62 341 567890",
            "WhatsApp: +62 812 3456 7890",
            "24/7 Emergency Hotline"
        ],
        color: "text-green-600 bg-green-100"
    },
    {
        icon: Mail,
        title: "Email Us",
        details: [
            "info@quantumlandpark.com",
            "booking@quantumlandpark.com",
            "support@quantumlandpark.com",
            "corporate@quantumlandpark.com"
        ],
        color: "text-blue-600 bg-blue-100"
    },
    {
        icon: Clock,
        title: "Operating Hours",
        details: [
            "Monday - Friday: 8:00 AM - 6:00 PM",
            "Saturday - Sunday: 7:00 AM - 7:00 PM",
            "Public Holidays: 7:00 AM - 7:00 PM",
            "Booking available 24/7 online"
        ],
        color: "text-purple-600 bg-purple-100"
    }
];

const ACTIVITY_OPTIONS = [
    "White Water Rafting",
    "Riverside Camping",
    "Team Building & Outbound",
    "Group Package",
    "Corporate Event",
    "Family Adventure",
    "Other"
];

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        activity: '',
        groupSize: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            // Reset form or show success message
            setFormData({
                name: '',
                email: '',
                phone: '',
                activity: '',
                groupSize: '',
                message: ''
            });
        }, 2000);
    };

    return (
        <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-10-6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-20-20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm-10-6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Floating Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1.1, 1, 1.1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"
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
                        <Send className="h-4 w-4" />
                        <span>Get in Touch</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Plan Your Next
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Adventure</span>
                    </h2>
                    
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to embark on an unforgettable journey? Contact us today to book your adventure 
                        or get personalized recommendations for your perfect outdoor experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                        placeholder="+62 812 3456 7890"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="groupSize" className="block text-sm font-medium text-gray-300 mb-2">
                                        Group Size
                                    </label>
                                    <input
                                        type="number"
                                        id="groupSize"
                                        name="groupSize"
                                        value={formData.groupSize}
                                        onChange={handleInputChange}
                                        min="1"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Number of people"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="activity" className="block text-sm font-medium text-gray-300 mb-2">
                                    Interested Activity
                                </label>
                                <select
                                    id="activity"
                                    name="activity"
                                    value={formData.activity}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option value="" className="bg-gray-900">Select an activity</option>
                                    {ACTIVITY_OPTIONS.map((option) => (
                                        <option key={option} value={option} className="bg-gray-900">
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell us about your adventure preferences, special requirements, or any questions you have..."
                                />
                            </div>

                            <Button 
                                type="submit" 
                                variant="primary" 
                                size="lg" 
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Sending Message...
                                    </div>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {CONTACT_INFO.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={cn("p-3 rounded-xl", info.color)}>
                                        <info.icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold text-white mb-3">{info.title}</h4>
                                        <ul className="space-y-1">
                                            {info.details.map((detail, idx) => (
                                                <li key={idx} className="text-gray-300 text-sm">
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10 overflow-hidden"
                        >
                            <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-12 w-12 text-red-400 mx-auto mb-3" />
                                    <h4 className="text-white font-medium mb-1">Interactive Map</h4>
                                    <p className="text-gray-400 text-sm">Click to open in Google Maps</p>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-50 rounded-xl" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Quick Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-3xl p-8 border border-red-500/20 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Need Immediate Assistance?
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                            Our adventure specialists are standing by to help you plan the perfect experience. 
                            Call us now or chat with us on WhatsApp for instant support.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-green-700 flex items-center gap-2"
                            >
                                <Phone className="h-5 w-5" />
                                WhatsApp Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-700 flex items-center gap-2"
                            >
                                <Phone className="h-5 w-5" />
                                Call +62 812 3456 7890
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};