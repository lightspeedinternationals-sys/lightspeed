import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cartImg from "@/assets/cart.png";
import containerImg from "@/assets/container.png";
import boxImg from "@/assets/box.png";
import shippingImg from "@/assets/shipping-container.png";

const services = [
  {
    title: "Courier Service",
    tagline: "Fast. Secure. Reliable.",
    features: ["Priority Delivery", "Express Shipping", "Economy Options"],
    image: cartImg,
    reverse: false,
  },
  {
    title: "Warehousing",
    tagline: "Smart Storage. Smart Handling.",
    features: ["24/7 Surveillance", "Climate-Controlled Storage", "Real-Time Inventory Management", "Flexible Storage Duration"],
    image: containerImg,
    reverse: true,
  },
  {
    title: "Freight Forwarding",
    tagline: "Global Shipping Made Simple.",
    features: ["Sea, Air & Surface Transport", "Customs Clearance Support", "International Documentation", "Global Partner Network"],
    image: boxImg,
    reverse: false,
  },
  {
    title: "Customized Logistic Solutions",
    tagline: "Tailored Transport for Your Business.",
    features: ["Custom Workflows", "Fragile Item Handling", "Bulk Shipment Management", "Enterprise-Grade Solutions"],
    image: shippingImg,
    reverse: true,
  },
];

const ServiceHighlights = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom space-y-24">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

const ServiceItem = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 items-center ${
        service.reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <motion.div 
        className={`${service.reverse ? "md:order-2" : ""}`}
        initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="relative">
          <motion.div 
            className="aspect-square rounded-2xl overflow-hidden border border-border bg-muted/20 p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-contain drop-shadow-2xl"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-3xl -z-10"
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className={`space-y-6 ${service.reverse ? "md:order-1" : ""}`}
        initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="space-y-2">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            {service.title}
          </h3>
          <p className="text-xl font-semibold text-primary">
            {service.tagline}
          </p>
        </div>

        <div className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            >
              <motion.div 
                className="mt-1 flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
              <p className="text-muted-foreground">{feature}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceHighlights;
