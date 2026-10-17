"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
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

/** True when the current page belongs to this nav item or one of its children. */
const isCurrent = (pathname: string, item: NavItem) =>
  !item.excludePaths?.some((path) => inSection(pathname, path)) &&
  (item.href === "/" ? same(pathname, "/") : inSection(pathname, item.href) || !!item.children?.some((child) => inSection(pathname, child.href)));

const slug = (label: string) => label.toLowerCase().replace(/\s+/g, "-");

type Icons = Record<string, ReactNode>;

/** A group shows as a grid of drawn icons when every page in it has one (the four services). */
const iconsFor = (item: NavItem, icons: Icons) => !!item.children?.length && item.children.every((child) => icons[child.href]);

const menuLotus =
  '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/></svg>';

const featureIcon = (d: string) =>
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const featureIcons: Record<string, string> = {
  "/services/stones-and-rudraksh/": featureIcon('<path d="M10 27 7 15l4-8 4 8-3 12M22 27l3-12-4-8-4 8 3 12"/><path d="M16 27l-3-10 3-9 3 9-3 10Z"/><path d="M5 27h22"/>'),
  "/consultations/#choose": featureIcon('<path d="M5 8a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6l-5 4v-4H8a3 3 0 0 1-3-3Z"/><path d="M25 12h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-1v4l-4-4h-5"/><path d="M10 11h.01M13.5 11h.01M17 11h.01" stroke-width="2.4"/>'),
  "/consultations/#fees": featureIcon('<path d="M9 4h10l6 6v18H9z"/><path d="M19 4v6h6M13 15h8M13 19h8M13 23h5"/>'),
  "/consultations/#how": featureIcon('<circle cx="16" cy="16" r="4"/><circle cx="16" cy="16" r="9"/><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M6.8 25.2l2.8-2.8M22.4 9.6l2.8-2.8"/>'),
  "/hand-holding-program/": featureIcon('<path d="M16 26c-3-2.6-5-6-5-9.4 0-3 1.7-5.8 5-7.8 3.3 2 5 4.8 5 7.8 0 3.4-2 6.8-5 9.4Z"/><path d="M4 18c2 0 4 1 5 3l3 3M28 18c-2 0-4 1-5 3l-3 3"/><path d="M4 18v4l6 6M28 18v4l-6 6"/>'),
  "/resources/blogs/": featureIcon('<rect x="7" y="4" width="18" height="24" rx="2"/><path d="M11 9h10M11 13h10M11 17h6M11 21h8"/>'),
};

function Chevron() {
  return (
    <svg className="nh-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3.75L5 6.75l3-3" />
    </svg>
  );
}

function Arrow() {
  return (
    <span className="nh-cta-arrow" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6h7M6.5 3l3 3-3 3" />
      </svg>
    </span>
  );
}

/**
 * A desktop nav item with a submenu. The label is still a link to its own page; the chevron beside it opens the
 * submenu for keyboard and touch, and a pointer hovering over the group opens it too. Escape, a click elsewhere,
 * leaving the group, or moving to another page closes it.
 */
