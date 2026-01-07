"use client";

import { Globe } from "@/components/ui/globe";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const GlobalReach = () => {
    return (
        <section aria-label="Global Courier Network - 200+ Countries" className="w-full py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                Global Courier Network
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Connecting Chennai Business <br />
                            <span className="text-primary">To The World</span>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            With strategic hubs in major commercial capitals and a network spanning over 100 countries,
                            Lightspeed International ensures your cargo reaches its destination with speed and precision.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {[
                                { label: "Countries Covered", value: "100+" },
                                { label: "Global Partners", value: "500+" },
                                { label: "Major Hubs", value: "25+" },
                                { label: "On-Time Delivery", value: "99%" },
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <h4 className="text-3xl font-bold text-foreground">{stat.value}</h4>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Lottie Animation (SEO-Safe) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center items-center"
                    >
                        {/* Background Glow Effect */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 animate-pulse" />
                        <div className="relative z-10 w-full max-w-2xl aspect-square">
                            <DotLottieReact
                                src="https://lottie.host/e341ef24-d354-4b2a-b977-864533f99d0b/8aAaOFRvMR.lottie"
                                loop
                                autoplay
                                className="w-full h-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
