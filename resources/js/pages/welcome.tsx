import { Head } from '@inertiajs/react';
import React from 'react';

// Import all components
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ActivitiesSection } from '@/components/sections/ActivitiesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Welcome() {

    return (
        <>
            <Head title="Quantum Landpark - Ultimate Adventure Destination">
                <meta name="description" content="Experience thrilling white-water rafting, peaceful riverside camping, and exciting outbound activities at Quantum Landpark - East Java's premier adventure destination." />
                <meta name="keywords" content="rafting, camping, adventure, outbound, East Java, river activities, team building" />
                <meta property="og:title" content="Quantum Landpark - Ultimate Adventure Destination" />
                <meta property="og:description" content="Experience thrilling white-water rafting, peaceful riverside camping, and exciting outbound activities at Quantum Landpark." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
                <meta name="twitter:card" content="summary_large_image" />
                
                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700&display=swap" rel="stylesheet" />
                
                {/* Favicon */}
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Head>
            
            {/* Main Application Layout */}
            <div className="min-h-screen bg-white">
                {/* Header Navigation */}
                <Header />

                {/* Main Content Sections */}
                <main className="relative">
                    {/* Hero Section */}
                    <HeroSection />
                    
                    {/* Activities Section */}
                    <ActivitiesSection />
                    
                    {/* Gallery Section */}
                    <GallerySection />
                    
                    {/* About Section */}
                    <AboutSection />
                    
                    {/* Testimonials Section */}
                    <TestimonialsSection />
                    
                    {/* Contact Section */}
                    <ContactSection />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}