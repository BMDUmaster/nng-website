import type { Metadata } from "next";
import { KundliBackdrop } from "@/components/art/Sky";
import { BookCover } from "@/components/brand/BookCover";
import { Portrait } from "@/components/brand/Portrait";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { QuoteTrack } from "@/components/sections/Sections";
import { ClienteleNote } from "@/components/sections/ClienteleNote";
import { SocialSection } from "@/components/sections/SocialSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { beliefs, bookTitle, story } from "@/content/about";
import { voices } from "@/content/voices";
import { asset } from "@/lib/assets";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Narayani Garg | Psychic Spiritual Mentor",
  description:
    "Meet Dr. Narayani Garg, Psychic Spiritual Mentor. Her guidance in numerology, Vastu and astrology begins with the mind and the patterns behind your decisions.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const experiences = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2 8 10-5 10 5-10 5-10-5Z" />
          <path d="M6 10v7c3 3 9 3 12 0v-7M22 8v7" />
        </svg>
      ),
      // copy-lint-allow: doctorate subject explicitly confirmed by Aryan on 4 Oct 2026; no institution or date claimed.
      number: "PhD",
      title: "Occult Sciences",
      // copy-lint-allow: doctorate subject explicitly confirmed by Aryan on 4 Oct 2026; not a medical qualification.
      desc: "A doctorate in Occult Sciences.",
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
      desc: "Personal guidance through astrology, numerology, Vastu and mindset work.",
    },
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema()] }} />

      <section className="about-hero-section section-wrap" aria-labelledby="about-hero-title">
        <div className="about-hero-grid">
          <div className="about-hero-copy">
            <h1 id="about-hero-title">Meet Dr. Narayani Garg</h1>
            <p>Psychic Spiritual Mentor. Her guidance begins with the thoughts and patterns behind the question you bring.</p>
            <blockquote className="founder-spiritual-quote">“The spirit who is doing a ritual is spiritual.”</blockquote>
            <div className="about-hero-actions">
              <EnquiryTrigger source="about-hero" primary>Enquire about a consultation</EnquiryTrigger>
              <a className="text-link" href="#story">Read her story</a>
            </div>
          </div>
          <figure className="about-hero-film">
            <video controls playsInline preload="metadata" poster={asset("/images/narayani-about-authentic-560.webp")} aria-label="Introduction to Dr. Narayani Garg">
              <source src={asset("/videos/narayani-introduction.mp4")} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <figcaption>Watch Narayani’s introduction</figcaption>
          </figure>
        </div>
      </section>

      {/* Experience & Credentials Showcase Section */}
      <section className="about-experience-section section-space" id="experience" aria-labelledby="experience-title">
        <div className="section-wrap">
          <div className="section-heading centered">
            <h2 id="experience-title" className="experience-main-title">Her background</h2>
          </div>

          <div className="about-background">
            {experiences.map((item, idx) => (
              <div className="about-background-item" key={idx}>
                <span aria-hidden="true">{item.icon}</span>
                <div><h3>{item.number} <span>{item.title}</span></h3><p>{item.desc}</p></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Story Timeline Section */}
      <section className="band has-backdrop" id="story" aria-labelledby="story-title">
        <KundliBackdrop className="in-story" />
        <div className="section-wrap section-space">
          <div className="section-heading">
            <h2 id="story-title">The story behind her name and practice</h2>
            <p>In her book, Narayani shares the personal moments that shaped her sense of purpose.</p>
          </div>
          <div className="story-grid">
            <Portrait photo="gold" className="story-portrait" sizes="(max-width: 680px) 58vw, 22vw" />
            <ol className="story">
              {story.filter(item => item.step !== "The book" && item.step !== "The practice").map((item) => (
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
          <div className="about-principles">
            {beliefs.map((belief) => (
              <div className="about-principle" key={belief.title}>
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
          <p>A 21 day companion for reflection and inner practice, exploring the chakras, EFT and Ho’oponopono.</p>
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
            <ClienteleNote />
          </div>
          <QuoteTrack voices={[voices.shelley, voices.vanshika, voices.shashi]} label="Client testimonials" />
        </div>
      </section>

      <SocialSection platform="youtube" />
    </>
  );
}
