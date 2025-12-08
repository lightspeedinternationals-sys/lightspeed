"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Assets
import boxImg from "@/assets/box.png";
import courierImg from "@/assets/courier.png";
import trackingImg from "@/assets/shipping-container.png"; // Using container for tracking/shipment
import affordableImg from "@/assets/container.png"; // Using container for bulk/affordable

const features = [
  {
    title: "Affordable Rates",
    description: "We offer competitive pricing without compromising on service quality.",
    image: affordableImg,
  },
  {
    title: "Professional Packaging",
    description: "Your cargo is packed with precision and care to ensure safe delivery.",
    image: boxImg,
  },
  {
    title: "Easy Tracking",
    description: "Track your shipment in real-time with our intuitive dashboard.",
    image: trackingImg,
  },
  {
    title: "Free Door Pickups",
    description: "We pick up your packages from your doorstep at no extra cost.",
    image: courierImg,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Why Choose </span>
            <span className="heading-gradient">LIGHT SPEED</span>
          </h2>
          <p className="mb-10 text-muted-foreground text-lg max-w-2xl mx-auto">
            We don’t just move cargo – we deliver peace of mind. Here’s what sets us apart from other logistics providers in the industry.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(230, 57, 70, 0.15)"
              }}
              className="card-dark text-center space-y-4 group cursor-pointer p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
