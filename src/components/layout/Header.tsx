"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { asset, assetSet } from "@/lib/assets";
import { nav, site, type NavItem } from "@/content/site";

/** Compare paths with and without the trailing slash the static export adds. */
const same = (a: string, b: string) => a.replace(/\/$/, "") === b.replace(/\/$/, "");

/** True on the section's own page and on every page beneath it (Services, and each service). */
const inSection = (pathname: string, href: string) => {
  const parent = href.split("#")[0].replace(/\/$/, "");
  const current = pathname.replace(/\/$/, "");
  return parent !== "" && (current === parent || current.startsWith(`${parent}/`));
};

/**
 * A nav item with a submenu. The label is still a link to its own page; the small button beside it opens the
 * submenu for keyboard and touch, and a pointer hovering over it opens it too. Escape, a click elsewhere, leaving
 * the group, or moving to another page closes it.
 */
function NavGroup({ item, pathname }: { item: NavItem; pathname: string }) {
  // Hovering opens the menu for a moment; pressing the button pins it open. Each remembers the page it was set
  // on, so moving to another page closes both.
  const [hoverOn, setHoverOn] = useState<string | null>(null);
  const [pinOn, setPinOn] = useState<string | null>(null);
  const pinned = pinOn === pathname;
  const open = hoverOn === pathname || pinned;
  const group = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const closeAll = () => {
    setHoverOn(null);
    setPinOn(null);
  };

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!group.current?.contains(event.target as Node)) {
        setHoverOn(null);
        setPinOn(null);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setHoverOn(null);
        setPinOn(null);
        button.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      className="nav-group"
      ref={group}
      onPointerEnter={(event) => event.pointerType === "mouse" && setHoverOn(pathname)}
      onPointerLeave={(event) => event.pointerType === "mouse" && setHoverOn(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeAll();
      }}
    >
      {!item.dropdownOnly && <Link
        prefetch={false}
        href={item.href}
        aria-current={same(pathname, item.href) ? "page" : undefined}
        data-section={!item.excludePaths?.some(path => inSection(pathname, path)) && (inSection(pathname, item.href) || item.children?.some(child => inSection(pathname, child.href))) ? "true" : undefined}
      >
        {item.label}
      </Link>}
      <button
        ref={button}
        type="button"
        className={`nav-group-toggle${item.dropdownOnly ? " nav-group-label-toggle" : ""}`}
        aria-expanded={open}
        aria-controls={`submenu-${item.label.toLowerCase()}`}
        aria-label={`${item.label} menu`}
        onClick={() => {
          if (pinned) closeAll();
          else setPinOn(pathname);
        }}
      >
        {item.dropdownOnly && <span>{item.label}</span>}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M1.5 3.5L5 7l3.5-3.5" />
        </svg>
      </button>
      <ul className="nav-menu" id={`submenu-${item.label.toLowerCase()}`} hidden={!open}>
        {!item.dropdownOnly && <li>
          <Link prefetch={false} href={item.href} onClick={closeAll}>
            {item.overviewLabel ?? `All ${item.label.toLowerCase()}`}
          </Link>
        </li>}
        {item.children?.map((child) => (
          <li key={child.href}>
            <Link prefetch={false} href={child.href} aria-current={same(pathname, child.href) ? "page" : undefined} onClick={closeAll}>
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
      if (event.key === "Tab") {
        const items = Array.from(document.querySelectorAll<HTMLElement>("#mobile-nav a[href], #mobile-nav button")).filter(el => el.getBoundingClientRect().height > 0);
        const first = items[0], last = items[items.length - 1];
        if (first && (event.shiftKey ? document.activeElement === first : document.activeElement === last)) {
          event.preventDefault();
          (event.shiftKey ? last : first)?.focus();
        }
      }
      if (event.key === "Escape") {
        setOpenOn(null);
        toggle.current?.focus();
      }
    };
    const wide = window.matchMedia("(min-width: 1181px)");
    const onWide = (event: MediaQueryListEvent) => event.matches && setOpenOn(null);
    document.addEventListener("keydown", onKey);
    // Wait for the drawer's slide-in transition before moving focus into it.
    const focusTimer = setTimeout(() => document.querySelector<HTMLElement>("#mobile-nav .drawer-close-btn")?.focus({ preventScroll: true }), 360);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(focusTimer);
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
            {nav.map((item) =>
              item.children ? (
                <NavGroup key={item.href} item={item} pathname={pathname} />
              ) : (
                <Link prefetch={false} key={item.href} href={item.href} aria-current={same(pathname, item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              ),
            )}
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
        aria-hidden={!open}
        inert={!open}
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
            <Fragment key={item.href}>
              {item.dropdownOnly ? <span className="drawer-group-label">{item.label}</span> : <Link prefetch={false} href={item.href} aria-current={same(pathname, item.href) ? "page" : undefined}>
                <span>{item.label}</span>
                <span className="drawer-link-arrow" aria-hidden="true">→</span>
              </Link>}
              {item.children && (
                <div className="drawer-sublinks">
                  {item.children.map((child) => (
                    <Link prefetch={false} key={child.href} href={child.href} aria-current={same(pathname, child.href) ? "page" : undefined}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </Fragment>
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
