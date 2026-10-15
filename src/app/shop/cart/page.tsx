import type { Metadata } from 'next';
import { ShopComingSoon } from '@/components/shop/ShopComingSoon';
export const metadata: Metadata = { title: 'Your basket', alternates: { canonical: '/shop/cart/' }, robots: { index: false, follow: false } };
export default function CartPage() { return <ShopComingSoon crumb="Your basket" />; }
