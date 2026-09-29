import { OrbitControl } from "@/components/art/OrbitControl";
import { asset, assetSet } from "@/lib/assets";

/**
 * The arch portrait from the hero and inner pages.
 * Supports the rotating astrological zodiac chakra wheel with running dual neon border beams
 * and floating badge when `orbit` is enabled (matching Reference Image 1).
 */
const photos = {
  gold: {
    avif: "/images/narayani-portrait-480.avif 480w, /images/narayani-portrait-684.avif 684w",
    webp: "/images/narayani-portrait-480.webp 480w, /images/narayani-portrait-684.webp 684w",
    src: "/images/narayani-portrait-gold.png",
    alt: "Narayani Garg - The Life Strategist",
  },
  book: {
    avif: "/images/narayani-cover-portrait-480.avif 480w, /images/narayani-cover-portrait-560.avif 560w, /images/narayani-cover-portrait-684.avif 684w",
    webp: "/images/narayani-cover-portrait-480.webp 480w, /images/narayani-cover-portrait-684.webp 684w",
    src: "/images/narayani-portrait-gold.png",
    alt: "Narayani Garg, The Life Strategist",
  },
} as const;

export function Portrait({
  photo = "gold",
  name,
  note,
  priority = false,
  sizes = "(max-width: 680px) 70vw, 34vw",
  className = "",
  orbit = false,
}: {
  photo?: keyof typeof photos;
  name?: string;
  note?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Draw the astrological zodiac chakra wheel behind the arch (matching Image 1). */
  orbit?: boolean;
}) {
  const p = photos[photo];

  if (orbit) {
    return (
      <div className={`hero-portrait-stage ${className}`}>
        {/* Rotating Astrological Zodiac Wheel (Matches User Reference Image 1) */}
        <div className="zodiac-wheel-layer" aria-hidden="true">
          <img
            src={asset("/images/zodiac-chakra.png")}
            className="zodiac-chakra"
            alt=""
            width={630}
            height={630}
            loading="eager"
          />
        </div>

        {/* Chakra Play/Pause Toggle */}
        <OrbitControl />

        {/* Arched Portrait Frame */}
        <div className="arch-portrait-frame">
          <picture>
            {p.avif && <source type="image/avif" srcSet={assetSet(p.avif)} sizes={sizes} />}
            <source type="image/webp" srcSet={assetSet(p.webp)} sizes={sizes} />
            <img
              src={asset(p.src)}
              alt={p.alt}
              width={330}
              height={450}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : undefined}
              decoding={priority ? "sync" : "async"}
            />
          </picture>

          {/* Running Yellow & Purple Dual Border SVG */}
          <svg className="running-border-svg" viewBox="0 0 330 450" aria-hidden="true">
            <defs>
              <filter id="yellowNeonGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="purpleNeonGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              className="running-border-base"
              d="M 12,434 L 12,165 A 153,153 0 0,1 318,165 L 318,434 A 14,14 0 0,1 304,448 L 26,448 A 14,14 0 0,1 12,434 Z"
              fill="none"
              stroke="rgba(226, 136, 34, 0.45)"
              strokeWidth="2.5"
            />
            <path
              className="running-border-path-yellow"
              d="M 12,434 L 12,165 A 153,153 0 0,1 318,165 L 318,434 A 14,14 0 0,1 304,448 L 26,448 A 14,14 0 0,1 12,434 Z"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="3.5"
              strokeDasharray="130 490"
              filter="url(#yellowNeonGlow)"
            />
            <path
              className="running-border-path-purple"
              d="M 12,434 L 12,165 A 153,153 0 0,1 318,165 L 318,434 A 14,14 0 0,1 304,448 L 26,448 A 14,14 0 0,1 12,434 Z"
              fill="none"
              stroke="#D7B86B"
              strokeWidth="3.5"
              strokeDasharray="130 490"
              filter="url(#yellowNeonGlow)"
            />
          </svg>

          {/* Floating Portrait Badge */}
          <div className="portrait-badge">
            <span>{name ?? "Narayani Garg"}</span>
            <small>{note ?? "The Life Strategist"}</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <figure className={`portrait-frame ${className}`}>
      <picture>
        {p.avif && <source type="image/avif" srcSet={assetSet(p.avif)} sizes={sizes} />}
        <source type="image/webp" srcSet={assetSet(p.webp)} sizes={sizes} />
        <img
          src={asset(p.src)}
          alt={p.alt}
          width={684}
          height={1000}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding={priority ? "sync" : "async"}
        />
      </picture>
      {name && (
        <figcaption>
          <span>{name}</span>
          {note && <small>{note}</small>}
        </figcaption>
      )}
    </figure>
  );
}
