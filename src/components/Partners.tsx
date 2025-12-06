import { motion } from "framer-motion";
import fedexLogo from "@/assets/partners/fedex.png";
import dhlLogo from "@/assets/partners/dhl.png";
import dtdcLogo from "@/assets/partners/dtdc.png";
import aramexLogo from "@/assets/partners/aramex.png";
import delhiveryLogo from "@/assets/partners/delhivery.png";
import bluedartLogo from "@/assets/partners/bluedart.png";
import tntLogo from "@/assets/partners/tnt.png";
import speedexLogo from "@/assets/partners/speedex.png";

const partners = [
  { name: "FedEx", logo: fedexLogo },
  { name: "DHL", logo: dhlLogo },
  { name: "DTDC", logo: dtdcLogo },
  { name: "Aramex", logo: aramexLogo },
  { name: "Delhivery", logo: delhiveryLogo },
  { name: "Blue Dart", logo: bluedartLogo },
  { name: "TNT", logo: tntLogo },
  { name: "SpeedEx", logo: speedexLogo }
];

const Partners = () => {
  // Triple the partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="section-padding bg-muted/20 overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Partners</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container with gradient masks */}
      <div className="relative w-full">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/20 to-transparent z-10 pointer-events-none" />
        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/20 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="card-dark flex items-center justify-center p-8 mx-4 min-w-[200px] md:min-w-[250px] flex-shrink-0 group cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(230, 57, 70, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
