// ─── HYLO CARTIS STUDIO · data layer ─────────────────────────────
// Apenas fatos públicos verificados (Metrópoles, Correio Braziliense,
// Vish Mídia, UnB, loja oficial). Placeholders marcados com PLACEHOLDER.
// Preços e descrições de produto: snapshot arquivado da loja oficial (jun/2026,
// via Wayback Machine) + dados ao vivo da loja. Fotos: acervo Hylo (uso autorizado).

// Base path do deploy ('' local, '/hylo-cartis-studio' no GitHub Pages).
// next/image com unoptimized:true não prefixa sozinho — por isso o BP explícito.
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

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
    image: BP + '/hylo/ed-ovni-71.jpg',
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
    image: BP + '/hylo/ovni-regata-respeito-cinza.webp',
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
    image: BP + '/hylo/ovni-regata-br-homies.webp',
    detail: 'Regata manifesto BR, versão Homie’s em off white. Pré-venda na loja oficial. Foto real da peça.',
    fabric: 'Malha pesada · estampa frente/costas', sizes: ['P', 'M', 'G', 'GG'], status: 'preorder',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/ovni-season/',
  },
  {
    slug: 'ovni-regata-br-femmes',
    name: 'Regata Hylo Cartis Studio BR · Femme’s Off White',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/ovni-regata-br-femmes.webp',
    detail: 'Versão Femme’s da regata BR em off white. Pré-venda na loja oficial. Foto real da peça.',
    fabric: 'Malha leve · modelagem feminina', sizes: ['P', 'M', 'G'], status: 'preorder',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/ovni-season/',
  },
  {
    slug: 'ovni-longsleeve',
    name: 'Hylo LongSleeve “Deus é Amor”',
    price: 260, collection: 'ovni', category: 'Moletons & Mangas',
    image: BP + '/hylo/ovni-longsleeve.webp',
    detail: 'Manga longa com logo criado a partir de grafite original de Alisson Abreu. Peça-ícone listada na loja oficial. Foto real da peça.',
    fabric: 'Moletom flanelado · grafismo em serigrafia', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/ovni-season/',
  },
  {
    slug: 'donegan-cargo-tapecaria',
    name: 'Calça Baggy em Tapeçaria — Bege',
    price: 480, collection: 'donegan-ii', category: 'Calças',
    image: BP + '/hylo/calca-tapecaria-bege.webp',
    detail: 'A calça baggy de tapeçaria traz o equilíbrio perfeito entre estilo e praticidade. Modelagem ampla e confortável, liberdade de movimento e visual moderno.',
    fabric: 'Tapeçaria · modelagem baggy', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/calca-em-tapecaria-fd2hd/',
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
    price: 220, collection: 'donegan-ii', category: 'Moletons & Mangas',
    image: BP + '/hylo/longsleeve-deus-amor.webp',
    detail: 'Manga longa com logo criado a partir de um grafite original de Alisson Abreu, fundador da marca. Foto real da peça.',
    fabric: 'Malha pesada · grafismo em serigrafia', sizes: ['P', 'M', 'G', 'GG', 'XG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-longsleeve-tee-7xdmm/',
  },
  {
    slug: 'ovni-regata-respeito-roxa',
    name: 'Regata “Respeito é pra quem tem” — Roxa',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/ovni-regata-respeito-roxa.webp',
    detail: 'Variação roxa da regata manifesto da OVNI Season. Pré-venda na loja oficial. Foto real da peça.',
    fabric: 'Malha 100% algodão · modelagem reta', sizes: ['P', 'M', 'G', 'GG'], status: 'preorder',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/shop/ovni-season/',
  },
  {
    slug: 'regata-femme-verde',
    name: 'Regata Hylo Femme’s — Verde',
    price: 100, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/regata-femme-verde.webp',
    detail: 'Feita pra quem busca leveza sem perder presença. Corte minimalista, caimento confortável e visual limpo. Produzida em malha canelada. Foto real da peça.',
    fabric: 'Malha canelada 100% algodão', sizes: ['P', 'M', 'G'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-regata-feminina-verde-cf5ek/',
  },
  {
    slug: 'regata-femme-marrom',
    name: 'Regata Hylo Femme’s — Marrom',
    price: 100, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/regata-femme-marrom.webp',
    detail: 'Feita pra quem busca leveza sem perder presença. Corte minimalista, caimento confortável e visual limpo. Produzida em malha canelada. Foto real da peça.',
    fabric: 'Malha canelada 100% algodão', sizes: ['P', 'M', 'G'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-regata-feminina-marrom-l6y7z/',
  },
  {
    slug: 'regata-femme-azul',
    name: 'Regata Hylo Femme’s — Azul',
    price: 100, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/regata-femme-azul.webp',
    detail: 'Feita pra quem busca leveza sem perder presença. Corte minimalista, caimento confortável e visual limpo. Produzida em malha canelada. Foto real da peça.',
    fabric: 'Malha canelada 100% algodão', sizes: ['P', 'M', 'G'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-regata-feminina-cinza-gbcys/',
  },
  {
    slug: 'regata-homie-verde',
    name: 'Regata Hylo Homie’s — Verde',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/regata-homie-verde.webp',
    detail: 'Feita pra quem busca leveza sem perder presença. Corte minimalista, caimento confortável e visual limpo. Produzida em malha canelada. Foto real da peça.',
    fabric: 'Malha canelada 100% algodão', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-regata-masculina-verde-17xy8/',
  },
  {
    slug: 'regata-homie-azul',
    name: 'Regata Hylo Homie’s — Azul',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/regata-homie-azul.webp',
    detail: 'Feita pra quem busca leveza sem perder presença. Corte minimalista, caimento confortável e visual limpo. Produzida em malha canelada. Foto real da peça.',
    fabric: 'Malha canelada 100% algodão', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-regata-masculina-cinza-b5ztd/',
  },
  // ── Resgatados do snapshot arquivado da loja oficial (jun/2026) ──
  {
    slug: 'hylo-hoodie',
    name: 'Hylo Hoodie',
    price: 400, collection: 'donegan-ii', category: 'Moletons & Mangas',
    image: BP + '/hylo/hoodie.webp',
    detail: 'Este moletom oversized é a peça perfeita para quem busca estilo, conforto e um toque de arte no dia a dia. Com um capuz maior que o convencional, ele proporciona um visual único.',
    fabric: 'Moletom flanelado oversized · capuz amplo', sizes: ['P', 'M', 'G', 'GG', 'XG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-hoodie-hka6p/',
  },
  {
    slug: 'colete-puffer',
    name: 'Colete Puffer',
    price: 360, collection: 'donegan-ii', category: 'Jaquetas',
    image: BP + '/hylo/colete-puffer.webp',
    detail: 'O Colete Puffer foi costurado com atenção aos detalhes, trazendo um design diferenciado e moderno. Essa peça se destaca pelo volume especial e versatilidade.',
    fabric: 'Puffer acolchoado · costura detalhada', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/colete-puffer-9lpuw/',
  },
  {
    slug: 'jaqueta-couro-verde',
    name: 'Jaqueta de Tapeçaria com Logo em Couro — Verde',
    price: 780, collection: 'donegan-ii', category: 'Jaquetas',
    image: BP + '/hylo/jaqueta-couro-verde.webp',
    detail: 'A Jaqueta de Tapeçaria com Logo em Couro foi costurada com atenção aos detalhes, trazendo um design diferenciado e moderno. Apenas duas unidades disponíveis.',
    fabric: 'Tapeçaria · logo em couro', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/jaqueta-de-tapecaria-com-logo-em-couro-j90wr/',
  },
  {
    slug: 'jaqueta-couro-bege',
    name: 'Jaqueta de Tapeçaria com Logo em Couro — Bege',
    price: 780, collection: 'donegan-ii', category: 'Jaquetas',
    image: BP + '/hylo/jaqueta-couro-bege.webp',
    detail: 'A Jaqueta de Tapeçaria com Logo em Couro foi costurada com atenção aos detalhes, trazendo um design diferenciado e moderno. Apenas duas unidades disponíveis.',
    fabric: 'Tapeçaria · logo em couro', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/jaqueta-de-tapecaria-com-logo-em-couro-p5zcb/',
  },
  {
    slug: 'tee-oversized',
    name: 'Hylo Tee — Oversized',
    price: 210, collection: 'donegan-ii', category: 'Camisetas',
    image: BP + '/hylo/tee-oversized.webp',
    detail: 'Camiseta oversized com logo criado a partir de um grafite original de Alisson Abreu, fundador da marca. Foto real da peça.',
    fabric: 'Malha pesada · grafismo em serigrafia', sizes: ['P', 'M', 'G', 'GG', 'XG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-tee-oversized-r70aw/',
  },
  {
    slug: 'calca-tapecaria-verde',
    name: 'Calça Baggy em Tapeçaria — Verde',
    price: 480, collection: 'donegan-ii', category: 'Calças',
    image: BP + '/hylo/calca-tapecaria-verde.webp',
    detail: 'A calça baggy de tapeçaria traz o equilíbrio perfeito entre estilo e praticidade. Modelagem ampla e confortável, liberdade de movimento e visual moderno.',
    fabric: 'Tapeçaria · modelagem baggy', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/calca-em-tapecaria-90b0c/',
  },
  {
    slug: 'calca-tapecaria-preta',
    name: 'Calça Baggy em Tapeçaria — Preta',
    price: 480, collection: 'donegan-ii', category: 'Calças',
    image: BP + '/hylo/calca-tapecaria-preta.webp',
    detail: 'A calça baggy de tapeçaria traz o equilíbrio perfeito entre estilo e praticidade. Modelagem ampla e confortável, liberdade de movimento e visual moderno.',
    fabric: 'Tapeçaria · modelagem baggy', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/calca-em-tapecaria-7qos5/',
  },
  {
    slug: 'calca-tapecaria-1-1',
    name: 'Calça em Tapeçaria 1/1 — Azul',
    price: 580, collection: 'donegan-ii', category: 'Calças',
    image: BP + '/hylo/calca-tapecaria-azul.webp',
    detail: 'A calça baggy de tapeçaria traz o equilíbrio perfeito entre estilo e praticidade. Peça única 1/1 — quando acabar, acabou.',
    fabric: 'Tapeçaria · peça única 1/1', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/calca-em-tapecaria-1-1-6egu5/',
  },
  {
    slug: 'calca-camurca-flare',
    name: 'Calça Boca de Sino em Camurça',
    price: 650, collection: 'donegan-ii', category: 'Calças',
    image: BP + '/hylo/calca-camurca-flare.webp',
    detail: 'A calça boca de sino em camurça traz o equilíbrio perfeito entre estilo e praticidade. Modelagem ampla e confortável, liberdade de movimento e visual moderno.',
    fabric: 'Camurça · boca de sino', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/calca-boca-de-sino-em-camurca-dl57i/',
  },
  {
    slug: 'regata-femme-preta',
    name: 'Regata Hylo Femme’s — Preta',
    price: 100, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/regata-femme-preta.webp',
    detail: 'Feita pra quem busca leveza sem perder presença. Corte minimalista, caimento confortável e visual limpo. Produzida em malha canelada. Foto real da peça.',
    fabric: 'Malha canelada 100% algodão', sizes: ['P', 'M', 'G'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-regata-feminina-preta-4aogi/',
  },
  {
    slug: 'regata-homie-preta',
    name: 'Regata Hylo Homie’s — Preta',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/regata-homie-preta.webp',
    detail: 'Feita pra quem busca leveza sem perder presença. Corte minimalista, caimento confortável e visual limpo. Produzida em malha canelada. Foto real da peça.',
    fabric: 'Malha canelada 100% algodão', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-regata-masculina-preta-kwp81/',
  },
  {
    slug: 'regata-homie-marrom',
    name: 'Regata Hylo Homie’s — Marrom',
    price: 160, collection: 'ovni', category: 'Regatas',
    image: BP + '/hylo/regata-homie-marrom.webp',
    detail: 'Feita pra quem busca leveza sem perder presença. Corte minimalista, caimento confortável e visual limpo. Produzida em malha canelada. Foto real da peça.',
    fabric: 'Malha canelada 100% algodão', sizes: ['P', 'M', 'G', 'GG'], status: 'available',
    credit: 'Foto: Hylo Cartis Studio — loja oficial (uso autorizado)',
    externalUrl: 'https://www.hylocartis.com.br/produtos/hylo-regata-masculina-marrom-u5f15/',
  },
];

export const ARTISTS: { name: string; proof: string; image: string; tag: string; credit: string }[] = [
  { name: 'TETO', proof: 'Vestiu OVNI Season em Brasília e Recife · SET 2026 (Metrópoles)', image: BP + '/hylo/ed-teto-stage.jpg', tag: 'OVNI ON STAGE', credit: 'Foto: @gabrielbrasilphotos / Divulgação — uso autorizado' },
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
  { slug: 'teto-veste-ovni-brasilia-recife', cat: 'MUSIC', title: 'Teto veste OVNI em Brasília e Recife', excerpt: 'Colete xadrez com Cepyh, bermuda e longsleeve: a OVNI Season sobe ao palco.', date: '27 SET 2026 · Metrópoles', image: BP + '/hylo/ed-teto-stage.jpg', credit: 'Foto: @gabrielbrasilphotos / Divulgação — uso autorizado' },
  { slug: 'super-fashion-negro-brasileiro-desfile', cat: 'RUNWAY', title: 'Super Fashion Negro Brasileiro: o desfile-performance', excerpt: 'Emivi incendeia a passarela do Teatro Nacional. Moda + música + performance.', date: '06–09 ABR 2026 · Metrópoles', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop', credit: 'Foto ilustrativa' },
  { slug: 'donegan-brasilia-centro', cat: 'FASHION', title: 'Donegan coloca Brasília no centro', excerpt: 'Laranja, calmaria e ateliê: a coleção que inverte o eixo Rio–SP.', date: 'ABR 2025 · Vish Mídia', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop', credit: 'Foto ilustrativa' },
  { slug: 'tj-season-primeira-colecao', cat: 'STUDIO', title: 'TJ Season: a primeira coleção', excerpt: 'O cachorro reativo, a Scratch Hip-Hop Shop e a Hylo entrando no mapa.', date: 'NOV 2023 · Metrópoles', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop', credit: 'Foto ilustrativa' },
  { slug: 'alisson-cor-sentimento-identidade', cat: 'PEOPLE', title: 'Alisson: cor, sentimento e identidade', excerpt: 'Talk no Catwalk 2025 — a moda que nasce de dentro, do Paranoá para o mundo.', date: '06 NOV 2025 · Metrópoles', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1000&auto=format&fit=crop', credit: 'Foto ilustrativa' },
 { slug: 'hylo-em-paris-editorial', cat: 'CULTURE', title: 'Hylo em Paris: editorial além-fronteiras', excerpt: 'A nova fase ultrapassa o Brasil com editorial produzido em Paris.', date: 'SET 2026 · Metrópoles', image: BP + '/hylo/ed-paris-nave.jpg', credit: 'Foto: @rak.___ / Hylo Cartis / Divulgação — uso autorizado' },
];

export const money = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
