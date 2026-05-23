import { Card, Cards } from 'fumadocs-ui/components/card';
import { Layers, Lightbulb, MessageSquare, Workflow, Music, BookOpen } from 'lucide-react';

export function FeatureCards() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Lo que vas a aprender</h2>
      </div>
      <Cards className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card 
          icon={<Layers className="text-brand-500" />}
          title="Fundamentos de diseño" 
          href="/docs/01-fundamentos"
          description="Jerarquía, contraste, tipografía, espacio y color."
        />
        <Card 
          icon={<Lightbulb className="text-brand-500" />}
          title="Criterio visual" 
          href="/docs/02-criterio-visual"
          description="Aprende a diferenciar entre estilo y contenido con referentes."
        />
        <Card 
          icon={<MessageSquare className="text-brand-500" />}
          title="Lenguaje de IA" 
          href="/docs/03-hablarle-ia"
          description="Comunícate de manera efectiva con los modelos generativos."
        />
        <Card 
          icon={<Workflow className="text-brand-500" />}
          title="Proceso paso a paso" 
          href="/docs/04-proceso"
          description="Desde la idea en Pinterest hasta la iteración final."
        />
        <Card 
          icon={<Music className="text-brand-500" />}
          title="Jingles con SUNO" 
          href="/docs/05-jingles-suno"
          description="Creación de recursos sonoros para complementar el diseño."
        />
        <Card 
          icon={<BookOpen className="text-brand-500" />}
          title="Glosario técnico" 
          href="/docs/06-glosario"
          description="Términos clave para dominar la generación de imágenes."
        />
      </Cards>
    </section>
  );
}
