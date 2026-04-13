"use client";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileMenuIcon from "public/icons/menu-bars.svg";
import { useHeaderMenu } from "./useHeaderMenu";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "src/hooks";

export default function Header() {
  const { isMenuActive, setIsMenuActive } = useHeaderMenu();
  const [hasShadow, setHasShadow] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(headerRef, () => setIsMenuActive(false));

  useEffect(() => {
    const sentinel = document.getElementById("header-sentinel");
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // só atualiza quando realmente muda → evita re-render desnecessário
        setHasShadow((prev) => {
          const next = !entry.isIntersecting;
          return prev !== next ? next : prev;
        });
      },
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`bg-primary fixed flex justify-center w-full max-xs:px-4 p-6 md:p-8 z-10 lg:px-20 ${hasShadow ? "shadow-xl/15" : ""}`}
    >
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
