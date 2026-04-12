"use client";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileMenuIcon from "public/icons/menu-bars.svg";
import { useHeaderMenu } from "./useHeaderMenu";
import { useRef } from "react";
import { useClickOutside } from "src/hooks";

export default function Header() {
  const { isMenuActive, setIsMenuActive } = useHeaderMenu();
  const headerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(headerRef, () => setIsMenuActive(false));

  return (
    <header className="bg-primary fixed flex justify-center w-full max-xs:px-4 p-6 md:p-8 z-10 lg:px-20">
      <div
        className="max-w-480 flex items-center justify-between w-full gap-6 "
        ref={headerRef}
      >
        <Logo />

        <button
          onClick={() => setIsMenuActive(!isMenuActive)}
          aria-label="Abrir menu"
          className="xl:hidden size-6"
        >
          <MobileMenuIcon
            aria-hidden="true"
            focusable="false"
            className="cursor-pointer text-secondary transition-default hover:text-secondary-75 active:scale-95"
          />
        </button>

        <Navbar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />

        <div aria-hidden="true" className="hidden xl:block invisible">
          <Logo />
        </div>
      </div>
    </header>
  );
}
