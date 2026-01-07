"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileText, Mail } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <section id="privacy" className="section-padding bg-background">
            <div className="container-custom max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-foreground">Privacy </span>
                            <span className="heading-gradient">Policy</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Last Updated: January 2026
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
                        <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                            <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">Information We Collect</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We collect information you provide when requesting quotes, booking shipments, or contacting us.
                                    This includes name, email, phone number, address, and shipment details. We also collect technical data
                                    like IP address and browser type for security and analytics.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                            <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">How We Use Your Data</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Your information is used to: (1) Process and track shipments, (2) Communicate service updates,
                                    (3) Improve our services, (4) Comply with legal obligations, and (5) Prevent fraud.
                                    We never sell your personal data to third parties.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                            <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">Data Security & Retention</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We implement industry-standard security measures including SSL encryption, secure servers,
                                    and access controls. Personal data is retained for 7 years as required by Indian law,
                                    after which it is securely deleted.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                            <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">Your Rights</h3>
                                <p className="text-muted-foreground leading-relaxed mb-3">
                                    You have the right to: access your data, request corrections, delete your information
                                    (subject to legal requirements), and opt-out of marketing communications.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    <strong className="text-foreground">Contact us:</strong>{" "}
                                    <a href="mailto:lightspeedinternationals@gmail.com" className="text-primary hover:underline">
                                        lightspeedinternationals@gmail.com
                                    </a>{" "}
                                    | Phone: <a href="tel:+919566650409" className="text-primary hover:underline">+91 95666 50409</a>
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted/50 p-6 rounded-xl border border-border/50">
                            <h3 className="text-lg font-semibold mb-2 text-foreground">Cookies Policy</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We use essential cookies for website functionality and analytics cookies (with your consent)
                                to understand user behavior. You can manage cookie preferences through our consent banner.
                                Rejecting non-essential cookies will not affect core website functionality.
                            </p>
                        </div>

                        <div className="text-center pt-6 border-t border-border">
                            <p className="text-sm text-muted-foreground">
                                This policy complies with Indian IT Act 2000, GDPR, and international data protection standards.
                                For detailed inquiries, contact our Data Protection Officer at the email above.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
