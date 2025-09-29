import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Testimonials } from "@/components/Testimonials";
import { MentorSection } from "@/components/MentorSection";
import { PricingOffer } from "@/components/PricingOffer";
import { FAQ } from "@/components/FAQ";
import { Urgency } from "@/components/Urgency";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <ProductShowcase />
      <Testimonials />
      <MentorSection />
      <PricingOffer />
      <FAQ />
      <Urgency />
      <Footer />
    </div>
  );
};

export default Index;
