'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HealthcareCaseStudy() {
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
          <h1 className="text-4xl font-bold text-gradient mb-8">Healthcare Management System Case Study</h1>
          
          {/* Client Overview */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">Client Overview</h2>
            <p className="text-synvra-gray-300 mb-4">
              National Healthcare Provider, a leading healthcare organization serving millions of patients across multiple states, needed to modernize their patient care and management systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-synvra-white mb-2">30%</div>
                <div className="text-synvra-gray-300">Improved Patient Care</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-synvra-white mb-2">45%</div>
                <div className="text-synvra-gray-300">Reduced Wait Times</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-synvra-white mb-2">1M+</div>
                <div className="text-synvra-gray-300">Patients Served</div>
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">The Challenge</h2>
            <ul className="list-disc list-inside space-y-4 text-synvra-gray-300">
              <li>Fragmented patient data across multiple systems</li>
              <li>Long wait times and inefficient scheduling</li>
              <li>Limited access to real-time patient information</li>
              <li>Complex compliance requirements (HIPAA)</li>
            </ul>
          </section>

          {/* Solution */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">Our Solution</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-synvra-white mb-2">Unified Health Records</h3>
                <p className="text-synvra-gray-300">
                  Developed a centralized Electronic Health Records (EHR) system with real-time synchronization and HIPAA compliance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-synvra-white mb-2">Smart Scheduling</h3>
                <p className="text-synvra-gray-300">
                  Implemented AI-powered scheduling system to optimize appointment times and reduce wait periods.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-synvra-white mb-2">Mobile Access</h3>
                <p className="text-synvra-gray-300">
                  Created secure mobile applications for both patients and healthcare providers to access information on-the-go.
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">Results & Impact</h2>
            <div className="space-y-4 text-synvra-gray-300">
              <p>• 30% improvement in patient care quality metrics</p>
              <p>• 45% reduction in average wait times</p>
              <p>• 80% faster access to patient records</p>
              <p>• 50% increase in patient satisfaction scores</p>
              <p>• 100% HIPAA compliance maintained</p>
            </div>
          </section>

          {/* Technologies Used */}
          <section className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-synvra-white mb-4">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Python', 'React Native', 'MongoDB', 'TensorFlow',
                'Azure', 'Docker', 'Kubernetes', 'Redis'
              ].map((tech, index) => (
                <div key={index} className="px-4 py-2 bg-synvra-blue/10 rounded-full text-center text-synvra-gray-200">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-synvra-gray-300 mb-6">Ready to transform your healthcare operations?</p>
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