import Link from "next/link";
import { ServiceIllustration } from "@/components/art/ServiceBanner";
import { childPages, hubInfo, offeringPath } from "@/content/offerings";
import { serviceHref, consultationServices as services } from "@/content/services";

/** Topics shown on each card; the rest are one press away on the practice's own page. */
const SHOWN = 4;

/**
 * "What she works with": the four practices as cards, in the order she works (the mind first). Each card shows
 * the practice's drawing, name and line, its first topics as links, and leads to its hub page for the rest. It
 * reads the same taxonomy as the hub pages (src/content/offerings), so the home page never lists a page the site
 * does not carry.
 */
export function ServiceAtlas() {
  return (
    <section className="sa" id="services" aria-labelledby="atlas-title">
      <div className="sa-inner">
        <header className="sa-head">
          <p className="sa-kicker">Her practices</p>
          <h2 id="atlas-title">What she works with</h2>
          <p className="sa-lead">Start with what concerns you. Explore a practice to see the questions it covers.</p>
        </header>

        <ul className="sa-cards">
          {services.map((service) => {
            const hub = hubInfo(service.slug);
            const pages = childPages(service.slug);
            const more = pages.length - SHOWN;
            return (
              <li key={service.slug} className="sa-card">
                <Link prefetch={false} className="sa-art" href={serviceHref(service.slug)} tabIndex={-1} aria-hidden="true">
                  <ServiceIllustration hub={service.slug} thumbnail />
                </Link>
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
