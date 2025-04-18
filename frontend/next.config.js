/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ]
  },
  trailingSlash: true,
  distDir: 'out',
  async rewrites() {
    return [
      {
        source: '/zoho-domain-verification.html',
        destination: '/zoho-domain-verification.html',
      },
    ]
  },
}

module.exports = nextConfig