"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Progressive enhancement only: essential content is never hidden or delayed. */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("pdf-export") || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const running = new Set<Animation>();
    const revealTargets = new Set<Element>();
    const illustrations = document.querySelectorAll("[data-draw], .graha-orbit, .backdrop-orbit, .zodiac-wheel-layer");
    // Do not animate the first screen or anything opened for reading. Art and supporting cards
    // below the fold arrive once, without adding a hidden state to the HTML or CSS.
    document.querySelectorAll(".service-banner, .offer-art, .atlas-art, .testimonial, .triad-art, .service-mosaic-card").forEach(el => {
      if (el.getBoundingClientRect().top >= window.innerHeight && !el.closest("details")) revealTargets.add(el);
    });
    const syncPreference = () => {
      root.classList.toggle("motion", !preference.matches);
      if (preference.matches) {
        running.forEach(animation => animation.cancel());
        running.clear();
        illustrations.forEach(el => el.classList.add("is-drawn"));
      }
    };
    syncPreference();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("motion-in-view", entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.add("is-drawn");
        if (entry.isIntersecting && revealTargets.delete(entry.target) && !preference.matches && !root.classList.contains("orbit-paused") && !document.hidden && "animate" in entry.target) {
          const animation = entry.target.animate([
            { opacity: 0.78, transform: "translateY(10px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: 420, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
          running.add(animation);
          animation.onfinish = () => running.delete(animation);
          animation.oncancel = () => running.delete(animation);
        }
      }
    }, { threshold: 0.05 });
    illustrations.forEach(el => observer.observe(el));
    revealTargets.forEach(el => observer.observe(el));
    const visibility = () => {
      root.classList.toggle("motion-suspended", document.hidden);
      if (document.hidden) running.forEach(animation => animation.cancel());
    };
    visibility();
    document.addEventListener("visibilitychange", visibility);
    preference.addEventListener("change", syncPreference);
    return () => {
      observer.disconnect();
      running.forEach(animation => animation.cancel());
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("visibilitychange", visibility);
      root.classList.remove("motion-suspended");
    };
  }, [pathname]);
  return null;
}
