"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeReduced(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const reducedSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}
const hiddenSnapshot = () => document.hidden;
const staticSnapshot = () => true;

/** Static before hydration; observes only this figure, never hides its content. */
export function useIllustrationMotion() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribeReduced, reducedSnapshot, staticSnapshot);
  const hidden = useSyncExternalStore(subscribeVisibility, hiddenSnapshot, staticSnapshot);
  useEffect(() => {
    if (!ref.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, paused, reduced, running: inView && !paused && !reduced && !hidden, toggle: () => setPaused(value => !value) };
}
