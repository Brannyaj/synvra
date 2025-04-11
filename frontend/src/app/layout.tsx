import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';
import NavigationTracker from '@/components/NavigationTracker';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Synvra - Software Development & Technology Solutions',
  description: 'Creating innovative digital solutions that help businesses thrive in the modern world.',
  icons: {
    shortcut: { url: '/favicon.ico' },
    apple: { url: '/apple-touch-icon.png' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
        <Analytics />
        <CookieConsent />
        <NavigationTracker />
        <Footer />
      </body>
    </html>
  );
}
