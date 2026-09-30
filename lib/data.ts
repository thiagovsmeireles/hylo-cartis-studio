// ─── HYLO CARTIS STUDIO · data layer ─────────────────────────────
// Apenas fatos públicos verificados (Metrópoles, Correio Braziliense,
// Vish Mídia, UnB, loja oficial). Placeholders marcados com PLACEHOLDER.

export type Collection = {
  slug: string;
  name: string;
  year: string;
  tagline: string;
  concept: string;
  palette: { bg: string; fg: string; accent: string };
  image: string;
  themes: string[];
  facts: string[];
  products?: string[];
};

export const COLLECTIONS: Collection[] = [
  {
    slug: 'tj-season',
    name: 'TJ SEASON',
    year: '2023',
    tagline: 'A primeira coleção. O mapa.',
    concept:
      'Projeto de introdução da Hylo: detalhes pessoais de Alisson Abreu. O nome e a estampa TJ Spirit vêm de TJ, o cachorro reativo do fundador. Lançada em outubro de 2023 com evento na Scratch Hip-Hop Culture Shop, Asa Norte.',
    palette: { bg: '#0A0A0A', fg: '#EDEAE3', accent: '#D6FF3F' },
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1600&auto=format&fit=crop',
    themes: ['introdução', 'família', 'rua', 'espírito'],
    facts: ['Lançamento: 21 OUT 2023 · Scratch Hip-Hop Culture Shop', 'Peça-símbolo: TJ Spirit Tee', 'Cobertura: Metrópoles, 15 NOV 2023'],
  },
  {
    slug: 'tj-season-deluxe',
    name: 'TJ SEASON DELUXE',
    year: '2024',
    tagline: 'O retorno com serigrafia ao vivo.',
    concept:
      'Drop deluxe da TJ Season com ativação de serigrafia parceira: o público leva as próprias peças para estampar com grafismos da etiqueta. Expansão para outros estados.',
    palette: { bg: '#111113', fg: '#EDEAE3', accent: '#FF5C00' },
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1600&auto=format&fit=crop',
    themes: ['deluxe', 'serigrafia', 'comunidade'],
    facts: ['Formato: drop + ativação', 'Processo: serigrafia parceira'],
  },
  {
    slug: 'donegan',
    name: 'DONEGAN',
    year: '2024 — 2025',
    tagline: 'Brasília no centro da moda brasileira.',
    concept:
      'Narrativa inversa ao eixo Rio–SP: elevar o nível brasiliense com lookbook fotografado por @rak._______ pensando na calmaria e na natureza do Centro-Oeste. Laranja como tradução da energia acolhedora, ousada e notável. Quase todas as peças feitas no ateliê.',
    palette: { bg: '#160B04', fg: '#F4EDE1', accent: '#FF5C00' },
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
    themes: ['brasília', 'ateliê', 'laranja', 'natureza'],
    facts: ['Lookbook: @rak._______', 'Cor-chave: laranja', 'Cobertura: Vish Mídia, ABR 2025'],
    products: ['donegan-cargo-tapecaria', 'donegan-longsleeve-desgaste'],
  },
  {
    slug: 'donegan-ii',
    name: 'DONEGAN II',
    year: '2025',
    tagline: 'A dimensão íntima. Relações, sentimentos.',
    concept:
      'Segunda cápsula Donegan: dimensão mais íntima e emocional do processo de Alisson — relações humanas e sentimentos traduzidos em texturas, desgaste, proximidade, imperfeição e materialidade. Desfilada em 05 NOV 2025 no Metrópoles Catwalk (Teatro Nacional).',
    palette: { bg: '#0D0D0F', fg: '#EDEAE3', accent: '#C9B895' },
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&auto=format&fit=crop',
    themes: ['íntimo', 'desgaste', 'textura', 'passarela'],
    facts: ['Desfile: 05 NOV 2025 · Teatro Nacional Claudio Santoro', 'Modelo destaque: Carmelita Mendes (cobertura Metrópoles)'],
    products: ['donegan-cargo-tapecaria', 'donegan-longsleeve-desgaste'],
  },
  {
    slug: 'super-fashion-negro-brasileiro',
    name: 'SUPER FASHION NEGRO BRASILEIRO',
    year: '2026',
    tagline: 'Elevar o negro e o brasileiro pelo super fashion.',
    concept:
      'Coleção do retorno ao Metrópoles Catwalk em 06 ABR 2026: patchwork em jeans, saias de cintura baixíssima, calças de cós duplo, tapeçaria e tecidos pesados. Desfile-performance com show do rapper Emivi + dançarinos. Conceito de Alisson: inovações e perspectivas do que é ser negro, brasileiro e negro brasileiro.',
    palette: { bg: '#0A0A0A', fg: '#EDEAE3', accent: '#E10600' },
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    themes: ['identidade', 'performance', 'tapeçaria', 'jeans'],
    facts: ['Desfile: 06 ABR 2026 · Teatro Nacional', 'Performance: Emivi ao vivo', 'Cobertura: Metrópoles, 07–21 ABR 2026'],
  },
  {
    slug: 'ovni',
    name: 'OVNI SEASON',
    year: '2026 — atual',
    tagline: 'Estranheza como identidade. Voltar ao chão.',
    concept:
      'Nova fase: reformulação criativa e de acessibilidade. O primeiro lançamento simboliza a chegada do OVNI à Terra — voltar a pisar no chão, reconhecer limitações, afetos e realidade. Da bagagem da viagem nascem três drops até dezembro de 2026: ORION (transformação), LYRA (resistência), HYDRA (regeneração). Teto vestiu a OVNI em Brasília e Recife (SET 2026). Editorial produzido em Paris.',
    palette: { bg: '#080810', fg: '#EDEAE3', accent: '#8B7CFF' },
    image: '/hylo/ed-ovni-71.jpg',
    themes: ['ovni', 'transformação', 'resistência', 'regeneração'],
    facts: ['Drops: ORION · LYRA · HYDRA (até DEZ 2026)', 'Teto veste Hylo: Brasília + Recife, SET 2026', 'Collab no look: colete xadrez com Cepyh'],
    products: ['ovni-regata-respeito', 'ovni-longsleeve', 'ovni-regata-br-homies', 'ovni-regata-br-femmes'],
  },
];

