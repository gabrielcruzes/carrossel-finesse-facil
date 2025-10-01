import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Benefits } from "../components/Benefits";
import { ProductShowcase } from "../components/ProductShowcase";
import { Testimonials } from "../components/Testimonials";
import { MentorSection } from "../components/MentorSection";
import { PricingOffer } from "../components/PricingOffer";
import { FAQ } from "../components/FAQ";
import { GuaranteeSection } from "../components/GuaranteeSection";
import { Urgency } from "../components/Urgency";
import { Footer } from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "O Arquivo Secreto do Carrossel Finesse"; // aqui você define o nome
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Benefits />
      <ProductShowcase />
      <Testimonials />
      <MentorSection />
      <PricingOffer />
      <FAQ />
      <GuaranteeSection />
      <Urgency />
      <Footer />
    </div>
  );
};

export default Index;
