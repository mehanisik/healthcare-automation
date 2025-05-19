import type { MetadataRoute } from 'next';
import { env } from '#/env';

/**
 * Generates robots.txt metadata that allows all user agents access to all paths except '/dashboard/', and provides the sitemap URL based on the application's base URL.
 *
 * @returns An object specifying robots.txt rules and the sitemap location for web crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/',
    },
    sitemap: `${env.BASE_URL}/sitemap.xml`,
  };
}
