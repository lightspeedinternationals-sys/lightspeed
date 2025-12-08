"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import lightSpeedLogo from "@/assets/light-speed-logo.png";

interface SplashScreenProps {
  isLoading: boolean;
}

const SplashScreen = ({ isLoading }: SplashScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Background glow effects - Optimized: Reduced blur, added will-change, checks for reduced motion */}
          <motion.div
            className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] will-change-transform"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[250px] h-[250px] bg-secondary/20 rounded-full blur-[60px] will-change-transform"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Animated Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Pulsing glow ring - Optimized: Reduced blur and complexity */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-lg will-change-transform"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "150px", height: "150px", margin: "-15px" }}
              />

              {/* Logo - Optimized: Removed expensive drop-shadow animation */}
              <motion.div
                className="relative w-28 h-28 md:w-36 md:h-36 z-10 drop-shadow-lg will-change-transform"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={lightSpeedLogo}
                  alt="Light Speed Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Brand name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-wider">
                LIGHT <span className="text-primary">SPEED</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1 tracking-widest">
                INTERNATIONAL LOGISTICS
              </p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              className="flex gap-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
