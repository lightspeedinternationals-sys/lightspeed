import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.png";
import lightSpeedLogo from "@/assets/light-speed-logo.png";

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

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect - background moves slower than scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background image with fade-in and subtle zoom */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center origin-center"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y: backgroundY,
        }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ 
          scale: [1.2, 1.05, 1.08],
          opacity: 1 
        }}
        transition={{ 
          opacity: { duration: 1.2, ease: "easeOut" },
          scale: { 
            duration: 20, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Animated glow effects */}
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="container-custom relative z-10 text-center px-4"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        >
          {/* Floating Logo */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Pulsing glow ring behind logo */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/30 blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.7, 0.4],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "160px", height: "160px", margin: "-16px" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "180px", height: "180px", margin: "-26px" }}
              />
              <motion.img 
                src={lightSpeedLogo} 
                alt="Light Speed Logo" 
                className="w-32 h-32 object-contain relative z-10"
                animate={{ 
                  y: [0, -12, 0],
                  filter: [
                    "drop-shadow(0 0 25px rgba(245,208,138,0.5)) drop-shadow(0 0 50px rgba(230,57,70,0.3))",
                    "drop-shadow(0 0 45px rgba(245,208,138,0.9)) drop-shadow(0 0 70px rgba(230,57,70,0.5))",
                    "drop-shadow(0 0 25px rgba(245,208,138,0.5)) drop-shadow(0 0 50px rgba(230,57,70,0.3))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-foreground">Sky's the Limit,</span>
            <br />
            <span className="heading-gradient">We Deliver Beyond</span>
          </motion.h1>

          {/* Sub-heading with typewriter effect */}
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.span 
              className="text-primary inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Speed.
            </motion.span>{" "}
            <motion.span 
              className="text-secondary inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Security.
            </motion.span>{" "}
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Reliability.
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            Your trusted logistics partner for domestic & international deliveries. 
            From express courier services to complete freight management, we ensure 
            your shipments reach safely — every time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="btn-primary group text-lg px-8"
                onClick={scrollToQuote}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline text-lg px-8"
                onClick={scrollToQuote}
              >
                Request a Quote
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators with animated counters */}
          <motion.div 
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter end={10} suffix="K+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Deliveries</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary">
                <AnimatedCounter end={50} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
