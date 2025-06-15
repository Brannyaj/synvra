'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    title: 'Website Development',
    description: 'Custom, responsive, and high-performance websites that drive business growth.'
  },
  {
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    title: 'Cloud Infrastructure Development',
    description: 'Scalable and secure cloud solutions that power your digital transformation.'
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    title: 'AI & Machine Learning Development',
    description: 'Intelligent solutions that leverage cutting-edge AI and ML technologies.'
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    title: 'IT Automation Development',
    description: 'Streamline operations and boost efficiency with smart automation solutions.'
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    title: 'Data Protection & Security Development',
    description: 'Comprehensive security solutions to protect your valuable digital assets.'
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    title: 'Smart Device & IoT Development',
    description: 'Connected solutions that bring intelligence to your devices and systems.'
  },
  {
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55',
    title: 'Blockchain & Web3 Development',
    description: 'Next-generation decentralized applications and blockchain solutions.'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'Custom Business Software Development',
    description: 'Tailored software solutions that address your unique business challenges.'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    title: 'Data Analytics & Business Intelligence Development',
    description: 'Transform your data into actionable insights for informed decision-making.'
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