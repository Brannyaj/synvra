/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['synvra.com'],
    unoptimized: true,
  },
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true
}

module.exports = nextConfig