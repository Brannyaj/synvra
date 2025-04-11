'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="min-h-screen">
      {/* Navigation Links */}
      <div className="text-sm text-blue-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link>
        {' / '}
        <Link href="/services" className="hover:underline">Services</Link>
        {' / '}
        <Link href="/case-studies" className="hover:underline">Case Studies</Link>
        {' / '}
        <Link href="/technologies" className="hover:underline">Technologies</Link>
        {' / '}
        <Link href="/about" className="hover:underline">About</Link>
        {' / '}
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Transforming Ideas into{' '}
          <span className="text-blue-500">Digital Excellence</span>
        </h1>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          Delivering game-changing software solutions that drive measurable business growth. 
          Join industry leaders who trust us to transform their vision into market-leading products.
        </p>

        {/* Stats */}
        <div className="space-y-1 text-sm">
          <div>
            <span className="text-2xl font-bold text-blue-500">500+</span>
            <span className="text-sm text-gray-400 ml-2">Enterprise Clients</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-blue-500">99.9%</span>
            <span className="text-sm text-gray-400 ml-2">Success Rate</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-blue-500">2x</span>
            <span className="text-sm text-gray-400 ml-2">Development</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 mt-8">
          <Link
            href="/get-started"
            className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Started →
          </Link>
          <Link
            href="/case-studies"
            className="px-8 py-3 text-white border border-gray-600 rounded-md hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Background particles */}
      <div className="fixed inset-0 -z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
}
