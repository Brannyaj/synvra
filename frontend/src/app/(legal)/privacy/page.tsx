'use client';

import { Suspense } from 'react';
import Navigation from '@/components/Navigation';

function PrivacyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrivacyContent />
    </Suspense>
  );
}

function PrivacyContent() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
            <div className="mt-6 prose prose-indigo prose-lg">
              <p>Last updated: April 10, 2025</p>

              <h2>Introduction</h2>
              <p>
                At Synvra, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul>
                <li>Name and contact information</li>
                <li>Company details</li>
                <li>Project requirements</li>
                <li>Communication preferences</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Communicate with you about your projects</li>
                <li>Send you important updates and notifications</li>
                <li>Analyze and enhance our website performance</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@synvra.com<br />
                Address: 123 Tech Street, Silicon Valley, CA 94025
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPage;
