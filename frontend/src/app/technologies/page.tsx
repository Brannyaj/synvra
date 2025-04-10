'use client';

import Navigation from '@/components/Navigation';
import TechStackSection from '@/components/TechStackSection';

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Our Technology Stack
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build scalable, secure, and innovative solutions for our clients.
            </p>
          </div>
          <TechStackSection />
        </div>
      </div>
    </main>
  );
}
