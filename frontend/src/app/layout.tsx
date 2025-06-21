import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import dynamic from 'next/dynamic';

const ZendeskChat = dynamic(() => import('@/components/ZendeskChat'), {
  ssr: false,
});

const Cookie = dynamic(() => import('./components/Cookie'), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0A0F1C',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://synvra.com'),
  title: 'Synvra - Building software that exceed expectations',
  description: 'Building software that exceed expectations',
  keywords: ['software development', 'web development', 'mobile development', 'AI', 'machine learning'],
  authors: [{ name: 'Synvra' }],
  creator: 'Synvra',
  publisher: 'Synvra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://synvra.com',
    title: 'Synvra - Building software that exceed expectations',
    description: 'Building software that exceed expectations',
    siteName: 'Synvra',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synvra - Building software that exceed expectations',
    description: 'Building software that exceed expectations',
    creator: '@synvra',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CD8S6EHSRZ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Initialize with basic tracking (before consent)
              gtag('config', 'G-CD8S6EHSRZ', {
                cookie_flags: 'SameSite=None;Secure',
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
              
              // Global function to update consent
              window.updateAnalyticsConsent = function(granted) {
                if (granted) {
                  // Enhanced tracking after consent
                  gtag('config', 'G-CD8S6EHSRZ', {
                    cookie_flags: 'SameSite=None;Secure',
                    anonymize_ip: false,
                    allow_google_signals: true,
                    allow_ad_personalization_signals: true,
                    custom_map: {'custom_parameter': 'value'}
                  });
                  gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                    'ad_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted'
                  });
                  console.log('Enhanced Google Analytics tracking enabled');
                } else {
                  // Keep basic tracking only
                  gtag('consent', 'update', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied'
                  });
                  console.log('Google Analytics limited to basic tracking');
                }
              };
              
              // Set initial consent state (basic tracking)
              gtag('consent', 'default', {
                'analytics_storage': 'granted',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <ZendeskChat />
        <Cookie />
      </body>
    </html>
  );
}