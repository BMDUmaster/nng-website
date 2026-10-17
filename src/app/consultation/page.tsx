import type { Metadata } from "next";
import { AdsEnquiry } from "@/components/contact/AdsEnquiry";
import { AdsSticky } from "@/components/contact/AdsSticky";
import { ClientWords } from "@/components/sections/ClientWords";
import { Reveal } from "@/components/ui/Reveal";
import { homeQuotes } from "@/content/voices";
import { site, legal } from "@/content/site";
import { faqs } from "@/content/faq";
import { bookTitle } from "@/content/about";
import { asset, assetSet } from "@/lib/assets";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Personal consultation with Narayani Garg", description: "Personal guidance with Narayani Garg, Psychic Spiritual Mentor. Explore consultations and six months of mentorship. Ask the team about fees and availability.", alternates: { canonical: "/consultation/" }, robots: { index: false, follow: false } };

const method = [
  { word: "Mind", text: "Notice the habits and responses that keep repeating." },
  { word: "Direction", text: "Work out what matters and where to begin." },
  { word: "Alignment", text: "Put that direction into everyday decisions and action." },
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
 * The paid-traffic landing page: no site navigation, one goal (the WhatsApp enquiry at #enquire). Plum opening
 * with her portrait, client words, her method, the two options, the enquiry form and short questions.
 */
export default function ConsultationLandingPage() {
  return (
    <div className="ads-landing cn al">
      <header className="al-bar">
        <div className="al-bar-inner">
          <img src={asset("/images/nng-logo-200.webp")} width={80} height={42} alt="Transformation with NNG" />
          <a className="cn-cta al-bar-cta" href="#enquire">
            <span>Enquire</span>
            <Arrow />
          </a>
        </div>
      </header>

      <section className="cn-hero" aria-labelledby="ads-title">
        <div className="cn-hero-inner">
          <div className="cn-hero-copy hero-copy" data-reveal="">
            <p className="cn-kicker">Personal consultation · Numerology, Vastulogy &amp; astrology</p>
            <p className="svd-person">
              <img src={asset("/images/narayani-cover-portrait-96.webp")} width={44} height={44} alt="" />
              <span>With <strong>Narayani Garg</strong></span>
            </p>
            <h1 id="ads-title">
              Guidance for the question <em>you keep coming back to.</em>
            </h1>
            <p className="cn-lead">Health, relationship, money or career. Narayani considers your situation and thought patterns, with spiritual guidance where useful.</p>
            <div className="cn-actions">
              <a className="cn-cta button" href="#enquire">
                <span>Enquire about a consultation</span>
                <Arrow />
              </a>
            </div>
            <p className="svd-note">Ask about fees and availability before you decide.</p>
            <ul className="cn-formats" aria-label="Online for clients in India and abroad, in person by appointment">
              <li>Online for clients in India and abroad</li>
              <li>In person by appointment</li>
            </ul>
          </div>
          <div className="cn-hero-visual" data-reveal="">
            <div className="cn-arch">
              <picture>
                <source type="image/avif" srcSet={assetSet("/images/narayani-portrait-480.avif 480w, /images/narayani-portrait-684.avif 684w")} sizes="(max-width: 900px) 62vw, 380px" />
                <img src={asset("/images/narayani-portrait-684.webp")} alt={`${site.person}, ${site.title}`} width={684} height={1000} fetchPriority="high" />
              </picture>
            </div>
            <p className="cn-badge">
              <span>{site.person}</span>
              <small>{site.title}</small>
            </p>
          </div>
        </div>
      </section>

      <ClientWords voices={homeQuotes} note={<p key="ads-note" className="clientele-note">Three clients on their experience with Narayani. These are personal experiences. Outcomes vary from person to person.</p>} />

      <section className="cn-sec sv-method al-method" aria-labelledby="ads-mind">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker">Her approach</p>
            <h2 id="ads-mind">
              Why she starts with the <em>mind</em>
            </h2>
            <p>Narayani begins with the thoughts, habits and reactions behind a situation. Numerology, Vastulogy and astrology support that conversation. The work continues in the choices made afterwards.</p>
            <p>
              She shares her approach to daily reflection and practice in her book, <em>{bookTitle}</em>.
            </p>
          </header>
          <ol className="sv-triad">
            {method.map((step, i) => (
              <li key={step.word} data-reveal="" style={{ "--d": `${i * 120}ms` } as React.CSSProperties}>
                <span className="sv-triad-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.word}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cn-sec hh-compare" aria-labelledby="ads-options">
        <div className="cn-inner">
          <header className="cn-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">Your options</p>
            <h2 id="ads-options">Begin with a consultation</h2>
          </header>
          <div className="hh-cards">
            <div className="hh-card" data-reveal="">
              <h3>One question to work through</h3>
              <p>Tell the team what you are facing. They will explain the consultation format, fee and availability before you decide.</p>
            </div>
            <div className="hh-card is-featured" data-reveal="" style={{ "--d": "120ms" } as React.CSSProperties}>
              <h3>Looking for continued support?</h3>
              <p>Ask whether the Personalised Hand Holding Program is suitable. Its scope and fee are discussed before booking.</p>
            </div>
          </div>
          <p className="al-center">
            <a className="cn-text" href="#enquire">
              Ask the team which option fits <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </section>

      <section className="ads-enquiry-band al-enquire" id="enquire" aria-labelledby="ads-enquire-title">
        <div className="cn-inner al-enquire-grid">
          <div data-reveal="">
            <p className="cn-kicker">Enquire</p>
            <h2 id="ads-enquire-title">Tell us where you’d like to begin.</h2>
            <p>You do not need to choose a service yet. Start with an enquiry and ask the team about the next available consultation.</p>
            <ol className="al-next">
              <li>Send your enquiry on WhatsApp.</li>
              <li>Discuss the format, fees and availability with the team.</li>
              <li>Decide whether you would like to book.</li>
            </ol>
            <p className="al-mail">
              Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div className="al-form" data-reveal="">
            <AdsEnquiry />
          </div>
        </div>
      </section>

      <section className="fq al-faq" aria-labelledby="ads-faq-title">
        <div className="fq-inner">
          <div className="fq-intro">
            <p className="lx-kicker">Questions</p>
            <h2 id="ads-faq-title">Before you enquire</h2>
          </div>
          <div className="fq-list">
            {faqs.home.slice(1).map((item, i) => (
              <details key={item.q} className="fq-item" name="ads-faq">
                <summary>
                  <span className="fq-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="fq-q">{item.q}</span>
                  <span className="fq-icon" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="al-footer">
        <div className="cn-inner">
          <p>{legal.disclaimer}</p>
          <p>
            {legal.copyright} · <a href="#ads-privacy">Enquiry privacy</a>
          </p>
          <details id="ads-privacy">
            <summary>How this page handles your enquiry</summary>
            <p>The short form prepares a WhatsApp message in your browser. It does not submit or save your entries on this website. When you follow a WhatsApp or email link, that service handles your message. Please do not include sensitive records in an initial enquiry.</p>
            <p>Opening a testimonial loads a Google Drive player. Contact {site.email} with questions about information sent to the practice.</p>
          </details>
        </div>
      </footer>
      <AdsSticky />
      <noscript>
        <p className="section-wrap">
          You can also <a href={whatsappUrl("Hello, I would like to enquire about a consultation with Narayani Garg.")}>enquire directly on WhatsApp</a>.
        </p>
      </noscript>
      <Reveal />
    </div>
  );
}
