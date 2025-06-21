'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    title: 'Website Development',
    description: 'Custom, responsive, and high-performance websites that drive business growth.',
    slug: 'web-applications'
  },
  {
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    slug: 'mobile-development'
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    title: 'Cloud Infrastructure Development',
    description: 'Scalable and secure cloud solutions that power your digital transformation.',
    slug: 'cloud-devops'
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    title: 'AI & Machine Learning Development',
    description: 'Intelligent solutions that leverage cutting-edge AI and ML technologies.',
    slug: 'ai-machine-learning'
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    title: 'IT Automation Development',
    description: 'Streamline operations and boost efficiency with smart automation solutions.',
    slug: 'enterprise-solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    title: 'Data Protection & Security Development',
    description: 'Comprehensive security solutions to protect your valuable digital assets.',
    slug: 'cybersecurity'
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    title: 'Smart Device & IoT Development',
    description: 'Connected solutions that bring intelligence to your devices and systems.',
    slug: 'iot-solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55',
    title: 'Blockchain & Web3 Development',
    description: 'Next-generation decentralized applications and blockchain solutions.',
    slug: 'blockchain'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'Custom Business Software Development',
    description: 'Tailored software solutions that address your unique business challenges.',
    slug: 'enterprise-solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    title: 'Data Analytics & Business Intelligence Development',
    description: 'Transform your data into actionable insights for informed decision-making.',
    slug: 'data-engineering'
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
      {/* Current Slide Only */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority={true}
            quality={100}
            sizes="100vw"
            onLoadingComplete={() => setIsLoading(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-white/90 mb-6">
                {slides[currentSlide].description}
              </p>
              <div className="flex gap-3">
                <Link href="/get-started">
                  <button className="button-primary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                    Get Started
                  </button>
                </Link>
                <Link href={`/services/${slides[currentSlide].slug}`}>
                  <button className="button-secondary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-10 h-10 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 