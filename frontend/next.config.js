/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['synvra.com', 'www.synvra.com'],
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    NEXT_PUBLIC_DOMAIN: 'www.synvra.com',
    NEXT_PUBLIC_VERSION: '1.0.1'
  }
}

module.exports = nextConfig
