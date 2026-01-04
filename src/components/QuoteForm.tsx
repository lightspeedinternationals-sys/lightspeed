"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LottieAnimation from "@/components/LottieAnimation";
import logisticsAnimation from "@/assets/lottie animation/Logistics.json";
import AddressInput from "@/components/AddressInput";

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    pickupAddress: "",
    deliveryAddress: "",
    shipmentType: "",
    message: "",
  });

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.fullName || !formData.whatsappNumber || !formData.pickupAddress || !formData.deliveryAddress) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 800));

    const message = `
*LIGHT SPEED - Quote Request*

*Name:* ${formData.fullName}
*WhatsApp:* ${formData.whatsappNumber}

*Pickup Address:*
${formData.pickupAddress}

*Delivery Address:*
${formData.deliveryAddress}

*Type of Shipment:* ${formData.shipmentType || "Not specified"}

*Additional Notes:*
${formData.message || "None"}
    `.trim();

    const whatsappNumber = "919566650409";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setIsSubmitting(false);
  };

  return (
    <section id="quote-section" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Request a Quote
            </h2>
            <p className="text-xl text-primary font-semibold">Get in Touch With Us!</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Animation */}
          <motion.div
            className="hidden lg:block w-full max-w-lg mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LottieAnimation
              animationData={logisticsAnimation}
              containerId="logistics-lottie"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Form Card */}
          <motion.div
            ref={formRef}
            className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {/* Full Name */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
              >
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full Name <span className="text-primary">*</span>
                </label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-base md:text-sm p-3 md:p-2"

                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* WhatsApp Number */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="whatsappNumber" className="text-sm font-medium text-gray-700">
                  WhatsApp Number <span className="text-primary">*</span>
                </label>
                <Input
                  id="whatsappNumber"
                  type="tel"
                  required
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className="bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-base md:text-sm p-3 md:p-2"
                  placeholder="+91 95666 50409"
                />
              </motion.div>

              {/* Pickup Address */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <AddressInput
                  id="pickupAddress"
                  label="Pickup Address"
                  required
                  value={formData.pickupAddress}
                  onChange={(value) => setFormData({ ...formData, pickupAddress: value })}
                  placeholder="Enter complete pickup address (Start typing for suggestions)"
                />
              </motion.div>

              {/* Delivery Address */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <AddressInput
                  id="deliveryAddress"
                  label="Delivery Address"
                  required
                  value={formData.deliveryAddress}
                  onChange={(value) => setFormData({ ...formData, deliveryAddress: value })}
                  placeholder="Enter complete delivery address (Start typing for suggestions)"
                />
              </motion.div>

              {/* Type of Shipment */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="shipmentType" className="text-sm font-medium text-gray-700">
                  Type of Shipment
                </label>
                <Select value={formData.shipmentType} onValueChange={(value) => setFormData({ ...formData, shipmentType: value })}>
                  <SelectTrigger className="bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                    <SelectValue placeholder="Select shipment type" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="courier">Courier</SelectItem>
                    <SelectItem value="freight">Freight</SelectItem>
                    <SelectItem value="warehousing">Warehousing</SelectItem>
                    <SelectItem value="customized">Customized Solution</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Message / Notes */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message / Notes
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[100px] text-base md:text-sm p-3 md:p-2"

                  placeholder="Any additional information..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="btn-primary w-full text-lg group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Quote
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
