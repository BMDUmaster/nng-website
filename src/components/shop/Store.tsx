'use client';

import Link from 'next/link';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { asset } from '@/lib/assets';
import { whatsappUrl } from '@/lib/whatsapp';
import styles from './store.module.css';

export type Summary = { id: string; slug: string; title: string; display?: { title: string; subtitle: string; specification: string }; category: string; image: string; variants: { id: string; label: string; price: number }[] };
type Line = { productId: string; variantId: string; quantity: number };
type Basket = { items: Line[]; ready: boolean; products: Summary[]; update: (p: string, v: string, q: number) => void; add: (p: string, v: string, q: number) => void };
const Context = createContext<Basket | null>(null);
const key = 'nng-basket-v1';
const format = (n: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: n % 100 ? 2 : 0, maximumFractionDigits: 2 }).format(n / 100);
const href = (slug: string) => `/shop/products/${slug}/`;
const cardImage = (image: string, width: number) => asset(image.replace(/\.[^.]+$/, `-card-${width}.webp`));
const collectionKey = 'nng-collection-v1';
const collectionCategories = ['All', 'Stones', 'Rudraksha', 'Bracelets', 'Jewellery', 'Malas', 'Objects'];
function readCollectionState() {
  const fallback = { search: '', category: 'All', sort: 'name', page: 1 };
  try {
    const value: unknown = JSON.parse(sessionStorage.getItem(collectionKey) || 'null');
    if (!value || typeof value !== 'object' || Array.isArray(value)) return fallback;
    const raw = value as Record<string, unknown>;
    return {
      search: typeof raw.search === 'string' ? raw.search.slice(0, 200) : '',
      category: typeof raw.category === 'string' && collectionCategories.includes(raw.category) ? raw.category : 'All',
      sort: typeof raw.sort === 'string' && ['name', 'low', 'high'].includes(raw.sort) ? raw.sort : 'name',
      page: typeof raw.page === 'number' && Number.isSafeInteger(raw.page) && raw.page > 0 ? raw.page : 1,
    };
  } catch { return fallback; }
}
function useBasket() { const basket = useContext(Context); if (!basket) throw new Error('Store provider missing'); return basket; }

export function StoreProvider({ products, children }: { products: Summary[]; children: React.ReactNode }) {
  const [items, setItems] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);
  const [storageNotice, setStorageNotice] = useState('');
  useEffect(() => {
    const parse = (raw: string | null): Line[] => {
      try {
        const value: unknown = JSON.parse(raw || '[]');
        if (!Array.isArray(value)) return [];
        const seen = new Set<string>();
        return value.filter((line): line is Line => {
          if (!line || typeof line !== 'object') return false;
          const { productId, variantId, quantity } = line;
          const identity = `${productId}/${variantId}`;
          if (seen.has(identity) || !Number.isInteger(quantity) || quantity < 1 || quantity > 99 || !products.find(p => p.id === productId)?.variants.some(v => v.id === variantId)) return false;
          seen.add(identity); return true;
        });
      } catch { return []; }
    };
    // Restore browser-only persistence after the server-rendered shell mounts.
    const restore = window.setTimeout(() => {
      try { setItems(parse(localStorage.getItem(key))); } catch { setStorageNotice('Your basket will stay open for this visit, but cannot be saved on this device'); }
      setReady(true);
    }, 0);
    const sync = (event: StorageEvent) => { if (event.key === key) setItems(parse(event.newValue)); };
    window.addEventListener('storage', sync);
    return () => { window.clearTimeout(restore); window.removeEventListener('storage', sync); };
  }, [products]);
  useEffect(() => {
    if (!ready) return;
    const persist = window.setTimeout(() => {
      try { localStorage.setItem(key, JSON.stringify(items)); }
      catch { setStorageNotice('Your basket is available for this visit, but cannot be saved on this device.'); }
    }, 0);
    return () => window.clearTimeout(persist);
  }, [items, ready]);
  function update(productId: string, variantId: string, quantity: number) {
    if (!ready || !Number.isInteger(quantity) || quantity < 0 || quantity > 99 || !products.find(p => p.id === productId)?.variants.some(v => v.id === variantId)) return;
    setItems(old => [...old.filter(l => l.productId !== productId || l.variantId !== variantId), ...(quantity ? [{ productId, variantId, quantity }] : [])]);
  }
  function add(productId: string, variantId: string, quantity: number) {
    if (!ready || !Number.isInteger(quantity) || quantity < 1 || quantity > 99 || !products.find(p => p.id === productId)?.variants.some(v => v.id === variantId)) return;
    setItems(old => { const existing = old.find(l => l.productId === productId && l.variantId === variantId); return [...old.filter(l => l !== existing), { productId, variantId, quantity: Math.min(99, (existing?.quantity || 0) + quantity) }]; });
  }
  return <Context.Provider value={{ items, ready, products, update, add }}><div className={styles.store} data-store-ready={ready}>
    <nav className={styles.bar} aria-label="Shop navigation"><Link href="/shop/" prefetch={false}>NNG collection</Link><Link href="/shop/cart/" prefetch={false}>Your basket <span aria-live="polite">({items.reduce((n, l) => n + l.quantity, 0)})</span></Link></nav>
    {storageNotice && <p role="status">{storageNotice}</p>}{children}
  </div></Context.Provider>;
}

