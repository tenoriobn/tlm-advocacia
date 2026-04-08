import type { TextareaHTMLAttributes } from "react";

type BaseProps = {
  icon: React.ReactNode;
  error?: string;
};

export type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;
