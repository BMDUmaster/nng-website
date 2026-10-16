import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIllustration } from "@/components/art/ServiceBanner";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { Icon } from "@/components/icons/Icon";
import { FeeOptions } from "@/components/offerings/FeeOptions";
import { HomeFaq } from "@/components/sections/HomeLower";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { choiceGroups } from "@/content/choices";
import { feesPublic } from "@/content/consultation";
import { faqs } from "@/content/faq";
import { method, serviceHref, consultationServices as services } from "@/content/services";
import { site } from "@/content/site";
import { voicePoster, voices } from "@/content/voices";
import { asset } from "@/lib/assets";
import { faqSchema, personSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description: "Psychic guidance, astrology, numerology and Vastu with Narayani Garg, brought together around your question. Online or in person.",
  alternates: { canonical: "/services/" },
};

const subtitles: Record<string, string> = {
  "brain-training": "Thought patterns and habits",
  numerology: "Date of birth and name",
  vastu: "The spaces you live and work in",
  astrology: "Your birth chart and your question",
};

const steps = [
  { title: "Reach out", text: "Send a WhatsApp message, call or email the team." },
  { title: "Share your question", text: "Tell the team what is on your mind and what you have tried." },
  { title: "Your consultation", text: "Meet Narayani online or in person, by appointment." },
  { title: "The next step", text: "Discuss what to work on next and whether ongoing guidance would suit you." },
];

