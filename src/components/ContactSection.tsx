"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
    const contactDetails = [
        {
            icon: <Phone className="w-8 h-8 text-[#FF0000]" />,
            title: "Phone / WhatsApp",
            content: "+91 95666 50409",
            href: "tel:+919566650409",
            whatsappHref: "https://wa.me/919566650409",
            action: "Chat on WhatsApp",
        },
        {
            icon: <Mail className="w-8 h-8 text-[#FF0000]" />,
            title: "Email",
            content: "lightspeedinternationals@gmail.com",
            href: "mailto:lightspeedinternationals@gmail.com",
        },
        {
            icon: <MapPin className="w-8 h-8 text-[#FF0000]" />,
            title: "Address",
            content: "57, Periyar Street, Padikuppam\nKoyambedu, Chennai – 600107",
            href: "https://maps.google.com/?q=57+Periyar+Street+Padikuppam+Koyambedu+Chennai+600107",
        },
    ];

    return (
        <section className="py-20 bg-gray-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Contact <span className="text-[#FF0000]">Us</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Get in touch with us for all your logistics needs. We're here to help!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {contactDetails.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-2xl p-8 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative group"
                        >
                            <div className="w-20 h-20 bg-[#fce7e7] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h3>

                            {/* Main Content Link */}
                            <a
                                href={item.href}
                                target={item.icon.type === MapPin ? "_blank" : undefined}
                                rel={item.icon.type === MapPin ? "noopener noreferrer" : undefined}
                                className="text-gray-600 font-medium mb-4 whitespace-pre-line block hover:text-[#FF0000] transition-colors"
                            >
                                {item.content}
                            </a>

                            {/* WhatsApp Action Link (Only for Phone) */}
                            {item.whatsappHref && (
                                <a
                                    href={item.whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#FF0000] font-medium inline-flex items-center hover:underline mt-2"
                                >
                                    {item.action} <ArrowRight className="w-4 h-4 ml-1" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
