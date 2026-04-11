import SectionEyebrow from "src/components/SectionEyebrow";
import SectionSubtitle from "src/components/SectionSubtitle";
import CarouselTestimonials from "./CarouselTestimonials";
import "./testimonials.css";

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-title"
      className="testimonials--diagonal-bg w-full max-xs:px-4 max-md:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-480 w-full pt-25 md:pt-32 m-auto">
        <header className="flex flex-col items-center">
          <SectionEyebrow
            text="Depoimentos"
            className="text-primary-75 justify-center"
          />

          <SectionSubtitle
            id="testimonials-title"
            className="text-primary text-center mb-12"
          >
            Avaliações de nossos <br className="hidden md:block" /> clientes e
            parceiros
          </SectionSubtitle>
        </header>

        <CarouselTestimonials />
      </div>
    </section>
  );
}
