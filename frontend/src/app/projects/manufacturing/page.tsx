'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Manufacturing() {
  return (
    <main className="min-h-screen bg-synvra-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 py-4 nav-blur">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Synvra</span>
            </Link>
            <Link href="/" className="text-synvra-gray-200 hover:text-synvra-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Smart Manufacturing Platform"
                width={1200}
                height={675}
                className="object-cover w-full h-full"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-synvra-black to-transparent" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Smart Manufacturing Platform
                </h1>
                <p className="text-xl text-synvra-gray-300 mb-8">
                  An IoT-powered manufacturing solution that revolutionizes industrial operations through predictive maintenance and real-time monitoring.
                </p>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Challenge</h2>
                    <p className="text-synvra-gray-300">
                      Manufacturing facilities faced significant challenges with equipment downtime, maintenance costs, and production inefficiencies. They needed a smart solution to optimize operations and prevent costly disruptions.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Solution</h2>
                    <p className="text-synvra-gray-300">
                      We developed an advanced IoT platform that connects industrial equipment to a central monitoring system. The solution uses machine learning for predictive maintenance, real-time analytics for performance optimization, and automated alerts for potential issues.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Real-time monitoring',
                        'Predictive maintenance',
                        'Equipment analytics',
                        'Performance optimization',
                        'Automated alerts',
                        'Energy management',
                        'Quality control',
                        'Production scheduling'
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center text-synvra-gray-300">
                          <div className="w-1.5 h-1.5 bg-synvra-blue rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          metric: '45%',
                          label: 'Reduced Downtime',
                          description: 'Through predictive maintenance'
                        },
                        {
                          metric: '30%',
                          label: 'Cost Savings',
                          description: 'In maintenance expenses'
                        },
                        {
                          metric: '25%',
                          label: 'Efficiency Gain',
                          description: 'In production output'
                        }
                      ].map((stat, index) => (
                        <div key={index} className="glass-card p-6 text-center">
                          <div className="text-3xl font-bold text-synvra-white mb-2">{stat.metric}</div>
                          <div className="text-lg font-semibold text-synvra-blue mb-2">{stat.label}</div>
                          <div className="text-sm text-synvra-gray-300">{stat.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="glass-card p-8 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'IoT',
                          'Azure IoT',
                          'React',
                          'TypeScript',
                          'Python',
                          'TensorFlow',
                          'Node.js',
                          'MongoDB'
                        ].map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-synvra-blue/10 text-synvra-blue rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Timeline</h3>
                      <p className="text-synvra-gray-300">10 months from concept to deployment</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Team Size</h3>
                      <p className="text-synvra-gray-300">14 specialists including:</p>
                      <ul className="mt-2 space-y-2">
                        {[
                          'IoT Engineers',
                          'ML Engineers',
                          'Frontend Developers',
                          'Backend Developers',
                          'Industrial Experts'
                        ].map((role, index) => (
                          <li key={index} className="flex items-center text-synvra-gray-300">
                            <div className="w-1.5 h-1.5 bg-synvra-blue rounded-full mr-2" />
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading mb-8">Optimize Your Manufacturing Operations</h2>
          <p className="text-xl text-synvra-gray-300 mb-8 max-w-2xl mx-auto">
            Let's transform your manufacturing facility with smart IoT solutions and predictive analytics.
          </p>
          <Link href="/get-started">
            <button className="button-primary">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
} 