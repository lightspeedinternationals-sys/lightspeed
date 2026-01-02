"use client";

import Script from "next/script";

const JsonLd = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://lightspeedinternationals.com";
    
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LogisticsService",
        "@id": `${baseUrl}#organization`,
        "name": "Light Speed Logistics",
        "alternateName": ["Light Speed Internationals", "LSI"],
        "url": baseUrl,
        "logo": `${baseUrl}/light-speed-logo.png`,
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
            { "@type": "Country", "name": "Singapore" },
            { "@type": "Country", "name": "Malaysia" },
            { "@type": "Country", "name": "Germany" },
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
                        "description": "Comprehensive customs clearance handling for both imports and exports."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Global Trade Consulting",
                        "description": "Expert guidance on import-export regulations, IEC codes, and heavy cargo."
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
            "https://facebook.com/lightspeed",
            "https://instagram.com/lightspeed",
            "https://linkedin.com/company/lightspeed",
            "https://twitter.com/lightspeed"
        ],
        "priceRange": "$$",
        "image": [
            `${baseUrl}/og-image.jpg`,
            `${baseUrl}/light-speed-logo.png`
        ],
        "knowsAbout": [
            "International Logistics",
            "Freight Forwarding",
            "Customs Clearance",
            "Supply Chain Management",
            "Express Courier",
            "Air Cargo",
            "Sea Freight",
            "E-commerce Logistics",
            "Door to Door Delivery",
            "Import Services",
            "Export Consultants",
            "Global Trade Solutions"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 95666 50409",
            "contactType": "customer service",
            "areaServed": ["IN", "US", "GB", "CA", "AE", "SG", "AU", "DE"],
            "availableLanguage": ["en", "ta", "hi"]
        },
        "hasMap": "https://maps.google.com/?q=Light+Speed+Logistics+Chennai",
        "founders": [
            {
                "@type": "Person",
                "name": "Light Speed Team"
            }
        ],
        "foundingDate": "2023"
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

    // FAQ Schema (AEO Optimized for Voice Search & AI)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you handle international courier services from Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we are a leading international courier service in Chennai, shipping to USA, UK, Canada, UAE, Singapore, and over 200 countries with express delivery options."
                }
            },
            {
                "@type": "Question",
                "name": "How long does international delivery take to USA and UK?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Express delivery to USA, UK, and Europe typically takes 3-5 working days. Economy options are available for cost savings with slightly longer transit times."
                }
            },
            {
                "@type": "Question",
                "name": "What are your international shipping rates per kg?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our shipping rates are highly competitive and vary based on destination and weight. We offer special discounted rates for bulk shipments and students. Contact us for a precise quote."
                }
            },
            {
                "@type": "Question",
                "name": "What documents are required for sending an international courier?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For personal shipments, you need a KYC document (Aadhar Card/Passport/Voter ID) and a packing list. For commercial shipments, an Invoice and Packing List are required."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer door-to-door courier pickup?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer free door pickup services for all international and domestic shipments across Chennai and surrounding areas."
                }
            },
            {
                "@type": "Question",
                "name": "Are there any items I cannot ship (Prohibited Items)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, dangerous goods like flammables, explosives, currency, perishables, and illegal substances are prohibited. Please contact us for a detailed list of restricted items."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer free packaging for international parcels?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide high-quality, secure, and free weather-proof packaging to ensure your shipment reaches its destination safely."
                }
            },
            {
                "@type": "Question",
                "name": "Is transit insurance available for my valuable shipment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer optional transit insurance for valuable shipments to provide complete peace of mind against loss or damage."
                }
            },
            {
                "@type": "Question",
                "name": "How can I track my shipment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can track your shipment in real-time using our online tracking dashboard or by contacting our 24/7 support team."
                }
            },
            {
                "@type": "Question",
                "name": "What are your operating hours?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We operate Monday to Saturday from 09:00 AM to 09:00 PM to assist with all your shipping needs."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide customs clearance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in hassle-free import and export customs clearance documentation and processing."
                }
            }
        ]
    };

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
