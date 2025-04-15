'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PaymentPlatform() {
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
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e"
                alt="Global Payment Platform"
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
                  Global Payment Platform
                </h1>
                <p className="text-xl text-synvra-gray-300 mb-8">
                  A scalable payment infrastructure processing over $2B annually for a leading fintech company.
                </p>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Challenge</h2>
                    <p className="text-synvra-gray-300">
                      The client needed a robust, secure, and scalable payment platform capable of handling high-volume transactions globally while ensuring compliance with international financial regulations.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Solution</h2>
                    <p className="text-synvra-gray-300">
                      We developed a comprehensive payment platform with real-time processing, multi-currency support, and advanced fraud detection. The system integrates seamlessly with major payment providers and banking networks.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Real-time processing',
                        'Multi-currency support',
                        'Fraud detection',
                        'Payment analytics',
                        'Global compliance',
                        'Banking integration',
                        'Smart routing',
                        'Transaction monitoring'
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
                          metric: '$2B+',
                          label: 'Annual Volume',
                          description: 'Processed securely'
                        },
                        {
                          metric: '500K+',
                          label: 'Daily Transactions',
                          description: 'Processed globally'
                        },
                        {
                          metric: '99.99%',
                          label: 'Uptime',
                          description: 'System reliability'
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
                          'React',
                          'Node.js',
                          'PostgreSQL',
                          'AWS',
                          'Redis',
                          'Kubernetes',
                          'Docker',
                          'Stripe API'
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
                      <p className="text-synvra-gray-300">12 months from concept to deployment</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Team Size</h3>
                      <p className="text-synvra-gray-300">18 specialists including:</p>
                      <ul className="mt-2 space-y-2">
                        {[
                          'Backend Engineers',
                          'Frontend Developers',
                          'Security Specialists',
                          'DevOps Engineers',
                          'Financial Experts'
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
          <h2 className="section-heading mb-8">Build Your Payment Infrastructure</h2>
          <p className="text-xl text-synvra-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a secure and scalable payment platform that powers your financial operations.
          </p>
          <button className="button-primary">
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
} 