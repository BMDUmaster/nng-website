import type { Metadata } from "next";
import { KundliBackdrop } from "@/components/art/Sky";
import { BookCover } from "@/components/brand/BookCover";
import { Portrait } from "@/components/brand/Portrait";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { QuoteTrack } from "@/components/sections/Sections";
import { SocialSection } from "@/components/sections/SocialSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { beliefs, bookTitle, story } from "@/content/about";
import { voices } from "@/content/voices";
import { asset } from "@/lib/assets";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Narayani Garg | Life Strategist & Vedic Practitioner",
  description:
    "Narayani Garg, The Life Strategist: an MBA and a decade in business before a practice in numerology, vastu and astrology that begins with the mind.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const experiences = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      number: "10+ Years",
      title: "Manufacturing business",
      desc: "After her MBA, Narayani spent about a decade running a kidswear manufacturing business. That experience informs how she listens to questions about work and decisions.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      number: "15+ Years",
      title: "Professional experience",
      desc: "Her work across business and personal guidance shapes how she listens to questions about choices, habits and change.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      number: "Online",
      title: "India and abroad",
      desc: "Personal consultations are available online, including for people living outside India.",
    },
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema()] }} />

      <section className="about-hero-section section-wrap" aria-labelledby="about-hero-title">
        <div className="about-hero-grid">
          <div className="about-hero-copy">
            <p className="kicker">THE PERSON BEHIND THE PRACTICE</p>
            <h1 id="about-hero-title">Meet Narayani Garg</h1>
            <p>She brings a business owner&apos;s eye to decisions and a practitioner&apos;s understanding of astrology, numerology and vastu. Her starting point is the person making the choice.</p>
            <div className="about-hero-actions">
              <EnquiryTrigger source="about-hero" primary>Enquire about a consultation</EnquiryTrigger>
              <a className="text-link" href="#experience">Read her story</a>
            </div>
          </div>
          <figure className="about-hero-photo">
            <img
              src={asset("/images/narayani-about-authentic.webp")}
              alt="Narayani Garg at her practice"
              width={1257}
              height={2048}
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      {/* Experience & Credentials Showcase Section */}
      <section className="about-experience-section section-space" id="experience" aria-labelledby="experience-title">
        <div className="section-wrap">
          <div className="section-heading centered">
            <p className="experience-kicker">Business and practice</p>
            <h2 id="experience-title" className="experience-main-title">Business experience, then a new practice</h2>
            <p className="experience-subtitle">
              She starts with the mind, then uses numerology, Vastu and astrology where they help answer the question you bring.
            </p>
          </div>

          <div className="experience-grid">
            {experiences.map((item, idx) => (
              <div className="experience-card" key={idx}>
                <div className="experience-card-header">
                  <div className="experience-icon-box">{item.icon}</div>
                  <span className="experience-number-badge">{item.number}</span>
                </div>
                <h3 className="experience-card-title">{item.title}</h3>
                <p className="experience-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="band has-backdrop" aria-labelledby="story-title">
        <KundliBackdrop className="in-story" />
        <div className="section-wrap section-space">
          <div className="section-heading">
            <h2 id="story-title">How she came to this work</h2>
          </div>
          <div className="story-grid">
            <Portrait photo="gold" className="story-portrait" sizes="(max-width: 680px) 58vw, 22vw" />
            <ol className="story">
              {story.map((item) => (
                <li key={item.step}>
                  <span className="story-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="band" aria-labelledby="beliefs-title">
        <div className="section-wrap section-space">
          <div className="section-heading">
            <h2 id="beliefs-title">What she holds to</h2>
          </div>
          <div className="beliefs">
            {beliefs.map((belief) => (
              <div className="belief" key={belief.title}>
                <h3>{belief.title}</h3>
                <p>{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Feature Section */}
      <section className="section-wrap section-space book-feature" aria-labelledby="book-title">
        <BookCover />
        <div>
          <h2 id="book-title">
            <em>{bookTitle}</em>
          </h2>
          <p>Her 21-day book explores the mind, daily habits, energy and the chakras through a practice for each day.</p>
          <div className="method-quote">
            <p>“When you change your mind, you change your world.”</p>
            <span>From the book</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="band" aria-labelledby="voices-title">
        <div className="section-wrap section-space">
          <div className="section-heading centered">
            <h2 id="voices-title">In their words</h2>
            <p>Clients share what brought them to Narayani.</p>
          </div>
          <QuoteTrack voices={[voices.shelley, voices.vanshika, voices.shashi]} label="Client testimonials" />
        </div>
      </section>

      <SocialSection platform="youtube" />
    </>
  );
}
