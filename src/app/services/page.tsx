import type { Metadata } from "next";
import Link from "next/link";
import { AlignmentArt, DirectionArt, InPersonArt, MindArt, OnlineArt } from "@/components/art/Art";
import { ServiceIllustration } from "@/components/art/ServiceBanner";
import { MethodJourney } from "@/components/art/Explainer";
import depth from "@/components/art/VisualDepth.module.css";
import { Portrait } from "@/components/brand/Portrait";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { FaqSection, PageHero } from "@/components/sections/Sections";
import { SectionChips } from "@/components/sections/SectionChips";
import { ChoicesIndex } from "@/components/offerings/ChoicesIndex";
import { FeeOptions } from "@/components/offerings/FeeOptions";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/faq";
import { feesPublic } from "@/content/consultation";
import { method, serviceHref, consultationServices as services } from "@/content/services";
import { voices } from "@/content/voices";
import { asset } from "@/lib/assets";
import { ProgramProcess } from "@/components/sections/ProgramProcess";
import { faqSchema, personSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Psychic guidance, astrology, numerology and Vastu with Narayani Garg, brought together around your question. Online or in person.",
  alternates: { canonical: "/services/" },
};

const methodArt = { Mind: MindArt, Direction: DirectionArt, Alignment: AlignmentArt } as const;

