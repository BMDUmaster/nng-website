import type { Metadata } from "next";
import Link from "next/link";
import { AreasFigure } from "@/components/art/Art";
import { PatternPath } from "@/components/art/PatternPath";
import { ProgramProcess } from "@/components/sections/ProgramProcess";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { FaqSection, FilmTrack, ProgramPanel } from "@/components/sections/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteBand } from "@/components/voices/QuoteCard";
import { faqs } from "@/content/faq";
import { voices, addedFilms } from "@/content/voices";
import { asset } from "@/lib/assets";
import { faqSchema, personSchema, programSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Personalised Hand Holding Program",
  description:
    "Six months of personal guidance with Narayani Garg across health, relationships, career and money: calls through the months, messages in between.",
  alternates: { canonical: "/hand-holding-program/" },
};

const forYou = [
  "The same pattern keeps returning, in more than one area of life.",
  "A big decision is coming, and you want steady guidance through it.",
  "You would rather have someone stay with you than a single reading.",
  "Your family is part of the question too.",
];

const months = [
  {
    title: "Begin with the whole picture",
    text: "A first, full conversation about your questions, your circumstances, your numbers, chart and surroundings.",
  },
  {
    title: "Calls through the months",
    text: "One-on-one calls with Narayani across the six months, at a rhythm you agree at the start.",
  },
  {
    title: "Messages in between",
    text: "Write when something comes up, from a hard day to an everyday choice.",
  },
  {
    title: "All four areas, together",
    text: "Health, relationship, career and money, looked at as one life.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), programSchema(), faqSchema(faqs.program)] }} />

      {/* Cinematic Animated Golden Palmistry Banner */}
      <section className="section-wrap pitra-banner-section" aria-labelledby="pitra-banner-title">
        <div className="pitra-video-banner">
          {/* Background Layer with Clean Left Shadow Only */}
          <div className="pitra-bg-layer">
            <img
              src={asset("/images/hand-holding-golden-banner.png")}
              alt="What Do Your Hand Lines Say? - Narayani Garg"
              className="pitra-bg-img"
              width={1280}
              height={520}
              loading="eager"
              fetchPriority="high"
            />
            <div className="pitra-video-overlay" />
          </div>

          {/* Banner Content */}
          <div className="pitra-banner-content">
            <h1 id="pitra-banner-title" className="pitra-title">
              What Do Your Hand Lines Say?
            </h1>
            <p className="pitra-subtitle">
              Discover How Palmistry &amp; Planetary Alignments Shape Your Destiny
            </p>
            <p className="pitra-desc">
              Unlock profound insights into your life purpose, career shifts, relationships, and hidden potential through authentic Vedic guidance and continuous hand-holding.
            </p>

            <div className="pitra-action">
              <EnquiryTrigger source="hand-lines-banner" primary className="pitra-calc-btn">
                <span>Start with a Consultation</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </EnquiryTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Structured Intro & Key Strategic Pillars (Continuous Strategic Mentorship) */}
      <section className="section-wrap section-space program-intro-section" aria-labelledby="intro-program-title">
        <div className="program-intro-header">
          <span className="program-badge">Continuous Strategic Mentorship</span>
          <h2 id="intro-program-title">
            Why a 6-Month <span className="highlight-gold">Hand-Holding Journey?</span>
          </h2>
          <p className="program-intro-lead">
            Deep-rooted karmic blocks, recurring life patterns, and major transitions cannot be resolved with a single conversation. Sustainable transformation requires continuous calibration, real-time advice during critical decisions, and structured accountability.
          </p>
        </div>

        <div className="program-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">✦</div>
            <h3>Direct 1-on-1 Access</h3>
            <p>Dedicated personal consultations with Narayani Garg every month to review progress, adapt remedies, and navigate unforeseen challenges.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon">✦</div>
            <h3>Priority On-Demand Clarity</h3>
            <p>Fast-track WhatsApp messaging when urgent career moves, relationship dilemmas, or financial decisions arise in your daily life.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon">✦</div>
            <h3>Transit &amp; Dasha Tracking</h3>
            <p>Dynamic Vedic astrological tracking that adjusts your roadmap in sync with shifting planetary transits (Gochar) and personal numbers.</p>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon">✦</div>
            <h3>All 4 Domains Unified</h3>
            <p>Simultaneous balance across Health, Relationships, Career/Business, and Wealth—ensuring success in one area does not cost you peace in another.</p>
          </div>
        </div>
      </section>

      {/* 2. 6-Month Personalised Hand Holding Program Hero */}
      <section className="section-wrap program-hero" aria-labelledby="page-title">
        <ProgramPanel asHero />
      </section>


      {/* 3. Who the program is for */}
      <section className="section-wrap section-space approach-grid" aria-labelledby="for-title">
        <div className="approach-intro">
          <h2 id="for-title">Who the program is for</h2>
          <p>
            Some patterns take time to understand and change. The program gives you ongoing guidance while you work
            through them in everyday life.
          </p>
          <PatternPath />
        </div>
        <div className="fit-list">
          <ul className="fit-items">
            {forYou.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <EnquiryTrigger className="text-link" topic="the Personalised Hand Holding Program" source="program-for-you">
            Ask whether it suits you
          </EnquiryTrigger>
        </div>
      </section>

      <section className="band" aria-labelledby="how-title">
        <div className="section-wrap section-space split">
          <div>
            <h2 id="how-title">How the six months work</h2>
            <p>The details are agreed with you at the start, around your life and your questions.</p>
            <div className="figure-box">
              <AreasFigure />
            </div>
          </div>
          <ProgramProcess steps={months} />
        </div>
      </section>

      <section className="section-wrap section-space" aria-labelledby="compare-title">
        <div className="section-heading centered">
          <h2 id="compare-title">A consultation or the program?</h2>
          <p>Not sure which suits you? Ask, and the team will tell you honestly.</p>
        </div>
        <div className="compare">
          <div>
            <h3>Consultation</h3>
            <p>One focused conversation, around a single question.</p>
            <ul>
              <li>Online or in person</li>
              <li>A clear next step</li>
            </ul>
            <EnquiryTrigger className="button button-ghost" source="program-compare-consultation">
              Enquire about a consultation
            </EnquiryTrigger>
          </div>
          <div>
            <h3>Hand Holding Program</h3>
            <p>Six months of guidance, with all four areas looked at together.</p>
            <ul>
              <li>Calls, with messages in between</li>
              <li>Room to revisit as life changes</li>
            </ul>
            <EnquiryTrigger className="button button-light" topic="the Personalised Hand Holding Program" source="program-compare-program">
              Enquire about the program
            </EnquiryTrigger>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="stays-title">
        <div className="section-wrap section-space">
          <div className="transformation-head">
            <div>
              <h2 id="stays-title">Guidance that stays</h2>

            </div>
          </div>
          <div className="stays-grid">
            <div className="stays-left-narrative">
              <QuoteBand voice={voices.navleen} />
              <div className="stays-extended-desc">
                <p>
                  True inner calibration shifts how you navigate uncertainty, manage high-stakes decisions, and nurture deep relationships without losing your peace.
                </p>
                <ul className="stays-key-takeaways">
                  <li>
                    <strong>Sustained Intuitive Clarity:</strong> Recognize personal karmic triggers early and make proactive decisions with confidence instead of reactive hesitation.
                  </li>
                  <li>
                    <strong>Harmonious Relationship Dynamics:</strong> Balance interpersonal energies with gentle Vedic alignment and mindset rewiring that restores household peace.
                  </li>
                  <li>
                    <strong>Long-Term Strategic Blueprint:</strong> Lifetime access to your personalized astrological patterns and foundational remedies for ongoing growth.
                  </li>
                </ul>
              </div>
            </div>
            <div className="program-films">
              <FilmTrack voices={[addedFilms[0], addedFilms[1], voices.renu, voices.shelley]} label="Client films about ongoing guidance" />
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs.program} source="program-faq" />
    </>
  );
}
