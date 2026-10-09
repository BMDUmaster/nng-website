import type { Metadata } from 'next';
import { Cart } from '@/components/shop/Store';
export const metadata: Metadata = { title: 'Your basket', alternates: { canonical: '/shop/cart/' }, robots: { index: false, follow: false } };
export default function CartPage() { return <Cart />; }
