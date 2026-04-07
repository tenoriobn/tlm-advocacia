import SectionEyebrow from "src/components/SectionEyebrow";
import SectionSubtitle from "src/components/SectionSubtitle";
import ProfileImage from "./ProfileImage";
import Description from "./Description";
import LinkedinCta from "./LinkedinCta";

export default function AboutLawyer() {
  return (
    <section
      id="about-lawyer"
      aria-labelledby="about-lawyer-title"
      className="bg-secondary w-full max-xs:px-4 max-md:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-[1920px] w-full pt-25 md:pt-32 m-auto xl:grid xl:grid-cols-[minmax(320px,1fr)_minmax(0,1fr)] xl:gap-18 xl:items-stretch">
        <ProfileImage />

        <div className="flex flex-col max-xl:items-center">
          <SectionEyebrow
            text="SOBRE THIAGO L. MARTINEZ"
            className="text-primary-75"
          />

          <SectionSubtitle
            id="about-tlm-title"
            className="text-primary mb-12 max-xl:text-center"
          >
            Experiência para <br /> decisões seguras
          </SectionSubtitle>

          <ProfileImage mobile />

          <Description />

          <LinkedinCta />
        </div>
      </div>
    </section>
  );
}
