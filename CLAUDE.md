# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Marketing website for **myown**, a personal-inventory app: Next.js 16 (App Router),
React 19, Tailwind CSS v4 and TypeScript. Deployed on Vercel. The site is fully
static — every page is prerendered at build time, and there is no server-side
runtime code (no Server Actions, no API routes).

Site copy is German (`lang="de-CH"`). Code, comments and this file are English.

## Commands

```bash
npm run dev      # dev server (Turbopack) on http://localhost:3000
npm run build    # production build — run this before declaring work done
npm run lint     # ESLint (next/core-web-vitals + typescript)
```

There is no test suite yet. `npm run build` type-checks the whole project, so it is
the primary verification step.

## Architecture

```
src/
  app/                    # routes (App Router), one folder per URL segment
    layout.tsx            # <html>, fonts, header/footer shell, skip link, JSON-LD, base metadata
    page.tsx              # landing page — composes sections, holds no copy
    globals.css           # design tokens + base layer (see "Styling")
    opengraph-image.tsx   # site-wide OG image via next/og
    robots.ts, sitemap.ts # generated from getBaseUrl()
  components/
    layout/               # SiteHeader, SiteFooter, Logo — the persistent shell
    sections/             # full page bands: Hero, Problem, FeatureRow, Faq, Cta, …
    ui/                   # primitives: Button, Container, Section, Icon, Prose, StatusBadge
    seo/                  # <JsonLd> — renders a structured-data <script> tag
  content/                # ALL user-facing copy, as typed objects
  lib/                    # cn(), metadata helpers, schema.ts (JSON-LD builders)
```

### The content/component split

This is the most important convention here. Components contain **no marketing copy**.
Everything a marketer would want to change lives in `src/content/`:

- `site.ts` — brand name, tagline, legal contact details, header/footer navigation
- `landing.ts` — homepage sections (hero, problem, benefits, teasers, closing CTA)
  **and** the full FAQ question/answer list, shared between the homepage teaser and `/faq`
- `funktionen.ts` — the 9 features shown on `/funktionen`
- `pricing.ts` — Free/Pro plans shown on `/preisplan`
- `why.ts` — usecases, the "Ein Tag mit myown" story, testimonials and press mentions on `/warum-myown`
- `faq.ts` — hero copy for `/faq` (the questions themselves live in `landing.ts`)

Sections import their own content module directly, so page files stay a plain list
of sections. **When asked to change wording, edit `src/content/` — not the
component.** When asked to change layout or styling, edit the component.

### Composition rules

- `<Section>` is the standard page band: it applies the vertical rhythm
  (`py-section`), an optional `tone="surface"` tint, and wraps children in a
  `<Container>`. Prefer it over a bare `<section>`. Adjacent sections alternate
  `tone="surface"`/default to create banding (see `/funktionen`, where each of the
  9 features is its own `<Section>` alternating tone).
- `<Container>` owns the horizontal gutter and max width. Never add `mx-auto max-w-*`
  by hand.
- `<SectionHeading>` renders eyebrow + heading + description. Pass `as="h1"` on pages
  where the section carries the page title — there must be exactly one `h1` per page.
- Use `<ButtonLink>` for navigation and `<Button>` for real buttons. For button styling
  on some other element, call `buttonVariants({ … })`.

### Server vs. client components

Everything is a Server Component by default. `"use client"` is currently only in
`SiteHeader` (mobile menu state) and `UsecaseSlider` (auto-advancing tabbed slider on
`/warum-myown`). Keep it that way: push interactivity into a small leaf component
rather than marking a page.

## Styling

Tailwind v4 — configuration lives in `src/app/globals.css`, **there is no
`tailwind.config.js`**. Do not create one.

- Static tokens (brand scale, fonts, section spacing) are declared in `@theme`.
- Colours that change between light and dark are plain CSS variables on `:root`,
  overridden in a `prefers-color-scheme: dark` block, and exposed to utilities via
  `@theme inline`.

Use the semantic tokens (`bg-background`, `bg-surface`, `text-foreground`,
`text-muted`, `border-border`, `bg-accent`, `text-accent-foreground`) for anything
that should keep following the theme.

