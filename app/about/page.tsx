import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About', description: 'Sobre a Hylo Cartis Studio — label nascida no Paranoá, Brasília. Linha do tempo documentada.' };

const TIMELINE = [
  ['2019', 'Alisson começa a costurar no quarto-ateliê no Paranoá.'],
  ['2022', 'Mudança para o Itapoã, montagem do estúdio e fundação da Hylo Cartis Studio com Marcos Vinnicius, Arthur Ruan e Matheus Cordeiro.'],
  ['2023', 'TJ Season — primeira coleção, lançamento na Scratch Hip-Hop Culture Shop (21 OUT). A Hylo entra no mapa.'],
  ['2024', 'TJ Season Deluxe + primeira cápsula Donegan. Expansão para outros estados.'],
  ['2025', 'Donegan II. Estreia nas passarelas: Metrópoles Catwalk, Teatro Nacional (05 NOV). Talk Cor, Sentimento e Identidade (06 NOV).'],
  ['2026', 'Super Fashion Negro Brasileiro com performance de Emivi (06 ABR). OVNI Season: nova fase + drops Orion, Lyra e Hydra até dezembro. Teto veste Hylo em Brasília e Recife. Editorial em Paris.'],
];

export default function About() {
  return (
    <div className="pt-24 px-4 md:px-8 pb-20 bg-ink min-h-screen max-w-5xl">
      <p className="font-mono text-[10px] tracking-[0.3em] text-ash">ABOUT — PARANOÁ → MUNDO</p>
      <h1 className="font-display text-6xl md:text-8xl tracking-mega">ABOUT</h1>
      <p className="text-bone/70 mt-4 max-w-2xl leading-relaxed">A Hylo Cartis Studio é uma label de streetwear autoral nascida no Paranoá, Brasília, fundada por Alisson Abreu. Entre hip-hop, moda high-end e construção artesanal — uma plataforma criativa, não uma loja.</p>
      <ol className="mt-10 border-l border-white/15 ml-2 space-y-0">
        {TIMELINE.map(([y, t]) => (
          <li key={y} className="relative pl-8 pb-8">
            <span className="absolute -left-[7px] top-1 w-3 h-3 bg-blood rounded-full" />
            <p className="font-display text-3xl text-acid">{y}</p>
            <p className="text-bone/75 mt-1 max-w-2xl">{t}</p>
          </li>
        ))}
      </ol>
      <p className="font-mono text-[10px] text-ash">Fontes: Correio Braziliense (2023) · Metrópoles (2023–2026) · Vish Mídia (2025) · UnB/BDM (slow fashion). Nenhum número inventado.</p>
      <Link href="/contact" className="inline-block mt-8 bg-bone text-ink font-mono text-xs tracking-widest px-7 py-4 hover:bg-acid">CONTACT →</Link>
    </div>
  );
}
