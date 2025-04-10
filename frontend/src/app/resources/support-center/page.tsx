'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SupportCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
            <p className="text-xl text-gray-600">
              Find answers and get help with Synvra services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Popular Topics
              </h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Getting Started Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Account Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Billing & Payments
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Technical Support
              </h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Integration Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Troubleshooting
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Resources
              </h2>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Video Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Community Forums
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  How do I get started with Synvra?
                </h3>
                <p className="text-gray-600">
                  Sign up for an account, complete our onboarding process, and our team will guide you through the initial setup.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  What support options are available?
                </h3>
                <p className="text-gray-600">
                  We offer email support, live chat, phone support, and dedicated account managers for enterprise clients.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  How can I report a technical issue?
                </h3>
                <p className="text-gray-600">
                  Submit a ticket through our support portal or contact our technical support team directly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Additional Help?
            </h2>
            <p className="text-gray-600 mb-6">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <div className="flex space-x-4">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Support
              </a>
              <a
                href="/resources/documentation"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
