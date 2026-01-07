import Hero from "@/components/Hero";
import ServiceTabs from "@/components/ServiceTabs";
import QuoteForm from "@/components/QuoteForm";
import ThingsWeDeliver from "@/components/ThingsWeDeliver";
import GlobalReach from "@/components/GlobalReach";
import ServiceHighlights from "@/components/ServiceHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import Testimonials from "@/components/Testimonials";
import CursorFollower from "@/components/CursorFollower";

import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">

      <CursorFollower />
      <StickyHeader />
      <Hero />
      <ServiceTabs />
      <QuoteForm />
      <ThingsWeDeliver />
      <GlobalReach />
      <ServiceHighlights />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <Partners />
      <ContactSection />
      <PrivacyPolicy />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
