"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavbarProps } from "./navbar.type";
import { MENU_LINKS } from "./menuLinks";
import { useActiveSection } from "src/hooks/useActiveSection";
import { useScrollToSection } from "src/hooks/useScrollToSection";
import Logo from "../Logo";
import CloseIcon from "public/icons/close.svg";

export default function Navbar({ isMenuActive, setIsMenuActive }: NavbarProps) {
  const pathname = usePathname();
  const sectionIds = MENU_LINKS.map((i) => i.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);
  const scrollToSection = useScrollToSection();

  return (
    <>
      <div
        onClick={() => setIsMenuActive(false)}
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity xl:hidden
          ${isMenuActive ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <nav
        id="primary-navigation"
        aria-label="Navegação principal"
        className={`
          hidden 
          xl:flex xl:items-center xl:justify-center
          max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:h-dvh
          max-xl:bg-primary-dark max-xl:z-50
          max-xl:grid max-md:grid-rows-[96px_1fr_96px] md:max-xl:grid-rows-[112px_1fr_112px]
          max-xl:transition-transform max-xl:duration-300
          max-sm:w-full sm:max-xl:w-[320px]
          ${isMenuActive ? "max-xl:translate-x-0" : "max-xl:-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between max-xs:px-4 p-6 md:p-8 z-10 xl:hidden">
          <Logo />

          <button
            onClick={() => setIsMenuActive(false)}
            aria-label="Fechar menu"
            className="size-6"
          >
            <CloseIcon
              aria-hidden="true"
              focusable="false"
              className="cursor-pointer text-secondary transition-default hover:text-secondary-75 active:scale-95"
            />
          </button>
        </div>

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
    </>
  );
}
