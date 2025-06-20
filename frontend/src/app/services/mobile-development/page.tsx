'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MobileDevelopment() {
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
            <div className="text-4xl mb-6">📱</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile Development
            </h1>
            <p className="text-xl text-synvra-gray-300 mb-8">
              Native and cross-platform mobile apps for iOS and Android with cutting-edge features.
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
                  phase: 'Discovery & Planning',
                  description: 'Understanding your mobile app requirements and target audience',
                  steps: [
                    'Market research',
                    'Platform selection',
                    'Feature prioritization',
                    'Technical feasibility'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'UX/UI Design',
                  description: 'Creating intuitive and engaging mobile interfaces',
                  steps: [
                    'User flow design',
                    'Interface mockups',
                    'Interactive prototypes',
                    'Design system creation'
                  ],
                  duration: '1-2 weeks'
                },
                {
                  phase: 'Development & Testing',
                  description: 'Building and testing your mobile application',
                  steps: [
                    'Native/cross-platform development',
                    'API integration',
                    'Performance optimization',
                    'Device testing'
                  ],
                  duration: '4-8 weeks'
                },
                {
                  phase: 'Launch & Store Release',
                  description: 'Deploying your app to app stores',
                  steps: [
                    'App store optimization',
                    'Store submission',
                    'Release management',
                    'Launch marketing'
                  ],
                  duration: '1 week'
                },
                {
                  phase: 'Maintenance & Updates',
                  description: 'Keeping your app updated and performing well',
                  steps: [
                    'Performance monitoring',
                    'Bug fixes',
                    'Feature updates',
                    'Platform compliance'
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
          <h2 className="section-heading mb-8">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-synvra-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a powerful mobile experience that engages your users and drives growth.
          </p>
          <Link href="/get-started">
            <button 
              className="button-primary px-8 py-3 text-lg font-medium hover:bg-synvra-blue/90 active:bg-synvra-blue/80 cursor-pointer"
              type="button"
            >
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
} 