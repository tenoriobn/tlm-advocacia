import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileMenuIcon from "public/icons/menu-bars.svg";
import CloseIcon from "public/icons/close.svg";
import { useHeaderMenu } from "./useHeaderMenu";
import { useRef } from "react";
import { useClickOutside } from "src/hooks";

export default function Header() {
  const { isMenuActive, setIsMenuActive } = useHeaderMenu();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const menuButtonLabel = isMenuActive ? "Fechar menu" : "Abrir menu";
  const iconBaseClass =
    "absolute inset-0 grid place-items-center transition-all duration-300";
  const menuIconStateClass = isMenuActive
    ? "scale-75 rotate-90 opacity-0"
    : "scale-100 rotate-0 opacity-100";
  const closeIconStateClass = isMenuActive
    ? "scale-100 rotate-0 opacity-100"
    : "scale-75 -rotate-90 opacity-0";

  useClickOutside(headerRef, () => setIsMenuActive(false));

  return (
    <header className="bg-primary fixed flex justify-center w-full max-xs:px-4 p-6 md:p-8 z-10 lg:px-20">
      <div
        className="max-w-[1920px] flex items-center justify-between w-full gap-6 "
        ref={headerRef}
      >
        <Logo />

        <button
          type="button"
          aria-label={menuButtonLabel}
          aria-expanded={isMenuActive}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuActive((previous) => !previous)}
          className="xl:hidden relative size-7 cursor-pointer text-secondary transition-default hover:text-secondary-75 active:scale-95"
        >
          <span
            aria-hidden="true"
            className={`${iconBaseClass} ${menuIconStateClass}`}
          >
            <MobileMenuIcon aria-hidden="true" focusable="false" />
          </span>

          <span
            aria-hidden="true"
            className={`${iconBaseClass} ${closeIconStateClass}`}
          >
            <CloseIcon aria-hidden="true" focusable="false" />
          </span>
        </button>

        <Navbar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />

        <div aria-hidden="true" className="hidden xl:block invisible">
          <Logo />
        </div>
      </div>
    </header>
  );
}
