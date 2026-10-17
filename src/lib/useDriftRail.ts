"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A row of cards rendered twice. On wide screens with a pointer it drifts smoothly and loops (the copy closes the
 * loop) and rests while the pointer is over it; on phones it is swiped and snaps. Reports which card is in front.
 */
export function useDriftRail(count: number, speed = 0.04) {
  const rail = useRef<HTMLUListElement>(null);
  const hover = useRef(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const wide = () => window.matchMedia("(min-width: 901px)").matches;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const anchor = wide() ? el.scrollLeft : el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let dist = Infinity;
      cards.forEach((card, i) => {
        const d = Math.abs((wide() ? card.offsetLeft - el.offsetLeft : card.offsetLeft - el.offsetLeft + card.offsetWidth / 2) - anchor);
        if (d < dist) {
          dist = d;
          best = i;
        }
      });
      setActive(best % count);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });

    let frame = 0;
    let last = 0;
    let carry = 0;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.15 });
    observer.observe(el);
    const drift = window.matchMedia("(hover: hover)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = (time: number) => {
      const dt = last ? Math.min(time - last, 50) : 16;
      last = time;
      if (drift && wide() && visible && !hover.current && !document.hidden && !document.querySelector("dialog[open]")) {
        carry += dt * speed;
        const whole = Math.floor(carry);
        if (whole) {
          el.scrollLeft += whole;
          carry -= whole;
        }
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      el.removeEventListener("scroll", onScroll);
    };
  }, [count, speed]);

  const goTo = (i: number) => {
    const el = rail.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    const left = window.matchMedia("(min-width: 901px)").matches ? card.offsetLeft - el.offsetLeft : card.offsetLeft - el.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
  };
  const step = (dir: number) => {
    const el = rail.current;
    if (!el) return;
    if (window.matchMedia("(min-width: 901px)").matches) {
      const card = el.firstElementChild as HTMLElement | null;
      const w = (card?.offsetWidth ?? 300) + 20;
      if (dir < 0 && el.scrollLeft < w) el.scrollLeft += el.scrollWidth / 2;
      el.scrollBy({ left: dir * w, behavior: "smooth" });
    } else goTo(Math.max(0, Math.min(count - 1, active + dir)));
  };
  const handlers = { onMouseEnter: () => (hover.current = true), onMouseLeave: () => (hover.current = false) };
  return { rail, active, goTo, step, handlers };
}