export const OVNI_DROPS = [
  { slug: 'orion', name: 'ORION', meaning: 'Transformação', desc: 'O choque da chegada. O corpo muda, a roupa muda junto: modelagens que marcam a mutação.', color: '#2B3BFF' },
  { slug: 'lyra', name: 'LYRA', meaning: 'Resistência', desc: 'Permanecer estranho num mundo que pede norma. Peças de atrito: peso, costura aparente, repetição.', color: '#D6FF3F' },
  { slug: 'hydra', name: 'HYDRA', meaning: 'Regeneração', desc: 'O que volta, volta múltiplo. Reconstrução: patchwork, tapeçaria, reaproveitamento.', color: '#00C2A8' },
];

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  collection: string;
  category: string;
  image: string;
  detail: string;
  fabric: string;
  sizes: string[];
  status: 'available' | 'preorder' | 'soldout' | 'placeholder';
  credit?: string;
  externalUrl?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: 'ovni-regata-respeito',
    name: 'Regata “Respeito é pra quem tem”',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: '/hylo/ovni-regata-respeito-cinza.webp',
    detail: 'Regata da OVNI Season com grafismo vermelho. Listada na loja oficial como pré-venda (cinza / roxa). Foto real da peça.',
    fabric: 'Malha 100% algodão · gola careca · modelagem reta',
    sizes: ['P', 'M', 'G', 'GG'], status: 'preorder',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/ovni-season/',
  },
  {
    slug: 'ovni-regata-br-homies',
    name: 'Regata Hylo Cartis Studio BR · Homie’s Off White',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: '/hylo/ovni-regata-br-homies.webp',
    detail: 'Regata manifesto BR, versão Homie’s em off white. Pré-venda na loja oficial. Foto real da peça.',
    fabric: 'Malha pesada · estampa frente/costas', sizes: ['P', 'M', 'G', 'GG'], status: 'preorder',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/ovni-season/',
  },
  {
    slug: 'ovni-regata-br-femmes',
    name: 'Regata Hylo Cartis Studio BR · Femme’s Off White',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: '/hylo/ovni-regata-br-femmes.webp',
    detail: 'Versão Femme’s da regata BR em off white. Pré-venda na loja oficial. Foto real da peça.',
    fabric: 'Malha leve · modelagem feminina', sizes: ['P', 'M', 'G'], status: 'preorder',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/ovni-season/',
  },
  {
    slug: 'ovni-longsleeve',
    name: 'Hylo LongSleeve “Deus é Amor”',
    price: 260, collection: 'ovni', category: 'Moletons & Mangas',
    image: '/hylo/ovni-longsleeve.webp',
    detail: 'Manga longa com logo criado a partir de grafite original de Alisson Abreu. Peça-ícone listada na loja oficial. Foto real da peça.',
    fabric: 'Moletom flanelado · grafismo em serigrafia', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/ovni-season/',
  },
  {
    slug: 'donegan-cargo-tapecaria',
    name: 'Calça Baggy em Tapeçaria — Donegan',
    price: 480, collection: 'donegan-ii', category: 'Calças',
    image: '/hylo/calca-tapecaria-bege.webp',
    detail: 'Calça baggy de tapeçaria bege — equilíbrio entre estilo e praticidade. Referência real da loja oficial (“Donegan”). Foto real da peça.',
    fabric: 'Tapeçaria pesada · feita no ateliê', sizes: ['P', 'M', 'G'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
  },
  {
    slug: 'donegan-longsleeve-desgaste',
    name: 'LongSleeve Desgaste — Donegan II [PLACEHOLDER]',
    price: 290, collection: 'donegan-ii', category: 'Moletons & Mangas',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1200&auto=format&fit=crop',
    detail: 'PLACEHOLDER editorial: peça-conceito para representar a textura/desgaste da Donegan II. Preço ilustrativo — confirmar na loja oficial.',
    fabric: 'PLACEHOLDER · algodão com lavagem de desgaste', sizes: ['P', 'M', 'G', 'GG'], status: 'placeholder',
  },
  {
    slug: 'sfnb-patchwork-jean',
    name: 'Jeans Patchwork — Super Fashion [PLACEHOLDER]',
    price: 520, collection: 'super-fashion-negro-brasileiro', category: 'Calças',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1200&auto=format&fit=crop',
    detail: 'PLACEHOLDER editorial: jeans patchwork visto na passarela de 06 ABR 2026. Aguardar drop oficial.',
    fabric: 'PLACEHOLDER · denim reaproveitado', sizes: ['P', 'M', 'G'], status: 'placeholder',
  },
  {
    slug: 'tj-spirit-tee',
    name: 'TJ Spirit Tee — Arquivo [PLACEHOLDER]',
    price: 180, collection: 'tj-season', category: 'Camisetas',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop',
    detail: 'PLACEHOLDER de arquivo: camiseta TJ Spirit (2023). Peça histórica, disponibilidade a confirmar.',
    fabric: 'PLACEHOLDER · algodão', sizes: ['P', 'M', 'G'], status: 'placeholder',
  },
  {
    slug: 'longsleeve-deus-amor-verde',
    name: 'Hylo LongSleeve “Deus é Amor” — Verde',
    price: 260, collection: 'donegan-ii', category: 'Moletons & Mangas',
    image: '/hylo/longsleeve-deus-amor.webp',
    detail: 'Manga longa verde com grafite original de Alisson Abreu em branco — frente, costas e mangas. Listada na loja oficial (“Donegan”). Foto real da peça.',
    fabric: 'Malha pesada · grafismo em serigrafia', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/donegan-parte-2/',
  },
  {
    slug: 'ovni-regata-respeito-roxa',
    name: 'Regata “Respeito é pra quem tem” — Roxa',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: '/hylo/ovni-regata-respeito-roxa.webp',
    detail: 'Variação roxa da regata manifesto da OVNI Season. Pré-venda na loja oficial. Foto real da peça.',
    fabric: 'Malha 100% algodão · modelagem reta', sizes: ['P', 'M', 'G', 'GG'], status: 'preorder',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/ovni-season/',
  },
  {
    slug: 'regata-femme-verde',
    name: 'Regata Hylo Femme’s — Verde',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: '/hylo/regata-femme-verde.webp',
    detail: 'Regata Femme’s verde: leveza sem perder presença, corte minimalista. Loja oficial. Foto real da peça.',
    fabric: 'Malha leve · modelagem feminina', sizes: ['P', 'M', 'G'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/',
  },
  {
    slug: 'regata-femme-marrom',
    name: 'Regata Hylo Femme’s — Marrom',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: '/hylo/regata-femme-marrom.webp',
    detail: 'Regata Femme’s marrom: caimento confortável, visual limpo. Loja oficial. Foto real da peça.',
    fabric: 'Malha leve · modelagem feminina', sizes: ['P', 'M', 'G'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/',
  },
  {
    slug: 'regata-femme-azul',
    name: 'Regata Hylo Femme’s — Azul',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: '/hylo/regata-femme-azul.webp',
    detail: 'Regata Femme’s azul: combina com qualquer peça da coleção. Loja oficial. Foto real da peça.',
    fabric: 'Malha leve · modelagem feminina', sizes: ['P', 'M', 'G'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/',
  },
  {
    slug: 'regata-homie-verde',
    name: 'Regata Hylo Homie’s — Verde',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: '/hylo/regata-homie-verde.webp',
    detail: 'Regata Homie’s verde, modelagem masculina reta. Loja oficial. Foto real da peça.',
    fabric: 'Malha pesada · modelagem reta', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/',
  },
  {
    slug: 'regata-homie-azul',
    name: 'Regata Hylo Homie’s — Azul',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: '/hylo/regata-homie-azul.webp',
    detail: 'Regata Homie’s azul, modelagem masculina reta. Loja oficial. Foto real da peça.',
    fabric: 'Malha pesada · modelagem reta', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/',
  },
];

export const ARTISTS: { name: string; proof: string; image: string; tag: string; credit: string }[] = [
  { name: 'TETO', proof: 'Vestiu OVNI Season em Brasília e Recife · SET 2026 (Metrópoles)', image: '/hylo/ed-teto-stage.jpg', tag: 'OVNI ON STAGE', credit: 'Foto: @gabrielbrasilphotos / Divulgação — uso autorizado' },
  { name: 'EMIVI', proof: 'Performance ao vivo no desfile Super Fashion · 06 ABR 2026 (Metrópoles)', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop', tag: 'RUNWAY PERFORMANCE', credit: 'Foto ilustrativa' },
  { name: 'VEIGH', proof: 'Registrado com peças Hylo (Metrópoles Catwalk, ABR 2026)', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop', tag: 'CULTURE', credit: 'Foto ilustrativa' },
  { name: 'WIU', proof: 'Registrado com peças Hylo (Metrópoles Catwalk, ABR 2026)', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop', tag: 'CULTURE', credit: 'Foto ilustrativa' },
  { name: 'RYU, THE RUNNER', proof: 'Registrado com peças Hylo (Metrópoles Catwalk, ABR 2026)', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop', tag: 'CULTURE', credit: 'Foto ilustrativa' },
];

export const RUNWAY = [
  { year: '2025', title: 'FIRST RUNWAY — DONEGAN II/III', place: 'Teatro Nacional Claudio Santoro · 05 NOV 2025', desc: 'Estreia absoluta nas passarelas abrindo a noite do Metrópoles Catwalk. Continuidade da pesquisa Donegan.', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1400&auto=format&fit=crop' },
  { year: '2026', title: 'RETURN TO THE RUNWAY — SUPER FASHION NEGRO BRASILEIRO', place: 'Teatro Nacional · 06 ABR 2026', desc: 'Desfile-performance com Emivi ao vivo. Patchwork, cós duplo, tapeçaria. Um dos destaques da 2ª edição.', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1400&auto=format&fit=crop' },
];

export const EDITORIALS: { slug: string; cat: string; title: string; excerpt: string; date: string; image: string; credit: string }[] = [
  { slug: 'teto-veste-ovni-brasilia-recife', cat: 'MUSIC', title: 'Teto veste OVNI em Brasília e Recife', excerpt: 'Colete xadrez com Cepyh, bermuda e longsleeve: a OVNI Season sobe ao palco.', date: '27 SET 2026 · Metrópoles', image: '/hylo/ed-teto-stage.jpg', credit: 'Foto: @gabrielbrasilphotos / Divulgação — uso autorizado' },
  { slug: 'super-fashion-negro-brasileiro-desfile', cat: 'RUNWAY', title: 'Super Fashion Negro Brasileiro: o desfile-performance', excerpt: 'Emivi incendeia a passarela do Teatro Nacional. Moda + música + performance.', date: '06–09 ABR 2026 · Metrópoles', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop', credit: 'Foto ilustrativa' },
  { slug: 'donegan-brasilia-centro', cat: 'FASHION', title: 'Donegan coloca Brasília no centro', excerpt: 'Laranja, calmaria e ateliê: a coleção que inverte o eixo Rio–SP.', date: 'ABR 2025 · Vish Mídia', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop', credit: 'Foto ilustrativa' },
  { slug: 'tj-season-primeira-colecao', cat: 'STUDIO', title: 'TJ Season: a primeira coleção', excerpt: 'O cachorro reativo, a Scratch Hip-Hop Shop e a Hylo entrando no mapa.', date: 'NOV 2023 · Metrópoles', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop', credit: 'Foto ilustrativa' },
  { slug: 'alisson-cor-sentimento-identidade', cat: 'PEOPLE', title: 'Alisson: cor, sentimento e identidade', excerpt: 'Talk no Catwalk 2025 — a moda que nasce de dentro, do Paranoá para o mundo.', date: '06 NOV 2025 · Metrópoles', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1000&auto=format&fit=crop', credit: 'Foto ilustrativa' },
 { slug: 'hylo-em-paris-editorial', cat: 'CULTURE', title: 'Hylo em Paris: editorial além-fronteiras', excerpt: 'A nova fase ultrapassa o Brasil com editorial produzido em Paris.', date: 'SET 2026 · Metrópoles', image: '/hylo/ed-paris-nave.jpg', credit: 'Foto: @rak.___ / Hylo Cartis / Divulgação — uso autorizado' },
];

export const money = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
