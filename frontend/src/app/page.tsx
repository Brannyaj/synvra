'use client';

import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesSection from '@/components/ServicesSection';
import TechStackVisualizer from '@/components/TechStackVisualizer';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import ChatBox from '@/components/ChatBox';
import NextGenTechnology from '@/components/NextGenTechnology';
import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Welcome to Synvra - Digital Solutions
            </h1>
            <div className="grid grid-cols-1 gap-8">
              {/* Services */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  <Link href="/services" className="hover:text-blue-600">
                    Services →
                  </Link>
                </h2>
                <p className="text-gray-600">
                  Explore our comprehensive digital solutions and services.
                </p>
              </div>

              {/* About */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  <Link href="/about" className="hover:text-blue-600">
                    About →
                  </Link>
                </h2>
                <p className="text-gray-600">
                  Learn about our company and our mission.
                </p>
              </div>

              {/* Portfolio */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  <Link href="/portfolio" className="hover:text-blue-600">
                    Portfolio →
                  </Link>
                </h2>
                <p className="text-gray-600">
                  View our past projects and success stories.
                </p>
              </div>

              {/* Contact */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  <Link href="/contact" className="hover:text-blue-600">
                    Contact →
                  </Link>
                </h2>
                <p className="text-gray-600">
                  Get in touch with us for your next project.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}