export function Collection() {
  const { products } = useBasket();
  const [search, setSearch] = useState(''); const [category, setCategory] = useState('All'); const [sort, setSort] = useState('name'); const [page, setPage] = useState(1);
  const [restored, setRestored] = useState(false);
  useEffect(() => {
    const restore = window.setTimeout(() => {
      const saved = readCollectionState();
      setSearch(saved.search); setCategory(saved.category); setSort(saved.sort); setPage(saved.page);
      setRestored(true);
    }, 0);
    return () => window.clearTimeout(restore);
  }, []);
  const filtered = useMemo(() => products.filter(p => (category === 'All' || p.category === category) && `${p.title} ${p.category}`.toLowerCase().includes(search.toLowerCase().trim())).sort((a, b) => sort === 'low' ? Math.min(...a.variants.map(v => v.price)) - Math.min(...b.variants.map(v => v.price)) : sort === 'high' ? Math.min(...b.variants.map(v => v.price)) - Math.min(...a.variants.map(v => v.price)) : a.title.localeCompare(b.title)), [products, category, search, sort]);
  const pages = Math.max(1, Math.ceil(filtered.length / 24));
  const activePage = Math.min(page, pages);
  useEffect(() => {
    if (!restored) return;
    try { sessionStorage.setItem(collectionKey, JSON.stringify({ search, category, sort, page: activePage })); }
    catch { /* Filters remain usable without per-tab storage. */ }
  }, [restored, search, category, sort, activePage]);
  function changePage(n: number) { setPage(Math.max(1, Math.min(pages, n))); document.getElementById('collection-results')?.scrollIntoView({ block: 'start', behavior: 'instant' }); }
  return <>
    <div className={styles.filters} id="collection"><label>Find a stone or product<input type="search" maxLength={200} placeholder="Try rose quartz or Rudraksha" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} /></label><label>Collection<select value={category} onChange={e => { setCategory(e.target.value); setPage(1); }}>{collectionCategories.map(c => <option key={c}>{c}</option>)}</select></label><label>Sort by<select value={sort} onChange={e => { setSort(e.target.value); setPage(1); }}><option value="name">Product name</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div>
    <p className={styles.result} id="collection-results" role="status">{filtered.length} products{category !== 'All' ? ` in ${category}` : ''} · Page {activePage} of {pages}</p>
    <div className={styles.grid}>{filtered.slice((activePage - 1) * 24, activePage * 24).map((p, i) => <article key={p.id}><Link className={styles.productLink} href={href(p.slug)} prefetch={false}><div className={styles.photo}><img src={cardImage(p.image, 640)} srcSet={`${cardImage(p.image, 320)} 320w, ${cardImage(p.image, 640)} 640w`} sizes="(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 270px" alt={p.title} width="640" height="640" decoding="async" loading={i < 4 && activePage === 1 ? 'eager' : 'lazy'} /></div><span className={styles.category}>{p.category}</span><h2>{p.display?.title ?? p.title}</h2>{p.display?.subtitle && <p className={styles.cardSpecification}>{p.display.subtitle}</p>}{p.display?.specification && <p className={styles.cardSpecification}>{p.display.specification}</p>}<p>{p.variants.length > 1 ? 'From ' : ''}{format(Math.min(...p.variants.map(v => v.price)))}</p></Link></article>)}</div>
    {!filtered.length && <div className={styles.empty}><h2>No matching products</h2><p>Try a stone name or choose another collection</p><button onClick={() => { setSearch(''); setCategory('All'); setPage(1); }}>Clear filters</button></div>}
    <nav className={styles.pagination} aria-label="Collection pages"><button disabled={activePage <= 1} onClick={() => changePage(activePage - 1)}>Previous</button><span>{activePage} / {pages}</span><button disabled={activePage >= pages} onClick={() => changePage(activePage + 1)}>Next</button></nav>
    <noscript><p>Turn on JavaScript to search the full collection or build a basket. You can still open the products shown here and enquire with the team.</p></noscript>
  </>;
}

