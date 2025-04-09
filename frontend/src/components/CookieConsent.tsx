'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import * as analytics from '@/utils/analytics';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    
    // Track consent in analytics
    analytics.event({
      action: 'cookie_consent',
      category: 'Consent',
      label: 'accepted',
    });

    // Reload page to enable analytics
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
    
    // Track decline in analytics (if allowed)
    analytics.event({
      action: 'cookie_consent',
      category: 'Consent',
      label: 'declined',
    });
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Cookie Consent</h2>
                <p className="text-gray-600 text-sm mb-4 md:mb-0">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  This includes analytics cookies that help us understand how you use our website.{' '}
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="mt-4 flex flex-shrink-0 md:ml-6 md:mt-0 space-x-3">
                <button
                  onClick={handleDecline}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
