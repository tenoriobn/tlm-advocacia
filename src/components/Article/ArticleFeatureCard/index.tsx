import type { ArticleFeatureCardProps } from "./articleFeatureCardProps.type";

export default function ArticleFeatureCard({
  eyebrow,
  title,
  description,
}: ArticleFeatureCardProps) {
  return (
    <div className="grid gap-3 border-l-3 border-gray bg-gray-light max-xs:p-4 xs:p-6 rounded-sm">
      <p className="text-red text-sm font-medium uppercase">{eyebrow}</p>

      <h3 className="text-gray text-lg md:text-xl font-semibold">{title}</h3>

      <p className="text-gray text-lg md:text-xl">{description}</p>
    </div>
  );
}
