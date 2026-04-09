import { useState, useRef } from "react";
import ArrowIcon from "public/icons/arrow.svg";
import { useSmoothCenterScroll } from "./useSmoothCenterScroll";
import CaseCtaLink from "../CaseCtaLink";
import { SERVICES } from "./accordionServices";

export default function Accordion() {
  const [openServiceId, setOpenServiceId] = useState<number>(SERVICES[0].id);

  const itemRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  useSmoothCenterScroll(openServiceId, itemRefs, 300);

  const toggleItem = (serviceId: number) => {
    setOpenServiceId((currentId) => (currentId === serviceId ? -1 : serviceId));
  };

  return (
    <ul className="w-full">
      {SERVICES.map(({ id, Icon, title, description, whatsappMessage }) => {
        const isOpen = openServiceId === id;
        const buttonId = `service-accordion-button-${id}`;
        const panelId = `service-accordion-panel-${id}`;
        const whatsappHref = `https://wa.me/5511999403955?text=${encodeURIComponent(whatsappMessage)}`;

        return (
          <li
            key={id}
            className={`
              relative border-b border-primary-25 last:border-b-0 
              ${isOpen && "bg-primary rounded-sm"}
            `}
          >
            <h3>
              <button
                ref={(el) => {
                  itemRefs.current[id] = el;
                }}
                id={buttonId}
                type="button"
                onClick={() => toggleItem(id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="absolute inset-0 w-full h-full z-10 cursor-pointer pointer-events-none focus:pointer-events-auto"
              >
                <span className="sr-only">{title}</span>
              </button>
            </h3>

            <div
              role="presentation"
              onClick={() => toggleItem(id)}
              className="relative z-0 max-xs:p-4 xs:p-6 cursor-pointer"
            >
              <div
                className={`
                  w-full flex items-center justify-between gap-3 transition-colors duration-300
                  ${isOpen ? "text-secondary" : "text-primary-75"}
                `}
              >
                <span className="flex items-center gap-3">
                  <Icon aria-hidden="true" />
                  <span className="text-xl md:text-2xl text-left font-medium">
                    {title}
                  </span>
                </span>

                <ArrowIcon
                  aria-hidden="true"
                  className={`
                    shrink-0 transition-transform duration-300 ease-out 
                    ${isOpen ? "rotate-180" : "rotate-0"}
                  `}
                />
              </div>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`
                  grid transition-all duration-300 ease-in-out 
                  ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                `}
              >
                <div className="overflow-hidden">
                  <p className="text-secondary-75 text-lg md:text-xl text-left max-xs:my-4 xs:my-6">
                    {description}
                  </p>

                  <CaseCtaLink
                    href={whatsappHref}
                    tone="secondary"
                    ariaLabel={`Falar sobre o caso de ${title}`}
                    className="flex relative z-20 pointer-events-auto"
                    onClick={(event) => event.stopPropagation()}
                  />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
