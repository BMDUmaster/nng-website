import type { Metadata } from 'next';
import { ShopComingSoon } from '@/components/shop/ShopComingSoon';

export const metadata: Metadata = { title: 'Stones and Rudraksha collection', description: 'Stones, Rudraksha, bracelets, malas and crystal objects from NNG. The collection is coming soon.', alternates: { canonical: '/shop/' }, robots: { index: false, follow: false } };
export default function ShopPage() {
  return <ShopComingSoon crumb="Shop" />;
}
