import type { MetadataRoute } from 'next';
import { env } from '#/env';

/**
 * Generates a sitemap containing the root URL with metadata for search engines.
 *
 * @returns An array with a single sitemap entry for the site's root, including last modified date, change frequency, and priority.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${env.BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];
}
