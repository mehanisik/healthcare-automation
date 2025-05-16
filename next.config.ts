import type { NextConfig } from 'next';

const baseConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

const nextConfig = baseConfig;
export default nextConfig;
