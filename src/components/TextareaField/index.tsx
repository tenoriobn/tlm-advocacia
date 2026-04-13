import Reveal from "../Reveal";
import type { TextareaProps } from "./textarea.type";

export function TextareaField({
  icon,
  error,
  delayClass,
  ...props
}: TextareaProps) {
  return (
    <Reveal animation="fade-up" delayClass={delayClass}>
      <div className="grid gap-2">
        <label
          className={`
          group flex items-start gap-3 bg-primary-dark rounded-sm 
          max-xs:p-4 xs:p-6 border transition-default
          ${props.disabled ? "cursor-not-allowed" : "cursor-text"}
          ${
            error
              ? "border-red-500"
              : "border-transparent focus-within:border-secondary-25 has-[textarea:not(:placeholder-shown)]:border-secondary-25"
          }
        `}
        >
          <span
            className={`
            w-6 h-6 flex items-center justify-center shrink-0 mt-1 transition-default
            ${error ? "text-red-500" : "text-secondary-50 group-has-[textarea:not(:placeholder-shown)]:text-secondary"}
          `}
          >
            {icon}
          </span>

          <textarea
            {...props}
            className={`
            w-full bg-transparent text-xl md:text-2xl text-secondary placeholder:text-secondary-50 outline-none resize-none min-h-43 ${props.disabled ? "cursor-not-allowed" : "cursor-text"}
          `}
          />
        </label>

        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    </Reveal>
  );
}
