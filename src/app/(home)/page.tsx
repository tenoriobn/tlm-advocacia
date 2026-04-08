"use client";
import Header from "src/components/Header";
import HeroSection from "./HeroSection";
import AboutTLMAdvocacia from "./AboutTLMAdvocacia";
import AboutLawyer from "./AboutLawyer";
import ServicesSection from "./ServicesSection";
import LegalAdvice from "./LegalAdvice";
import Testimonials from "./Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />

      <main
        id="conteudo-principal"
        role="main"
        className="flex flex-1 flex-col items-center justify-between w-full"
      >
        <HeroSection />
        <AboutTLMAdvocacia />
        <AboutLawyer />
        <ServicesSection />
        <LegalAdvice />
        <Testimonials />
      </main>
    </>
  );
}
