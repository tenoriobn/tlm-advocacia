import Reveal from "src/components/Reveal";
import type { ArticleSectionProps } from "./articleSection.type";

export default function ArticleSection({
  id,
  title,
  children,
}: ArticleSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <Reveal animation="fade-up" delayClass="delay-100">
        <header className="py-6 border-y border-primary-25 mb-6">
          <h2
            id={`${id}-title`}
            className="font-playfair font-semibold text-xl md:text-2xl text-primary"
          >
            {title}
          </h2>
        </header>
      </Reveal>

      {children}
    </section>
  );
}
