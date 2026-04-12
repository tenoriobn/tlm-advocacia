import type { ReactNode } from "react";

export type ArticleHeroProps = {
  eyebrow: string;
  title: string | ReactNode;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};
