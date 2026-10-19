import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
import { Fragment } from "react";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { serviceArt } from "@/components/art/OfferArt";
import { OrbitBackdrop, VastuBackdrop } from "@/components/art/Sky";
import { Rich } from "@/components/ui/Rich";
import { Track } from "@/components/ui/Track";
import { FilmCard } from "@/components/voices/FilmCard";
import { QuoteCard } from "@/components/voices/QuoteCard";
import { areas, areaTopics } from "@/content/site";
import { serviceHref, services } from "@/content/services";
import { asset } from "@/lib/assets";
import type { Faq } from "@/content/faq";
import type { Voice } from "@/content/voices";

/*
  House rules since 23 Sept 2026, when Aryan said the site "seems very AI": no label above a heading,
  headings are plain sentences, italic is kept for her own words, client words and book titles, links
  carry no arrows (only links that leave the site do), and numbers appear only where order matters.
*/

/** Inner-page opening: breadcrumb, heading, one line, the action, and a drawing or portrait. */
export function PageHero({
  crumb,
  title,
  lead,
  children,
  visual,
  visualLate = false,
  backdrop,
  personal = false,
}: {
  crumb?: string;
  title: string;
  lead: string;
  children?: React.ReactNode;
  visual?: React.ReactNode;
  visualLate?: boolean;
  backdrop?: React.ReactNode;
  personal?: boolean;
}) {
  return (
    <section className={`page-hero section-wrap${backdrop ? " has-backdrop" : ""}${personal ? " practice-vastu-hero practice-core-hero" : ""}`} aria-labelledby="page-title">
      {backdrop}
      <div className="page-hero-copy">
        <h1 id="page-title">
          <Rich text={title} />
        </h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
      {visual && <div className={`page-hero-visual${visualLate ? " is-late" : ""}`}>{visual}</div>}
    </section>
  );
}

/** Questions and answers: intro on the left, open questions on the right, the Vastulogy grid faint behind. */
export function FaqSection({
  id = "faq",
  title = "Before you enquire",
  intro = "A few things you may want to know first.",
  items,
  source,
  icon,
}: {
  id?: string;
  title?: string;
  intro?: string;
  items: Faq[];
  source: string;
  /** An icon beside the heading, drawn for the page's subject (service pages only). */
  icon?: string;
}) {
  const priority = items.filter(item => /book|session|consult|prepare|bring|online|fee|suit|medical|treatment|safe|confiden|available/i.test(item.q));
  const first = [...priority, ...items.filter(item => !priority.includes(item))].slice(0, 4);
  const remaining = items.filter(item => !first.includes(item));
  const questions = (list: Faq[]) => list.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true" /></summary><p>{item.a}</p></details>);
  return (
    <section className="faq-wrap has-backdrop" aria-labelledby={`${id}-title`}>
      <VastuBackdrop />
      <div className="faq section-wrap section-space" id={id}>
        <div className="faq-intro faq-intro-compact">
          <h2 id={`${id}-title`}>
            {icon && <Icon id={icon} />}
            <span>
              <Rich text={title} />
            </span>
          </h2>
          <p>{intro}</p>
          <EnquiryTrigger className="text-link" source={source}>
            Ask something else
          </EnquiryTrigger>
        </div>
        <div className="faq-list">
          {questions(first)}
          {remaining.length > 0 && <details className="faq-more"><summary>More questions ({remaining.length})<span aria-hidden="true" /></summary><div className="faq-extra">{questions(remaining)}</div></details>}
        </div>
      </div>
    </section>
  );
}

/** The wine panel for the six-month program, on the homepage and as the program page's opening. */
export function ProgramPanel({ asHero = false }: { asHero?: boolean }) {
  const Heading = asHero ? "h1" : "h2";
  return (
    <div className={`program-panel has-backdrop${!asHero ? " program-invitation" : ""}`}>
      <OrbitBackdrop className="on-feature" />
      <div className="program-main">
        <p className="program-duration-label">Six months with your psychic spiritual mentor</p>
        <Heading id={asHero ? "page-title" : "program-title"}>Personalised Hand Holding Program</Heading>
        {asHero && <div className="program-person"><img src={asset("/images/narayani-cover-portrait-96.webp")} width={52} height={52} alt="" /><span>Personally guided by <strong>Narayani Garg</strong></span></div>}
        <p>Work on the questions and patterns that keep returning, with Narayani as your psychic spiritual mentor.</p>
        <ul className="program-inclusions">
          <li>Numerology, Vastulogy and astrology assessment</li>
          <li>Psychic guidance for recurring patterns</li>
          <li>Direct guidance across health, relationships, money and career</li>
        </ul>
        <div className="cta-row">
          <EnquiryTrigger
            className="button button-light"
            topic="the Personalised Hand Holding Program"
            source={asHero ? "program-hero" : "home-program"}
            primary={asHero}
          >
            Enquire about the program
          </EnquiryTrigger>
          {!asHero && (
            <Link prefetch={false} className="text-link" href="/hand-holding-program/">
              How the programme works
            </Link>
          )}
        </div>
        <p className="program-note">Format and fees are discussed before you decide.</p>
        <p className="program-availability"><span className="appointment-dot" aria-hidden="true" />Ask the team about the next available start date</p>
      </div>
    </div>
  );
}

/** Four services, each a drawing from her practice and one plain line; the whole card opens its section. */
export function ServiceCards() {
  return (
    <div className="service-grid">
      {services.map((service) => {
        const Art = serviceArt[service.slug];
        return (
          <article className="service-card" key={service.slug}>
            <div className="service-art">
              <Art />
            </div>
            <div className="service-body">
              <h3>
                <a href={asset(serviceHref(service.slug))}>{service.name}</a>
              </h3>
              <p>{service.card}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/** Written testimonials: a grid on wide screens, a swipe row on a phone. */
export function QuoteTrack({ voices, label, short = false }: { voices: Voice[]; label: string; short?: boolean }) {
  return (
    <Track label={label} className="testimonial-grid" itemLabel="testimonial" autoAdvanceMobile>
      {voices.map((voice) => (
        <QuoteCard key={voice.id} voice={voice} quote={short ? voice.short : undefined} />
      ))}
    </Track>
  );
}

/** Client films in reel format. */
export function FilmTrack({ voices, label }: { voices: Voice[]; label: string }) {
  return (
    <Track label={label} className="reel-track" itemLabel="film">
      {voices.map((voice) => (
        <FilmCard key={voice.id} voice={voice} />
      ))}
    </Track>
  );
}

/**
 * The four areas as a wine ribbon. Each word opens the enquiry for that area, the way the best
 * mobile sites let a visitor start from their need rather than from a menu.
 */
export function AreasRibbon() {
  return (
    <nav className="hrmc-ribbon" aria-label="Enquire about an area of life">
      {areas.map((area, i) => (
        <Fragment key={area}>
          {i > 0 && <i aria-hidden="true" />}
          <EnquiryTrigger className="ribbon-link" topic={areaTopics[area]} source={`ribbon-${area.toLowerCase()}`}>
            {area}
          </EnquiryTrigger>
        </Fragment>
      ))}
    </nav>
  );
}
