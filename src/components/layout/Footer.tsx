"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { asset } from "@/lib/assets";
import { site } from "@/content/site";

const whatsapp = `https://wa.me/${site.whatsappNumber}?text=Hello%20Narayani%20Garg%20team,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`;
const phoneShown = "+91 92055 11101";

const ico = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const lotus = ico('<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/>');
const promises = [
  { label: ["Personalised", "Guidance"], icon: ico('<path d="M6 8.5A3.5 3.5 0 0 1 9.5 5h13A3.5 3.5 0 0 1 26 8.5v8a3.5 3.5 0 0 1-3.5 3.5H14l-5.5 5v-5h0A3.5 3.5 0 0 1 6 16.5Z"/><path d="M11 11h10M11 14.5h6"/>') },
  { label: ["Confidential", "Conversations"], icon: ico('<rect x="8" y="14" width="16" height="12" rx="2.5"/><path d="M11.5 14v-3.5a4.5 4.5 0 0 1 9 0V14"/><path d="M16 19v3"/>') },
  { label: ["A Supportive", "Space"], icon: ico('<path d="M16 26S5 19.4 5 12.2A5.6 5.6 0 0 1 16 9.8a5.6 5.6 0 0 1 11 2.4C27 19.4 16 26 16 26Z"/>') },
];

