/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['synvra.com'],
  },
  // Copy files from public to out directory
  distDir: 'out',
  typescript: {
    ignoreBuildErrors: true,
  },
  // Required for Netlify
  target: 'server',
  // Disable static exports
  output: 'standalone',
}

module.exports = nextConfig