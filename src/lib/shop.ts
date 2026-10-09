import catalogue from '@/content/shop/catalogue.json';

export type Product = {
  id: string; slug: string; title: string; category: string; description?: string; details: string[];
  care: string[]; images: string[]; variants: { id: string; label: string; price: number }[]; priceDate: string;
};
export const products: Product[] = catalogue;
export const heldProductIds = new Set([
  '8517917016284', '8844024676572', '8844021203164', '7886395572444',
  '8172272812252', '7868879700188', '9210277527772', '9210243023068',
]);
export const isOrderable = (product: Product) => !heldProductIds.has(product.id);
export const money = (paise: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: paise % 100 ? 2 : 0, maximumFractionDigits: 2 }).format(paise / 100);
export const productPath = (slug: string) => `/shop/products/${slug}/`;
export const categories = ['All', 'Stones', 'Rudraksha', 'Bracelets', 'Jewellery', 'Malas', 'Objects'];
