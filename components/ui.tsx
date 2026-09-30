'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function MaskText({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  return (
    <span className={className} aria-label={text} role="text">
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 -mb-1 align-bottom" aria-hidden>
          <motion.span className="inline-block" initial={reduce ? false : { y: '110%' }}
            whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}>
            {w}{i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink py-3" aria-hidden>
      <div className="flex gap-8 whitespace-nowrap animate-[marquee_22s_linear_infinite] w-max">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-mono text-[11px] tracking-[0.25em] text-ash">{t} <span className="text-blood ml-8">●</span></span>
        ))}
      </div>
    </div>
  );
}
