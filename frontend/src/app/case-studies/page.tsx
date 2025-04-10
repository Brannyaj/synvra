'use client';

import Navigation from '@/components/Navigation';
import CaseStudiesSection from '@/components/CaseStudiesSection';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Case Studies
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
            </p>
          </div>
          <CaseStudiesSection />
        </div>
      </div>
    </main>
  );
}