const serviceMeta: Record<string, { tag: string; subtitle: string; num: string }> = {
  "brain-training": {
    tag: "Psychic Reader",
    subtitle: "Thought patterns and habits",
    num: "01",
  },
  numerology: {
    tag: "Numerology",
    subtitle: "Date of birth and name",
    num: "02",
  },
  vastu: {
    tag: "Vastu",
    subtitle: "The spaces you live and work in",
    num: "03",
  },
  astrology: {
    tag: "Astrology",
    subtitle: "Your birth chart and your question",
    num: "04",
  },
  "stones-and-rudraksh": {
    tag: "Crystals, Crystals, Stones and Rudraksha",
    subtitle: "Gemstones and beads, chosen with care",
    num: "05",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), ...serviceSchema(services), faqSchema(faqs.services)] }} />

      <PageHero
        crumb="Services"
        personal
        title="Begin with the question you’re facing"
        lead="Bring your question. Narayani considers your situation and thought patterns, using numerology, Vastu or astrology where relevant."
        visual={
          <div className="practice-vastu-portrait">
            <Portrait name="Dr. Narayani Garg" note="Personal guidance" priority sizes="(max-width: 680px) 110px, 340px" />
          </div>
        }
      >
        <div className="cta-row">
          <EnquiryTrigger source="services-hero" primary>
            Enquire about a consultation
          </EnquiryTrigger>
          <Link prefetch={false} className="text-link" href="/consultations/">
            Consultation options and how to begin
          </Link>
        </div>
      </PageHero>

      <SectionChips
        label="Services on this page"
        items={[
          { id: "choose", label: "Start from your question" },
          { id: "method", label: "Her method" },
          { id: "how", label: "How it works" },
          { id: "faq", label: "Questions" },
        ]}
      />
      <details className="practice-page-map section-wrap">
        <summary>Explore the four practices</summary>
        <nav aria-label="All practices on this page">
          {services.map(service => <a key={service.slug} href={`#${service.slug}`}>{service.name}</a>)}
          {feesPublic && <a href="#fees">Session options</a>}
        </nav>
      </details>

      <ChoicesIndex />

      <section className="band" id="method" aria-labelledby="method-title">
        <div className="section-wrap section-space">
          <div className="section-heading">
            <h2 id="method-title">Mind. Direction. Alignment.</h2>
            <p>Understand the pattern, choose your next step and bring it into daily life. The other practices add context to the question you bring.</p>
          </div>
          <MethodJourney />
          <details className={depth.depth}>
            <summary>How the practices fit together</summary>
          <div className="triad">
            {method.map((step) => {
              const Art = methodArt[step.word];
              return (
                <div className="triad-item" key={step.word}>
                  <div className="triad-art">
                    <Art />
                  </div>
                  <h3>{step.word}</h3>
                  <p>{step.text}</p>
                  <div className="service-tags">
                    {step.services.map((slug) => {
                      const service = services.find((s) => s.slug === slug)!;
                      return (
                        <a key={slug} href={`#${slug}`}>
                          {service.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          </details>
        </div>
      </section>

      <div className="section-wrap services-showcase-container">
        {services.map((service, i) => {
          const meta = serviceMeta[service.slug];
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`service-card-luxury${i % 2 ? " is-reversed" : ""}`}
              aria-labelledby={`${service.slug}-title`}
            >
              <div className="service-card-visual">
                <div className="service-card-img-wrap">
                  <ServiceIllustration hub={service.slug} />
                </div>
              </div>

              <div className="service-card-content">
                <div className="service-card-kicker">{meta.subtitle}</div>
                <h2 id={`${service.slug}-title`} className="service-card-title">{service.name}</h2>
                <p className="service-card-lead">{service.lead}</p>

                {service.quote && (
                  <figure className="service-card-quote">
                    <blockquote>
                      <p>“{service.quote}”</p>
                    </blockquote>
                    <figcaption>Narayani Garg · Translated from Hindi</figcaption>
                  </figure>
                )}

                <div className="service-card-focus-block">
                  <span className="focus-label">What you look at together</span>
                  <ul className="service-focus-list">
                    {service.look.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-cta">
                  <EnquiryTrigger topic={service.topic} source={`services-${service.slug}`} className="service-enquiry-btn">
                    <span>Enquire about {service.name}</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </EnquiryTrigger>
                  <Link prefetch={false} className="text-link service-card-more" href={serviceHref(service.slug)}>
                    Read about {service.name}
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <FeeOptions topic="a personal consultation" source="services-fees" />

      <section className="consultation-journey" id="how" aria-labelledby="how-title">
        <div className="section-wrap section-space">
          <div className="section-heading">
            <h2 id="how-title">How a consultation works</h2>
            <p>The team explains the options and fees before you book.</p>
          </div>
          <ProgramProcess steps={[
            { title: "Reach out", text: "Send a WhatsApp message, call or email the team." },
            { title: "Share your question", text: "Tell the team what is on your mind and what you have tried." },
            { title: "Your consultation", text: "Meet Narayani online or in person, by appointment." },
            { title: "The next step", text: "Discuss what to work on next and whether ongoing guidance would suit you." },
          ]} />
          <div className="consultation-formats">
            <div className="consultation-format-intro"><span className="kicker">Two ways to meet</span><h3>Choose what suits you.</h3></div>
            <div className="formats">
              <div className="format">
                <OnlineArt />
                <div>
                  <h3>Online</h3>
                  <p>Join from wherever you are. Share your country and time zone when you enquire.</p>
                </div>
              </div>
              <div className="format">
                <InPersonArt />
                <div>
                  <h3>In person</h3>
                  <p>At her practice, by appointment. The team shares the details when you book.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-space" aria-label="A client’s words">
        <div className="service-quote-showcase">
          <div className="service-quote-image-wrap">
            <img
              src={asset("/images/testimonials/client-0.webp")}
              alt="Deepa K., sharing her experience with Narayani Garg"
              className="service-quote-img"
              width={380}
              height={320}
              loading="lazy"
            />
            <div className="service-quote-badge">
              <span>Client Experience</span>
            </div>
          </div>
          <div className="service-quote-body">
            <span className="quote-mark-icon" aria-hidden="true">“</span>
            <blockquote className="service-quote-text">
              “{voices.deepa.quote}”
            </blockquote>
            <div className="service-quote-author">
              <strong>Deepa K.</strong>
              <span>Client since 2020 · Translated from Hindi</span>
            </div>
            <div className="service-quote-link-wrap">
              <Link prefetch={false} className="text-link" href="/hand-holding-program/">
                Need more than one conversation? Read about the program lasting six months →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs.services} source="services-faq" />
    </>
  );
}
