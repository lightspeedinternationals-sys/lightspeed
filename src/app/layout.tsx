import "./globals.css";
import { Providers } from "@/components/Providers";
import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/JsonLd";

export const viewport: Viewport = {
    themeColor: "#0f172a",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://lightspeedinternationals.com"), // Placeholder URL, update if user has one
    title: {
        default: "Light Speed Logistics | Fast & Reliable Global Shipping",
        template: "%s | Light Speed Logistics",
    },
    description: "Light Speed Logistics offers fast, secure, and affordable international courier and freight services. Based in Chennai, delivering worldwide.",
    keywords: [
        "Logistics", "Courier Service", "International Shipping", "Freight Forwarding",
        "Chennai Logistics", "Fast Delivery", "Secure Shipping", "Light Speed Internationals"
    ],
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
        url: "https://lightspeedinternationals.com",
        title: "Light Speed Logistics | Global Shipping simplified",
        description: "Reliable international courier and freight solutions. We pick up from your door and deliver to the world.",
        siteName: "Light Speed Logistics",
        images: [
            {
                url: "/og-image.jpg", // We need to ensure this image exists or use a logo
                width: 1200,
                height: 630,
                alt: "Light Speed Logistics",
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
        canonical: "/",
    },
    category: "Logistics",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
                <Providers>
                    {children}
                    <JsonLd />
                </Providers>
            </body>
        </html>
    );
}
