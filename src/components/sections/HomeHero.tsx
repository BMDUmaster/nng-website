import { ZodiacWheel } from "@/components/art/ZodiacWheel";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { asset, assetSet } from "@/lib/assets";
import { figures, site } from "@/content/site";

/** In two pairs, so a phone can set them on two even lines. */
const practices = [
  ["Psychic Reader", "Astrologer"],
  ["Numerologist", "Vastu"],
];

/**
 * The homepage hero. On phones it reads top to bottom: who she is, the question, her portrait in the zodiac
 * wheel, then one action and the figures. On wide screens the portrait stands to the right of the copy.
 */
export function HomeHero() {
  return (
    <section className="hx" aria-labelledby="hero-title">
      <div className="hx-inner">
        <div className="hx-top">
          <p className="hx-kicker">
            {practices.map((pair) => (
              <span key={pair[0]} className="hx-kicker-pair">
                {pair.map((practice) => (
                  <span key={practice} className="hx-kicker-item">
                    {practice}
                  </span>
                ))}
              </span>
            ))}
          </p>
          <p className="hx-name">
            <span>
              Personal guidance with <strong>Narayani Garg</strong>
            </span>
          </p>
          <h1 id="hero-title">
            Let’s talk about <span className="hx-highlight">what’s on your mind.</span>
          </h1>
        </div>

        <div className="hx-visual">
          <div className="hx-stage">
            <div className="hx-wheel" aria-hidden="true">
              <div className="hx-wheel-turn">
                <ZodiacWheel />
              </div>
            </div>
            <div className="hx-arch">
              <picture>
                <source
                  type="image/avif"
                  srcSet={assetSet("/images/narayani-portrait-480.avif 480w, /images/narayani-portrait-684.avif 684w")}
                  sizes="(max-width: 900px) min(56vw, 250px), 300px"
                />
                <source
                  type="image/webp"
                  srcSet={assetSet("/images/narayani-portrait-480.webp 480w, /images/narayani-portrait-684.webp 684w")}
                  sizes="(max-width: 900px) min(56vw, 250px), 300px"
                />
                <img
                  src={asset("/images/narayani-portrait-gold.png")}
                  alt={`Narayani Garg, ${site.title}`}
                  width={330}
                  height={450}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
              </picture>
            </div>
            <p className="hx-badge">
              <span>Narayani Garg</span>
              <small>{site.title}</small>
            </p>
          </div>
        </div>

        <div className="hx-bottom">
          <p className="hx-description">
            Bring your question about health, relationship, money or career. Explore it with spiritual guidance and mindset work.
          </p>

          <div className="hx-actions">
            <EnquiryTrigger className="hx-cta" source="hero" primary>
              <span>Enquire about a consultation</span>
              <span className="hx-cta-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" />
                </svg>
              </span>
            </EnquiryTrigger>
            <a className="hx-secondary" href="#approach">
              <span>How she works</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 2v8M2.5 6.5L6 10l3.5-3.5" />
              </svg>
            </a>
          </div>

          <p className="hx-note">
            <span className="hx-note-dot" aria-hidden="true" />
            Ask the team for the next available appointment
          </p>

          <dl className="hx-figures" aria-label="Narayani's experience">
            {figures.map((figure) => (
              <div key={figure.label}>
                <dt>{figure.label}</dt>
                <dd>{figure.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
