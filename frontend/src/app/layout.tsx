import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CookieConsent from '@/components/CookieConsent';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Synvra - Modern Software Development Solutions',
  description: 'Professional software development services including custom software, mobile apps, cloud solutions, AI & ML, cybersecurity, and data analytics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
