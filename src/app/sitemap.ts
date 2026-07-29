import { MetadataRoute } from 'next';
import { ROOMS_DATA } from '@/data/stoneyardData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stoneyardbynomads.com';

  const staticRoutes = [
    '',
    '/stay',
    '/rooms',
    '/experiences',
    '/dining',
    '/gallery',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const roomRoutes = ROOMS_DATA.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...roomRoutes];
}
