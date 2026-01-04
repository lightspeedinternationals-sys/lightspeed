"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef, MouseEvent } from "react";
import heroBg from "@/assets/hero-bg.png";
import lightSpeedLogo from "@/assets/light-speed-logo.png";
import MagneticButton from "@/components/ui/MagneticButton";
import { useIsMobile } from "@/hooks/use-mobile";



// Counter Component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentCount = Math.floor(end * easeOutQuart);
      element.textContent = `${currentCount}${suffix}`;

      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();

  // Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (isMobile) return;
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]"
    >
      {/* Background image - CSS Optimized */}
      <div
        className="absolute inset-0 bg-cover bg-center origin-center animate-in fade-in duration-1000"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          // We can keep parallax if it doesn't break LCP, but for now strict CSS is safest.
          // Re-enabling scroll parallax via simple transform if needed, but avoiding 'opacity: 0' is key.
        }}
      />

      {/* Dark gradient overlay for premium readability */}


      {/* Interactive Parallax Blobs - Reduced motion/blur on mobile */}
      {/* Light Gradient overlay for depth - Static instead of heavy animated blurs */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
        </div>
      )}

      {/* Dark overlay for text contrast if background is too bright - Optional, currently removed as per request to remove white fades. 
          If text is unreadable, we might need a dark dimming layer here instead of white. 
          For now, raw image. */}
      {/* <div className="absolute inset-0 bg-black/40" />  <-- detailed implementation if needed later */}

      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
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
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Heading - Instant Render Optimization */}
          <div className="relative z-20 mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-white block pb-2">
                Sky's the Limit,
              </span>
              <span className="block pb-2">
                <span className="text-[#FF6B6B] inline-block mr-3">
                  We Deliver {" "}
                </span>
                <span className="text-[#F4D03F] inline-block">
                  Beyond
                </span>
              </span>
            </h1>
          </div>

          {/* Sub-heading */}
          <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-wide drop-shadow-md animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 fill-mode-both">
            <span className="inline-block text-[#FF6B6B]">
              Speed.
            </span>{" "}
            <span className="inline-block text-[#EFF6FF]">
              Security.
            </span>{" "}
            <span className="inline-block text-[#EFF6FF]">
              Reliability.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-gray-200/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 fill-mode-both">
            Your trusted logistics partner for domestic & international deliveries.
            From express courier services to complete freight management, we ensure
            your shipments reach safely — every time.
          </p>

          {/* CTA Buttons - Magnetic */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
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
                Request Quote
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trust indicators with animated counters */}
          <motion.div
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
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
