/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['synvra.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Mark docusign-esign as an external module on the server side.
    if (isServer) {
      config.externals.push('docusign-esign');
    }

    return config;
  },
}

module.exports = nextConfig