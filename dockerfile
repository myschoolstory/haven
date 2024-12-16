# Use Node.js LTS version
FROM node:20-slim AS base

# Install dependencies needed for node-canvas and sharp
RUN apt-get update && apt-get install -y \
    build-essential \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY main/package.json main/package-lock.json ./

# Install dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY main .

# Environment variables must be present at build time
# https://nextjs.org/docs/basic-features/environment-variables
ARG DATABASE_URL
ARG NEXTAUTH_URL
ARG NEXTAUTH_SECRET
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG STRIPE_SECRET_KEY
ARG STRIPE_PUBLISHABLE_KEY
ARG WEBHOOK_SECRET
ARG MODAL_HOSTNAME
ARG MODAL_AUTH_TOKEN
ARG RESEND_KEY
ARG LOGTAIL_KEY
ARG LOGTAIL_ENV

ENV SKIP_ENV_VALIDATION=1

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js
RUN npm run build

# Production image, copy all files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Create tmp directory for file uploads
RUN mkdir -p /app/tmp && chown nextjs:nodejs /app/tmp

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
