import type { SectionEyebrowProps } from "./sectionEyebrow.type";

export default function SectionEyebrow({
  text,
  className = "",
  lineClassName = "",
}: SectionEyebrowProps) {
  return (
    <p
      className={`text-xl md:text-2xl uppercase flex items-center max-lg:justify-center gap-3 md:gap-6 mb-6 ${className}`}
    >
      <span
        className={`block bg-current w-8 md:w-16 h-0.75 ${lineClassName}`}
      />
      {text}
    </p>
  );
}
