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
  window.gtag('config', config.analytics.measurementId, {
    page_path: url,
    cookie_domain: config.domain,
    cookie_flags: 'SameSite=None;Secure'
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
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
