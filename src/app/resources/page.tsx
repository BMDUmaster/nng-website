import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/offerings/Breadcrumbs";
import { stoneHubPath } from "@/content/stone-articles";
import styles from "@/components/learning/StoneLibrary.module.css";

export const metadata: Metadata = {
  title: "Resources",
  description: "The NNG reading room: educational guides and blogs to explore at your own pace.",
  alternates: { canonical: "/resources/" },
  robots: { index: false, follow: false },
};

export default function ResourcesPage() {
  return <div className={`section-wrap ${styles.root}`} data-resources-page>
    <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
    <header className={styles.intro}>
      <p className={styles.eyebrow}>THE NNG READING ROOM</p>
      <h1>Resources</h1>
      <p>Explore a subject, find a clear explanation and read at your own pace.</p>
    </header>
    <div className={`${styles.grid} ${styles.resourceChoices}`}>
      <section className={styles.card} aria-labelledby="reading-room-title">
        <p className={styles.meta}>SUBJECT GUIDE</p>
        <h2 id="reading-room-title">Crystals, Stones and Rudraksha</h2>
        <p>Meanings, materials, care and questions to ask before choosing a stone or bead.</p>
        <Link className={styles.readLink} prefetch={false} href={stoneHubPath}>Explore the reading room <span aria-hidden="true">→</span></Link>
      </section>
      <section className={styles.card} aria-labelledby="blogs-title">
        <p className={styles.meta}>ARTICLE LIBRARY</p>
        <h2 id="blogs-title">Blogs</h2>
        <p>Browse individual articles. Start with five demo guides prepared for Narayani’s review.</p>
        <Link className={styles.readLink} prefetch={false} href="/resources/blogs/">Browse the blogs <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  </div>;
}
