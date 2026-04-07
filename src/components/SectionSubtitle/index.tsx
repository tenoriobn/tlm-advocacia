import type { ReactNode } from "react";

type SectionSubtitleProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function SectionSubtitle({
  id,
  className = "",
  children,
}: SectionSubtitleProps) {
  return (
    <h2
      id={id}
      className={`font-playfair text-[clamp(2.25rem,10vw,4.25rem)] font-semibold leading-[112%] max-lg:text-center max-xl:mb-12 lg:flex-[1.25] min-w-0 ${className}`}
    >
      {children}
    </h2>
  );
}
