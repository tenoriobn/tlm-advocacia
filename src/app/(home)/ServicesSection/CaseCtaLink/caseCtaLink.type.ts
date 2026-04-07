import type { MouseEventHandler } from "react";

export type CaseCtaLinkProps = {
  className?: string;
  href?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  tone?: "primary" | "secondary";
};
