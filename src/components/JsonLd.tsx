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
                "name": "What logistics services do you provide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide end-to-end logistics solutions including domestic and international courier services, freight forwarding (air, sea, and surface), warehousing, and customized supply chain solutions designed for businesses and individuals."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer international shipping from Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer fast and reliable international shipping from Chennai to major global destinations including the USA, UK, Europe, Middle East, and Asia, supported by a strong global partner network."
                }
            },
            {
                "@type": "Question",
                "name": "How fast is your delivery service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Delivery timelines depend on destination and service type. Express international shipments typically arrive within 3–7 business days, while economy and freight services are scheduled based on cargo requirements and customs clearance."
                }
            },
            {
                "@type": "Question",
                "name": "Do you handle customs clearance for international shipments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We manage complete customs documentation, compliance checks, and clearance procedures for both personal and commercial shipments, ensuring smooth cross-border delivery."
                }
            },
            {
                "@type": "Question",
                "name": "Can I track my shipment in real time?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. All shipments include real-time tracking, allowing customers to monitor status, location, and delivery updates through our tracking system."
                }
            },
            {
                "@type": "Question",
                "name": "What items can be shipped internationally?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We ship a wide range of items including documents, parcels, electronics, medicines, packaged foods, garments, commercial cargo, and household goods, subject to destination-specific regulations."
                }
            },
            {
                "@type": "Question",
                "name": "Are medicines and food items safe to ship?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Medicines and food items are handled with strict compliance protocols, secure packaging, and temperature-sensitive logistics where required, ensuring safety and freshness."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide packaging support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer professional packaging services using high-quality, tamper-proof materials to protect fragile, sensitive, and high-value shipments during transit."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer door-to-door pickup and delivery?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide free door pickup services and ensure doorstep delivery for both domestic and international shipments, saving time and improving convenience."
                }
            },
            {
                "@type": "Question",
                "name": "Is warehousing and storage available?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide secure warehousing and storage facilities with 24/7 surveillance, climate control, and real-time inventory management in Chennai."
                }
            },
            {
                "@type": "Question",
                "name": "How cost-effective are your logistics services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our pricing is competitive and transparent. By optimizing routes, partnerships, and operations, we deliver high-quality logistics services at affordable rates without compromising reliability."
                }
            },
            {
                "@type": "Question",
                "name": "Why choose your logistics company over others?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We combine speed, security, advanced tracking technology, professional handling, and customer-first service. Our focus is on timely delivery, operational transparency, and scalable logistics solutions."
                }
            },
            {
                "@type": "Question",
                "name": "How do I request a quote?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can request a quote directly through our website by filling out the inquiry form, or contact us via phone or WhatsApp for immediate assistance."
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
