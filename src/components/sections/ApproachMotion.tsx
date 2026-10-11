"use client";

import { useEffect } from "react";

/** Marks the approach steps as seen the first time they scroll into view, so their icons draw in once. */
export function ApproachMotion() {
  useEffect(() => {
    const list = document.querySelector<HTMLElement>("[data-draw-steps]");
    if (!list) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        list.classList.add("is-seen");
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(list);
    return () => observer.disconnect();
  }, []);
  return null;
}
