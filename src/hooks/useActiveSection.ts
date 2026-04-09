"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);
  const activeRef = useRef(active);
  const idsRef = useRef(sectionIds);

  useEffect(() => {
    idsRef.current = sectionIds;
  });

  useEffect(() => {
    const elements = idsRef.current
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) {
      return;
    }

    let rafId: number;

    function update() {
      const closest = elements
        .map((el) => ({ id: el.id, top: el.getBoundingClientRect().top }))
        .filter(({ top }) => top <= 96)
        .at(-1);

      const next = closest?.id ?? idsRef.current[0];

      if (next !== activeRef.current) {
        activeRef.current = next;
        setActive(next);
      }
    }

    function onScroll() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return active;
}
