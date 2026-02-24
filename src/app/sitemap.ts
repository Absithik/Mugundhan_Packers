import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mugunthanpackers.com';

    const routes = [
        '',
        '/about',
        '/contact',
        '/branches',
        '/services',
        '/services/packing',
        '/services/shifting',
        '/services/transport',
        '/services/loading-unloading',

    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
