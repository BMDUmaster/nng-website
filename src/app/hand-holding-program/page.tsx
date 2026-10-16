import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { PracticeReturnPrompt } from "@/components/enquiry/PracticeReturnPrompt";
import { HomeFaq } from "@/components/sections/HomeLower";
import { StoryFilms } from "@/components/sections/StoryFilms";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/content/faq";
import { addedFilms, voicePoster, voices } from "@/content/voices";
import { asset } from "@/lib/assets";
import { faqSchema, personSchema, programSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Personalised Hand Holding Program",
  description:
    "Six months of personal guidance with Narayani Garg, combining numerology, Vastulogy, astrology and psychic guidance across health, relationships, money and career.",
  alternates: { canonical: "/hand-holding-program/" },
};

const inclusions = [
  "Numerology, Vastulogy and astrology assessment",
  "Psychic guidance for recurring patterns",
  "Direct guidance across health, relationships, money and career",
];

const forYou = [
  "The same pattern keeps returning, in more than one area of life.",
  "A big decision is coming, and you want steady guidance through it.",
  "You want space to revisit a decision after the first conversation.",
  "Your question affects people close to you.",
];

// Scope: NNG Consultation and Mentorship Packages PDF (1 Sep 2026), reviewed 30 Sep.
// It does not specify call cadence, message channel or response time.
const months = [
  { title: "Understand the whole picture", text: "Review your questions alongside your birth chart, numbers and living or work spaces, where relevant." },
  { title: "Work on the patterns behind them", text: "Psychic guidance brings the focus back to your thinking and choices across health, relationships, money and career." },
  { title: "Stay with the work", text: "The program includes direct handholding and ongoing strategic guidance over six months." },
  { title: "Choose the right format", text: "Individual and couple formats are available. The team explains the scope and contact arrangements before you decide." },
];

const areas = ["Health", "Relationship", "Money", "Career"];

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
 * The six-month program: a plum opening with her portrait and the six-month medal, who it is for, how the months
 * work, a consultation compared with the program, client films and questions.
 */
export default function ProgramPage() {
  const navleen = voices.navleen;
  return (
    <div className="cn hh">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), programSchema(), faqSchema(faqs.program)] }} />
      <PracticeReturnPrompt />

      <section className="cn-hero" aria-labelledby="page-title">
        <div className="cn-hero-inner">
          <div className="cn-hero-copy" data-reveal="">
            <nav className="cn-crumbs" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Hand Holding Program</span>
            </nav>
            <p className="cn-kicker">Six months of personal guidance</p>
            <h1 id="page-title">
              Personalised <em>Hand Holding</em> Program
            </h1>
            <p className="svd-person hh-person">
              <img src={asset("/images/narayani-cover-portrait-96.webp")} width={44} height={44} alt="" />
              <span>Personally guided by <strong>Narayani Garg</strong></span>
            </p>
            <p className="cn-lead">Work on the questions and patterns that keep returning, with Narayani’s personal guidance.</p>
            <ul className="pg-list hh-list">
              {inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="cn-actions">
              <EnquiryTrigger className="cn-cta" topic="the Personalised Hand Holding Program" source="program-hero" primary>
                <span>Enquire about the program</span>
                <Arrow />
              </EnquiryTrigger>
            </div>
            <div className="pg-notes hh-notes">
              <p>Format and fees are discussed before you decide.</p>
              <p>
                <span className="pg-dot" aria-hidden="true" />
                Ask the team about the next available start date
              </p>
            </div>
          </div>
          <div className="cn-hero-visual hh-visual" data-reveal="">
            <div className="cn-arch">
              <img src={asset("/images/narayani-cover-portrait-684.webp")} alt="Narayani Garg" width={684} height={855} fetchPriority="high" />
            </div>
            <div className="pg-medal hh-medal" aria-hidden="true">
              <strong>6</strong>
              <span>months</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cn-sec hh-for" aria-labelledby="for-title">
        <div className="cn-inner hh-for-grid">
          <header className="cn-head ab2-left" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Is it for you?</p>
            <h2 id="for-title">Who the program is for</h2>
            <p>Some questions need more than one conversation. This program gives you room to return to them over six months.</p>
            <div className="hh-areas" aria-hidden="true">
              {areas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </header>
          <div data-reveal="">
            <ul className="hh-fit">
              {forYou.map((line, i) => (
                <li key={line}>
                  <span className="ab2-num">{String(i + 1).padStart(2, "0")}</span>
                  <p>{line}</p>
                </li>
              ))}
            </ul>
            <EnquiryTrigger className="cn-text hh-ask" topic="the Personalised Hand Holding Program" source="program-for-you">
              Ask whether it suits you <span aria-hidden="true">→</span>
            </EnquiryTrigger>
          </div>
        </div>
      </section>

      <section className="cn-sec cn-how hh-how" aria-labelledby="how-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">How it works</p>
            <h2 id="how-title">How the six months work</h2>
            <p>The program combines an assessment of your circumstances with work on the thinking patterns behind recurring questions. The team explains the personal format before you commit.</p>
          </header>
          <ol className="cn-steps" data-reveal="">
            {months.map((step, i) => (
              <li key={step.title} style={{ "--d": `${200 + i * 220}ms` } as React.CSSProperties}>
                <span className="cn-step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cn-sec hh-compare" aria-labelledby="compare-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Choose what fits</p>
            <h2 id="compare-title">A consultation or the program?</h2>
            <p>Not sure which suits you? Ask, and the team will tell you honestly.</p>
          </header>
          <div className="hh-cards">
            <div className="hh-card" data-reveal="">
              <h3>Consultation</h3>
              <p>One focused conversation, around a single question.</p>
              <ul>
                <li>Online or in person</li>
                <li>A clear next step</li>
              </ul>
              <EnquiryTrigger className="cn-ghost cn-ghost-dark" source="program-compare-consultation">
                Enquire about a consultation
              </EnquiryTrigger>
            </div>
            <div className="hh-card is-featured" data-reveal="" style={{ "--d": "120ms" } as React.CSSProperties}>
              <span className="hh-badge">Six months</span>
              <h3>Hand Holding Program</h3>
              <p>Six months of guidance, with all four areas looked at together.</p>
              <ul>
                <li>Numerology, Vastulogy and astrology assessment</li>
                <li>Psychic guidance and direct guidance across six months</li>
              </ul>
              <EnquiryTrigger className="cn-cta" topic="the Personalised Hand Holding Program" source="program-compare-program">
                <span>Enquire about the program</span>
                <Arrow />
              </EnquiryTrigger>
            </div>
          </div>

          <figure className="ct-quote hh-quote" data-reveal="">
            <div className="ct-quote-photo">
              <img src={voicePoster(navleen)} alt={`${navleen.name}, a client`} width={380} height={320} loading="lazy" />
              <span>Guidance that stays</span>
            </div>
            <div className="ct-quote-body">
              <span className="ct-quote-mark" aria-hidden="true">“</span>
              <blockquote>
                <p>{navleen.quote}</p>
              </blockquote>
              <figcaption>
                <strong>{navleen.name}</strong>
                <span>{navleen.context}</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <StoryFilms
        id="stays"
        kicker="Client films"
        title="Guidance that stays"
        lead=""
        voices={[addedFilms[0], addedFilms[1], voices.shelley].filter((v) => v.clip)}
        more={[voices.renu]}
      />

      <HomeFaq items={faqs.program} source="program-faq" />
      <Reveal />
    </div>
  );
}
