/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['synvra.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Required for Netlify
  output: 'export',
}

module.exports = nextConfig