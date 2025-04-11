'use client';

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

export default function ClientLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