type FooterLink = { label: string; href?: string; enquire?: boolean };
const columns: { title: string; links: FooterLink[] }[] = [
  { title: "Consultation", links: [
    { label: "Where to begin", href: "/consultations/#choose" },
    { label: "Options and fees", href: "/consultations/#fees" },
    { label: "How it works", href: "/consultations/#how" },
    { label: "Book a session", enquire: true },
    { label: "Hand Holding Program", href: "/hand-holding-program/" },
  ] },
  { title: "Services", links: [
    { label: "Brainology Program", href: "/services/brain-training/" },
    { label: "Numerology", href: "/services/numerology/" },
    { label: "Vastulogy", href: "/services/vastu/" },
    { label: "Astrology", href: "/services/astrology/" },
    { label: "All services", href: "/services/" },
  ] },
  { title: "Resources", links: [
    { label: "Crystals, Stones & Rudraksha", href: "/services/stones-and-rudraksh/" },
    { label: "Blog", href: "/blog/" },
    { label: "FAQs", href: "/#faq" },
    { label: "Reels", href: "/#instagram" },
    { label: "Legal & contact", href: "/legal/" },
  ] },
  { title: "Explore", links: [
    { label: "Home", href: "/" },
    { label: "Mineralogy", href: "/shop/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ] },
];

const socials = [
  { name: "YouTube", href: site.social.youtube, d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" },
  { name: "Instagram", href: site.social.instagram, d: "M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 2.2c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.4.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.4.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.4-.1-4s0-3 .1-4C4 3.7 5.3 2.4 8 2.3c1-.1 1.3-.1 4-.1z" },
  { name: "Facebook", href: site.social.facebook, d: "M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4h-3v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8V24C19.6 23 24 18.1 24 12.1z" },
  { name: "WhatsApp", href: whatsapp, d: "M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z" },
];

const chevron = (
  <svg className="fz-chev" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3.5 10.5 8 6 12.5" /></svg>
);
const arrow = <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6h7M6.5 3l3 3-3 3" /></svg>;

/**
 * The footer (Oct 18, from the approved "Dark Green Lotus" banner): a cream invitation card with three promises and
 * the lotus bowl; then her name and words beside four link columns; a contact row; and the legal line. Deep green
 * with leaves, a lotus and a diya at the edges. On the shop the invitation asks about the collection instead.
 */
export function Footer() {
  const pathname = usePathname();
  const shop = pathname === "/shop" || pathname.startsWith("/shop/");

  return (
    <footer className="site-footer fz" id="site-footer">
      <span className="fz-art fz-leaf-tl" aria-hidden="true" />
      <span className="fz-art fz-leaf-tr" aria-hidden="true" />
      <span className="fz-art fz-lotus-bl" aria-hidden="true" />
      <span className="fz-art fz-diya-br" aria-hidden="true" />
      <div className="fz-inner">
        <div className="fz-cta">
          <div className="fz-cta-copy">
            <p className="fz-kicker"><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />{site.method.replace(/\. /g, " · ").replace(/\.$/, "")}</p>
            <h2>{shop ? <>A question about <em>your selection?</em></> : <>Start with <em>one conversation</em></>}</h2>
            <p>{shop ? "The team can confirm the piece, options and order details." : "Tell her team what is on your mind. Get clarity, guidance and the right next steps."}</p>
            {shop ? (
              <a className="fz-cta-btn" href={`https://wa.me/${site.whatsappNumber}?text=Hello%20NNG%20team,%20I%20have%20a%20question%20about%20the%20stone%20and%20Rudraksha%20collection.`} target="_blank" rel="noopener noreferrer">
                <span>Ask about the collection</span>
                <span className="fz-cta-arrow" aria-hidden="true">{arrow}</span>
              </a>
            ) : (
              <EnquiryTrigger source="footer" className="fz-cta-btn">
                <span>Enquire about a consultation</span>
                <span className="fz-cta-arrow" aria-hidden="true">{arrow}</span>
              </EnquiryTrigger>
            )}
          </div>
          <ul className="fz-promises" aria-label="What to expect">
            {promises.map((p) => (
              <li key={p.label[0]}>
                <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: p.icon }} />
                <p>{p.label[0]} <br />{p.label[1]}</p>
              </li>
            ))}
          </ul>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="fz-cta-art fz-cta-art-d" src={asset("/images/fz-cta-art.webp")} alt="" width={316} height={244} loading="lazy" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="fz-cta-art fz-cta-art-m" src={asset("/images/fz-cta-art-m.webp")} alt="" width={800} height={352} loading="lazy" aria-hidden="true" />
        </div>

        <div className="fz-main">
          <div className="fz-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="fz-logo" src={asset("/images/nng-logo-400.webp")} alt="Transformation with NNG" width={160} height={84} loading="lazy" />
            <p className="fz-name">{site.person}</p>
            <p className="fz-role">{site.title}</p>
            <p className="fz-about">Guiding you towards clarity, balance and a more meaningful life through astrology, numerology, Vastulogy and mindset work.</p>
            <ul className="fz-social" aria-label="Follow Narayani">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d={s.d} /></svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="fz-right">
            <nav className="fz-nav" aria-label="Footer links">
              {columns.map((col) => (
                <div key={col.title} className="fz-col">
                  <p className="fz-col-title">{col.title}</p>
                  <ul>
                    {col.links.map((l) => (
                      <li key={l.label}>
                        {l.enquire ? (
                          <EnquiryTrigger source="footer-book" className="fz-link"><span>{l.label}</span>{chevron}</EnquiryTrigger>
                        ) : (
                          <Link prefetch={false} className="fz-link" href={l.href!}><span>{l.label}</span>{chevron}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <ul className="fz-contact" aria-label="Contact">
              <li>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                  <span className="fz-c-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ico('<path d="M8.5 5.5h4l2 5-2.5 1.6a11 11 0 0 0 7.9 7.9L21.5 17.5l5 2v4a2 2 0 0 1-2 2A19 19 0 0 1 6.5 7.5a2 2 0 0 1 2-2Z"/>') }} />
                  <span><small>Call or WhatsApp</small>{phoneShown}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>
                  <span className="fz-c-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ico('<rect x="5" y="8" width="22" height="16" rx="2.5"/><path d="m6 9.5 10 7.5 10-7.5"/>') }} />
                  <span><small>Email us</small>{site.email}</span>
                </a>
              </li>
              <li>
                <Link prefetch={false} href="/consultations/">
                  <span className="fz-c-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ico('<path d="M16 28s-8.5-7.4-8.5-14a8.5 8.5 0 0 1 17 0c0 6.6-8.5 14-8.5 14Z"/><circle cx="16" cy="13.5" r="3"/>') }} />
                  <span><small>Consultations</small>Online worldwide · In person</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="fz-bottom">
          <p>© 2026 Transformation with NNG. All rights reserved.</p>
          <ul className="fz-legal">
            <li><Link prefetch={false} href="/privacy-policy/">Privacy Policy</Link></li>
            <li><Link prefetch={false} href="/terms-conditions/">Terms &amp; Conditions</Link></li>
            <li><Link prefetch={false} href="/cancellation-refunds/">Cancellation &amp; Refunds</Link></li>
            <li><Link prefetch={false} href="/disclaimer/">Disclaimer</Link></li>
          </ul>
          <button type="button" className="fz-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.5 10 8 5.5l4.5 4.5" /></svg>
          </button>
        </div>
      </div>

    </footer>
  );
}
