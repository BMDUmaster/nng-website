import Link from "next/link";
import { Fragment } from "react";
import { asset } from "@/lib/assets";
import type { HubSlug } from "@/content/offerings/types";
import type { Crumb } from "./Breadcrumbs";

/**
 * The opening for every service hub and service page (Oct 16, after the Brainology redesign): green, the words on the
 * left with four chips for what the practice looks at, her photograph in a tall gold arch on the right with a quote
 * card, and a quiet background animation drawn for the practice (numbers drifting up for numerology, a turning compass
 * for Vastulogy, a zodiac ring and twinkling stars for astrology, sparkles for crystals and stones).
 */
const lotus =
  '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/></svg>';

const ico = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const i = {
  lotus: lotus,
  heart: ico('<path d="M16 27S4 19.6 4 11.6A6.1 6.1 0 0 1 16 9a6.1 6.1 0 0 1 12 2.6C28 19.6 16 27 16 27Z"/>'),
  leaf: ico('<path d="M7 25C7 14 14 7 26 6c0 12-7 19-17 19"/><path d="M7 25 19 13"/>'),
  sun: ico('<circle cx="16" cy="16" r="5.5"/><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M6.8 25.2l2.8-2.8M22.4 9.6l2.8-2.8"/>'),
  brain: ico('<path d="M12 6.5a3.5 3.5 0 0 0-6.6 1.6A3.8 3.8 0 0 0 4 15a3.6 3.6 0 0 0 2 5.6A3.6 3.6 0 0 0 12 24V6.5ZM20 6.5a3.5 3.5 0 0 1 6.6 1.6A3.8 3.8 0 0 1 28 15a3.6 3.6 0 0 1-2 5.6A3.6 3.6 0 0 1 20 24"/><path d="M16 5v22"/>'),
  calendar: ico('<rect x="5" y="7" width="22" height="20" rx="3"/><path d="M5 13h22M11 4v5M21 4v5"/>'),
  name: ico('<rect x="4" y="8" width="24" height="16" rx="3"/><path d="M9 20l3-8 3 8M10 17.5h4M19 12v8M19 12h3a2 2 0 0 1 0 4h-3"/>'),
  phone: ico('<rect x="10" y="4" width="12" height="24" rx="2.5"/><path d="M14.5 24h3"/>'),
  shop: ico('<path d="M5 12h22l-2-6H7Z"/><path d="M7 12v14h18V12M13 26v-7h6v7"/>'),
  compass: ico('<circle cx="16" cy="16" r="11"/><path d="m20.5 11.5-3 6-6 3 3-6z"/>'),
  elements: ico('<path d="M16 4c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10Z"/><path d="M5 26h22"/>'),
  plan: ico('<rect x="5" y="5" width="22" height="22" rx="1"/><path d="M5 15h10V5M15 21h12M20 15v6"/>'),
  home: ico('<path d="M5 15 16 5l11 10"/><path d="M8 13v14h16V13"/><path d="M13 27v-7h6v7"/>'),
  chart: ico('<rect x="4" y="4" width="24" height="24"/><path d="M4 4l24 24M28 4 4 28M16 4 4 16l12 12 12-12Z"/>'),
  clock: ico('<circle cx="16" cy="16" r="11"/><path d="M16 9v7l5 3"/>'),
  chat: ico('<path d="M6 7h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/>'),
  path: ico('<path d="M6 26V20M12 26V16M18 26V12M24 26V8"/>'),
  gem: ico('<path d="M9 5h14l5 7-12 15L4 12Z"/><path d="M4 12h24M12 5l-3 7 7 15 7-15-3-7"/>'),
};
type Value = { title: string; text: string; icon: string };
const looks: Record<HubSlug, { photo: string; mPhoto?: string; w: number; h: number; values: Value[] }> = {
  "brain-training": { photo: "/images/brainology-hero.webp", w: 900, h: 1568, values: [
    { title: "Patterns", text: "What keeps repeating", icon: i.brain },
    { title: "Thoughts", text: "What runs through the mind", icon: i.chat },
    { title: "Beliefs", text: "What sits underneath", icon: i.leaf },
    { title: "Situations", text: "Where it shows up", icon: i.sun },
  ] },
  numerology: { photo: "/images/program-narayani.webp", w: 1000, h: 1265, values: [
    { title: "Date of birth", text: "Your personal numbers", icon: i.calendar },
    { title: "Name", text: "Its spelling and sound", icon: i.name },
    { title: "Mobile & home", text: "Numbers you live with", icon: i.phone },
    { title: "Business", text: "Names, logos and dates", icon: i.shop },
  ] },
  vastu: { photo: "/images/consult-hero.webp", w: 944, h: 1300, values: [
    { title: "Directions", text: "How the space is placed", icon: i.compass },
    { title: "Elements", text: "Balance in the space", icon: i.elements },
    { title: "Layout", text: "Rooms, doors and flow", icon: i.plan },
    { title: "Daily use", text: "How you live in it", icon: i.home },
  ] },
  astrology: { photo: "/images/faq-narayani.webp", w: 760, h: 964, values: [
    { title: "Birth chart", text: "Read around your question", icon: i.chart },
    { title: "Timing", text: "Periods and transits", icon: i.clock },
    { title: "Your question", text: "What you want to know", icon: i.chat },
    { title: "Choices", text: "The next step to take", icon: i.path },
  ] },
  "stones-and-rudraksh": { photo: "/images/narayani-portrait-684.webp", w: 684, h: 1000, values: [
    { title: "Crystals", text: "Meanings and care", icon: i.gem },
    { title: "Gemstones", text: "Traditional guidance", icon: i.gem },
    { title: "Rudraksha", text: "Faces and wearing", icon: i.lotus },
    { title: "Guidance", text: "Before you choose", icon: i.heart },
  ] },
};

