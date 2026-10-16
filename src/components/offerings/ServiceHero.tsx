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

const looks: Record<HubSlug, { photo: string; w: number; h: number; steps: string[]; quote: string }> = {
  "brain-training": { photo: "/images/about-hero.webp", w: 900, h: 1255, steps: ["Patterns", "Thoughts", "Beliefs", "Situations"], quote: "A remedy works when the mind works." },
  numerology: { photo: "/images/program-narayani.webp", w: 1000, h: 1265, steps: ["Date of birth", "Name", "Mobile & home", "Business"], quote: "When you change your mind, you change your world." },
  vastu: { photo: "/images/consult-hero.webp", w: 944, h: 1300, steps: ["Directions", "Elements", "Layout", "Daily use"], quote: "Even a vastu remedy only works when your brain is working." },
  astrology: { photo: "/images/faq-narayani.webp", w: 760, h: 964, steps: ["Birth chart", "Timing", "Your question", "Choices"], quote: "The spirit who is doing a ritual is spiritual." },
  "stones-and-rudraksh": { photo: "/images/narayani-portrait-684.webp", w: 684, h: 1000, steps: ["Crystals", "Gemstones", "Rudraksha", "Guidance"], quote: "A remedy works when the mind works." },
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
  return (
    <section className={`bh sh sh-${hub}`} aria-labelledby="page-title">
      <span className="bh-leaf" aria-hidden="true" />
      <div className="bh-inner">
        <div className="bh-copy">
          <nav className="cn-crumbs bh-crumbs" aria-label="Breadcrumb">
            {trail.map((crumb, i) => (
              <Fragment key={crumb.label}>
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? <Link prefetch={false} href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              </Fragment>
            ))}
          </nav>
          <p className="bh-kicker"><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />{kicker}</p>
          <h1 id="page-title">{title}</h1>
          <p className="bh-lead">{lead}</p>
          <ol className="bh-steps" aria-label="What she looks at">
            {look.steps.map((step, i) => <li key={step}><span>{i + 1}</span>{step}</li>)}
          </ol>
          <div className="bh-actions sh-actions">{actions}</div>
          {note}
        </div>
        <div className="bh-visual">
          <span className="bh-ring" aria-hidden="true" />
          <Backdrop hub={hub} />
          <div className="bh-arch">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(look.photo)} alt="Narayani Garg" width={look.w} height={look.h} fetchPriority="high" />
          </div>
          <figure className="bh-quote">
            <span aria-hidden="true">“</span>
            <blockquote><p>{look.quote}</p></blockquote>
            <figcaption>Narayani Garg</figcaption>
          </figure>
        </div>
      </div>
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
