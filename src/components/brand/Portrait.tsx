import { OrbitControl } from "@/components/art/OrbitControl";
import { asset, assetSet } from "@/lib/assets";

/**
 * The arch portrait from the hero and inner pages.
 * Supports a quiet rotating zodiac wheel behind the portrait when `orbit` is enabled.
 */
const photos = {
  gold: {
    avif: "/images/narayani-portrait-480.avif 480w, /images/narayani-portrait-684.avif 684w",
    webp: "/images/narayani-portrait-480.webp 480w, /images/narayani-portrait-684.webp 684w",
    src: "/images/narayani-portrait-gold.png",
    alt: "Narayani Garg, The Life Strategist",
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
  /** Draw the zodiac wheel behind the portrait. */
  orbit?: boolean;
}) {
  const p = photos[photo];

  if (orbit) {
    return (
      <div className={`hero-portrait-stage ${className}`}>
        <div className="zodiac-wheel-layer" aria-hidden="true">
          <img
            src={asset("/images/zodiac-chakra.png")}
            className="zodiac-chakra"
            alt=""
            width={630}
            height={630}
            loading="eager"
          />
          <svg className="zodiac-outer-ring" viewBox="0 0 1000 1000" focusable="false" aria-hidden="true">
            <path
              d="M500 10 A490 490 0 1 1 500 990 A490 490 0 1 1 500 10 Z M500 92 A408 408 0 1 0 500 908 A408 408 0 1 0 500 92 Z"
              fill="#faf3e8"
              fillRule="evenodd"
            />
            {[490, 473, 421, 408].map((radius) => (
              <circle key={radius} cx="500" cy="500" r={radius} fill="none" stroke="#ba851f" strokeWidth={radius === 490 || radius === 408 ? 3 : 2} />
            ))}
            {Array.from({ length: 12 }, (_, index) => (
              <line key={index} x1="500" y1="10" x2="500" y2="92" transform={`rotate(${index * 30} 500 500)`} stroke="#ba851f" strokeWidth="2.5" />
            ))}
            {[
              "TAURUS", "ARIES", "PISCES", "AQUARIUS", "CAPRICORN", "SAGITTARIUS",
              "SCORPIO", "LIBRA", "VIRGO", "LEO", "CANCER", "GEMINI",
            ].map((sign, index) => (
              <text
                key={sign}
                x="500"
                y="58"
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${index * 30 - 15} 500 500)`}
                fill="#a9781c"
                fontFamily="Georgia, serif"
                fontSize={sign.length > 9 ? 22 : 26}
                fontWeight="600"
                letterSpacing="2"
              >
                {sign}
              </text>
            ))}
          </svg>
        </div>

        <OrbitControl />

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
