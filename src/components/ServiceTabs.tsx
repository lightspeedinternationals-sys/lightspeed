"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Truck, Warehouse, Ship, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";

// Animations
import courierAnim from "@/assets/lottie animation/Delivery car logistic.json";
import warehouseAnim from "@/assets/lottie animation/ecommerce order fulfillment automation.json";
import freightAnim from "@/assets/lottie animation/world wide shipment, e-commerce platform, international commerce and shipping, e-commerce (1).json";
import customAnim from "@/assets/lottie animation/Logistics.json";

interface ServiceTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  animation: any;
}

const services: ServiceTab[] = [
  {
    id: "courier",
    name: "Courier Service",
    icon: <Truck className="w-5 h-5" />,
    title: "Courier Service",
    description: "Our courier services are designed to deliver your packages quickly, safely, and reliably. Whether it's documents, parcels, or sensitive items, we ensure timely delivery with real-time tracking and a professional handling process. With domestic and international coverage, we make sure your shipment reaches anywhere with confidence.",
    animation: courierAnim,
  },
  {
    id: "warehousing",
    name: "Warehousing",
    icon: <Warehouse className="w-5 h-5" />,
    title: "Warehousing",
    description: "Our secure and modern warehousing facilities provide safe storage for your goods with 24/7 surveillance, monitored inventory, and climate-controlled options. Whether you need short-term storage or long-term inventory management, our systems help your business maintain smooth, uninterrupted operations.",
    animation: warehouseAnim,
  },
  {
    id: "freight",
    name: "Freight Forwarding",
    icon: <Ship className="w-5 h-5" />,
    title: "Freight Forwarding",
    description: "We offer end-to-end freight forwarding solutions across sea, air, and surface transportation. From international cargo movement to customs clearance and documentation, our global partner network ensures smooth and efficient logistics for all your large-scale shipments.",
    animation: freightAnim,
  },
  {
    id: "customized",
    name: "Customized Solutions",
    icon: <Settings className="w-5 h-5" />,
    title: "Customized Logistic Solutions",
    description: "Every business has unique logistics needs. We create tailor-made logistics workflows designed around your products, your customers, and your goals. From fragile items to bulk shipments, our personalized approach ensures precision, speed, and reliability for all your logistics challenges.",
    animation: customAnim,
  },
];

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState("courier");
  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gold">OUR</span>{" "}
            <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            Courier Services | Warehousing | Freight Forwarding | Customized Logistic Solutions
          </p>
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We deliver end-to-end logistics solutions designed to support your business growth.
            With advanced tracking technology, modern fleets, and a global partner network,
            LIGHT SPEED ensures seamless, timely, and secure transportation of your goods.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          className="flex flex-nowrap md:flex-wrap overflow-x-auto pb-4 md:pb-0 justify-start md:justify-center gap-2 mb-12 scrollbar-hide snap-x"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap snap-center shrink-0
                transition-colors duration-300 border-2
                ${activeTab === service.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }
              `}
            >
              {service.icon}
              <span className="hidden sm:inline">{service.name}</span>
              {activeTab === service.id && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                {activeService.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {activeService.description}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button className="btn-primary group">
                  KNOW MORE
                  <Truck className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeService.id}-img`}
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-border bg-card/50 p-4 flex items-center justify-center">
                <LottieAnimation
                  animationData={activeService.animation}
                  containerId={`service-${activeService.id}`}
                  className="w-full h-full"
                />
              </div>
              {/* Decorative glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;
