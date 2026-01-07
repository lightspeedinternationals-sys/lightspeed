"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import lightSpeedLogo from "@/assets/light-speed-logo.png";

const Footer = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: "hsl(354 70% 58%)",
      transition: { duration: 0.2 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer id="footer" aria-label="Light Speed Internationals Footer" itemScope itemType="https://schema.org/Organization" className="bg-gray-50 border-t border-gray-200">
      <meta itemProp="name" content="Light Speed Internationals" />
      <meta itemProp="url" content="https://lightspeedinternationals.com" />
      <link itemProp="sameAs" href="https://www.linkedin.com/company/lightspeed-internationals/" />
      <link itemProp="sameAs" href="https://www.instagram.com/lightspeedinternationals" />
      <div className="container-custom py-12">
        {/* Logo Section */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-24 h-24"
            animate={{
              filter: [
                "drop-shadow(0 0 10px rgba(255, 60, 60, 0.3))",
                "drop-shadow(0 0 20px rgba(255, 60, 60, 0.5))",
                "drop-shadow(0 0 10px rgba(255, 60, 60, 0.3))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Image
              src={lightSpeedLogo}
              alt="Light Speed Logo"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-bold text-gray-900">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-600 hover:text-[#ff3c3c] inline-block transition-colors"
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help & Support */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-bold text-gray-900">Help & Support</h3>
            <ul className="space-y-2">
              {["Track Shipment", "Customer Service", "Shipping Policy", "FAQ"].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-600 hover:text-[#ff3c3c] inline-block transition-colors"
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.button
                  onClick={scrollToQuote}
                  className="text-gray-600 hover:text-[#ff3c3c] transition-colors"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Quote
                </motion.button>
              </li>
              {["Services", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-600 hover:text-[#ff3c3c] inline-block transition-colors"
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
              <li>
                <motion.a
                  href="#privacy"
                  className="text-gray-600 hover:text-[#ff3c3c] inline-block transition-colors"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
            <div className="space-y-3">
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 text-[#ff3c3c] mt-1" />
                <div className="text-sm">
                  <div className="text-gray-500">Phone / WhatsApp</div>
                  <a href="tel:+919566650409" className="text-gray-700 hover:text-[#ff3c3c] transition-colors">+91 95666 50409</a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5 text-[#ff3c3c] mt-1" />
                <div className="text-sm">
                  <div className="text-gray-500">Email</div>
                  <a href="mailto:lightspeedinternationals@gmail.com" className="text-gray-700 hover:text-[#ff3c3c] break-all transition-colors">
                    lightspeedinternationals@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-3"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-[#ff3c3c] mt-1" />
                <div className="text-sm">
                  <div className="text-gray-500">Address</div>
                  <p className="text-gray-700">
                    57, Periyar Street, Padikuppam<br />
                    Koyambedu, Chennai – 600107
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-200 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500">
            <span className="font-bold text-gray-900">LIGHT SPEED</span> – Logistics & Freight Forwarding Solutions © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
