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
      <main>
        <Navigation />
        <HeroSection />
        <NextGenTechnology />
        <FeaturedProjects />

        {/* Developer Excellence Section */}
        <section className="py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Elite Development Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Powered by over 200 exceptional developers from the top 1% of global talent
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-gray-900 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Full Stack Expertise</h3>
                <p className="text-gray-400">
                  Mastery in modern frameworks and technologies, from frontend to backend development
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-gray-900 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast Delivery</h3>
                <p className="text-gray-400">
                  Rapid development cycles with exceptional code quality and performance
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-gray-900 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Proven Excellence</h3>
                <p className="text-gray-400">
                  Rigorous selection process ensuring only the most skilled developers join our team
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">200+</div>
                <div className="text-gray-400">Elite Developers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">99%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">24/7</div>
                <div className="text-gray-400">Global Support</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 text-center"
            >
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 group"
              >
                Work with Elite Developers
                <svg 
                  className="ml-2 -mr-1 w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        <TechStackVisualizer />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <ChatBox />
      </main>
    </PageWrapper>
  );
}
