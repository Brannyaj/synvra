'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Sitemap() {
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

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Sitemap</h1>
        
        <div className="max-w-4xl mx-auto grid gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-synvra-white">Main Pages</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-synvra-white">Services</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/services/web-applications" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-solutions" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/data-engineering" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/blockchain" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Blockchain Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/iot-solutions" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  IoT Solutions
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-synvra-white">Legal</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-synvra-gray-300 hover:text-synvra-white transition-colors">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 