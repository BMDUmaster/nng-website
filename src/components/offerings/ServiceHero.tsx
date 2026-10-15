import Link from "next/link";
import { Fragment } from "react";
import { asset, assetSet } from "@/lib/assets";
import { site } from "@/content/site";
import type { Crumb } from "./Breadcrumbs";

/**
 * The plum opening for every service hub and service page. The visual is either her portrait in the gold arch
 * (hubs) or the page's own drawing on a pearl card framed in gold (individual pages).
 */
export function ServiceHero({
  trail,
  kicker,
  title,
  lead,
  actions,
  note,
  art,
  portrait = false,
}: {
  trail: Crumb[];
  kicker: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  actions: React.ReactNode;
  note?: React.ReactNode;
  art?: React.ReactNode;
  portrait?: boolean;
}) {
  return (
    <section className="cn-hero svd-hero offer-hero" aria-labelledby="page-title">
      <div className="cn-hero-inner">
        <div className="cn-hero-copy">
          <nav className="cn-crumbs" aria-label="Breadcrumb">
            {trail.map((crumb, i) => (
              <Fragment key={crumb.label}>
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? <Link prefetch={false} href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              </Fragment>
            ))}
          </nav>
          <p className="cn-kicker">{kicker}</p>
          <h1 id="page-title">{title}</h1>
          <p className="cn-lead">{lead}</p>
          <div className="cn-actions">{actions}</div>
          {note}
        </div>
        {portrait ? (
          <div className="cn-hero-visual">
            <div className="cn-arch">
              <picture>
                <source type="image/avif" srcSet={assetSet("/images/narayani-portrait-480.avif 480w, /images/narayani-portrait-684.avif 684w")} sizes="(max-width: 900px) 62vw, 380px" />
                <img src={asset("/images/narayani-portrait-684.webp")} alt={`Narayani Garg, ${site.title}`} width={684} height={1000} fetchPriority="high" />
              </picture>
            </div>
            <p className="cn-badge">
              <span>Narayani Garg</span>
              <small>Personal guidance</small>
            </p>
          </div>
        ) : (
          <div className="svd-art">
            <div className="svd-art-card">{art}</div>
          </div>
        )}
      </div>
    </section>
  );
}

export function HeroArrow() {
  return (
    <span className="cn-arrow" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6h7M6.5 3l3 3-3 3" />
      </svg>
    </span>
  );
}
