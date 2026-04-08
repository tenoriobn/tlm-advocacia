import Link from "next/link";
import LinkedinMinimalistIcon from "public/icons/linkedin-minimalist.svg";

export default function LinkedinCta() {
  return (
    <Link
      href="https://www.linkedin.com/in/thiago-lopes-martinez-37844638/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary text-secondary text-xl md:text-2xl font-medium rounded-sm px-6 py-4 flex items-center justify-center gap-3 max-w-max transition-default hover:bg-primary-75 active:bg-primary-50 active:scale-90"
      aria-label="Visitar perfil do advogado no LinkedIn"
    >
      <LinkedinMinimalistIcon aria-hidden="true" focusable="false" />
      <span>Perfil no LinkedIn</span>
    </Link>
  );
}
