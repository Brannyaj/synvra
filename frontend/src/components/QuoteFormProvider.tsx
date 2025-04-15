'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import QuoteForm from './QuoteForm';

interface QuoteFormContextType {
  showQuoteForm: boolean;
  setShowQuoteForm: (show: boolean) => void;
}

const QuoteFormContext = createContext<QuoteFormContextType | null>(null);

interface QuoteFormProviderProps {
  children: ReactNode;
}

export function QuoteFormProvider({ children }: QuoteFormProviderProps) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleSetShowQuoteForm = useCallback((show: boolean) => {
    console.log('Setting quote form visibility to:', show);
    setShowQuoteForm(show);
  }, []);

  const handleClose = useCallback(() => {
    console.log('Closing quote form');
    setShowQuoteForm(false);
  }, []);

  const value = {
    showQuoteForm,
    setShowQuoteForm: handleSetShowQuoteForm
  };

  return (
    <QuoteFormContext.Provider value={value}>
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
  if (context === null) {
    throw new Error('useQuoteForm must be used within a QuoteFormProvider');
  }
  return context;
} 