import Link from "next/link";
import LinkedinMinimalistIcon from "public/icons/linkedin-minimalist.svg";
import Reveal from "src/components/Reveal";

export default function LinkedinCta() {
  return (
    <Reveal animation="fade-up" delayClass="xl:delay-300">
      <Link
        href="https://www.linkedin.com/in/bruno-tenorio/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-secondary text-xl md:text-2xl font-medium rounded-sm px-6 py-4 flex items-center justify-center gap-3 max-sm:w-full sm:max-w-max transition-default hover:bg-primary-75 active:bg-primary-50 active:scale-90"
        aria-label="Visitar perfil do advogado no LinkedIn"
      >
        <LinkedinMinimalistIcon aria-hidden="true" focusable="false" />
        <span>Perfil no LinkedIn</span>
      </Link>
    </Reveal>
  );
}
