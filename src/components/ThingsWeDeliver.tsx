"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Laptop, Pill, UtensilsCrossed, Shirt, ShoppingBag } from "lucide-react";

// Data with descriptions for the back side
const items = [
  {
    icon: FileText,
    name: "Documents & Parcels",
    backTitle: "Secure Delivery",
    backDesc: "Secure delivery of important documents, letters, and parcels with real-time tracking and signature verification."
  },
  {
    icon: Laptop,
    name: "Electronics & Gadgets",
    backTitle: "Safe Handling",
    backDesc: "Fragile electronics like smartphones, laptops, and accessories are transported with anti-static packaging and temperature-controlled logistics."
  },
  {
    icon: Pill,
    name: "Medicine & Herbals",
    backTitle: "Compliance Delivery",
    backDesc: "Medical supplies and herbal products are delivered with strict compliance protocols, ensuring freshness, safety, and timely arrival."
  },
  {
    icon: UtensilsCrossed,
    name: "Branded Foods & Snacks",
    backTitle: "Freshness Assured",
    backDesc: "Packaged foods and branded snacks are handled with freshness assurance, tamper-proof packaging, and temperature-sensitive delivery."
  },
  {
    icon: Shirt,
    name: "Garments & Clothing",
    backTitle: "Wrinkle-Free Delivery",
    backDesc: "From boutique wear to bulk garments, we deliver wrinkle-free, clean clothing with garment-safe packaging and careful handling."
  },
  {
    icon: ShoppingBag,
    name: "Groceries & Utensils",
    backTitle: "Daily Essentials",
    backDesc: "Daily essentials — from vegetables to cookware — are delivered responsibly with organized packaging and doorstep convenience."
  },
];

import LottieAnimation from "@/components/LottieAnimation";
import deliveryBoyAnim from "@/assets/lottie animation/delivery-boy.json";

const ThingsWeDeliver = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFlip = (e: React.MouseEvent | React.TouchEvent) => {
    // Simple toggle for touch devices handled via classList logic in parent or direct React state if preferred.
    // Here we rely on the CSS hover state for desktop and a click wrapper for broader support if needed,
    // but standard :hover usually works on tap on iOS. 
    // For explicit mobile support as per prompt "ontouchstart", we can toggle a class.
    const card = (e.currentTarget as HTMLElement);
    card.classList.toggle('flipped');
  };

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        {/* Header Section with Animation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Things We Deliver
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We handle a wide range of items with industry-level safety and care.
              From small parcels to bulk shipments, we ensure everything reaches
              safely.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-sm">
              <LottieAnimation
                animationData={deliveryBoyAnim}
                containerId="delivery-boy-anim"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Flip Cards Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="myCard h-[280px] w-full"
                onClick={toggleFlip}
              >
                <div className="innerCard">
                  {/* Front Side */}
                  <div className="frontSide group">
                    <div className="mb-6 p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                      <Icon className="w-12 h-12 text-[#ff3c3c]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                  </div>

                  {/* Back Side */}
                  <div className="backSide">
                    <h3 className="text-xl font-bold text-[#ff3c3c] mb-3">
                      {item.backTitle}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.backDesc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ThingsWeDeliver;
