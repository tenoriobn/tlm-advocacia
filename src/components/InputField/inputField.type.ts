import type { InputHTMLAttributes } from "react";

type BaseProps = {
  icon: React.ReactNode;
  error?: string;
};

export type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
