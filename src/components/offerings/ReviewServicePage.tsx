import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { Icon } from "@/components/icons/Icon";
import { ServiceIllustration } from "@/components/art/ServiceBanner";
import { OfferArt } from "@/components/art/OfferArt";
import { childPages, offeringPath } from "@/content/offerings";
import type { OfferingPage } from "@/content/offerings/types";
import { psychicChoices, shortGuidance, vastuChoices } from "@/content/review-release";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/schema";
import { Rich } from "@/components/ui/Rich";
import styles from "./ReviewServicePage.module.css";
import { ElementsOrbit } from "@/components/art/ElementsOrbit";
import { PatternSequence } from "@/components/art/PatternSequence";

function PatternDiagram() {
  return <PatternSequence />;
}

function ElementsDiagram() {
  return <ElementsOrbit />;
}

export function ReviewServicePage({ page }: { page: OfferingPage }) {
  const psychic = page.hub === "brain-training";
  const isHub = !page.slug || psychic;
  const key = page.slug ? `${page.hub}/${page.slug}` : page.hub;
  const content = shortGuidance[key] ?? shortGuidance[page.hub];
  const title = psychic ? "Psychic Reader" : page.title;
  const topic = psychic ? "Psychic Reader" : page.enquiryTopic;
  const family = psychic ? "Psychic Reader" : page.hub === "vastu" ? "Vastu" : "Numerology";
  const children = childPages(page.hub);
  return <div className={styles.page}>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: title, serviceType: family, provider: personSchema(), description: psychic ? "Spiritual guidance around recurring patterns, thoughts and beliefs." : content.lead }} />
    <section className={`section-wrap ${styles.hero} offer-hero`}>
      <div><nav aria-label="Breadcrumb" className={styles.crumb}><Link href="/">Home</Link><span>/</span><Link href="/services/">Services</Link>{!isHub && <><span>/</span><Link href={`/services/${page.hub}/`}>{family}</Link></>}</nav>
        <h1>{title}</h1>
        <p className={styles.lead}>{psychic ? "Bring a situation that keeps repeating. Narayani helps you explore the thoughts, beliefs and responses around it." : content.lead}</p>
        <EnquiryTrigger topic={topic} source={`review-${key}-hero`} primary>Ask about {family}</EnquiryTrigger>
        <p className={styles.note}>Format, duration and fees to be confirmed with the team.</p>
      </div>
      <div className={styles.heroArt}>{psychic ? <PatternDiagram /> : !isHub ? <OfferArt spec={page.art} label={`Illustration for ${title}`} /> : <ServiceIllustration hub={page.hub} />}</div>
    </section>

    {psychic ? <section className={`section-wrap ${styles.section}`} id="pages" aria-labelledby="choices-title">
      <h2 id="choices-title">Choose your consultation</h2><p>Six starting points. Ask the team which one fits your question.</p>
      <div className={styles.cards}>{psychicChoices.map(choice => <article key={choice.name} className={styles.card}><Icon id={choice.icon} /><h3>{choice.name}</h3><p>{choice.line}</p><p className={styles.pending}>Details and fee to be confirmed</p><EnquiryTrigger topic={`Psychic Reader: ${choice.name}`} source="psychic-choice" className="text-link">Enquire on WhatsApp</EnquiryTrigger></article>)}</div>
      <p className={styles.limit}>These are personal and spiritual consultations, not medical or mental health treatment. No health, relationship, financial or career outcome is guaranteed.</p>
    </section> : <>
      {isHub && <section className={`section-wrap ${styles.section}`} id="pages" aria-labelledby="choices-title"><h2 id="choices-title">{page.hub === "vastu" ? "Find the right Vastu consultation" : "Choose what you want to understand"}</h2>
        {page.hub === "vastu" ? <div className={styles.cards}>{vastuChoices.map(choice => <article key={choice.name} className={styles.card}><Icon id={choice.icon} /><h3>{choice.name}</h3><p>{choice.line}</p><EnquiryTrigger topic={`Vastu: ${choice.name}`} source="vastu-choice" className="text-link">Ask the team</EnquiryTrigger>{"href" in choice && <Link className={styles.more} href={choice.href}>See the scope</Link>}</article>)}</div> : <div className={styles.topics}>{children.map(child => <Link key={child.slug} href={offeringPath(child)}><Icon id={child.icon} /><span><strong>{child.title}</strong><small>{shortGuidance[`numerology/${child.slug}`]?.points[0]}</small></span><span aria-hidden="true">↗</span></Link>)}</div>}
      </section>}

      <section className={`section-wrap ${styles.section} ${styles.split}`} aria-labelledby="scope-title"><div><h2 id="scope-title">{isHub ? "The question comes first" : "What you look at together"}</h2><ul className={styles.scope}>{content.points.map(point => <li key={point}><Rich text={point} /></li>)}</ul>
        {page.hub === "numerology" && <p className={styles.limit}>A traditional number reading is a perspective to reflect on, not a prediction or a measure of someone’s ability.</p>}
        {page.hub === "vastu" && <p className={styles.limit}>Vastu is an interpretive tradition. Structural, medical, legal and investment decisions need qualified professional advice.</p>}
      </div><div className={styles.context}>{page.hub === "numerology" ? <><h3>Numbers, in everyday life</h3><div className={styles.numberTiles}>{["Date of birth", "Name", "Mobile", "Home", "Business", "Important dates"].map(word => <span key={word}>{word}</span>)}</div><p>Methods can differ. Narayani considers the interpretation beside your circumstances and choices.</p></> : <ElementsDiagram />}</div></section>

      {(page.hub === "numerology" || page.slug === "home" || page.slug === "office-and-shop") && <section className={`section-wrap ${styles.section} ${styles.enquiryPanel}`} aria-labelledby="report-title"><div><h2 id="report-title">{page.hub === "numerology" ? "A report or a personal consultation?" : page.slug === "home" ? "Ask about an online Home Vastu report" : "Desk guidance or a full workplace review?"}</h2><p>{page.hub === "numerology" ? "Ask about a report for this topic, or a conversation with Narayani. The report range, contents, fees and delivery details are being finalised." : page.slug === "home" ? "The video-based report is being planned. Ask about its scope first. Do not upload or send private home footage through this preview." : "Tell the team which level of guidance you need. Scope, format and fees will be discussed before you book."}</p></div><EnquiryTrigger topic={`${topic}: report or consultation options`} source={`review-${key}-options`}>Discuss the options</EnquiryTrigger></section>}
    </>}

    <section className={`section-wrap ${styles.section}`} id="ready" aria-labelledby="ready-title"><h2 id="ready-title">Before you enquire</h2><ul className={styles.scope}>
      {psychic ? <><li>Your question about health, relationship, money or career.</li><li>One situation or recurring pattern you want to understand.</li></> : page.bring.items.slice(0, 3).map(item => <li key={item.icon}><Rich text={item.text} /></li>)}
    </ul><p className={styles.limit}>Share only your own details, or information you have permission to share. A parent or guardian must consent for a child. Do not send medical records, ID documents or private home videos in a first enquiry.</p></section>
    <section className={`section-wrap ${styles.section} ${styles.next}`} id="fees"><h2>Begin with the team</h2><p>Your enquiry does not book or pay for a session. Confirm the scope, format, duration and fee before deciding.</p><EnquiryTrigger topic={topic} source={`review-${key}-end`}>Enquire on WhatsApp</EnquiryTrigger></section>
  </div>;
}
