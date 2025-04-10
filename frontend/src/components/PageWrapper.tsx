'use client';

import { Suspense, ReactNode } from 'react';
import Navigation from './Navigation';

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        {children}
      </main>
    </Suspense>
  );
}
