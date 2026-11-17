# SEO

Centralized, crawlable SEO for the Wurqi marketing site. Canonical URLs and structured data use `NEXT_PUBLIC_SITE_URL` / `siteConfig.url`.

## Metadata

- Defaults live in `src/config/seo.ts` (`seoDefaults` by `SeoPageType`, `buildMetadata`).
- Pages should call `createPageMetadata` from `src/lib/seo/metadata.ts` (thin wrapper over `buildMetadata`).
- Every indexable page needs a unique title and description.
- Output includes canonical (`alternates.canonical`), Open Graph, Twitter card, and robots directives.
- `metadataBase` is set from `siteConfig.url`.
- Default OG image: `/og/default.png`.

Example:

```ts
export const metadata = createPageMetadata({
  pageType: "feature",
  path: "/platform/goals",
  title: "Goals & OKRs — Wurqi",
  description: "…",
});
```

## Sitemap

- Implemented in `src/app/sitemap.ts`.
- Includes static paths from `sitemapPaths` in `src/config/navigation.ts`.
- Dynamically adds platform features, solutions, blog posts, and case studies via content helpers.
- Served at `/sitemap.xml`.

## Robots

- `src/app/robots.ts`.
- Non-production (`NODE_ENV` / `VERCEL_ENV` not production): disallow all.
- Production: allow `/`, disallow `/api/`, point to sitemap and host.

## Structured data (JSON-LD)

Builders in `src/lib/seo/structured-data.ts`:

| Helper | Schema |
| --- | --- |
| `organizationJsonLd` | Organization |
| `websiteJsonLd` | WebSite (+ SearchAction) |
| `softwareApplicationJsonLd` | SoftwareApplication |
| `articleJsonLd` | Article |
| `breadcrumbJsonLd` | BreadcrumbList |
| `faqPageJsonLd` | FAQPage |

Embed via `StructuredData` (`src/components/seo/StructuredData.tsx`) using `stringifyJsonLd` — trusted serialization only (no user HTML).

## Landing pages

- Copy and keywords in `src/content/landing/pages.ts`.
- Routes use `createLandingRoute(slug)` for page + `generateMetadata`.
- Target high-intent queries (e.g. project / work management software) without stuffing.

## Content honesty

- Blog samples: `isSample: true`.
- Case studies: `isIllustrative: true` with placeholder customer labels.
- Never claim real customers or outcomes without approved source content.

## Redirects

Configured in `next.config.ts`: `/blog` → `/resources/blog`, `/case-studies` → `/resources/case-studies`, `/demo` → `/book-demo`.