function NavGroup({ item, pathname, icons }: { item: NavItem; pathname: string; icons: Icons }) {
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

  const id = `nh-menu-${slug(item.label)}`;
  const grid = iconsFor(item, icons);
  const feature = !grid && item.dropdownOnly && item.children?.every((child) => child.note);
  const guide = !grid && !item.dropdownOnly && item.children?.every((child) => child.note);

  return (
    <div
      className="nh-group"
      ref={group}
      data-current={isCurrent(pathname, item) ? "true" : undefined}
      onPointerEnter={(event) => event.pointerType === "mouse" && setHoverOn(pathname)}
      onPointerLeave={(event) => event.pointerType === "mouse" && setHoverOn(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeAll();
      }}
    >
      {!item.dropdownOnly && (
        <Link prefetch={false} className="nh-link" href={item.href} aria-current={same(pathname, item.href) ? "page" : undefined}>
          {item.label}
        </Link>
      )}
      <button
        ref={button}
        type="button"
        className={`nh-toggle${item.dropdownOnly ? " nh-link" : ""}`}
        aria-expanded={open}
        aria-controls={id}
        aria-label={item.dropdownOnly ? undefined : `${item.label} menu`}
        onClick={() => (pinned ? closeAll() : setPinOn(pathname))}
      >
        {item.dropdownOnly && item.label}
        <Chevron />
      </button>
      <div className={`nh-menu${grid ? " is-grid" : ""}${feature ? " is-feature" : ""}${guide ? " is-guide" : ""}`} id={id} hidden={!open}>
        {guide && (
          <div className="nh-menu-guide" aria-hidden="true">
            <span className="nh-menu-guide-photo" />
            <div className="nh-menu-guide-copy">
              <p className="nh-menu-guide-kicker">Personalised guidance</p>
              <p className="nh-menu-title">
                Clarity for your <em>next step</em>
              </p>
              <span className="nh-menu-guide-rule" />
              <p className="nh-menu-lead">Choose a consultation that suits your question and your journey.</p>
            </div>
          </div>
        )}
        {feature && (
          <div className="nh-menu-photo" aria-hidden="true">
            <span className="nh-menu-lotus" dangerouslySetInnerHTML={{ __html: menuLotus }} />
          </div>
        )}
        {grid && (
          <div className="nh-menu-intro" aria-hidden="true">
            <span className="nh-menu-lotus" dangerouslySetInnerHTML={{ __html: menuLotus }} />
            <p className="nh-menu-title">
              Explore Her <em>{item.label}</em>
            </p>
            <span className="nh-menu-rule">⟶</span>
            <p className="nh-menu-lead">Guidance for a more balanced, peaceful and purposeful life.</p>
          </div>
        )}
        <div className="nh-menu-body">
          <ul>
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link prefetch={false} href={child.href} aria-current={same(pathname, child.href) ? "page" : undefined} onClick={closeAll}>
                  {grid && <span className="nh-menu-icon">{icons[child.href]}</span>}
                  {(feature || guide) && <span className="nh-menu-icon" dangerouslySetInnerHTML={{ __html: featureIcons[child.href] ?? menuLotus }} />}
                  {grid || feature || guide ? (
                    <span className="nh-menu-text">
                      <span className="nh-menu-name">{child.label}</span>
                      {child.note && <small>{child.note}</small>}
                    </span>
                  ) : (
                    <span>{child.label}</span>
                  )}
                  {(grid || feature || guide) && <span className="nh-menu-go" aria-hidden="true">→</span>}
                </Link>
              </li>
            ))}
          </ul>
          {feature && (
            <Link prefetch={false} className="nh-menu-all nh-menu-explore" href={item.href} onClick={closeAll}>
              <span className="nh-menu-explore-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: menuLotus }} />
              <span>Explore {item.label.toLowerCase()}</span>
              <span aria-hidden="true">⟶</span>
            </Link>
          )}
          {!item.dropdownOnly && (
            <Link prefetch={false} className="nh-menu-all" href={item.href} onClick={closeAll}>
              <span>{guide ? "Get a consultation overview" : item.overviewLabel ?? `All ${item.label.toLowerCase()}`}</span>
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const drawerIcons: Record<string, string> = {
  "/": featureIcon('<path d="M5 15 16 5l11 10"/><path d="M8 13v14h16V13"/><path d="M13 27v-7h6v7"/>'),
  "/consultations/": featureIcon('<circle cx="16" cy="11" r="5"/><path d="M7 27c0-5 4-9 9-9s9 4 9 9"/>'),
  "/services/": featureIcon('<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/>'),
  "/resources/": featureIcon('<path d="M16 9c-3-2-7-3-11-2v18c4-1 8 0 11 2 3-2 7-3 11-2V7c-4-1-8 0-11 2Z"/><path d="M16 9v18"/>'),
  "/shop/": featureIcon('<path d="M7 11h18l-1.5 16h-15Z"/><path d="M12 11V9a4 4 0 0 1 8 0v2"/>'),
  "/about/": featureIcon('<circle cx="16" cy="11" r="5"/><path d="M7 27c0-5 4-9 9-9s9 4 9 9"/>'),
  "/contact/": featureIcon('<path d="M27 21.5v3.4a2.3 2.3 0 0 1-2.5 2.3A22.6 22.6 0 0 1 14.6 23.7a22.3 22.3 0 0 1-6.9-6.9A22.6 22.6 0 0 1 4.2 6.8 2.3 2.3 0 0 1 6.5 4.3h3.4a2.3 2.3 0 0 1 2.3 2c.2 1.1.5 2.2.9 3.2a2.3 2.3 0 0 1-.5 2.4l-1.4 1.4a18.4 18.4 0 0 0 6.9 6.9l1.4-1.4a2.3 2.3 0 0 1 2.4-.5c1 .4 2.1.7 3.2.9a2.3 2.3 0 0 1 2 2.3Z"/>'),
};
const contactIcons = {
  mail: featureIcon('<rect x="4" y="7" width="24" height="18" rx="2"/><path d="m27 9-11 8L5 9"/>'),
  insta: featureIcon('<rect x="5" y="5" width="22" height="22" rx="6"/><circle cx="16" cy="16" r="5"/><circle cx="22.5" cy="9.5" r="1"/>'),
  yt: featureIcon('<rect x="4" y="7" width="24" height="18" rx="4"/><path d="m14 12 6 4-6 4Z"/>'),
};
const DrawerIcon = ({ href }: { href: string }) => <span className="nh-drawer-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: drawerIcons[href] ?? menuLotus }} />;

/** One row of the drawer. Items with children open in place, one at a time. */
function DrawerItem({ item, pathname, expanded, onToggle, icons, index }: { item: NavItem; pathname: string; expanded: boolean; onToggle: () => void; icons: Icons; index: number }) {
  const style = { "--i": index } as CSSProperties;
  const current = isCurrent(pathname, item);
  if (!item.children) {
    return (
      <li className="nh-drawer-item" style={style} data-current={current ? "true" : undefined}>
        <div className="nh-drawer-row">
          <DrawerIcon href={item.href} />
          <Link prefetch={false} className="nh-drawer-link" href={item.href} aria-current={same(pathname, item.href) ? "page" : undefined}>
            {item.label}
          </Link>
          <span className="nh-drawer-chev" aria-hidden="true">›</span>
        </div>
      </li>
    );
  }
  const id = `nh-drawer-${slug(item.label)}`;
  const grid = iconsFor(item, icons);
  return (
    <li className="nh-drawer-item" style={style} data-current={current ? "true" : undefined} data-open={expanded ? "true" : undefined}>
      <div className="nh-drawer-row">
        <DrawerIcon href={item.href} />
        {item.dropdownOnly ? (
          <button type="button" className="nh-drawer-link" aria-expanded={expanded} aria-controls={id} onClick={onToggle}>
            {item.label}
          </button>
        ) : (
          <Link prefetch={false} className="nh-drawer-link" href={item.href} aria-current={same(pathname, item.href) ? "page" : undefined}>
            {item.label}
          </Link>
        )}
        <button
          type="button"
          className="nh-drawer-toggle"
          aria-expanded={expanded}
          aria-controls={id}
          aria-label={`${expanded ? "Hide" : "Show"} ${item.label} pages`}
          tabIndex={item.dropdownOnly ? -1 : undefined}
          onClick={onToggle}
        >
          <Chevron />
        </button>
      </div>
      <div className="nh-drawer-sub" id={id} inert={!expanded}>
        <ul className={grid ? "is-grid" : undefined}>
          {item.children.map((child) => (
            <li key={child.href}>
              <Link prefetch={false} href={child.href} aria-current={same(pathname, child.href) ? "page" : undefined}>
                {grid ? <span className="nh-menu-icon">{icons[child.href]}</span> : <span className="nh-menu-icon" dangerouslySetInnerHTML={{ __html: featureIcons[child.href] ?? menuLotus }} />}
                <span>{child.label}</span>
                <span className="nh-drawer-go" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function Header({ icons = {} }: { icons?: Icons }) {
  const pathname = usePathname() || "/";
  // The menu remembers the page it was opened on, so moving to another page closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  // Which drawer section is expanded; null means "the section of the current page".
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  const currentGroup = nav.find((item) => item.children && isCurrent(pathname, item))?.label ?? "";
  const expandedLabel = expanded ?? currentGroup;

  // A hairline shadow once the page moves under the header.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scrolling only while the drawer is open.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  // Escape closes the drawer, Tab stays inside it, and a wide window closes it.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (document.querySelector("dialog[open]")) return;
      if (event.key === "Tab") {
        const items = Array.from(document.querySelectorAll<HTMLElement>("#mobile-nav a[href], #mobile-nav button:not([tabindex='-1'])")).filter(
          (el) => el.getBoundingClientRect().height > 0 && !el.closest("[inert]"),
        );
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
    // Wait for the drawer's slide-in before moving focus into it.
    const focusTimer = setTimeout(() => document.querySelector<HTMLElement>("#mobile-nav .nh-drawer-close")?.focus({ preventScroll: true }), 320);
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
      <header className={`nh${scrolled ? " is-scrolled" : ""}`}>
        <div className="nh-inner">
          <Link prefetch={false} href="/" className="nh-brand" aria-label="Transformation with NNG, home">
            <img
              src={asset("/images/nng-logo-200.webp")}
              srcSet={assetSet("/images/nng-logo-200.webp 200w, /images/nng-logo-400.webp 400w, /images/nng-logo.webp 800w")}
              sizes="96px"
              width={800}
              height={422}
              alt="Transformation with NNG"
            />
          </Link>

          <nav className="nh-nav" aria-label="Main navigation">
            {nav.map((item) =>
              item.children ? (
                <NavGroup key={item.href} item={item} pathname={pathname} icons={icons} />
              ) : (
                <Link
                  prefetch={false}
                  key={item.href}
                  className="nh-link"
                  href={item.href}
                  data-current={isCurrent(pathname, item) ? "true" : undefined}
                  aria-current={same(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="nh-actions">
            <EnquiryTrigger className="nh-cta" source="header">
              <span>Enquire</span>
              <Arrow />
            </EnquiryTrigger>
            <button
              ref={toggle}
              type="button"
              className="nh-menu-toggle"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpenOn(open ? null : pathname)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nh-backdrop${open ? " is-active" : ""}`} onClick={close} aria-hidden="true" />

      <nav id="mobile-nav" className={`nh-drawer${open ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open} inert={!open}>
        <div className="nh-drawer-head">
          <Link prefetch={false} href="/" onClick={close} className="nh-brand" aria-label="Transformation with NNG, home">
            <img src={asset("/images/nng-logo-200.webp")} width={84} height={44} alt="Transformation with NNG" />
          </Link>
          <button type="button" className="nh-drawer-close" onClick={close} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>

        <p className="nh-drawer-method">{site.method}</p>

        <ul className="nh-drawer-list" onClick={(event) => (event.target as Element).closest("a") && close()}>
          {nav.map((item, index) => (
            <DrawerItem
              key={item.href}
              item={item}
              index={index}
              icons={icons}
              pathname={pathname}
              expanded={expandedLabel === item.label}
              onToggle={() => setExpanded(expandedLabel === item.label ? "" : item.label)}
            />
          ))}
        </ul>

        <div className="nh-drawer-foot">
          <p className="nh-drawer-kicker">Begin with a conversation</p>
          <div onClick={close}>
            <EnquiryTrigger className="nh-cta nh-cta-block" source="mobile-drawer">
              <span>Enquire about a consultation</span>
              <Arrow />
            </EnquiryTrigger>
          </div>
          <span className="nh-drawer-divider" aria-hidden="true" dangerouslySetInnerHTML={{ __html: menuLotus }} />
          <p className="nh-drawer-contact">
            <a href={`mailto:${site.email}`}>
              <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: contactIcons.mail }} />
              {site.email}
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: contactIcons.insta }} />
              Instagram
            </a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
              <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: contactIcons.yt }} />
              YouTube
            </a>
          </p>
        </div>
      </nav>
    </>
  );
}
