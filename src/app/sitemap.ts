import { MetadataRoute } from 'next'

// Hardcoded production URL - DO NOT use env vars (causes Netlify secrets scanner issues)
const SITE_URL = 'https://lightspeedinternationals.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date()

    return [
        // Homepage - Highest Priority
        {
            url: SITE_URL,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        // Main Sections with SEO-friendly URLs
        {
            url: `${SITE_URL}/#services`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${SITE_URL}/#quote-section`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: `${SITE_URL}/#about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/#contact`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: `${SITE_URL}/#faq`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.88,
        },
        // Standalone Contact Page (SEO-optimized)
        {
            url: `${SITE_URL}/contact.html`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        // Service-specific anchor links (for SEO keyword targeting)
        {
            url: `${SITE_URL}/#international-courier-chennai`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.80,
        },
        {
            url: `${SITE_URL}/#freight-forwarding`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${SITE_URL}/#warehousing`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.70,
        },
        // Privacy Policy
        {
            url: `${SITE_URL}/#privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.30,
        },
    ]
}
