import Link from "next/link";
import ChatBubbleIcon from "public/icons/chat-bubble.svg";
import type { CaseCtaLinkProps } from "./caseCtaLink.type";
import Reveal from "src/components/Reveal";

export default function CaseCtaLink({
  className = "",
  href = "https://wa.me/5511989400334?text=Preciso%20de%20orienta%C3%A7%C3%A3o%20para%20conduzir%20um%20caso",
  ariaLabel = "Falar sobre o caso",
  onClick,
  tone = "primary",
}: CaseCtaLinkProps) {
  const toneClasses =
    tone === "secondary"
      ? "bg-secondary text-primary hover:bg-secondary-75 active:bg-secondary-50"
      : "bg-primary text-secondary hover:bg-primary-75 active:bg-primary-50";

  return (
    <Reveal animation="fade-up" delayClass="delay-200">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`items-center justify-center gap-3 max-xs:text-lg text-xl md:text-2xl font-medium rounded-sm max-xs:p-4 xs:px-6 py-4 w-full md:w-max transition-default active:scale-90 ${toneClasses} ${className}`}
        aria-label={ariaLabel}
      >
        <ChatBubbleIcon aria-hidden="true" />
        Falar sobre meu caso
      </Link>
    </Reveal>
  );
}
