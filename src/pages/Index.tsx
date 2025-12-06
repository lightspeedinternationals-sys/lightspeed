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

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <Hero />
      <ServiceTabs />
      <QuoteForm />
      <ThingsWeDeliver />
      <ServiceHighlights />
      <WhyChooseUs />
      <AboutUs />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
