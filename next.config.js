const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  transpilePackages: ['three', '@react-three/fiber'],
};

module.exports = nextConfig;
