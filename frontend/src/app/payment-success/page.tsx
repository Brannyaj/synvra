'use client';
export const dynamic = "force-dynamic";
export const dynamicParams = true;

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      setStatus('error');
      return;
    }

    // Verify the session
    const verifySession = async () => {
      try {
        const response = await fetch(`/api/verify-session?session_id=${sessionId}`);
        if (!response.ok) throw new Error('Failed to verify session');
        setStatus('success');
      } catch (error) {
        console.error('Error verifying session:', error);
        setStatus('error');
      }
    };

    verifySession();
  }, [sessionId]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-synvra-black">
        <div className="glass-card p-8 rounded-lg text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-synvra-blue mx-auto mb-4"></div>
          <p className="text-synvra-gray-300">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-synvra-black">
        <div className="glass-card p-8 rounded-lg text-center">
          <div className="text-6xl mb-6">❌</div>
          <h1 className="text-2xl font-bold text-synvra-white mb-4">
            Payment Verification Failed
          </h1>
          <p className="text-synvra-gray-300 mb-8">
            We couldn't verify your payment. Please contact support if you've been charged.
          </p>
          <Link href="/" className="button-primary inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-synvra-black">
      <div className="glass-card p-8 rounded-lg text-center max-w-md w-full">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-2xl font-bold text-synvra-white mb-4">
          Payment Successful!
        </h1>
        <p className="text-synvra-gray-300 mb-8">
          Thank you for your deposit. We've received your payment and will begin working on your project right away.
        </p>
        <div className="space-y-4">
          <p className="text-synvra-gray-300">
            What happens next:
          </p>
          <ul className="text-left space-y-2 text-synvra-gray-300">
            <li className="flex items-start">
              <span className="text-synvra-green mr-2">✓</span>
              <span>You'll receive a confirmation email with your project details</span>
            </li>
            <li className="flex items-start">
              <span className="text-synvra-green mr-2">✓</span>
              <span>Our team will review your project requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-synvra-green mr-2">✓</span>
              <span>We'll schedule a kickoff meeting within 24 hours</span>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/" className="button-primary inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 