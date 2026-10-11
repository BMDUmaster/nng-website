"use client";

import { Children, useEffect, useRef } from "react";

/**
 * A row that drifts slowly and loops (its items are drawn twice), for photographs and social posts. A pointer,
 * focus or touch on it holds it still; it only moves while on screen, and not at all with reduced motion.
 * Arrows scroll it by one item.
 */
export function LoopRail({ children, label, className = "", speed = 0.03 }: { children: React.ReactNode; label: string; className?: string; speed?: number }) {
  const rail = useRef<HTMLUListElement>(null);
  const held = useRef(false);
  const items = Children.toArray(children);

  useEffect(() => {
    const el = rail.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let last = 0;
    let carry = 0;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.15 });
    observer.observe(el);
    const step = (time: number) => {
      const dt = last ? Math.min(time - last, 64) : 16;
      last = time;
      if (visible && !held.current && !document.hidden && !document.querySelector("dialog[open]")) {
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
    };
  }, [speed]);

  const scroll = (dir: number) => {
    const el = rail.current;
    const item = el?.firstElementChild as HTMLElement | null;
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0");
    if (dir < 0 && el.scrollLeft < item.offsetWidth) el.scrollLeft += el.scrollWidth / 2;
    el.scrollBy({ left: dir * (item.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div className={`loop ${className}`}>
      <ul
        className="loop-rail"
        ref={rail}
        aria-label={label}
        onMouseEnter={() => (held.current = true)}
        onMouseLeave={() => (held.current = false)}
        onFocus={() => (held.current = true)}
        onBlur={() => (held.current = false)}
        onTouchStart={() => (held.current = true)}
        onTouchEnd={() => window.setTimeout(() => (held.current = false), 2500)}
      >
        {items.map((item, i) => (
          <li key={`a${i}`} className="loop-item">
            {item}
          </li>
        ))}
        {items.map((item, i) => (
          <li key={`b${i}`} className="loop-item" aria-hidden="true" inert>
            {item}
          </li>
        ))}
      </ul>
      <div className="loop-arrows">
        <button type="button" className="loop-arrow" onClick={() => scroll(-1)} aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5" /></svg>
        </button>
        <button type="button" className="loop-arrow" onClick={() => scroll(1)} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5" /></svg>
        </button>
      </div>
    </div>
  );
}
