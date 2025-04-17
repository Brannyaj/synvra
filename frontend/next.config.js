/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['synvra.com'],
    unoptimized: true,
  },
  distDir: 'out'
}

module.exports = nextConfig