'use client';

import { ReactNode, useEffect, useState } from 'react';
import { QuoteFormProvider } from './QuoteFormProvider';
import dynamic from 'next/dynamic';

const ChatButton = dynamic(() => import('@/app/components/ChatButton'), {
  ssr: false
});

const Cookie = dynamic(() => import('@/app/components/Cookie'), {
  ssr: false
});

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <QuoteFormProvider>
      {children}
      {mounted && (
        <>
          <ChatButton />
          <Cookie />
        </>
      )}
    </QuoteFormProvider>
  );
} 