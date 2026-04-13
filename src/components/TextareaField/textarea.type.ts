import type { TextareaHTMLAttributes } from "react";

type BaseProps = {
  icon: React.ReactNode;
  error?: string;
  delayClass?: string;
};

export type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