export function ProductChooser({ product, images }: { product: Summary; images: string[] }) {
  const { add, ready } = useBasket();
  const [image, setImage] = useState(images[0]); const [variant, setVariant] = useState(product.variants[0].id); const [quantity, setQuantity] = useState(1); const [notice, setNotice] = useState('');
  const selected = product.variants.find(v => v.id === variant)!;
  return <div className={styles.productHero}>
    <div><div className={styles.largePhoto}><img src={asset(image)} alt={product.title} width="1000" height="1000" fetchPriority="high" /></div>{images.length > 1 && <div className={styles.thumbnails} aria-label="Product photographs">{images.map((url, i) => <button key={url} aria-label={`View photograph ${i + 1}`} aria-pressed={image === url} onClick={() => setImage(url)}><img src={asset(url)} alt="" width="80" height="80" loading="lazy" /></button>)}</div>}</div>
    <div className={styles.productInfo}><p className={styles.category}>{product.category}</p><h1>{product.title}</h1><p className={styles.price} aria-live="polite">{format(selected.price)}</p><p className={styles.quiet}>Catalogue price · Availability and final order amount confirmed by the team</p>
      <label>Choose an option<select value={variant} onChange={e => { setVariant(e.target.value); setNotice(''); }}>{product.variants.map(v => <option key={v.id} value={v.id}>{v.label} · {format(v.price)}</option>)}</select></label>
      <label htmlFor="product-quantity">Quantity<input id="product-quantity" aria-describedby="quantity-limit" type="number" min="1" max="99" step="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} /></label>
      <p id="quantity-limit" className={styles.quiet}>Maximum 99 of each option in your basket</p>
      <button className={styles.primary} data-primary-cta disabled={!ready || !Number.isInteger(quantity) || quantity < 1 || quantity > 99} onClick={() => { add(product.id, selected.id, quantity); setNotice('Basket updated'); }}>Add to basket</button>
      <p className={styles.notice} role="status">{notice}</p>{notice && <Link className={styles.textLink} href="/shop/cart/" prefetch={false}>View basket and enquire</Link>}
      <p className={styles.quiet}>No payment is taken here. Choose what interests you, then speak with the NNG team.</p>
    </div>
  </div>;
}

