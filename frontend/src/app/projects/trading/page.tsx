'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function TradingPlatform() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-4">AI-Powered Trading Platform</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Revolutionary trading platform using machine learning for predictive analytics and automated trading strategies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-300 space-y-4">
              <p>
                Our AI-Powered Trading Platform represents the cutting edge of financial technology, 
                combining advanced machine learning algorithms with robust trading infrastructure to 
                deliver exceptional results for traders and investors.
              </p>
              <p>
                The platform processes vast amounts of market data in real-time, identifying patterns 
                and trends that would be impossible for human traders to detect manually. This allows 
                for more informed decision-making and improved trading outcomes.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-blue-500">50K+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">$2B+</div>
                  <div className="text-gray-400">Total Transactions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">94%</div>
                  <div className="text-gray-400">Prediction Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">24/7</div>
                  <div className="text-gray-400">Platform Availability</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Analytics</h3>
              <p className="text-gray-400">
                Process market data in real-time with advanced ML algorithms for immediate insights and trading opportunities.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Automated Trading</h3>
              <p className="text-gray-400">
                Execute trades automatically based on AI predictions and custom-defined strategies.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Security</h3>
              <p className="text-gray-400">
                Enterprise-grade security with multi-factor authentication and encrypted transactions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Python', 'TensorFlow', 'React', 'AWS'].map((tech) => (
              <div key={tech} className="bg-gray-800 p-6 rounded-xl text-center">
                <h3 className="text-xl font-semibold text-white">{tech}</h3>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Trading?</h2>
          <Link
            href="/quote"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.section>
      </div>
    </main>
  );
}
