/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['synvra.com'],
  },
  // Copy files from public to out directory
  distDir: 'out',
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig