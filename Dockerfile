# Static export only — build Next.js `out/` and serve with `serve` (Railway sets PORT)
FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Baked into static HTML at build time — set these in Railway (or pass --build-arg)
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_BOOKING_URL
ARG NEXT_PUBLIC_WHATSAPP_E164
ARG NEXT_PUBLIC_CONTACT_ENDPOINT
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_BOOKING_URL=$NEXT_PUBLIC_BOOKING_URL
ENV NEXT_PUBLIC_WHATSAPP_E164=$NEXT_PUBLIC_WHATSAPP_E164
ENV NEXT_PUBLIC_CONTACT_ENDPOINT=$NEXT_PUBLIC_CONTACT_ENDPOINT
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g serve@14.2.4
COPY --from=builder /app/out ./out
EXPOSE 3000
CMD ["sh", "-c", "serve out -l tcp://0.0.0.0:${PORT:-3000}"]
