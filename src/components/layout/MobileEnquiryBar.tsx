"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";

/**
 * The Codex bar at the bottom of a phone screen: one line and one action. As on the best mobile
 * sites, it waits until the page's own first-screen action has scrolled away, and steps aside again
 * once the footer (which opens with its own invitation) is on screen, so there is never a second
 * button doing the same job.
 */
export function MobileEnquiryBar() {
  const pathname = usePathname();
  const [shown, setShown] = useState(true);
  const [topic, setTopic] = useState<string | undefined>();

  useEffect(() => {
    // The paid landing page has its own form and sticky action. Keep that single flow intact.
    if (pathname.replace(/\/$/, "") === "/consultation") return;
    const primary = document.querySelector<HTMLElement>("[data-primary-cta][data-enquiry]");
    // On every page (Oct 19); it only steps aside while the footer, with its own invitation, is on screen.
    const targets = Array.from(document.querySelectorAll(".site-footer"));
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        setTopic(primary?.dataset.topic);
        entries.forEach((entry) => (entry.isIntersecting ? onScreen.add(entry.target) : onScreen.delete(entry.target)));
        setShown(onScreen.size === 0);
      },
      { threshold: 0 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname.replace(/\/$/, "") === "/consultation") return null;

  return (
    <aside className={`mobile-enquiry${shown ? " is-shown" : ""}`} aria-label="Enquire" aria-hidden={!shown} inert={!shown}>
      <span className="meb-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="10" r="4" /><path d="M8.5 25a7.5 7.5 0 0 1 15 0" /><circle cx="7" cy="12.5" r="3" /><path d="M2.5 23.5a5 5 0 0 1 6.5-4.7" /><circle cx="25" cy="12.5" r="3" /><path d="M29.5 23.5a5 5 0 0 0-6.5-4.7" /></svg></span>
      <span className="meb-text">
        <strong>Narayani’s team</strong>
        <small>Replies personally</small>
      </span>
      <EnquiryTrigger topic={topic} source="mobile-bar" className="meb-cta">
        <span>Enquire Now</span>
        <span className="meb-go" aria-hidden="true"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6h7M6.5 3l3 3-3 3" /></svg></span>
      </EnquiryTrigger>
    </aside>
  );
}
