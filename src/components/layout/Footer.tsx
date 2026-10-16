"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { asset } from "@/lib/assets";
import { legal, nav, site } from "@/content/site";

const whatsapp = `https://wa.me/${site.whatsappNumber}?text=Hello%20Narayani%20Garg%20team,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`;

const lotus = `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/></svg>`;

const socials = [
  {
    name: "YouTube",
    href: site.social.youtube,
    icon: <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />,
  },
  {
    name: "Instagram",
    href: site.social.instagram,
    icon: <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 2.2c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.4.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.4.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.4-.1-4s0-3 .1-4C4 3.7 5.3 2.4 8 2.3c1-.1 1.3-.1 4-.1z" />,
  },
  {
    name: "Facebook",
    href: site.social.facebook,
    icon: <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4h-3v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.3l-.5 3.5h-2.8V24C19.6 23 24 18.1 24 12.1z" />,
  },
  {
    name: "WhatsApp",
    href: whatsapp,
    icon: <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2zm5.7 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z" />,
  },
];

/**
 * The footer: an invitation band, then the brand and social links beside the site's pages in short columns,
 * then the disclaimer. On the shop it asks about the collection instead.
 */
export function Footer() {
  const pathname = usePathname();
  const shop = pathname === "/shop" || pathname.startsWith("/shop/");
  const groups = nav.filter((item) => item.children?.length);
  const singles = nav.filter((item) => !item.children?.length);

  return (
    <footer className="site-footer ft" id="site-footer">
      <div className="ft-inner">
        <div className="ft-cta">
          <div>
            <p className="ft-kicker"><span className="ft-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />{site.method.replace(/\. /g, " · ").replace(/\.$/, "")}</p>
            <h2>{shop ? "A question about your selection?" : <>Start with <em>one conversation</em></>}</h2>
            <p>{shop ? "The team can confirm the piece, options and order details." : "Tell her team what is on your mind. Get clarity, guidance and the right next steps."}</p>
          </div>
          {shop ? (
            <a className="ft-cta-btn" href={`https://wa.me/${site.whatsappNumber}?text=Hello%20NNG%20team,%20I%20have%20a%20question%20about%20the%20stone%20and%20Rudraksha%20collection.`} target="_blank" rel="noopener noreferrer">
              <span>Ask about the collection</span>
              <span className="ft-cta-arrow" aria-hidden="true">→</span>
            </a>
          ) : (
            <EnquiryTrigger source="footer" className="ft-cta-btn">
              <span>Enquire about a consultation</span>
              <span className="ft-cta-arrow" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6h7M6.5 3l3 3-3 3" /></svg>
              </span>
            </EnquiryTrigger>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ft-cta-art" src={asset("/images/footer-lotus-bowl.webp")} alt="" width={1050} height={786} loading="lazy" aria-hidden="true" />
        </div>

        <div className="ft-grid">
          <div className="ft-brand">
            <img src={asset("/images/nng-logo-400.webp")} alt="Transformation with NNG" width={160} height={84} loading="lazy" />
            <p>
              <strong>{site.person}</strong>
              <span>{site.title}</span>
            </p>
            <ul className="ft-social" aria-label="Follow">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <a className="ft-mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          <nav className="ft-nav" aria-label="Footer links">
            {groups.map((item) => (
              <div key={item.href} className="ft-col">
                <p className="ft-col-title"><span className="ft-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />{item.dropdownOnly ? item.label : <Link prefetch={false} href={item.href}>{item.label}</Link>}</p>
                <ul>
                  {item.children!.map((child) => (
                    <li key={child.href}>
                      <Link prefetch={false} href={child.href}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="ft-col">
              <p className="ft-col-title"><span className="ft-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />Explore</p>
              <ul>
                {singles.map((item) => (
                  <li key={item.href}>
                    <Link prefetch={false} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="ft-bottom">
          <p>{legal.disclaimer}</p>
          <p>© 2026 Transformation with NNG. All rights reserved.</p>
          <button type="button" className="ft-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10l5-5 5 5" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
