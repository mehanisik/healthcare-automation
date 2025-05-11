import type { NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'shadcnblocks.com',
      },
    ],
  },
}

const bundleAnalyzer = withBundleAnalyzer({
  // eslint-disable-next-line node/prefer-global/process
  enabled: process.env.ANALYZE === 'true',
})

export default bundleAnalyzer(nextConfig)
