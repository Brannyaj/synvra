'use client';

import Navigation from '@/components/Navigation';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import PageWrapper from '@/components/PageWrapper';
import { Suspense } from 'react';
import { ndaDisclaimer } from '@/data/expanded-case-studies';

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
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
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800">
                  {ndaDisclaimer}
                </p>
              </div>
            </div>
            <Suspense fallback={
              <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            }>
              <CaseStudiesSection />
            </Suspense>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
