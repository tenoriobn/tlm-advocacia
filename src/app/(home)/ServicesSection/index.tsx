import SectionEyebrow from "src/components/SectionEyebrow";
import SectionSubtitle from "src/components/SectionSubtitle";
import Description from "./Description";
import Accordion from "./Accordion";
import CaseCtaLink from "./CaseCtaLink";

export default function ServicesSection() {
  return (
    <section
      id="tlm-services"
      aria-labelledby="tlm-services-title"
      aria-describedby="tlm-services-description"
      className="bg-secondary w-full max-xs:px-4 max-md:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-[1920px] w-full pt-25 md:pt-32 m-auto grid justify-items-center lg:grid-cols-2 lg:gap-18">
        <div className="flex flex-col max-lg:items-center">
          <SectionEyebrow text="Serviços" className="text-primary-75" />

          <SectionSubtitle
            id="tlm-services-title"
            className="text-primary mb-12 max-lg:text-center"
          >
            Atuação jurídica <br /> em diversas áreas
          </SectionSubtitle>

          <Description />

          <CaseCtaLink className="hidden lg:flex" />
        </div>

        <Accordion />

        <CaseCtaLink className="flex lg:hidden mt-12" />
      </div>
    </section>
  );
}
