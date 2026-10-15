import type { Metadata } from "next";
import Link from "next/link";
import { ReadingHero } from "@/components/learning/StoneLibrary";
import { Reveal } from "@/components/ui/Reveal";
import { stoneArticles, stoneHubPath } from "@/content/stone-articles";
import { asset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Resources",
  description: "The NNG reading room: educational guides and blogs to explore at your own pace.",
  alternates: { canonical: "/resources/" },
  robots: { index: false, follow: false },
};

const choices = [
  { kicker: "Subject guide", id: "reading-room-title", title: "Crystals, Stones and Rudraksha", text: "Meanings, materials, care and questions to ask before choosing a stone or bead.", href: stoneHubPath, cta: "Explore the reading room", banner: stoneArticles[2]?.banner },
  { kicker: "Article library", id: "blogs-title", title: "Blogs", text: "Browse individual articles. Start with five demo guides prepared for Narayani’s review.", href: "/resources/blogs/", cta: "Browse the blogs", banner: stoneArticles[0]?.banner },
];

export default function ResourcesPage() {
  return (
    <div className="rr" data-resources-page>
      <ReadingHero crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]} kicker="The NNG reading room" title={<>Resources</>} lead="Explore a subject, find a clear explanation and read at your own pace." />
      <section className="rr-sec">
        <div className="rr-inner">
          <div className="rr-choices">
            {choices.map((choice, i) => (
              <section key={choice.id} className="rr-choice" aria-labelledby={choice.id} data-reveal="" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                <div className="rr-choice-img">
                  <img src={asset(`/images/stone-journal/${choice.banner}-1280.webp`)} alt="" width={1280} height={720} loading="lazy" decoding="async" />
                </div>
                <div className="rr-choice-body">
                  <p className="rr-meta">{choice.kicker}</p>
                  <h2 id={choice.id}>{choice.title}</h2>
                  <p>{choice.text}</p>
                  <Link className="rr-read" prefetch={false} href={choice.href}>
                    {choice.cta} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Reveal />
    </div>
  );
}
