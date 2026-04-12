import Pillars from "./Pillars";
import Showcase from "./Showcase";
import Description from "./Description";
import SectionEyebrow from "src/components/SectionEyebrow";
import SectionSubtitle from "src/components/SectionSubtitle";
import "./about-tlm-advocacia.css";

export default function AboutTLMAdvocacia() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-tlm-title"
      className="about--diagonal-bg w-full max-xs:px-4 max-md:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-480 w-full pt-25 md:pt-32 m-auto">
        <header>
          <SectionEyebrow
            text="Sobre a PSM Advocacia"
            className="text-secondary-75"
          />

          <div className="mb-12 lg:flex lg:gap-18">
            <SectionSubtitle
              id="about-tlm-title"
              className="text-secondary max-lg:mb-12 lg:flex-[1.25]"
            >
              Assessoria jurídica <br className="hidden xs:max-lg:block" />{" "}
              prática <br className="hidden 3xl:block" /> para quem{" "}
              <br className="hidden xs:max-lg:block" /> precisa resolver
            </SectionSubtitle>

            <Description />
          </div>
        </header>

        <Showcase />

        <Pillars />
      </div>
    </section>
  );
}