function Backdrop({ hub }: { hub: HubSlug }) {
  if (hub === "numerology") {
    const digits = ["1", "7", "3", "9", "5", "2", "8", "4", "6", "1", "9", "3"];
    return (
      <div className="sh-digits" aria-hidden="true">
        {digits.map((d, i) => (
          <span key={i} style={{ left: `${(i * 37 + 4) % 96}%`, fontSize: `${20 + ((i * 7) % 26)}px`, animationDuration: `${9 + ((i * 7) % 5)}s`, animationDelay: `${-i * 1.1}s` }}>{d}</span>
        ))}
      </div>
    );
  }
  if (hub === "vastu") {
    const ticks = Array.from({ length: 32 }, (_, i) => i);
    return (
      <svg className="sh-compass" viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="150" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="104" />
        {ticks.map((i) => (
          <line key={i} x1="200" y1={i % 4 ? 14 : 4} x2="200" y2="30" transform={`rotate(${i * 11.25} 200 200)`} />
        ))}
        <path d="M200 40 214 186 200 200 186 186Z M200 360 214 214 200 200 186 214Z M40 200 186 186 200 200 186 214Z M360 200 214 186 200 200 214 214Z" />
        <path className="sh-compass-n" d="M200 40 214 186 200 200 186 186Z" />
        <rect x="128" y="128" width="144" height="144" transform="rotate(45 200 200)" />
      </svg>
    );
  }
  if (hub === "astrology") {
    const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
    return (
      <>
        <svg className="sh-zodiac" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="194" />
          <circle cx="200" cy="200" r="160" />
          {signs.map((s, i) => (
            <g key={s} transform={`rotate(${i * 30} 200 200)`}>
              <line x1="200" y1="6" x2="200" y2="40" />
              <text x="200" y="30" transform="rotate(15 200 200)">{s + "︎"}</text>
            </g>
          ))}
        </svg>
        <div className="sh-stars" aria-hidden="true">
          {Array.from({ length: 14 }, (_, i) => <span key={i} style={{ left: `${(i * 37 + 3) % 97}%`, top: `${(i * 23 + 5) % 92}%`, animationDuration: `${3 + ((i * 4) % 25) / 10}s`, animationDelay: `${-i * 0.6}s` }} />)}
        </div>
      </>
    );
  }
  if (hub === "stones-and-rudraksh") {
    return (
      <div className="sh-stars sh-gems" aria-hidden="true">
        {Array.from({ length: 16 }, (_, i) => <span key={i} style={{ left: `${(i * 41 + 3) % 97}%`, top: `${(i * 29 + 5) % 92}%`, animationDuration: `${3 + ((i * 4) % 25) / 10}s`, animationDelay: `${-i * 0.6}s` }} />)}
      </div>
    );
  }
  if (hub === "brain-training") {
    return (
    <svg className="bh-neural" viewBox="0 0 600 640" aria-hidden="true">
      <path className="bh-links" d="M548 299L502 249 M548 299L581 256 M548 299L573 362 M63 197L8 139 M63 197L76 271 M63 197L14 230 M61 513L18 576 M61 513L74 565 M413 34L317 45 M413 34L461 55 M582 610L567 537 M582 610L502 570 M100 17L177 52 M100 17L90 101 M100 17L31 46 M317 45L227 69 M26 297L51 401 M26 297L76 271 M26 297L52 349 M26 297L14 230 M177 52L227 69 M502 249L535 205 M567 537L571 481 M567 537L522 505 M567 537L502 570 M8 139L90 101 M581 256L535 205 M51 401L52 349 M571 481L581 418 M571 481L522 505 M76 271L14 230 M507 409L581 418 M507 409L573 362 M67 625L18 576 M67 625L74 565 M544 135L562 62 M544 135L535 205 M581 418L573 362 M18 576L74 565 M518 34L562 62 M518 34L461 55 M522 505L502 570 M90 101L31 46" />
      <path className="bh-pulse" style={{ animationDelay: "0.00s" }} d="M548 299L502 249" />
      <path className="bh-pulse" style={{ animationDelay: "1.23s" }} d="M63 197L8 139" />
      <path className="bh-pulse" style={{ animationDelay: "2.46s" }} d="M61 513L18 576" />
      <path className="bh-pulse" style={{ animationDelay: "3.69s" }} d="M413 34L461 55" />
      <path className="bh-pulse" style={{ animationDelay: "4.92s" }} d="M100 17L177 52" />
      <path className="bh-pulse" style={{ animationDelay: "0.15s" }} d="M317 45L227 69" />
      <path className="bh-pulse" style={{ animationDelay: "1.38s" }} d="M26 297L52 349" />
      <path className="bh-pulse" style={{ animationDelay: "2.61s" }} d="M502 249L535 205" />
      <path className="bh-pulse" style={{ animationDelay: "3.84s" }} d="M567 537L502 570" />
      <path className="bh-pulse" style={{ animationDelay: "5.07s" }} d="M51 401L52 349" />
      <path className="bh-pulse" style={{ animationDelay: "0.30s" }} d="M76 271L14 230" />
      <path className="bh-pulse" style={{ animationDelay: "1.53s" }} d="M67 625L18 576" />
      <path className="bh-pulse" style={{ animationDelay: "2.76s" }} d="M544 135L535 205" />
      <path className="bh-pulse" style={{ animationDelay: "3.99s" }} d="M518 34L562 62" />
      <path className="bh-pulse" style={{ animationDelay: "5.22s" }} d="M90 101L31 46" />
      <circle className="bh-node" style={{ animationDelay: "0.00s" }} cx="548" cy="299" r="4" />
      <circle className="bh-node" style={{ animationDelay: "0.53s" }} cx="63" cy="197" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "1.06s" }} cx="61" cy="513" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "1.59s" }} cx="413" cy="34" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "2.12s" }} cx="582" cy="610" r="4" />
      <circle className="bh-node" style={{ animationDelay: "2.65s" }} cx="100" cy="17" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "3.18s" }} cx="317" cy="45" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "3.71s" }} cx="26" cy="297" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "4.24s" }} cx="177" cy="52" r="4" />
      <circle className="bh-node" style={{ animationDelay: "4.77s" }} cx="502" cy="249" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "0.30s" }} cx="567" cy="537" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "0.83s" }} cx="8" cy="139" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "1.36s" }} cx="581" cy="256" r="4" />
      <circle className="bh-node" style={{ animationDelay: "1.89s" }} cx="51" cy="401" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "2.42s" }} cx="571" cy="481" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "2.95s" }} cx="76" cy="271" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "3.48s" }} cx="507" cy="409" r="4" />
      <circle className="bh-node" style={{ animationDelay: "4.01s" }} cx="67" cy="625" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "4.54s" }} cx="544" cy="135" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "0.07s" }} cx="581" cy="418" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "0.60s" }} cx="18" cy="576" r="4" />
      <circle className="bh-node" style={{ animationDelay: "1.13s" }} cx="52" cy="349" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "1.66s" }} cx="518" cy="34" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "2.19s" }} cx="522" cy="505" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "2.72s" }} cx="90" cy="101" r="4" />
      <circle className="bh-node" style={{ animationDelay: "3.25s" }} cx="562" cy="62" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "3.78s" }} cx="502" cy="570" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "4.31s" }} cx="535" cy="205" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "4.84s" }} cx="14" cy="230" r="4" />
      <circle className="bh-node" style={{ animationDelay: "0.37s" }} cx="227" cy="69" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "0.90s" }} cx="573" cy="362" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "1.43s" }} cx="74" cy="565" r="2.6" />
      <circle className="bh-node" style={{ animationDelay: "1.96s" }} cx="31" cy="46" r="4" />
      <circle className="bh-node" style={{ animationDelay: "2.49s" }} cx="461" cy="55" r="2.6" />
    </svg>
    );
  }
  return null;
}

