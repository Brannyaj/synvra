import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://synvra.com'),
  title: "Synvra - Innovative Digital Solutions & Software Development",
  description: "Synvra delivers cutting-edge web development, mobile apps, cloud solutions, and digital transformation services. Expert software development company specializing in custom solutions.",
  keywords: "software development, web development, mobile apps, cloud solutions, digital transformation, custom software, enterprise solutions, AI integration, cybersecurity",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "DPfTKOsOVMN8QaDb3OlZgYQOxtV4Y_iM4H_InFtIABc",
  },
  alternates: {
    canonical: "https://synvra.com",
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Synvra',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#0A0F1C',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://synvra.com',
    siteName: 'Synvra',
    title: 'Synvra - Innovative Digital Solutions & Software Development',
    description: 'Synvra delivers cutting-edge web development, mobile apps, cloud solutions, and digital transformation services. Expert software development company specializing in custom solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Synvra - Innovative Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synvra - Innovative Digital Solutions & Software Development',
    description: 'Synvra delivers cutting-edge web development, mobile apps, cloud solutions, and digital transformation services.',
    images: ['/og-image.jpg'],
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
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Synvra" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#0A0F1C" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://synvra.com" />
        <meta property="og:site_name" content="Synvra" />
        <meta property="og:title" content="Synvra - Innovative Digital Solutions & Software Development" />
        <meta property="og:description" content="Synvra delivers cutting-edge web development, mobile apps, cloud solutions, and digital transformation services. Expert software development company specializing in custom solutions." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Synvra - Innovative Digital Solutions" />
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Synvra',
              url: 'https://synvra.com',
              logo: 'https://synvra.com/favicon.svg',
              description: 'Synvra delivers cutting-edge web development, mobile apps, cloud solutions, and digital transformation services.',
              sameAs: [
                // Add your social media profiles here when available
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'support@synvra.com',
                contactType: 'customer service'
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US'
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-synvra-black text-synvra-white min-h-screen`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
