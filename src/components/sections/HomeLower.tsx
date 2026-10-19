import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { LoopRail } from "@/components/ui/LoopRail";
import { SocialLogo } from "@/components/brand/SocialLogo";
import type { Faq } from "@/content/faq";
import { site } from "@/content/site";
import { ReelFilter } from "./ReelFilter";
import { asset } from "@/lib/assets";

const teachers = [
  { photo: "celeb-acharyapramod.jpg", name: "Shri Shri 1008 Mahamandaleshwar Kalki Dham Peethadhishwar Acharya Pramod Krishnam Ji" },
  { photo: "celeb-devkinandan.jpg", name: "Pujya Shri Aniruddhacharya Ji" },
  { photo: "celeb-sadhvi.jpg", name: "Mahamandaleshwar Shri Sadhvi Satpriya Giri Maharaj Ji (Vatsalya)" },
  { photo: "celeb-swing.jpg", name: "Acharya Shri Shantanu Maharaj Ji" },
  { photo: "celeb-jaya-kishori.jpg", name: "Devi Krishna Priya Ji" },
];

/** "Moments from her journey": photographs with spiritual teachers in arch frames, drifting in a loop. */
export function JourneyPhotos() {
  return (
    <section className="jr" aria-labelledby="spiritual-gallery-title">
      <div className="jr-inner">
        <header className="lx-head">
          <p className="lx-kicker">In person</p>
          <h2 id="spiritual-gallery-title">Moments from her journey</h2>
        </header>
        <LoopRail label="Photographs of Narayani with spiritual teachers" className="jr-loop" speed={0.028}>
          {teachers.map(({ photo, name }) => (
            <figure className="jr-card" key={photo}>
              <div className="jr-frame">
                <img src={asset(`/images/celebrities/${photo}`)} alt={`Narayani Garg with ${name}`} loading="lazy" decoding="async" width={650} height={1000} />
              </div>
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </LoopRail>
      </div>
    </section>
  );
}

const lotusSvg = `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/></svg>`;
const Lotus = ({ className }: { className: string }) => <span className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotusSvg }} />;
const ico = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const pgIcons = [
  ico('<circle cx="16" cy="16" r="11"/><path d="M16 5v22M5 16h22"/><circle cx="16" cy="16" r="5"/>'),
  ico('<path d="M5 22c3-6 7-9 11-9s8 3 11 9"/><path d="M8 26c2.5-4 5-6 8-6s5.5 2 8 6"/><circle cx="16" cy="7.5" r="2.5"/>'),
  ico('<circle cx="16" cy="16" r="11"/><path d="m20.5 11.5-3 6-6 3 3-6z"/>'),
];
const calendar = ico('<rect x="5" y="7" width="22" height="20" rx="3"/><path d="M5 13h22M11 4v5M21 4v5"/><path d="M10 18h2M15 18h2M20 18h2M10 22h2M15 22h2" stroke-width="2"/>');
const chat = ico('<path d="M6 7h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><path d="M11 15h.01M16 15h.01M21 15h.01" stroke-width="2.6"/>');

/** The six-month program on the homepage: a plum invitation beside her portrait. */
export function HomeProgram() {
  return (
    <section className="pg" id="program" aria-labelledby="program-title">
      <div className="pg-inner">
        <div className="pg-card">
          <div className="pg-copy">
            <p className="pg-label">Six months with your psychic spiritual mentor</p>
            <h2 id="program-title">
              Personalised <em>Hand Holding</em> Program
            </h2>
            <p className="pg-lead">Work on the questions and patterns that keep returning, with Narayani as your psychic spiritual mentor.</p>
            <ul className="pg-list">
              {["Numerology, Vastulogy and astrology assessment", "Psychic guidance for recurring patterns", "Direct guidance across health, relationships, money and career"].map((t, i) => (
                <li key={t}>
                  <span className="pg-li-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: pgIcons[i] }} />
                  {t}
                </li>
              ))}
            </ul>
            <div className="pg-actions">
              <EnquiryTrigger className="pg-cta" topic="the Personalised Hand Holding Program" source="home-program">
                <span>Ask about the program</span>
                <span className="pg-cta-arrow" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6h7M6.5 3l3 3-3 3" /></svg>
                </span>
              </EnquiryTrigger>
              <Link prefetch={false} className="pg-link" href="/hand-holding-program/">
                See how it works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="pg-notes">
              <span className="pg-notes-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: calendar }} />
              <p>Format and fees are discussed before you decide.</p>
            </div>
          </div>
          <div className="pg-visual">
            <div className="pg-arch">
              <img src={asset("/images/program-narayani.webp")} alt="Narayani Garg" width={1000} height={1265} loading="lazy" decoding="async" />
            </div>
            <div className="pg-medal" aria-hidden="true">
              <strong>6</strong>
              <span>months</span>
              <small>Psychic Spiritual Mentor</small>
              <Lotus className="pg-medal-lotus" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** "Before you enquire": numbered questions that open in place, beside a short invitation. */
export function HomeFaq({
  items,
  title = "Before you enquire",
  intro = "A few things you may want to know first.",
  source = "home-faq",
  rich = false,
}: {
  items: Faq[];
  title?: string;
  intro?: string;
  source?: string;
  rich?: boolean;
}) {
  return (
    <section className={`fq${rich ? " fq-rich" : ""}`} id="faq" aria-labelledby="faq-title">
      <div className="fq-inner">
        <div className="fq-intro">
          <div className="fq-top">
            <span className="fq-portrait" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/faq-narayani.webp")} alt="" width={760} height={964} loading="lazy" />
            </span>
            <div>
          <p className="lx-kicker fq-kicker">Questions</p>
          <h2 id="faq-title">
            {title.split(" ").slice(0, -1).join(" ")} <em>{title.split(" ").slice(-1)}</em>
          </h2>
          <p className="lx-lead">{intro}</p>
            </div>
          </div>
          <div className="fq-ask">
            <span className="fq-ask-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: chat }} />
            <p>
              <strong>Something else on your mind?</strong>
              <small>If you have any other questions, feel free to ask. We’re here to help.</small>
            </p>
            <EnquiryTrigger className="fq-ask-btn" source={source}>
              Ask your question <span aria-hidden="true">→</span>
            </EnquiryTrigger>
          </div>
        </div>
        <div className="fq-list">
          {items.map((item, i) => (
            <details key={item.q} className="fq-item" name={source}>
              <summary>
                <span className="fq-num">{String(i + 1).padStart(2, "0")}</span>
                {rich && <span className="fq-topic" aria-hidden="true" dangerouslySetInnerHTML={{ __html: faqIcon(item.q) }} />}
                <span className="fq-q">{item.q}</span>
                <span className="fq-icon" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqIcons: [RegExp, string][] = [
  [/fee|cost|price|pay/i, ico('<path d="M10 7h13M10 12h13M10 7c7 0 9 2 9 5s-3 5-9 5l10 9"/>')],
  [/medical|professional|doctor|replace/i, ico('<path d="M16 27S4 19.6 4 11.6A6.1 6.1 0 0 1 16 9a6.1 6.1 0 0 1 12 2.6C28 19.6 16 27 16 27Z"/><path d="M7 16h5l2-3 3 6 2-3h6"/>')],
  [/outside|abroad|india|country|online/i, ico('<circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c3.5 3 5 7 5 11s-1.5 8-5 11c-3.5-3-5-7-5-11s1.5-8 5-11Z"/>')],
  [/teach|course|class|learn/i, ico('<path d="M3 12 16 6l13 6-13 6z"/><path d="M8 14.5V21c0 1.7 3.6 3.5 8 3.5s8-1.8 8-3.5v-6.5"/>')],
  [/remed/i, lotusSvg],
  [/share|asked|bring|need/i, ico('<path d="M9 4h10l6 6v18H9z"/><path d="M19 4v6h6M13 15h8M13 19h8M13 23h5"/>')],
  [/.*/, ico('<path d="M6 7h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H14l-6 5v-5H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><path d="M11 15h.01M16 15h.01M21 15h.01" stroke-width="2.6"/>')],
];
const faqIcon = (q: string) => faqIcons.find(([re]) => re.test(q))![1];

/** Her most-viewed Instagram reels (or YouTube videos) as tall cards drifting in a loop; a pointer holds the row. */
export function InstagramReels({ platform = "instagram" }: { platform?: "instagram" | "youtube" }) {
  const youtube = platform === "youtube";
  const name = youtube ? "YouTube" : "Instagram";
  return (
    <section className="ig" id={platform} aria-labelledby={`${platform}-title`}>
      <div className="ig-inner">
        <header className="ig-head">
          <div>
            <p className="lx-kicker ig-kicker">{name}</p>
            <h2 id={`${platform}-title`}>{youtube ? <>Watch <em>Narayani’s</em> reels</> : <>Watch <em>Narayani’s</em> reels</>}</h2>
            <p className="lx-lead">{youtube ? "Short talks on the mind, numbers, Vastulogy and your rashi. Choose a topic." : "Short talks on the mind, numbers, Vastulogy and your rashi. Choose a topic."}</p>
          </div>
          <a className="ig-profile" href={site.social[platform]} target="_blank" rel="noopener noreferrer">
            <SocialLogo platform={platform} />
            <span>Visit her {name}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </header>
        <ReelFilter />
      </div>
    </section>
  );
}
