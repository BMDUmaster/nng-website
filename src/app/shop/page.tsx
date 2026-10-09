import type { Metadata } from 'next';
import { Collection } from '@/components/shop/Store';
import styles from '@/components/shop/store.module.css';

export const metadata: Metadata = { title: 'Stones and Rudraksha collection', description: 'Explore stones, Rudraksha, bracelets, malas and crystal objects with NNG. Choose your pieces and enquire with the team before ordering.', alternates: { canonical: '/shop/' }, robots: { index: false, follow: false } };
export default function ShopPage() {
  return <><header className={styles.intro}><h1>A piece you connect with</h1><p>Choose a piece, build your basket and enquire with the team. Availability and final order terms are confirmed before payment.</p></header><Collection /></>;
}
