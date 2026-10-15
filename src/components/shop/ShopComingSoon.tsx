import Link from "next/link";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import styles from "@/components/shop/store.module.css";

/**
 * The shop is not open yet. Every shop page shows this note until the collection is ready; the
 * collection, basket and product components stay in Store.tsx for when it opens.
 */
export function ShopComingSoon({ crumb }: { crumb: string }) {
  return (
    <section className={styles.soon} aria-labelledby="page-title">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link prefetch={false} href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{crumb}</span>
      </nav>
      <p className="kicker">Crystals, Stones and Rudraksha</p>
      <h1 id="page-title">
        Coming <em>soon</em>
      </h1>
      <span className={styles.soonRule} aria-hidden="true" />
      <p className={styles.soonLead}>
        The collection is being prepared with care. Until it opens, you are welcome to ask the team about a stone or
        rudraksha on WhatsApp.
      </p>
      <div className={styles.soonActions}>
        <EnquiryTrigger source="shop-soon" primary>
          Ask on WhatsApp
        </EnquiryTrigger>
        <Link prefetch={false} className="text-link" href="/">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
