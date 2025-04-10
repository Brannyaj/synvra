'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import QuoteForm from '@/components/QuoteForm';
import { useRouter } from 'next/navigation';

export default function QuotePage() {
  const router = useRouter();

  // Force a full page reload when navigating to this page
  useEffect(() => {
    const url = new URL(window.location.href);
    const service = url.searchParams.get('service');
    if (service) {
      const descriptionInput = document.getElementById('description') as HTMLTextAreaElement;
      if (descriptionInput) {
        descriptionInput.value = `I'm interested in your ${service} service. Specifically, I need help with...`;
        descriptionInput.focus();
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get a Quote</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
