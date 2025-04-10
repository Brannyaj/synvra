'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HealthcareAnalytics() {
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
            <h1 className="text-5xl font-bold mb-4">Healthcare Analytics Platform</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Advanced healthcare analytics platform leveraging AI for predictive diagnosis and patient care optimization.
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
                Our Healthcare Analytics Platform revolutionizes patient care through advanced AI and 
                machine learning algorithms. By analyzing vast amounts of medical data, we help healthcare 
                providers make more accurate diagnoses and develop personalized treatment plans.
              </p>
              <p>
                The platform integrates seamlessly with existing hospital systems while maintaining 
                the highest standards of data security and patient privacy, making it an invaluable 
                tool for modern healthcare facilities.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-blue-500">100+</div>
                  <div className="text-gray-400">Hospitals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">1M+</div>
                  <div className="text-gray-400">Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500">95%</div>
                  <div className="text-gray-400">Accuracy Rate</div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Predictive Diagnosis</h3>
              <p className="text-gray-400">
                AI-powered analysis of patient data for early detection and accurate diagnosis of conditions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Patient Monitoring</h3>
              <p className="text-gray-400">
                Real-time monitoring and analysis of patient vitals with instant alerts for critical changes.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Treatment Planning</h3>
              <p className="text-gray-400">
                Data-driven treatment recommendations based on patient history and similar case outcomes.
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
            {['Python', 'TensorFlow', 'React', 'GCP'].map((tech) => (
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Healthcare?</h2>
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
