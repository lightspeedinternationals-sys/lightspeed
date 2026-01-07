import { MetadataRoute } from 'next'

// Hardcoded production URL - DO NOT use env vars (causes Netlify secrets scanner issues)
const SITE_URL = 'https://lightspeedinternationals.com'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Allow all major search engines
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/private/', '/_next/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/', '/private/', '/_next/'],
            },
            {
                userAgent: 'Slurp', // Yahoo
                allow: '/',
                disallow: ['/api/', '/private/', '/_next/'],
            },
            {
                userAgent: 'DuckDuckBot',
                allow: '/',
                disallow: ['/api/', '/private/', '/_next/'],
            },
            // AI Crawlers - Allow for AI Answer Engines
            {
                userAgent: 'GPTBot', // ChatGPT
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'ClaudeBot', // Anthropic
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'Google-Extended', // Gemini
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'CCBot', // Common Crawl
                allow: '/',
            },
            // Social Media Crawlers
            {
                userAgent: 'facebookexternalhit',
                allow: '/',
            },
            {
                userAgent: 'Twitterbot',
                allow: '/',
            },
            {
                userAgent: 'LinkedInBot',
                allow: '/',
            },
            {
                userAgent: 'WhatsApp',
                allow: '/',
            },
            // Default rule for all other bots
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/', '/_next/', '/admin/'],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
