import Link from "next/link";
import { asset } from "@/lib/assets";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { Icon } from "@/components/icons/Icon";
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
const numberPhotos = ["/images/practice-numerology-photo.webp", "/images/fees-calendar.webp", "/images/method-1.webp", "/images/how-step-2.webp", "/images/bt-money.webp", "/images/method-2.webp", "/images/bt-career.webp", "/images/how-step-1.webp", "/images/practice-astrology-photo.webp", "/images/method-3.webp"];
const vastuPhotos = ["/images/practice-vastu-photo.webp", "/images/bt-career.webp", "/images/method-2.webp"];

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
    <ServiceHero
      trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, ...(isHub ? [{ label: family }] : [{ label: family, href: `/services/${page.hub}/` }, { label: title }])]}
      kicker={isHub ? "Her practice" : family}
      title={psychic ? <>Brainology <em>Program</em></> : title}
      lead={psychic ? "Bring a situation that keeps repeating. Narayani helps you explore the thoughts, beliefs and responses around it." : content.lead}
      actions={<EnquiryTrigger className="cn-cta" topic={topic} source={`review-${key}-hero`} primary><span>Ask about {family}</span><HeroArrow /></EnquiryTrigger>}
      note={<p className="svd-note">Format, duration and fees to be confirmed with the team.</p>}
      hub={page.hub}
    />

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
    </section> : <>
      {isHub && <section className={`section-wrap ${styles.section}`} id="pages" aria-labelledby="choices-title">
        <span className="bt-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: btLotus }} />
        <p className="bt-kicker">{page.hub === "vastu" ? "Spaces she reads" : "Where numbers meet your life"}</p>
        <h2 id="choices-title">{page.hub === "vastu" ? <>Find the right <em>consultation</em></> : <>Choose what you want <em>to understand</em></>}</h2>
        <p>Ask the team which one fits your question.</p>
        <div className="bt-cards">
          {page.hub === "vastu" ? vastuChoices.map((choice, i) => <article key={choice.name} className="bt-card">
            <div className="bt-card-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(vastuPhotos[i % vastuPhotos.length])} alt="" width={420} height={300} loading="lazy" />
              <span className="bt-card-icon"><Icon id={choice.icon} /></span>
            </div>
            <div className="bt-card-body">
              <h3>{choice.name}</h3>
              <p>{choice.line}</p>
              <div className="bt-card-actions">
                <EnquiryTrigger topic={`Vastulogy: ${choice.name}`} source="vastu-choice" className="bt-card-cta">Enquire <span aria-hidden="true">→</span></EnquiryTrigger>
                {"href" in choice && <Link prefetch={false} className="bt-card-more" href={choice.href}>See the scope</Link>}
              </div>
            </div>
          </article>) : children.map((child, i) => <Link key={child.slug} href={offeringPath(child)} className="bt-card bt-card-link">
            <div className="bt-card-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(numberPhotos[i % numberPhotos.length])} alt="" width={420} height={300} loading="lazy" />
              <span className="bt-card-icon"><Icon id={child.icon} /></span>
            </div>
            <div className="bt-card-body">
              <h3>{child.title}</h3>
              <p>{shortGuidance[`numerology/${child.slug}`]?.points[0]}</p>
              <span className="bt-card-cta">Read more <span aria-hidden="true">→</span></span>
            </div>
          </Link>)}
        </div>
      </section>}

      <section className={`section-wrap ${styles.section} ${styles.split} sx-split`} aria-labelledby="scope-title"><div><h2 id="scope-title">{isHub ? "The question comes first" : "What you look at together"}</h2><ul className={styles.scope}>{content.points.map(point => <li key={point}><Rich text={point} /></li>)}</ul>
        {page.hub === "numerology" && <p className={styles.limit}>A traditional number reading is a perspective to reflect on, not a prediction or a measure of someone’s ability.</p>}
        {page.hub === "vastu" && <p className={styles.limit}>Vastulogy is an interpretive tradition. Structural, medical, legal and investment decisions need qualified professional advice.</p>}
      </div><div className={styles.context}>{page.hub === "numerology" ? <><h3>Numbers, in everyday life</h3><div className={styles.numberTiles}>{["Date of birth", "Name", "Mobile", "Home", "Business", "Important dates"].map(word => <span key={word}>{word}</span>)}</div><p>Methods can differ. Narayani considers the interpretation beside your circumstances and choices.</p></> : <ElementsDiagram />}</div></section>

      {(page.hub === "numerology" || page.slug === "home" || page.slug === "office-and-shop") && <section className={`section-wrap ${styles.section} ${styles.enquiryPanel} sx-panel`} aria-labelledby="report-title"><div><h2 id="report-title">{page.hub === "numerology" ? "A report or a personal consultation?" : page.slug === "home" ? "Ask about an online Home Vastulogy report" : "Desk guidance or a full workplace review?"}</h2><p>{page.hub === "numerology" ? "Ask about a report for this topic, or a conversation with Narayani. The report range, contents, fees and delivery details are being finalised." : page.slug === "home" ? "The video-based report is being planned. Ask about its scope first. Do not upload or send private home footage through this preview." : "Tell the team which level of guidance you need. Scope, format and fees will be discussed before you book."}</p></div><EnquiryTrigger topic={`${topic}: report or consultation options`} source={`review-${key}-options`} className="bt-begin-cta"><span>Discuss the options</span><span className="bt-go" aria-hidden="true">→</span></EnquiryTrigger></section>}
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
