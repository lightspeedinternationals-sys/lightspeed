"use client";

import React from "react";
import { Phone, Mail, MapPin, Share2, ArrowRight, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

interface ContactItem {
    icon: React.ReactNode;
    title: string;
    content: string;
    href: string;
    whatsappHref?: string;
    action?: string;
    socialLinks?: {
        label: string;
        href: string;
        icon: React.ReactNode;
    }[];
}

const ContactSection = () => {
    const contactDetails: ContactItem[] = [
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
        {
            icon: <Share2 className="w-8 h-8 text-[#FF0000]" />,
            title: "Follow Us",
            content: "Stay connected for updates",
            href: "#",
            socialLinks: [
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/lightspeed-internationals/?viewAsMember=true",
                    icon: <Linkedin className="w-4 h-4 ml-1" />
                },
                {
                    label: "Instagram",
                    href: "https://www.instagram.com/lightspeedinternationals?igsh=Y2xsdnA2ZWx3aTNz",
                    icon: <Instagram className="w-4 h-4 ml-1" />
                }
            ]
        },
    ];

    return (
        <section id="contact" aria-label="Contact Light Speed Internationals Chennai" itemScope itemType="https://schema.org/LocalBusiness" className="py-20 bg-gray-200">
            <meta itemProp="name" content="Light Speed Internationals" />
            <meta itemProp="telephone" content="+91-95666-50409" />
            <meta itemProp="email" content="lightspeedinternationals@gmail.com" />
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Contact <span className="text-[#FF0000]">Us</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Get in touch with Light Speed Internationals Chennai for all your international courier and logistics needs!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                                target={item.title === "Address" ? "_blank" : undefined}
                                rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                                className={`text-gray-600 font-medium mb-4 whitespace-pre-line block ${item.title !== 'Follow Us' ? 'hover:text-[#FF0000]' : ''} transition-colors break-words`}
                                aria-label={`Contact via ${item.title}`}
                                onClick={(e) => item.title === 'Follow Us' && e.preventDefault()}
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

                            {/* Social Links */}
                            {item.socialLinks && (
                                <div className="flex flex-col gap-2 mt-2 items-center">
                                    {item.socialLinks.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#FF0000] font-medium inline-flex items-center hover:underline"
                                        >
                                            {link.label} {link.icon}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