**Large parts of the site are deliberately pinned to fixed colours and do not follow
dark mode.** The header background, the footer, all CTA boxes, and most blue accents
(borders, checkmarks, links) are hard-coded to literal `#0000ff` / `#ffffff` rather
than the theme tokens — this was an explicit, repeated design decision made across many
requests, not an oversight. When touching these areas, match the existing pinned-hex
pattern rather than "fixing" it back to semantic tokens. Components that were *not*
explicitly pinned (plain body text, some borders, legal-page prose) still use the
semantic tokens and do still follow `prefers-color-scheme`.

Dark mode follows the OS setting, but only from the `md` breakpoint (768px) up — the
dark-mode media query in `globals.css` is `(prefers-color-scheme: dark) and
(min-width: 768px)`, so mobile viewports always render the light theme regardless of
OS setting. There is no toggle. Adding one means switching the media query to a
`data-theme` selector plus a client-side toggle.

Merge incoming `className` props with `cn()` from `@/lib/cn` so callers can override.

## SEO / structured data

- `createMetadata()` in `src/lib/metadata.ts` sets canonical URL, OG and Twitter tags
  for every page **except** the homepage, which sets `Metadata` directly in
  `app/page.tsx` with `title: { absolute: … } }` instead of a plain string. This is
  intentional: the homepage's title is identical to the root layout's `default` title,
  and a plain string would get run through the `"%s | myown"` template and double up
  the brand name. Don't "simplify" this back to `createMetadata()`.
- `organizationAndWebsiteSchema()` and `faqPageSchema()` in `src/lib/schema.ts` build
  JSON-LD objects; render them with `<JsonLd data={…} />` from `src/components/seo/`.
  `Organization`/`WebSite` is rendered once, sitewide, in the root layout.
  `FAQPage` is rendered on `/faq` (all questions) and on the homepage (only the 3
  questions actually shown in the teaser — keep the schema in sync with what's
  visible, don't mark up hidden/unrelated questions).

## Adding a page

1. Create `src/app/<segment>/page.tsx`.
2. Export metadata via the helper — it sets canonical URL, OG and Twitter tags:
   ```ts
   export const metadata = createMetadata({ title: "…", description: "…", path: "/…" });
   ```
3. Put copy in a `src/content/` module if there is more than a sentence of it.
4. Add the route to `src/app/sitemap.ts`.
5. Add it to `mainNav` and/or `footerNav` in `src/content/site.ts` if it should be linked.

German URL segments are used deliberately (`/funktionen`, `/preisplan`, `/warum-myown`,
`/faq`, `/impressum`, `/datenschutz`). Keep new routes consistent with that.

## Deployment (Vercel)

Zero-config: Vercel detects Next.js, `npm run build` is the build command. No
`vercel.json` is needed unless redirects or headers get added.

`getBaseUrl()` in `src/lib/metadata.ts` resolves absolute URLs in this order:
`NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` (production) → `VERCEL_URL`
(previews) → `localhost:3000` in dev → `siteConfig.url`. Set `NEXT_PUBLIC_SITE_URL`
to the real domain in Vercel once it is known; until then update `siteConfig.url`
(currently still the placeholder `https://example.com`).

`robots.ts` disallows crawling on any non-production Vercel environment, so preview
deployments stay out of search results. Keep that behaviour.

## Gotchas

- **There is no contact form.** The former `/kontakt` page and its Server Action were
  removed. Contact info now only appears as text on `/impressum` and `/datenschutz`.
  Don't reintroduce a form without being asked — and if asked, it needs a real delivery
  mechanism (Resend, Postmark, …) from the start, since there's no existing TODO wiring
  to build on anymore.
- The `react-hooks/set-state-in-effect` lint rule is enforced. To reset state on
  navigation, adjust state during render (see `SiteHeader`) instead of `useEffect`.
- Tailwind classes do not work inside `opengraph-image.tsx` — `ImageResponse` only
  supports inline styles and a flex-based subset of CSS.
- Legal pages (`/impressum`, `/datenschutz`) contain clearly marked placeholder text.
  Never present them as reviewed legal content.
- The FAQ uses native `<details>`/`<summary>` — accessible without JS. All items in one
  `<Faq>` instance share a `name` attribute, which makes the browser treat them as an
  exclusive accordion group (opening one closes the others) natively, with no
  JavaScript. Don't replace any of this with a JS accordion without a reason.
