import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lightspeedinternationals.com'
    const currentDate = new Date()

    return [
        // Homepage - Highest Priority
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        // Main Sections with SEO-friendly URLs
        {
            url: `${baseUrl}/#services`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/#quote-section`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: `${baseUrl}/#faq`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.88,
        },
        // Standalone Contact Page (SEO-optimized)
        {
            url: `${baseUrl}/contact.html`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        // Service-specific anchor links (for SEO keyword targeting)
        {
            url: `${baseUrl}/#international-courier-chennai`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.80,
        },
        {
            url: `${baseUrl}/#freight-forwarding`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/#warehousing`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.70,
        },
        // Privacy Policy
        {
            url: `${baseUrl}/#privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.30,
        },
    ]
}
