'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    zE?: any;
    zESettings?: any;
  }
}

export default function ZendeskChat() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Initialize Zendesk settings
    window.zESettings = {
      webWidget: {
        chat: {
          title: 'Chat with Synvra',
          color: {
            theme: '#2563eb'
          }
        }
      }
    };

    // Check if script already exists
    if (document.getElementById('ze-snippet')) return;

    // Create and append script
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=9126e8e2-48b7-4868-8c2d-fdcd0538bb23';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('ze-snippet');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
} 