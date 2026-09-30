import type { Metadata } from "next";
import { AreasFigure } from "@/components/art/Art";
import { PatternPath } from "@/components/art/PatternPath";
import { ProgramProcess } from "@/components/sections/ProgramProcess";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { FaqSection, FilmTrack, ProgramPanel } from "@/components/sections/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteBand } from "@/components/voices/QuoteCard";
import { faqs } from "@/content/faq";
import { voices, addedFilms } from "@/content/voices";
import { faqSchema, personSchema, programSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Personalised Hand Holding Program",
  description:
    "Six months of personal guidance with Narayani Garg, combining astrology, numerology, vastu and brain training across health, relationships, career and money.",
  alternates: { canonical: "/hand-holding-program/" },
};

const forYou = [
  "The same pattern keeps returning, in more than one area of life.",
  "A big decision is coming, and you want steady guidance through it.",
  "You want space to revisit a decision after the first conversation.",
  "Your question affects people close to you.",
];

// Scope: NNG Consultation and Mentorship Packages PDF (1 Sep 2026), reviewed 30 Sep.
// It does not specify call cadence, message channel or response time.
const months = [
  {
    title: "Understand the whole picture",
    text: "Review your questions alongside your birth chart, numbers and living or work spaces, where relevant.",
  },
  {
    title: "Work on the patterns behind them",
    text: "Brain training brings the focus back to your thinking and choices across wealth, health, career and relationships.",
  },
  {
    title: "Stay with the work",
    text: "The program includes direct handholding and ongoing strategic guidance over six months.",
  },
  {
    title: "Choose the right format",
    text: "Individual and couple formats are available. The team explains the scope and contact arrangements before you decide.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), programSchema(), faqSchema(faqs.program)] }} />

      {/* Six-month program overview */}
      <section className="section-wrap program-hero" aria-labelledby="page-title">
        <ProgramPanel asHero />
      </section>


      {/* Who the program is for */}
      <section className="section-wrap section-space approach-grid" aria-labelledby="for-title">
        <div className="approach-intro">
          <h2 id="for-title">Who the program is for</h2>
            <p>Some questions need more than one conversation. This program gives you room to return to them over six months.</p>
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
            <p>The program combines practice-based assessment with work on the thinking patterns behind recurring questions. The team explains the personal format before you commit.</p>
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
              <li>Astrology, numerology and vastu assessment</li>
              <li>Brain training and direct guidance across six months</li>
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
