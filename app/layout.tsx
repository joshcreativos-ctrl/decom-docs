import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, Instrument_Serif } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'IA aplicada al diseño gráfico | DECOM IPUC',
  description: 'Guía oficial del Congreso de Comunicaciones DECOM. Aprende a usar IA para diseñar piezas profesionales sin perder el criterio humano.',
  openGraph: {
    images: '/images/og-image.jpg',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-CO" className={`${inter.variable} ${instrumentSerif.variable} font-sans`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-fd-background text-fd-foreground font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
