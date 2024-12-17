/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '', // Dynamic base path
  images: {
    unoptimized: true, // Required for static export
    domains: ['flagcdn.com'],
  },
  // Configure build output directory
  distDir: '.next',
  // Enable SWC compilation cache
  compiler: {
    styledComponents: true,
  },
  // Ensure compatibility with static export
  trailingSlash: true,
  
  // Configure server settings
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
    hostname: process.env.HOSTNAME || 'localhost'
  },
  publicRuntimeConfig: {
    port: process.env.PORT || 3000,
    hostname: process.env.HOSTNAME || 'localhost'
  }
}

module.exports = nextConfig
