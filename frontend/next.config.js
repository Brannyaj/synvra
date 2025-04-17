/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['synvra.com'],
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  distDir: '.next',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_URL: 'https://synvra.com'
  }
}

module.exports = nextConfig