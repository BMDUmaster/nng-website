import Link from "next/link";
import { ServiceIllustration } from "@/components/art/ServiceBanner";
import { childPages, hubInfo, offeringPath } from "@/content/offerings";
import { serviceHref, consultationServices as services } from "@/content/services";
import { asset } from "@/lib/assets";

/** Desktop cards: a photograph in an arch and a small line icon in a medallion. */
const art: Record<string, { photo: string; mobile: string; icon: string }> = {
  "brain-training": { photo: "/images/practice-mind.webp", mobile: "/images/practice-mind-m.webp", icon: '<path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z"/><circle cx="16" cy="16" r="4"/><circle cx="16" cy="16" r="1.3" fill="currentColor"/>' },
  astrology: { photo: "/images/practice-astro.webp", mobile: "/images/practice-astro-m.webp", icon: '<path d="M20 5.5A11 11 0 1 0 26.5 22 9 9 0 0 1 20 5.5Z"/><path d="m23 8 .9 2 2 .9-2 .9-.9 2-.9-2-2-.9 2-.9Z"/>' },
  numerology: { photo: "/images/practice-num.webp", mobile: "/images/practice-num-m.webp", icon: '<rect x="6" y="6" width="8" height="8" rx="1.5"/><rect x="18" y="6" width="8" height="8" rx="1.5"/><rect x="6" y="18" width="8" height="8" rx="1.5"/><rect x="18" y="18" width="8" height="8" rx="1.5"/>' },
  vastu: { photo: "/images/practice-vastu.webp", mobile: "/images/practice-vastu-m.webp", icon: '<path d="M4 15 16 5l12 10"/><path d="M7 13v14h18V13"/><path d="M13 27v-8h6v8"/>' },
};

/** Topics shown on each card; the rest are one press away on the practice's own page. */
const SHOWN = 4;

/**
 * "What she works with": the four practices as cards, in the order she works (the mind first). Each card shows
 * the practice's drawing, name and line, its first topics as links, and leads to its hub page for the rest. It
 * reads the same taxonomy as the hub pages (src/content/offerings), so the home page never lists a page the site
 * does not carry. On phones the cards run in one row that scrolls itself in a loop (a second, hidden copy of the
 * cards closes the loop) and stops while a finger or pointer rests on it.
 */
export function ServiceAtlas() {
  return (
    <section className="sa" id="services" aria-labelledby="atlas-title">
      <div className="sa-inner">
        <header className="sa-head">
          <p className="sa-kicker">Her practices</p>
          <h2 id="atlas-title">
            What she <em>works with</em>
          </h2>
          <p className="sa-lead">Start with what concerns you. Explore a practice to see the questions it covers.</p>
        </header>

        <ul className="sa-cards">
          {[...services, ...services].map((service, n) => {
            const copy = n >= services.length;
            const hub = hubInfo(service.slug);
            const pages = childPages(service.slug);
            const more = pages.length - SHOWN;
            return (
              <li key={`${service.slug}-${n}`} className={copy ? "sa-card sa-dup" : "sa-card"} aria-hidden={copy || undefined} inert={copy || undefined}>
                <Link prefetch={false} className="sa-art" href={serviceHref(service.slug)} tabIndex={-1} aria-hidden="true">
                  <ServiceIllustration hub={service.slug} thumbnail />
                </Link>
                {art[service.slug] && (
                  <Link prefetch={false} className="sa-photo" href={serviceHref(service.slug)} tabIndex={-1} aria-hidden="true">
                    <picture>
                      <source media="(max-width: 1023px)" srcSet={asset(art[service.slug].mobile)} />
                      { }
                      <img src={asset(art[service.slug].photo)} alt="" width={668} height={356} loading="lazy" decoding="async" />
                    </picture>
                    <span className="sa-medal" dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${art[service.slug].icon}</svg>` }} />
                  </Link>
                )}
                <div className="sa-body">
                  <h3>
                    <Link prefetch={false} href={serviceHref(service.slug)}>
                      {hub.name}
                    </Link>
                  </h3>
                  <p className="sa-line">{service.card}</p>
                  {pages.length > 0 && (
                    <ul className="sa-topics" aria-label={`Topics in ${hub.name}`}>
                      {pages.slice(0, SHOWN).map((page) => (
                        <li key={page.slug}>
                          <Link prefetch={false} href={offeringPath(page)}>
                            {page.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link prefetch={false} className="sa-explore" href={serviceHref(service.slug)}>
                    <span>Explore {hub.name}</span>
                    <span className="sa-explore-go" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" />
                      </svg>
                    </span>
                  </Link>
                  <Link prefetch={false} className="sa-more" href={serviceHref(service.slug)}>
                    <span>{more > 0 ? `All ${pages.length} topics` : `Explore ${hub.name}`}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2.5 6h7M6.5 3l3 3-3 3" />
                    </svg>
                    {more > 0 && <span className="visually-hidden"> in {hub.name}</span>}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
