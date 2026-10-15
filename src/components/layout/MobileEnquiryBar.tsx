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
  const [shown, setShown] = useState(false);
  const [topic, setTopic] = useState<string | undefined>();

  useEffect(() => {
    // The paid landing page has its own form and sticky action. Keep that single flow intact.
    if (pathname.replace(/\/$/, "") === "/consultation" || pathname.startsWith("/shop")) return;
    const primary = document.querySelector<HTMLElement>("[data-primary-cta][data-enquiry]");
    // A visible in-page primary action (or the homepage hero) already does this job. Avoid competing gold buttons.
    const targets = Array.from(document.querySelectorAll("[data-primary-cta], a.button[data-enquiry], .site-footer, .hx")).filter(target => !target.closest(".mobile-enquiry"));
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

  if (pathname.replace(/\/$/, "") === "/consultation" || pathname.startsWith("/shop")) return null;

  return (
    <aside className={`mobile-enquiry${shown ? " is-shown" : ""}`} aria-label="Enquire" aria-hidden={!shown} inert={!shown}>
      <span>
        <strong>Narayani’s team</strong>
      </span>
      <EnquiryTrigger topic={topic} source="mobile-bar">Enquire</EnquiryTrigger>
    </aside>
  );
}
