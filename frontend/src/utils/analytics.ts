import { config } from '@/config/environment';

declare global {
  interface Window {
    gtag: (
      type: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', config.analytics.measurementId, {
    page_path: url,
    cookie_domain: config.cookie.domain,
    cookie_flags: `SameSite=${config.cookie.sameSite};Secure`
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const consentGranted = () => {
  localStorage.setItem('cookieConsent', 'true');
  // Reload to enable analytics
  window.location.reload();
};

export const consentRevoked = () => {
  localStorage.removeItem('cookieConsent');
  // Clear any existing cookies
  document.cookie.split(';').forEach(cookie => {
    const [name] = cookie.split('=');
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  });
  // Reload to disable analytics
  window.location.reload();
};
