import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

// Quantum Landpark specific types
export interface Activity {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    duration: string;
    features: string[];
    location: string;
    is_active: boolean;
    order: number;
    created_at: string;
    updated_at: string;
}

export interface GalleryImage {
    id: number;
    title: string;
    image: string;
    description?: string;
    category: string;
    is_featured: boolean;
    order: number;
    created_at: string;
    updated_at: string;
}

export interface Testimonial {
    id: number;
    customer_name: string;
    customer_avatar?: string;
    message: string;
    rating: number;
    location?: string;
    activity_taken?: string;
    is_featured: boolean;
    is_approved: boolean;
    created_at: string;
    updated_at: string;
}

export interface WelcomePageProps {
    activities: Activity[];
    gallery: GalleryImage[];
    testimonials: Testimonial[];
}
