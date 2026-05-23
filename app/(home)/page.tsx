import { Hero } from '@/components/hero';
import { FeatureCards } from '@/components/feature-cards';
import { ToolCard } from '@/components/tool-card';
import { PenTool, MessageCircle, Music4, Bot } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <FeatureCards />
      
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Herramientas esenciales</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ToolCard 
            name="Pinterest" 
            description="Búsqueda de referentes e inspiración visual." 
            href="https://pinterest.com" 
            icon={<PenTool />} 
          />
          <ToolCard 
            name="ChatGPT" 
            description="Motor principal de generación y estructuración de ideas." 
            href="https://chatgpt.com" 
            icon={<MessageCircle />} 
          />
          <ToolCard 
            name="SUNO" 
            description="Generador de música y jingles con IA." 
            href="https://suno.com" 
            icon={<Music4 />} 
          />
          <ToolCard
            name="Asistente Jingles SUNO"
            description="GPT especializado en prompts profesionales para SUNO."
            href={process.env.NEXT_PUBLIC_GPT_CUSTOM_URL || '#'}
            icon={<Bot />}
          />
        </div>
      </section>
      
      <footer className="mt-auto border-t border-fd-border py-8 text-center text-sm text-fd-muted-foreground">
        <p>Josh Creativos — DECOM IPUC</p>
      </footer>
    </main>
  );
}
