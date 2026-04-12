import Link from "next/link";
import ArrowUpRight from "public/icons/arrow-up-right.svg";
import type { ArticleCTAProps } from "./articleCTA.type";

const whatsappHref =
  "https://wa.me/5511989400334?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20TLM%20e%20quero%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20para%20defender%20meus%20interesses%20e%20tomar%20decis%C3%B5es%20seguras.";

export default function ArticleCTA({
  title,
  description,
  ctaLabel = "Falar sobre meu caso",
  href = whatsappHref,
}: ArticleCTAProps) {
  return (
    <aside className="bg-primary-dark max-xs:p-4 xs:p-6 rounded-sm grid items-center justify-items-center">
      <h2 className="text-xl md:text-2xl font-medium text-secondary text-center mb-4">
        {title}
      </h2>

      <p className="text-base md:text-xl text-secondary text-center mb-6">
        {description}
      </p>

      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary text-primary text-xl md:text-2xl font-medium rounded-sm px-6 py-4 flex items-center gap-3 transition-default hover:bg-secondary-75 active:bg-secondary-50 active:scale-90"
        aria-label={`${ctaLabel} no WhatsApp`}
      >
        {ctaLabel}
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </aside>
  );
}
