'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Cookie() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Track visit (cookie-less analytics)
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(console.error);

    // Check if user has already seen the notice
    const hasSeenNotice = localStorage.getItem('hasSeenNotice');
    if (!hasSeenNotice) {
      setShowBanner(true);
    }
  }, []);

  const enableAnalytics = () => {
    // Update Google Analytics consent
    window.gtag?.('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted'
    });
    console.log('Analytics enabled');
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    enableAnalytics();
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    // Ensure analytics remain disabled
    window.gtag?.('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied'
    });
    console.log('Cookies declined - analytics disabled');
  };

  const acknowledgeBanner = () => {
    localStorage.setItem('hasSeenNotice', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A0F1C] p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white text-sm flex-1">
          <p>
            We use cookies and analytics to improve your browsing experience and help us understand how you use our website. 
            By continuing to browse, you agree to our use of these tools. 
            View our <a href="/privacy-policy" className="underline hover:text-synvra-blue">Privacy Policy</a> for more information.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm text-white hover:text-synvra-blue transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-synvra-blue text-white rounded hover:bg-opacity-90 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={acknowledgeBanner}
            className="px-4 py-2 text-sm bg-synvra-blue text-white rounded hover:bg-opacity-90 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
} 