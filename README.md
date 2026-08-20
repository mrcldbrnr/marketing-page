# Marketing Page

Marketing-Website für **myown**, eine App fürs persönliche Inventar: Next.js 16
(App Router), React 19, Tailwind CSS v4, TypeScript — deployt auf Vercel.

**Live:** https://marketing-page-blond.vercel.app

## Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft danach auf http://localhost:3000.

```bash
npm run build   # Produktions-Build inkl. Typecheck
npm run lint    # ESLint
```

## Was drin ist

| Bereich | Inhalt |
| --- | --- |
| Seiten | `/`, `/funktionen`, `/preisplan`, `/warum-myown`, `/faq`, `/impressum`, `/datenschutz`, 404 |
| Landing-Sections | Hero, Problem/Bedürfnis, Drei Nutzen, Funktionen-Teaser, Preisplan-Teaser, Testimonial, FAQ-Teaser, CTA |
| Shell | Sticky Header (weiss, mit Mobile-Menü) mit externem CTA zur Live-Demo, Footer (Brand-Blau), Skip-Link |
| SEO | Metadata-Helper mit Canonicals, `sitemap.xml`, `robots.txt`, OG-Image, JSON-LD (`Organization`/`WebSite` sitewide, `FAQPage` auf `/faq` und im Homepage-Teaser) |
| Design | Token-basiertes Farbsystem, Brand-Blau (`#0000ff`) als Akzent; Header, Footer und CTA-Boxen sind bewusst auf feste Farben gepinnt und folgen dem OS-Farbschema **nicht** |

Es gibt aktuell **kein Kontaktformular** — die frühere `/kontakt`-Seite wurde
entfernt. Kontaktmöglichkeiten stehen nur noch als Text in `/impressum` und
`/datenschutz`.

## Inhalte ändern

Sämtliche Texte liegen in `src/content/` — die Komponenten enthalten keine Copy:

- `site.ts` – Name, Tagline, Kontaktdaten (für Impressum/Datenschutz), Hauptnavigation, Footer-Links
- `landing.ts` – Startseite (Hero, Problem, Nutzen, Teaser-Sections, CTA) sowie die vollständige FAQ-Liste (`faq.items`), die sich Startseite und `/faq` teilen
- `funktionen.ts` – die 9 Kernfunktionen auf `/funktionen`
- `pricing.ts` – Free-/Pro-Plan auf `/preisplan`
- `why.ts` – Usecase-Slider, Story ("Ein Tag mit myown"), Testimonials und Medienberichte auf `/warum-myown`
- `faq.ts` – Hero-Text der `/faq`-Seite (die Fragen selbst kommen aus `landing.ts`)

Farben und Abstände: `src/app/globals.css` (Tailwind v4 hat keine
`tailwind.config.js`). Die Brand-Farbe ist `#0000ff`, teils als Token
(`--color-brand-*`), teils als fest verdrahteter Hex-Wert dort, wo Farben
unabhängig vom OS-Farbschema bleiben sollen (siehe oben).

## Deployment

Repository in Vercel importieren — Next.js wird automatisch erkannt, weitere
Konfiguration ist nicht nötig. Für korrekte absolute URLs `NEXT_PUBLIC_SITE_URL`
in den Projekt-Einstellungen auf die echte Domain setzen (siehe `.env.example`) —
aktuell zeigt `siteConfig.url` noch auf den Platzhalter `https://example.com`.
Preview-Deployments werden über `robots.txt` automatisch von der Indexierung
ausgenommen.

## Offene Punkte

- `/impressum` und `/datenschutz` enthalten Platzhaltertext und müssen vor dem
  Livegang durch geprüfte Inhalte ersetzt werden.
- Kontaktdaten in `site.ts` (E-Mail, Telefon, Adresse) sind noch Platzhalter.
- `siteConfig.url` zeigt noch auf `https://example.com` statt auf die echte Domain.
- Der Produkt-Screenshot im Hero-Bereich der Startseite ist weiterhin ein
  Platzhalter ("Screenshot / Produktvideo").

Konventionen und Architektur für die Arbeit mit Claude Code: siehe [CLAUDE.md](CLAUDE.md).
