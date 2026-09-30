import Link from 'next/link';
import Image from 'next/image';
import { Product, money } from '@/lib/data';

export default function ProductCard({ p, large = false }: { p: Product; large?: boolean }) {
  return (
    <Link href={`/shop/${p.slug}`} data-cursor="VIEW" aria-label={`Ver ${p.name}, ${money(p.price)}`}
      className={`group relative block overflow-hidden bg-concrete ${large ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className={`relative w-full ${large ? 'aspect-[4/3] md:aspect-auto md:h-full md:min-h-[520px]' : 'aspect-[3/4]'}`}>
        <Image src={p.image} alt={p.name} fill sizes="(max-width:768px) 100vw, 40vw"
          className="object-cover grayscale-[35%] contrast-110 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {p.status === 'placeholder' && <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest bg-acid text-ink px-2 py-1">PLACEHOLDER</span>}
        {p.status === 'preorder' && <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest bg-bone text-ink px-2 py-1">PRÉ-VENDA</span>}
        <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
          <p className="font-mono text-[10px] tracking-widest text-bone/70">{p.collection.toUpperCase()} · {p.category.toUpperCase()}</p>
          <h3 className="font-display text-lg md:text-xl text-bone leading-tight mt-1">{p.name.toUpperCase()}</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="font-mono text-sm text-bone">{money(p.price)}</span>
            <span className="font-mono text-[11px] tracking-widest text-bone opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">VIEW PRODUCT →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
