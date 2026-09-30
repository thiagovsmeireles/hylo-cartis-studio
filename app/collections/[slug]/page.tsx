import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COLLECTIONS, PRODUCTS, OVNI_DROPS } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() { return COLLECTIONS.map(c => ({ slug: c.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = COLLECTIONS.find(x => x.slug === params.slug);
  return { title: c ? c.name : 'Coleção', description: c?.concept.slice(0, 155) };
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const c = COLLECTIONS.find(x => x.slug === params.slug);
  if (!c) notFound();
  const items = PRODUCTS.filter(p => p.collection === c.slug || (c.slug === 'donegan' && p.collection === 'donegan-ii'));
  const jsonLd = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: c.name, description: c.concept };
  return (
    <article className="pt-16 min-h-screen" style={{ background: c.palette.bg, color: c.palette.fg }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative h-[70vh] overflow-hidden grain">
        <Image src={c.image} alt={`Editorial cinematográfico — ${c.name}`} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        <div className="absolute bottom-0 p-6 md:p-10">
          <p className="font-mono text-xs tracking-[0.3em]" style={{ color: c.palette.accent }}>{c.year} — HYLO CARTIS STUDIO</p>
          <h1 className="font-display tracking-mega leading-[0.9] text-[14vw] md:text-[8vw]">{c.name}</h1>
          <p className="text-lg opacity-80">{c.tagline}</p>
        </div>
      </div>
      <div className="px-4 md:px-8 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] opacity-60">CONCEITO EDITORIAL</p>
          <p className="text-lg leading-relaxed mt-3 opacity-90">{c.concept}</p>
          {c.slug === 'ovni' && (
            <div className="grid grid-cols-3 gap-2 mt-6">
              {OVNI_DROPS.map(d => (
                <Link key={d.slug} href={`/collections/ovni/${d.slug}`} className="border border-white/20 p-3 hover:border-white/60" style={{ boxShadow: `inset 0 -3px 0 ${d.color}` }}>
                  <p className="font-display">{d.name}</p><p className="font-mono text-[9px] tracking-widest opacity-60">{d.meaning.toUpperCase()}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] opacity-60">ARQUIVO</p>
          <ul className="mt-3 space-y-2">{c.facts.map(f => <li key={f} className="border-b border-white/10 pb-2 text-sm opacity-80">— {f}</li>)}</ul>
          <p className="font-mono text-[10px] tracking-widest opacity-50 mt-4">LOOKS · MAKING OF · DESFILE — material de arquivo entra aqui com acervo licenciado.</p>
        </div>
      </div>
      {c.slug === 'ovni' && (
        <div className="px-4 md:px-8 pb-12 grid md:grid-cols-2 gap-3">
          <figure className="relative aspect-[4/3] overflow-hidden">
            <Image src="/hylo/ed-teto-prod.jpg" alt="Primeiro drop da OVNI Season — peças flutuando" fill loading="lazy" sizes="50vw" className="object-cover" />
            <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest bg-black/70 px-3 py-1.5">PRIMEIRO DROP — DIVULGAÇÃO · USO AUTORIZADO</figcaption>
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden">
            <Image src="/hylo/ed-ovni-50.jpg" alt="Look da OVNI Season — editorial com flash" fill loading="lazy" sizes="50vw" className="object-cover" />
            <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest bg-black/70 px-3 py-1.5">@byazvd / @komz___archivz · USO AUTORIZADO</figcaption>
          </figure>
        </div>
      )}
      {items.length > 0 && (
        <div className="px-4 md:px-8 pb-16">
          <h2 className="font-display text-3xl md:text-5xl">PIECES FROM {c.name}</h2>
          <div className="grid md:grid-cols-3 gap-3 mt-6">{items.map(p => <ProductCard key={p.slug} p={p} />)}</div>
        </div>
      )}
      <div className="px-4 md:px-8 pb-12"><Link href="/collections" className="font-mono text-xs tracking-widest opacity-60 hover:opacity-100">← ALL COLLECTIONS</Link></div>
    </article>
  );
}
