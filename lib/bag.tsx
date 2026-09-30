'use client';
import { createContext, useContext, useMemo, useState, useCallback, ReactNode } from 'react';
import { Product } from './data';

export type BagItem = { product: Product; size: string; qty: number };
type BagCtx = {
  items: BagItem[]; count: number; total: number;
  open: boolean; setOpen: (v: boolean) => void;
  add: (p: Product, size: string) => void;
  remove: (slug: string, size: string) => void;
  clear: () => void;
};
const Ctx = createContext<BagCtx | null>(null);

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [open, setOpen] = useState(false);
  const add = useCallback((p: Product, size: string) => {
    setItems(prev => {
      const i = prev.findIndex(x => x.product.slug === p.slug && x.size === size);
      if (i >= 0) { const c = [...prev]; c[i] = { ...c[i], qty: c[i].qty + 1 }; return c; }
      return [...prev, { product: p, size, qty: 1 }];
    });
    setOpen(true);
  }, []);
  const remove = useCallback((slug: string, size: string) => {
    setItems(prev => prev.filter(x => !(x.product.slug === slug && x.size === size)));
  }, []);
  const clear = useCallback(() => setItems([]), []);
  const { count, total } = useMemo(() => ({
    count: items.reduce((a, b) => a + b.qty, 0),
    total: items.reduce((a, b) => a + b.qty * b.product.price, 0),
  }), [items]);
  return <Ctx.Provider value={{ items, count, total, open, setOpen, add, remove, clear }}>{children}</Ctx.Provider>;
}
export const useBag = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error('useBag outside provider');
  return v;
};
