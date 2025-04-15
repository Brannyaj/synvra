'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Cybersecurity() {
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
            <div className="text-4xl mb-6">🔒</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity
            </h1>
            <p className="text-xl text-synvra-gray-300 mb-8">
              Advanced security solutions to protect your digital assets and infrastructure.
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
                  phase: 'Security Assessment',
                  description: 'Comprehensive evaluation of your security posture',
                  steps: [
                    'Vulnerability assessment',
                    'Threat modeling',
                    'Risk analysis',
                    'Compliance review'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'Security Architecture',
                  description: 'Designing robust security frameworks and controls',
                  steps: [
                    'Security framework design',
                    'Access control planning',
                    'Encryption strategy',
                    'Incident response planning'
                  ],
                  duration: '1-2 weeks'
                },
                {
                  phase: 'Implementation',
                  description: 'Deploying security measures and controls',
                  steps: [
                    'Security controls setup',
                    'Tool implementation',
                    'Policy enforcement',
                    'Security testing'
                  ],
                  duration: '4-8 weeks'
                },
                {
                  phase: 'Security Testing',
                  description: 'Validating security measures and identifying vulnerabilities',
                  steps: [
                    'Penetration testing',
                    'Security auditing',
                    'Compliance validation',
                    'Incident response drills'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'Continuous Security',
                  description: 'Ongoing security monitoring and improvement',
                  steps: [
                    'Security monitoring',
                    'Threat detection',
                    'Incident response',
                    'Security updates'
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
          <h2 className="section-heading mb-8">Ready to Secure Your Business?</h2>
          <p className="text-xl text-synvra-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build a robust security infrastructure that protects your digital assets.
          </p>
          <button className="button-primary">
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
} 