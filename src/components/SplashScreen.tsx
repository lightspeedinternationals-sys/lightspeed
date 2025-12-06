import { motion, AnimatePresence } from "framer-motion";
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
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background glow effects */}
          <motion.div 
            className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]"
            animate={{ 
              scale: [1.3, 1, 1.3],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Animated Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Pulsing glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 blur-xl"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "150px", height: "150px", margin: "-15px" }}
              />
              
              <motion.img
                src={lightSpeedLogo}
                alt="Light Speed Logo"
                className="w-28 h-28 md:w-36 md:h-36 object-contain relative z-10"
                animate={{
                  y: [0, -8, 0],
                  filter: [
                    "drop-shadow(0 0 20px rgba(245,208,138,0.5))",
                    "drop-shadow(0 0 40px rgba(245,208,138,0.8))",
                    "drop-shadow(0 0 20px rgba(245,208,138,0.5))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Brand name */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
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
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 0.8,
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
