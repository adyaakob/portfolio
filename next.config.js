/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  // basePath: '/portfolio', // Commented out for local development
  images: {
    unoptimized: true, // Required for static export
    domains: ['flagcdn.com'],
  },
  // Configure build output directory
  distDir: 'out',
  // Enable SWC compilation cache
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
