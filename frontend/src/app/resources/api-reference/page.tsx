'use client';

import { motion } from 'framer-motion';

export default function ApiReference() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete documentation for integrating with Synvra's APIs
            </p>
          </div>

          {/* API Overview */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Our RESTful APIs provide programmatic access to Synvra's services. Use our APIs to integrate our services into your applications.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <pre className="text-white">
                    <code>
                      curl -X GET "https://api.synvra.com/v1/services" \{'\n'}
                      {'  '}-H "Authorization: Bearer YOUR_API_KEY"
                    </code>
                  </pre>
                </div>
                <h3 className="text-xl font-semibold mb-4">Authentication</h3>
                <p className="text-gray-600 mb-6">
                  All API requests require authentication using an API key. You can generate an API key from your dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="grid grid-cols-1 gap-8 mb-16">
            {[
              {
                method: 'GET',
                endpoint: '/v1/services',
                description: 'List all available services',
                parameters: [
                  { name: 'limit', type: 'integer', description: 'Number of records to return' },
                  { name: 'offset', type: 'integer', description: 'Number of records to skip' }
                ]
              },
              {
                method: 'POST',
                endpoint: '/v1/deployments',
                description: 'Create a new deployment',
                parameters: [
                  { name: 'service_id', type: 'string', description: 'ID of the service to deploy' },
                  { name: 'configuration', type: 'object', description: 'Deployment configuration' }
                ]
              },
              {
                method: 'GET',
                endpoint: '/v1/analytics',
                description: 'Retrieve analytics data',
                parameters: [
                  { name: 'start_date', type: 'string', description: 'Start date for analytics' },
                  { name: 'end_date', type: 'string', description: 'End date for analytics' }
                ]
              }
            ].map((endpoint, index) => (
              <motion.div
                key={endpoint.endpoint}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="ml-4 text-gray-900">{endpoint.endpoint}</code>
                  </div>
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Parameters</h4>
                    <div className="space-y-2">
                      {endpoint.parameters.map((param) => (
                        <div key={param.name} className="flex items-start">
                          <code className="text-sm text-blue-600 min-w-[100px]">{param.name}</code>
                          <span className="text-sm text-gray-500 min-w-[80px] mx-4">{param.type}</span>
                          <span className="text-sm text-gray-600">{param.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SDKs & Libraries */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">SDKs & Libraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  language: 'Python',
                  version: 'v2.1.0',
                  description: 'Official Python SDK for Synvra API'
                },
                {
                  language: 'JavaScript',
                  version: 'v3.0.1',
                  description: 'Official JavaScript SDK for Synvra API'
                },
                {
                  language: 'Java',
                  version: 'v1.5.0',
                  description: 'Official Java SDK for Synvra API'
                },
                {
                  language: 'Go',
                  version: 'v1.2.0',
                  description: 'Official Go SDK for Synvra API'
                },
                {
                  language: 'Ruby',
                  version: 'v2.0.0',
                  description: 'Official Ruby SDK for Synvra API'
                },
                {
                  language: '.NET',
                  version: 'v1.3.0',
                  description: 'Official .NET SDK for Synvra API'
                }
              ].map((sdk, index) => (
                <motion.div
                  key={sdk.language}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sdk.language}</h3>
                  <p className="text-sm text-gray-500 mb-4">{sdk.version}</p>
                  <p className="text-gray-600 mb-4">{sdk.description}</p>
                  <a
                    href={`/docs/sdk/${sdk.language.toLowerCase()}`}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                  >
                    View Documentation →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* API Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">API Status</h2>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-600 font-medium">All Systems Operational</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { metric: 'Uptime', value: '99.99%', trend: 'stable' },
                { metric: 'Response Time', value: '45ms', trend: 'improving' },
                { metric: 'Error Rate', value: '0.01%', trend: 'stable' }
              ].map((stat) => (
                <div key={stat.metric} className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">{stat.metric}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600">● {stat.trend}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Support & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-8">
              Our developer support team is here to help you integrate with our API
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/support"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Support
              </a>
              <a
                href="/docs"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View Documentation
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
