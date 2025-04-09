'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackEngagement } from '@/utils/analytics';

export default function NavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page engagement time
    const startTime = Date.now();
    
    const trackScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollDepth > 0 && scrollDepth % 25 === 0) {
        trackEngagement(
          'scroll_depth',
          `${pathname}:${scrollDepth}%`
        );
      }
    };

    window.addEventListener('scroll', trackScroll);

    return () => {
      // Track time spent on page when leaving
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEngagement(
        'time_spent',
        `${pathname}:${timeSpent}s`
      );
      window.removeEventListener('scroll', trackScroll);
    };
  }, [pathname]);

  return null;
}
