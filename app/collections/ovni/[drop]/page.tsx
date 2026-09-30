import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { OVNI_DROPS } from '@/lib/data';

export function generateStaticParams() { return OVNI_DROPS.map(d => ({ drop: d.slug })); }
export function generateMetadata({ params }: { params: { drop: string } }): Metadata {
  const d = OVNI_DROPS.find(x => x.slug === params.drop);
  return { title: d ? `OVNI — ${d.name}` : 'OVNI', description: d?.desc };
}

export default function OvniDrop({ params }: { params: { drop: string } }) {
  const d = OVNI_DROPS.find(x => x.slug === params.drop);
  if (!d) notFound();
  return (
    <div className="pt-24 px-4 md:px-8 pb-20 min-h-screen bg-[#080810]">
      <p className="font-mono text-[10px] tracking-[0.3em] text-ash">OVNI SEASON / DROP — ATÉ DEZ 2026</p>
      <h1 className="font-display tracking-mega leading-none text-[20vw] md:text-[12vw]" style={{ color: d.color }}>{d.name}</h1>
      <p className="font-mono text-xs tracking-[0.3em] text-bone/70 mt-2">{d.meaning.toUpperCase()} — UMA ETAPA DA JORNADA</p>
      <p className="text-bone/75 max-w-xl mt-6 leading-relaxed">{d.desc} Peças e datas oficiais serão publicadas conforme anúncio da marca — nada aqui inventa drop ou data.</p>
      <div className="flex gap-2 mt-8">
        {OVNI_DROPS.map(o => (
          <Link key={o.slug} href={`/collections/ovni/${o.slug}`} aria-current={o.slug === d.slug ? 'page' : undefined}
            className={`font-mono text-[11px] tracking-widest px-4 py-2 border ${o.slug === d.slug ? 'text-ink' : 'border-white/20 text-bone'}`}
            style={o.slug === d.slug ? { background: o.color, borderColor: o.color } : undefined}>{o.name}</Link>
        ))}
      </div>
      <Link href="/collections/ovni" className="inline-block mt-10 font-mono text-xs tracking-widest text-ash hover:text-bone">← OVNI SEASON</Link>
    </div>
  );
}
