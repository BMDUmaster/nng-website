import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { FeeOptions } from "@/components/offerings/FeeOptions";
import { Icon } from "@/components/icons/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { feesPublic } from "@/content/consultation";
import { areas, areaTopics, legal, site } from "@/content/site";
import { asset, assetSet } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Personal consultation with Dr. Narayani Garg",
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
      <section className="cn-hero" aria-labelledby="page-title">
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
              You do not need to choose a practice first. Bring your question. Narayani considers your circumstances and thought patterns, with astrology, numerology or Vastu where relevant.
            </p>
            <div className="cn-actions">
              <EnquiryTrigger className="cn-cta" source="consultations-hero" primary>
                <span>Enquire about a consultation</span>
                <Arrow />
              </EnquiryTrigger>
              <a className="cn-ghost" href="#fees">
                See session options
              </a>
            </div>
            <ul className="cn-formats" aria-label="Online, including from abroad, or in person by appointment">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                Online, including from abroad
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                In person by appointment
              </li>
            </ul>
          </div>
          <div className="cn-hero-visual" data-reveal="">
            <div className="cn-arch">
              <picture>
                <source type="image/avif" srcSet={assetSet("/images/narayani-portrait-480.avif 480w, /images/narayani-portrait-684.avif 684w")} sizes="(max-width: 900px) 62vw, 380px" />
                <img src={asset("/images/narayani-portrait-684.webp")} alt={`Dr. Narayani Garg, ${site.title}`} width={684} height={1000} fetchPriority="high" />
              </picture>
            </div>
            <p className="cn-badge">
              <span>Dr. Narayani Garg</span>
              <small>Personal guidance</small>
            </p>
          </div>
        </div>
      </section>

      <nav className="cn-chips" aria-label="Plan your consultation">
        <div className="cn-chips-inner">
          {chips.map((chip) => (
            <a key={chip.id} href={`#${chip.id}`}>
              {chip.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="cn-sec cn-begin" id="choose" aria-labelledby="choose-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Where to begin</p>
            <h2 id="choose-title">Begin with one question</h2>
            <p>Choose an area below, or ask the team to help you find a starting point.</p>
          </header>
          <ul className="cn-areas">
            {areas.map((area, i) => (
              <li key={area} className="cn-area" data-reveal="" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
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
              I am not sure where to begin
            </EnquiryTrigger>
            <Link prefetch={false} className="cn-text" href="/services/">
              Explore the practices <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="cn-disclaimer">{legal.disclaimer}</p>
        </div>
      </section>

      {feesPublic ? (
        <FeeOptions topic="a personal consultation" source="consultations-fees" />
      ) : (
        <section className="cn-sec cn-fees" id="fees" aria-labelledby="fees-title">
          <div className="cn-inner">
            <div className="cn-fees-card" data-reveal="">
              <div className="cn-fees-icon" aria-hidden="true">
                <Icon id="gen-fees" />
              </div>
              <div className="cn-fees-copy">
                <p className="cn-kicker cn-kicker-dark">Options and fees</p>
                <h2 id="fees-title">Discuss your consultation options</h2>
                <p>Format, duration and fees are being finalised. Ask the team about the service you need before you book.</p>
              </div>
              <EnquiryTrigger className="cn-cta" topic="a personal consultation" source="consultations-fees">
                <span>Ask about options and fees</span>
                <Arrow />
              </EnquiryTrigger>
            </div>
          </div>
        </section>
      )}

      <section className="cn-sec cn-how" id="how" aria-labelledby="how-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">How it works</p>
            <h2 id="how-title">From your question to an appointment</h2>
            <p>An enquiry starts a conversation with the team. It does not book or pay for a session.</p>
          </header>
          <ol className="cn-steps" data-reveal="">
            {steps.map((step, i) => (
              <li key={step.title} style={{ "--d": `${200 + i * 220}ms` } as React.CSSProperties}>
                <span className="cn-step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="cn-how-foot" data-reveal="">
            <EnquiryTrigger className="cn-cta" source="consultations-how">
              <span>Speak to the team</span>
              <Arrow />
            </EnquiryTrigger>
            <Link prefetch={false} className="cn-text" href="/contact/">
              Call or email instead <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cn-sec cn-support" id="support" aria-labelledby="support-title">
        <div className="cn-inner">
          <div className="cn-support-card" data-reveal="">
            <div className="cn-support-copy">
              <p className="cn-kicker">Ongoing support</p>
              <h2 id="support-title">A session or ongoing support?</h2>
              <p>
                Start with a consultation for the question in front of you. If you want to keep working on your habits and choices, explore the Personalised Hand Holding Program.
              </p>
              <div className="cn-actions">
                <Link prefetch={false} className="cn-cta" href="/hand-holding-program/">
                  <span>Explore the Hand Holding Program</span>
                  <Arrow />
                </Link>
                <Link prefetch={false} className="cn-ghost" href="/about/">
                  Get to know Narayani
                </Link>
              </div>
            </div>
            <div className="cn-support-visual">
              <img src={asset("/images/approach-narayani-900.webp")} alt="" width={900} height={768} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
      <Reveal />
    </div>
  );
}
