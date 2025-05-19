import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { env } from './env';

const baseConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,

};

const nextConfig = withBundleAnalyzer({
  enabled: env.ANALYZE === 'true',
})(baseConfig);

export default nextConfig;
