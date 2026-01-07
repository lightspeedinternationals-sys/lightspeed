"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.png";
import lightSpeedLogo from "@/assets/light-speed-logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]"
    >
      {/* Background image - Priority Loading */}
      <Image
        src={heroBg}
        alt="Logistics Background"
        fill
        priority
        quality={75}
        className="object-cover brightness-[0.35]"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 via-transparent to-[#0f172a]/80" />

      {/* Corner Logos */}
      <div className="absolute top-6 left-6 z-20 hidden md:block">
        <Image
          src={lightSpeedLogo}
          alt="Light Speed Logistics"
          width={70}
          height={70}
          className="opacity-70"
        />
      </div>
      <div className="absolute top-6 right-6 z-20 hidden md:block">
        <Image
          src={lightSpeedLogo}
          alt="Light Speed Logistics"
          width={70}
          height={70}
          className="opacity-70"
        />
      </div>

      {/* Main Content - No Animations for Fast LCP */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* H1 - Immediately Visible */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-tight">
            <span className="text-white block mb-2">
              Sky's the Limit
            </span>
            <span className="block">
              <span className="text-[#FF4444]">We Deliver </span>
              <span className="text-[#FFD700]">Beyond</span>
            </span>
          </h1>

          {/* H2 Tagline - Immediately Visible */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold pt-4">
            <span className="text-[#FF4444]">Speed.</span>{" "}
            <span className="text-white">Security.</span>{" "}
            <span className="text-white">Reliability.</span>
          </h2>

          {/* Description - Optimized for LCP */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto px-4 pt-4">
            Your trusted logistics partner for domestic & international deliveries.
            From express courier services to complete freight management, we ensure
            your shipments reach safely — every time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-[#FF4444] hover:bg-[#FF3333] text-white text-lg px-12 py-7 rounded-lg font-bold min-w-[220px] shadow-2xl hover:shadow-[#FF4444]/50 transition-all"
              onClick={() => {
                const element = document.querySelector("#services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              className="bg-[#FF4444] hover:bg-[#FF3333] text-white text-lg px-12 py-7 rounded-lg font-bold min-w-[220px] shadow-2xl hover:shadow-[#FF4444]/50 transition-all"
              onClick={() => {
                const element = document.querySelector("#quote-section");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request Quote
            </Button>
          </div>

        </div>
      </div>

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">International Courier Service Chennai - Fast Global Shipping</h1>
    </section>
  );
};

export default Hero;
