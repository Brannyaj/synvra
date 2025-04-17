/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['synvra.com'],
    unoptimized: true,
  },
  distDir: '.next',
  trailingSlash: true
}

module.exports = nextConfig