import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synvra - Engineering Digital Excellence",
  description: "Transform your business with our cutting-edge software solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-CD8S6EHSRZ`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Default ad_storage to 'denied' as per privacy requirements
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied'
            });
            
            gtag('js', new Date());
            gtag('config', 'G-CD8S6EHSRZ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Script id="anti-scraping" strategy="beforeInteractive">
          {`
            // Check if it's a Google bot
            const isGoogleBot = /googlebot|adsbot-google|apis-google/i.test(navigator.userAgent);
            
            if (!isGoogleBot) {
              // Disable right-click
              document.addEventListener('contextmenu', e => e.preventDefault());

              // Disable keyboard shortcuts
              document.addEventListener('keydown', function(e) {
                if (
                  // Disable F12
                  e.keyCode === 123 || 
                  // Disable Ctrl+Shift+I
                  (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
                  // Disable Ctrl+Shift+J
                  (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
                  // Disable Ctrl+U
                  (e.ctrlKey && e.keyCode === 85)
                ) {
                  e.preventDefault();
                  return false;
                }
              });

              // Disable text selection
              document.addEventListener('selectstart', e => e.preventDefault());

              // Add random invisible elements to confuse scrapers
              setInterval(() => {
                const dummy = document.createElement('div');
                dummy.style.display = 'none';
                dummy.innerHTML = Math.random().toString(36);
                document.body.appendChild(dummy);
                setTimeout(() => dummy.remove(), 1000);
              }, 500);

              // Detect and block headless browsers
              if (navigator.webdriver || !window.chrome) {
                document.body.innerHTML = 'Access Denied';
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
