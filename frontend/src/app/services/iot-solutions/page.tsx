'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function IoTSolutions() {
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

      {/* Service Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-6">📡</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IoT Solutions
            </h1>
            <p className="text-xl text-synvra-gray-300 mb-8">
              Connected device ecosystems with real-time monitoring and control capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">Our Development Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {[
                {
                  phase: 'IoT Assessment',
                  description: 'Evaluating your IoT requirements and ecosystem design',
                  steps: [
                    'Device requirements',
                    'Network planning',
                    'Data strategy',
                    'Security assessment'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'Architecture Design',
                  description: 'Designing your IoT ecosystem architecture',
                  steps: [
                    'Device architecture',
                    'Network topology',
                    'Data flow design',
                    'Security framework'
                  ],
                  duration: '1-2 weeks'
                },
                {
                  phase: 'Development & Testing',
                  description: 'Building and testing IoT solutions',
                  steps: [
                    'Device firmware',
                    'Gateway development',
                    'Cloud integration',
                    'System testing'
                  ],
                  duration: '4-8 weeks'
                },
                {
                  phase: 'Deployment & Setup',
                  description: 'Deploying and configuring your IoT ecosystem',
                  steps: [
                    'Device deployment',
                    'Network setup',
                    'System integration',
                    'Performance validation'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'Monitoring & Support',
                  description: 'Ensuring optimal performance of your IoT ecosystem',
                  steps: [
                    'Device monitoring',
                    'Performance tracking',
                    'Security updates',
                    'System maintenance'
                  ],
                  duration: 'Ongoing'
                }
              ].map((phase, index) => (
                <div key={index} className="glass-card p-8 relative">
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-synvra-blue/20 flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-synvra-white">{phase.phase}</h3>
                        <span className="text-synvra-blue text-sm px-3 py-1 rounded-full bg-synvra-blue/10">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-synvra-gray-300 mb-6">{phase.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {phase.steps.map((step, i) => (
                          <div key={i} className="flex items-center text-synvra-gray-200">
                            <div className="w-1.5 h-1.5 bg-synvra-blue rounded-full mr-2" />
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading mb-8">Ready to Connect Your Devices?</h2>
          <p className="text-xl text-synvra-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build an intelligent IoT ecosystem that transforms your operations.
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