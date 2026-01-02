import "./globals.css";
import { Providers } from "@/components/Providers";
import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/JsonLd";
import SmoothScroll from "@/components/SmoothScroll";

export const viewport: Viewport = {
    themeColor: "#0f172a",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://lightspeedinternationals.com"),
    title: {
        default: "Light Speed Logistics | Fast & Reliable Global Shipping",
        template: "%s | Light Speed Logistics",
    },
    description: "Your trusted logistics partner for domestic & international deliveries. offering express courier, freight forwarding, and customs clearance services from Chennai to the world. Speed. Security. Reliability.",
    keywords: [
        "Logistics", "Courier Service", "International Shipping", "Freight Forwarding",
        "Chennai Logistics", "Fast Delivery", "Secure Shipping", "Light Speed Internationals",
        "Door to Door Delivery", "Air Freight", "Sea Freight", "Customs Clearance",
        "Best Courier Service in Chennai", "International Parcel Service",
        "Cheap Courier to USA from Chennai", "Student Offer Courier Service",
        "Medicine Delivery International", "Food Items Courier to USA",
        "Excess Baggage Shipping", "Relocation Services Chennai",
        "Import Export Agent in Chennai", "Global Logistics Partner",
        "Export Consultants", "Import Clearance Services", "Heavy Machinery Import"
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
    other: {
        "geo.region": "IN-TN",
        "geo.placename": "Chennai",
        "geo.position": "13.0732;80.1934",
        "ICBM": "13.0732, 80.1934",
        "google-site-verification": "verification_token", // Placeholder for actual token
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body suppressHydrationWarning className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary relative min-h-screen">
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
                    <SmoothScroll />
                    {children}
                    <JsonLd />
                </Providers>
            </body>
        </html>
    );
}
