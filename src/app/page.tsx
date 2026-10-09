import Link from "next/link";
import { preload } from "react-dom";
import { MethodJourney } from "@/components/art/Explainer";
import depth from "@/components/art/VisualDepth.module.css";
import { BookCover } from "@/components/brand/BookCover";
import { Portrait } from "@/components/brand/Portrait";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { PracticeReturnPrompt } from "@/components/enquiry/PracticeReturnPrompt";
import { AreasRibbon, FaqSection, ProgramPanel, QuoteTrack } from "@/components/sections/Sections";
import { ServiceAtlas } from "@/components/sections/ServiceAtlas";
import { ClienteleNote } from "@/components/sections/ClienteleNote";
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

      <section className={`hero practice-hero section-wrap ${depth.hero}`} aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">PSYCHIC READER · ASTROLOGER · NUMEROLOGIST · VASTU</p>
          <p className="practice-name">Personal guidance with <strong>Dr. Narayani Garg</strong></p>
          <h1 id="hero-title">
            Let’s talk about <span className="highlight">what’s on your mind.</span>
          </h1>
          <p className="hero-description">Bring your question about health, relationship, money or career. Explore it with spiritual guidance and mindset work.</p>
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

          <p className="cta-note appointment-note">
            <span className="appointment-dot" aria-hidden="true" />
            Ask the team for the next available appointment
          </p>
        </div>

        <div className="hero-visual practice-visual">
          <Portrait name="Narayani Garg" note={site.title} priority orbit sizes="(max-width: 680px) min(68vw, 270px), (max-width: 1190px) 36vw, 440px" />
        </div>
      </section>

      <AreasRibbon />

      <section className={`section-wrap section-space founder-film ${depth.film}`} aria-labelledby="founder-film-title">
        <div className="founder-film-copy">
          <p className="kicker">IN HER OWN WORDS</p>
          <h2 id="founder-film-title">Meet Narayani</h2>
          <blockquote className="founder-spiritual-quote">“The spirit who is doing a ritual is spiritual.”</blockquote>
          <p>Narayani sees the person as a spiritual being. Her starting point is the mind: understanding a pattern, then choosing how to respond.</p>
          <p><em>{bookTitle}.</em> Hear her explain what this means in practice.</p>
          <Link prefetch={false} className="text-link" href="/about/">Get to know Narayani</Link>
        </div>
        <video className="founder-film-video" controls playsInline muted preload="none"
          poster={asset("/images/narayani-about-authentic-560.webp")}
          aria-label="Introduction to Dr. Narayani Garg">
          <source src={asset("/videos/narayani-introduction.mp4")} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </section>

      <section className="section-wrap section-space" id="testimonials" aria-labelledby="testimonial-title">
        <div className="section-heading practice-heading">
          <h2 id="testimonial-title">In their own words</h2>
          <ClienteleNote />
        </div>
        <QuoteTrack voices={homeQuotes} label="Client testimonials" />
      </section>

      <ServiceAtlas />

      <section className="band" id="approach" aria-labelledby="approach-title">
        <div className="section-wrap section-space approach-grid">
          <div className="approach-intro">
            <h2 id="approach-title">Why she starts with the mind</h2>
            <p>Knowing what to change is one thing. Living differently is another. Her work brings the two together.</p>
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
            <MethodJourney />
            <details className={depth.depth}>
              <summary>Explore Mind, Direction and Alignment</summary>
              <dl>{method.map(step => <div key={step.word}><dt><strong>{step.word}</strong></dt><dd>{step.text}</dd></div>)}</dl>
            </details>
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
        <StoryRail voices={homeFilms.slice(0, 3)} />
        <details className={depth.depth}>
          <summary>More client recordings</summary>
          <StoryRail voices={[...homeFilms.slice(3), ...moreFilms]} />
        </details>
        <p className="stories-note">These are personal experiences, not promises of the same outcome.</p>
      </section>

      <section className="band" id="meet" aria-labelledby="meet-title">
        <div className="section-wrap section-space meet">
          <BookCover />
          <div className="meet-copy">
            <h2 id="meet-title">A practice to return to</h2>
            <p>
              Her book, <em>{bookTitle}</em>, offers 21 days of reflection and everyday inner practice.
            </p>
            <div className="cta-row">
              <Link prefetch={false} className="text-link" href="/about/">
                Read her story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-space spiritual-gallery" aria-labelledby="spiritual-gallery-title">
        <div className="section-heading">
          <p className="kicker">IN PERSON</p>
          <h2 id="spiritual-gallery-title">Moments from her journey</h2>
          <p>Photographs from Narayani’s meetings with spiritual teachers.</p>
        </div>
        <div className="spiritual-gallery-track" role="region" tabIndex={0} aria-label="Photographs of Narayani with spiritual teachers">
          {[
            { photo: "celeb-acharyapramod.jpg", name: "Shri Shri 1008 Mahamandaleshwar Kalki Dham Peethadhishwar Acharya Pramod Krishnam Ji" },
            { photo: "celeb-devkinandan.jpg", name: "Pujya Shri Aniruddhacharya Ji" },
            { photo: "celeb-sadhvi.jpg", name: "Mahamandaleshwar Shri Sadhvi Satpriya Giri Maharaj Ji (Vatsalya)" },
            { photo: "celeb-swing.jpg", name: "Acharya Shri Shantanu Maharaj Ji" },
            { photo: "celeb-jaya-kishori.jpg", name: "Devi Krishna Priya Ji" },
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

      <section className="section-wrap program-wrap program-section" id="program" aria-labelledby="program-title">
        <ProgramPanel />
      </section>

      <FaqSection items={faqs.home} source="home-faq" />
      <PracticeReturnPrompt />
      <SocialSection platform="instagram" />
    </>
  );
}
