'use client';

import { Suspense } from 'react';

function TermsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-xl text-gray-600">
          Please read these terms carefully before using our services
        </p>
      </div>

      <div className="prose prose-blue max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using Synvra's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Permission is granted to temporarily access our services for personal, non-commercial use.</li>
            <li>This license does not include:
              <ul className="list-disc pl-6 mt-2">
                <li>Modifying or copying our materials</li>
                <li>Using materials for commercial purposes</li>
                <li>Attempting to decompile or reverse engineer any software</li>
                <li>Removing any copyright or proprietary notations</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Availability</h2>
          <p className="text-gray-600 mb-4">
            We strive to ensure our services are available 24/7, but we cannot guarantee uninterrupted access. We reserve the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Modify or discontinue any service without notice</li>
            <li>Limit access to services based on geographic location</li>
            <li>Suspend accounts that violate these terms</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Data Protection</h2>
          <p className="text-gray-600 mb-4">
            Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  We are committed to protecting your privacy and handling your data in accordance with applicable data protection laws.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-600">
            Synvra shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services.
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          If you have any questions about these Terms of Service, please contact us.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Suspense fallback={<div>Loading terms of service...</div>}>
        <TermsContent />
      </Suspense>
    </div>
  );
}
