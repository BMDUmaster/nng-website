import Link from "next/link";
import { asset } from "@/lib/assets";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { Icon } from "@/components/icons/Icon";
import { OfferArt } from "@/components/art/OfferArt";
import { childPages, offeringPath } from "@/content/offerings";
import type { OfferingPage } from "@/content/offerings/types";
import { psychicChoices, shortGuidance, vastuChoices } from "@/content/review-release";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";
import { Rich } from "@/components/ui/Rich";
import styles from "./ReviewServicePage.module.css";
import { HeroArrow, ServiceHero } from "./ServiceHero";
import { ElementsOrbit } from "@/components/art/ElementsOrbit";

function ElementsDiagram() {
  return <ElementsOrbit />;
}

const btLotus = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/></svg>';
const btTick = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 8.3 2.3 2.3 4.7-5"/></svg>';
const btPhotos = ["/images/method-1.webp", "/images/bt-health.webp", "/images/bt-relationship.webp", "/images/bt-money.webp", "/images/bt-career.webp", "/images/practice-brain-training-photo.webp"];
const btSteps = ["Patterns", "Thoughts", "Beliefs", "Situations"];

/** The Brainology opening: words, the four things she looks at, and her photograph in a tall gold arch. */
function BrainologyHero({ topic, source }: { topic: string; source: string }) {
  return <section className="bh" aria-labelledby="page-title">
    <span className="bh-leaf" aria-hidden="true" />
    <div className="bh-inner">
      <div className="bh-copy">
        <nav className="cn-crumbs bh-crumbs" aria-label="Breadcrumb">
          <Link prefetch={false} href="/">Home</Link><span aria-hidden="true">/</span>
          <Link prefetch={false} href="/services/">Services</Link><span aria-hidden="true">/</span>
          <span aria-current="page">Brainology Program</span>
        </nav>
        <p className="bh-kicker"><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: btLotus }} />Her practice</p>
        <h1 id="page-title">Brainology <em>Program</em></h1>
        <p className="bh-lead">Bring a situation that keeps repeating. Narayani helps you explore the thoughts, beliefs and responses around it.</p>
        <ol className="bh-steps" aria-label="What she looks at">
          {btSteps.map((step, i) => <li key={step}><span>{i + 1}</span>{step}</li>)}
        </ol>
        <div className="bh-actions">
          <EnquiryTrigger className="bh-cta" topic={topic} source={source} primary><span>Ask about Brainology</span><span className="bh-go" aria-hidden="true">→</span></EnquiryTrigger>
          <p className="bh-note">Format, duration and fees to be confirmed with the team.</p>
        </div>
      </div>
      <div className="bh-visual">
        <span className="bh-ring" aria-hidden="true" />
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
        <div className="bh-arch">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/about-hero.webp")} alt="Narayani Garg" width={900} height={1255} fetchPriority="high" />
        </div>
        <figure className="bh-quote">
          <span aria-hidden="true">“</span>
          <blockquote><p>A remedy works when the mind works.</p></blockquote>
          <figcaption>Narayani Garg</figcaption>
        </figure>
      </div>
    </div>
  </section>;
}

