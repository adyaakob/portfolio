/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/portfolio', // Fixed base path for GitHub Pages
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
