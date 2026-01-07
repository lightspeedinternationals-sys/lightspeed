import "./globals.css";
import { Providers } from "@/components/Providers";
import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/JsonLd";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

export const viewport: Viewport = {
    themeColor: "#0f172a",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://lightspeedinternationals.com"),
    title: {
        default: "International Courier Service Chennai | Light Speed Logistics - Fast Global Shipping",
        template: "%s | Light Speed Logistics",
    },
    description: "#1 International Courier Service in Chennai. Light Speed Logistics offers express freight forwarding, customs clearance & door-to-door shipping to USA, UK, Canada. Fast, secure & affordable. Real-time tracking. 24/7 support. Get instant quote!",
    keywords: [
        "International Courier Services Chennai",
        "Best Freight Forwarder in Chennai",
        "Fastest Courier to USA from India",
        "Cheap International Shipping Rates",
        "Door to Door Delivery Service",
        "Customs Clearance Agent Chennai",
        "Secure Parcel Delivery",
        "Student Courier Offers",
        "Medicine and Food Shipping",
        "Light Speed Logistics",
        "Global Logistics Solutions",
        "Global Freight Forwarding",
        "International Air Cargo Rates",
        "Sea Shipping Companies Chennai",
        "Cross Border Logistics",
        "Worldwide Parcel Delivery",
        "Corporate Logistics Services",
        "B2B International Courier",
        "Enterprise Freight Solutions",
        "Business Parcel Delivery Chennai",
        "Global Supply Chain Partner",
        "Commercial Shipping Rates",
        "Logistics for SMEs"
    ],
    appleWebApp: {
        title: "LightSpeed",
        statusBarStyle: "default",
    },
    formatDetection: {
        telephone: false,
    },
    authors: [{ name: "Light Speed Logistics" }],
    creator: "Light Speed Logistics",
    publisher: "Light Speed Logistics",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: process.env.NEXT_PUBLIC_BASE_URL || "https://lightspeedinternationals.com",
        title: "Light Speed Logistics | We Deliver Beyond",
        description: "Speed. Security. Reliability. Trusted international courier and freight services from Chennai.",
        siteName: "Light Speed Logistics",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://lightspeedinternationals.com"}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: "Light Speed Logistics Hero Banner",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Light Speed Logistics",
        description: "Fast & Reliable Global Shipping from Chennai.",
        images: ["/og-image.jpg"],
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_BASE_URL || "https://lightspeedinternationals.com",
        languages: {
            'en-US': process.env.NEXT_PUBLIC_BASE_URL || 'https://lightspeedinternationals.com',
        },
    },
    category: "Logistics",
    // Social Media Profiles
    other: {
        "og:see_also": [
            "https://www.linkedin.com/company/lightspeed-internationals/",
            "https://www.instagram.com/lightspeedinternationals"
        ],
        "geo.region": "IN-TN",
        "geo.placename": "Chennai",
        "geo.position": "13.0732;80.1934",
        "ICBM": "13.0732, 80.1934",
        // Google verification
        "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'your-google-verification-code',
        // Bing/Microsoft specific
        "msapplication-TileColor": "#0f172a",
        "msapplication-TileImage": "/ms-icon-144x144.png",
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || 'bing-verification',
        // Yahoo specific
        "y_key": process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || 'yahoo-verification',
        // Bot directives
        "bingbot": "index, follow, max-snippet:-1, max-image-preview:large",
        "slurp": "index, follow", // Yahoo
        "googlebot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        // AI & Voice optimization
        "rating": "general",
        "distribution": "global",
        "revisit-after": "1 days",
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className={outfit.variable}>
            <head />
            <body suppressHydrationWarning className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary relative min-h-screen font-sans">
                {/* Optimized Fixed Background */}
                <div
                    className="fixed inset-0 -z-50 pointer-events-none"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 50% 0%, rgba(255, 60, 60, 0.1) 0%, transparent 50%),
                            linear-gradient(to bottom, #ffffff, #f1f5f9)
                        `
                    }}
                />
                <Providers>
                    {children}
                    <JsonLd />
                </Providers>
            </body>
        </html>
    );
}
