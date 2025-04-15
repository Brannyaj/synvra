'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AIMachineLearning() {
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
            <div className="text-4xl mb-6">🤖</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI & Machine Learning
            </h1>
            <p className="text-xl text-synvra-gray-300 mb-8">
              Intelligent solutions powered by advanced AI algorithms and machine learning models.
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
                  phase: 'Data Assessment & Strategy',
                  description: 'Evaluating your data and defining AI implementation strategy',
                  steps: [
                    'Data quality analysis',
                    'Use case identification',
                    'Success metrics definition',
                    'Technical requirements gathering'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'Model Design & Planning',
                  description: 'Designing the AI/ML architecture and selecting algorithms',
                  steps: [
                    'Algorithm selection',
                    'Model architecture design',
                    'Data pipeline planning',
                    'Infrastructure setup'
                  ],
                  duration: '1-2 weeks'
                },
                {
                  phase: 'Development & Training',
                  description: 'Building and training the AI/ML models',
                  steps: [
                    'Model development',
                    'Training iterations',
                    'Performance optimization',
                    'Integration testing'
                  ],
                  duration: '4-8 weeks'
                },
                {
                  phase: 'Deployment & Validation',
                  description: 'Implementing the solution in your environment',
                  steps: [
                    'Model deployment',
                    'Performance monitoring',
                    'A/B testing',
                    'User training'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'Monitoring & Optimization',
                  description: 'Ensuring model accuracy and performance',
                  steps: [
                    'Performance tracking',
                    'Model retraining',
                    'Continuous improvement',
                    '24/7 monitoring'
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
          <h2 className="section-heading mb-8">Ready to Implement AI in Your Business?</h2>
          <p className="text-xl text-synvra-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and machine learning solutions can transform your business operations.
          </p>
          <button className="button-primary">
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
} 