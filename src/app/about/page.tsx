import type { Metadata } from "next";
import Link from "next/link";
import { KundliBackdrop } from "@/components/art/Sky";
import { BookCover } from "@/components/brand/BookCover";
import { Portrait } from "@/components/brand/Portrait";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { FounderIntroSection } from "@/components/sections/FounderIntroSection";
import { QuoteTrack } from "@/components/sections/Sections";
import { SocialSection } from "@/components/sections/SocialSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { beliefs, bookTitle, story } from "@/content/about";
import { site } from "@/content/site";
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
      title: "Corporate & Business Leadership",
      desc: "MBA qualification followed by a decade running a manufacturing enterprise. Brings pragmatic corporate strategy, sharp logical analysis, and grounded problem-solving to every life consultation.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      number: "8+ Years",
      title: "Vedic & Astrological Mastery",
      desc: "Comprehensive practice in Vedic Astrology (Kundli & Dasha analysis), Numerology, and Vastu Shastra, combined uniquely with subconscious mindset alignment and habit reformation.",
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
      number: "1,200+",
      title: "Clients Guided Worldwide",
      desc: "Personal one-on-one consultations for entrepreneurs, senior corporate leaders, families, and students across India, UK, USA, Australia, and Canada.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10M6 10h10M6 14h6" />
        </svg>
      ),
      number: "Published",
      title: "Author & Life Coach",
      desc: `Author of "${bookTitle}" — a 21-day practical guide to inner transformation, energy alignment, chakra awareness, and conscious mindset rewiring.`,
    },
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema()] }} />

      {/* Hero Section matching User Reference Image 1 (Gold Cosmic Chakra Banner) */}
      <section className="about-hero-section section-space" aria-labelledby="about-hero-title">
        <div className="section-wrap">
          <div className="about-gold-banner-card">
            <img
              src={asset("/images/about-hero-gold-banner.png")}
              alt="Every living soul is a universe in itself - Narayani Garg"
              className="about-gold-banner-img"
              width={1280}
              height={460}
              loading="eager"
              fetchPriority="high"
            />

            {/* Interactive CTA overlay & actions */}
            <div className="about-gold-banner-overlay">
              <div className="about-gold-banner-cta-wrap">
                <EnquiryTrigger source="about-hero" primary className="about-banner-gold-btn">
                  <span>Enquire about a consultation</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </EnquiryTrigger>
                <a className="about-banner-glass-btn" href="#experience">
                  <span>Explore experience &amp; journey</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Credentials Showcase Section */}
      <section className="about-experience-section section-space" id="experience" aria-labelledby="experience-title">
        <div className="section-wrap">
          <div className="section-heading centered">
            <p className="experience-kicker">Professional Journey</p>
            <h2 id="experience-title" className="experience-main-title">
              Experience, Wisdom &amp; Proven Method
            </h2>
            <p className="experience-subtitle">
              A rare blend of sharp corporate leadership, analytical business strategy, and authentic Vedic knowledge.
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

          {/* Quick Experience Stats Banner */}
          <div className="experience-stats-strip">
            <div className="exp-stat-item">
              <strong>10+</strong>
              <span>Years Corporate Acumen</span>
            </div>
            <div className="exp-stat-item">
              <strong>8+</strong>
              <span>Years Vedic Practice</span>
            </div>
            <div className="exp-stat-item">
              <strong>1,200+</strong>
              <span>Lives Transformed</span>
            </div>
            <div className="exp-stat-item">
              <strong>100%</strong>
              <span>Confidential Guidance</span>
            </div>
            <div className="exp-stat-item">
              <strong>5+</strong>
              <span>Countries Consulted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Introduction by Narayani Garg */}
      <FounderIntroSection />

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
          <p>Her 21-day guide to inner change: the mind and its habits, energy and the chakras, the four areas of life, a practice for each day.</p>
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
            <h2 id="voices-title">From London to the exam hall</h2>
            <p>Shelley, after seven years. Vanshika, before her Grade 10 exams, and her mother with her.</p>
          </div>
          <QuoteTrack voices={[voices.shelley, voices.vanshika, voices.shashi]} label="Client testimonials" />
        </div>
      </section>

      <SocialSection platform="youtube" />
    </>
  );
}
