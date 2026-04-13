import Reveal from "src/components/Reveal";
import type { ArticleFeatureCardProps } from "./articleFeatureCardProps.type";

export default function ArticleFeatureCard({
  eyebrow,
  title,
  description,
}: ArticleFeatureCardProps) {
  return (
    <Reveal animation="fade-up" delayClass="delay-250">
      <div className="grid grid-rows-subgrid row-span-3 gap-3 border-l-3 border-gray bg-gray-light max-xs:p-4 xs:p-6 rounded-sm">
        <p className="text-red text-sm font-medium uppercase">{eyebrow}</p>

        <h3 className="text-gray text-lg md:text-xl font-semibold">{title}</h3>

        <p className="text-gray text-lg md:text-xl">{description}</p>
      </div>
    </Reveal>
  );
}
