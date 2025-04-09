'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import * as analytics from '@/utils/analytics';
import { config } from '@/config/environment';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only track pageview if user has consented
    const hasConsent = localStorage.getItem('cookieConsent') === 'true';
    if (hasConsent) {
      const url = pathname + searchParams.toString();
      analytics.pageview(url);
    }
  }, [pathname, searchParams]);

  if (typeof window !== 'undefined' && localStorage.getItem('cookieConsent') !== 'true') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.analytics.measurementId}', {
              page_path: window.location.pathname,
              cookie_domain: '${config.cookie.domain}',
              cookie_flags: 'SameSite=${config.cookie.sameSite};Secure'
            });
          `,
        }}
      />
    </>
  );
}
