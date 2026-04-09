import Link from "next/link";
import type { NavbarProps } from "./navbar.type";

const MENU_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Orientações", href: "#orientacoes" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contatos", href: "#contatos" },
] as const;

export default function Navbar({ isMenuActive }: NavbarProps) {
  const activeHref = MENU_LINKS[0].href;

  return (
    <nav
      id="primary-navigation"
      aria-label="Navegação principal"
      className={`
        max-xl:bg-primary-dark max-xl:absolute max-xs:right-4 max-md:right-6 md:right-8 lg:max-xl:right-20 max-xl:top-20 max-xl:w-full max-xl:max-w-52.5 max-xl:rounded-sm xl:block
        max-xl:overflow-hidden max-xl:transition-[min-height,max-height] max-xl:duration-300 max-xl:ease-out
        xl:min-h-0 xl:max-h-none xl:overflow-visible xl:pointer-events-auto
        ${isMenuActive ? "max-md:min-h-84 md:max-xl:min-h-90 max-xl:h-full max-xl:shadow-xl" : "max-xl:min-h-0 max-xl:max-h-0"}
      `}
    >
      <ul className="flex flex-wrap items-center justify-center gap-6 max-xl:flex-col max-xs:p-4 xs:max-xl:p-6">
        {MENU_LINKS.map(({ label, href }) => {
          const isActive = activeHref === href;

          return (
            <li key={href}>
              <Link
                href={href}
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
