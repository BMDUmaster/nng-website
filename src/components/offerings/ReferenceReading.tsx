"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** A single reference region. Deep links open it without requiring an extra tap. */
export function ReferenceReading({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const openTarget = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      const target = id && document.getElementById(id);
      if (target && ref.current?.contains(target)) {
        ref.current.open = true;
        requestAnimationFrame(() => target.scrollIntoView());
      }
    };
    openTarget();
    window.addEventListener("hashchange", openTarget);
    return () => window.removeEventListener("hashchange", openTarget);
  }, []);
  return <details ref={ref} className="service-reference section-wrap" id="reference">
    <summary>Read the background and methods<span>Optional educational detail</span></summary>
    <div className="service-reference-body">{children}</div>
  </details>;
}
