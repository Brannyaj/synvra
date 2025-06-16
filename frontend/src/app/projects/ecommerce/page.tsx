'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Ecommerce() {
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

      {/* Project Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="E-commerce Ecosystem"
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
                  E-commerce Ecosystem
                </h1>
                <p className="text-xl text-synvra-gray-300 mb-8">
                  A comprehensive e-commerce platform with AI-powered recommendations and real-time analytics, driving significant business growth.
                </p>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Challenge</h2>
                    <p className="text-synvra-gray-300">
                      The client needed a modern e-commerce solution that could handle high traffic, provide personalized shopping experiences, and integrate with multiple third-party services while maintaining exceptional performance.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Solution</h2>
                    <p className="text-synvra-gray-300">
                      We developed a scalable e-commerce ecosystem using microservices architecture, featuring AI-powered product recommendations, real-time inventory management, and advanced analytics for data-driven decision making.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'AI recommendations',
                        'Real-time analytics',
                        'Inventory management',
                        'Multi-vendor support',
                        'Payment integration',
                        'Mobile optimization',
                        'Search optimization',
                        'Customer insights'
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
                          metric: '300%',
                          label: 'Sales Growth',
                          description: 'Year-over-year increase'
                        },
                        {
                          metric: '50%',
                          label: 'Better Conversion',
                          description: 'Through AI recommendations'
                        },
                        {
                          metric: '2M+',
                          label: 'Monthly Users',
                          description: 'Active on platform'
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
                          'Next.js',
                          'GraphQL',
                          'AWS',
                          'Redis',
                          'PostgreSQL',
                          'Elasticsearch',
                          'Docker',
                          'Kubernetes'
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
                      <p className="text-synvra-gray-300">7 months from concept to launch</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Team Size</h3>
                      <p className="text-synvra-gray-300">16 specialists including:</p>
                      <ul className="mt-2 space-y-2">
                        {[
                          'Full Stack Developers',
                          'UX/UI Designers',
                          'DevOps Engineers',
                          'Data Scientists',
                          'E-commerce Specialists'
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
          <h2 className="section-heading mb-8">Transform Your E-commerce Business</h2>
          <p className="text-xl text-synvra-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build a powerful e-commerce platform that drives growth and delivers exceptional customer experiences.
          </p>
          <button 
            className="button-primary"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
} 