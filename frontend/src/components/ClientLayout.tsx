'use client';

import Header from './Header';
import Footer from './Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
  lng: string;
}

export default function ClientLayout({ children, lng }: ClientLayoutProps) {
  return (
    <>
      <Header lng={lng} />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
