"use client";

import { motion } from "framer-motion";
import { Box, Plane, MapPin, Circle } from "lucide-react";
import { useEffect, useState } from "react";

const BackgroundAnimation = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    if (prefersReducedMotion) return null;

    // Configuration for floating particles
    const particles = [
        { Icon: Box, color: "text-red-500", size: 24, initialX: "10%", initialY: "20%", duration: 25 },
        { Icon: Plane, color: "text-white", size: 32, initialX: "80%", initialY: "15%", duration: 30 },
        { Icon: MapPin, color: "text-red-600", size: 28, initialX: "90%", initialY: "70%", duration: 28 },
        { Icon: Circle, color: "text-neutral-700", size: 16, initialX: "20%", initialY: "80%", duration: 35 },
        { Icon: Box, color: "text-neutral-600", size: 20, initialX: "50%", initialY: "50%", duration: 40 },
        { Icon: Plane, color: "text-red-500/50", size: 48, initialX: "5%", initialY: "60%", duration: 45 },
        { Icon: Circle, color: "text-white/20", size: 12, initialX: "70%", initialY: "30%", duration: 32 },
    ];

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-neutral-950">
            {/* Subtle Gradient Glows */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neutral-800/20 rounded-full blur-[120px]" />
            </div>

            {/* Floating Particles */}
            {particles.map((particle, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${particle.color} opacity-10`}
                    initial={{
                        x: particle.initialX,
                        y: particle.initialY,
                        scale: 0.8,
                        rotate: 0
                    }}
                    animate={{
                        y: ["0%", "-20%", "0%"], // Float up and down
                        x: ["0%", "10%", "0%"], // Drift sideways
                        rotate: [0, 360, 0], // Slow rotation
                        scale: [0.8, 1.1, 0.8], // Pulse
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.5, 1]
                    }}
                >
                    <particle.Icon size={particle.size} />
                </motion.div>
            ))}

            {/* Grid overlay for texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />
        </div>
    );
};

export default BackgroundAnimation;
