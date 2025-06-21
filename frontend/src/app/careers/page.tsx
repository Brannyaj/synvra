'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Careers() {
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 nav-blur' : 'py-6'}`}>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-synvra-white">Join Our Team</h1>
            <p className="text-xl text-synvra-gray-300 max-w-3xl mx-auto">
              Build the future of software with us. We're always looking for talented individuals who share our passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 text-center">
              <div className="text-6xl mb-6">🔍</div>
              <h2 className="text-2xl font-bold text-synvra-white mb-4">No Current Openings</h2>
              <p className="text-synvra-gray-300 mb-8">
                While we don't have any positions available at the moment, we're always interested in connecting with talented individuals. Feel free to send us your resume for future opportunities.
              </p>
              <Link href="/contact">
                <button className="button-primary px-8 py-3">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-synvra-white mb-12 text-center">Why Join Synvra?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-synvra-white mb-3">Innovation First</h3>
                <p className="text-synvra-gray-300">
                  Work on cutting-edge projects using the latest technologies and best practices.
                </p>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-synvra-white mb-3">Growth Opportunities</h3>
                <p className="text-synvra-gray-300">
                  Continuous learning and development with access to resources and mentorship.
                </p>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-synvra-white mb-3">Collaborative Culture</h3>
                <p className="text-synvra-gray-300">
                  Work with a diverse team of experts in a supportive and inclusive environment.
                </p>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-synvra-white mb-3">Work-Life Balance</h3>
                <p className="text-synvra-gray-300">
                  Flexible work arrangements and policies that support your wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synvra-white mb-6">Stay Connected</h2>
            <p className="text-synvra-gray-300 mb-8">
              Follow us on social media to be the first to know about new opportunities.
            </p>
            <div className="flex justify-center space-x-6">
              <Link 
                href="https://www.linkedin.com/company/synvra617/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 hover:border-synvra-blue/30 transition-all duration-300"
              >
                <div className="text-3xl">💼</div>
                <div className="text-sm text-synvra-gray-300 mt-2">LinkedIn</div>
              </Link>
              <Link 
                href="https://www.tiktok.com/@synvra?_t=ZT-8xO7M8KuWKs&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 hover:border-synvra-blue/30 transition-all duration-300"
              >
                <div className="text-3xl">📱</div>
                <div className="text-sm text-synvra-gray-300 mt-2">TikTok</div>
              </Link>
              <Link 
                href="https://www.facebook.com/share/1A6b2wrgDC/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 hover:border-synvra-blue/30 transition-all duration-300"
              >
                <div className="text-3xl">👥</div>
                <div className="text-sm text-synvra-gray-300 mt-2">Facebook</div>
              </Link>
              <Link 
                href="https://www.instagram.com/synvra_?igsh=MXN2NnJ5aGt0N2VyeQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-4 hover:border-synvra-blue/30 transition-all duration-300"
              >
                <div className="text-3xl">📸</div>
                <div className="text-sm text-synvra-gray-300 mt-2">Instagram</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 