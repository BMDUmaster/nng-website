"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { asset, assetSet } from "@/lib/assets";
import { nav, site } from "@/content/site";

/** Compare paths with and without the trailing slash the static export adds. */
const same = (a: string, b: string) => a.replace(/\/$/, "") === b.replace(/\/$/, "");

export function Header() {
  const pathname = usePathname() || "/";
  // The menu remembers the page it was opened on, so moving to another page closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  // Lock background scrolling only when side drawer is actively open
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  // Escape key closes the menu; wide window resets it.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (document.querySelector("dialog[open]")) return;
      if (event.key === "Escape") {
        setOpenOn(null);
        toggle.current?.focus();
      }
    };
    const wide = window.matchMedia("(min-width: 961px)");
    const onWide = (event: MediaQueryListEvent) => event.matches && setOpenOn(null);
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  const close = () => setOpenOn(null);

  return (
    <>
      <header ref={header} className="site-header">
        <div className="header-inner">
          <Link prefetch={false} href="/" className="brand" aria-label="Transformation with NNG, home">
            <img
              src={asset("/images/nng-logo-200.webp")}
              srcSet={assetSet("/images/nng-logo-200.webp 200w, /images/nng-logo-400.webp 400w, /images/nng-logo.webp 800w")}
              sizes="94px"
              width={800}
              height={422}
              alt="Transformation with NNG"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <Link prefetch={false} key={item.href} href={item.href} aria-current={same(pathname, item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <EnquiryTrigger className="header-enquiry" source="header">
              <span>Enquire</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </EnquiryTrigger>

            {/* 3-Dots / Hamburger Button */}
            <button
              ref={toggle}
              type="button"
              className="menu-toggle"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpenOn(open ? null : pathname)}
            >
              <span className="dot dot-1" />
              <span className="dot dot-2" />
              <span className="dot dot-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Side Drawer Backdrop Overlay */}
      <div
        className={`mobile-drawer-backdrop${open ? " is-active" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Side Drawer Menu (Slides from Right) */}
      <nav
        id="mobile-nav"
        className={`mobile-side-drawer${open ? " is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="drawer-header">
          <Link prefetch={false} href="/" onClick={close} className="drawer-brand" aria-label="Transformation with NNG">
            <img src={asset("/images/nng-logo-200.webp")} width={84} height={44} alt="Transformation with NNG" />
          </Link>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={close}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="drawer-links" onClick={(event) => (event.target as Element).closest("a") && close()}>
          {nav.map((item) => (
            <Link prefetch={false} key={item.href} href={item.href} aria-current={same(pathname, item.href) ? "page" : undefined}>
              <span>{item.label}</span>
              <span className="drawer-link-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>

        <div className="drawer-footer">
          <p className="kicker">Begin with a conversation</p>
          <div onClick={close}>
            <EnquiryTrigger className="drawer-enquiry-btn button button-primary" source="mobile-drawer">
              Enquire about a consultation
            </EnquiryTrigger>
          </div>
          <p className="drawer-contact-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
              YouTube ↗
            </a>
          </p>
        </div>
      </nav>
    </>
  );
}
