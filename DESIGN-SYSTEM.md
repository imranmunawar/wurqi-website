# Design system

Premium enterprise SaaS look: cool navy/slate surfaces with teal accent. Light theme only. Tokens live in `src/app/globals.css`.

## Tokens

### Color

- **Brand (teal):** `--color-brand-50` … `--color-brand-900` (accent ≈ `--color-brand-500` / `#0f766e`).
- **Navy:** `--color-navy-50` … `--color-navy-950` for text and secondary actions.
- **Slate neutrals:** backgrounds, borders, muted text.
- **Semantic:** `--background`, `--surface`, `--surface-muted`, `--border`, `--accent`, `--text-*`, feedback (`--success`, `--warning`, `--danger`, `--info`).

Use CSS variables (or Tailwind `@theme` mappings) — avoid one-off hex in components.

### Spacing & layout

- Scale: `--space-1` … `--space-32`.
- Containers: `--container-max` (72rem), `--container-wide`, `--container-narrow`, `--container-padding`.
- Sections: `--section-padding-y`; header: `--header-height`.

### Radius & elevation

- Radius: `--radius-sm` … `--radius-2xl`.
- Shadows: `--shadow-xs` … `--shadow-lg`, `--shadow-focus`.

### Z-index

`--z-dropdown` through `--z-toast` / `--z-max` for overlays and menus.

## Typography

Fonts: Geist Sans / Mono via `next/font` → `--font-sans`, `--font-display`, `--font-mono`.

Utility classes in `globals.css`:

| Class | Role |
| --- | --- |
| `.text-display` | Hero display |
| `.text-h1` … `.text-h4` | Headings |
| `.text-body-lg` / `.text-body` / body-sm | Body |
| `.text-caption` | Eyebrows / labels |

Sizes use fluid `clamp()` for display/H1/H2/H3.

## Components

Prefer primitives under `src/components/ui/`:

- **Actions:** `Button` (primary, secondary, ghost, outline; sm/md/lg; link or button).
- **Inputs:** `Input`, `Textarea`, `Select`, `Label`, `FormField`.
- **Layout:** `Container`, `Section`, `Card` (interaction/content grouping only when needed).
- **Display:** `Badge`, `Accordion`, `Tabs`, `Skeleton`.

Marketing building blocks: `CtaBanner`, `FaqSection`, product visuals under `src/components/product/`. Navigation: `Header`, `Footer`, `Breadcrumb`, mega/mobile nav.

Compose page sections in `src/features/**`; keep UI components presentational.

## Motion

CSS motion tokens:

- Easing: `--ease-standard`, `--ease-emphasized`.
- Duration: `--duration-fast` (150ms), `--duration-normal` (250ms), `--duration-slow` (400ms).

Framer Motion is used for intentional entrance/hierarchy (e.g. homepage hero product visual). Always respect `useReducedMotion()` — disable or shorten animation when reduced motion is preferred.

Guidelines:

- Prefer 2–3 purposeful motions per visually led surface; avoid noise.
- Transitions on interactive controls should use `--duration-fast` / `--ease-standard`.
- Do not add decorative glow stacks or gratuitous infinite loops.

## Accessibility

- Focus rings via `--ring` / `--shadow-focus`.
- Semantic landmarks, labeled forms, and breadcrumb `nav` with `aria-current` on the last item.
- External links opened in a new tab use `rel="noopener noreferrer"`.
