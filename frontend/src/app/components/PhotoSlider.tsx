'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    title: 'Innovative Solutions',
    description: 'From concept to code, we make it happen. Partner with us today to bring your vision to life.'
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge technology and expert guidance.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    title: 'Cloud Solutions',
    description: 'Scale your operations with our robust cloud infrastructure and services.'
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    title: 'AI & Machine Learning',
    description: 'Harness the power of AI to drive innovation and growth.'
  }
];

export default function PhotoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
              sizes="100vw"
              onLoadingComplete={() => setIsLoading(false)}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <button className="button-primary text-lg px-8 py-4">
                    Get Started
                  </button>
                  <button className="button-secondary text-lg px-8 py-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 