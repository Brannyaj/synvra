/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Copy files from public to out directory
  distDir: 'out',
}

module.exports = nextConfig