import type { ReactNode } from "react";

export type ArticleCTAProps = {
  title: string | ReactNode;
  description: ReactNode;
  ctaLabel?: string;
  href?: string;
};
