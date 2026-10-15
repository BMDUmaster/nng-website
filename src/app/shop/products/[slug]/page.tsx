import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ShopComingSoon } from '@/components/shop/ShopComingSoon';
import { products, productPath } from '@/lib/shop';

export const dynamicParams = false;
export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = products.find(p => p.slug === slug);
  return { title: p?.title || 'Product', alternates: { canonical: productPath(slug) }, robots: { index: false, follow: false } };
}
/** Product links already shared keep working and show the coming-soon note until the shop opens. */
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; if (!products.some(p => p.slug === slug)) notFound();
  return <ShopComingSoon crumb="Shop" />;
}
