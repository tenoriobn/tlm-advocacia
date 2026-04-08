import SectionEyebrow from "src/components/SectionEyebrow";
import SectionSubtitle from "src/components/SectionSubtitle";
import AdviceCards from "./AdviceCards";

export default function LegalAdvice() {
  return (
    <section
      id="legal-advice"
      aria-labelledby="legal-advice-title"
      className="bg-secondary w-full max-xs:px-4 max-md:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-[1920px] w-full pt-25 md:pt-32 m-auto">
        <SectionEyebrow
          text="Orientações jurídicas"
          className="text-primary-75 justify-center"
        />

        <SectionSubtitle
          id="legal-advice-title"
          className="text-primary text-center mb-12"
        >
          Entenda seus direitos <br className="hidden md:block" /> em situações
          comuns
        </SectionSubtitle>

        <AdviceCards />
      </div>
    </section>
  );
}
