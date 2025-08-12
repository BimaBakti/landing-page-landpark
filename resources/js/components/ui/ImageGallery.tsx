import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageGalleryProps {
    images: {
        id: number;
        src: string;
        alt: string;
        caption?: string;
    }[];
    className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const goToNext = () => {
        if (selectedImage !== null) {
            setSelectedImage((prev) => (prev! + 1) % images.length);
        }
    };

    const goToPrev = () => {
        if (selectedImage !== null) {
            setSelectedImage((prev) => (prev! - 1 + images.length) % images.length);
        }
    };

    return (
        <div className={cn("", className)}>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {images.slice(0, 6).map((image, index) => (
                    <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ZoomIn className="h-8 w-8 text-white" />
                        </div>
                        {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <p className="text-white text-sm font-medium">{image.caption}</p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Carousel for More Images */}
            {images.length > 6 && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="gallery-swiper"
                >
                    {images.slice(6).map((image, index) => (
                        <SwiperSlide key={image.id}>
                            <div
                                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                                onClick={() => openLightbox(index + 6)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ZoomIn className="h-8 w-8 text-white" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {/* Lightbox Modal */}
            {isLightboxOpen && selectedImage !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                    >
                        <X className="h-8 w-8" />
                    </button>
                    
                    <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[selectedImage].src}
                            alt={images[selectedImage].alt}
                            className="max-w-full max-h-full object-contain"
                        />
                        
                        {/* Navigation Arrows */}
                        <button
                            onClick={goToPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                        >
                            ←
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                        >
                            →
                        </button>
                        
                        {/* Image Caption */}
                        {images[selectedImage].caption && (
                            <div className="absolute bottom-4 left-4 right-4 text-center">
                                <p className="text-white bg-black/50 rounded px-4 py-2 inline-block">
                                    {images[selectedImage].caption}
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    );
};