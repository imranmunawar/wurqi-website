# Architecture

Wurqi’s marketing site is content-driven: page copy and information architecture live in typed modules; routes and components compose them. Prefer KISS, DRY, and clear layer boundaries.

## Layers

```text
config  →  content / lib  →  components / features  →  app routes
```

| Layer | Path | Responsibility |
| --- | --- | --- |
| Config | `src/config/**` | Site URL, navigation, SEO defaults, pricing CTAs |
| Content | `src/content/**` | Features, solutions, blog, case studies, landing pages, homepage copy |
| Lib | `src/lib/**` | Pure helpers: `cn`, SEO JSON-LD, zod schemas, CRM/analytics stubs |
| Components | `src/components/**` | Reusable UI (no page-specific business rules) |
| Features | `src/features/**` | Page-level compositions (homepage sections, feature/solution shells) |
| App | `src/app/**` | Routes, layouts, metadata exports, API route handlers |
| Types | `src/types` | Shared domain interfaces — do not duplicate in content files |

Integrations (CRM, analytics) are pluggable stubs in `src/lib/**`. Register providers there; do not hardcode vendors in UI.

## App structure

- Marketing pages use the `(marketing)` route group with shared header/footer layout.
- Dynamic product pages: `/platform/[slug]`, `/solutions/[slug]`.
- Resources: `/resources/blog`, `/resources/case-studies` (legacy `/blog` and `/case-studies` redirect).
- SEO landings: top-level slugs such as `/project-management-software` via `createLandingRoute`.
- Conversion: `/book-demo`, `/contact`, `/pricing`.
- APIs: `/api/demo`, `/api/contact`, `/api/newsletter` — validate with zod, then hand off to CRM stubs.

## Content-driven pages

1. Define or extend a type in `src/types`.
2. Add data in the matching `src/content/**` module (array + `getBySlug` / `getAll*Slugs` helpers).
3. Wire sitemap entries if the route is public (`src/app/sitemap.ts` already maps feature/solution/blog/case-study slugs).
4. Keep dollar prices out of content — use `Custom` / sales CTAs from `src/config/pricing.ts`.

## How to add a platform feature

1. Append a `Feature` object to `platformFeatures` in `src/content/platform/features.ts` (`slug`, title, description, benefits, capabilities, faq, related).
2. Ensure `getFeatureBySlug` / `getAllFeatureSlugs` still cover the new slug (array-based helpers already do).
3. Optionally add a nav item under Platform in `src/config/navigation.ts`.
4. The route `/platform/[slug]` and `FeaturePage` render it; no new page file required.

## How to add a solution

1. Append a `Solution` to `src/content/solutions/solutions.ts`.
2. Optionally update Solutions nav in `src/config/navigation.ts`.
3. Visit `/solutions/[slug]` — rendered by `SolutionPage`.

## How to add a blog post

1. Append a `BlogPost` to `src/content/blog/posts.ts` (`slug`, title, excerpt, content, author, dates, tags, `isSample`).
2. Set `isSample: true` for placeholder marketing content — never present samples as real customer proof.
3. Post appears at `/resources/blog/[slug]` and in the sitemap.

## How to add an SEO landing page

1. Add a landing entry in `src/content/landing/pages.ts`.
2. Create a thin route under `src/app/(marketing)/<slug>/page.tsx` that calls `createLandingRoute("<slug>")` and re-exports `Page` + `generateMetadata`.
3. Confirm metadata via `createPageMetadata` / landing SEO defaults.

## Principles

- One concern per module; compose features from components + content.
- Prefer Server Components; mark `"use client"` only for interactivity (forms, menus, motion).
- No invented pricing amounts — sales-led CTAs only.
