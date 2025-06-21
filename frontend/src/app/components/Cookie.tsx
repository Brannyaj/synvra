'use client';

import { useState, useEffect } from 'react';

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    updateAnalyticsConsent: (granted: boolean) => void;
  }
}

export default function Cookie() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const consent = localStorage.getItem('cookie-consent');
    
    if (!consent) {
      // No previous choice - show banner
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // User previously accepted - enable enhanced tracking
      if (typeof window !== 'undefined' && window.updateAnalyticsConsent) {
        window.updateAnalyticsConsent(true);
      }
    }
    // If declined, basic tracking continues (already set in layout)
  }, []);

  const acceptCookies = () => {
    // Store consent choice
    localStorage.setItem('cookie-consent', 'accepted');
    
    // Enable enhanced Google Analytics tracking
    if (typeof window !== 'undefined' && window.updateAnalyticsConsent) {
      window.updateAnalyticsConsent(true);
    }
    
    // Hide banner
    setShowBanner(false);
    
    console.log('Cookies accepted - enhanced analytics enabled');
  };

  const declineCookies = () => {
    // Store consent choice
    localStorage.setItem('cookie-consent', 'declined');
    
    // Keep basic tracking only
    if (typeof window !== 'undefined' && window.updateAnalyticsConsent) {
      window.updateAnalyticsConsent(false);
    }
    
    // Hide banner
    setShowBanner(false);
    
    console.log('Cookies declined - basic analytics only');
  };

  // Don't render if banner shouldn't be shown
  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm">
          <p>
            We use cookies to enhance your browsing experience and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies for analytics and personalization.{' '}
            <a 
              href="/cookies" 
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 