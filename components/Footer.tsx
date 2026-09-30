import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 text-bone" aria-label="Rodapé">
      <div className="px-4 md:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl leading-none">HYLO<br />CARTIS<br /><span className="text-ash">STUDIO</span></p>
          <p className="font-mono text-[10px] tracking-widest text-ash mt-4">BORN IN THE PERIPHERY.<br />BUILT IN BRASÍLIA.</p>
        </div>
        <nav aria-label="Loja">
          <p className="font-mono text-[10px] tracking-[0.2em] text-ash mb-3">SHOP</p>
          {['/shop', '/collections', '/collections/ovni', '/runway'].map(h => (
            <Link key={h} href={h} className="block py-1 text-sm text-bone/80 hover:text-bone">{h.replace('/', '').toUpperCase() || 'HOME'}</Link>
          ))}
        </nav>
        <nav aria-label="Universo">
          <p className="font-mono text-[10px] tracking-[0.2em] text-ash mb-3">UNIVERSE</p>
          {['/studio', '/studio/alisson-abreu', '/culture', '/editorial', '/about', '/contact'].map(h => (
            <Link key={h} href={h} className="block py-1 text-sm text-bone/80 hover:text-bone">{h.split('/').filter(Boolean).join(' / ').toUpperCase()}</Link>
          ))}
        </nav>
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-ash mb-3">CONNECT</p>
          <a className="block py-1 text-sm hover:text-acid" href="https://www.instagram.com/hylocartistudio/" target="_blank" rel="noreferrer">Instagram →</a>
          <a className="block py-1 text-sm hover:text-acid" href="https://www.hylocartis.com.br/" target="_blank" rel="noreferrer">Loja oficial →</a>
          <p className="font-mono text-[10px] text-ash mt-4 leading-relaxed">Copy editorial nova criada para este conceito. Fatos com fonte pública citada. Fotos de produto: acervo Hylo Cartis Studio (uso autorizado). Imagens editoriais: ilustrativas — substituir por acervo licenciado Hylo.</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 md:px-8 py-4 flex flex-wrap gap-3 justify-between font-mono text-[10px] tracking-widest text-ash">
        <span>© 2026 HYLO CARTIS STUDIO — CONCEITO</span>
        <span>PARANOÁ · BRASÍLIA · DF</span>
      </div>
    </footer>
  );
}
