import Link from 'next/link';
import { GPTLink } from './gpt-link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-fd-background py-24 sm:py-32 px-6">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="h-[400px] w-[400px] rounded-full bg-brand-500/20 blur-[100px]" />
      </div>
      
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-brand-500 font-semibold tracking-wide text-sm sm:text-base uppercase mb-4">
          Guía oficial del Congreso de Comunicaciones DECOM — IPUC
        </h2>
        <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-fd-foreground mb-6">
          IA aplicada al diseño gráfico
        </h1>
        <p className="text-xl text-fd-muted-foreground mb-10 max-w-2xl mx-auto">
          Aprende a usar IA sin perder el criterio humano.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-600 focus-visible:outline-none"
          >
            Empezar la guía
          </Link>
          <GPTLink variant="button" className="!bg-fd-secondary !text-fd-secondary-foreground hover:!bg-fd-secondary/80">
            Asistente para Jingles SUNO
          </GPTLink>
        </div>
      </div>
    </section>
  );
}
