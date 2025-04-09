export const config = {
  domain: 'www.synvra.com',
  baseUrl: 'https://www.synvra.com',
  api: {
    baseUrl: 'https://api.synvra.com',
  },
  analytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  },
} as const;
