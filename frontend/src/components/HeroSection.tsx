'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { trackContactClick } from '@/utils/analytics';

export default function HeroSection() {
  const handleContactClick = () => {
    trackContactClick('hero_section');
  };

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <motion.div 
                className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <div className="inline-flex items-center text-white bg-gray-800 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-500 rounded-full">
                      What's New
                    </span>
                    <span className="ml-4 text-sm">
                      Introducing AI-Powered Development
                    </span>
                    <svg className="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Transform Your</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 pb-3">
                      Digital Vision
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    We craft exceptional software solutions that drive innovation and business growth. From AI-powered applications to enterprise systems, we're your partner in digital excellence.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <Link
                          href="/contact"
                          onClick={handleContactClick}
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                        >
                          Start Your Project
                        </Link>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link
                          href="/case-studies"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        >
                          View Case Studies
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gray-800 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div className="space-y-6">
                      <div className="text-center text-xl text-white font-semibold">
                        Our Impact
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-500">500+</div>
                          <div className="text-sm text-gray-300">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-500">98%</div>
                          <div className="text-sm text-gray-300">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-500">45+</div>
                          <div className="text-sm text-gray-300">Countries Served</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-yellow-500">24/7</div>
                          <div className="text-sm text-gray-300">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-700 sm:px-10">
                    <p className="text-xs leading-5 text-gray-300">
                      Trusted by Fortune 500 companies and innovative startups worldwide
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
