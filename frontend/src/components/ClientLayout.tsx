'use client';

import { ReactNode } from 'react';
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
  return (
    <QuoteFormProvider>
      {children}
      <ChatButton />
      <Cookie />
    </QuoteFormProvider>
  );
} 