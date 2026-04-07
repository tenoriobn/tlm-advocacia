import type { SectionSubtitleProps } from "./sectionSubtitle.type";

export default function SectionSubtitle({
  id,
  className = "",
  children,
}: SectionSubtitleProps) {
  return (
    <h2
      id={id}
      className={`font-playfair text-[clamp(2.25rem,10vw,4.25rem)] font-semibold leading-[112%] max-lg:text-center min-w-0 ${className}`}
    >
      {children}
    </h2>
  );
}
