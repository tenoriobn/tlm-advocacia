import type { Attributes, HTMLAttributes, Ref } from "react";
import { cloneElement, Children } from "react";
import useScrollReveal from "src/hooks/useScrollReveal";
import type { RevealProps } from "./reveal.type";

const Reveal = ({
  children,
  animation = "fade-up",
  delayClass = "delay-0",
  durationClass = "duration-300",
}: RevealProps) => {
  const [ref, isVisible] = useScrollReveal();

  const child = Children.only(children);

  const animationClasses: Record<"fade-up" | "fade-in", string> = {
    "fade-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
  };

  const baseClasses = `transition-all ease-out ${durationClass} ${delayClass} transform`;

  const childProps = child.props as HTMLAttributes<HTMLElement>;

  return cloneElement(child, {
    ref,
    "aria-hidden": !isVisible,
    className:
      `${childProps.className || ""} ${baseClasses} ${animationClasses[animation]}`.trim(),
  } as Attributes & {
    ref: Ref<unknown>;
    className: string;
    "aria-hidden": boolean;
  });
};

export default Reveal;