export function ReviewServicePage({ page }: { page: OfferingPage }) {
  const psychic = page.hub === "brain-training";
  const isHub = !page.slug || psychic;
  const key = page.slug ? `${page.hub}/${page.slug}` : page.hub;
  const content = shortGuidance[key] ?? shortGuidance[page.hub];
  const title = psychic ? "Brainology Program" : page.title;
  const topic = psychic ? "Brainology Program" : page.enquiryTopic;
  const family = psychic ? "Brainology Program" : page.hub === "vastu" ? "Vastulogy" : "Numerology";
  const children = childPages(page.hub);
  return <div className={`${styles.page} svd svd-review`}>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: title, serviceType: family, provider: personSchema(), description: psychic ? "Spiritual guidance around recurring patterns, thoughts and beliefs." : content.lead }} />
    {psychic ? <BrainologyHero topic={topic} source={`review-${key}-hero`} /> : <ServiceHero
      trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, ...(isHub ? [{ label: family }] : [{ label: family, href: `/services/${page.hub}/` }, { label: title }])]}
      kicker={isHub ? "Her practice" : family}
      title={title}
      lead={psychic ? "Bring a situation that keeps repeating. Narayani helps you explore the thoughts, beliefs and responses around it." : content.lead}
      actions={<EnquiryTrigger className="cn-cta" topic={topic} source={`review-${key}-hero`} primary><span>Ask about {family}</span><HeroArrow /></EnquiryTrigger>}
      note={<p className="svd-note">Format, duration and fees to be confirmed with the team.</p>}
      hub={page.hub}
    />}

    {psychic ? <section className={`section-wrap ${styles.section}`} id="pages" aria-labelledby="choices-title">
      <span className="bt-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: btLotus }} />
      <p className="bt-kicker">Six starting points</p>
      <h2 id="choices-title">Choose your <em>consultation</em></h2><p>Ask the team which one fits your question.</p>
      <div className="bt-cards">{psychicChoices.map((choice, i) => <article key={choice.name} className="bt-card">
        <div className="bt-card-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(btPhotos[i])} alt="" width={420} height={704} loading="lazy" />
          <span className="bt-card-icon"><Icon id={choice.icon} /></span>
        </div>
        <div className="bt-card-body">
          <h3>{choice.name}</h3>
          <p>{choice.line}</p>
          <p className="bt-card-note">Details and fee to be confirmed</p>
          <EnquiryTrigger topic={`Brainology Program: ${choice.name}`} source="psychic-choice" className="bt-card-cta">Enquire <span aria-hidden="true">→</span></EnquiryTrigger>
        </div>
      </article>)}</div>
      <p className={styles.limit}>These are personal and spiritual consultations, not medical or mental health treatment. No health, relationship, financial or career outcome is guaranteed.</p>
    </section> : <>
      {isHub && <section className={`section-wrap ${styles.section}`} id="pages" aria-labelledby="choices-title"><h2 id="choices-title">{page.hub === "vastu" ? "Find the right Vastulogy consultation" : "Choose what you want to understand"}</h2>
        {page.hub === "vastu" ? <div className={styles.cards}>{vastuChoices.map(choice => <article key={choice.name} className={styles.card}><Icon id={choice.icon} /><h3>{choice.name}</h3><p>{choice.line}</p><EnquiryTrigger topic={`Vastulogy: ${choice.name}`} source="vastu-choice" className="text-link">Ask the team</EnquiryTrigger>{"href" in choice && <Link className={styles.more} href={choice.href}>See the scope</Link>}</article>)}</div> : <div className={styles.topics}>{children.map(child => <Link key={child.slug} href={offeringPath(child)}><Icon id={child.icon} /><span><strong>{child.title}</strong><small>{shortGuidance[`numerology/${child.slug}`]?.points[0]}</small></span><span aria-hidden="true">↗</span></Link>)}</div>}
      </section>}

      <section className={`section-wrap ${styles.section} ${styles.split}`} aria-labelledby="scope-title"><div><h2 id="scope-title">{isHub ? "The question comes first" : "What you look at together"}</h2><ul className={styles.scope}>{content.points.map(point => <li key={point}><Rich text={point} /></li>)}</ul>
        {page.hub === "numerology" && <p className={styles.limit}>A traditional number reading is a perspective to reflect on, not a prediction or a measure of someone’s ability.</p>}
        {page.hub === "vastu" && <p className={styles.limit}>Vastulogy is an interpretive tradition. Structural, medical, legal and investment decisions need qualified professional advice.</p>}
      </div><div className={styles.context}>{page.hub === "numerology" ? <><h3>Numbers, in everyday life</h3><div className={styles.numberTiles}>{["Date of birth", "Name", "Mobile", "Home", "Business", "Important dates"].map(word => <span key={word}>{word}</span>)}</div><p>Methods can differ. Narayani considers the interpretation beside your circumstances and choices.</p></> : <ElementsDiagram />}</div></section>

      {(page.hub === "numerology" || page.slug === "home" || page.slug === "office-and-shop") && <section className={`section-wrap ${styles.section} ${styles.enquiryPanel}`} aria-labelledby="report-title"><div><h2 id="report-title">{page.hub === "numerology" ? "A report or a personal consultation?" : page.slug === "home" ? "Ask about an online Home Vastulogy report" : "Desk guidance or a full workplace review?"}</h2><p>{page.hub === "numerology" ? "Ask about a report for this topic, or a conversation with Narayani. The report range, contents, fees and delivery details are being finalised." : page.slug === "home" ? "The video-based report is being planned. Ask about its scope first. Do not upload or send private home footage through this preview." : "Tell the team which level of guidance you need. Scope, format and fees will be discussed before you book."}</p></div><EnquiryTrigger topic={`${topic}: report or consultation options`} source={`review-${key}-options`}>Discuss the options</EnquiryTrigger></section>}
    </>}

    <section className="bt-end" id="ready" aria-labelledby="ready-title">
      <div className="bt-ready">
        <span className="bt-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: btLotus }} />
        <h2 id="ready-title">Before you <em>enquire</em></h2>
        <ul>
          {psychic ? <><li><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: btTick }} />Your question about health, relationship, money or career.</li><li><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: btTick }} />One situation or recurring pattern you want to understand.</li></> : page.bring.items.slice(0, 3).map(item => <li key={item.icon}><span aria-hidden="true" dangerouslySetInnerHTML={{ __html: btTick }} /><Rich text={item.text} /></li>)}
        </ul>
      </div>
      <div className="bt-begin" id="fees">
        <h2>Begin with <em>the team</em></h2>
        <p>Your enquiry does not book or pay for a session. Confirm the scope, format, duration and fee before deciding.</p>
        <EnquiryTrigger topic={topic} source={`review-${key}-end`} className="bt-begin-cta"><span>Enquire on WhatsApp</span><span className="bt-go" aria-hidden="true">→</span></EnquiryTrigger>
      </div>
    </section>
  </div>;
}
