import { HomeQuestions } from "@/components/sections/HomeQuestions";
import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { PracticeReturnPrompt } from "@/components/enquiry/PracticeReturnPrompt";
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

const ico = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const lotus = ico('<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/>');
const tick = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 8.3 2.3 2.3 4.7-5"/></svg>';
const areaIcons: Record<string, string> = {
  Health: ico('<path d="M16 27S4 19.6 4 11.6A6.1 6.1 0 0 1 16 9a6.1 6.1 0 0 1 12 2.6C28 19.6 16 27 16 27Z"/><path d="M7 16h5l2-3 3 6 2-3h6"/>'),
  Relationship: ico('<circle cx="11" cy="11" r="4"/><circle cx="21" cy="11" r="4"/><path d="M4 26c0-4 3-7 7-7s7 3 7 7M14 26c0-4 3-7 7-7s7 3 7 7"/>'),
  Money: ico('<ellipse cx="16" cy="9" rx="9" ry="3.5"/><path d="M7 9v6c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V9M7 15v6c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-6"/>'),
  Career: ico('<path d="M6 26V20M12 26V16M18 26V12M24 26V8M18 6h6v6"/>'),
};
const monthPhotos = ["/images/hh-m1.webp", "/images/hh-m2.webp", "/images/hh-m3.webp", "/images/hh-m4.webp"];
const monthIcons = [
  ico('<circle cx="16" cy="16" r="11"/><path d="m20.5 11.5-3 6-6 3 3-6z"/>'),
  ico('<path d="M12 6.5a3.5 3.5 0 0 0-6.6 1.6A3.8 3.8 0 0 0 4 15a3.6 3.6 0 0 0 2 5.6A3.6 3.6 0 0 0 12 24V6.5ZM20 6.5a3.5 3.5 0 0 1 6.6 1.6A3.8 3.8 0 0 1 28 15a3.6 3.6 0 0 1-2 5.6A3.6 3.6 0 0 1 20 24"/><path d="M16 5v22"/>'),
  ico('<path d="M16 26c-3-2.6-5-6-5-9.4 0-3 1.7-5.8 5-7.8 3.3 2 5 4.8 5 7.8 0 3.4-2 6.8-5 9.4Z"/><path d="M4 18c2 0 4 1 5 3l3 3M28 18c-2 0-4 1-5 3l-3 3"/>'),
  ico('<circle cx="11" cy="11" r="4"/><circle cx="21" cy="11" r="4"/><path d="M4 26c0-4 3-7 7-7s7 3 7 7M14 26c0-4 3-7 7-7s7 3 7 7"/>'),
];

/**
 * The six-month program, in the site's green and gold: an opening with her photograph and the six-month medal over a
 * strip of the four areas of life, who it is for, how the months work as photo cards, a consultation compared with
 * the program, a client's words, client films and questions.
 */
