import { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = { title: 'Shop', description: 'Shop Hylo Cartis Studio — new arrivals, clothing, acessórios e coleções. Preços reais onde confirmados.' };

export default function Shop() {
  return (
    <div className="pt-24 pb-20 px-4 md:px-8 bg-ink min-h-screen">
      <p className="font-mono text-[10px] tracking-[0.3em] text-ash">SHOP — A LOJA EXISTE, MAS NÃO DOMINA A MARCA</p>
      <h1 className="font-display text-6xl md:text-9xl tracking-mega mt-2">SHOP</h1>
      <div className="flex flex-wrap gap-2 mt-6 font-mono text-[11px] tracking-widest">
        {['NEW ARRIVALS', 'CLOTHING', 'ACCESSORIES', 'COLLECTIONS'].map(t => (
          <span key={t} className="border border-white/20 px-4 py-2 text-bone/80">{t}</span>
        ))}
      </div>
      <div className="grid md:grid-cols-4 gap-3 mt-10">
        {PRODUCTS.map((p, i) => <ProductCard key={p.slug} p={p} large={i === 3} />)}
      </div>
      <p className="font-mono text-[10px] text-ash mt-6 max-w-2xl leading-relaxed">Integração: a loja oficial roda em Nuvemshop (hylocartis.com.br). Este conceito mantém produto · tamanho · cor · estoque · carrinho e direciona o checkout para a infraestrutura real. Nada aqui finge processar pagamento.</p>
      <Link href="/" className="font-mono text-xs tracking-widest text-ash hover:text-bone mt-6 inline-block">← BACK TO UNIVERSE</Link>
    </div>
  );
}
