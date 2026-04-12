import type { ReactNode } from "react";

export type ArticleCardVariant = "yellow" | "blue" | "red" | "green";

export type ArticleCardProps = {
  variant: ArticleCardVariant;
  children: ReactNode;
};
