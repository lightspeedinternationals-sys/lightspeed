import Hero from "@/components/Hero";
import ServiceTabs from "@/components/ServiceTabs";
import QuoteForm from "@/components/QuoteForm";
import ThingsWeDeliver from "@/components/ThingsWeDeliver";
import ServiceHighlights from "@/components/ServiceHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";
import Testimonials from "@/components/Testimonials";
import CursorFollower from "@/components/CursorFollower";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundAnimation />
      <CursorFollower />
      <StickyHeader />
      <Hero />
      <ServiceTabs />
      <QuoteForm />
      <ThingsWeDeliver />
      <ServiceHighlights />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
