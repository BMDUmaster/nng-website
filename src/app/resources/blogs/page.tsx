import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/offerings/Breadcrumbs";
import { StoneBanner } from "@/components/learning/StoneLibrary";
import { articleReadingMinutes, stoneArticlePath, stoneArticles, stoneHubPath } from "@/content/stone-articles";
import styles from "@/components/learning/StoneLibrary.module.css";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Browse NNG demo articles on gemstones, crystals, Rudraksha and thoughtful buying.",
  alternates: { canonical: "/resources/blogs/" },
  robots: { index: false, follow: false },
};

export default function BlogsPage() {
  return <div className={`section-wrap ${styles.root}`} data-blogs-page>
    <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Blogs" }]} />
    <header className={styles.intro}>
      <p className={styles.eyebrow}>READ AT YOUR OWN PACE</p>
      <h1>Blogs</h1>
      <p>Short guides to gemstones, crystals and Rudraksha. Material facts and traditional meanings, kept distinct.</p>
      <span className={styles.demo}>Demo editorial • Awaiting Narayani’s review</span>
    </header>
    <div className={styles.grid}>
      {stoneArticles.map((article, index) => <article className={styles.card} key={article.slug} data-blog-card>
        <Link className={styles.bannerLink} href={stoneArticlePath(article.slug)} prefetch={false} aria-label={`Read ${article.title}`}><StoneBanner article={article} priority={index === 0} /></Link>
        <p className={styles.meta}>{article.category} · {articleReadingMinutes(article)} min read</p>
        <h2><Link href={stoneArticlePath(article.slug)} prefetch={false}>{article.title}</Link></h2>
        <p>{article.summary}</p>
        <Link className={styles.readLink} href={stoneArticlePath(article.slug)} prefetch={false}>Read the article <span aria-hidden="true">→</span></Link>
      </article>)}
    </div>
    <p className={styles.libraryNote}>Banners are AI-generated editorial illustrations, not photographs of products offered for sale.</p>
    <aside className={styles.deeper}><Link className={styles.readLink} href={stoneHubPath} prefetch={false}>Explore by subject in the reading room <span aria-hidden="true">→</span></Link></aside>
  </div>;
}
