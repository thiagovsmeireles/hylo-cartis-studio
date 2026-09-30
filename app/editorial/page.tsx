import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { EDITORIALS } from '@/lib/data';

export const metadata: Metadata = { title: 'Editorial', description: 'Editorial Hylo Cartis — fashion, culture, music, behind the scenes, runway, studio, people.' };
const CATS = ['FASHION', 'CULTURE', 'MUSIC', 'BEHIND THE SCENES', 'RUNWAY', 'STUDIO', 'PEOPLE'];

export default function Editorial() {
  return (
    <div className="pt-24 px-4 md:px-8 pb-20 bg-ink min-h-screen">
      <p className="font-mono text-[10px] tracking-[0.3em] text-ash">EDITORIAL — NÃO É BLOG. É REVISTA.</p>
      <h1 className="font-display text-6xl md:text-9xl tracking-mega">EDITO<br />RIAL</h1>
      <div className="flex flex-wrap gap-2 mt-6">{CATS.map(c => <span key={c} className="font-mono text-[10px] tracking-widest border border-white/20 px-3 py-1.5 text-bone/70">{c}</span>)}</div>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {EDITORIALS.map(e => (
          <Link key={e.slug} href={`/editorial/${e.slug}`} className="group border border-white/10 hover:border-white/40 transition-colors">
            <div className="relative aspect-[16/10] overflow-hidden"><Image src={e.image} alt={e.title} fill loading="lazy" sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" /></div>
            <div className="p-4"><p className="font-mono text-[10px] tracking-widest text-blood">{e.cat} · {e.date}</p>
            <h2 className="font-display text-xl mt-1 leading-tight">{e.title.toUpperCase()}</h2>
            <p className="text-sm text-bone/60 mt-1">{e.excerpt}</p></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
