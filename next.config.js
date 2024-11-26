/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
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
