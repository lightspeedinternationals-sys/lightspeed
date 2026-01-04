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
        default: "Light Speed Logistics | Fast & Reliable Global Shipping",
        template: "%s | Light Speed Logistics",
    },
    description: "Light Speed Logistics is your trusted partner for international courier services, freight forwarding, and customs clearance in Chennai. We offer fast, secure, and affordable shipping to the USA, UK, Canada, and over 200 countries. Experience seamless door-to-door delivery with real-time tracking.",
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
    other: {
        "geo.region": "IN-TN",
        "geo.placename": "Chennai",
        "geo.position": "13.0732;80.1934",
        "ICBM": "13.0732, 80.1934",
        "google-site-verification": "verification_token",
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
