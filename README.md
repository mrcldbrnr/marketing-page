# Marketing Page

Grundgerüst für eine Marketing-Website: Next.js 16 (App Router), React 19,
Tailwind CSS v4, TypeScript — deployt auf Vercel.

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
| Seiten | `/`, `/funktionen`, `/preisplan`, `/warum-myown`, `/faq`, `/ueber-uns`, `/kontakt`, `/impressum`, `/datenschutz`, 404 |
| Landing-Sections | Hero, Funktionen, Testimonials, FAQ, CTA |
| Shell | Sticky Header mit Mobile-Menü, Footer, Skip-Link |
| SEO | Metadata-Helper mit Canonicals, `sitemap.xml`, `robots.txt`, OG-Image |
| Formular | Kontaktformular mit Server Action, Validierung und Honeypot |
| Design | Token-basiertes Farbsystem, Light/Dark über `prefers-color-scheme` |

## Inhalte ändern

Sämtliche Texte liegen in `src/content/` — die Komponenten enthalten keine Copy:

- `site.ts` – Name, Beschreibung, Kontaktdaten, Navigation, Footer
- `landing.ts` – Startseite (Hero, Funktionen, Testimonials, FAQ, CTA)
- `pricing.ts` – Preispläne auf `/preisplan`
- `why.ts` – Differenzierungspunkte auf `/warum-myown`

Farben und Abstände: `src/app/globals.css` (Tailwind v4 hat keine
`tailwind.config.js`). Die Brand-Farbe ist die `--color-brand-*`-Skala.

## Deployment

Repository in Vercel importieren — Next.js wird automatisch erkannt, weitere
Konfiguration ist nicht nötig. Für korrekte absolute URLs `NEXT_PUBLIC_SITE_URL`
in den Projekt-Einstellungen auf die echte Domain setzen (siehe `.env.example`).
Preview-Deployments werden über `robots.txt` automatisch von der Indexierung
ausgenommen.

## Offene Punkte

- Das Kontaktformular **versendet noch nichts**: Der Versand ist in
  `src/app/kontakt/actions.ts` als TODO markiert.
- `/impressum` und `/datenschutz` enthalten Platzhaltertext und müssen vor dem
  Livegang durch geprüfte Inhalte ersetzt werden.
- Logo und Produkt-Screenshot sind Platzhalter.

Konventionen und Architektur für die Arbeit mit Claude Code: siehe [CLAUDE.md](CLAUDE.md).
