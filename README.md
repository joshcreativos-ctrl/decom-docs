# DECOM IPUC - Documentación IA

Este sitio es la documentación oficial de la capacitación sobre **IA aplicada al diseño gráfico**, dictada para el equipo DECOM (Departamento de Comunicaciones y Multimedia) de la IPUC a nivel regional.

Construido con un diseño editorial premium, modo oscuro y altamente enfocado en guiar a los comunicadores y diseñadores en el uso correcto de modelos generativos sin perder el criterio humano.

## 🛠 Stack Técnico

- **Framework:** Next.js (App Router)
- **Documentación:** Fumadocs (MDX)
- **Estilos:** Tailwind CSS v4
- **Tipografías:** Instrument Serif (títulos) e Inter (cuerpo)
- **Despliegue:** Docker (Standalone)

---

## 🚀 Instalación y Desarrollo Local

### 1. Variables de entorno
Copia el archivo de ejemplo:
\`\`\`bash
cp .env.example .env.local
\`\`\`

La variable \`NEXT_PUBLIC_GPT_CUSTOM_URL\` apunta al asistente especializado en jingles SUNO (**SUNO Cinematic Jingle Prompt Master**). Ya viene preconfigurada; modifícala solo si quieres apuntar a otro GPT.

### 2. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 3. Iniciar servidor
\`\`\`bash
npm run dev
\`\`\`
El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🐳 Despliegue con Docker

El proyecto incluye un \`Dockerfile\` multi-stage optimizado y un \`docker-compose.yml\` listo para producción.

### Construir y correr
\`\`\`bash
docker-compose up -d --build
\`\`\`
*(Asegúrate de que el archivo \`.env.local\` existe, ya que Docker Compose lo usará).*

---

## 📝 Gestión de Contenido

Toda la documentación está escrita en **MDX** (Markdown + React) y se encuentra en \`content/docs\`.

### Añadir o editar páginas
1. Ve a \`content/docs/\` y entra a la carpeta correspondiente.
2. Edita los archivos \`.mdx\` o crea uno nuevo.
3. Si creas uno nuevo, no olvides agregarlo al \`meta.json\` de esa carpeta para que aparezca en el menú lateral con el orden deseado.

### Reemplazar imágenes
Los placeholders actuales son SVGs básicos. Para subir las imágenes reales de la capacitación:
1. Ve a \`public/images/slides/\`
2. Reemplaza cada archivo \`.jpg\` con la imagen real, manteniendo el **mismo nombre exacto** (ej. \`1-1-jerarquia.jpg\`).
3. Reemplaza el logo en \`public/images/logo.svg\` por el logo oficial de DECOM.
4. Reemplaza el Open Graph en \`public/images/og-image.jpg\` para la vista previa de enlaces.

---

**Josh Creativos — DECOM IPUC**
