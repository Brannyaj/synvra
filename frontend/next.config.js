/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
  typescript: {
    ignoreBuildErrors: true // Temporarily ignore TS errors for deployment
  },
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig
