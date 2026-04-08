"use client";
import { useState, useRef, useEffect } from "react";
import ArrowIcon from "public/icons/arrow.svg";
import { useClickOutside } from "src/hooks";
import type { CaseTypeOption, DropdownFieldProps } from "./dropdownField.type";

export function DropdownField({
  icon,
  placeholder,
  options,
  onChange,
  error,
  isSubmitting,
  value,
}: DropdownFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<CaseTypeOption | null>(null);
  const dropdownFieldRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: CaseTypeOption) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  useClickOutside(dropdownFieldRef, () => setIsOpen(false));

  useEffect(() => {
    const found = options.find((opt) => opt.value === value);
    setSelected(found || null);
  }, [value]);

  return (
    <div className="grid gap-2">
      <div ref={dropdownFieldRef} className="relative">
        <button
          disabled={isSubmitting}
          type="button"
          onClick={toggle}
          className={`outline-none group w-full flex items-center justify-between gap-3 bg-primary-dark rounded-sm max-xs:p-4 xs:p-6 border transition-default
            ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}
            ${
              error
                ? "border-red-500"
                : isOpen || selected
                  ? "border-secondary-25"
                  : "border-transparent focus-visible:border-secondary-25"
            }
          `}
        >
          <div className="flex items-center gap-3">
            <span
              className={`w-6 h-6 flex items-center justify-center shrink-0 transition-default 
                ${
                  error
                    ? "text-red-500"
                    : isOpen || selected
                      ? "text-secondary"
                      : "text-secondary-50"
                }
              `}
            >
              {icon}
            </span>

            <span
              className={`
              flex-1 text-left text-xl md:text-2xl transition-default max-xs:truncate max-xs:max-w-[188px]
              ${selected || isOpen ? "text-secondary" : "text-secondary-50"}
            `}
            >
              {selected ? selected.label : placeholder}
            </span>
          </div>

          <ArrowIcon
            className={`
            transition-default
            ${isOpen ? "rotate-180 text-secondary" : "text-secondary-50"}
          `}
          />
        </button>

        <ul
          className={`select-none block absolute left-0 right-0 top-[calc(100%+16px)] z-10 bg-primary-dark rounded-sm divide-y divide-secondary-25/15 transition-[max-height,opacity,border-color] duration-300 ease-in-out dropdown-scrollbar border shadow-xl/15
          ${
            isOpen
              ? "max-h-[258px] opacity-100 overflow-y-auto border-secondary-25"
              : "max-h-0 opacity-0 border-transparent overflow-hidden"
          }
        `}
        >
          {options.map((option) => (
            <li
              key={option.value}
              tabIndex={isOpen ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelect(option);
                }
              }}
              onClick={() => handleSelect(option)}
              className={`outline-none px-6 py-4 text-xl md:text-2xl cursor-pointer text-secondary  transition-default focus-visible:border-2  focus-visible:border-secondary-50
              ${option === selected ? "bg-secondary/15" : "hover:bg-secondary/5"}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>

      {error && (
        <span className="text-sm text-red-500 mt-2 block">{error}</span>
      )}
    </div>
  );
}
