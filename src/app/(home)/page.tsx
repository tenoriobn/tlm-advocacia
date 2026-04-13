"use client";
import Header from "src/components/Header";
import HeroSection from "./HeroSection";
import AboutTLMAdvocacia from "./AboutTLMAdvocacia";
import AboutLawyer from "./AboutLawyer";
import ServicesSection from "./ServicesSection";
import LegalAdvice from "./LegalAdvice";
import Testimonials from "./Testimonials";
import Contacts from "./Contacts";
import Footer from "src/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main
        id="conteudo-principal"
        role="main"
        className="flex flex-1 flex-col items-center justify-between w-full"
      >
        <div id="header-sentinel" className="h-px w-full" />
        <HeroSection />
        <AboutTLMAdvocacia />
        <AboutLawyer />
        <ServicesSection />
        <LegalAdvice />
        <Testimonials />
        <Contacts />
      </main>

      <Footer />
    </>
  );
}
