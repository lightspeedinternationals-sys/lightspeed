import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import lightSpeedLogo from "@/assets/light-speed-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Quote", href: "#quote-section" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#footer" },
];

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection("#home")}
          >
            <img 
              src={lightSpeedLogo} 
              alt="Light Speed Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg text-foreground hidden sm:block">
              Light<span className="text-primary">Speed</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a 
              href="tel:+919566650409"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 95666 50409</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="sm" 
                className="btn-primary"
                onClick={() => scrollToSection("#quote-section")}
              >
                Get Quote
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden bg-background/98 border-t border-border/50"
        initial={false}
        animate={{ 
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <nav className="container-custom px-4 py-4 space-y-3">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: isMobileMenuOpen ? 0 : -20, 
                opacity: isMobileMenuOpen ? 1 : 0 
              }}
              transition={{ delay: index * 0.05 }}
            >
              {link.name}
            </motion.button>
          ))}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
              x: isMobileMenuOpen ? 0 : -20, 
              opacity: isMobileMenuOpen ? 1 : 0 
            }}
            transition={{ delay: navLinks.length * 0.05 }}
          >
            <Button 
              className="btn-primary w-full mt-2"
              onClick={() => scrollToSection("#quote-section")}
            >
              Get Quote
            </Button>
          </motion.div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default StickyHeader;
