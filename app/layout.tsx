import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Entrance from '@/components/Entrance';
import Cursor from '@/components/Cursor';
import BagDrawer from '@/components/BagDrawer';
import SoundToggle from '@/components/SoundToggle';
import { BagProvider } from '@/lib/bag';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'HYLO CARTIS STUDIO — Enter the Hylo Universe', template: '%s · HYLO CARTIS STUDIO' },
  description: 'Label nascida no Paranoá, Brasília. Streetwear autoral entre hip-hop, moda high-end e cultura. TJ Season, Donegan, Super Fashion Negro Brasileiro, OVNI Season.',
  keywords: ['Hylo Cartis', 'Alisson Abreu', 'streetwear Brasília', 'Paranoá', 'OVNI Season', 'Donegan', 'Metrópoles Catwalk'],
  openGraph: { type: 'website', locale: 'pt_BR', siteName: 'HYLO CARTIS STUDIO', title: 'HYLO CARTIS STUDIO — Enter the Hylo Universe', description: 'Nascida no Paranoá. Criada para ir além.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    '@context': 'https://schema.org', '@type': 'ClothingStore', name: 'Hylo Cartis Studio',
    founder: { '@type': 'Person', name: 'Alisson Abreu' },
    address: { '@type': 'PostalAddress', addressLocality: 'Paranoá, Brasília', addressRegion: 'DF', addressCountry: 'BR' },
    sameAs: ['https://www.instagram.com/hylocartistudio/', 'https://www.hylocartis.com.br/'],
  };
  return (
    <html lang="pt-BR">
      <body className="bg-ink text-bone antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:bg-acid focus:text-ink focus:px-4 focus:py-2 font-mono text-xs">Pular para o conteúdo</a>
        <BagProvider>
          <Entrance />
          <Cursor />
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
          <BagDrawer />
          <SoundToggle />
        </BagProvider>
      </body>
    </html>
  );
}
