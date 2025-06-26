'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ReferralTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get('ref');
    
    if (ref) {
      // Store referral code in localStorage for later use during payment
      localStorage.setItem('referralCode', ref);
      
      // Set expiration (30 days from now)
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);
      localStorage.setItem('referralExpiry', expirationDate.toISOString());
      
      console.log('Referral code stored:', ref);
    }
  }, [searchParams]);

  // This component doesn't render anything
  return null;
} 