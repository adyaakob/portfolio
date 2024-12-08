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
}

module.exports = nextConfig
