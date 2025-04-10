'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Documentation() {
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const categories = [
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'api-reference', name: 'API Reference' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'best-practices', name: 'Best Practices' },
  ];

  const docs = {
    'getting-started': [
      {
        title: 'Quick Start Guide',
        description: 'Learn how to get started with Synvra services in minutes.',
        icon: '📚',
      },
      {
        title: 'Installation',
        description: 'Step-by-step installation guide for all Synvra tools and SDKs.',
        icon: '⚙️',
      },
      {
        title: 'Basic Concepts',
        description: 'Understanding the fundamental concepts of Synvra platform.',
        icon: '🎯',
      },
    ],
    'api-reference': [
      {
        title: 'REST API',
        description: 'Complete reference for our REST API endpoints.',
        icon: '🔌',
      },
      {
        title: 'GraphQL API',
        description: 'Detailed documentation of our GraphQL schema and operations.',
        icon: '📊',
      },
      {
        title: 'WebSocket API',
        description: 'Real-time communication using WebSocket protocol.',
        icon: '⚡',
      },
    ],
    'tutorials': [
      {
        title: 'Building Your First App',
        description: 'Create a simple application using Synvra platform.',
        icon: '🏗️',
      },
      {
        title: 'Authentication',
        description: 'Implement secure authentication in your application.',
        icon: '🔒',
      },
      {
        title: 'Data Management',
        description: 'Learn how to effectively manage data in your application.',
        icon: '💾',
      },
    ],
    'best-practices': [
      {
        title: 'Security Guidelines',
        description: 'Best practices for securing your application.',
        icon: '🛡️',
      },
      {
        title: 'Performance Optimization',
        description: 'Tips and tricks for optimizing your application performance.',
        icon: '⚡',
      },
      {
        title: 'Code Organization',
        description: 'Recommended patterns for organizing your codebase.',
        icon: '📁',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about using Synvra's services and products
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Documentation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docs[selectedCategory].map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <a
                  href={`/docs/${selectedCategory}/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Search and Support */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Search Documentation</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search docs..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <a
                href="/support"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Support
                <svg className="ml-2 -mr-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
