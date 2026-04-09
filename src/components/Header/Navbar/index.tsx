"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavbarProps } from "./navbar.type";
import { MENU_LINKS } from "./menuLinks";
import { useActiveSection } from "src/hooks/useActiveSection";
import { useScrollToSection } from "src/hooks/useScrollToSection";

export default function Navbar({ isMenuActive, setIsMenuActive }: NavbarProps) {
  const pathname = usePathname();
  const sectionIds = MENU_LINKS.map((i) => i.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);
  const scrollToSection = useScrollToSection();

  return (
    <nav
      id="primary-navigation"
      aria-label="Navegação principal"
      className={`
        max-xl:bg-primary-dark max-xl:absolute max-xs:right-4 max-md:right-6 md:right-8 lg:max-xl:right-20 max-xl:top-20 max-xl:w-full max-xl:max-w-52.5 max-xl:rounded-sm xl:block
        max-xl:overflow-hidden max-xl:transition-[min-height,max-height] max-xl:duration-300 max-xl:ease-out
        xl:min-h-0 xl:max-h-none xl:overflow-visible xl:pointer-events-auto
        ${
          isMenuActive
            ? "max-md:min-h-84 md:max-xl:min-h-90 max-xl:h-full max-xl:shadow-xl"
            : "max-xl:min-h-0 max-xl:max-h-0"
        }
      `}
    >
      <ul className="flex flex-wrap items-center justify-center gap-6 max-xl:flex-col max-xs:p-4 xs:max-xl:p-6">
        {MENU_LINKS.map(({ label, href }) => {
          const sectionId = href.replace("#", "");
          const isActive =
            pathname === "/" ? activeSection === sectionId : false;

          return (
            <li key={href}>
              <Link
                href={pathname === "/" ? href : `/?section=${sectionId}`}
                onClick={(e) => {
                  scrollToSection(e, sectionId);
                  setIsMenuActive(false);
                }}
                aria-current={isActive ? "page" : undefined}
                className={`inline-block text-xl md:text-2xl font-normal transition-default ${
                  isActive
                    ? "text-secondary"
                    : "text-secondary-50 hover:text-secondary-75 active:scale-90"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
