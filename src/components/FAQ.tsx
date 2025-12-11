"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How fast can you deliver to the USA/UK from Chennai?",
        answer: "Our Express International Courier service typically delivers to major cities in the USA, UK, and Europe within 3-5 business days. We offer door-to-door pickup and real-time tracking for peace of mind.",
    },
    {
        question: "Do you handle customs clearance for commercial shipments?",
        answer: "Yes, Light Speed Logistics specializes in hassle-free customs clearance for both exports and imports. Our team handles all documentation, duties, and compliance requirements so your goods move smoothly across borders.",
    },
    {
        question: "Can I ship personal items and household goods?",
        answer: "Absolutely. We offer competitive rates for shipping personal effects, excess baggage, and household goods. We also provide professional packing services to ensure your items remain safe during transit.",
    },
    {
        question: "Do you offer insurance for high-value shipments?",
        answer: "Yes, we provide comprehensive cargo insurance options for high-value or fragile shipments. Please speak with our support team to add insurance coverage to your booking.",
    },
    {
        question: "What items are prohibited from international shipping?",
        answer: "Prohibited items typically include flammable liquids, explosives, narcotics, and certain perishable goods. Please check our detailed 'Prohibited Items' list or consult our support team before booking.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-padding bg-background relative overflow-hidden">
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
                        Get quick answers to common questions about our international shipping, courier, and freight services.
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
