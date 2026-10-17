import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { FeeOptions } from "@/components/offerings/FeeOptions";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { feesPublic } from "@/content/consultation";
import { areas, areaTopics, site } from "@/content/site";
import { asset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Personal consultation with Narayani Garg",
  description: "Choose an online or in-person consultation with Narayani Garg. Explore session options, fees, how to begin and ongoing personal guidance.",
  alternates: { canonical: "/consultations/" },
};

const concerns = {
  Health: "Your wellbeing, stress patterns and everyday habits",
  Relationship: "A relationship question or a pattern that keeps repeating",
  Career: "A career decision, change or question about direction",
  Money: "Your approach to money and the decisions around it",
} as const;
const concernIcons = {
  Health: "page-health-and-wellbeing",
  Relationship: "group-relationships",
  Career: "page-career-and-business",
  Money: "work-finance",
} as const;

const steps = [
  { title: "Share your question", text: "Tell the team what is on your mind and what you have tried." },
  { title: "Confirm the details", text: "Agree on format, duration, availability and fee before booking. For online sessions, share your country and time zone." },
  { title: "Meet Narayani", text: "Attend your appointment online or in person." },
  { title: "Decide what comes next", text: "Discuss your next steps and whether ongoing guidance would suit you." },
];

const chips = [
  { id: "choose", label: "Where to begin" },
  { id: "fees", label: "Options and fees" },
  { id: "how", label: "How it works" },
  { id: "support", label: "Ongoing support" },
];

const cxIcon = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const cxPractices = [
  { name: "Numerology", note: "Understand your patterns", icon: '<svg viewBox="0 0 32 32"><text x="16" y="17" text-anchor="middle" dominant-baseline="central" fill="currentColor" font-size="11" font-family="serif">123</text></svg>' },
  { name: "Vastulogy", note: "Harmonise your space and energy", icon: cxIcon('<path d="M4 15 16 5l12 10"/><path d="M7 13v14h18V13"/><path d="M13 27v-8h6v8"/>') },
  { name: "Astrology", note: "Clarity in life situations", icon: cxIcon('<path d="M16 3c.9 6.8 6.2 12.1 13 13-6.8.9-12.1 6.2-13 13-.9-6.8-6.2-12.1-13-13 6.8-.9 12.1-6.2 13-13Z"/>') },
  { name: "Psychic Mentor", note: "Support for mind and life", icon: cxIcon('<path d="M16 27S4 19.6 4 11.6A6.1 6.1 0 0 1 16 9a6.1 6.1 0 0 1 12 2.6C28 19.6 16 27 16 27Z"/>') },
];

const chipIcons: Record<string, string> = {
  choose: cxIcon('<circle cx="16" cy="16" r="11"/><path d="m20.5 11.5-3 6-6 3 3-6z"/>'),
  fees: cxIcon('<rect x="5" y="7" width="22" height="20" rx="3"/><path d="M5 13h22M11 4v5M21 4v5"/>'),
  how: cxIcon('<path d="M6 26V20M12 26V16M18 26V12M24 26V8"/>'),
  support: cxIcon('<path d="M16 27S4 19.6 4 11.6A6.1 6.1 0 0 1 16 9a6.1 6.1 0 0 1 12 2.6C28 19.6 16 27 16 27Z"/>'),
};
const feePoints = [
  { title: "Flexible Formats", text: "Online or in person", icon: cxIcon('<rect x="5" y="7" width="22" height="20" rx="3"/><path d="M5 13h22M11 4v5M21 4v5"/><path d="M10 18h2M15 18h2M20 18h2M10 22h2M15 22h2" stroke-width="2"/>') },
  { title: "Custom Duration", text: "Choose as per your need", icon: cxIcon('<circle cx="16" cy="16" r="11"/><path d="M16 9v7l5 3"/>') },
  { title: "Transparent Fees", text: "Get details before you book", icon: cxIcon('<path d="M9 7h14M9 12h14M9 7c7 0 9 2 9 5s-3 5-9 5l10 9"/>') },
];
const lotusSvg = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"><path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/></svg>';
const supportPoints = [
  { title: "Psychic Mentor", text: "One-on-one support", icon: cxIcon('<circle cx="16" cy="10" r="4"/><path d="M8 25c0-4.4 3.6-8 8-8s8 3.6 8 8"/><circle cx="7.5" cy="13" r="2.8"/><circle cx="24.5" cy="13" r="2.8"/><path d="M2.5 24c0-3 2.2-5.4 5-5.4M29.5 24c0-3-2.2-5.4-5-5.4"/>') },
  { title: "Long-term Support", text: "For your growth journey", icon: cxIcon('<path d="M7 25C7 14 14 7 26 6c0 12-7 19-17 19"/><path d="M7 25 19 13"/>') },
  { title: "Compassionate Approach", text: "A safe and supportive space", icon: cxIcon('<path d="M16 27S4 19.6 4 11.6A6.1 6.1 0 0 1 16 9a6.1 6.1 0 0 1 12 2.6C28 19.6 16 27 16 27Z"/>') },
];
const stepIcons = [
  cxIcon('<path d="M6 7h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><path d="M11 15h.01M16 15h.01M21 15h.01" stroke-width="2.6"/>'),
  cxIcon('<path d="M9 4h10l6 6v18H9z"/><path d="M19 4v6h6M13 15h8M13 19h8M13 23h5"/>'),
  cxIcon('<rect x="5" y="7" width="22" height="20" rx="3"/><path d="M5 13h22M11 4v5M21 4v5"/><path d="M10 18h2M15 18h2M20 18h2M10 22h2M15 22h2" stroke-width="2"/>'),
  cxIcon('<path d="M6 26V20M12 26V16M18 26V12M24 26V8M18 6h6v6"/>'),
];

