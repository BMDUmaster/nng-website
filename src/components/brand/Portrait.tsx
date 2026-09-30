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
            width={1000}
            height={1000}
            loading="eager"
          />
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
