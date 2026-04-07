"use client";
import Header from "src/components/Header";
import HeroSection from "./HeroSection";
import AboutTLMAdvocacia from "./AboutTLMAdvocacia";

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
      </main>
    </>
  );
}
