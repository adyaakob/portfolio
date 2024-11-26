/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/portfolio', // The base path for your GitHub Pages site
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
