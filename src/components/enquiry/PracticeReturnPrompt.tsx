"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EnquiryTrigger } from "./EnquiryTrigger";
import { asset } from "@/lib/assets";
import { EVENTS, track } from "@/lib/analytics";

const SESSION_KEY = "nng-practice-prompt-seen";
const COOLDOWN_KEY = "nng-practice-prompt-until";
const COOLDOWN = 7 * 24 * 60 * 60 * 1000;
type Mode = "desktop" | "mobile";

/** Mounted only on the homepage, program and Brain Training hub. No navigation interception. */
export function PracticeReturnPrompt() {
  const [mode, setMode] = useState<Mode | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const mobile = useRef<HTMLElement>(null);
  const seen = useRef(false);

  const dismiss = useCallback((reason: string) => {
    if (!mode) return;
    const restoreMobileFocus = mobile.current?.contains(document.activeElement);
    try { localStorage.setItem(COOLDOWN_KEY, String(Date.now() + COOLDOWN)); } catch { /* Storage is optional. */ }
    track(EVENTS.promptDismiss, { source: "program-return-prompt", format: mode, reason });
    dialog.current?.close();
    setMode(null);
    if (restoreMobileFocus) document.querySelector<HTMLElement>("[data-primary-cta][data-enquiry]")?.focus({ preventScroll: true });
  }, [mode]);

  useEffect(() => {
    dialog.current?.setAttribute("data-prompt-ready", "true");
    try {
      if (sessionStorage.getItem(SESSION_KEY) || Number(localStorage.getItem(COOLDOWN_KEY)) > Date.now()) seen.current = true;
    } catch { /* In-memory capping still works when browser storage is unavailable. */ }
    const started = performance.now();
    let peak = scrollY;
    let engaged = scrollY > 120;
    const desktop = window.matchMedia("(min-width: 961px) and (hover: hover) and (pointer: fine)");
    const show = (format: Mode) => {
      if (seen.current || !engaged || performance.now() - started < 30000 || document.visibilityState !== "visible") return;
      if (document.querySelector("dialog[open]") || document.body.classList.contains("menu-open")) return;
      const footer = document.querySelector(".site-footer")?.getBoundingClientRect();
      if (footer && footer.top < innerHeight && footer.bottom > 0) return;
      seen.current = true;
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* Optional storage. */ }
      setMode(format);
      track(EVENTS.promptView, { source: "program-return-prompt", format });
    };
    const onScroll = () => {
      if (scrollY > 120) engaged = true;
      peak = Math.max(peak, scrollY);
      if (!desktop.matches && peak > innerHeight * .75 && peak - scrollY >= 160) show("mobile");
    };
    const onExit = (event: MouseEvent) => {
      if (desktop.matches && event.relatedTarget === null && event.clientY <= 8) show("desktop");
    };
    // Someone who has already started an enquiry should not get another invitation.
    const onEnquiry = (event: MouseEvent) => {
      if (!(event.target as Element | null)?.closest("[data-enquiry], a[href*='wa.me/'], a[href^='tel:']")) return;
      seen.current = true;
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* Optional storage. */ }
      if (!(event.target as Element).closest("[data-enquiry-return-focus]")) {
        dialog.current?.close();
        setMode(null);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onExit);
    document.addEventListener("click", onEnquiry, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onExit);
      document.removeEventListener("click", onEnquiry, true);
    };
  }, []);

  useEffect(() => {
    if (!mode) return;
    document.body.classList.add("home-prompt-visible");
    if (mode === "desktop") {
      document.body.classList.add("dialog-open");
      dialog.current?.showModal();
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); dismiss("escape"); }
      if (mode !== "desktop" || event.key !== "Tab") return;
      const items = dialog.current?.querySelectorAll<HTMLElement>("button, a[href]");
      if (!items?.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("home-prompt-visible");
      // Keep scrolling locked if the CTA has just opened the existing enquiry dialog.
      if (!document.querySelector("dialog[open]")) document.body.classList.remove("dialog-open");
    };
  }, [mode, dismiss]);

  const content = (format: Mode) => <>
    <button className="home-prompt-close" type="button" aria-label="Close consultation reminder" onClick={() => dismiss("close")}>×</button>
    <div className="home-prompt-person">
      <img src={asset("/images/narayani-cover-portrait-96.webp")} alt="" width={48} height={48} />
      <div><p>{format === "desktop" ? "Before you go" : "When you’re ready"}</p><span>Narayani Garg</span></div>
    </div>
    <h2 id={`home-prompt-${format}-title`}>{format === "desktop" ? "What could the next six months look like?" : "Ready for ongoing support?"}</h2>
    <p className="home-prompt-copy">{format === "desktop" ? "Personal hand holding brings remedies, mindset work and direct guidance together over six months. Ask the team how it fits your situation." : "Six months of remedies, mindset work and personal guidance. Ask how the program fits your situation."}</p>
    <p className="home-prompt-availability"><span className="appointment-dot" aria-hidden="true" />Ask about the next available start date</p>
    <div className="home-prompt-actions" onClick={event => {
      if ((event.target as Element).closest("[data-enquiry]")) dismiss("continue");
    }}>
      <EnquiryTrigger source="program-return-prompt" topic="the Personalised Hand Holding Program">Enquire about personal hand holding</EnquiryTrigger>
      <button className="home-prompt-later" type="button" onClick={() => dismiss("later")}>Not now</button>
    </div>
  </>;

  return <>
    <dialog ref={dialog} className="home-return-prompt" data-enquiry-return-focus aria-labelledby="home-prompt-desktop-title"
      onCancel={event => { event.preventDefault(); dismiss("escape"); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dismiss("backdrop");
      }}>
      {content("desktop")}
    </dialog>
    <aside ref={mobile} className="home-return-prompt home-return-prompt-mobile" data-enquiry-return-focus hidden={mode !== "mobile"} aria-labelledby="home-prompt-mobile-title">
      {content("mobile")}
    </aside>
  </>;
}
