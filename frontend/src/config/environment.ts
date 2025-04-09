export const config = {
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'www.synvra.com',
  analytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-CD8S6EHSRZ',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.synvra.com',
  },
  cookie: {
    domain: process.env.NEXT_PUBLIC_DOMAIN || 'www.synvra.com',
    secure: true,
    sameSite: 'Lax' as const,
  }
};
