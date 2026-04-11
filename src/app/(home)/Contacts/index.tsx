"use client";
import SectionEyebrow from "src/components/SectionEyebrow";
import SectionSubtitle from "src/components/SectionSubtitle";
import Description from "./Description";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Map from "./Map";

export default function Contacts() {
  return (
    <section
      id="contatos"
      aria-labelledby="contacts-title"
      className="bg- bg-primary w-full max-xs:px-4 max-md:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-480 w-full py-25 md:py-32 m-auto">
        <header>
          <SectionEyebrow text="Contatos" className="text-secondary-75" />

          <div className="mb-12 lg:flex lg:gap-18">
            <SectionSubtitle
              id="contacts-title"
              className="text-secondary max-lg:mb-12  w-full"
            >
              Fale com um <br /> advogado agora
            </SectionSubtitle>

            <Description />
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-18">
          <ContactInfo />
          <ContactForm />
        </div>

        <Map />
      </div>
    </section>
  );
}
