import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { LoopRail } from "@/components/ui/LoopRail";
import { SocialLogo } from "@/components/brand/SocialLogo";
import type { Faq } from "@/content/faq";
import { instagramPosts, youtubePosts } from "@/content/social";
import { site } from "@/content/site";
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
          <p className="lx-lead">Photographs from Narayani’s meetings with spiritual teachers.</p>
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

/** The six-month program on the homepage: a plum invitation beside her portrait. */
export function HomeProgram() {
  return (
    <section className="pg" id="program" aria-labelledby="program-title">
      <div className="pg-inner">
        <div className="pg-card">
          <div className="pg-copy">
            <p className="pg-label">Six months of personal guidance</p>
            <h2 id="program-title">
              Personalised <em>Hand Holding</em> Program
            </h2>
            <p className="pg-lead">Work on the questions and patterns that keep returning, with Narayani’s personal guidance.</p>
            <ul className="pg-list">
              <li>Astrology, numerology and Vastu assessment</li>
              <li>Psychic guidance for recurring patterns</li>
              <li>Direct guidance across health, relationships, money and career</li>
            </ul>
            <div className="pg-actions">
              <EnquiryTrigger className="pg-cta" topic="the Personalised Hand Holding Program" source="home-program">
                <span>Enquire about the program</span>
                <span className="pg-cta-arrow" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6h7M6.5 3l3 3-3 3" /></svg>
                </span>
              </EnquiryTrigger>
              <Link prefetch={false} className="pg-link" href="/hand-holding-program/">
                How the programme works <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="pg-notes">
              <p>Format and fees are discussed before you decide.</p>
              <p>
                <span className="pg-dot" aria-hidden="true" />
                Ask the team about the next available start date
              </p>
            </div>
          </div>
          <div className="pg-visual">
            <div className="pg-arch">
              <img src={asset("/images/narayani-cover-portrait-684.webp")} alt="Narayani Garg" width={684} height={855} loading="lazy" decoding="async" />
            </div>
            <div className="pg-medal" aria-hidden="true">
              <strong>6</strong>
              <span>months</span>
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
}: {
  items: Faq[];
  title?: string;
  intro?: string;
  source?: string;
}) {
  return (
    <section className="fq" id="faq" aria-labelledby="faq-title">
      <div className="fq-inner">
        <div className="fq-intro">
          <p className="lx-kicker">Questions</p>
          <h2 id="faq-title">{title}</h2>
          <p className="lx-lead">{intro}</p>
          <div className="fq-ask">
            <p>Something else on your mind?</p>
            <EnquiryTrigger className="fq-ask-btn" source={source}>
              Ask something else <span aria-hidden="true">→</span>
            </EnquiryTrigger>
          </div>
        </div>
        <div className="fq-list">
          {items.map((item, i) => (
            <details key={item.q} className="fq-item" name={source}>
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
  );
}

/** Her most-viewed Instagram reels (or YouTube videos) as tall cards drifting in a loop; a pointer holds the row. */
export function InstagramReels({ platform = "instagram" }: { platform?: "instagram" | "youtube" }) {
  const youtube = platform === "youtube";
  const name = youtube ? "YouTube" : "Instagram";
  const posts = youtube ? youtubePosts : instagramPosts;
  return (
    <section className="ig" id={platform} aria-labelledby={`${platform}-title`}>
      <div className="ig-inner">
        <header className="ig-head">
          <div>
            <p className="lx-kicker">{name}</p>
            <h2 id={`${platform}-title`}>{youtube ? "Watch Narayani on YouTube" : "From Narayani’s Instagram"}</h2>
            <p className="lx-lead">{youtube ? "Five of her videos with the most views." : "Her five Instagram reels with the most views."}</p>
          </div>
          <a className="ig-profile" href={site.social[platform]} target="_blank" rel="noopener noreferrer">
            <SocialLogo platform={platform} />
            <span>Visit her {name}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </header>
        <LoopRail label={`${name} posts`} className="ig-loop" speed={0.03}>
          {posts.map((post) => (
            <a className="ig-card" key={post.id} href={post.url} target="_blank" rel="noopener noreferrer">
              <span className="ig-image">
                <img src={asset(post.image)} alt="" width={360} height={540} loading="lazy" decoding="async" />
                <span className="ig-views">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3.5 2v8l6.5-4z" /></svg>
                  {post.views} views
                </span>
                <span className="ig-open" aria-hidden="true">↗</span>
              </span>
              <span className="ig-title">{post.title}</span>
              <span className="visually-hidden"> (opens {name})</span>
            </a>
          ))}
        </LoopRail>
        <p className="ig-note">Selected by public views · 25 September 2026</p>
      </div>
    </section>
  );
}
