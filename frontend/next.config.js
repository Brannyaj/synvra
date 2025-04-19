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
  // Copy sitemap and robots.txt to the output directory
  async generateStaticParams() {
    const fs = require('fs');
    const path = require('path');

    // Ensure the out directory exists
    if (!fs.existsSync('./out')) {
      fs.mkdirSync('./out', { recursive: true });
    }

    // Copy files if they exist
    const filesToCopy = ['sitemap.xml', 'robots.txt'];
    filesToCopy.forEach(file => {
      const sourcePath = path.join('./public', file);
      const destPath = path.join('./out', file);
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
      }
    });

    return [];
  }
}

module.exports = nextConfig