import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/lib/data';
import ProductView from '@/components/ProductView';

export function generateStaticParams() { return PRODUCTS.map(p => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PRODUCTS.find(x => x.slug === params.slug);
  if (!p) return { title: 'Produto' };
  return {
    title: p.name,
    description: p.detail,
    openGraph: { title: `${p.name} · HYLO CARTIS STUDIO`, description: p.detail, images: [p.image], type: 'website' },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = PRODUCTS.find(x => x.slug === params.slug);
  if (!p) notFound();
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Product', name: p.name,
    image: p.image, description: p.detail,
    brand: { '@type': 'Brand', name: 'Hylo Cartis Studio' },
    offers: { '@type': 'Offer', priceCurrency: 'BRL', price: p.price, availability: p.status === 'soldout' ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock' },
  };
  return (
    <div className="pt-16 bg-ink min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductView slug={p.slug} />
    </div>
  );
}
