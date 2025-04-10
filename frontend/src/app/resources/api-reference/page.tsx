'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ApiReference() {
  // Get any URL parameters directly from window.location
  useEffect(() => {
    const url = new URL(window.location.href);
    // Handle any URL parameters if needed
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
          <p className="text-xl text-gray-600">
            Complete documentation for Synvra's APIs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              REST API
            </h2>
            <p className="text-gray-600 mb-4">
              Our RESTful API provides programmatic access to Synvra's core functionality.
            </p>
            <a
              href="/docs/rest-api"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Documentation →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              GraphQL API
            </h2>
            <p className="text-gray-600 mb-4">
              Our GraphQL API offers flexible data querying and manipulation.
            </p>
            <a
              href="/docs/graphql"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Documentation →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              WebSocket API
            </h2>
            <p className="text-gray-600 mb-4">
              Real-time data streaming and updates via WebSocket connections.
            </p>
            <a
              href="/docs/websocket"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View Documentation →
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Getting Started
          </h2>
          <div className="prose max-w-none">
            <h3>Authentication</h3>
            <p>
              All API requests require authentication using an API key. You can generate
              an API key from your dashboard.
            </p>

            <h3 className="mt-6">Rate Limiting</h3>
            <p>
              Our APIs implement rate limiting to ensure fair usage. Standard plans
              are limited to 1000 requests per minute.
            </p>

            <h3 className="mt-6">Error Handling</h3>
            <p>
              Our APIs use standard HTTP response codes and provide detailed error
              messages in the response body.
            </p>

            <h3 className="mt-6">Support</h3>
            <p>
              Need help? Our developer support team is available 24/7. Contact us
              through our support portal or join our developer community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
