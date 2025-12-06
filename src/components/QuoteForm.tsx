import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section id="quote-section" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Request a Quote
            </h2>
            <p className="text-xl text-primary font-semibold">Get in Touch With Us!</p>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            ref={formRef}
            className="card-dark bg-card/80 backdrop-blur-sm"
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
                <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                  Full Name <span className="text-primary">*</span>
                </label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
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
                <label htmlFor="whatsappNumber" className="text-sm font-medium text-foreground">
                  WhatsApp Number <span className="text-primary">*</span>
                </label>
                <Input
                  id="whatsappNumber"
                  type="tel"
                  required
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  className="bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
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
                <label htmlFor="pickupAddress" className="text-sm font-medium text-foreground">
                  Pickup Address <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="pickupAddress"
                  required
                  value={formData.pickupAddress}
                  onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                  className="bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[80px]"
                  placeholder="Enter complete pickup address"
                />
              </motion.div>

              {/* Delivery Address */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="deliveryAddress" className="text-sm font-medium text-foreground">
                  Delivery Address <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="deliveryAddress"
                  required
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                  className="bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[80px]"
                  placeholder="Enter complete delivery address"
                />
              </motion.div>

              {/* Type of Shipment */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="shipmentType" className="text-sm font-medium text-foreground">
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
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message / Notes
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[100px]"
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
                        Submit Request
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
