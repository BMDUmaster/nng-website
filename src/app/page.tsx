import Link from "next/link";
import { preload } from "react-dom";
import { AlignmentArt, DirectionArt, MindArt } from "@/components/art/Art";
import { BookCover } from "@/components/brand/BookCover";
import { Portrait } from "@/components/brand/Portrait";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { AreasRibbon, FaqSection, ProgramPanel, QuoteTrack, ServiceCards } from "@/components/sections/Sections";
import { BlogSection } from "@/components/sections/BlogSection";
import { StoryRail } from "@/components/voices/StoryRail";
import { SocialSection } from "@/components/sections/SocialSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/faq";
import { figures, site } from "@/content/site";
import { homeFilms, homeQuotes, moreFilms } from "@/content/voices";
import { bookTitle } from "@/content/about";
import { method } from "@/content/services";
import { asset, assetSet } from "@/lib/assets";
import { faqSchema, personSchema } from "@/lib/schema";

export default function HomePage() {
  // Preload hero portrait
  preload(asset("/images/narayani-portrait-480.avif"), {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
    imageSrcSet: assetSet("/images/narayani-portrait-480.avif 480w, /images/narayani-portrait-684.avif 684w"),
    imageSizes: "(max-width: 680px) min(68vw, 270px), (max-width: 1190px) 36vw, 440px",
  });

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), faqSchema(faqs.home)] }} />

      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">ASTROLOGY · NUMEROLOGY · VASTU</p>
          <div className="hero-human-cue">
            <img src={asset("/images/narayani-cover-portrait-480.webp")} width={52} height={52} alt="" />
            <span>Personal guidance with <strong>Dr. Narayani Garg</strong></span>
          </div>
          <h1 id="hero-title">
            Change begins <span className="highlight">with the mind.</span>
          </h1>
          <p className="hero-description">For questions about relationships, career, health or money, Narayani brings astrology, numerology and vastu into a conversation about the patterns behind your choices.</p>
          <p className="hero-proof" aria-label="Narayani's experience">
            {figures.map((figure) => (
              <span key={figure.label}><strong>{figure.value}</strong> {figure.label}</span>
            ))}
          </p>

          <div className="hero-actions">
            <EnquiryTrigger source="hero" primary>
              <span>Enquire about a consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </EnquiryTrigger>
            <a className="button-secondary" href="#approach">
              <span>How she works</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>

          <p className="cta-note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
            Pick a topic; WhatsApp opens with your message written.
          </p>
        </div>

        <div className="hero-visual">
          <Portrait name="Narayani Garg" note="THE LIFE STRATEGIST" priority orbit sizes="(max-width: 680px) min(68vw, 270px), (max-width: 1190px) 36vw, 440px" />
        </div>
      </section>

      <AreasRibbon />

      <section className="section-wrap section-space" id="testimonials" aria-labelledby="testimonial-title">
        <div className="section-heading centered">
          <h2 id="testimonial-title">In their own words</h2>
          <p>What her guidance has meant to the people who know her.</p>
        </div>
        <QuoteTrack voices={homeQuotes} label="Client testimonials" />
      </section>

      <section className="band" id="approach" aria-labelledby="approach-title">
        <div className="section-wrap section-space approach-grid">
          <div className="approach-intro">
            <h2 id="approach-title">Why she starts with the mind</h2>
            <p>You may know what needs to change and still find yourself falling into old habits. Her work starts there. Astrology, numerology and vastu support the guidance, alongside the choices you make every day.</p>
            <div className="approach-quote">
              <Portrait photo="book" className="approach-portrait" sizes="120px" />
              <div className="method-quote">
                <p lang="hi-Latn">“Upay tab kaam karta hai jab dimaag kaam karta hai.”</p>
                <span>Narayani Garg</span>
                <small>A remedy works when the mind works.</small>
              </div>
            </div>
          </div>
          <div className="method-explainer">
            <dl className="method-steps">
              {method.map((step) => {
                const Art = { Mind: MindArt, Direction: DirectionArt, Alignment: AlignmentArt }[step.word];
                return (
                  <div className="method-step" key={step.word}>
                    <dt><Art />{step.word}</dt>
                    <dd>{step.text}</dd>
                  </div>
                );
              })}
            </dl>
            <EnquiryTrigger className="text-link" source="home-who-for">
              Tell her team what is on your mind
            </EnquiryTrigger>
          </div>
        </div>
      </section>

      <section className="section-wrap section-space" id="transformation" aria-labelledby="transformation-title">
        <div className="transformation-head">
          <div>
            <h2 id="transformation-title">Hear the whole story</h2>
            <p>Conversations about family, belief in oneself and finding a way through.</p>
          </div>
          <EnquiryTrigger className="text-link" source="home-films">
            Start your own enquiry
          </EnquiryTrigger>
        </div>
        <StoryRail voices={[...homeFilms, ...moreFilms]} />
        <p className="stories-note">These are personal experiences, not promises of the same outcome.</p>
      </section>

      <section className="band" id="meet" aria-labelledby="meet-title">
        <div className="section-wrap section-space meet">
          <BookCover />
          <div className="meet-copy">
            <h2 id="meet-title">Meet Narayani Garg</h2>
            <div className="lockup">
              <strong>{site.title}</strong>
              <span>{site.method}</span>
            </div>
            <p>
              An MBA and a decade running a manufacturing business came before numerology, vastu and astrology. Her book,{" "}
              <em>{bookTitle}</em>, sets out her practice for inner change across 21 days.
            </p>
            <div className="cta-row">
              <Link prefetch={false} className="text-link" href="/about/">
                Read her story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-space founder-film" aria-labelledby="founder-film-title">
        <div className="founder-film-copy">
          <p className="kicker">IN HER OWN WORDS</p>
          <h2 id="founder-film-title">Meet the person behind the guidance</h2>
          <p>Hear Dr. Narayani Garg speak about the way she approaches her work, in her own voice.</p>
          <Link prefetch={false} className="text-link" href="/about/">Get to know Narayani</Link>
        </div>
        <video
          className="founder-film-video"
          controls
          playsInline
          preload="none"
          poster={asset("/images/narayani-about-authentic.webp")}
          aria-label="Introduction to Dr. Narayani Garg"
        >
          <source src={asset("/videos/narayani-introduction.mp4")} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </section>

      <section className="section-wrap section-space spiritual-gallery" aria-labelledby="spiritual-gallery-title">
        <div className="section-heading">
          <p className="kicker">IN PERSON</p>
          <h2 id="spiritual-gallery-title">Moments from her journey</h2>
          <p>Photographs from Narayani’s meetings with spiritual teachers.</p>
        </div>
        <div className="spiritual-gallery-track" aria-label="Photographs of Narayani with spiritual teachers">
          {[
            { photo: "celeb-acharyapramod.jpg", name: "Acharya Pramod Krishnam" },
            { photo: "celeb-devkinandan.jpg", name: "Shri Aniruddhacharya Ji Maharaj" },
            { photo: "celeb-jaya-kishori.jpg", name: "Devi Krishna Priya Ji" },
            { photo: "celeb-sadhvi.jpg", name: "Sadhvi Satyapriyaji Giri" },
            { photo: "celeb-swing.jpg", name: "Manish Krishna Ji Maharaj" },
          ].map(({ photo, name }) => (
            <figure className="spiritual-gallery-photo" key={photo}>
              <img
                src={asset(`/images/celebrities/${photo}`)}
                alt={`Dr. Narayani Garg with ${name}`}
                loading="lazy"
                decoding="async"
                width={650}
                height={1000}
              />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-space" id="services" aria-labelledby="services-title">
        <div className="section-wrap">
          <div className="section-heading centered">
            <h2 id="services-title">How she works with you</h2>
            <p>The mind comes first. The other practices support the work.</p>
          </div>
          <ServiceCards />
        </div>
      </section>

      <section className="section-wrap program-wrap program-section" id="program" aria-labelledby="program-title">
        <ProgramPanel />
      </section>

      <FaqSection items={faqs.home} source="home-faq" />
      <SocialSection platform="instagram" />
    </>
  );
}
