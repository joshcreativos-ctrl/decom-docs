# syntax=docker/dockerfile:1.7

# ============================================================
# Etapa 1: Instalación de dependencias (sin postinstall)
# ============================================================
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
# --ignore-scripts: skip fumadocs-mdx postinstall here.
# It needs next.config.* (not yet copied) and runs again in builder.
RUN npm ci --ignore-scripts

# ============================================================
# Etapa 2: Build de la aplicación
# ============================================================
FROM node:20-alpine AS builder
WORKDIR /app

# Build-time public env vars (Next.js los inyecta en el bundle)
ARG NEXT_PUBLIC_GPT_CUSTOM_URL
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_SITE_NAME
ENV NEXT_PUBLIC_GPT_CUSTOM_URL=${NEXT_PUBLIC_GPT_CUSTOM_URL}
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ENV NEXT_PUBLIC_SITE_NAME=${NEXT_PUBLIC_SITE_NAME}
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Now that next.config.mjs + source.config.ts + content/ are present,
# run the fumadocs-mdx postinstall so it picks the Next.js adapter.
RUN node node_modules/fumadocs-mdx/bin.js

RUN npm run build

# ============================================================
# Etapa 3: Imagen final de producción
# ============================================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
