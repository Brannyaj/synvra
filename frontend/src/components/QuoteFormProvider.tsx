'use client';

import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';

const QuoteForm = dynamic(() => import('./QuoteForm'), {
  ssr: false,
});

interface QuoteFormContextType {
  showQuoteForm: boolean;
  setShowQuoteForm: (show: boolean) => void;
}

const QuoteFormContext = createContext<QuoteFormContextType | undefined>(undefined);

interface QuoteFormProviderProps {
  children: ReactNode;
}

export function QuoteFormProvider({ children }: QuoteFormProviderProps) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSetShowQuoteForm = useCallback((show: boolean) => {
    if (mounted) {
      setShowQuoteForm(show);
    }
  }, [mounted]);

  const handleClose = useCallback(() => {
    if (mounted) {
      setShowQuoteForm(false);
    }
  }, [mounted]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <QuoteFormContext.Provider value={{ showQuoteForm, setShowQuoteForm: handleSetShowQuoteForm }}>
      {children}
      {showQuoteForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
          <div className="relative z-[101] w-full max-w-4xl">
            <QuoteForm onClose={handleClose} />
          </div>
        </div>
      )}
    </QuoteFormContext.Provider>
  );
}

export function useQuoteForm() {
  const context = useContext(QuoteFormContext);
  if (context === undefined) {
    throw new Error('useQuoteForm must be used within a QuoteFormProvider');
  }
  return context;
} 