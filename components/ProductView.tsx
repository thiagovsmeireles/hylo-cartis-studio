'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Ruler } from 'lucide-react';
import { Product, COLLECTIONS, money } from '@/lib/data';
import { useBag } from '@/lib/bag';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/data';

export default function ProductView({ slug }: { slug: string }) {
  const p = PRODUCTS.find(x => x.slug === slug)!;
  const [size, setSize] = useState<string | null>(null);
  const [err, setErr] = useState('');
  const { add } = useBag();
  const col = COLLECTIONS.find(c => c.slug === (p.collection === 'ovni' ? 'ovni' : p.collection));
  const related = PRODUCTS.filter(x => x.slug !== p.slug && x.collection === p.collection).slice(0, 3);

  return (
    <div className="grid md:grid-cols-2">
      <motion.div initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
        className="relative min-h-[70vh] md:min-h-screen grain">
        <Image src={p.image} alt={`${p.name} — foto editorial`} fill priority className="object-cover" sizes="50vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="px-6 md:px-12 py-10 md:py-20">
        <Link href="/shop" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-ash hover:text-bone"><ArrowLeft size={13} /> SHOP</Link>
        <p className="font-mono text-[10px] tracking-[0.3em] text-blood mt-6">{p.collection.replace(/-/g, ' ').toUpperCase()} · {p.category.toUpperCase()}</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[0.95] mt-2">{p.name.toUpperCase()}</h1>
        <p className="font-mono text-2xl mt-4">{money(p.price)}</p>
        {p.status === 'placeholder' && <p className="font-mono text-[10px] bg-acid text-ink inline-block px-2 py-1 mt-3 tracking-widest">PLACEHOLDER — PREÇO ILUSTRATIVO</p>}
        {p.status === 'preorder' && <p className="font-mono text-[10px] border border-bone/40 inline-block px-2 py-1 mt-3 tracking-widest">PRÉ-VENDA NA LOJA OFICIAL</p>}
        <p className="text-bone/70 mt-5 leading-relaxed">{p.detail}</p>
        <p className="font-mono text-[11px] text-ash mt-3">MATERIAL — {p.fabric}</p>
        {p.credit && <p className="font-mono text-[10px] text-ash/70 mt-1">© {p.credit}</p>}
        <div className="mt-7">
          <div className="flex justify-between items-center gap-3 flex-wrap"><p className="font-mono text-[11px] tracking-widest">SIZE</p>
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-ash"><Ruler size={12} /> TABELA: P 70×52 · M 72×54 · G 74×56 · GG 76×58 CM</span></div>
          <div className="flex gap-2 mt-3" role="radiogroup" aria-label="Escolher tamanho">
            {p.sizes.map(s => (
              <button key={s} role="radio" aria-checked={size === s} onClick={() => { setSize(s); setErr(''); }}
                className={`w-12 h-12 font-mono text-sm border transition-colors ${size === s ? 'bg-bone text-ink border-bone' : 'border-white/25 hover:border-bone'}`}>{s}</button>
            ))}
          </div>
          {err && <p role="alert" className="font-mono text-[11px] text-blood mt-2">{err}</p>}
        </div>
        <button onClick={() => { if (!size) { setErr('Escolha um tamanho.'); return; } add(p, size); }}
          className="w-full bg-bone text-ink font-mono text-xs tracking-[0.2em] py-5 mt-6 hover:bg-acid transition-colors" data-cursor="ADD+">
          ADD TO BAG — {money(p.price)}
        </button>
        {p.externalUrl && <a href={p.externalUrl} target="_blank" rel="noreferrer" className="block text-center font-mono text-[11px] tracking-widest text-ash hover:text-bone mt-3">OU COMPRAR NA LOJA OFICIAL →</a>}
        {col && (
          <div className="border border-white/15 p-5 mt-8">
            <p className="font-mono text-[10px] tracking-widest text-ash">EDITORIAL CONTEXT</p>
            <p className="font-display text-2xl mt-1">{col.name}</p>
            <p className="text-sm text-bone/60 mt-1">{col.tagline}</p>
            <Link href={`/collections/${col.slug}`} className="font-mono text-[11px] tracking-widest text-acid mt-2 inline-block">VIEW COLLECTION →</Link>
          </div>
        )}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-2xl">SAME UNIVERSE</h2>
            <div className="grid grid-cols-1 gap-3 mt-4">{related.map((r: Product) => <ProductCard key={r.slug} p={r} />)}</div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
