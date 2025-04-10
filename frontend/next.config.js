/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['synvra.com', 'www.synvra.com'],
  },
  env: {
    NEXT_PUBLIC_DOMAIN: 'www.synvra.com'
  },
}

module.exports = nextConfig
