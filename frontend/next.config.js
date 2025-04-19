/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['synvra.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure sitemap and robots.txt are copied to the build output
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('fs').copyFileSync('./public/sitemap.xml', './out/sitemap.xml')
      require('fs').copyFileSync('./public/robots.txt', './out/robots.txt')
    }
    return config
  }
}

module.exports = nextConfig