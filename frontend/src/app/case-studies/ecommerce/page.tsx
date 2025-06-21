'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EcommerceCaseStudy() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-synvra-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gradient mb-8">Enterprise E-commerce Platform Case Study</h1>
          
          {/* Client Overview */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">Client Overview</h2>
            <p className="text-synvra-gray-300 mb-4">
              Global Retail Corporation, a leading retail company with operations in 15 countries, needed to transform their traditional retail business into a modern, omnichannel shopping experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-synvra-white mb-2">500%</div>
                <div className="text-synvra-gray-300">Increase in Online Sales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-synvra-white mb-2">99.99%</div>
                <div className="text-synvra-gray-300">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-synvra-white mb-2">15+</div>
                <div className="text-synvra-gray-300">Countries Served</div>
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">The Challenge</h2>
            <ul className="list-disc list-inside space-y-4 text-synvra-gray-300">
              <li>Legacy systems unable to handle growing online traffic</li>
              <li>Poor integration between online and offline channels</li>
              <li>Limited scalability during peak shopping seasons</li>
              <li>Inconsistent customer experience across different regions</li>
            </ul>
          </section>

          {/* Solution */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">Our Solution</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-synvra-white mb-2">Microservices Architecture</h3>
                <p className="text-synvra-gray-300">
                  Developed a scalable microservices architecture using Node.js and React, enabling independent scaling of different platform components.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-synvra-white mb-2">Cloud Infrastructure</h3>
                <p className="text-synvra-gray-300">
                  Implemented AWS-based cloud infrastructure with auto-scaling capabilities to handle variable traffic loads.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-synvra-white mb-2">Omnichannel Integration</h3>
                <p className="text-synvra-gray-300">
                  Created seamless integration between online and offline channels using real-time inventory management.
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">Results & Impact</h2>
            <div className="space-y-4 text-synvra-gray-300">
              <p>• 500% increase in online sales within the first year</p>
              <p>• 99.99% platform uptime, even during peak seasons</p>
              <p>• 60% improvement in customer satisfaction scores</p>
              <p>• 45% reduction in operational costs</p>
              <p>• Successful expansion to 15+ countries</p>
            </div>
          </section>

          {/* Technologies Used */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'React', 'Node.js', 'PostgreSQL', 'Redis',
                'AWS', 'Docker', 'Kubernetes', 'Elasticsearch'
              ].map((tech, index) => (
                <div key={index} className="px-4 py-2 bg-synvra-blue/10 rounded-full text-center text-synvra-gray-200">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-synvra-gray-300 mb-6">Ready to transform your business?</p>
            <Link 
              href="/get-started" 
              className="button-primary inline-block px-8 py-3 text-lg font-medium"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 