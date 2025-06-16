import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import dynamic from 'next/dynamic';

const ZendeskChat = dynamic(() => import('@/components/ZendeskChat'), {
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
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <ZendeskChat />
      </body>
    </html>
  );
}