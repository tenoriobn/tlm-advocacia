import type { InputProps } from "./inputField.type";

export function InputField({ icon, error, ...props }: InputProps) {
  return (
    <div className="grid gap-2">
      <label
        className={`
          group flex items-center gap-3 bg-primary-dark rounded-sm 
          max-xs:p-4 xs:p-6 border transition-default
          ${props.disabled ? "cursor-not-allowed" : "cursor-text"}
          ${
            error
              ? "border-red-500"
              : "border-transparent focus-within:border-secondary-25 has-[input:not(:placeholder-shown)]:border-secondary-25"
          }
        `}
      >
        <span
          className={`
            w-6 h-6 flex items-center justify-center shrink-0 transition-default
            ${
              error
                ? "text-red-500"
                : "text-secondary-50 group-has-[input:not(:placeholder-shown)]:text-secondary"
            }
          `}
        >
          {icon}
        </span>

        <input
          {...props}
          disabled={props.disabled}
          className={`
            w-full bg-transparent text-xl md:text-2xl text-secondary placeholder:text-secondary-50 outline-none 
            ${props.disabled ? "cursor-not-allowed" : "cursor-text"}
          `}
        />
      </label>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
