import type { Metadata } from "next";
import { ReviewServicePage } from "./ReviewServicePage";
import { shortGuidance } from "@/content/review-release";
import Link from "next/link";
import { OfferArt } from "@/components/art/OfferArt";
import { Portrait } from "@/components/brand/Portrait";
import { asset } from "@/lib/assets";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { PracticeReturnPrompt } from "@/components/enquiry/PracticeReturnPrompt";
import { Icon } from "@/components/icons/Icon";
import { FaqSection } from "@/components/sections/Sections";
import { SectionChips } from "@/components/sections/SectionChips";
import { JsonLd } from "@/components/seo/JsonLd";
import { Rich } from "@/components/ui/Rich";
import { feesPublic } from "@/content/consultation";
import { childPages, getOffering, offeringByPath, offeringPath } from "@/content/offerings";
import { hubInfo } from "@/content/offerings/taxonomy";
import type { HubSlug } from "@/content/offerings/types";
import { serviceHref, services } from "@/content/services";
import { breadcrumbSchema, faqSchema, offeringSchema, personSchema } from "@/lib/schema";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Catalogue } from "./Catalogue";
import { FeeOptions } from "./FeeOptions";
import { SectionTakeaway } from "./SectionReading";
import { BlockList } from "./Blocks";
import { ReferenceReading } from "./ReferenceReading";
import { TopicDirectory } from "./TopicDirectory";
import { PracticeDiagram } from "@/components/art/PracticeDiagram";
import { BirthChartIntro, BirthChartSection } from "./BirthChartReading";
import { ReadingGuide, duplicateDirectories, sectionTakeaways, stoneTakeaways } from "./ReadingGuide";

/** The <head> for a service page: its own title and description, and its own canonical address. */
export function offeringMetadata(hub: HubSlug, slug: string): Metadata {
  const page = getOffering(hub, slug);
  return {
    title: { absolute: `${hub === "brain-training" ? "Psychic Reader" : page.metaTitle} | Narayani Garg` },
    description: hub === "brain-training" ? "Personal and spiritual guidance with Narayani Garg. Explore six Psychic Reader consultation choices and enquire with the team." : shortGuidance[slug ? `${hub}/${slug}` : hub]?.lead ?? page.metaDescription,
    alternates: { canonical: hub === "brain-training" ? "/services/brain-training/" : offeringPath(page) },
  };
}

type Row = { path: string; title: string; card: string; icon: string; covers?: string[] };

function rowFor(path: string): Row | null {
  const page = offeringByPath(path);
  if (page) return { path, title: page.title, card: page.card, icon: page.icon };
  if (path === "/hand-holding-program/") return { path, title: "The Personalised Hand Holding Program", card: "Six months of personal guidance across health, relationship, career and money.", icon: "gen-six-months" };
  return null;
}

/** One row in a list of pages: the icon drawn for that page, its title, one line, and what it covers. */
export function IndexRow({ row }: { row: Row }) {
  return (
    <li>
      <Link prefetch={false} href={row.path} className="offer-index-link">
        <Icon id={row.icon} />
        <strong>{row.title}</strong>
        <span>{row.card}</span>
        {row.covers && <span className="offer-covers">{row.covers.join(", ")}</span>}
      </Link>
    </li>
  );
}

