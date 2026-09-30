'use client';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { RUNWAY } from '@/lib/data';

const LOOKS = ['LOOK 01 — ABERTURA', 'LOOK 02 — TAPEÇARIA', 'LOOK 03 — PATCHWORK', 'LOOK 04 — CÓS DUPLO', 'LOOK 05 — PERFORMANCE EMIVI', 'LOOK 06 — FINALE'];

export default function Runway() {
  const [mode, setMode] = useState<number | null>(null);
  const [look, setLook] = useState(0);
  return (
    <div className="pt-24 px-4 md:px-8 pb-20 bg-black min-h-screen">
      <p className="font-mono text-[10px] tracking-[0.3em] text-ash">RUNWAY — METRÓPOLES CATWALK · TEATRO NACIONAL</p>
      <h1 className="font-display text-6xl md:text-9xl tracking-mega text-bone">RUNWAY</h1>
      <div className="space-y-6 mt-10">
        {RUNWAY.map((r, i) => (
          <article key={r.year} className="grid md:grid-cols-2 border border-white/10">
            <div className="relative aspect-[16/10]"><Image src={r.image} alt={`${r.title} — ${r.place}`} fill loading="lazy" sizes="50vw" className="object-cover" /></div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <p className="font-display text-6xl text-acid">{r.year}</p>
              <h2 className="font-display text-2xl md:text-3xl mt-2">{r.title}</h2>
              <p className="font-mono text-[11px] tracking-widest text-bone/60 mt-1">{r.place}</p>
              <p className="text-bone/70 mt-3">{r.desc}</p>
              <button onClick={() => { setMode(i); setLook(0); }} data-cursor="PLAY" className="mt-6 border border-white/25 font-mono text-xs tracking-widest px-6 py-4 hover:border-acid hover:text-acid w-fit">OPEN RUNWAY MODE →</button>
            </div>
          </article>
        ))}
      </div>
      <AnimatePresence>
        {mode !== null && (
          <motion.div className="fixed inset-0 z-[85] bg-black flex flex-col" role="dialog" aria-modal="true" aria-label={`Runway mode — ${RUNWAY[mode].title}`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex items-center justify-between px-4 md:px-8 h-16 border-b border-white/10">
              <span className="font-mono text-[11px] tracking-widest text-bone/70">{RUNWAY[mode].year} · {LOOKS[look]}</span>
              <button onClick={() => setMode(null)} aria-label="Fechar runway mode" className="p-2 text-bone"><X size={22} /></button>
            </div>
            <div className="flex-1 relative overflow-hidden">
              <Image key={look} src={RUNWAY[mode].image} alt={`${LOOKS[look]} — ${RUNWAY[mode].title}`} fill className="object-cover opacity-90" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <AnimatePresence mode="wait">
                <motion.p key={look} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
                  className="absolute bottom-8 left-4 md:left-8 font-display text-4xl md:text-7xl text-bone">{LOOKS[look]}</motion.p>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-between px-4 md:px-8 h-20 border-t border-white/10">
              <button onClick={() => setLook(l => (l - 1 + LOOKS.length) % LOOKS.length)} aria-label="Look anterior" className="p-3 border border-white/20 text-bone hover:border-acid"><ChevronLeft size={20} /></button>
              <div className="flex gap-2" role="tablist" aria-label="Looks">
                {LOOKS.map((_, i) => <button key={i} role="tab" aria-selected={i === look} aria-label={`Ir para ${LOOKS[i]}`} onClick={() => setLook(i)} className={`h-1.5 w-8 ${i === look ? 'bg-acid' : 'bg-white/20'}`} />)}
              </div>
              <button onClick={() => setLook(l => (l + 1) % LOOKS.length)} aria-label="Próximo look" className="p-3 border border-white/20 text-bone hover:border-acid"><ChevronRight size={20} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
