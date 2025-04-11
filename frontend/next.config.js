/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'synvra.com',
      },
      {
        protocol: 'https',
        hostname: 'www.synvra.com',
      },
    ],
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
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