export function ServiceHero({
  trail,
  kicker,
  title,
  lead,
  actions,
  note,
  hub = "astrology",
}: {
  trail: Crumb[];
  kicker: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  actions: React.ReactNode;
  note?: React.ReactNode;
  hub?: HubSlug;
}) {
  const look = looks[hub];
  if (hub === "brain-training") {
    return (
      <section className="bx" aria-labelledby="page-title">
        <span className="bx-blur bx-blur-l" aria-hidden="true" />
        <div className="bx-photo" aria-hidden="true">
          <span className="bx-ring bx-ring-1" />
          <span className="bx-ring bx-ring-2" />
          <div className="bx-photo-clip">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/brainology-room.webp")} alt="" width={2000} height={1280} fetchPriority="high" />
          </div>
          <span className="bx-vine" />
        </div>
        <span className="bx-blur bx-blur-r" aria-hidden="true" />
        <div className="bx-inner">
          <div className="bx-copy">
            <div className="svh-anim bx-anim" aria-hidden="true"><Backdrop hub={hub} /></div>
            <nav className="cn-crumbs bx-crumbs" aria-label="Breadcrumb">
              {trail.map((crumb, n) => (
                <Fragment key={crumb.label}>
                  {n > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? <Link prefetch={false} href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                </Fragment>
              ))}
            </nav>
            <p className="bx-kicker">
              <span className="bx-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />
              {kicker}
              <span className="bx-kicker-line" aria-hidden="true" />
            </p>
            <h1 id="page-title">{title}</h1>
            <span className="bx-rule" aria-hidden="true" />
            <p className="bx-lead">{lead}</p>
            <div className="bx-actions sh-actions">{actions}</div>
            <ul className="bx-info">
              <li>
                <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: i.calendar }} />
                Format, duration and fees to be confirmed with the team.
              </li>
              <li>
                <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: ico('<circle cx="16" cy="10" r="4"/><path d="M8 25c0-4.4 3.6-8 8-8s8 3.6 8 8"/><circle cx="7.5" cy="13" r="2.8"/><circle cx="24.5" cy="13" r="2.8"/><path d="M2.5 24c0-3 2.2-5.4 5-5.4M29.5 24c0-3-2.2-5.4-5-5.4"/>') }} />
                1:1 Guidance with Narayani
              </li>
            </ul>
          </div>
        </div>
        <ul className="bx-values" aria-label="What she looks at">
          {look.values.map((v) => (
            <li key={v.title}>
              <span className="bx-v-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: v.icon }} />
              <span>
                <strong>{v.title}</strong>
                <small>{v.text}</small>
              </span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return (
    <section className={`svh svh-svc sh-${hub}`} aria-labelledby="page-title">
      <div className="svh-inner">
        <div className="svh-copy">
          <div className="svh-anim" aria-hidden="true"><Backdrop hub={hub} /></div>
          <nav className="cn-crumbs svh-crumbs" aria-label="Breadcrumb">
            {trail.map((crumb, n) => (
              <Fragment key={crumb.label}>
                {n > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? <Link prefetch={false} href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              </Fragment>
            ))}
          </nav>
          <p className="svh-kicker">
            <span className="svh-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />
            {kicker}
          </p>
          <h1 id="page-title">{title}</h1>
          <span className="svh-rule" aria-hidden="true" />
          <p className="svh-lead">{lead}</p>
          <div className="svh-actions sh-actions">{actions}</div>
          {note}
        </div>
        <div className="svh-visual">
          <span className="svh-frame" aria-hidden="true" />
          <span className="svh-sprig svh-sprig-1" aria-hidden="true" />
          <span className="svh-sprig svh-sprig-2" aria-hidden="true" />
          <span className="svh-photo-leaves" aria-hidden="true" />
          <div className="svh-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(look.photo)} alt="Narayani Garg" width={look.w} height={look.h} fetchPriority="high" />
          </div>
          <p className="svh-badge">
            <span className="svh-badge-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />
            <span>Narayani Garg</span>
            <small>Personal guidance</small>
          </p>
        </div>
      </div>
      <span className="svh-blur-leaf" aria-hidden="true" />
      <ul className="svh-values" aria-label="What she looks at">
        {look.values.map((v) => (
          <li key={v.title}>
            <span className="svh-v-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: v.icon }} />
            <span>
              <strong>{v.title}</strong>
              <small>{v.text}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HeroArrow() {
  return (
    <span className="cn-arrow" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6h7M6.5 3l3 3-3 3" />
      </svg>
    </span>
  );
}
