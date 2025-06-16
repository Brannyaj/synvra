'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function WebApplications() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <div className="text-4xl mb-6">🌐</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Applications
            </h1>
            <p className="text-xl text-synvra-gray-300 mb-8">
              Scalable, responsive web applications with modern architecture and seamless UX.
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
                  phase: 'Requirements & UX',
                  description: 'Defining your web application requirements and user experience',
                  steps: [
                    'User research',
                    'Feature specification',
                    'UX/UI wireframing',
                    'Technical planning'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'Design & Architecture',
                  description: 'Creating the visual design and technical architecture',
                  steps: [
                    'UI design system',
                    'Frontend architecture',
                    'Backend planning',
                    'API design'
                  ],
                  duration: '1-2 weeks'
                },
                {
                  phase: 'Development & Testing',
                  description: 'Building and testing your web application',
                  steps: [
                    'Frontend development',
                    'Backend implementation',
                    'Integration testing',
                    'Performance optimization'
                  ],
                  duration: '4-8 weeks'
                },
                {
                  phase: 'Launch & Deployment',
                  description: 'Deploying your application to production',
                  steps: [
                    'Security testing',
                    'Production deployment',
                    'Load testing',
                    'Launch support'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'Maintenance & Updates',
                  description: 'Keeping your application running smoothly',
                  steps: [
                    'Performance monitoring',
                    'Security updates',
                    'Feature updates',
                    'Technical support'
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
          <h2 className="section-heading mb-8">Ready to Transform Your Web Presence?</h2>
          <p className="text-xl text-synvra-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build a powerful web application that drives your business forward and delights your users.
          </p>
          <button 
            className="button-primary px-8 py-3 text-lg font-medium hover:bg-synvra-blue/90 active:bg-synvra-blue/80 cursor-pointer"
            type="button"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
} 