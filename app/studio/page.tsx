import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = { title: 'Studio', description: 'Inside the Hylo Studio — processo autoral: design, corte, costura, textura, handmade.' };
const STEPS = [
  { t: 'DESIGN', d: 'Referências fotografadas na rua viram moodboard. Grafite original de Alisson vira estampa.', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop' },
  { t: 'CUTTING', d: 'Modelagem e corte no ateliê — do quarto no Paranoá ao estúdio no Itapoã.', img: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=1000&auto=format&fit=crop' },
  { t: 'SEWING', d: 'Costura com a equipe: Marcos Vinnicius, Arthur Ruan e Matheus Cordeiro.', img: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1000&auto=format&fit=crop' },
  { t: 'DETAILS', d: 'Etiqueta, metal, desgaste, tapeçaria. Materialidade antes do marketing.', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop' },
];

export default function Studio() {
  return (
    <div className="pt-24 px-4 md:px-8 pb-20 bg-ink min-h-screen">
      <p className="font-mono text-[10px] tracking-[0.3em] text-ash">STUDIO — PROCESS · TEXTURE · HANDMADE</p>
      <h1 className="font-display text-6xl md:text-9xl tracking-mega">STU<br />DIO</h1>
      <p className="text-bone/60 max-w-xl mt-4">A marca nasceu de um processo autoral de criação e costura. Tecido, costura, etiqueta, metal, papel, xerox, graffiti, concreto, fita, ruído, flash — o sistema de textura aparece aqui de forma controlada.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {STEPS.map(s => (
          <div key={s.t} className="relative aspect-[4/3] overflow-hidden bg-concrete group">
            <Image src={s.img} alt={`Ateliê — ${s.t.toLowerCase()}`} fill loading="lazy" sizes="50vw" className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
            <div className="absolute bottom-0 p-5"><h2 className="font-display text-3xl">{s.t}</h2><p className="text-sm text-bone/70">{s.d}</p></div>
          </div>
        ))}
      </div>
      <Link href="/studio/alisson-abreu" className="inline-block mt-10 bg-bone text-ink font-mono text-xs tracking-widest px-7 py-4 hover:bg-acid">THE MIND BEHIND HYLO →</Link>
    </div>
  );
}
