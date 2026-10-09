import Link from "next/link";
import { Breadcrumbs } from "@/components/offerings/Breadcrumbs";
import { articleReadingMinutes, stoneArticlePath, stoneArticles, stoneHubPath, type StoneArticle } from "@/content/stone-articles";
import { asset } from "@/lib/assets";
import styles from "./StoneLibrary.module.css";

const demoLabel = "Demo editorial • Awaiting Narayani’s review";

export function StoneBanner({ article, priority = false }: { article: StoneArticle; priority?: boolean }) {
  return <picture>
    <source type="image/webp" srcSet={`${asset(`/images/stone-journal/${article.banner}-640.webp`)} 640w, ${asset(`/images/stone-journal/${article.banner}-1280.webp`)} 1280w`} sizes="(max-width: 680px) 100vw, 60vw" />
    {/* Static exports serve responsive local files without an image service. */}
    <img className={styles.banner} src={asset(`/images/stone-journal/${article.banner}-1280.webp`)} alt={article.alt} width={1280} height={720} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
  </picture>;
}

export function StoneLibrary() {
  const [featured, ...more] = stoneArticles;
  return <div className={`section-wrap ${styles.root}`} data-stone-library>
    <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Crystals, Stones and Rudraksha" }]} />
    <header className={styles.intro}>
      <p className={styles.eyebrow}>THE NNG READING ROOM</p>
      <h1>Gemstones, crystals &amp; Rudraksha</h1>
      <p>Clear guides to their meanings, materials and care. Read with curiosity; decide without pressure.</p>
      <span className={styles.demo}>{demoLabel}</span>
    </header>
    <nav className={styles.topics} aria-label="Article topics">
      <a href="#gemstones">Gemstones</a><a href="#crystals">Crystals</a><a href="#rudraksha">Rudraksha</a><a href="#buying">Buying thoughtfully</a>
    </nav>
    <article className={styles.featured} id="gemstones" data-stone-article>
      <Link className={styles.bannerLink} href={stoneArticlePath(featured.slug)} prefetch={false} aria-label={`Read ${featured.title}`}><StoneBanner article={featured} priority /></Link>
      <div>
        <span className={styles.meta}>START HERE · {featured.category} · {articleReadingMinutes(featured)} min read</span>
        <h2><Link href={stoneArticlePath(featured.slug)} prefetch={false}>{featured.title}</Link></h2>
        <p>{featured.summary}</p>
        <Link className={styles.readLink} href={stoneArticlePath(featured.slug)} prefetch={false}>Read the guide <span aria-hidden="true">→</span></Link>
      </div>
    </article>
    <section className={styles.library} aria-labelledby="guides-title">
      <h2 id="guides-title">Explore the guides</h2>
      <div className={styles.grid}>
        {more.map(article => <article className={styles.card} key={article.slug} data-stone-article id={article.category === "Crystals" ? "crystals" : article.category === "Rudraksha" ? "rudraksha" : article.category === "Buying thoughtfully" ? "buying" : "reports"}>
          <Link className={styles.bannerLink} href={stoneArticlePath(article.slug)} prefetch={false} aria-label={`Read ${article.title}`}><StoneBanner article={article} /></Link>
          <p className={styles.meta}>{article.category} · {articleReadingMinutes(article)} min read</p>
          <h3><Link href={stoneArticlePath(article.slug)} prefetch={false}>{article.title}</Link></h3>
          <p>{article.summary}</p>
          <Link className={styles.readLink} href={stoneArticlePath(article.slug)} prefetch={false}>Read the guide <span aria-hidden="true">→</span></Link>
        </article>)}
      </div>
    </section>
    <p className={styles.libraryNote}>These five demo articles show the planned reading experience. Traditional meanings are distinguished from material facts. Banners are AI-generated illustrations, not product photographs.</p>
    <aside className={styles.deeper} aria-label="Existing reference guides">
      <p>Want more background?</p>
      <div className={styles.deeperLinks}><Link className={styles.readLink} href={`${stoneHubPath}gemstones/`} prefetch={false}>Gemstone reference</Link><Link className={styles.readLink} href={`${stoneHubPath}rudraksha/`} prefetch={false}>Rudraksha reference</Link></div>
    </aside>
  </div>;
}

export function StoneArticlePage({ article }: { article: StoneArticle }) {
  const related = stoneArticles.filter(item => item.slug !== article.slug).slice(0, 2);
  return <article className={`section-wrap ${styles.root}`} data-stone-article-page>
    <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Reading room", href: stoneHubPath }, { label: article.title }]} />
    <header className={styles.articleHeader}>
      <span className={styles.demo}>{demoLabel}</span>
      <p className={styles.meta}>{article.category} · {articleReadingMinutes(article)} min read</p>
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
    </header>
    <figure className={styles.articleFigure}><StoneBanner article={article} priority /><figcaption>AI-generated editorial illustration. Not an actual product or laboratory document.</figcaption></figure>
    <div className={styles.articleBody}>
      <div className={styles.takeaway}><strong>The short answer</strong><p>{article.takeaway}</p></div>
      {article.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p>{section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}
      <section className={styles.sources} aria-labelledby="sources-title"><h2 id="sources-title">Sources &amp; scope</h2><ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} <span aria-hidden="true">↗</span></a><span>{source.note}</span></li>)}</ul><p>Educational demo for review, not Narayani’s approved advice, a product recommendation or a promise of health or financial outcomes.</p></section>
      <nav className={styles.nextRead} aria-label="More articles"><strong>Keep reading</strong><ul>{related.map(item => <li key={item.slug}><Link href={stoneArticlePath(item.slug)} prefetch={false}>{item.title} <span aria-hidden="true">→</span></Link></li>)}</ul><Link className={styles.readLink} href={stoneHubPath} prefetch={false}>Back to all five guides</Link></nav>
    </div>
  </article>;
}
