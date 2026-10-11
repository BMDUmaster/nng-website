import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { articleReadingMinutes, stoneArticlePath, stoneArticles, stoneHubPath, type StoneArticle } from "@/content/stone-articles";
import { asset } from "@/lib/assets";

const demoLabel = "Demo editorial • Awaiting Narayani’s review";

type Crumb = { label: string; href?: string };

export function StoneBanner({ article, priority = false }: { article: StoneArticle; priority?: boolean }) {
  return (
    <picture>
      <source type="image/webp" srcSet={`${asset(`/images/stone-journal/${article.banner}-640.webp`)} 640w, ${asset(`/images/stone-journal/${article.banner}-1280.webp`)} 1280w`} sizes="(max-width: 680px) 100vw, 60vw" />
      {/* Static exports serve responsive local files without an image service. */}
      <img className="rr-banner" src={asset(`/images/stone-journal/${article.banner}-1280.webp`)} alt={article.alt} width={1280} height={720} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
    </picture>
  );
}

/** The plum opening shared by the resources, reading room, blogs and article pages. */
export function ReadingHero({ crumbs, kicker, title, lead, demo = false, children }: { crumbs: Crumb[]; kicker: string; title: React.ReactNode; lead: string; demo?: boolean; children?: React.ReactNode }) {
  return (
    <section className="rr-hero" aria-labelledby="page-title">
      <div className="rr-hero-inner" data-reveal="">
        <nav className="cn-crumbs" aria-label="Breadcrumb">
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="rr-crumb">
              {i > 0 && <span aria-hidden="true">/</span>}
              {crumb.href ? <Link prefetch={false} href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
            </span>
          ))}
        </nav>
        <p className="cn-kicker">{kicker}</p>
        <h1 id="page-title">{title}</h1>
        <p className="cn-lead">{lead}</p>
        {demo && <span className="rr-demo">{demoLabel}</span>}
        {children}
      </div>
    </section>
  );
}

/** One article as a card: banner with its category, reading time, title, summary. The whole card opens it. */
export function ArticleCard({ article, cta = "Read the guide", index = 0, priority = false }: { article: StoneArticle; cta?: string; index?: number; priority?: boolean }) {
  return (
    <article className="rr-card" data-reveal="" style={{ "--d": `${(index % 3) * 90}ms` } as React.CSSProperties}>
      <div className="rr-card-img">
        <StoneBanner article={article} priority={priority} />
        <span className="rr-chip">{article.category}</span>
      </div>
      <div className="rr-card-body">
        <p className="rr-meta">{articleReadingMinutes(article)} min read</p>
        <h3>
          <Link href={stoneArticlePath(article.slug)} prefetch={false}>
            {article.title}
          </Link>
        </h3>
        <p>{article.summary}</p>
        <span className="rr-read" aria-hidden="true">
          {cta} <span>→</span>
        </span>
      </div>
    </article>
  );
}

