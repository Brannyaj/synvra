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

export const EventCategory = {
  FORM: 'form',
  NAVIGATION: 'navigation',
  SERVICE: 'service',
  CONTACT: 'contact',
  ENGAGEMENT: 'engagement'
} as const;

export const EventAction = {
  SUBMIT: 'submit',
  CLICK: 'click',
  VIEW: 'view',
  SCROLL: 'scroll',
  CONTACT: 'contact'
} as const;

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

// Specific event tracking functions
export const trackFormSubmission = (formName: string, success: boolean) => {
  event({
    action: EventAction.SUBMIT,
    category: EventCategory.FORM,
    label: `${formName}:${success ? 'success' : 'error'}`,
  });
};

export const trackServiceClick = (serviceName: string) => {
  event({
    action: EventAction.CLICK,
    category: EventCategory.SERVICE,
    label: serviceName,
  });
};

export const trackContactClick = (source: string) => {
  event({
    action: EventAction.CONTACT,
    category: EventCategory.CONTACT,
    label: source,
  });
};

export const trackEngagement = (action: string, label: string) => {
  event({
    action,
    category: EventCategory.ENGAGEMENT,
    label,
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
