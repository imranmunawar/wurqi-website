# Deployment

## Next.js standalone

`next.config.ts` sets `output: "standalone"`. After `npm run build`, the runnable server is:

```text
.next/standalone/server.js
```

Static assets must be available beside the standalone output:

- `.next/static` → `.next/standalone/.next/static`
- `public` → `.next/standalone/public`

The Docker image copies these paths automatically.

## Docker

Multi-stage `Dockerfile` (Node 22 Alpine):

1. **deps** — `npm ci`
2. **builder** — `npm run build`
3. **runner** — non-root `nextjs` user, standalone output only, port `3000`

```bash
docker build -t wurqi-website .
docker run --rm -p 3000:3000 --env-file .env.example wurqi-website
```

Or production-like Compose:

```bash
docker compose up --build
```

Compose maps host `3000` → container `3000`, loads `.env.example`, and sets `NODE_ENV=production`. Override `NEXT_PUBLIC_SITE_URL` via the environment as needed.

`.dockerignore` excludes `node_modules`, `.next`, `.git`, env files, coverage, logs, tests, and most markdown.

## Environment

Use `.env.example` as the template. Required for correct SEO in production:

| Variable | Notes |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site origin (no trailing slash preferred) |
| `CMS_API_URL` / `CMS_API_TOKEN` | Optional |
| `CRM_API_URL` / `CRM_API_KEY` | Optional; wired through `src/lib/crm` |
| `ANALYTICS_ID` | Optional |
| `NEXT_PUBLIC_ANALYTICS_WRITE_KEY` | Optional client analytics |

Secrets must not be baked into the image or committed. Prefer runtime env / platform secret stores.

`robots.ts` allows indexing only when production (`NODE_ENV=production` or `VERCEL_ENV=production`).

## CI/CD notes

Suggested pipeline (matches PRD):

```text
lint → typecheck → unit tests → build → e2e → deploy preview → approve → production
```

Local equivalents:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e   # requires Playwright browsers
```

- Run unit tests before e2e.
- Install browsers once: `npx playwright install chromium`.
- E2E defaults to `http://localhost:3000` and starts `npm run dev` on that port (`reuseExistingServer: false`). Free the port or set `PLAYWRIGHT_PORT` / `PLAYWRIGHT_BASE_URL`.
- Production containers should run `node server.js` from the standalone output (not `next start`).
- Preview deployments should keep non-production robots disallow behavior unless intentionally overridden.
- Security headers (CSP, HSTS, frame denial, etc.) are set in `next.config.ts` for all routes.

## Hosting options

- **Container:** Docker / Compose / any OCI runtime using the standalone server.
- **Managed Node:** Run `node server.js` from the standalone folder after copying static + public assets.
- **Vercel / similar:** Compatible with Next App Router; still set `NEXT_PUBLIC_SITE_URL` and secrets in the platform UI.

Prefer managed/serverless for the marketing site unless enterprise policy requires containers.
