'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { COLLECTIONS } from '@/lib/data';

export default function Collections() {
  const [active, setActive] = useState(COLLECTIONS[COLLECTIONS.length - 1]);
  return (
    <div className="pt-16 min-h-screen transition-colors duration-700" style={{ background: active.palette.bg, color: active.palette.fg }}>
      <div className="px-4 md:px-8 pt-10 pb-6">
        <p className="font-mono text-[10px] tracking-[0.3em] opacity-60">COLLECTION SWITCHER — A INTERFACE MUDA COM O UNIVERSO</p>
        <h1 className="font-display text-6xl md:text-9xl tracking-mega">COLLEC<br />TIONS</h1>
        <div className="flex flex-wrap gap-2 mt-6" role="tablist" aria-label="Trocar de coleção">
          {COLLECTIONS.map(c => (
            <button key={c.slug} role="tab" aria-selected={active.slug === c.slug} onClick={() => setActive(c)}
              className="font-mono text-[11px] tracking-widest px-4 py-2 border transition-all"
              style={{ borderColor: active.slug === c.slug ? active.palette.accent : 'rgba(255,255,255,.2)', background: active.slug === c.slug ? active.palette.accent : 'transparent', color: active.slug === c.slug ? '#000' : undefined }}>
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative h-[55vh] md:h-[70vh] overflow-hidden grain">
            <motion.div initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.2 }}>
              <Image src={active.image} alt={`Capa cinematográfica — ${active.name}`} fill className="object-cover" sizes="100vw" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 p-6 md:p-10">
              <p className="font-mono text-xs tracking-widest" style={{ color: active.palette.accent }}>{active.year}</p>
              <h2 className="font-display text-5xl md:text-8xl tracking-mega">{active.name}</h2>
              <p className="text-lg opacity-80">{active.tagline}</p>
            </div>
          </div>
          <div className="px-4 md:px-8 py-10 grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] opacity-60">CONCEITO</p>
              <p className="text-lg leading-relaxed mt-2 opacity-90">{active.concept}</p>
              <Link href={`/collections/${active.slug}`} data-cursor="→" className="inline-block mt-6 font-mono text-xs tracking-widest px-6 py-4"
                style={{ background: active.palette.accent, color: '#000' }}>ENTER {active.name} →</Link>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] opacity-60">FATOS DOCUMENTADOS</p>
              <ul className="mt-2 space-y-2">{active.facts.map(f => <li key={f} className="border-b border-white/10 pb-2 text-sm opacity-80">— {f}</li>)}</ul>
              <div className="flex flex-wrap gap-2 mt-4">{active.themes.map(t => <span key={t} className="font-mono text-[10px] tracking-widest border border-white/20 px-3 py-1">#{t}</span>)}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="px-4 md:px-8 pb-16 grid md:grid-cols-3 gap-3">
        {COLLECTIONS.filter(c => c.slug !== active.slug).map(c => (
          <Link key={c.slug} href={`/collections/${c.slug}`} className="relative h-56 overflow-hidden block group">
            <Image src={c.image} alt={c.name} fill loading="lazy" sizes="33vw" className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
            <span className="absolute bottom-3 left-3 font-display text-xl bg-black/70 px-3 py-1">{c.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
