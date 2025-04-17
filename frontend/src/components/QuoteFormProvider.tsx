'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import dynamic from 'next/dynamic';

const QuoteForm = dynamic(() => import('./QuoteForm'), {
  ssr: false,
  loading: () => null,
});

interface QuoteFormContextType {
  showQuoteForm: boolean;
  setShowQuoteForm: (show: boolean) => void;
}

const QuoteFormContext = createContext<QuoteFormContextType>({
  showQuoteForm: false,
  setShowQuoteForm: () => {},
});

export function QuoteFormProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    showQuoteForm: false,
    isMounted: false
  });

  useEffect(() => {
    setState(prev => ({ ...prev, isMounted: true }));
  }, []);

  const setShowQuoteForm = (show: boolean) => {
    setState(prev => ({ ...prev, showQuoteForm: show }));
  };

  if (!state.isMounted) {
    return <>{children}</>;
  }

  return (
    <QuoteFormContext.Provider value={{ 
      showQuoteForm: state.showQuoteForm, 
      setShowQuoteForm 
    }}>
      {children}
      {state.showQuoteForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setShowQuoteForm(false)} 
          />
          <div className="relative z-[101] w-full max-w-4xl">
            <QuoteForm onClose={() => setShowQuoteForm(false)} />
          </div>
        </div>
      )}
    </QuoteFormContext.Provider>
  );
}

export function useQuoteForm() {
  const context = useContext(QuoteFormContext);
  if (!context) {
    throw new Error('useQuoteForm must be used within a QuoteFormProvider');
  }
  return context;
} 