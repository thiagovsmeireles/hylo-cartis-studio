'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { COLLECTIONS, PRODUCTS, ARTISTS, RUNWAY, EDITORIALS, OVNI_DROPS } from '@/lib/data';
import { Reveal, Marquee } from '@/components/ui';
import ProductCard from '@/components/ProductCard';

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Manifesto sem máscaras de recorte: linhas inteiras com fade+slide.
// (A versão anterior com máscara palavra-por-palavra clipava o texto em alguns mobiles.)
function MLine({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.span className={`block ${className}`} initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.span>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 }); const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const imgX = useTransform(sx, v => v * 24); const imgY = useTransform(sy, v => v * 16);
  const titleX = useTransform(sx, v => v * -34); const titleY = useTransform(sy, v => v * -20);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const clip = useTransform(scrollYProgress, [0, 1], ['inset(0 0 0% 0)', 'inset(0 0 62% 0)']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} aria-label="Abertura — Enter the Hylo Universe"
      onMouseMove={e => { const r = ref.current?.getBoundingClientRect(); if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }}
      className="relative h-[100svh] overflow-hidden bg-black grain">
      <motion.div style={{ x: imgX, y: imgY, scale, clipPath: clip }} className="absolute inset-0">
        <Image src={`${BP}/hylo/brasilia-congresso-noite.jpg`}
          alt="Congresso Nacional iluminado à noite, Brasília" fill priority
          className="object-cover opacity-90" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/60" />
        {/* RGB split sutil */}
        <motion.div style={{ x: useTransform(sx, v => v * -10) }} className="absolute inset-0 mix-blend-screen opacity-20 bg-[radial-gradient(circle_at_70%_30%,#2B3BFF55,transparent_60%)]" />
      </motion.div>
      <motion.div style={{ opacity: fade, x: titleX, y: titleY }} className="relative z-10 h-full flex flex-col justify-end px-4 md:px-8 pb-10 md:pb-14">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.35em] text-bone/70">HYLO CARTIS STUDIO · 2026 · BRASÍLIA — DF</p>
        <h1 className="font-display leading-[0.88] tracking-mega mt-3 text-[17vw] md:text-[10.5vw]">
          <span className="block text-bone/80 text-[5vw] md:text-[2.2vw] font-sans font-medium tracking-[0.3em]">ENTER THE</span>
          <span className="block text-bone hero-glow">HYLO</span>
          <span className="block text-stroke">UNIVERSE<span className="text-blood" style={{ WebkitTextStroke: '0' }}>.</span></span>
        </h1>
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <Link href="/collections/ovni" data-cursor="→" className="group inline-flex items-center gap-3 bg-bone text-ink font-mono text-xs tracking-[0.2em] px-7 py-4 hover:bg-acid transition-colors">
            ENTER <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/runway" data-cursor="PLAY" className="inline-flex items-center gap-2 border border-white/25 text-bone font-mono text-xs tracking-[0.2em] px-7 py-4 hover:border-bone">
            <Play size={14} /> RUNWAY MODE
          </Link>
        </div>
        <p className="font-mono text-[10px] tracking-widest text-bone/50 mt-5">PARANOÁ → BRASÍLIA → CULTURA → MODA → MÚSICA → PASSARELA → MUNDO</p>
        <p className="font-mono text-[9px] tracking-widest text-bone/30 mt-1">FUNDO: CONGRESSO NACIONAL À NOITE — FOTO: WIKIMEDIA COMMONS (CC)</p>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={['OVNI SEASON — ORION · LYRA · HYDRA', 'NASCIDA NO PARANOÁ', 'SUPER FASHION NEGRO BRASILEIRO', 'METRÓPOLES CATWALK 2025 → 2026', 'TETO VESTE HYLO', 'EMIVI LIVE']} />

      {/* MANIFESTO */}
      <section className="bg-ink px-4 md:px-8 py-24 md:py-40" aria-label="Manifesto">
        <Reveal><p className="font-mono text-[10px] tracking-[0.3em] text-ash">MANIFESTO — COPY EDITORIAL NOVA, NÃO OFICIAL</p></Reveal>
        <h2 className="font-display tracking-mega leading-[0.92] text-[13vw] md:text-[7.5vw] mt-6">
          <MLine className="text-bone">NÓS NÃO</MLine>
          <MLine className="text-stroke" delay={0.08}>SEGUIMOS</MLine>
          <MLine className="text-bone" delay={0.16}>A RUA.</MLine>
          <MLine className="text-bone" delay={0.24}>NÓS CRIAMOS</MLine>
          <MLine className="text-blood" delay={0.32}>A NOSSA.</MLine>
        </h2>
        <Reveal delay={0.1}><p className="max-w-xl text-bone/70 mt-8 leading-relaxed">Uma label nascida da rua que ocupa a passarela. Streetwear, hip-hop, moda autoral e construção artesanal — do quarto-ateliê no Paranoá ao Teatro Nacional.</p></Reveal>
      </section>

      {/* ORIGEM */}
      <section className="bg-coal border-t border-white/10" aria-label="From Paranoá">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[60vh]">
            <Image src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop" alt="Rua e arquitetura urbana de concreto — textura da cidade que formou a Hylo" fill className="object-cover" loading="lazy" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coal/60" />
            <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest bg-ink/70 px-3 py-2">PARANOÁ · BRASÍLIA · DF — FOTO ILUSTRATIVA</span>
          </div>
          <div className="px-6 md:px-12 py-16 md:py-24">
            <Reveal><p className="font-mono text-[10px] tracking-[0.3em] text-ash">01 / ORIGIN — FROM PARANOÁ</p></Reveal>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mt-4">NASCIDA NO<br />PARANOÁ.<br /><span className="text-ash">CRIADA PARA<br />IR ALÉM.</span></h2>
            <div className="mt-6 space-y-4 text-bone/75 leading-relaxed max-w-lg">
              <p>Alisson Abreu nasceu no Paranoá e começou a costurar em 2019, dividindo o ateliê com a cama do quarto. Em 2022 mudou-se para o Itapoã, montou o estúdio e fundou a <strong className="text-bone">Hylo Cartis Studio</strong> com os parceiros Marcos Vinnicius, Arthur Ruan e Matheus Cordeiro.</p>
              <p>A primeira coleção, <strong className="text-bone">TJ Season (2023)</strong>, colocou a Hylo no mapa — do evento na Scratch Hip-Hop Culture Shop aos festivais de música e moda do DF. <span className="font-mono text-[11px] text-ash">Fonte: Correio Braziliense 2023 · Metrópoles 2023.</span></p>
            </div>
            <Link href="/studio/alisson-abreu" data-cursor="→" className="inline-flex items-center gap-2 mt-8 font-mono text-xs tracking-widest border-b border-acid pb-1 hover:text-acid">THE MIND BEHIND HYLO <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS — switcher teaser */}
      <section className="bg-ink px-4 md:px-8 py-20 md:py-28" aria-label="Collections">
        <div className="flex items-end justify-between">
          <div><p className="font-mono text-[10px] tracking-[0.3em] text-ash">02 / COLLECTIONS — CADA UMA, UM UNIVERSO</p>
          <h2 className="font-display text-5xl md:text-8xl tracking-mega mt-2">COLLEC<br />TIONS</h2></div>
          <Link href="/collections" className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-widest border border-white/20 px-5 py-3 hover:border-acid">ALL →</Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link href={`/collections/${c.slug}`} data-cursor="EXPLORE" className="group relative block overflow-hidden bg-concrete aspect-[3/4]">
                <Image src={c.image} alt={`Capa editorial da coleção ${c.name}`} fill loading="lazy" sizes="33vw" className="object-cover opacity-80 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-bone/80">{c.year}</div>
                <div className="absolute bottom-0 p-5">
                  <h3 className="font-display text-2xl md:text-3xl text-bone leading-none">{c.name}</h3>
                  <p className="text-bone/70 text-sm mt-1">{c.tagline}</p>
                  <span className="font-mono text-[11px] tracking-widest text-acid">VIEW UNIVERSE →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OVNI — fase atual */}
      <section className="relative overflow-hidden border-t border-white/10" style={{ background: '#080810' }} aria-label="OVNI Season">
        <div className="px-4 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-haze">03 / NOW — OVNI SEASON · 2026</p>
            <h2 className="font-display text-6xl md:text-8xl tracking-mega leading-[0.9] mt-3">OVNI<br /><span className="text-stroke">SEASON</span></h2>
            <p className="text-bone/70 mt-5 max-w-md leading-relaxed">Estranheza como identidade: ser estrangeiro na própria realidade, afastar-se para observar de longe — e decidir voltar. Três drops até dezembro: transformação, resistência, regeneração.</p>
            <div className="grid grid-cols-3 gap-2 mt-6">
              {OVNI_DROPS.map(d => (
                <Link key={d.slug} href={`/collections/ovni/${d.slug}`} data-cursor="→" className="border border-white/15 p-3 hover:border-white/50 transition-colors" style={{ boxShadow: `inset 0 -3px 0 ${d.color}` }}>
                  <p className="font-display text-lg">{d.name}</p>
                  <p className="font-mono text-[9px] tracking-widest text-ash">{d.meaning.toUpperCase()}</p>
                </Link>
              ))}
            </div>
            <Link href="/collections/ovni" className="inline-flex items-center gap-2 mt-7 bg-bone text-ink font-mono text-xs tracking-widest px-6 py-4 hover:bg-acid">ENTER OVNI UNIVERSE <ArrowRight size={14} /></Link>
          </div>
          <Reveal className="relative aspect-[4/5] overflow-hidden grain">
            <Image src="/hylo/ed-paris-khjb.jpg" alt="Editorial OVNI Season em Paris — modelo com a nave no céu" fill loading="lazy" className="object-cover" sizes="50vw" />
            <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest bg-ink/70 px-3 py-2">A CHEGADA — PARIS · @rak.___ / DIVULGAÇÃO</span>
          </Reveal>
        </div>
      </section>

      {/* SHOP editorial grid */}
      <section className="bg-bone text-ink px-4 md:px-8 py-20 md:py-28" aria-label="Shop — new arrivals">
        <div className="flex items-end justify-between">
          <div><p className="font-mono text-[10px] tracking-[0.3em] text-ink/60">04 / SHOP — DESEJO ANTES DO CATÁLOGO</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-mega">NEW<br />ARRIVALS</h2></div>
          <Link href="/shop" className="font-mono text-xs tracking-widest border-b-2 border-ink pb-1">SHOP ALL →</Link>
        </div>
        <div className="grid md:grid-cols-4 gap-3 mt-10 auto-rows-[minmax(0,auto)]">
          {PRODUCTS.slice(0, 5).map((p, i) => <ProductCard key={p.slug} p={p} large={i === 0} />)}
        </div>
        <p className="font-mono text-[10px] text-ink/50 mt-4">Fotos reais das peças (acervo Hylo, uso autorizado). Preços reais da loja oficial onde confirmados; itens de passarela marcados como PLACEHOLDER até o drop.</p>
      </section>

      {/* ARTISTS */}
      <section className="bg-ink px-4 md:px-8 py-20 md:py-28" aria-label="Artists in Hylo">
        <p className="font-mono text-[10px] tracking-[0.3em] text-ash">05 / CULTURE — ARTISTS IN HYLO</p>
        <h2 className="font-display text-5xl md:text-8xl tracking-mega mt-2">MUSIC<br /><span className="text-stroke">WEARS HYLO</span></h2>
        <p className="text-bone/60 max-w-xl mt-4">Não é “celebridade vestindo roupa”. É cultura: a cena que veste a Hylo e a Hylo que veste a cena. Somente registros com cobertura pública.</p>
        <div className="mt-10 flex gap-4 overflow-x-auto no-scrollbar h-scroll pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          {ARTISTS.map(a => (
            <article key={a.name} className="relative shrink-0 w-[78vw] md:w-[340px] aspect-[3/4] overflow-hidden bg-concrete group">
              <Image src={a.image} alt={`${a.name} — registro ilustrativo da cena musical`} fill loading="lazy" sizes="340px" className="object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 font-mono text-[9px] tracking-widest bg-blood text-white px-2 py-1">{a.tag}</span>
              <div className="absolute bottom-0 p-5">
                <h3 className="font-display text-3xl">{a.name}</h3>
                <p className="font-mono text-[10px] text-bone/70 mt-1 leading-relaxed">{a.proof}</p>
                <p className="font-mono text-[9px] text-bone/40 mt-1">© {a.credit}</p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/culture" className="inline-flex items-center gap-2 mt-8 font-mono text-xs tracking-widest text-bone border-b border-acid pb-1">CULTURE UNIVERSE <ArrowUpRight size={14} /></Link>
      </section>

      {/* RUNWAY timeline */}
      <section className="bg-coal border-t border-white/10 px-4 md:px-8 py-20 md:py-28" aria-label="Runway">
        <p className="font-mono text-[10px] tracking-[0.3em] text-ash">06 / RUNWAY — DO QUARTO AO TEATRO NACIONAL</p>
        <h2 className="font-display text-5xl md:text-8xl tracking-mega mt-2">RUNWAY</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {RUNWAY.map(r => (
            <Link key={r.year} href="/runway" data-cursor="PLAY" className="group relative overflow-hidden aspect-[16/10] bg-ink block">
              <Image src={r.image} alt={`${r.title} — ${r.place}`} fill loading="lazy" sizes="50vw" className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="font-display text-5xl text-acid">{r.year}</p>
                <h3 className="font-display text-xl md:text-2xl mt-1">{r.title}</h3>
                <p className="font-mono text-[10px] tracking-widest text-bone/70 mt-1">{r.place}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STUDIO teaser */}
      <section className="bg-ink px-4 md:px-8 py-20 md:py-28 grid md:grid-cols-3 gap-8" aria-label="Studio process">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-ash">07 / STUDIO — PROCESSO AUTORAL</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2 leading-tight">CUT.<br />SEW.<br />REPEAT.</h2>
          <p className="text-bone/60 mt-4 text-sm leading-relaxed">Quase tudo nasce no ateliê: corte, costura, textura, etiqueta. Materialidade antes do marketing.</p>
          <Link href="/studio" className="inline-flex items-center gap-2 mt-6 font-mono text-xs tracking-widest border border-white/20 px-5 py-3 hover:border-acid">INSIDE THE STUDIO →</Link>
        </div>
        {['DESIGN', 'CUTTING', 'DETAILS'].map((t, i) => (
          <Reveal key={t} delay={i * 0.07} className="relative aspect-[3/4] overflow-hidden bg-concrete">
            <Image src={['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop', `${BP}/hylo/atelier-tailoring.jpg`, 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop'][i]} alt={`Processo de ateliê — ${t.toLowerCase()}${t === 'CUTTING' ? ' (foto: Wikimedia Commons, CC)' : ''}`} fill loading="lazy" sizes="30vw" className="object-cover opacity-80" />
            <span className="absolute bottom-4 left-4 font-display text-2xl bg-ink/70 px-3 py-1">{t}</span>
          </Reveal>
        ))}
      </section>

      {/* EDITORIAL preview */}
      <section className="bg-ink border-t border-white/10 px-4 md:px-8 py-20" aria-label="Editorial preview">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl md:text-6xl tracking-mega">EDITO<br />RIAL</h2>
          <Link href="/editorial" className="font-mono text-xs tracking-widest border-b border-acid pb-1">ALL STORIES →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {EDITORIALS.slice(0, 3).map(e => (
            <Link key={e.slug} href={`/editorial/${e.slug}`} className="group border border-white/10 hover:border-white/30 transition-colors">
              <div className="relative aspect-[16/10] overflow-hidden"><Image src={e.image} alt={e.title} fill loading="lazy" sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" /></div>
              <div className="p-4"><p className="font-mono text-[10px] tracking-widest text-blood">{e.cat} · {e.date}</p>
              <h3 className="font-display text-lg mt-1 leading-tight">{e.title.toUpperCase()}</h3></div>
            </Link>
          ))}
        </div>
        <Reveal className="text-center py-20">
          <p className="font-serif italic text-2xl md:text-4xl text-bone/80">“Eu quero fazer parte disso.”</p>
          <p className="font-mono text-[10px] tracking-widest text-ash mt-3">— O VISITANTE, AO SAIR DO UNIVERSO</p>
          <Link href="/shop" className="inline-flex items-center gap-2 mt-8 bg-blood text-white font-mono text-xs tracking-widest px-8 py-4 hover:bg-bone hover:text-ink transition-colors">SHOP THE UNIVERSE <ArrowRight size={14} /></Link>
        </Reveal>
      </section>
    </>
  );
}