const svIco = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const svIcons = {
  lotus: svIco('<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/>'),
  "brain-training": svIco('<path d="M12 6.5a3.5 3.5 0 0 0-6.6 1.6A3.8 3.8 0 0 0 4 15a3.6 3.6 0 0 0 2 5.6A3.6 3.6 0 0 0 12 24V6.5ZM20 6.5a3.5 3.5 0 0 1 6.6 1.6A3.8 3.8 0 0 1 28 15a3.6 3.6 0 0 1-2 5.6A3.6 3.6 0 0 1 20 24"/><path d="M16 5v22M12 11H9.5M12 17h-3M20 13h2.5M20 19h3"/>'),
  astrology: svIco('<path d="M16 4l3.2 7.4 8 .7-6 5.3 1.8 7.8L16 21.2l-7 4 1.8-7.8-6-5.3 8-.7Z"/><circle cx="16" cy="15" r="2.5"/>'),
  numerology: svIco('<path d="M16 16c0-1.7 1.3-3 3-3s3 1.3 3 3.2c0 3.4-3.2 5.8-6.5 5.8-4 0-7-3.3-7-7.4C8.5 9.4 12 6 16.6 6 21.5 6 26 9.8 26 15.4"/>'),
  vastu: svIco('<path d="M5 15 16 5l11 10"/><path d="M8 13v14h16V13"/><path d="M13 27v-7h6v7"/>'),
};
const svValues = [
  { title: "Personalised Guidance", text: "For your unique journey", icon: svIcons.lotus },
  { title: "Clarity & Direction", text: "Understand your patterns", icon: svIco('<path d="M7 25C7 14 14 7 26 6c0 12-7 19-17 19"/><path d="M7 25 19 13"/>') },
  { title: "Practical Solutions", text: "For real-life situations", icon: svIco('<circle cx="16" cy="16" r="5.5"/><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M6.8 25.2l2.8-2.8M22.4 9.6l2.8-2.8"/>') },
  { title: "Supportive Approach", text: "With empathy and insight", icon: svIco('<path d="M16 27S4 19.6 4 11.6A6.1 6.1 0 0 1 16 9a6.1 6.1 0 0 1 12 2.6C28 19.6 16 27 16 27Z"/>') },
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
 * Services: a plum opening, concerns to start from, her method, each practice in turn, how a consultation works,
 * a client's words and questions. Sections rise in once as they come into view.
 */
export default function ServicesPage() {
  const deepa = voices.deepa;
  return (
    <div className="cn sv">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), ...serviceSchema(services), faqSchema(faqs.services)] }} />

      <section className="svh" aria-labelledby="page-title">
        <span className="svh-m-deco" aria-hidden="true" />
        <div className="svh-inner">
          <div className="svh-copy" data-reveal="">
            <nav className="cn-crumbs svh-crumbs" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Services</span>
            </nav>
            <p className="svh-kicker">
              <span className="svh-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svIcons.lotus }} />
              Her practices
            </p>
            <h1 id="page-title">
              Begin with the question <em>you’re facing</em>
            </h1>
            <span className="svh-rule" aria-hidden="true" />
            <p className="svh-lead">Bring your question. Narayani considers your situation and thought patterns, using numerology, Vastu or astrology where relevant.</p>
            <div className="svh-actions">
              <EnquiryTrigger className="svh-cta" source="services-hero" primary>
                <span className="cx-long">Enquire about a consultation</span>
                <span className="cx-short">Enquire now</span>
                <span className="svh-go" aria-hidden="true">→</span>
              </EnquiryTrigger>
              <Link prefetch={false} className="svh-ghost" href="/consultations/">
                <span className="cx-long">Consultation options and how to begin</span>
                <span className="cx-short">Options</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className="svh-jump" aria-label="The four practices">
              {services.map((service) => (
                <li key={service.slug}>
                  <a href={`#${service.slug}`}>
                    <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: svIcons[service.slug as keyof typeof svIcons] ?? svIcons.lotus }} />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="svh-visual" data-reveal="">
            <span className="svh-frame" aria-hidden="true" />
            <span className="svh-sprig svh-sprig-1" aria-hidden="true" />
            <span className="svh-sprig svh-sprig-2" aria-hidden="true" />
            <span className="svh-photo-leaves" aria-hidden="true" />
            <div className="svh-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <picture>
                <source media="(max-width: 900px)" srcSet={asset("/images/services-hero-room-m.webp")} />
                <img src={asset("/images/services-hero-room.webp")} alt={`Narayani Garg, ${site.title}`} width={1544} height={1396} fetchPriority="high" />
              </picture>
            </div>
            <p className="svh-badge">
              <span className="svh-badge-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svIcons.lotus }} />
              <span>Narayani Garg</span>
              <small>Personal guidance</small>
            </p>
          </div>
        </div>
        <span className="svh-blur-leaf" aria-hidden="true" />
        <ul className="svh-values" aria-label="How she guides">
          {svValues.map((v) => (
            <li key={v.title}>
              <span className="svh-v-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: v.icon }} />
              <span>
                <strong>{v.title}</strong>
                <small>{v.text}</small>
              </span>
            </li>
          ))}
        </ul>
        <div className="svh-explore">
          <p className="svh-explore-kicker">Explore her practices</p>
          <ul className="svh-jump svh-jump-m" aria-label="The four practices">
            {services.map((service) => (
              <li key={service.slug}>
                <a href={`#${service.slug}`}>
                  <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: svIcons[service.slug as keyof typeof svIcons] ?? svIcons.lotus }} />
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="cn-chips" aria-label="Services on this page">
        <div className="cn-chips-inner">
          <a href="#choose">Start from your question</a>
          <a href="#method">Her method</a>
          <a href="#practices">The practices</a>
          {feesPublic && <a href="#fees">Session options</a>}
          <a href="#how">How it works</a>
          <a href="#faq">Questions</a>
        </div>
      </nav>

      {/* Start from what you are facing. */}
      <section className="cn-sec sv-choose" id="choose" aria-labelledby="choose-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Where to begin</p>
            <h2 id="choose-title">Start from what you are facing</h2>
            <p>Choose a concern. You do not need to know which practice to ask for.</p>
          </header>
          <div className="sv-concerns">
            {choiceGroups.map((group, i) => (
              <details key={group.heading} className="sv-concern" name="consultation-concern" data-reveal="" style={{ "--d": `${(i % 2) * 70}ms` } as React.CSSProperties}>
                <summary>
                  <span className="sv-concern-icon">
                    <Icon id={group.icon} />
                  </span>
                  <span className="sv-concern-text">
                    <strong>{group.heading}</strong>
                    <span>{group.choices[0].say}</span>
                  </span>
                  <span className="fq-icon" aria-hidden="true" />
                </summary>
                <ul>
                  {group.choices.map((choice) => (
                    <li key={choice.say}>
                      <Link prefetch={false} href={choice.href}>
                        {choice.say} <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Mind. Direction. Alignment. */}
      <section className="cn-sec sv-method" id="method" aria-labelledby="method-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker">Her method</p>
            <h2 id="method-title">
              Mind. Direction. <em>Alignment.</em>
            </h2>
            <p>Understand the pattern, choose your next step and bring it into daily life. The other practices add context to the question you bring.</p>
          </header>
          <ol className="sv-triad">
            {method.map((step, i) => (
              <li key={step.word} data-reveal="" style={{ "--d": `${i * 120}ms` } as React.CSSProperties}>
                <span className="sv-triad-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.word}</h3>
                <p>{step.text}</p>
                <div className="sv-tags">
                  {step.services.map((slug) => {
                    const service = services.find((s) => s.slug === slug)!;
                    return (
                      <a key={slug} href={`#${slug}`}>
                        {service.name}
                      </a>
                    );
                  })}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The practices. */}
      <section className="cn-sec sv-practices" id="practices" aria-label="The practices">
        <div className="cn-inner">
          {services.map((service, i) => (
            <article key={service.slug} id={service.slug} className={`sv-practice${i % 2 ? " is-flipped" : ""}`} aria-labelledby={`${service.slug}-title`} data-reveal="">
              <div className="sv-practice-art">
                <span className="sv-practice-num">{String(i + 1).padStart(2, "0")}</span>
                <ServiceIllustration hub={service.slug} />
              </div>
              <div className="sv-practice-body">
                <p className="sv-practice-kicker">{subtitles[service.slug]}</p>
                <h2 id={`${service.slug}-title`}>{service.name}</h2>
                <p className="sv-practice-lead">{service.lead}</p>
                {service.quote && (
                  <figure className="sv-practice-quote">
                    <blockquote>
                      <p>“{service.quote}”</p>
                    </blockquote>
                    <figcaption>Narayani Garg · Translated from Hindi</figcaption>
                  </figure>
                )}
                <p className="sv-look-label">What you look at together</p>
                <ul className="sv-look">
                  {service.look.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="sv-practice-actions">
                  <EnquiryTrigger className="cn-cta" topic={service.topic} source={`services-${service.slug}`}>
                    <span>Enquire about {service.name}</span>
                    <Arrow />
                  </EnquiryTrigger>
                  <Link prefetch={false} className="cn-text" href={serviceHref(service.slug)}>
                    Read about {service.name} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {feesPublic && <FeeOptions topic="a personal consultation" source="services-fees" />}

      {/* How a consultation works. */}
      <section className="cn-sec cn-how sv-how" id="how" aria-labelledby="how-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">How it works</p>
            <h2 id="how-title">How a consultation works</h2>
            <p>The team explains the options and fees before you book.</p>
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
          <div className="sv-formats" data-reveal="">
            <div className="sv-formats-intro">
              <p className="cn-kicker cn-kicker-dark">Two ways to meet</p>
              <h3>Choose what suits you.</h3>
            </div>
            <div className="sv-format">
              <span className="ct-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
              </span>
              <div>
                <h4>Online</h4>
                <p>Join from wherever you are. Share your country and time zone when you enquire.</p>
              </div>
            </div>
            <div className="sv-format">
              <span className="ct-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
              </span>
              <div>
                <h4>In person</h4>
                <p>At her practice, by appointment. The team shares the details when you book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A client's words. */}
      <section className="cn-sec sv-client" aria-label="A client’s words">
        <div className="cn-inner">
          <figure className="ct-quote" data-reveal="">
            <div className="ct-quote-photo">
              <img src={voicePoster(deepa)} alt="Deepa K., sharing her experience with Narayani Garg" width={380} height={320} loading="lazy" />
              <span>Client experience</span>
            </div>
            <div className="ct-quote-body">
              <span className="ct-quote-mark" aria-hidden="true">“</span>
              <blockquote>
                <p>{deepa.quote}</p>
              </blockquote>
              <figcaption>
                <strong>Deepa K.</strong>
                <span>Client since 2020 · Translated from Hindi</span>
              </figcaption>
              <Link prefetch={false} className="cn-text sv-program-link" href="/hand-holding-program/">
                Need more than one conversation? Read about the program lasting six months <span aria-hidden="true">→</span>
              </Link>
            </div>
          </figure>
        </div>
      </section>

      <HomeFaq items={faqs.services} source="services-faq" />
      <Reveal />
    </div>
  );
}
