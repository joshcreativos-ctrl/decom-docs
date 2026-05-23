const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const outputDir = path.join(baseDir, 'content', 'docs');

function writeUTF8(p, content) {
  fs.writeFileSync(p, content, 'utf8');
}

function writeMeta(dir, title, pages) {
  const metaPath = path.join(dir, 'meta.json');
  writeUTF8(metaPath, JSON.stringify({ title, pages }, null, 2));
}

// Ensure directories
[
  '',
  '01-fundamentos',
  '02-criterio-visual',
  '03-hablarle-ia',
  '04-proceso',
  '05-jingles-suno',
  '06-glosario',
  '07-errores-comunes',
  '08-recursos'
].forEach(d => {
  const p = path.join(outputDir, d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

// Introduction
writeUTF8(path.join(outputDir, 'index.mdx'), `---
title: Introducción
description: Guía oficial del Congreso de Comunicaciones DECOM - IPUC
---

# IA aplicada al diseño gráfico

**Guía oficial del Congreso de Comunicaciones DECOM — IPUC**

<Callout type="info">
"La IA hace imágenes. Tú haces mensajes. Que la herramienta nunca opaque el mensaje."
</Callout>

Esta guía recoge todo lo que se enseñó en la capacitación. Está pensada para que cualquier persona del equipo DECOM — con o sin formación en diseño — pueda producir piezas visuales profesionales en una fracción del tiempo, sin perder el criterio humano que ningún algoritmo puede reemplazar.

## Antes de empezar

### Qué vas a aprender

Al terminar esta guía vas a poder:

<Steps>
<Step>Identificar el lenguaje visual adecuado para cada tipo de evento.</Step>
<Step>Escoger referentes visuales correctamente en Pinterest.</Step>
<Step>Hablarle a la IA como un diseñador, no como un buscador.</Step>
<Step>Generar flyers profesionales con ChatGPT (GPT Image 2.0).</Step>
<Step>Crear jingles y cortinas musicales con SUNO.</Step>
<Step>Verificar el output con criterio crítico antes de publicar.</Step>
</Steps>

### Lo que necesitas

<Cards>
  <Card title="Pinterest" href="https://pinterest.com" description="Búsqueda de referentes visuales" />
  <Card title="ChatGPT" href="https://chatgpt.com" description="Generación de imágenes con GPT Image 2.0" />
  <Card title="SUNO" href="https://suno.com" description="Generación de jingles y música" />
</Cards>

<Callout type="warn" title="Asistente personalizado">
  El <GPTLink variant="inline">asistente personalizado</GPTLink> contiene los prompts, plantillas y guías del proceso DECOM precargados. Es el punto de partida recomendado.
</Callout>
`);

// 01-fundamentos
const d01 = path.join(outputDir, '01-fundamentos');
writeMeta(d01, 'Fundamentos', ['index', 'jerarquia', 'contraste', 'tipografia', 'espacio', 'color']);
writeUTF8(path.join(d01, 'index.mdx'), `---
title: Fundamentos
description: Los 5 principios básicos del diseño.
---
# Fundamentos de diseño

Antes de tocar la IA, tu ojo debe entrenarse. Estos 5 principios son el 20% del diseño que produce el 80% del resultado. No son opcionales: son la diferencia entre un flyer "que se ve raro" y uno que comunica.
`);

writeUTF8(path.join(d01, 'jerarquia.mdx'), `---
title: Jerarquía visual
description: Si todo grita, nadie escucha.
---
# Jerarquía visual

**Si todo grita, nadie escucha.**

Los usuarios deciden si un diseño les gusta en **50 milisegundos**. En ese instante, el ojo necesita saber qué mirar primero.

<Callout type="info" title="Regla práctica">
- Define **3 niveles** de importancia.
- Lo más importante es lo más grande.
</Callout>

![Ejemplo de jerarquía visual](/images/slides/1-1-jerarquia.svg)
`);

writeUTF8(path.join(d01, 'contraste.mdx'), `---
title: Contraste
description: Lo que no contrasta, no existe.
---
# Contraste

**Lo que no contrasta, no existe.**

<Callout type="info">*"Sin contraste, el diseño muere."* — Paul Rand</Callout>

![Ejemplo de contraste](/images/slides/1-2-contraste.svg)
`);

writeUTF8(path.join(d01, 'tipografia.mdx'), `---
title: Tipografía
description: La voz silenciosa de tu mensaje.
---
# Tipografía

**La voz silenciosa de tu mensaje.**

<Callout type="info">*"La tipografía bien usada es invisible."* — Beatrice Warde.</Callout>

![Ejemplo tipografía](/images/slides/1-3-tipografia.svg)
`);

writeUTF8(path.join(d01, 'espacio.mdx'), `---
title: Espacio en blanco
description: El lujo silencioso.
---
# Espacio en blanco

**El lujo silencioso.**

![Ejemplo espacio en blanco](/images/slides/1-4-espacio.svg)
`);

writeUTF8(path.join(d01, 'color.mdx'), `---
title: Color
description: La regla 60-30-10.
---
# Color: la regla 60-30-10

**Menos tonos, más fuerza.**

![Ejemplo color 60-30-10](/images/slides/1-5-color.svg)
`);

// 02-criterio-visual
const d02 = path.join(outputDir, '02-criterio-visual');
writeMeta(d02, 'Criterio Visual', ['index', 'estilo-vs-contenido', 'triada-referentes', 'mood']);
writeUTF8(path.join(d02, 'index.mdx'), `---
title: Criterio Visual
description: Cómo escoger referentes.
---
# Criterio visual

La calidad de tu flyer no depende de la IA. Depende de lo que le muestras. Mala referencia → mal resultado.
`);

writeUTF8(path.join(d02, 'estilo-vs-contenido.mdx'), `---
title: Estilo vs Contenido
description: No busques qué dice. Busca cómo se ve.
---
# Estilo, no contenido

![Búsqueda en Pinterest](/images/slides/2-1-pinterest.svg)
`);

writeUTF8(path.join(d02, 'triada-referentes.mdx'), `---
title: La tríada de referentes
description: Elige 3 referentes que hablen el mismo idioma.
---
# La tríada de referentes

![Ejemplo tríada de referentes](/images/slides/2-2-triada.svg)
`);

writeUTF8(path.join(d02, 'mood.mdx'), `---
title: El mood manda
description: El mood manda sobre el tema.
---
# El mood manda

![Mood board](/images/slides/2-3-mood.svg)
`);

// 03-hablarle-ia
const d03 = path.join(outputDir, '03-hablarle-ia');
writeMeta(d03, 'Lenguaje de IA', ['index', 'diseñador-junior', 'imagen-vs-texto', 'iteracion']);
writeUTF8(path.join(d03, 'index.mdx'), `---
title: Lenguaje de IA
description: Cómo comunicarse con la IA.
---
# Hablarle a la IA
`);

writeUTF8(path.join(d03, 'diseñador-junior.mdx'), `---
title: IA = Diseñador Junior
description: La IA es un diseñador junior brillante con amnesia.
---
# El diseñador junior con amnesia

![Junior brillante](/images/slides/3-1-junior.svg)
`);

writeUTF8(path.join(d03, 'imagen-vs-texto.mdx'), `---
title: Imagen vs Texto
description: Una imagen vale más que cien adjetivos.
---
# Imagen vs Texto

![Referente](/images/slides/3-2-referente.svg)
`);

writeUTF8(path.join(d03, 'iteracion.mdx'), `---
title: El método 3-3-1
description: Iteración y mejora.
---
# Iteración

![Iteracion](/images/slides/3-3-iteracion.svg)
`);

// 04-proceso
const d04 = path.join(outputDir, '04-proceso');
writeMeta(d04, 'Proceso Paso a Paso', ['paso-1-pinterest', 'paso-2-importar', 'paso-3-prompt', 'paso-4-verificacion', 'paso-5-iteracion']);

writeUTF8(path.join(d04, 'paso-1-pinterest.mdx'), `---
title: 1. Pinterest
description: Búsqueda de referentes
---
# Paso 1: Pinterest

![Paso 1](/images/slides/4-1-pinterest.svg)
`);

writeUTF8(path.join(d04, 'paso-2-importar.mdx'), `---
title: 2. Importar
description: Importar referentes a ChatGPT
---
# Paso 2: Importar

![Paso 2](/images/slides/4-2-importar.svg)
`);

writeUTF8(path.join(d04, 'paso-3-prompt.mdx'), `---
title: 3. Prompt
description: El prompt exacto
---
# Paso 3: El prompt

![Paso 3](/images/slides/4-3-prompt.svg)
`);

writeUTF8(path.join(d04, 'paso-4-verificacion.mdx'), `---
title: 4. Verificación
description: Checklist de calidad
---
# Paso 4: Verificación

![Paso 4](/images/slides/4-4-verificacion.svg)
`);

writeUTF8(path.join(d04, 'paso-5-iteracion.mdx'), `---
title: 5. Iteración
description: Ajustar el output
---
# Paso 5: Iteración

![Paso 5](/images/slides/4-5-iteracion.svg)
`);

// 05-jingles-suno
const d05 = path.join(outputDir, '05-jingles-suno');
writeMeta(d05, 'Jingles SUNO', ['index']);
writeUTF8(path.join(d05, 'index.mdx'), `---
title: Jingles con SUNO
description: Generación de audio y jingles
---
# Diseño de jingles con SUNO
`);

// 06-glosario
const d06 = path.join(outputDir, '06-glosario');
writeMeta(d06, 'Glosario', ['index']);
writeUTF8(path.join(d06, 'index.mdx'), `---
title: Glosario de Prompting
description: Términos técnicos para IA
---
# Glosario técnico
`);

// 07-errores-comunes
const d07 = path.join(outputDir, '07-errores-comunes');
writeMeta(d07, 'Errores Comunes', ['index']);
writeUTF8(path.join(d07, 'index.mdx'), `---
title: Errores comunes
description: Lo que no debes hacer.
---
# Errores comunes
`);

// 08-recursos
const d08 = path.join(outputDir, '08-recursos');
writeMeta(d08, 'Recursos', ['index']);
writeUTF8(path.join(d08, 'index.mdx'), `---
title: Recursos y enlaces
description: Links útiles
---
# Recursos y enlaces
`);

// Final Root meta
writeMeta(outputDir, 'Guía DECOM', [
  'index',
  '01-fundamentos',
  '02-criterio-visual',
  '03-hablarle-ia',
  '04-proceso',
  '05-jingles-suno',
  '06-glosario',
  '07-errores-comunes',
  '08-recursos'
]);
