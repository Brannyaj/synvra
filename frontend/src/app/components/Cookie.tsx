'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    updateAnalyticsConsent?: (granted: boolean) => void;
  }
}

export default function Cookie() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Track visit (cookie-less analytics) with retry
    const trackVisit = async (retries = 3) => {
      try {
        const response = await fetch('/.netlify/functions/analytics/stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`Analytics request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        if (!data.success) {
          throw new Error('Analytics request was not successful');
        }
      } catch (error) {
        console.warn('Analytics error:', error);
        if (retries > 0) {
          // Wait for 1 second before retrying
          await new Promise(resolve => setTimeout(resolve, 1000));
          return trackVisit(retries - 1);
        }
      }
    };

    // Only track visit if consent is accepted or not set
    const consent = localStorage.getItem('cookie-consent');
    if (consent !== 'declined') {
      trackVisit();
    }

    // Check if user has already made a choice
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const enableAnalytics = () => {
    // Update Google Analytics consent using the global function
    window.updateAnalyticsConsent?.(true);
    console.log('Analytics enabled');
  };

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    enableAnalytics();
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    // Ensure analytics remain disabled using the global function
    window.updateAnalyticsConsent?.(false);
    console.log('Cookies declined - analytics disabled');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A0F1C] border-t border-synvra-white/10 p-4 md:p-6 z-50">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-synvra-gray-300 text-sm md:text-base">
          We use cookies to improve your browsing experience and help us understand how you use our website.{' '}
          <Link href="/cookies" className="text-synvra-blue hover:text-synvra-blue/80">
            Learn more
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm text-synvra-gray-300 hover:text-synvra-white transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-synvra-blue text-white rounded hover:bg-synvra-blue/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 