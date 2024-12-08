/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['flagcdn.com'],
    unoptimized: true,
  },
  basePath: '/portfolio',
};

export default nextConfig;