export function Cart() {
  const { products, items, ready, update } = useBasket();
  const [copyNotice, setCopyNotice] = useState('');
  const lines = items.flatMap(l => { const product = products.find(p => p.id === l.productId); const variant = product?.variants.find(v => v.id === l.variantId); return product && variant ? [{ ...l, product, variant }] : []; });
  const total = lines.reduce((n, l) => n + l.quantity * l.variant.price, 0);
  const message = `Hello NNG team, I would like to enquire about these products:\n\n${lines.map(l => `${l.product.title}\nOption: ${l.variant.label}\nQuantity: ${l.quantity}\nCatalogue unit price: ${format(l.variant.price)}\n${new URL(href(l.product.slug), 'https://nngarg.com').href}`).join('\n\n')}\n\nCatalogue basket total: ${format(total)}\nPlease confirm availability, the final amount including taxes and delivery, certificates where applicable, delivery time and returns terms before I place an order.`;
  const preparedEnquiryUrl = whatsappUrl(message);
  const useManualMessage = preparedEnquiryUrl.length > 1800;
  async function copyMessage() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(message);
      setCopyNotice('Enquiry text copied. Paste it into your message to the team.');
    } catch {
      setCopyNotice('Copy is unavailable. Select the enquiry text below and copy it using your device controls.');
    }
  }
  if (!ready) return <><h1>Your basket</h1><p role="status">Loading your basket</p><noscript><p>Turn on JavaScript to build a basket, or email the team with the products you would like to enquire about.</p><a href="mailto:enquiry@nngarg.com">Email the NNG team</a></noscript></>;
  if (!lines.length) return <div className={styles.empty}><h1>Your basket is open</h1><p>Choose a stone, bead or piece that interests you. The team can help with the details before you order.</p><Link className={styles.primary} href="/shop/" prefetch={false}>Browse the collection</Link></div>;
  return <><h1>Your basket</h1><p>Review your choices, then send the team an enquiry</p>
    <div className={styles.cartLayout}>
      <div>{lines.map(l => <article className={styles.cartLine} key={`${l.productId}/${l.variantId}`}><Link href={href(l.product.slug)} prefetch={false}><img src={asset(l.product.image)} alt={l.product.title} width="120" height="120" /></Link><div><h2><Link href={href(l.product.slug)} prefetch={false}>{l.product.title}</Link></h2><p>{l.variant.label} · {format(l.variant.price)} each</p><label>Quantity for {l.product.title}<input type="number" value={l.quantity} min="1" max="99" step="1" onChange={e => { const q = Number(e.target.value); if (q >= 1) update(l.productId, l.variantId, q); }} /></label><button className={styles.remove} onClick={() => update(l.productId, l.variantId, 0)}>Remove <span className="sr-only">{l.product.title}, {l.variant.label}</span></button></div><strong>{format(l.quantity * l.variant.price)}</strong></article>)}</div>
      <aside className={styles.cartSummary}>
        <h2>Order enquiry</h2><p>Catalogue total <strong>{format(total)}</strong></p>
        <p>Delivery, taxes and any price changes will be confirmed before you order</p>
        <a className={styles.primary} data-primary-cta href={useManualMessage ? whatsappUrl('') : preparedEnquiryUrl} target="_blank" rel="noopener noreferrer">{useManualMessage ? 'Open WhatsApp to paste your enquiry' : 'Enquire on WhatsApp'}</a>
        <p className={styles.quiet}>{useManualMessage ? 'This basket is long. Copy the enquiry text below, open WhatsApp and paste it. You review and send it yourself.' : 'Opens WhatsApp with your basket. You review and send the message yourself.'} This does not reserve stock or confirm an order.</p>
        <details className={styles.message} open={useManualMessage || undefined}>
          <summary>Review or copy your enquiry text</summary>
          <label htmlFor="basket-enquiry-text">Your order enquiry text</label>
          <textarea id="basket-enquiry-text" readOnly value={message} rows={10} />
          <button type="button" onClick={copyMessage}>Copy enquiry text</button>
          <p role="status">{copyNotice}</p>
        </details>
        <Link className={styles.textLink} href="/shop/" prefetch={false}>Continue browsing</Link>
      </aside>
    </div></>;
}
