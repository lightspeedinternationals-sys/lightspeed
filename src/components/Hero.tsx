"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef, MouseEvent } from "react";
import heroBg from "@/assets/hero-bg.png";
import lightSpeedLogo from "@/assets/light-speed-logo.png";
import MagneticButton from "@/components/ui/MagneticButton";

// Helper for staggered text
const StaggerText = ({ text, className = "", delayStr = 0 }: { text: string, className?: string, delayStr?: number }) => {
  const letters = text.split("");
  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delayStr + i * 0.03,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

// Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const moveX1 = useTransform(springX, [-0.5, 0.5], [30, -30]);
  const moveY1 = useTransform(springY, [-0.5, 0.5], [30, -30]);

  const moveX2 = useTransform(springX, [-0.5, 0.5], [-50, 50]);
  const moveY2 = useTransform(springY, [-0.5, 0.5], [-50, 50]);

  // Scroll Parallax for background
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with fade-in and zoom loop + Scroll Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center origin-center"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          y: bgY
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{
          scale: [1.1, 1.15, 1.1],
          opacity: 1
        }}
        transition={{
          scale: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: {
            duration: 1.5,
            ease: "easeOut"
          }
        }}
      />

      {/* Dark gradient overlay for premium readability */}


      {/* Interactive Parallax Blobs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        style={{ x: moveX1, y: moveY1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        style={{ x: moveX2, y: moveY2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dark overlay for text contrast if background is too bright - Optional, currently removed as per request to remove white fades. 
          If text is unreadable, we might need a dark dimming layer here instead of white. 
          For now, raw image. */}
      {/* <div className="absolute inset-0 bg-black/40" />  <-- detailed implementation if needed later */}

      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        >
          {/* Floating Logo - with gentle float animation */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full"
                style={{ transform: "scale(1.5)" }}
              />
              <div className="relative w-32 h-32 z-10">
                <Image
                  src={lightSpeedLogo}
                  alt="Light Speed Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Heading - Staggered Reveal */}
          <div className="relative z-20 mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
              <span className="text-white block pb-2">
                <StaggerText text="Sky's the Limit," delayStr={0.2} />
              </span>
              <span className="block pb-2">
                <motion.span
                  className="text-[#FF6B6B] inline-block mr-3" // Salmon/Red color
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  We Deliver
                </motion.span>
                <motion.span
                  className="text-[#F4D03F] inline-block" // Beige/Gold color
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  Beyond
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Sub-heading with typewriter effect */}
          <motion.h2
            className="mt-6 text-3xl md:text-4xl font-bold tracking-wide drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <motion.span
              className="inline-block text-[#FF6B6B]" // Salmon/Red
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              Speed.
            </motion.span>{" "}
            <motion.span
              className="inline-block text-[#EFF6FF]" // Off-white/AliceBlue
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
            >
              Security.
            </motion.span>{" "}
            <motion.span
              className="inline-block text-[#EFF6FF]" // Off-white/AliceBlue
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              Reliability.
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-200/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            Your trusted logistics partner for domestic & international deliveries.
            From express courier services to complete freight management, we ensure
            your shipments reach safely — every time.
          </motion.p>

          {/* CTA Buttons - Magnetic */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <MagneticButton strength={0.3}>
              <Button
                size="lg"
                className="btn-primary group text-lg px-8"
                onClick={scrollToQuote}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
                onClick={scrollToQuote}
              >
                Request Quota
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trust indicators with animated counters */}
          <motion.div
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <motion.div
              className="space-y-2 cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter end={10} suffix="K+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Deliveries</div>
            </motion.div>
            <motion.div
              className="space-y-2 cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary">
                <AnimatedCounter end={50} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </motion.div>
            <motion.div
              className="space-y-2 cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}

    </section>
  );
};

export default Hero;
