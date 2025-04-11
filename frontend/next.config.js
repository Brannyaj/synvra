/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '/',
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    NEXT_PUBLIC_DOMAIN: 'www.synvra.com',
    NEXT_PUBLIC_VERSION: '1.0.1'
  },
  experimental: {
    optimizeCss: false // Disable CSS optimization since we're using static export
  }
}

module.exports = nextConfig
