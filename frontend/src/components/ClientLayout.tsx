'use client';

import { ReactNode } from 'react';
import { QuoteFormProvider } from './QuoteFormProvider';
import ChatButton from '../app/components/ChatButton';
import Cookie from '../app/components/Cookie';

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