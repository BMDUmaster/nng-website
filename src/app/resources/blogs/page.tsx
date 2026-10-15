import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard, ReadingHero } from "@/components/learning/StoneLibrary";
import { Reveal } from "@/components/ui/Reveal";
import { stoneArticles, stoneHubPath } from "@/content/stone-articles";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Browse NNG demo articles on gemstones, crystals, Rudraksha and thoughtful buying.",
  alternates: { canonical: "/resources/blogs/" },
  robots: { index: false, follow: false },
};

export default function BlogsPage() {
  return (
    <div className="rr" data-blogs-page>
      <ReadingHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Blogs" }]}
        kicker="Read at your own pace"
        title={<>Blogs</>}
        lead="Short guides to gemstones, crystals and Rudraksha. Material facts and traditional meanings, kept distinct."
        demo
      />
      <section className="rr-sec">
        <div className="rr-inner">
          <div className="rr-grid">
            {stoneArticles.map((article, i) => (
              <div key={article.slug} data-blog-card>
                <ArticleCard article={article} index={i} cta="Read the article" priority={i === 0} />
              </div>
            ))}
          </div>
          <p className="rr-note">Banners are AI-generated editorial illustrations, not photographs of products offered for sale.</p>
          <aside className="rr-deeper" data-reveal="">
            <p>Prefer to browse by subject?</p>
            <div>
              <Link className="cn-cta" href={stoneHubPath} prefetch={false}>
                <span>Explore by subject in the reading room</span>
                <span className="cn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <Reveal />
    </div>
  );
}
