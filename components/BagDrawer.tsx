'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { useBag } from '@/lib/bag';
import { money } from '@/lib/data';

export default function BagDrawer() {
  const { items, total, open, setOpen, remove } = useBag();
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-[75] bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.aside role="dialog" aria-modal="true" aria-label="Sacola"
            className="fixed z-[80] right-0 top-0 bottom-0 w-full max-w-md bg-coal text-bone border-l border-white/10 flex flex-col"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.35 }}>
            <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
              <p className="font-display text-sm">BAG ({items.length})</p>
              <button onClick={() => setOpen(false)} aria-label="Fechar sacola" className="p-2"><X size={20} /></button>
            </div>
            <div className="flex-1 overflow-auto px-5 py-4 space-y-4">
              {items.length === 0 && <p className="font-mono text-xs text-ash mt-8">SACOLA VAZIA — O UNIVERSO COMEÇA NO SHOP.</p>}
              {items.map(i => (
                <div key={i.product.slug + i.size} className="flex gap-3 border border-white/10 p-2">
                  <div className="relative w-20 h-24 shrink-0 bg-concrete">
                    <Image src={i.product.image} alt={i.product.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-tight">{i.product.name}</p>
                    <p className="font-mono text-[10px] text-ash mt-1">SIZE {i.size} · QTY {i.qty}</p>
                    <p className="font-mono text-xs mt-1">{money(i.product.price)}</p>
                  </div>
                  <button onClick={() => remove(i.product.slug, i.size)} aria-label={`Remover ${i.product.name}`} className="p-2 text-ash hover:text-blood"><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
            <div className="p-5 border-t border-white/10">
              <div className="flex justify-between font-mono text-xs text-ash mb-3"><span>SUBTOTAL</span><span className="text-bone">{money(total)}</span></div>
              <p className="font-mono text-[10px] text-ash mb-3">Checkout integrado à loja oficial (Nuvemshop). Frete e pagamento calculados lá.</p>
              <a href="https://www.hylocartis.com.br/" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-bone text-ink font-mono text-xs tracking-widest py-4 hover:bg-acid transition-colors">
                CHECKOUT NA LOJA OFICIAL <ArrowRight size={14} />
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
