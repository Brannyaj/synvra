'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function QuantumResearch() {
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
            <h1 className="text-5xl font-bold mb-4">Quantum Computing Research</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Cutting-edge quantum computing platform for complex simulations and optimization problems.
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
                Our Quantum Computing Research Platform pushes the boundaries of computational 
                capabilities, tackling complex problems that are intractable for classical computers. 
                Through quantum algorithms and simulation, we're unlocking new possibilities in 
                fields ranging from cryptography to drug discovery.
              </p>
              <p>
                The platform provides researchers and organizations with access to quantum computing 
                resources, enabling breakthrough discoveries and innovations in quantum algorithms 
                and applications.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-blue-500">100+</div>
                  <div className="text-gray-400">Research Papers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">50+</div>
                  <div className="text-gray-400">Patents</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">10x</div>
                  <div className="text-gray-400">Performance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">20+</div>
                  <div className="text-gray-400">Quantum Bits</div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quantum Simulation</h3>
              <p className="text-gray-400">
                Advanced quantum circuit simulation for testing and optimizing quantum algorithms.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Algorithm Development</h3>
              <p className="text-gray-400">
                Tools and frameworks for developing and testing quantum algorithms.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Error Correction</h3>
              <p className="text-gray-400">
                Advanced quantum error correction techniques for improved computation accuracy.
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
            {['Q#', 'Python', 'React', 'Azure Quantum'].map((tech) => (
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Explore Quantum Computing?</h2>
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
