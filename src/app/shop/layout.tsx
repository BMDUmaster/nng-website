import { StoreProvider } from '@/components/shop/Store';
import { products, isOrderable } from '@/lib/shop';
import styles from '@/components/shop/store.module.css';
import { productDisplay } from '@/lib/product-display';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  const summaries = products.filter(isOrderable).map(p => ({ id: p.id, slug: p.slug, title: p.title, display: productDisplay(p.title, p.details), category: p.category, image: p.images[0], variants: p.variants }));
  return <StoreProvider products={summaries}>{children}<section className={styles.terms} aria-labelledby="shop-order-notes"><h2 id="shop-order-notes">Before you order</h2><p>The NNG team will confirm availability through an authorised supplier, the final price, delivery charges and timing, certificates where applicable, and returns terms. Product photographs are catalogue references. Confirm the appearance, size and details of the piece you will receive.</p><p>Stones and Rudraksha may be chosen for personal or spiritual practice. They are not treatments and do not promise changes in health, relationships, career or finances. A consultation is not required to browse this collection.</p></section></StoreProvider>;
}
