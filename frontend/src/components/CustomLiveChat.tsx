'use client';

import { useEffect } from 'react';

// Add Crisp Chat TypeScript declarations
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
    Crisp: any;
  }
}

export default function CustomLiveChat() {
  // Initialize Crisp Chat when component mounts
  useEffect(() => {
    // Check if the Crisp script has already been added
    if (window.Crisp) {
      return;
    }

    // Set Crisp Website ID
    window.CRISP_WEBSITE_ID = "2d92f298-8902-4c26-bd93-cfea1ca3cfcb";
    window.$crisp = [];

    // Load Crisp script
    const script = document.createElement('script');
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      console.log('Crisp chat loaded successfully');
      
      // Wait for Crisp to fully initialize
      const checkCrispReady = () => {
        if (window.Crisp && window.Crisp.chat && window.Crisp.session) {
          console.log('Crisp fully initialized');
          
          // Set company info
          window.Crisp.session.setData({
            company: 'Synvra',
            website: 'https://synvra.com'
          });
          
          // Handle chat close to reset session
          window.Crisp.chat.onChatClosed(() => {
            console.log('Chat closed - resetting session');
            // Reset the session when chat is closed
            setTimeout(() => {
              window.Crisp.session.reset();
              console.log('Session reset complete');
            }, 1000);
          });
          
        } else {
          // Check again in 100ms
          setTimeout(checkCrispReady, 100);
        }
      };
      
      // Start checking if Crisp is ready
      setTimeout(checkCrispReady, 500);
    };

    script.onerror = () => {
      console.error('Failed to load Crisp chat script');
    };

    return () => {
      // Clean up the script when the component unmounts
      const crispScript = document.querySelector('script[src="https://client.crisp.chat/l.js"]');
      if (crispScript) {
        document.head.removeChild(crispScript);
      }
    };
  }, []);

  // Return null since we're using the native Crisp widget
  return null;
} 