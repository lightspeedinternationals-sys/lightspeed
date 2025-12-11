"use client";

import Script from "next/script";

const JsonLd = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LogisticsService",
        "@id": "https://lightspeedinternationals.com/#organization",
        "name": "Light Speed Logistics",
        "alternateName": ["Light Speed Internationals", "LSI"],
        "url": "https://lightspeedinternationals.com",
        "logo": "https://lightspeedinternationals.com/light-speed-logo.png",
        "description": "Premium international courier and freight service provider in Chennai, offering express delivery, customs clearance, and global shipping.",
        "telephone": "+91 95666 50409",
        "email": "lightspeedinternationals@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "57, Periyar Street, Padikuppam, Koyambedu",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600107",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 13.0732,
            "longitude": 80.1934
        },
        "areaServed": [
            { "@type": "City", "name": "Chennai" },
            { "@type": "City", "name": "Bangalore" },
            { "@type": "City", "name": "Coimbatore" },
            { "@type": "Country", "name": "USA" },
            { "@type": "Country", "name": "UK" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "UAE" },
            { "@type": "Country", "name": "Singapore" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Logistics Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "International Courier Service",
                        "description": "Express door-to-door delivery for documents and parcels worldwide."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Commercial Freight Forwarding",
                        "description": "Air and Sea freight solutions for bulk commercial shipments."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Import & Export Clearance",
                        "description": "Hassle-free customs clearance services for imports and exports."
                    }
                }
            ]
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "21:00"
            }
        ],
        "sameAs": [
            "https://facebook.com/lightspeed"
        ],
        "priceRange": "$$"
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Light Speed Logistics",
        "url": "https://lightspeedinternationals.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://lightspeedinternationals.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    // FAQ Schema (AEO Optimized)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you offer door-to-door courier pickup?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer free door pickup services for all international and domestic shipments."
                }
            },
            {
                "@type": "Question",
                "name": "How can I track my shipment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can track your shipment in real-time using our online tracking dashboard or by contacting our 24/7 support team."
                }
            }
        ]
    }

    return (
        <>
            <Script
                id="org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
};

export default JsonLd;
