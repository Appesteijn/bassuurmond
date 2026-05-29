# Multi-stage build voor optimale image size
FROM node:22-alpine AS base
RUN apk upgrade --no-cache

# Dependencies stage
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Builder stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_UMAMI_URL=https://analytics.campcraftbuilders.nl
ENV NEXT_PUBLIC_UMAMI_WEBSITE_ID=dd28f787-e68e-414f-9ae5-f24c40893868

RUN npm run build

# Runner stage
FROM base AS runner
RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3007

ENV PORT 3007
ENV HOSTNAME "0.0.0.0"

STOPSIGNAL SIGTERM

CMD ["node", "server.js"]
