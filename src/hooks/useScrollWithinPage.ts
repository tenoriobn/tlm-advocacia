"use client";
import { useCallback } from "react";

const SCROLL_DURATION = 800;
const HEADER_OFFSET = 140;

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

export function useScrollWithinPage() {
  return useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) {
      return;
    }

    const targetY =
      el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    smoothScrollTo(targetY, SCROLL_DURATION);

    window.history.replaceState(null, "", window.location.pathname);
  }, []);
}
