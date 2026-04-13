import SectionEyebrow from "src/components/SectionEyebrow";
import SectionSubtitle from "src/components/SectionSubtitle";
import Description from "./Description";
import CaseCtaLink from "./CaseCtaLink";
import Accordion from "./Accordion";

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="tlm-services-title"
      aria-describedby="tlm-services-description"
      className="bg-secondary w-full max-xs:px-4 max-md:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-480 w-full pt-25 md:pt-32 m-auto grid justify-items-center lg:grid-cols-2 lg:gap-18">
        <div className="flex flex-col max-lg:items-center">
          <SectionEyebrow text="Serviços" className="text-primary-75" />

          <SectionSubtitle
            id="tlm-services-title"
            className="text-primary mb-12 max-lg:text-center"
          >
            Atuação jurídica <br /> em diversas áreas
          </SectionSubtitle>

          <Description />

          <CaseCtaLink
            href="https://wa.me/5511989400334?text=Ol%C3%A1%2C%20estou%20com%20um%20problema%20jur%C3%ADdico%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o%20para%20agir%20com%20seguran%C3%A7a%20e%20evitar%20preju%C3%ADzos."
            className="hidden max-sm:w-full sm:w-max lg:flex"
          />
        </div>

        <Accordion />

        <CaseCtaLink
          href="https://wa.me/5511989400334?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20TLM%20e%20quero%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20para%20defender%20meus%20interesses%20e%20tomar%20decis%C3%B5es%20seguras."
          className="flex max-sm:w-full sm:w-max lg:hidden mt-12"
        />
      </div>
    </section>
  );
}
