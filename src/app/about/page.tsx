import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { ClientWords } from "@/components/sections/ClientWords";
import { ClienteleNote } from "@/components/sections/ClienteleNote";
import { InstagramReels } from "@/components/sections/HomeLower";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { beliefs, bookTitle, story } from "@/content/about";
import { site } from "@/content/site";
import { voices } from "@/content/voices";
import { asset, assetSet } from "@/lib/assets";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Narayani Garg | Psychic Spiritual Mentor",
  description:
    "Meet Dr. Narayani Garg, Psychic Spiritual Mentor. Her guidance in numerology, Vastu and astrology begins with the mind and the patterns behind your decisions.",
  alternates: { canonical: "/about/" },
};

const background = [
  // copy-lint-allow: doctorate subject explicitly confirmed by Aryan on 4 Oct 2026; no institution or date claimed.
  { number: "PhD", title: "Occult Sciences", desc: "A doctorate in Occult Sciences." },
  { number: "15+ Years", title: "Professional experience", desc: "Personal guidance through astrology, numerology, Vastu and mindset work." },
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

/** About: a plum opening with her film, her background, her story, what she holds to, her book, client words, YouTube. */
export default function AboutPage() {
  return (
    <div className="cn ab2">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema()] }} />

      <section className="cn-hero" aria-labelledby="about-hero-title">
        <div className="cn-hero-inner">
          <div className="cn-hero-copy" data-reveal="">
            <nav className="cn-crumbs" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About</span>
            </nav>
            <p className="cn-kicker">{site.title}</p>
            <h1 id="about-hero-title">
              Meet <em>Dr. Narayani Garg</em>
            </h1>
            <p className="cn-lead">Psychic Spiritual Mentor. Her guidance begins with the thoughts and patterns behind the question you bring.</p>
            <blockquote className="ab2-hero-quote">
              <p>“The spirit who is doing a ritual is spiritual.”</p>
            </blockquote>
            <div className="cn-actions">
              <EnquiryTrigger className="cn-cta" source="about-hero" primary>
                <span>Enquire about a consultation</span>
                <Arrow />
              </EnquiryTrigger>
              <a className="cn-ghost" href="#story">
                Read her story
              </a>
            </div>
          </div>
          <figure className="ab2-film" data-reveal="">
            <div className="ab2-film-frame">
              <video controls playsInline preload="metadata" poster={asset("/images/narayani-about-authentic-560.webp")} aria-label="Introduction to Dr. Narayani Garg">
                <source src={asset("/videos/narayani-introduction.mp4")} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
            <figcaption>Watch Narayani’s introduction</figcaption>
          </figure>
        </div>
      </section>

      <section className="cn-sec ab2-bg" id="experience" aria-labelledby="experience-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Credentials</p>
            <h2 id="experience-title">Her background</h2>
          </header>
          <ul className="ab2-stats">
            {background.map((item, i) => (
              <li key={item.title} data-reveal="" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                <strong>{item.number}</strong>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cn-sec ab2-story" id="story" aria-labelledby="story-title">
        <div className="cn-inner ab2-story-grid">
          <div className="ab2-story-visual" data-reveal="">
            <div className="cn-arch">
              <picture>
                <source type="image/avif" srcSet={assetSet("/images/narayani-cover-portrait-480.avif 480w, /images/narayani-cover-portrait-684.avif 684w")} sizes="(max-width: 900px) 62vw, 360px" />
                <img src={asset("/images/narayani-cover-portrait-684.webp")} alt="" width={684} height={855} loading="lazy" />
              </picture>
            </div>
          </div>
          <div>
            <header className="cn-head ab2-left" data-reveal="">
              <p className="cn-kicker cn-kicker-dark">Her story</p>
              <h2 id="story-title">The story behind her name and practice</h2>
              <p>In her book, Narayani shares the personal moments that shaped her sense of purpose.</p>
            </header>
            <ol className="ab2-timeline" data-reveal="">
              {story
                .filter((item) => item.step !== "The book" && item.step !== "The practice")
                .map((item, i) => (
                  <li key={item.step} style={{ "--d": `${200 + i * 220}ms` } as React.CSSProperties}>
                    <span className="ab2-dot" aria-hidden="true" />
                    <span className="ab2-step">{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="cn-sec ab2-beliefs" aria-labelledby="beliefs-title">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker">Her principles</p>
            <h2 id="beliefs-title">What she holds to</h2>
          </header>
          <ul className="ab2-principles">
            {beliefs.map((belief, i) => (
              <li key={belief.title} data-reveal="" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                <span className="ab2-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{belief.title}</h3>
                <p>{belief.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cn-sec ab2-book" aria-labelledby="book-title">
        <div className="cn-inner ab2-book-grid">
          <div className="ab2-book-cover" data-reveal="">
            <img src={asset("/images/book-cover-660.webp")} srcSet={assetSet("/images/book-cover-440.webp 440w, /images/book-cover-660.webp 660w")} sizes="(max-width: 680px) 60vw, 320px" width={660} height={934} alt={`The cover of ${bookTitle}, by Narayani Garg`} loading="lazy" />
          </div>
          <div data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Her book</p>
            <h2 id="book-title">
              <em>{bookTitle}</em>
            </h2>
            <p className="ab2-book-lead">A 21 day companion for reflection and inner practice, exploring the chakras, EFT and Ho’oponopono.</p>
            <blockquote className="ab2-book-quote">
              <p>“When you change your mind, you change your world.”</p>
              <cite>From the book</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <ClientWords voices={[voices.shelley, voices.vanshika, voices.shashi]} note={<ClienteleNote />} />
      <InstagramReels platform="youtube" />
      <Reveal />
    </div>
  );
}