export function OfferingRoute({ hub, slug }: { hub: HubSlug; slug: string }) {
  const page = getOffering(hub, slug);
  if (hub === "brain-training" || hub === "numerology" || hub === "vastu") return <ReviewServicePage page={page} />;
  const isHub = slug === "";
  // The Astrology hub routes visitors to guidance; keep these detailed
  // overview and preparation blocks on its individual service pages only.
  const showOverviewAndPreparation = !(hub === "astrology" && isHub);
  const personalVastu = false;
  const service = services.find((item) => item.slug === hub)!;
  const info = hubInfo(hub);
  const path = offeringPath(page);
  const children = isHub ? childPages(hub) : [];
  const source = `offer-${hub}-${slug || "hub"}`;
  const showFees = page.showFees && feesPublic;
  const visualReading = hub === "astrology" && slug === "birth-chart-reading";
  const sections = page.sections.filter(section => !isHub || (section.id !== duplicateDirectories[hub] && section.id !== "the-map"));

  const trail: Crumb[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    isHub ? { label: service.name } : { label: service.name, href: serviceHref(hub) },
    ...(isHub ? [] : [{ label: page.metaTitle }]),
  ];
  const schemaTrail = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services/" },
    { label: service.name, path: serviceHref(hub) },
    ...(isHub ? [] : [{ label: page.metaTitle, path }]),
  ];

  // A hub already lists its children: do not repeat those links and emblems below.
  const indexedPaths = new Set(children.map(offeringPath));
  const related = page.related.filter(path => !indexedPaths.has(path)).map(rowFor).filter((item): item is Row => item !== null);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [personSchema(), offeringSchema(page, path), breadcrumbSchema(schemaTrail), faqSchema(page.faqs)],
        }}
      />

      <section className={`page-hero section-wrap offer-hero${isHub ? " practice-vastu-hero" : " practice-detail-hero"}`} data-hub={hub} aria-labelledby="page-title">
        <div className="page-hero-copy">
          <Breadcrumbs trail={trail} />
          <h1 id="page-title">
            <Rich text={personalVastu ? "Vastu for the way you live" : page.title} />
          </h1>
          <p className="lead">{isHub ? hub === "astrology" ? "Your birth chart, considered around your question. Narayani explores timing and choices without treating the chart as a verdict." : "Understand crystals, stones and Rudraksha before choosing a piece. Discuss traditional guidance, then confirm product details with the team." : page.card}</p>
          <div className="cta-row">
            <EnquiryTrigger topic={page.enquiryTopic} source={`${source}-hero`} primary>
              {page.cta}
            </EnquiryTrigger>
            <a className="text-link" href={isHub ? "#pages" : "#ready"}>
              {personalVastu ? "Find guidance for your space" : isHub ? "See what is in this section" : "What to have ready"}
            </a>
          </div>
          {!isHub && <p className="practice-service-note">
            <img src={asset("/images/narayani-cover-portrait-96.webp")} width={48} height={48} alt="" />
            <span>Personal guidance with <strong>Dr. Narayani Garg</strong></span>
          </p>}
        </div>
        <div className="page-hero-visual">
          {isHub ? <div className="practice-vastu-portrait">
            <Portrait photo="gold" name="Dr. Narayani Garg" note="Personal guidance" priority sizes="(max-width: 680px) 110px, 340px" />
            <p>{personalVastu ? "Start with your questions, not a list of faults" : "Begin with the question you bring"}</p>
          </div> : <div className="offer-art">
            <OfferArt spec={page.art} label={`${page.title}: a drawing made for this page`} />
          </div>}
        </div>
      </section>

      <SectionChips label="On this page" items={personalVastu ? [
        { id: "her-approach", label: "Her approach" },
        { id: "pages", label: "Your space" },
        { id: "ready", label: "A consultation" },
        { id: "faq", label: "Questions" },
      ] : [
        ...(showOverviewAndPreparation ? [{ id: "overview", label: "Where to begin" }] : []),
        { id: isHub ? "pages" : "ready", label: isHub ? "Find your guidance" : "A consultation" },
        { id: showFees ? "fees" : "faq", label: showFees ? "Session options" : "Questions" },
        ...(showFees ? [{ id: "faq", label: "Questions" }] : []),
      ]} />

      {showOverviewAndPreparation && <section className="section-wrap section-space offer-overview" id="overview" aria-label="Overview">
        <div className="offer-prose">
          {visualReading ? <BirthChartIntro blocks={page.intro} /> : <ReadingGuide page={page} />}
          {page.note && <div className="offer-note"><p><Rich text={page.note} /></p></div>}
        </div>
        <aside className="offer-look" aria-labelledby="look-title">
          {isHub && <PracticeDiagram hub={hub} />}
          <h2 id="look-title">
            <Icon id={page.lookAt.icon} />
            <span>{page.lookAt.heading}</span>
          </h2>
          <ul className="offer-look-list">
            {page.lookAt.items.map((item) => (
              <li key={item.icon}>
                <Icon id={item.icon} />
                <span>
                  <Rich text={item.text} />
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </section>}

      {isHub && (
        <section className="band offer-index" id="pages" aria-labelledby="pages-title">
          <div className="section-wrap section-space">
            <h2 id="pages-title">
              <Icon id={page.icon} />
              <span>{hub === "stones-and-rudraksh" ? "Explore crystals, stones and Rudraksha" : "Find your astrology guidance"}</span>
            </h2>
            <TopicDirectory groups={info.groups} topics={children.map(child => ({ path: offeringPath(child), title: child.title, card: child.card, icon: child.icon, group: child.group }))} />
          </div>
        </section>
      )}

      <div className="service-takeaways">
      {(!isHub || hub !== "astrology" ? sections : []).map((section) => visualReading ? <BirthChartSection key={section.id} section={section} compact /> : (
        <section key={section.id} className="offer-section" id={section.id} aria-labelledby={`${section.id}-title`}>
          <div className="section-wrap section-space">
            <h2 id={`${section.id}-title`}>
              <Icon id={section.icon} />
              <span>
                <Rich text={section.heading} />
              </span>
            </h2>
            <div className="offer-prose">
              {/limits|care|safety|paying|consultation|in-a-consultation|session/.test(section.id) ? <BlockList blocks={section.blocks} /> : <SectionTakeaway blocks={section.blocks}
                takeaway={isHub ? sectionTakeaways[hub]?.[section.id] : hub === "stones-and-rudraksh" ? stoneTakeaways[slug]?.[section.id] : undefined} />}
            </div>
          </div>
        </section>
      ))}
      </div>

      {page.catalogue && <Catalogue heading={page.catalogue.heading} icon={page.catalogue.icon} intro={page.catalogue.intro} items={page.catalogue.items} topicPrefix={page.enquiryTopic} source={`${source}-item`} />}

      {showOverviewAndPreparation && <section className="band offer-ready" id="ready" aria-labelledby="ready-title">
        <div className="section-wrap section-space">
          <h2 id="ready-title">
            <Icon id={page.bring.icon} />
            <span>{page.bring.heading ?? "What to have ready"}</span>
          </h2>
          <ul className="offer-look-list is-wide">
            {page.bring.items.map((item) => (
              <li key={item.icon}>
                <Icon id={item.icon} />
                <span>
                  <Rich text={item.text} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>}

      {page.session && (
        <section className="section-wrap section-space offer-session" id="session" aria-labelledby="session-title">
          <h2 id="session-title">
            <Icon id={page.session.icon} />
            <span>{page.session.heading ?? "How a session runs"}</span>
          </h2>
          <ol className="offer-steps is-row">
            {page.session.steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-mark" aria-hidden="true">
                  <Icon id={step.icon} />
                  <b>{index + 1}</b>
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>
                    <Rich text={step.text} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {page.suits && (
        <section className="section-wrap section-space offer-suits" id="suits" aria-labelledby="suits-title">
          <h2 id="suits-title">
            <Icon id={page.suits.icon} />
            <span>Is this for you?</span>
          </h2>
          <div className="offer-suits-grid">
            <div>
              <h3>It may suit you if</h3>
              <ul className="offer-list">
                {page.suits.yes.map((item) => (
                  <li key={item}>
                    <Rich text={item} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>It may not be right if</h3>
              <ul className="offer-list">
                {page.suits.no.map((item) => (
                  <li key={item}>
                    <Rich text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <FeeOptions topic={page.enquiryTopic} source={`${source}-fees`} compact={!isHub} />

      {related.length > 0 && (
        <section className="section-wrap section-space offer-related" id="related" aria-labelledby="related-title">
          <h2 id="related-title">
            <Icon id="gen-next-step" />
            <span>Keep reading</span>
          </h2>
          <ul className="offer-index-list">
            {related.map((item) => (
              <IndexRow key={item.path} row={item} />
            ))}
          </ul>
        </section>
      )}

      {!isHub && <ReferenceReading>
        <nav aria-label="Background topics" className="reference-topics">
          {sections.filter(section => !/limits|care|safety|paying|consultation|in-a-consultation|session/.test(section.id)).map(section => <a key={section.id} href={`#reference-${section.id}`}>{section.chip}</a>)}
        </nav>
        {sections.filter(section => !/limits|care|safety|paying|consultation|in-a-consultation|session/.test(section.id)).map(section => <section key={section.id} id={`reference-${section.id}`} className="reference-section">
          <h2><Rich text={section.heading} /></h2>
          <BlockList blocks={visualReading && section.id === "houses" ? section.blocks : section.blocks.filter(block => block.type !== "note" && block.type !== "quote")} />
        </section>)}
      </ReferenceReading>}
      <FaqSection items={isHub ? page.faqs.slice(0, 3) : page.faqs} icon="gen-question" title="Questions people ask" intro="If yours is not here, ask it when you enquire." source={`${source}-faq`} />
    </>
  );
}
