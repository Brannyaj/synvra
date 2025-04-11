'use client';

import { motion } from 'framer-motion';
import PortfolioSection from '@/components/PortfolioSection';
import { ndaDisclaimer } from '@/data/expanded-portfolio';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {ndaDisclaimer}
          </p>
        </motion.div>

        <PortfolioSection />
      </div>
    </div>
  );
}
