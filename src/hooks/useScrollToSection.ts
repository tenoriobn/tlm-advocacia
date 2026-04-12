"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const SCROLL_DURATION = 800;
const HEADER_OFFSET = 80;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) {
      startTime = timestamp;
    }
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function useScrollToSection() {
  const pathname = usePathname();
  const router = useRouter();

  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();

      if (pathname !== "/") {
        router.push(`/?section=${sectionId}`);

        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (!el) {
            return;
          }

          const targetY =
            el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

          smoothScrollTo(targetY, SCROLL_DURATION);
        }, 100);

        return;
      }

      const el = document.getElementById(sectionId);
      if (!el) {
        return;
      }

      const targetY =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      smoothScrollTo(targetY, SCROLL_DURATION);
      window.history.replaceState(null, "", "/");
    },
    [pathname, router],
  );
}
