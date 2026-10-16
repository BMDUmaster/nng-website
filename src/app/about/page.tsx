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
    "Meet Narayani Garg, Psychic Spiritual Mentor. Her guidance in numerology, Vastu and astrology begins with the mind and the patterns behind your decisions.",
  alternates: { canonical: "/about/" },
};

const background = [
  // copy-lint-allow: doctorate subject explicitly confirmed by Aryan on 4 Oct 2026; no institution or date claimed.
  { number: "PhD", title: "Occult Sciences", desc: "A doctorate in Occult Sciences." },
  { number: "15+ Years", title: "Professional experience", desc: "Personal guidance through astrology, numerology, Vastu and mindset work." },
];

const ico = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const lotusSvg = ico('<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/>');
const principleIcons = [
  ico('<path d="M12 27v-4.5A8.5 8.5 0 1 1 25 15l2 4h-2.5v3a2 2 0 0 1-2 2H20v3"/><path d="M13 13a3 3 0 0 1 5.5-1.6M15 17h4"/>'),
  ico('<path d="M16 4 6 8v7c0 6.3 4.2 11 10 13 5.8-2 10-6.7 10-13V8z"/><path d="m11.5 16 3.2 3.2 6-6.4"/>'),
  ico('<path d="M16 27S4 19.6 4 11.6A6.1 6.1 0 0 1 16 9a6.1 6.1 0 0 1 12 2.6C28 19.6 16 27 16 27Z"/>'),
];
const credentialIcons = [
  ico('<path d="M3 12 16 6l13 6-13 6z"/><path d="M8 14.5V21c0 1.7 3.6 3.5 8 3.5s8-1.8 8-3.5v-6.5M29 12v7"/>'),
  ico('<circle cx="16" cy="13" r="7"/><path d="m11.5 18.5-2.5 9 7-3 7 3-2.5-9"/>'),
];

/** About: green opening with her film and credentials, her story beside her portrait, what she holds to, her book,
 * client words, YouTube. Same look as the consultations and contact pages. */
export default function AboutPage() {
  return (
    <div className="cn ab2 au">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema()] }} />

      <section className="ah" aria-labelledby="about-hero-title">
        <div className="ah-inner">
          <div className="ah-copy" data-reveal="">
            <nav className="cn-crumbs au-crumbs" aria-label="Breadcrumb">
              <Link prefetch={false} href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About</span>
            </nav>
            <p className="au-kicker ah-kicker">
              <span className="au-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
              {site.title}
            </p>
            <h1 id="about-hero-title">
              Meet <em>Narayani Garg</em>
            </h1>
            <p className="ah-lead">Psychic Spiritual Mentor. Her guidance begins with the thoughts and patterns behind the question you bring.</p>
            <blockquote className="ah-quote">
              <p>The spirit who is doing a ritual is spiritual.”</p>
            </blockquote>
            <div className="ah-actions">
              <EnquiryTrigger className="au-cta ah-cta" source="about-hero" primary>
                <span>Enquire about a consultation</span>
                <span className="au-go" aria-hidden="true">→</span>
              </EnquiryTrigger>
              <a className="au-ghost ah-ghost" href="#story">
                Read her story <span aria-hidden="true">→</span>
              </a>
            </div>
            <ul className="ah-creds" id="experience" aria-label="Her background">
              {background.map((item, i) => (
                <li key={item.title}>
                  <span className="ah-cred-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: credentialIcons[i] }} />
                  <span>
                    <strong>{item.number}</strong>
                    <small>{item.title}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ah-visual">
            <span className="ah-ring" aria-hidden="true" />
            <div className="ah-arch">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/about-hero.webp")} alt={`Narayani Garg, ${site.title}`} width={900} height={1255} fetchPriority="high" />
            </div>
            <span className="ah-arch-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
          </div>
          <ul className="ah-words" aria-hidden="true">
            <li className="ah-words-lotus" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
            <li>Guidance</li>
            <li>Clarity</li>
            <li>Healing</li>
            <li>Inner growth</li>
          </ul>
        </div>
      </section>

      <section className="au-story" id="story" aria-labelledby="story-title">
        <div className="au-story-inner">
          <div className="au-portrait" data-reveal="">
            <div className="au-portrait-arch au-video">
              <video controls playsInline preload="metadata" poster={asset("/images/narayani-about-authentic-560.webp")} aria-label="Introduction to Narayani Garg">
                <source src={asset("/videos/narayani-introduction.mp4")} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
            <p className="au-portrait-badge">
              <span>Simmi</span>
              <span className="au-arrow-sm" aria-hidden="true">→</span>
              <em>Narayani</em>
            </p>
            <p className="au-video-note">Watch Narayani’s introduction</p>
          </div>
          <div className="au-story-copy">
            <header data-reveal="">
              <p className="au-kicker au-kicker-dark">
                <span className="au-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
                Her story
              </p>
              <h2 id="story-title">
                The story behind <em>her name</em> and practice
              </h2>
              <p className="au-story-lead">In her book, Narayani shares the personal moments that shaped her sense of purpose.</p>
            </header>
            <ol className="au-timeline" data-reveal="">
              {story
                .filter((item) => item.step !== "The book" && item.step !== "The practice")
                .map((item, i) => (
                  <li key={item.step}>
                    <span className="au-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <span className="au-step">{item.step}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="au-beliefs" aria-labelledby="beliefs-title">
        <div className="au-beliefs-inner">
          <header className="au-beliefs-head" data-reveal="">
            <span className="au-lotus au-lotus-c" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
            <p className="au-kicker">Her principles</p>
            <h2 id="beliefs-title">
              What she <em>holds to</em>
            </h2>
          </header>
          <ul className="au-principles">
            {beliefs.map((belief, i) => (
              <li key={belief.title} data-reveal="" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                <span className="au-p-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="au-p-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: principleIcons[i] }} />
                <h3>{belief.title}</h3>
                <p>{belief.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="au-book" aria-labelledby="book-title">
        <div className="au-book-inner">
          <div className="au-book-cover" data-reveal="">
            <img src={asset("/images/book-cover-660.webp")} srcSet={assetSet("/images/book-cover-440.webp 440w, /images/book-cover-660.webp 660w")} sizes="(max-width: 680px) 52vw, 300px" width={660} height={934} alt={`The cover of ${bookTitle}, by Narayani Garg`} loading="lazy" />
          </div>
          <div className="au-book-copy" data-reveal="">
            <p className="au-kicker au-kicker-dark">
              <span className="au-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />
              Her book
            </p>
            <h2 id="book-title">{bookTitle}</h2>
            <p className="au-book-lead">A 21 day companion for reflection and inner practice, exploring the chakras, EFT and Ho’oponopono.</p>
            <ul className="au-book-tags" aria-label="Inside the book">
              <li>21 days</li>
              <li>Chakras</li>
              <li>EFT</li>
              <li>Ho’oponopono</li>
            </ul>
            <blockquote className="au-book-quote">
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
