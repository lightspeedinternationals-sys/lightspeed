"use client";

import Script from "next/script";

const JsonLd = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://lightspeedinternationals.com";

    // Optimized LocalBusiness Schema (Replacing Organization for better Local SEO)
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "DeliveryService",
        "@id": `${baseUrl}#localBusiness`,
        "name": "Light Speed Logistics",
        "legalName": "Light Speed Internationals",
        "alternateName": ["Light Speed", "LSI Chennai"],
        "url": baseUrl,
        "logo": `${baseUrl}/light-speed-logo.png`,
        "image": [
            `${baseUrl}/og-image.jpg`,
            `${baseUrl}/light-speed-logo.png`
        ],
        "description": "Premium international courier and freight service provider in Chennai. We specialize in express door-to-door delivery, customs clearance, and global shipping to USA, UK, Canada, and 200+ countries.",
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
            { "@type": "City", "name": "Madurai" },
            { "@type": "City", "name": "Trichy" },
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Kingdom" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "United Arab Emirates" },
            { "@type": "Country", "name": "Singapore" },
            { "@type": "Country", "name": "Germany" },
            { "@type": "Country", "name": "Australia" }
        ],
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
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI"],
        "currenciesAccepted": "INR, USD, GBP, EUR",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Logistics Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "International Courier & Parcel Service",
                        "description": "Fastest door-to-door courier service from Chennai to USA, UK, Canada with tracking."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Air Freight Forwarding",
                        "description": "Reliable air cargo solutions for heavy commercial shipments."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Sea Freight Shipping",
                        "description": "Cost-effective ocean freight for trusted global trade."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Medicine & Food Shipping",
                        "description": "Specialized temperature-controlled handling for medicines and perishables."
                    }
                }
            ]
        },
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Happy Customer"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "120"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Light Speed Logistics",
        "url": baseUrl,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    // Breadcrumb Schema for better search visuals
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
        }]
    };

    // FAQ Schema - Optimized for Google, Bing, ChatGPT, Perplexity
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What international courier services does Light Speed Logistics offer in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Light Speed Logistics provides comprehensive international courier services from Chennai including: (1) Express Door-to-Door Delivery to USA, UK, Canada, Europe, and 200+ countries with 3-7 day delivery. (2) Document and Sample Shipping with customs pre-clearance. (3) E-commerce Logistics for online businesses. (4) Specialized Medicine and Food Shipping with temperature control. (5) Commercial Freight for bulk shipments. All services include free pickup, real-time tracking, and 24/7 customer support."
                }
            },
            {
                "@type": "Question",
                "name": "How much does international shipping from Chennai cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "International shipping rates from Chennai vary based on: weight, destination country, service type (express vs economy), and cargo nature. Typical pricing: Documents (0.5kg to USA) start from ₹1,200-2,500. Parcels (1-5kg to UK/USA) range ₹3,000-8,000. Commercial freight offers bulk discounts starting at ₹150/kg for air and ₹50/kg for sea. Get an instant quote through our website or call +91 95666 50409 for customized pricing."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fastest way to ship a package from India to the USA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The fastest method is Express Air Courier with Light Speed Logistics, delivering in 3-5 business days from Chennai to major US cities (New York, Los Angeles, Chicago). Process: (1) Book online or call. (2) Free pickup within 24 hours. (3) Customs clearance within 1 day. (4) Priority air freight direct routes. (5) Door delivery with signature. Track in real-time throughout transit."
                }
            },
            {
                "@type": "Question",
                "name": "Do you handle customs clearance for international shipments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Light Speed Logistics provides complete customs clearance services including: (1) Import and Export Documentation (Commercial Invoice, Packing List, Certificate of Origin). (2) IEC Code Guidance for first-time exporters. (3) Pre-clearance Consultation to avoid delays. (4) Duty and Tax Calculation. (5) Prohibited Items Screening. Our licensed customs brokers ensure 100% compliance with destination country regulations, preventing shipment holds."
                }
            },
            {
                "@type": "Question",
                "name": "Can I track my international shipment in real-time?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. All Light Speed Logistics shipments include advanced real-time tracking through: (1) Unique Tracking Number provided immediately after booking. (2) Online Tracking Portal accessible 24/7. (3) SMS and Email Notifications at major checkpoints (pickup, customs clearance, in-transit, out for delivery). (4) WhatsApp Updates via +91 95666 50409. (5) GPS-Enabled tracking for premium shipments."
                }
            },
            {
                "@type": "Question",
                "name": "How do I ship medicines internationally from Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shipping medicines requires: (1) Valid Doctor's Prescription (original copy). (2) Medicine Invoice and composition details. (3) Quantity limits: typically 3-month personal supply. (4) Temperature-Controlled Packaging for sensitive drugs. (5) Customs Declaration with dosage details. Light Speed Logistics specializes in pharmaceutical shipping with compliant cold-chain logistics, ensuring FDA, MHRA, and Health Canada approval. Processing time: 2-3 days for documentation, 4-7 days delivery to USA/UK/Canada."
                }
            },
            {
                "@type": "Question",
                "name": "What are the freight forwarding charges for air and sea cargo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Freight forwarding rates from Chennai: Air Freight: ₹150-300/kg depending on volume (minimum 50kg). Express air: ₹250-400/kg (2-4 days). Sea Freight: Full Container Load (FCL) - 20ft container ₹80,000-1,50,000, 40ft container ₹1,20,000-2,50,000. Less than Container Load (LCL) - ₹4,000-8,000 per CBM. Includes port handling, documentation, and basic insurance."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer door-to-door delivery for international shipments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Light Speed Logistics provides complete door-to-door service with free collection from your Chennai address (home/office/warehouse) within 24 hours of booking and direct delivery to receiver's address in USA, UK, Canada, Dubai, Singapore, or any of 200+ countries. Our agents handle pickup, packing, customs clearance, and final delivery with signature confirmation."
                }
            },
            {
                "@type": "Question",
                "name": "Can I ship food items internationally from India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, with restrictions. Allowed food items include packaged snacks, dry spices, tea, coffee, canned goods, and non-perishable items. Requirements: (1) Commercial packaging with ingredients label. (2) Manufacturing date and expiry clearly visible. (3) FDA/FSSAI certification for commercial quantities. (4) Customs declaration form. Prohibited items include fresh fruits, vegetables, dairy, and meat products to most destinations."
                }
            },
            {
                "@type": "Question",
                "name": "What are your operating hours and customer support timings?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Operating Hours: Monday to Saturday: 9:00 AM - 9:00 PM (Chennai Time). Sunday: 10:00 AM - 6:00 PM. 24/7 Support Available for emergency shipment tracking, weekend pickups (on request), and urgent customs clearance assistance. Contact: Phone +91 95666 50409, Email: lightspeedinternationals@gmail.com, WhatsApp available 24/7. Office: 57, Periyar Street, Padikuppam, Koyambedu, Chennai - 600107."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
