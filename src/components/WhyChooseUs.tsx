import { Zap, Package, MapPin, Home } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Fast & Safe Delivery",
    description: "Lightning-fast delivery times with secure handling protocols",
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Professional Packaging",
    description: "Industry-standard packaging materials and techniques",
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: "Easy Tracking",
    description: "Real-time shipment tracking with live updates",
  },
  {
    icon: <Home className="w-10 h-10" />,
    title: "Free Door Pickup",
    description: "Complimentary pickup service from your doorstep",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Why Choose </span>
            <span className="heading-gradient">LIGHT SPEED</span>
          </h2>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(230, 57, 70, 0.15)"
              }}
              className="card-dark text-center space-y-4 group cursor-pointer"
            >
              <motion.div 
                className="flex justify-center text-primary"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 0.4 }}
              >
                {feature.icon}
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
