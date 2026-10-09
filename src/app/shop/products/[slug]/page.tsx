import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductChooser } from '@/components/shop/Store';
import { products, productPath, isOrderable } from '@/lib/shop';
import styles from '@/components/shop/store.module.css';

export const dynamicParams = false;
export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = products.find(p => p.slug === slug);
  return { title: p?.title || 'Product', description: p ? `Explore ${p.title} in the NNG collection. See options and catalogue prices, then confirm availability with the team.` : undefined, alternates: { canonical: productPath(slug) }, robots: { index: false, follow: false }, openGraph: p ? { title: p.title, images: [{ url: p.images[0], alt: p.title }], url: productPath(slug) } : undefined };
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = products.find(p => p.slug === slug); if (!p) notFound();
  if (!isOrderable(p)) return <><Link className={styles.textLink} href="/shop/" prefetch={false}>Back to the collection</Link><h1>This item is outside the current collection</h1><p>Browse the stone and Rudraksha collection for catalogue options.</p></>;
  return <><Link className={styles.textLink} href="/shop/" prefetch={false}>Back to the collection</Link><ProductChooser product={{ id: p.id, slug: p.slug, title: p.title, category: p.category, image: p.images[0], variants: p.variants }} images={p.images} /><section className={styles.details}><div><h2>About this piece</h2>{p.description && <p>{p.description}</p>}{p.details.length ? <><h3>Specifications</h3><ul>{p.details.map((detail, i) => <li key={i}>{detail}</li>)}</ul></> : <p>Ask the team to confirm material, measurements and the details of the piece available before ordering.</p>}<p className={styles.quiet}>Catalogue prices checked {p.priceDate}. The team confirms the final order amount.</p></div><div><h2>Care and details</h2>{p.care.length ? p.care.map((care, i) => <p key={i}>{care}</p>) : <p>Ask for care instructions for your selected material and finish before use.</p>}<p>Confirm bead size, weight, dimensions and finish where relevant. Photographs may not show the exact piece supplied.</p></div></section></>;
}
