"use client";

import { useState } from "react";
import { EVENTS, track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * The contact page enquiry form. Its fields match the admin's enquiry store (name, phone, email, guidance_with,
 * based_in, message, source_page), so a sent form lands in Customer Enquiries as a new enquiry.
 * NEXT_PUBLIC_ENQUIRY_ENDPOINT is the address it posts to (/enquiry/store on nngarg.com, where the Laravel app answers in
 * JSON); until it is set, as on the Vercel preview, the form says so and offers WhatsApp.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT ?? "";

export const GUIDANCE = [
  "General Consultation",
  "Mind Training & Guidance",
  "Numerology & Vastulogy",
  "Astrology Assessment",
  "Personalised Hand Holding Program",
];

type Status = "idle" | "sending" | "sent" | "error" | "offline" | "invalid";
type Errors = Partial<Record<"name" | "phone" | "email", string>>;

function check(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  if (name.length < 2) errors.name = "Please enter your name.";
  // The same rule as the admin's enquiry store: 10 to 15 characters of digits, spaces, +, - or brackets.
  if (!phone) errors.phone = "Please enter a phone or WhatsApp number.";
  else if (!/^[0-9+\s\-()]{10,15}$/.test(phone)) errors.phone = "Please enter a valid phone or WhatsApp number, e.g. +91 98765 43210.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please check this email address.";
  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const found = check(data);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    if (!ENDPOINT) {
      setStatus("offline");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json", "X-Requested-With": "XMLHttpRequest" } });
      const reply = await response.json().catch(() => ({})) as { success?: boolean; message?: string; errors?: Record<string, string[]> };
      if (response.status === 422) {
        const fromServer: Errors = {};
        for (const key of ["name", "phone", "email"] as const) if (reply.errors?.[key]?.[0]) fromServer[key] = reply.errors[key][0];
        setErrors(fromServer);
        setServerMessage(Object.keys(fromServer).length ? "" : reply.message ?? "");
        setStatus("invalid");
        return;
      }
      if (!response.ok || reply.success === false) throw new Error(String(response.status));
      track(EVENTS.callbackSubmit, { topic: String(data.get("guidance_with") ?? "") });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="cf-card cf-done" role="status">
        <span className="cf-done-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
        </span>
        <h3>Thank you. Your enquiry has reached the team.</h3>
        <p>They will be in touch by phone or WhatsApp to understand your question and explain the next step.</p>
        <button type="button" className="cf-again" onClick={() => setStatus("idle")}>Send another enquiry</button>
      </div>
    );
  }

  const field = (key: keyof Errors) => (errors[key] ? { "aria-invalid": true, "aria-describedby": `cf-${key}-error` } : {});

  return (
    <form className="cf-card" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="source_page" value="contact_page" />
      <div className="cf-field">
        <label htmlFor="cf-name">Full name <span className="cf-req" aria-hidden="true">*</span></label>
        <input id="cf-name" name="name" type="text" autoComplete="name" maxLength={80} placeholder="Your full name" required {...field("name")} />
        {errors.name && <p className="cf-error" id="cf-name-error">{errors.name}</p>}
      </div>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-phone">Phone / WhatsApp <span className="cf-req" aria-hidden="true">*</span></label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={20} placeholder="+91 98765 43210" required {...field("phone")} />
          {errors.phone && <p className="cf-error" id="cf-phone-error">{errors.phone}</p>}
        </div>
        <div className="cf-field">
          <label htmlFor="cf-email">Email <span className="cf-opt">(optional)</span></label>
          <input id="cf-email" name="email" type="email" autoComplete="email" maxLength={120} placeholder="name@example.com" {...field("email")} />
          {errors.email && <p className="cf-error" id="cf-email-error">{errors.email}</p>}
        </div>
      </div>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="cf-guidance">Guidance with</label>
          <span className="cf-select">
            <select id="cf-guidance" name="guidance_with" defaultValue={GUIDANCE[0]}>
              {GUIDANCE.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </span>
        </div>
        <div className="cf-field">
          <label htmlFor="cf-location">Based in <span className="cf-opt">(optional)</span></label>
          <input id="cf-location" name="based_in" type="text" autoComplete="address-level2" maxLength={80} placeholder="City, country" />
        </div>
      </div>
      <div className="cf-field">
        <label htmlFor="cf-message">Your message <span className="cf-opt">(optional)</span></label>
        <textarea id="cf-message" name="message" rows={4} maxLength={1500} placeholder="A few lines about what is on your mind" />
      </div>
      <button className="cf-submit" type="submit" disabled={status === "sending"}>
        <span>{status === "sending" ? "Sending…" : "Send enquiry"}</span>
        <span className="cn-arrow" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6h7M6.5 3l3 3-3 3" /></svg>
        </span>
      </button>
      {status === "invalid" && serverMessage && <p className="cf-note cf-note-warn" role="alert">{serverMessage}</p>}
      {(status === "error" || status === "offline") && (
        <p className="cf-note cf-note-warn" role="alert">
          {status === "error" ? "Your enquiry could not be sent just now." : "The form is being connected to the team’s inbox."}{" "}
          Please <a href={whatsappUrl("Hello NNG team, I would like to enquire about a consultation with Narayani Garg.")} target="_blank" rel="noopener noreferrer">message the team on WhatsApp</a> instead.
        </p>
      )}
      <p className="cf-note">Your details are shared only with the NNG team and used to reply to your enquiry.</p>
    </form>
  );
}