function Arrow() {
  return (
    <span className="cn-arrow" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6h7M6.5 3l3 3-3 3" />
      </svg>
    </span>
  );
}

/**
 * The consultation page: a plum opening with her portrait, then where to begin, options and fees, how an enquiry
 * becomes an appointment, and ongoing support. Sections rise in once as they come into view.
 */
export default function ConsultationsPage() {
  return (
    <div className="cn">
      <section className="cn-hero cx-hero" aria-labelledby="page-title">
        <div className="cn-hero-inner">
          <div className="cn-hero-copy" data-reveal="">
            <nav className="cn-crumbs" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Consultation</span>
            </nav>
            <p className="cn-kicker">Personal consultation</p>
            <h1 id="page-title">
              Start with what is <em>on your mind</em>
            </h1>
            <p className="cn-lead">
              <span className="cx-long">You do not need to choose a practice first. Bring your question. Narayani considers your circumstances and thought patterns, with numerology, Vastulogy or astrology where relevant.</span>
              <span className="cx-short">No need to choose a practice first. Just bring your question.</span>
            </p>
            <div className="cn-actions">
              <EnquiryTrigger className="cn-cta" source="consultations-hero" primary>
                <span className="cx-long">Enquire about a consultation</span>
                <span className="cx-short">Enquire now</span>
                <Arrow />
              </EnquiryTrigger>
              <a className="cn-ghost" href="#fees">
                <span className="cx-long">See session options</span>
                <span className="cx-short">Session options</span>
                <span className="cx-ghost-arrow" aria-hidden="true">→</span>
              </a>
            </div>
            <ul className="cn-formats" aria-label="Online, including from abroad, or in person by appointment">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                Online
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                In person
              </li>
            </ul>
            <ul className="cx-practices" aria-label="What she works with">
              {cxPractices.map((p) => (
                <li key={p.name}>
                  <span className="cx-p-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: p.icon }} />
                  <strong>{p.name}</strong>
                  <small>{p.note}</small>
                </li>
              ))}
            </ul>
            <p className="cx-quote">A safe space to ask, understand and move forward with clarity.</p>
          </div>
          <div className="cn-hero-visual cx-visual" data-reveal="">
            <div className="cx-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/consult-hero.webp")} alt={`Narayani Garg, ${site.title}`} width={944} height={1300} fetchPriority="high" />
            </div>
            <p className="cn-badge cx-badge">
              <span>Narayani Garg</span>
              <small>Psychic mentor</small>
            </p>
          </div>
        </div>
      </section>

      <nav className="cn-chips" aria-label="Plan your consultation">
        <div className="cn-chips-inner">
          {chips.map((chip) => (
            <a key={chip.id} href={`#${chip.id}`}>
              <span className="cn-chip-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: chipIcons[chip.id] }} />
              {chip.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="cn-sec cn-begin cb" id="choose" aria-labelledby="choose-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Where to begin</p>
            <h2 id="choose-title">
              Begin with <em>one question</em>
            </h2>
            <p>Choose an area below, or ask the team to help you find a starting point.</p>
          </header>
          <ul className="cn-areas">
            {areas.map((area, i) => (
              <li key={area} className="cn-area" data-reveal="" style={{ "--d": `${i * 80}ms`, "--art": `url(${asset(`/images/area2-${area.toLowerCase()}.webp`)})` } as React.CSSProperties}>
                <span className="cn-area-icon">
                  <Icon id={concernIcons[area]} />
                </span>
                <h3>{area}</h3>
                <p>{concerns[area]}</p>
                <EnquiryTrigger className="cn-area-link" topic={areaTopics[area]} source={`consultations-${area.toLowerCase()}`}>
                  Ask about {area.toLowerCase()} <span aria-hidden="true">→</span>
                </EnquiryTrigger>
              </li>
            ))}
          </ul>
          <div className="cn-begin-foot" data-reveal="">
            <EnquiryTrigger className="cn-ghost cn-ghost-dark" topic="choosing the right service" source="consultations-unsure">
              <span className="cx-long">I am not sure where to begin</span>
              <span className="cx-short">Not sure? Ask</span>
            </EnquiryTrigger>
            <Link prefetch={false} className="cn-text cb-explore" href="/services/">
              <span className="cx-long">Explore the practices</span>
              <span className="cx-short">Practices</span> <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {feesPublic ? (
        <FeeOptions topic="a personal consultation" source="consultations-fees" />
      ) : (
        <section className="cn-sec cn-fees" id="fees" aria-labelledby="fees-title">
          <div className="cn-inner">
            <div className="cn-fees-card cf2" data-reveal="">
              <div className="cn-fees-copy">
                <p className="cn-kicker cn-kicker-dark">Options and fees</p>
                <h2 id="fees-title">
                  Discuss your <em>consultation</em> options
                </h2>
                <p>Format, duration and fees are being finalised. Ask the team about the service you need before you book.</p>
              </div>
              <div className="cf2-mid">
                <ul className="cf2-points">
                  {feePoints.map((f) => (
                    <li key={f.title}>
                      <span className="cf2-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: f.icon }} />
                      <strong>{f.title}</strong>
                      <small>{f.text}</small>
                    </li>
                  ))}
                </ul>
                <EnquiryTrigger className="cn-cta cf2-cta" topic="a personal consultation" source="consultations-fees">
                  <span>Ask about options and fees</span>
                  <Arrow />
                </EnquiryTrigger>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="cf2-art" src={asset("/images/fees-calendar.webp")} alt="" width={508} height={390} loading="lazy" aria-hidden="true" />
            </div>
          </div>
        </section>
      )}

      <section className="cn-sec sv-how hw cx-how" id="how" aria-labelledby="how-title">
        <span className="hw-leaf hw-leaf-l" aria-hidden="true" />
        <span className="hw-leaf hw-leaf-r" aria-hidden="true" />
        <div className="cn-inner">
          <header className="hw-head" data-reveal="">
            <span className="hw-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
            <p className="hw-kicker">How it works</p>
            <h2 id="how-title">
              From your question to an <em>appointment</em>
            </h2>
            <p className="hw-lead">An enquiry starts a conversation with the team. It does not book or pay for a session.</p>
          </header>
          <ol className="hw-steps" data-reveal="">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className="hw-num">{String(i + 1).padStart(2, "0")}</span>
                {i < steps.length - 1 && <span className="hw-arrow" aria-hidden="true">→</span>}
                <div className="hw-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(`/images/how-step-${i + 1}.webp`)} alt="" width={740} height={444} loading="lazy" />
                </div>
                <span className="hw-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: stepIcons[i] }} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="hw-rule" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="cx-how-foot" data-reveal="">
            <EnquiryTrigger className="cx-how-cta" source="consultations-how">
              <span>Speak to the team</span>
              <span className="bt-go" aria-hidden="true">→</span>
            </EnquiryTrigger>
            <Link prefetch={false} className="cx-how-link" href="/contact/">
              Call or email instead <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cn-sec cn-support cs" id="support" aria-labelledby="support-title">
        <div className="cn-inner">
          <div className="cs-card" data-reveal="">
            <span className="cs-lotus-art" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
            <div className="cs-copy">
              <p className="cn-kicker cs-kicker"><span className="cs-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />Ongoing support</p>
              <h2 id="support-title">A session or <br /><em>ongoing</em> support?</h2>
              <p className="cs-lead">
                Start with a consultation for the question in front of you. If you want to keep working on your habits and choices, explore the Personalised Hand Holding Program.
              </p>
              <div className="cs-actions">
                <Link prefetch={false} className="cs-cta" href="/hand-holding-program/">
                  <span>Explore the Hand Holding Program</span>
                  <span className="cs-go" aria-hidden="true">→</span>
                </Link>
                <Link prefetch={false} className="cs-ghost" href="/about/">
                  Get to know Narayani <span aria-hidden="true">→</span>
                </Link>
              </div>
              <ul className="cs-points">
                {supportPoints.map((f) => (
                  <li key={f.title}>
                    <span className="cs-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: f.icon }} />
                    <span>
                      <strong>{f.title}</strong>
                      <small>{f.text}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cs-photo">
              <img src={asset("/images/support-narayani.webp")} alt="Narayani Garg" width={924} height={1400} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
      <Reveal />
    </div>
  );
}
