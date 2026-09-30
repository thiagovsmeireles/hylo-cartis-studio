'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Entrance() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => setShow(false), reduced ? 400 : 2200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed inset-0 z-[100] bg-black grid place-items-center" role="status" aria-label="Abrindo Hylo Cartis Studio"
          exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          initial={{ clipPath: 'inset(0 0 0% 0)' }}>
          <motion.div initial={{ opacity: 0, letterSpacing: '0.6em' }} animate={{ opacity: 1, letterSpacing: '0.2em' }} transition={{ duration: 1.2 }}>
            <p className="font-display text-bone text-xl md:text-4xl text-center">HYLO CARTIS<br /><span className="text-ash text-sm md:text-lg font-mono tracking-[0.4em]">STUDIO · 2026</span></p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
