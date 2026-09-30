'use client';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [label, setLabel] = useState('');
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY }); setVisible(true);
      const t = (e.target as HTMLElement).closest?.('[data-cursor]');
      setLabel(t?.getAttribute('data-cursor') || '');
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);
  if (!visible) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed z-[90] hidden md:block"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}>
      <div className={`-translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full border transition-all duration-200 ${label ? 'w-20 h-20 bg-bone text-ink border-bone' : 'w-4 h-4 border-white/60'}`}>
        {label && <span className="font-mono text-[10px] tracking-widest">{label}</span>}
      </div>
    </div>
  );
}
