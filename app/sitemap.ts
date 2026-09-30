import { Metadata } from 'next';
import { COLLECTIONS, PRODUCTS, EDITORIALS } from '@/lib/data';
import { SITE_URL } from '@/lib/site';

export default function sitemap() {
  const base = SITE_URL;
  const staticRoutes = ['', '/shop', '/collections', '/collections/ovni', '/editorial', '/studio', '/studio/alisson-abreu', '/culture', '/runway', '/about', '/contact'];
  const dyn = [
    ...COLLECTIONS.map(c => `/collections/${c.slug}`),
    ...['orion', 'lyra', 'hydra'].map(d => `/collections/ovni/${d}`),
    ...PRODUCTS.map(p => `/shop/${p.slug}`),
    ...EDITORIALS.map(e => `/editorial/${e.slug}`),
  ];
  return [...staticRoutes, ...dyn].map(r => ({ url: `${base}${r || '/'}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: r === '' ? 1 : 0.7 }));
}
export const metadata: Metadata = { title: 'Sitemap' };
