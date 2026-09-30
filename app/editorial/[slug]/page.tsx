import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EDITORIALS } from '@/lib/data';

export function generateStaticParams() { return EDITORIALS.map(e => ({ slug: e.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const e = EDITORIALS.find(x => x.slug === params.slug);
  return { title: e?.title ?? 'Matéria', description: e?.excerpt };
}

const BODY: Record<string, string[]> = {
  'teto-veste-ovni-brasilia-recife': [
    'Moda de rua e música voltam a se encontrar nos outfits de Teto. Em passagem por Brasília, o rapper subiu ao palco com peças Hylo da OVNI Season — composição com camiseta de manga longa, colete xadrez desenvolvido em colaboração com a marca Cepyh e bermuda também em xadrez.',
    'O mesmo universo apareceu em apresentação no Recife. A aproximação começou em 2025, quando Teto esteve em Brasília e a marca conectou-se com o artista e seu produtor Drakoz.',
    'A escolha parte de um princípio do streetwear da Hylo: estar confortável, protegido e preparado para enfrentar o ambiente externo. Fonte: Metrópoles, 27 SET 2026. Fotos do acervo entram aqui quando licenciadas.',
  ],
  'super-fashion-negro-brasileiro-desfile': [
    'Na abertura do Metrópoles Catwalk 2026, a Hylo apresentou a coleção Super Fashion Negro Brasileiro e transformou o desfile em performance: Emivi entrou com dançarinos e incendiou a plateia.',
    'Na passarela: patchwork em jeans, saias de cintura baixíssima, calças de cós duplo e tapeçaria. Conceito de Alisson: elevar o negro e o brasileiro pelo super fashion.',
    '"Transformar o desfile em performance é um movimento estratégico para abordar a Hylo como marca além da moda." Fonte: Metrópoles, 06–09 ABR 2026.',
  ],
  'donegan-brasilia-centro': [
    'Donegan inverte a polarização Rio–SP e coloca Brasília no centro: lookbook fotografado por @rak._______ pensando na calmaria e na natureza do Centro-Oeste.',
    'O laranja traduz a energia acolhedora, ousada e notável. Quase todas as peças feitas no ateliê reforçam a exclusividade. Fonte: Vish Mídia, ABR 2025.',
  ],
  'tj-season-primeira-colecao': [
    'Lançada em 2022 como marca e apresentada oficialmente em outubro de 2023, a TJ Season é o projeto de introdução da Hylo — detalhes pessoais de Alisson, incluindo TJ, seu cachorro reativo, que nomeia a coleção e estampa a TJ Spirit Tee.',
    'Lançamento em 21 OUT 2023 na Scratch Hip-Hop Culture Shop, Asa Norte. "Sinto que a TJ Season é uma coleção que coloca a Hylo no mapa." Fonte: Metrópoles, NOV 2023.',
  ],
  'alisson-cor-sentimento-identidade': [
    'No talk "Cor, Sentimento e Identidade: a moda que nasce de dentro" (06 NOV 2025), Alisson falou de tendência, estética e autenticidade — e do cuidado de manter a essência urbana e periférica até na escolha da equipe e dos artistas que veste.',
    'Referências nascidas da rua, fotografadas para moodboards. Natural do Paranoá, o designer preza esse olhar em tudo. Fonte: Metrópoles, NOV 2025.',
  ],
  'hylo-em-paris-editorial': [
    'A nova fase ultrapassou fronteiras: a Hylo produziu editorial de moda em Paris, levando o universo da OVNI Season para além do Brasil.',
    'Registro em desenvolvimento — fotos entram aqui quando o acervo for liberado. Fonte: Metrópoles, SET 2026.',
  ],
};

export default function Story({ params }: { params: { slug: string } }) {
  const e = EDITORIALS.find(x => x.slug === params.slug);
  if (!e) notFound();
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: e.title, datePublished: e.date, author: { '@type': 'Organization', name: 'Hylo Cartis Studio' } };
  return (
    <article className="pt-24 bg-ink min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="px-4 md:px-8 max-w-4xl">
        <p className="font-mono text-[10px] tracking-[0.3em] text-blood">{e.cat} · {e.date}</p>
        <h1 className="font-display text-4xl md:text-6xl leading-[0.95] mt-3">{e.title.toUpperCase()}</h1>
        <p className="text-bone/60 mt-3">{e.excerpt}</p>
      </div>
      <div className="relative h-[50vh] md:h-[70vh] my-8">
        <Image src={e.image} alt={e.title} fill className="object-cover" sizes="100vw" />
      </div>
      <p className="px-4 md:px-8 max-w-4xl -mt-4 mb-6 font-mono text-[10px] tracking-widest text-ash">© {e.credit}</p>
      <div className="px-4 md:px-8 max-w-2xl pb-16 space-y-5">
        {(BODY[e.slug] ?? []).map((p, i) => <p key={i} className="text-bone/80 leading-relaxed text-lg">{p}</p>)}
        <Link href="/editorial" className="inline-block font-mono text-xs tracking-widest text-ash hover:text-bone mt-4">← ALL STORIES</Link>
      </div>
    </article>
  );
}
