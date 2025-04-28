import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0A0F1C',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://synvra.com'),
  title: "Synvra - Innovative Digital Solutions & Software Development",
  description: "Transform your business with Synvra's cutting-edge web development, mobile apps, cloud solutions, and digital transformation services. Expert software development company delivering innovative enterprise solutions.",
  keywords: "software development, web development, mobile apps, cloud solutions, digital transformation, custom software, enterprise solutions, AI integration, cybersecurity, New York software company",
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
    nocache: false,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://synvra.com',
    siteName: 'Synvra',
    title: 'Synvra - Transform Your Business with Innovative Digital Solutions',
    description: "Transform your business with Synvra's cutting-edge web development, mobile apps, cloud solutions, and digital transformation services. Expert software development company delivering innovative enterprise solutions.",
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
    site: '@synvra',
    title: 'Synvra - Transform Your Business with Innovative Digital Solutions',
    description: "Transform your business with Synvra's cutting-edge web development, mobile apps, cloud solutions, and digital transformation services. Expert software development company delivering innovative enterprise solutions.",
    images: ['/og-image.jpg'],
  },
  authors: [{ name: 'Synvra' }],
  generator: 'Next.js',
  applicationName: 'Synvra',
  referrer: 'origin-when-cross-origin',
  creator: 'Synvra',
  publisher: 'Synvra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
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
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* SiteNavigationElement Schema */}
        <Script
          id="site-navigation-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": [
                "Home",
                "About",
                "Services",
                "Portfolio",
                "Contact"
              ],
              "url": [
                "https://synvra.com/",
                "https://synvra.com/about",
                "https://synvra.com/services",
                "https://synvra.com/portfolio",
                "https://synvra.com/contact"
              ]
            })
          }}
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Synvra" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://synvra.com" />
        <meta property="og:site_name" content="Synvra" />
        <meta property="og:title" content="Synvra - Transform Your Business with Innovative Digital Solutions" />
        <meta property="og:description" content="Transform your business with Synvra\'s cutting-edge web development, mobile apps, cloud solutions, and digital transformation services. Expert software development company delivering innovative enterprise solutions." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Synvra - Innovative Digital Solutions" />
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': 'https://synvra.com/#organization',
                name: 'Synvra',
                url: 'https://synvra.com',
                logo: {
                  '@type': 'ImageObject',
                  '@id': 'https://synvra.com/#logo',
                  url: 'https://synvra.com/favicon.svg',
                  width: 96,
                  height: 96,
                  contentUrl: 'https://synvra.com/favicon.svg'
                },
                image: {
                  '@type': 'ImageObject',
                  url: 'https://synvra.com/og-image.jpg'
                },
                description: "Transform your business with Synvra's cutting-edge web development, mobile apps, cloud solutions, and digital transformation services. Expert software development company delivering innovative enterprise solutions.",
                sameAs: [
                  'https://twitter.com/synvra',
                  'https://linkedin.com/company/synvra',
                  'https://github.com/synvra',
                  'https://discord.gg/synvra'
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'support@synvra.com',
                  contactType: 'customer service',
                  availableLanguage: ['English']
                },
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'US'
                },
                foundingDate: '2023',
                knowsAbout: [
                  'Software Development',
                  'Web Development',
                  'Mobile App Development',
                  'Cloud Solutions',
                  'Digital Transformation',
                  'Enterprise Solutions',
                  'AI Integration',
                  'Cybersecurity'
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': 'https://synvra.com/#website',
                url: 'https://synvra.com',
                name: 'Synvra',
                description: 'Transform Your Business with Innovative Digital Solutions',
                publisher: {
                  '@id': 'https://synvra.com/#organization'
                },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://synvra.com/search?q={search_term_string}'
                  },
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                      '@id': 'https://synvra.com',
                      name: 'Home'
                    }
                  }
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What services does Synvra offer?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Synvra offers a comprehensive range of software development services including web development, mobile app development, cloud solutions, AI & machine learning integration, enterprise solutions, cybersecurity, and data engineering. We specialize in creating custom solutions that drive digital transformation and business growth.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'How experienced is Synvra\'s development team?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Our team consists of 200+ exceptional full stack developers, carefully selected from the top 1% of global talent. We have successfully delivered 600+ projects across diverse industries with a 97% client satisfaction rate. Our developers are experts in modern technologies and best practices.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'What industries does Synvra serve?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Synvra serves various industries including Healthcare, FinTech, E-commerce, Enterprise, EdTech, and Manufacturing. We provide specialized solutions tailored to each sector\'s unique needs, compliance requirements, and business objectives. Our experience spans from startups to Fortune 500 companies.'
                    }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.className} bg-synvra-black text-synvra-white min-h-screen`}>
        {/* Hidden form for Netlify */}
        <form name="quote" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="text" name="company" />
          <textarea name="description"></textarea>
          <input type="number" name="budget" />
          <input type="date" name="deadline" />
        </form>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
