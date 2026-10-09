import Link from "next/link";
import { ServiceIllustration } from "@/components/art/ServiceBanner";
import { Icon } from "@/components/icons/Icon";
import { childPages, hubInfo, offeringPath } from "@/content/offerings";
import { serviceHref, consultationServices as services } from "@/content/services";
import depth from "@/components/art/VisualDepth.module.css";

/**
 * The home page's map of consultation practices, the sub-categories inside each, and every service page
 * with its own icon and one line, so a visitor can see what she does without opening a menu. It reads the same
 * taxonomy and the same page content as the hub pages (src/content/offerings), so the home page can never say
 * something the site does not carry. Order follows the service cards: she starts with the mind.
 */
export function ServiceAtlas() {
  return (
    <section className="atlas" id="services" aria-labelledby="atlas-title">
      <div className="section-wrap section-space">
        <div className="atlas-head">
          <h2 id="atlas-title">What she works with</h2>
          <p>Start with what concerns you. Explore a practice to see the questions it covers.</p>
          <nav className="atlas-jump" aria-label="Consultation practices">
            {services.map((service) => (
              <a key={service.slug} href={`#atlas-${service.slug}`}>
                <Icon id={hubInfo(service.slug).icon} />
                <span>{service.name}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className={`atlas-list ${depth.atlas}`}>
          {services.map((service, index) => {
            const hub = hubInfo(service.slug);
            const pages = childPages(service.slug);
            return (
              <article key={service.slug} id={`atlas-${service.slug}`} className={`atlas-hub ${depth.hub}${index % 2 ? " is-flipped" : ""}`} data-hub={service.slug} aria-labelledby={`atlas-${service.slug}-title`}>
                <header className={`atlas-hub-head ${depth.head}`}>
                  <div className={`atlas-art ${depth.art}`}>
                    <ServiceIllustration hub={service.slug} thumbnail />
                  </div>
                  <h3 id={`atlas-${service.slug}-title`}>
                    <Link prefetch={false} href={serviceHref(service.slug)}>
                      {hub.name}
                    </Link>
                  </h3>
                  <p>{service.card}</p>
                  <Link prefetch={false} className="text-link" href={serviceHref(service.slug)}>
                    Explore {hub.name}
                  </Link>
                </header>
                {service.slug !== "brain-training" && <details className="atlas-topics">
                  <summary>Explore topics in {hub.name}</summary>
                  <p>{hub.blurb}</p>
                  <div className="atlas-groups">
                  {hub.groups.map((group) => {
                    const rows = pages.filter((page) => page.group === group.id);
                    if (rows.length === 0) return null;
                    return (
                      <section key={group.id} className="atlas-group" aria-label={group.label}>
                        <h4>
                          <Icon id={group.icon} />
                          {group.label}
                        </h4>
                        <ul>
                          {rows.map((page) => (
                            <li key={page.slug}>
                              <Link prefetch={false} href={offeringPath(page)}>
                                <Icon id={page.icon} />
                                <strong>{page.title}</strong>
                                <span>{page.card}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </section>
                    );
                  })}
                  </div>
                </details>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
