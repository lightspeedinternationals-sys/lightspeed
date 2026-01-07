"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What international courier services does Light Speed Logistics offer in Chennai?",
        answer: "Light Speed Logistics provides comprehensive international courier services from Chennai including: (1) Express Door-to-Door Delivery to USA, UK, Canada, Europe, and 200+ countries with 3-7 day delivery. (2) Document and Sample Shipping with customs pre-clearance. (3) E-commerce Logistics for online businesses. (4) Specialized Medicine and Food Shipping with temperature control. (5) Commercial Freight for bulk shipments. All services include free pickup, real-time tracking, and 24/7 customer support."
    },
    {
        question: "How much does international shipping from Chennai cost?",
        answer: "International shipping rates from Chennai vary based on: weight, destination country, service type (express vs economy), and cargo nature. Typical pricing: Documents (0.5kg to USA) start from ₹1,200-2,500. Parcels (1-5kg to UK/USA) range ₹3,000-8,000. Commercial freight offers bulk discounts starting at ₹150/kg for air and ₹50/kg for sea. Get an instant quote through our website or call +91 95666 50409 for customized pricing."
    },
    {
        question: "What is the fastest way to ship a package from India to the USA?",
        answer: "The fastest method is Express Air Courier with Light Speed Logistics, delivering in 3-5 business days from Chennai to major US cities (New York, Los Angeles, Chicago). Process: (1) Book online or call. (2) Free pickup within 24 hours. (3) Customs clearance within 1 day. (4) Priority air freight direct routes. (5) Door delivery with signature. Track in real-time throughout transit."
    },
    {
        question: "Do you handle customs clearance for international shipments?",
        answer: "Yes, Light Speed Logistics provides complete customs clearance services including: (1) Import and Export Documentation (Commercial Invoice, Packing List, Certificate of Origin). (2) IEC Code Guidance for first-time exporters. (3) Pre-clearance Consultation to avoid delays. (4) Duty and Tax Calculation. (5) Prohibited Items Screening. Our licensed customs brokers ensure 100% compliance with destination country regulations, preventing shipment holds."
    },
    {
        question: "Can I track my international shipment in real-time?",
        answer: "Yes. All Light Speed Logistics shipments include advanced real-time tracking through: (1) Unique Tracking Number provided immediately after booking. (2) Online Tracking Portal accessible 24/7. (3) SMS and Email Notifications at major checkpoints (pickup, customs clearance, in-transit, out for delivery). (4) WhatsApp Updates via +91 95666 50409. (5) GPS-Enabled tracking for premium shipments. View exact location, customs status, and estimated delivery time."
    },
    {
        question: "What items are prohibited for international shipping from India?",
        answer: "Commonly prohibited items include: (1) Weapons, explosives, and hazardous materials. (2) Narcotics and illegal drugs. (3) Counterfeit goods and pirated media. (4) Live animals and perishables without permits. (5) Currency above declared limits. Restricted items requiring special permits: Prescription medicines (with valid prescription), certain electronics, food items. Light Speed Logistics provides pre-shipment consultation to verify item eligibility based on destination country regulations (USA, UK, Canada customs vary)."
    },
    {
        question: "How do I ship medicines internationally from Chennai?",
        answer: "Shipping medicines requires: (1) Valid Doctor's Prescription (original copy). (2) Medicine Invoice and composition details. (3) Quantity limits: typically 3-month personal supply. (4) Temperature-Controlled Packaging for sensitive drugs. (5) Customs Declaration with dosage details. Light Speed Logistics specializes in pharmaceutical shipping with compliant cold-chain logistics, ensuring FDA, MHRA, and Health Canada approval. Processing time: 2-3 days for documentation, 4-7 days delivery to USA/UK/Canada."
    },
    {
        question: "What are the freight forwarding charges for air and sea cargo?",
        answer: "Freight forwarding rates from Chennai: **Air Freight**: ₹150-300/kg depending on volume (minimum 50kg). Express air: ₹250-400/kg (2-4 days). Consolidation service available for smaller loads. **Sea Freight**: Full Container Load (FCL) - 20ft container ₹80,000-1,50,000, 40ft container ₹1,20,000-2,50,000. Less than Container Load (LCL) - ₹4,000-8,000 per CBM. Includes port handling, documentation, and basic insurance. Get detailed quote with destination port charges."
    },
    {
        question: "Do you offer door-to-door delivery for international shipments?",
        answer: "Yes. Light Speed Logistics provides complete door-to-door service: **Pickup**: Free collection from your Chennai address (home/office/warehouse) within 24 hours of booking. **Delivery**: Direct delivery to receiver's address in USA, UK, Canada, Dubai, Singapore, or any of 200+ countries. **Process**: (1) Schedule pickup online. (2) Our agent collects, packs, and documents. (3) We handle customs clearance. (4) International courier partners deliver with signature. No need to visit our office or airport."
    },
    {
        question: "What is the difference between courier and freight forwarding?",
        answer: "**International Courier**: Best for small parcels (up to 30kg), documents, samples. Features: Fast (3-7 days), door-to-door, simplified customs, higher per-kg cost (₹300-500/kg). Ideal for urgent shipments, e-commerce orders, personal packages. **Freight Forwarding**: For bulk cargo (50kg+), commercial shipments, palletized goods. Features: Economical (₹50-200/kg), requires more documentation, longer transit (7-30 days for sea), suitable for businesses. Light Speed Logistics offers both services based on your shipping needs and budget."
    },
    {
        question: "How long does sea freight take from Chennai to USA/UK?",
        answer: "Sea freight transit times from Chennai Port: **To USA**: East Coast (New York/Miami) - 30-35 days. West Coast (Los Angeles/Long Beach) - 25-30 days. **To UK**: London/Southampton - 28-32 days. **To Europe**: Hamburg/Rotterdam - 30-35 days. **To UAE**: Dubai/Abu Dhabi - 7-10 days. Transit includes port loading (2-3 days), ocean voyage, destination customs clearance (3-5 days). Faster transit available via express sea freight (15-20 days) at premium rates."
    },
    {
        question: "Can I ship food items internationally from India?",
        answer: "Yes, with restrictions. **Allowed Food Items**: Packaged snacks, dry spices, tea, coffee, canned goods, non-perishable items. **Requirements**: (1) Commercial packaging with ingredients label. (2) Manufacturing date and expiry clearly visible. (3) FDA/FSSAI certification for commercial quantities. (4) Customs declaration form. **Prohibited**: Fresh fruits, vegetables, dairy, meat products (to most destinations). Light Speed Logistics provides specialized food-grade packaging and ensures compliance with destination country food import regulations (USDA for USA, FSA for UK)."
    },
    {
        question: "What packaging do you provide for fragile items?",
        answer: "Light Speed Logistics offers professional packaging for fragile items: (1) **Bubble Wrap and Foam**: Multi-layer cushioning for electronics, glassware, ceramics. (2) **Corrugated Boxes**: Double-walled boxes for extra strength. (3) **Wooden Crates**: For heavy/valuable items (artwork, machinery). (4) **Custom Packaging**: Designed for odd-shaped items. (5) **Tamper-Proof Sealing**: Security tape and locks. Materials meet ISPM-15 standards for international shipping. Packaging cost: ₹200-2,000 depending on item size and value."
    },
    {
        question: "How do I calculate international shipping volume weight?",
        answer: "Volume weight (dimensional weight) is calculated when package size exceeds actual weight. **Formula**: (Length × Width × Height in cm) ÷ 5000 = Volumetric Weight in kg. **Example**: Box 50cm × 40cm × 30cm = 60,000 ÷ 5000 = 12kg volumetric weight. If actual weight is 8kg, you're charged for 12kg. **Tip**: Use smallest possible box to reduce costs. Light Speed Logistics offers free packaging consultation to optimize dimensions and minimize shipping charges."
    },
    {
        question: "Do you offer student discounts for sending luggage abroad?",
        answer: "Yes! Light Speed Logistics offers Student Discount Package for sending luggage/excess baggage to universities abroad: **Discount**: 15-20% off standard rates for students with valid admission letter/student ID. **Service**: Door pickup from home, delivery to university/hostel address. **Popular Routes**: Chennai to USA (California, Texas, New York universities), UK (London, Manchester), Canada (Toronto, Vancouver). **Package**: Up to 50kg luggage including books, clothes, personal items. **Booking**: Upload student documents for instant verification and discounted quote."
    },
    {
        question: "What is the IEC code and do I need it for exports?",
        answer: "**IEC (Import Export Code)** is a 10-digit registration number mandatory for all international commercial transactions in India, issued by DGFT. **Who Needs IEC**: Businesses and individuals exporting/importing goods commercially. **Not Required For**: Personal gifts under $5,000, samples up to $1,000, passengers' baggage. **How to Get IEC**: Apply online at DGFT portal, processing time 4-7 days, one-time fee ₹1,000-1,500. Light Speed Logistics assists with IEC code application, documentation, and first-time exporter guidance for Chennai businesses."
    },
    {
        question: "Can you ship heavy machinery and industrial equipment internationally?",
        answer: "Yes, Light Speed Logistics provides specialized heavy cargo shipping: **Services**: (1) Project Cargo for oversized equipment. (2) Break-Bulk Shipping for non-containerizable items. (3) Ro-Ro (Roll-on/Roll-off) for vehicles and machinery. (4) Chartered Vessels for extremely large projects. **Process**: Site survey, custom crating, heavy-lift handling, marine insurance, export documentation. **Equipment Types**: CNC machines, generators, printing presses, construction equipment, industrial boilers. **Chennai Ports**: Chennai Port, Ennore Port, Kattupalli Port. Request survey and quote for machinery specifications."
    },
    {
        question: "What are your operating hours and customer support timings?",
        answer: "**Operating Hours**: Monday to Saturday: 9:00 AM - 9:00 PM (Chennai Time). Sunday: 10:00 AM - 6:00 PM. **24/7 Support Available**: Emergency shipment tracking, weekend pickups (on request), urgent customs clearance assistance. **Contact Methods**: Phone: +91 95666 50409, Email: lightspeedinternationals@gmail.com, WhatsApp: Available 24/7 for queries. **Office Location**: 57, Periyar Street, Padikuppam, Koyambedu, Chennai - 600107. Walk-in consultations welcome during business hours."
    },
    {
        question: "Do you provide insurance for international shipments?",
        answer: "Yes, Light Speed Logistics offers comprehensive cargo insurance: **Coverage**: Loss, damage, theft, fire, natural disasters, war risk (optional). **Rates**: 0.5% to 2% of declared cargo value (varies by item type and destination). **Claims**: 100% claim value within 30 days with proper documentation. **Recommended For**: Electronics, jewelry, artwork, fragile items, high-value commercial cargo. **Not Required For**: Documents, low-value items under ₹5,000. Insurance includes door-to-door coverage from Chennai pickup to final delivery anywhere globally."
    },
    {
        question: "How do I send money or cheques internationally?",
        answer: "**Important**: Sending currency/cash via courier is illegal and prohibited by Indian customs law. **Legal Alternatives**: (1) **Bank Wire Transfer**: Via NEFT/SWIFT/RTGS. (2) **Online Money Transfer**: Western Union, Remit2India, Wise, PayPal. (3) **Demand Drafts**: Bank-issued DDs in foreign currency. Light Speed Logistics **cannot ship cash, currency notes, cheques, or monetary instruments**. We can ship non-negotiable documents like bank statements, invoices, or contracts. For urgent money transfer needs, consult your bank or authorized money transfer service."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" aria-label="Frequently Asked Questions - International Courier Chennai" itemScope itemType="https://schema.org/FAQPage" className="section-padding bg-background relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    className="text-center mb-16 space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-foreground">Frequently Asked </span>
                        <span className="heading-gradient">Questions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Complete answers to your questions about international courier, freight forwarding, customs clearance, and logistics services from Chennai.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="border border-border rounded-xl bg-card overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-foreground pr-8">{faq.question}</span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
