'use client';

import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of software development services to help your business thrive in the digital age.
            </p>
          </div>
          <ServicesSection />
        </div>
      </div>
    </main>
  );
}
