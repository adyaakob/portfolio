/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external domains if needed
    unoptimized: true, // Add this line if you're having issues with image optimization
  },
}

module.exports = nextConfig 