# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Marketing website built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and
TypeScript. Deployed on Vercel. All pages are statically prerendered; the only
server-side work is the contact form's Server Action.

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
    layout.tsx            # <html>, fonts, header/footer shell, skip link, base metadata
    page.tsx              # landing page — composes sections, holds no copy
    globals.css           # design tokens + base layer (see "Styling")
    opengraph-image.tsx   # site-wide OG image via next/og
    robots.ts, sitemap.ts # generated from getBaseUrl()
    kontakt/actions.ts    # "use server" — contact form handler
  components/
    layout/               # SiteHeader, SiteFooter, Logo — the persistent shell
    sections/             # full page bands: Hero, Features, Faq, Cta, …
    ui/                   # primitives: Button, Container, Section, Icon, Prose
    forms/                # interactive forms (client components)
  content/                # ALL user-facing copy, as typed objects
  lib/                    # cn(), metadata helpers
```

### The content/component split

This is the most important convention here. Components contain **no marketing copy**.
Everything a marketer would want to change lives in `src/content/`:

- `site.ts` — brand name, description, contact details, header/footer navigation
- `landing.ts` — hero, features, testimonials, FAQ, closing CTA
- `pricing.ts` — plans shown on `/preisplan`
- `why.ts` — differentiators shown on `/warum-myown`

Sections import their own content module directly, so `app/page.tsx` stays a plain
list of sections. **When asked to change wording, edit `src/content/` — not the
component.** When asked to change layout or styling, edit the component.

### Composition rules

- `<Section>` is the standard page band: it applies the vertical rhythm
  (`py-section`), an optional `tone="surface"` tint, and wraps children in a
  `<Container>`. Prefer it over a bare `<section>`.
- `<Container>` owns the horizontal gutter and max width. Never add `mx-auto max-w-*`
  by hand.
- `<SectionHeading>` renders eyebrow + heading + description. Pass `as="h1"` on pages
  where the section carries the page title — there must be exactly one `h1` per page.
- Use `<ButtonLink>` for navigation and `<Button>` for real buttons. For button styling
  on some other element, call `buttonVariants({ … })`.

### Server vs. client components

Everything is a Server Component by default. `"use client"` is currently only in
`SiteHeader` (mobile menu state) and `ContactForm` (`useActionState`). Keep it that
way: push interactivity into a small leaf component rather than marking a page.

## Styling

Tailwind v4 — configuration lives in `src/app/globals.css`, **there is no
`tailwind.config.js`**. Do not create one.

- Static tokens (brand scale, fonts, section spacing) are declared in `@theme`.
- Colours that change between light and dark are plain CSS variables on `:root`,
  overridden in a `prefers-color-scheme: dark` block, and exposed to utilities via
  `@theme inline`.

Use the semantic tokens rather than raw palette classes, so dark mode keeps working:
`bg-background`, `bg-surface`, `text-foreground`, `text-muted`, `border-border`,
`bg-accent`, `text-accent-foreground`. Reach for `text-zinc-*` / `bg-white` only when
a colour genuinely must not follow the theme.

Dark mode follows the OS setting; there is no toggle. Adding one means switching the
media query to a `data-theme` selector plus a client-side toggle.

Merge incoming `className` props with `cn()` from `@/lib/cn` so callers can override.

## Adding a page

1. Create `src/app/<segment>/page.tsx`.
2. Export metadata via the helper — it sets canonical URL, OG and Twitter tags:
   ```ts
   export const metadata = createMetadata({ title: "…", description: "…", path: "/…" });
   ```
3. Put copy in a `src/content/` module if there is more than a sentence of it.
4. Add the route to `src/app/sitemap.ts`.
5. Add it to `mainNav` and/or `footerNav` in `src/content/site.ts` if it should be linked.

German URL segments are used deliberately (`/preisplan`, `/warum-myown`, `/ueber-uns`,
`/kontakt`, `/impressum`).
Keep new routes consistent with that.

## Deployment (Vercel)

Zero-config: Vercel detects Next.js, `npm run build` is the build command. No
`vercel.json` is needed unless redirects or headers get added.

`getBaseUrl()` in `src/lib/metadata.ts` resolves absolute URLs in this order:
`NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` (production) → `VERCEL_URL`
(previews) → `localhost:3000` in dev → `siteConfig.url`. Set `NEXT_PUBLIC_SITE_URL`
to the real domain in Vercel once it is known; until then update `siteConfig.url`.

`robots.ts` disallows crawling on any non-production Vercel environment, so preview
deployments stay out of search results. Keep that behaviour.

## Gotchas

- **Contact form does not send anything yet.** `submitContactForm` validates, logs and
  returns success. The delivery integration goes at the marked TODO in
  `src/app/kontakt/actions.ts`. Do not claim the form sends mail until that is wired up.
- The `react-hooks/set-state-in-effect` lint rule is enforced. To reset state on
  navigation, adjust state during render (see `SiteHeader`) instead of `useEffect`.
- Tailwind classes do not work inside `opengraph-image.tsx` — `ImageResponse` only
  supports inline styles and a flex-based subset of CSS.
- Legal pages (`/impressum`, `/datenschutz`) contain clearly marked placeholder text.
  Never present them as reviewed legal content.
- The FAQ uses native `<details>`/`<summary>` — accessible without JS. Don't replace it
  with a JS accordion without a reason.
