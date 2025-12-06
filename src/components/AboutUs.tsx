import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutUs = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-primary">LIGHT SPEED</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            LIGHT SPEED is a next-generation logistics provider offering fast, reliable, 
            and affordable courier and freight services. Our mission is to deliver excellence 
            through technology, precision, and customer-first thinking. With years of experience 
            and a trusted partner network, we provide seamless logistics for individuals, 
            startups, and enterprises.
          </motion.p>

          <motion.div 
            ref={statsRef}
            className="grid md:grid-cols-3 gap-8 pt-8"
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-primary">
                <AnimatedCounter end={2020} duration={2500} />
              </div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-secondary">
                <AnimatedCounter end={98} suffix="%" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-primary">
                <AnimatedCounter end={5000} suffix="+" duration={2500} />
              </div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
