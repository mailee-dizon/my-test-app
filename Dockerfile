FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV TEST=test2

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV TEST=test2

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 101 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 8080

ENV PORT 8080

CMD ["npm", "start"]
