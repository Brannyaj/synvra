'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';

export default function CloudSolutions() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cloud Solutions</h1>
            <p className="text-xl text-gray-600">
              Scalable, secure, and efficient cloud infrastructure for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cloud Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive cloud solutions that help businesses scale,
                innovate, and optimize their operations. Our expertise spans across
                major cloud platforms and modern cloud-native technologies.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Expertise
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cloud Migration</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Serverless Architecture</li>
                  <li>• Container Orchestration</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cloud Platforms
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Amazon Web Services (AWS)</li>
                  <li>• Microsoft Azure</li>
                  <li>• Google Cloud Platform</li>
                  <li>• Multi-cloud Solutions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Benefits
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Improved Scalability</li>
                  <li>• Enhanced Security</li>
                  <li>• Cost Optimization</li>
                  <li>• High Availability</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24">
                  <span className="text-blue-600 font-semibold">Phase 1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Assessment
                  </h3>
                  <p className="text-gray-600">
                    Evaluate current infrastructure and define cloud strategy
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24">
                  <span className="text-blue-600 font-semibold">Phase 2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Planning
                  </h3>
                  <p className="text-gray-600">
                    Design cloud architecture and migration roadmap
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24">
                  <span className="text-blue-600 font-semibold">Phase 3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Implementation
                  </h3>
                  <p className="text-gray-600">
                    Execute migration and setup cloud infrastructure
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24">
                  <span className="text-blue-600 font-semibold">Phase 4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Optimization
                  </h3>
                  <p className="text-gray-600">
                    Monitor, maintain, and optimize cloud resources
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Ready to move to the cloud?
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
