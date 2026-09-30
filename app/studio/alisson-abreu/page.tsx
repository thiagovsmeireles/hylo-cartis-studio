import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Alisson Abreu — The Mind Behind Hylo', description: 'Alisson Abreu, fundador da Hylo Cartis Studio: do Paranoá ao Teatro Nacional. Visão, processo, referências.' };

export default function Alisson() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Person', name: 'Alisson Abreu', jobTitle: 'Designer e diretor criativo', worksFor: { '@type': 'Brand', name: 'Hylo Cartis Studio' } };
  return (
    <article className="pt-16 bg-ink min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[70vh] md:min-h-screen">
          <Image src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1400&auto=format&fit=crop" alt="Retrato editorial ilustrativo — Alisson Abreu, fundador da Hylo (foto de acervo entra aqui)" fill priority className="object-cover" sizes="50vw" />
          <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest bg-ink/70 px-3 py-2">FOTO ILUSTRATIVA — ACERVO HYLO ENTRA AQUI</span>
        </div>
        <div className="px-6 md:px-12 py-12 md:py-20">
          <p className="font-mono text-[10px] tracking-[0.3em] text-ash">THE MIND BEHIND HYLO</p>
          <h1 className="font-display tracking-mega leading-[0.9] text-6xl md:text-8xl mt-3">ALISSON<br />ABREU</h1>
          <div className="mt-6 space-y-4 text-bone/75 leading-relaxed max-w-lg">
            <p>Nascido no <strong className="text-bone">Paranoá (DF)</strong>, Alisson começou a costurar em 2019 no quarto de casa. Em 2022 levou o ateliê para o Itapoã e fundou a Hylo com três amigos de quebrada — criação, eventos e modelo, tudo em família.</p>
            <p>Seu processo mistura <strong className="text-bone">estampas e texturas com referências únicas</strong>: rua fotografada para moodboard, grafite que vira logo, tapeçaria, jeans pesado. Moda, música e cultura movem-se juntas — das cidades-satélites ao Plano Piloto, “tudo girando em torno do centro e colapsando em cultura renovada”.</p>
            <p>Da estreia com a TJ Season (2023) aos dois Metrópoles Catwalks (2025, 2026) e à OVNI Season (2026), a ambição é declarada: projetar-se nacionalmente e, depois, como artista internacional. <span className="font-mono text-[11px] text-ash">Fontes: Correio Braziliense 2023 · Metrópoles 2023–2026.</span></p>
          </div>
          <dl className="grid grid-cols-2 gap-3 mt-8 font-mono text-[11px]">
            {[['ORIGEM', 'Paranoá · DF'], ['BASE', 'Itapoã · DF'], ['INÍCIO', 'Costura 2019 · Hylo 2022'], ['EIXOS', 'Moda · Música · Cultura']].map(([k, v]) => (
              <div key={k} className="border border-white/15 p-3"><dt className="text-ash tracking-widest">{k}</dt><dd className="text-bone mt-1">{v}</dd></div>
            ))}
          </dl>
          <Link href="/culture" className="inline-block mt-8 font-mono text-xs tracking-widest border-b border-acid pb-1 hover:text-acid">VER O UNIVERSO QUE ELE CONSTRUIU →</Link>
        </div>
      </div>
    </article>
  );
}
