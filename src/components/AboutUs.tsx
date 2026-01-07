"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import LottieAnimation from "@/components/LottieAnimation";
import teamAnim from "@/assets/lottie animation/delivery-team.json";

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

const AboutUs = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-[#ff3c3c]">LIGHT SPEED</span> Internationals Chennai
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              LIGHT SPEED is a next-generation logistics provider offering fast, reliable,
              and affordable courier and freight services. Our mission is to deliver excellence
              through technology, precision, and customer-first thinking. With years of experience
              and a trusted partner network, we provide seamless logistics for individuals,
              startups, and enterprises.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-8 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#ff3c3c]">
                  <AnimatedCounter end={2020} duration={2500} />
                </div>
                <div className="text-xs md:text-sm text-gray-600">Founded</div>
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#ff3c3c]">
                  <AnimatedCounter end={98} suffix="%" duration={2000} />
                </div>
                <div className="text-xs md:text-sm text-gray-600">Success Rate</div>
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#ff3c3c]">
                  <AnimatedCounter end={5000} suffix="+" duration={2500} />
                </div>
                <div className="text-xs md:text-sm text-gray-600">Happy Clients</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Animation Side */}
          <motion.div
            className="block w-full max-w-lg mx-auto mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LottieAnimation
              animationData={teamAnim}
              containerId="about-team-lottie"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
