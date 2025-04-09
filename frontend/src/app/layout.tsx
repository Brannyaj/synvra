import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';
import NavigationTracker from '@/components/NavigationTracker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Synvra - Software Development Services',
  description: 'Professional software development services for modern businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <CookieConsent />
        <NavigationTracker />
      </body>
    </html>
  );
}
