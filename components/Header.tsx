'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useBag } from '@/lib/bag';

const NAV = [
  { href: '/shop', label: 'SHOP' },
  { href: '/collections', label: 'COLLECTIONS' },
  { href: '/editorial', label: 'EDITORIAL' },
  { href: '/studio', label: 'STUDIO' },
  { href: '/culture', label: 'CULTURE' },
  { href: '/runway', label: 'RUNWAY' },
];

export default function Header() {
  const path = usePathname();
  const { count, setOpen } = useBag();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => { setMenu(false); }, [path]);
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between px-4 md:px-8 h-14 md:h-16">
          <button onClick={() => setMenu(true)} aria-label="Abrir menu" className="md:hidden p-2 -ml-2 text-bone"><Menu size={20} /></button>
          <Link href="/" className="font-display text-sm md:text-base tracking-tight text-bone" aria-label="Hylo Cartis Studio — início">
            HYLO CARTIS<sup className="font-mono text-[9px] ml-1 text-ash">STD</sup>
          </Link>
          <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
            {NAV.map(n => (
              <Link key={n.href} href={n.href}
                className={`font-mono text-[11px] tracking-[0.18em] transition-colors ${path.startsWith(n.href) ? 'text-bone' : 'text-ash hover:text-bone'}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 md:gap-2">
            <Link href="/shop" aria-label="Buscar" className="p-2 text-ash hover:text-bone"><Search size={17} /></Link>
            <button onClick={() => setOpen(true)} aria-label={`Abrir sacola, ${count} itens`}
              className="relative p-2 text-bone hover:text-white">
              <ShoppingBag size={18} />
              {count > 0 && <span className="absolute top-0.5 right-0 bg-blood text-white font-mono text-[9px] w-4 h-4 grid place-items-center rounded-full">{count}</span>}
            </button>
            <button onClick={() => setMenu(true)} aria-label="Abrir menu" className="hidden md:block p-2 text-ash hover:text-bone"><Menu size={18} /></button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div className="fixed inset-0 z-[70] bg-ink flex flex-col" role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex items-center justify-between px-4 md:px-8 h-14 md:h-16 border-b border-white/10">
              <span className="font-display text-sm text-bone">HYLO CARTIS</span>
              <button onClick={() => setMenu(false)} aria-label="Fechar menu" className="p-2 text-bone"><X size={22} /></button>
            </div>
            <nav className="flex-1 overflow-auto px-6 py-8 flex flex-col gap-1" aria-label="Menu completo">
              {[{ href: '/', label: 'ENTER THE UNIVERSE' }, ...NAV, { href: '/about', label: 'ABOUT' }, { href: '/contact', label: 'CONTACT' }].map((n, i) => (
                <motion.div key={n.href + n.label} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                  <Link href={n.href} className="group flex items-baseline gap-4 py-2 border-b border-white/5">
                    <span className="font-mono text-[10px] text-ash">0{i + 1}</span>
                    <span className="font-display text-3xl md:text-5xl text-bone group-hover:text-acid transition-colors tracking-tight">{n.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-8 font-mono text-[10px] tracking-widest text-ash">
              PARANOÁ → BRASÍLIA → BRASIL → MUNDO · @hylocartistudio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