export default function ProgramPage() {
  const navleen = voices.navleen;
  return (
    <div className="cn hh hx">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), programSchema(), faqSchema(faqs.program)] }} />
      <PracticeReturnPrompt />

      <section className="svh svh-svc hx-hero" aria-labelledby="page-title">
        <div className="svh-inner">
          <div className="svh-copy">
            <nav className="cn-crumbs svh-crumbs" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Hand Holding Program</span>
            </nav>
            <h1 id="page-title">
              Personalised <em>Hand Holding</em> Program
            </h1>
            <p className="svh-lead">Work on the questions and patterns that keep returning, with Narayani as your psychic spiritual mentor.</p>
            <ul className="hx-incl">
              {inclusions.map((item) => (
                <li key={item}>
                  <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: tick }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="svh-actions hx-actions">
              <EnquiryTrigger className="svh-cta" topic="the Personalised Hand Holding Program" source="program-hero" primary>
                <span className="cx-long">Enquire about the program</span>
                <span className="cx-short">Enquire now</span>
                <span className="svh-go" aria-hidden="true">→</span>
              </EnquiryTrigger>
            </div>
          </div>
          <div className="svh-visual">
            <span className="svh-frame" aria-hidden="true" />
            <span className="svh-sprig svh-sprig-1" aria-hidden="true" />
            <span className="svh-sprig svh-sprig-2" aria-hidden="true" />
            <div className="svh-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/program-narayani.webp")} alt="Narayani Garg" width={1000} height={1265} fetchPriority="high" />
            </div>
            <div className="hx-medal" aria-hidden="true">
              <strong>6</strong>
              <span>months</span>
            </div>
          </div>
        </div>
        <ul className="svh-values" aria-label="The four areas of life">
          {areas.map((area) => (
            <li key={area}>
              <span className="svh-v-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: areaIcons[area] }} />
              <span>
                <strong>{area}</strong>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="hx-for" aria-labelledby="for-title">
        <span className="hw-leaf hw-leaf-r" aria-hidden="true" />
        <div className="hx-for-inner">
          <header className="hx-for-head" data-reveal="">
            <p className="hx-kicker">
              <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />
              Is it for you?
            </p>
            <h2 id="for-title">
              Who the program <em>is for</em>
            </h2>
            <p>Some questions need more than one conversation. This program gives you room to return to them over six months.</p>
            <EnquiryTrigger className="hx-ask" topic="the Personalised Hand Holding Program" source="program-for-you">
              Ask whether it suits you <span aria-hidden="true">→</span>
            </EnquiryTrigger>
          </header>
          <ul className="hx-fit" data-reveal="">
            {forYou.map((line, i) => (
              <li key={line}>
                <span className="hx-fit-num">{String(i + 1).padStart(2, "0")}</span>
                <p>{line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cn-sec sv-how hw hx-how" id="how" aria-labelledby="how-title">
        <span className="hw-leaf hw-leaf-l" aria-hidden="true" />
        <span className="hw-leaf hw-leaf-r" aria-hidden="true" />
        <div className="cn-inner">
          <header className="hw-head" data-reveal="">
            <span className="hw-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />
            <p className="hw-kicker">How it works</p>
            <h2 id="how-title">
              How the six months <em>work</em>
            </h2>
          </header>
          <ol className="hw-steps" data-reveal="">
            {months.map((step, i) => (
              <li key={step.title}>
                <span className="hw-num">{String(i + 1).padStart(2, "0")}</span>
                {i < months.length - 1 && <span className="hw-arrow" aria-hidden="true">→</span>}
                <div className="hw-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset(monthPhotos[i])} alt="" width={740} height={444} loading="lazy" />
                </div>
                <span className="hw-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: monthIcons[i] }} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hx-compare hx-one" aria-labelledby="compare-title">
        <div className="hx-compare-inner">
          <div className="hx-prog" data-reveal="">
            <div className="hx-prog-medal" aria-hidden="true"><strong>6</strong><span>months</span></div>
            <div className="hx-prog-copy">
              <p className="hw-kicker">The program</p>
              <h2 id="compare-title">Personalised <em>Hand Holding</em></h2>
              <ul>
                <li><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: tick }} />Numerology, Vastulogy and astrology assessment</li>
                <li><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: tick }} />Psychic guidance for recurring patterns</li>
                <li><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: tick }} />One conversation a month, with messages in between</li>
              </ul>
            </div>
            <EnquiryTrigger className="hx-prog-cta" topic="the Personalised Hand Holding Program" source="program-compare-program">
              <span>Enquire about the program</span>
              <span className="hx-prog-go" aria-hidden="true">→</span>
            </EnquiryTrigger>
          </div>
        </div>
      </section>

      <section className="cn-sec sv-client tq" aria-label="A client’s words">
        <div className="cn-inner">
          <figure className="tq-card" data-reveal="">
            <span className="tq-leaf-r" aria-hidden="true" />
            <div className="tq-photo">
              <img src={voicePoster(navleen)} alt={`${navleen.name}, a client`} width={380} height={320} loading="lazy" />
              <span className="tq-badge">
                <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: ico('<circle cx="16" cy="12" r="5"/><path d="M7 27c0-5 4-9 9-9s9 4 9 9"/>') }} />
                Guidance that stays
              </span>
            </div>
            <div className="tq-body">
              <p className="tq-kicker">Real stories, real guidance</p>
              <span className="tq-mark" aria-hidden="true">“</span>
              <blockquote>
                <p>{navleen.quote}</p>
              </blockquote>
              <figcaption className="tq-person">
                <span className="tq-initials" aria-hidden="true">{navleen.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}</span>
                <span>
                  <strong>{navleen.name}</strong>
                  <small>{navleen.context}</small>
                </span>
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

      <HomeQuestions items={faqs.program} source="program-faq" />
      <Reveal />
    </div>
  );
}
