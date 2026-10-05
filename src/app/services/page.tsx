import type { Metadata } from "next";
import Link from "next/link";
import { AlignmentArt, DirectionArt, InPersonArt, MindArt, OnlineArt } from "@/components/art/Art";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { FaqSection, PageHero } from "@/components/sections/Sections";
import { SectionChips } from "@/components/sections/SectionChips";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/faq";
import { method, services } from "@/content/services";
import { voices } from "@/content/voices";
import { asset } from "@/lib/assets";
import { faqSchema, personSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mind training, numerology, vastu and astrology with Narayani Garg, brought together around your question. Online or in person.",
  alternates: { canonical: "/services/" },
};

const methodArt = { Mind: MindArt, Direction: DirectionArt, Alignment: AlignmentArt } as const;

const serviceMeta: Record<string, { img: string; tag: string; subtitle: string; num: string }> = {
  "mind-training": {
    img: "/images/service-mind-training.jpg",
    tag: "Mind Training",
    subtitle: "Thought patterns and habits",
    num: "01",
  },
  numerology: {
    img: "/images/service-numerology.jpg",
    tag: "Numerology",
    subtitle: "Date of birth and name",
    num: "02",
  },
  vastu: {
    img: "/images/service-vastu.jpg",
    tag: "Vastu",
    subtitle: "The spaces you live and work in",
    num: "03",
  },
  astrology: {
    img: "/images/service-astrology.jpg",
    tag: "Astrology",
    subtitle: "Your birth chart and your question",
    num: "04",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), ...serviceSchema(services), faqSchema(faqs.services)] }} />

      <PageHero
        crumb="Services"
        title="Mind training, numerology, vastu and astrology"
        lead="Start with the question you are facing. Narayani considers your thought patterns and circumstances, then draws on numerology, Vastu or astrology where relevant."
        visualLate
        visual={
          <nav className="service-mosaic" aria-label="The four services on this page">
            {services.map((service) => {
              const meta = serviceMeta[service.slug];
              return (
                <a key={service.slug} href={`#${service.slug}`} className="service-mosaic-card">
                  <div className="mosaic-card-bg">
                    <img src={asset(meta.img)} alt="" aria-hidden="true" loading="lazy" />
                    <div className="mosaic-overlay" />
                  </div>
                  <div className="mosaic-card-content">
                    <span className="mosaic-num">{meta.num}</span>
                    <span className="mosaic-title">{service.name}</span>
                  </div>
                </a>
              );
            })}
          </nav>
        }
      >
        <div className="cta-row">
          <EnquiryTrigger source="services-hero" primary>
            Enquire about a consultation
          </EnquiryTrigger>
          <a className="text-link" href="#how">
            How a consultation works
          </a>
        </div>
      </PageHero>

      <SectionChips
        label="Services on this page"
        items={[
          { id: "method", label: "Her method" },
          ...services.map((service) => ({ id: service.slug, label: service.name })),
          { id: "how", label: "How it works" },
          { id: "faq", label: "FAQ" },
        ]}
      />

      <section className="band" id="method" aria-labelledby="method-title">
        <div className="section-wrap section-space">
          <div className="section-heading">
            <h2 id="method-title">Mind. Direction. Alignment.</h2>
            <p>She starts with how you think and respond. The other practices add context to the choice in front of you.</p>
          </div>
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
                  <img
                    src={asset(meta.img)}
                    alt={`${service.name} by Narayani Garg`}
                    className="service-real-img"
                    width={560}
                    height={460}
                    loading="lazy"
                  />
                  <div className="service-card-badge">
                    <span>{meta.tag}</span>
                  </div>
                  <div className="service-card-num-badge">
                    <span>{meta.num}</span>
                  </div>
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
                      <li key={item}>
                        <span className="focus-bullet" aria-hidden="true">✦</span>
                        <span>{item}</span>
                      </li>
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
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="band consultation-journey" id="how" aria-labelledby="how-title">
        <div className="section-wrap section-space">
          <div className="section-heading">
            <h2 id="how-title">How a consultation works</h2>
            <p>The team explains the options and fees before you book.</p>
          </div>
          <ol className="steps">
            <li>
              <span className="list-number">1</span>
              <h3>Reach out</h3>
              <p>Send a WhatsApp message, call or email the team.</p>
            </li>
            <li>
              <span className="list-number">2</span>
              <h3>Share your question</h3>
              <p>Tell the team what is on your mind and what you have already tried.</p>
            </li>
            <li>
              <span className="list-number">3</span>
              <h3>Your consultation</h3>
              <p>With Narayani, online or in person, by appointment.</p>
            </li>
            <li>
              <span className="list-number">4</span>
              <h3>The next step</h3>
              <p>Discuss what to work on next, and whether you would like ongoing guidance.</p>
            </li>
          </ol>
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

      <FaqSection items={faqs.services} source="services-faq" />
    </>
  );
}
