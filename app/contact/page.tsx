'use client';

export default function Contact() {
  return (
    <div className="pt-24 px-4 md:px-8 pb-20 bg-ink min-h-screen">
      <p className="font-mono text-[10px] tracking-[0.3em] text-ash">CONTACT</p>
      <h1 className="font-display text-6xl md:text-9xl tracking-mega">FALE<br />COM A HYLO</h1>
      <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-4xl">
        <a href="https://www.instagram.com/hylocartistudio/" target="_blank" rel="noreferrer" className="border border-white/15 p-6 hover:border-acid block">
          <p className="font-mono text-[10px] tracking-widest text-ash">INSTAGRAM</p>
          <p className="font-display text-2xl mt-1">@hylocartistudio →</p>
        </a>
        <a href="https://www.hylocartis.com.br/" target="_blank" rel="noreferrer" className="border border-white/15 p-6 hover:border-acid block">
          <p className="font-mono text-[10px] tracking-widest text-ash">LOJA OFICIAL</p>
          <p className="font-display text-2xl mt-1">hylocartis.com.br →</p>
        </a>
        <div className="border border-white/15 p-6"><p className="font-mono text-[10px] tracking-widest text-ash">BASE</p><p className="font-display text-2xl mt-1">PARANOÁ · BRASÍLIA · DF</p></div>
        <div className="border border-white/15 p-6"><p className="font-mono text-[10px] tracking-widest text-ash">PRESS / COLLABS</p><p className="font-mono text-sm mt-1 text-bone/70">Via DM no Instagram (canal público documentado).</p></div>
      </div>
      <form className="max-w-4xl mt-8 border border-white/15 p-6 space-y-4" onSubmit={e => e.preventDefault()} aria-label="Formulário de contato (demonstração)">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="block"><span className="font-mono text-[10px] tracking-widest text-ash">NOME</span>
          <input required placeholder="Seu nome" className="mt-1 w-full bg-transparent border border-white/20 px-4 py-3 text-bone placeholder:text-ash/60 focus:border-acid outline-none" /></label>
          <label className="block"><span className="font-mono text-[10px] tracking-widest text-ash">EMAIL</span>
          <input required type="email" placeholder="voce@email.com" className="mt-1 w-full bg-transparent border border-white/20 px-4 py-3 text-bone placeholder:text-ash/60 focus:border-acid outline-none" /></label>
        </div>
        <label className="block"><span className="font-mono text-[10px] tracking-widest text-ash">MENSAGEM</span>
        <textarea required rows={4} placeholder="Assunto: collab, press, atacado…" className="mt-1 w-full bg-transparent border border-white/20 px-4 py-3 text-bone placeholder:text-ash/60 focus:border-acid outline-none" /></label>
        <button className="bg-bone text-ink font-mono text-xs tracking-widest px-8 py-4 hover:bg-acid">SEND →</button>
        <p className="font-mono text-[10px] text-ash">Demonstração de interface — sem backend acoplado.</p>
      </form>
    </div>
  );
}
