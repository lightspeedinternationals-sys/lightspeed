import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Extend the request type to include geo information (Vercel specific)
interface ExtendedNextRequest extends NextRequest {
    geo?: {
        country?: string;
        city?: string;
        region?: string;
        latitude?: string;
        longitude?: string;
    };
}

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const req = request as ExtendedNextRequest;

    // 1. Geo-Location & ISP Optimization
    // Extract geo information provided by Vercel/hosting platform
    const country = req.geo?.country || 'US';
    const city = req.geo?.city || 'Unknown';
    const region = req.geo?.region || 'Unknown';

    // Set headers for the application to consume
    response.headers.set('x-geo-country', country);
    response.headers.set('x-geo-city', city);
    response.headers.set('x-geo-region', region);

    // 2. Security Headers (Best Practices)
    const securityHeaders = {
        'X-DNS-Prefetch-Control': 'on',
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    };

    Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    // 3. ISP-Aware Caching & Edge Optimization
    // Aggressive caching for static assets that don't change often
    if (request.nextUrl.pathname.match(/\.(jpg|jpeg|gif|png|svg|ico|webp|js|css|woff2)$/)) {
        response.headers.set(
            'Cache-Control',
            'public, max-age=31536000, immutable'
        );
    }

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
