"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What logistics services do you provide?",
        answer: "We provide end-to-end logistics solutions including domestic and international courier services, freight forwarding (air, sea, and surface), warehousing, and customized supply chain solutions designed for businesses and individuals."
    },
    {
        question: "Do you offer international shipping from Chennai?",
        answer: "Yes. We offer fast and reliable international shipping from Chennai to major global destinations including the USA, UK, Europe, Middle East, and Asia, supported by a strong global partner network."
    },
    {
        question: "How fast is your delivery service?",
        answer: "Delivery timelines depend on destination and service type. Express international shipments typically arrive within 3–7 business days, while economy and freight services are scheduled based on cargo requirements and customs clearance."
    },
    {
        question: "Do you handle customs clearance for international shipments?",
        answer: "Yes. We manage complete customs documentation, compliance checks, and clearance procedures for both personal and commercial shipments, ensuring smooth cross-border delivery."
    },
    {
        question: "Can I track my shipment in real time?",
        answer: "Absolutely. All shipments include real-time tracking, allowing customers to monitor status, location, and delivery updates through our tracking system."
    },
    {
        question: "What items can be shipped internationally?",
        answer: "We ship a wide range of items including documents, parcels, electronics, medicines, packaged foods, garments, commercial cargo, and household goods, subject to destination-specific regulations."
    },
    {
        question: "Are medicines and food items safe to ship?",
        answer: "Yes. Medicines and food items are handled with strict compliance protocols, secure packaging, and temperature-sensitive logistics where required, ensuring safety and freshness."
    },
    {
        question: "Do you provide packaging support?",
        answer: "Yes. We offer professional packaging services using high-quality, tamper-proof materials to protect fragile, sensitive, and high-value shipments during transit."
    },
    {
        question: "Do you offer door-to-door pickup and delivery?",
        answer: "Yes. We provide free door pickup services and ensure doorstep delivery for both domestic and international shipments, saving time and improving convenience."
    },
    {
        question: "Is warehousing and storage available?",
        answer: "Yes. We provide secure warehousing and storage facilities with 24/7 surveillance, climate control, and real-time inventory management in Chennai."
    },
    {
        question: "How cost-effective are your logistics services?",
        answer: "Our pricing is competitive and transparent. By optimizing routes, partnerships, and operations, we deliver high-quality logistics services at affordable rates without compromising reliability."
    },
    {
        question: "Why choose your logistics company over others?",
        answer: "We combine speed, security, advanced tracking technology, professional handling, and customer-first service. Our focus is on timely delivery, operational transparency, and scalable logistics solutions."
    },
    {
        question: "How do I request a quote?",
        answer: "You can request a quote directly through our website by filling out the inquiry form, or contact us via phone or WhatsApp for immediate assistance."
    }
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
