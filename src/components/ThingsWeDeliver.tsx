import { FileText, Laptop, Pill, UtensilsCrossed, Shirt, ShoppingBag } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { icon: <FileText className="w-8 h-8" />, name: "Documents & Parcels" },
  { icon: <Laptop className="w-8 h-8" />, name: "Electronics & Gadgets" },
  { icon: <Pill className="w-8 h-8" />, name: "Medicine & Herbals" },
  { icon: <UtensilsCrossed className="w-8 h-8" />, name: "Branded Foods & Snacks" },
  { icon: <Shirt className="w-8 h-8" />, name: "Garments & Clothing" },
  { icon: <ShoppingBag className="w-8 h-8" />, name: "Groceries & Utensils" },
];

const ThingsWeDeliver = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Things We Deliver
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We handle a wide range of items with industry-level safety and care:
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                boxShadow: "0 15px 30px rgba(230, 57, 70, 0.12)"
              }}
              className="card-dark text-center space-y-3 cursor-pointer"
            >
              <motion.div 
                className="flex justify-center text-primary"
                whileHover={{ 
                  rotate: [0, -15, 15, 0],
                  scale: 1.15
                }}
                transition={{ duration: 0.4 }}
              >
                {item.icon}
              </motion.div>
              <p className="text-sm font-medium text-foreground">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThingsWeDeliver;