export function StoneLibrary() {
  const [featured, ...more] = stoneArticles;
  const topics = [
    { href: "#gemstones", label: "Gemstones" },
    { href: "#crystals", label: "Crystals" },
    { href: "#rudraksha", label: "Rudraksha" },
    { href: "#buying", label: "Buying thoughtfully" },
  ];
  const anchor = (article: StoneArticle) =>
    article.category === "Crystals" ? "crystals" : article.category === "Rudraksha" ? "rudraksha" : article.category === "Buying thoughtfully" ? "buying" : "reports";
  return (
    <div className="rr" data-stone-library>
      <ReadingHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Crystals, Stones and Rudraksha" }]}
        kicker="The NNG reading room"
        title={<>Gemstones, crystals <em>&amp; Rudraksha</em></>}
        lead="Clear guides to their meanings, materials and care. Read with curiosity; decide without pressure."
        demo
      >
        <nav className="rr-topics" aria-label="Article topics">
          {topics.map((topic) => (
            <a key={topic.href} href={topic.href}>
              {topic.label}
            </a>
          ))}
        </nav>
      </ReadingHero>

      <section className="rr-sec">
        <div className="rr-inner">
          <article className="rr-featured" id="gemstones" data-stone-article data-reveal="">
            <div className="rr-featured-img">
              <StoneBanner article={featured} priority />
              <span className="rr-chip">Start here</span>
            </div>
            <div className="rr-featured-body">
              <p className="rr-meta">
                {featured.category} · {articleReadingMinutes(featured)} min read
              </p>
              <h2>{featured.title}</h2>
              <p>{featured.summary}</p>
              <Link className="cn-cta" href={stoneArticlePath(featured.slug)} prefetch={false}>
                <span>Read the guide</span>
                <span className="cn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          <header className="rr-head" data-reveal="">
            <p className="cn-kicker cn-kicker-dark">More to read</p>
            <h2 id="guides-title">Explore the guides</h2>
          </header>
          <div className="rr-grid" aria-labelledby="guides-title">
            {more.map((article, i) => (
              <div key={article.slug} id={anchor(article)} className="rr-anchor" data-stone-article>
                <ArticleCard article={article} index={i} />
              </div>
            ))}
          </div>

          <p className="rr-note">These five demo articles show the planned reading experience. Traditional meanings are distinguished from material facts. Banners are AI-generated illustrations, not product photographs.</p>

          <aside className="rr-deeper" aria-label="Existing reference guides" data-reveal="">
            <p>Want more background?</p>
            <div>
              <Link className="cn-ghost cn-ghost-dark" href={`${stoneHubPath}gemstones/`} prefetch={false}>
                Gemstone reference
              </Link>
              <Link className="cn-ghost cn-ghost-dark" href={`${stoneHubPath}rudraksha/`} prefetch={false}>
                Rudraksha reference
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <Reveal />
    </div>
  );
}

export function StoneArticlePage({ article }: { article: StoneArticle }) {
  const related = stoneArticles.filter((item) => item.slug !== article.slug).slice(0, 2);
  return (
    <article className="rr rr-article" data-stone-article-page>
      <ReadingHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Reading room", href: stoneHubPath }, { label: article.category }]}
        kicker={`${article.category} · ${articleReadingMinutes(article)} min read`}
        title={article.title}
        lead={article.summary}
        demo
      />
      <div className="rr-article-inner">
        <figure className="rr-article-figure" data-reveal="">
          <StoneBanner article={article} priority />
          <figcaption>AI-generated editorial illustration. Not an actual product or laboratory document.</figcaption>
        </figure>
        <div className="rr-article-body">
          <div className="rr-takeaway" data-reveal="">
            <strong>The short answer</strong>
            <p>{article.takeaway}</p>
          </div>
          {article.sections.map((section, i) => (
            <section key={section.heading} data-reveal="">
              <span className="rr-sec-num">{String(i + 1).padStart(2, "0")}</span>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
              {section.points && (
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section className="rr-sources" aria-labelledby="sources-title">
            <h2 id="sources-title">Sources &amp; scope</h2>
            <ul>
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.title} <span aria-hidden="true">↗</span>
                  </a>
                  <span>{source.note}</span>
                </li>
              ))}
            </ul>
            <p>Educational demo for review, not Narayani’s approved advice, a product recommendation or a promise of health or financial outcomes.</p>
          </section>
        </div>
      </div>
      <section className="rr-sec rr-next" aria-labelledby="next-title">
        <div className="rr-inner">
          <header className="rr-head">
            <p className="cn-kicker cn-kicker-dark">Keep reading</p>
            <h2 id="next-title">More guides</h2>
          </header>
          <div className="rr-grid rr-grid-2">
            {related.map((item, i) => (
              <ArticleCard key={item.slug} article={item} index={i} />
            ))}
          </div>
          <div className="rr-back">
            <Link className="cn-ghost cn-ghost-dark" href={stoneHubPath} prefetch={false}>
              ← Back to all five guides
            </Link>
          </div>
        </div>
      </section>
      <Reveal />
    </article>
  );
}
