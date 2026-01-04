"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEvent, useRef } from "react";

// Assets
import boxImg from "@/assets/box.png";
import courierImg from "@/assets/courier.png";
import trackingImg from "@/assets/shipping-container.png";
import affordableImg from "@/assets/container.png";

const features = [
  {
    title: "Competitive Business Rates",
    description: "Customized pricing models for high-volume commercial and B2B shipments.",
    image: affordableImg,
  },
  {
    title: "Professional Packaging",
    description: "Industrial-grade packaging to ensure safety for fragile and bulk cargo.",
    image: boxImg,
  },
  {
    title: "Real-Time Global Tracking",
    description: "Monitor international shipments 24/7 with our advanced global tracking system.",
    image: trackingImg,
  },
  {
    title: "Door-to-Door Global Logistics",
    description: "Seamless pickup and delivery from your warehouse to your client's doorstep worldwide.",
    image: courierImg,
  },
];

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full perspective-1000"
    >
      <div className="h-full text-center space-y-4 p-8 rounded-2xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 group">
        <div
          style={{ transform: "translateZ(50px)" }}
          className="relative flex justify-center mb-6 transition-transform duration-300"
        >
          <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
        <div style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-xl font-bold text-[#ff3c3c] mb-3">{feature.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-[#ff3c3c]">LIGHT SPEED</span>
          </h2>
          <p className="mb-10 text-gray-600 text-lg max-w-2xl mx-auto">
            We don’t just move cargo – we deliver peace of mind. Here’s what sets us apart from other logistics providers in the industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
