import type { NextConfig } from 'next';

const baseConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  serverExternalPackages: ['@electric-sql/pglite'],
};

const nextConfig = baseConfig;
export default nextConfig;
