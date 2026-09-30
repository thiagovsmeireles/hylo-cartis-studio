import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ARTISTS } from '@/lib/data';

export const metadata: Metadata = { title: 'Culture — Artists in Hylo', description: 'Artists in Hylo: Teto, Emivi, Veigh, Wiu, Ryu The Runner — somente registros com cobertura pública.' };

export default function Culture() {
  return (
    <div className="pt-24 px-4 md:px-8 pb-20 bg-ink min-h-screen">
      <p className="font-mono text-[10px] tracking-[0.3em] text-ash">CULTURE — FASHION · MUSIC · STREET</p>
      <h1 className="font-display text-6xl md:text-9xl tracking-mega">CUL<br />TURE</h1>
      <p className="text-bone/60 max-w-xl mt-4">A Hylo já se conecta com artistas da música — do DF para o Brasil. Abaixo, somente nomes com comprovação pública em cobertura jornalística. Fotos de acervo licenciado entram aqui.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {ARTISTS.map(a => (
          <article key={a.name} className="border border-white/10">
            <div className="relative aspect-[3/4] overflow-hidden"><Image src={a.image} alt={a.name} fill loading="lazy" sizes="33vw" className="object-cover" /></div>
            <div className="p-4"><span className="font-mono text-[9px] tracking-widest bg-blood text-white px-2 py-1">{a.tag}</span>
            <h2 className="font-display text-2xl mt-2">{a.name}</h2><p className="font-mono text-[10px] text-bone/60 mt-1">{a.proof}</p></div>
          </article>
        ))}
      </div>
      <div className="border border-haze/40 bg-[#0B0B16] p-6 md:p-10 mt-10">
        <p className="font-mono text-[10px] tracking-[0.3em] text-haze">FOCO — TETO × OVNI SEASON</p>
        <h2 className="font-display text-3xl md:text-5xl mt-2">TETO VESTE HYLO EM BRASÍLIA + RECIFE</h2>
        <p className="text-bone/70 mt-3 max-w-2xl">Longsleeve, bermuda e colete xadrez em collab com a Cepyh — parte do universo OVNI. Relação iniciada em 2025 com o produtor Drakoz. Fonte: Metrópoles, 27 SET 2026.</p>
        <Link href="/editorial/teto-veste-ovni-brasilia-recife" className="inline-block mt-5 font-mono text-xs tracking-widest border-b border-haze pb-1">LER A MATÉRIA →</Link>
      </div>
    </div>
  );
}
