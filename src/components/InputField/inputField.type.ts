import type { InputHTMLAttributes } from "react";

type InputBaseProps = {
  icon: React.ReactNode;
  error?: string;
  delayClass?: string;
};

export type InputProps = InputBaseProps & InputHTMLAttributes<HTMLInputElement>;
