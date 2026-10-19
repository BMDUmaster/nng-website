"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EVENTS, track } from "@/lib/analytics";
import { isPreviewNumber, whatsappUrl } from "@/lib/whatsapp";
import { enquiryTopics, site } from "@/content/site";
import { TopicOptions } from "./TopicOptions";

type Region = "India" | "outside India";
const DEFAULT_TOPIC = enquiryTopics[0].value;

/**
 * The enquiry dialog from the Codex homepage, mounted once for the whole site. Any link marked
 * data-enquiry (see EnquiryTrigger) opens it with its service chosen. The visitor picks a service
 * and where they are based, sees the message, and continues on WhatsApp, where they can edit it
 * before sending. Nothing is sent or stored by the page.
 */
export function EnquiryDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const select = useRef<HTMLSelectElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const source = useRef("unknown");
  const [topic, setTopic] = useState<string>(DEFAULT_TOPIC);
  // A page-specific topic, kept in the list for as long as the dialog is open on this visit.
  const [pageTopic, setPageTopic] = useState<string | null>(null);
  const [region, setRegion] = useState<Region>("India");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tried, setTried] = useState(false);
  const preview = isPreviewNumber();

  const open = useCallback((from: HTMLElement) => {
    const el = dialog.current;
    if (!el || el.open) return;
    trigger.current = from.closest("[data-enquiry-return-focus]")
      ? document.querySelector<HTMLElement>("[data-primary-cta][data-enquiry]") ?? from
      : from;
    source.current = from.dataset.source || "unknown";
    const chosen = from.dataset.topic || DEFAULT_TOPIC;
    setTopic(chosen);
    setPageTopic(enquiryTopics.some((item) => item.value === chosen) ? null : chosen);
    document.body.classList.add("dialog-open");
    el.showModal();
    select.current?.focus();
    track(EVENTS.enquiryOpen, { source: source.current, topic: chosen });
  }, []);

  // One listener for every trigger on every page.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-enquiry]");
      if (!target) return;
      event.preventDefault();
      open(target);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onClose = () => {
      document.body.classList.remove("dialog-open");
      trigger.current?.focus();
    };
    // A click on the backdrop lands on the dialog element itself, outside its box.
    const onBackdrop = (event: MouseEvent) => {
      if (event.target !== el) return;
      const r = el.getBoundingClientRect();
      if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) el.close();
    };
    // Keep Tab inside the dialog, wrapping at both ends.
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const items = Array.from(el.querySelectorAll<HTMLElement>("button, select, a[href]")).filter((n) => !n.hasAttribute("disabled"));
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    el.addEventListener("close", onClose);
    el.addEventListener("click", onBackdrop);
    el.addEventListener("keydown", onKey);
    return () => {
      el.removeEventListener("close", onClose);
      el.removeEventListener("click", onBackdrop);
      el.removeEventListener("keydown", onKey);
    };
  }, []);

  const errors = {
    name: name.trim() ? "" : "Please enter your name.",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()) ? "" : email.trim() ? "Please enter a valid email address." : "Please enter your email address.",
    phone: phone.replace(/\D/g, "").length >= 7 ? "" : phone.trim() ? "Please enter a valid phone number." : "Please enter your phone number.",
  };
  const valid = !errors.name && !errors.email && !errors.phone;
  // The WhatsApp text carries the visitor's details and choices; nothing else is written for them.
  const message = [
    `Hello, I would like to enquire about ${topic} with Narayani Garg.`,
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Phone: ${phone.trim()}`,
    `Based: ${region === "India" ? "India" : "Outside India"}`,
  ].join("\n");

  return (
    <dialog ref={dialog} className="enquiry" aria-labelledby="enquiry-title">
      <button type="button" className="dialog-close" aria-label="Close enquiry" onClick={() => dialog.current?.close()}>
        ×
      </button>
      <p className="kicker">Let’s begin</p>
      <h2 id="enquiry-title">What brings you here?</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="enquiry-name">Your name <b aria-hidden="true">*</b></label>
        <input id="enquiry-name" type="text" autoComplete="name" required maxLength={80} value={name} onChange={(e) => setName(e.target.value)} aria-invalid={tried && !!errors.name} />
        {tried && errors.name && <p className="enquiry-error">{errors.name}</p>}
        <label htmlFor="enquiry-email">Email <b aria-hidden="true">*</b></label>
        <input id="enquiry-email" type="email" autoComplete="email" inputMode="email" required maxLength={160} value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={tried && !!errors.email} />
        {tried && errors.email && <p className="enquiry-error">{errors.email}</p>}
        <label htmlFor="enquiry-phone">Phone number <b aria-hidden="true">*</b></label>
        <input id="enquiry-phone" type="tel" autoComplete="tel" inputMode="tel" required maxLength={20} value={phone} onChange={(e) => setPhone(e.target.value)} aria-invalid={tried && !!errors.phone} />
        {tried && errors.phone && <p className="enquiry-error">{errors.phone}</p>}
        <label htmlFor="enquiry-topic">I would like guidance with</label>
        <select id="enquiry-topic" ref={select} value={topic} onChange={(event) => setTopic(event.target.value)}>
          <TopicOptions extra={pageTopic} />
        </select>
        <label htmlFor="enquiry-region">Where are you based?</label>
        <select id="enquiry-region" value={region} onChange={(event) => setRegion(event.target.value as Region)}>
          <option value="India">India</option>
          <option value="outside India">Outside India</option>
        </select>
        <a
          className="button"
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!valid}
          onClick={(event) => {
            if (!valid) { event.preventDefault(); setTried(true); return; }
            track(EVENTS.whatsappClick, { source: source.current, topic, region });
          }}
        >
          Continue on WhatsApp <span aria-hidden="true">↗</span>
        </a>
        <div className="dialog-alt">
          <a href={`mailto:${site.email}?subject=${encodeURIComponent("Consultation enquiry")}`} onClick={() => dialog.current?.close()}>
            Prefer email? Write to the team
          </a>
        </div>
        <p className="dialog-note">
          {preview
            ? "WhatsApp opens with your details ready to send. In this preview no number is attached, so nothing reaches the practice."
            : "WhatsApp opens with your details ready to send."}
        </p>
      </form>
    </dialog>
  );
}
