# Wurqi Website

Marketing site for [Wurqi](https://wurqi.com) — an enterprise work management platform. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and content-driven pages.

## Prerequisites

- Node.js 22+
- npm 10+

## Local setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Next.js development server |
| `npm run build` | Production build (`output: "standalone"`) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run test` | Vitest unit/component tests |
| `npm run test:watch` | Vitest watch mode |
| `npm run test:e2e` | Playwright e2e (starts build + server) |
| `npm run format` | Prettier write |

## Environment

Copy `.env.example` to `.env.local` for local development. Key variables:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (SEO, OG, JSON-LD) |
| `CMS_API_URL` / `CMS_API_TOKEN` | Optional future CMS |
| `CRM_API_URL` / `CRM_API_KEY` | Optional CRM wiring (`src/lib/crm`) |
| `ANALYTICS_ID` | Optional analytics |
| `PLAYWRIGHT_BASE_URL` | E2E base URL (default `http://localhost:3000`) |

Never commit secrets. See [DEPLOYMENT.md](./DEPLOYMENT.md).

## Structure overview

```text
src/
  app/           # Next.js routes, API, sitemap, robots
  components/    # UI, layout, forms, marketing, product
  config/        # Site, nav, SEO defaults, pricing
  content/       # Typed page copy (features, solutions, blog, …)
  features/      # Page compositions (homepage, platform, landing)
  lib/           # Utils, SEO builders, validation, CRM/analytics stubs
  types/         # Shared domain types
e2e/             # Playwright specs
```

Content and IA live in `src/content/**` and `src/config/**`; UI consumes typed data. Details: [ARCHITECTURE.md](./ARCHITECTURE.md).

## Docs

- [ARCHITECTURE.md](./ARCHITECTURE.md) — layers, how to add pages
- [SEO.md](./SEO.md) — metadata, sitemap, structured data
- [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) — tokens, typography, components
- [DEPLOYMENT.md](./DEPLOYMENT.md) — Docker, env, CI/CD, standalone

## Docker

```bash
docker compose up --build
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the multi-stage image and standalone runtime.
