import type { MetadataRoute } from 'next';
import { env } from '#/env';

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
