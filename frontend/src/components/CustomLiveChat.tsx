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
          
          // Multiple approaches to handle session reset
          
          // Method 1: Handle chat close
          window.Crisp.chat.onChatClosed(() => {
            console.log('Chat closed - resetting session');
            setTimeout(() => {
              window.Crisp.session.reset();
              // Clear any stored session data
              localStorage.removeItem('crisp-session-segments');
              localStorage.removeItem('crisp-session-data');
              console.log('Session reset complete');
            }, 500);
          });
          
          // Method 2: Handle chat minimize (some users minimize instead of close)
          window.Crisp.chat.onChatMinimized(() => {
            console.log('Chat minimized - preparing for reset');
            setTimeout(() => {
              window.Crisp.session.reset();
              localStorage.removeItem('crisp-session-segments');
              localStorage.removeItem('crisp-session-data');
              console.log('Session reset after minimize');
            }, 2000);
          });
          
          // Method 3: Reset on page visibility change (when user leaves/returns to page)
          document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
              console.log('Page hidden - will reset session');
              setTimeout(() => {
                if (window.Crisp && window.Crisp.session) {
                  window.Crisp.session.reset();
                  localStorage.removeItem('crisp-session-segments');
                  localStorage.removeItem('crisp-session-data');
                  console.log('Session reset on page visibility change');
                }
              }, 1000);
            }
          });
          
          // Method 4: Force reset on chat open if session is old
          window.Crisp.chat.onChatOpened(() => {
            console.log('Chat opened');
            const lastReset = localStorage.getItem('last-chat-reset');
            const now = Date.now();
            
            // If more than 5 minutes since last reset, force a new session
            if (!lastReset || (now - parseInt(lastReset)) > 300000) {
              console.log('Forcing session reset - old session detected');
              setTimeout(() => {
                window.Crisp.session.reset();
                localStorage.setItem('last-chat-reset', now.toString());
                console.log('Forced session reset complete');
              }, 100);
            }
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