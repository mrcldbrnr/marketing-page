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
| Landing-Sections | Hero (mit Bilder-Marquee), Problem/Bedürfnis, Drei Nutzen, Funktionen-Teaser, Preisplan-Teaser, Warum-myown-Teaser, FAQ-Teaser, CTA |
| Shell | Sticky Header (weiss, mit Mobile-Menü) mit externem CTA zur Live-Demo, Footer (Brand-Blau), Skip-Link |
| SEO | Metadata-Helper mit Canonicals, `sitemap.xml`, `robots.txt`, OG-Image, JSON-LD (`Organization`/`WebSite`/`WebApplication` sitewide, `FAQPage` auf `/faq` und im Homepage-Teaser) |
| Design | Token-basiertes Farbsystem, Brand-Blau (`#0000ff`) als Akzent; Header, Footer und CTA-Boxen sind bewusst auf feste Farben gepinnt und folgen dem OS-Farbschema **nicht**. Dark Mode folgt sonst dem OS-Setting, aber nur ab Desktop-Breite (768px) — auf Mobile bleibt es immer hell |

## Inhalte ändern

Sämtliche Texte liegen in `src/content/` — die Komponenten enthalten keine Copy:

- `site.ts` – Name, Tagline, Hauptnavigation, Footer-Links
- `landing.ts` – Startseite (Hero, Problem, Nutzen, Teaser-Sections, CTA) sowie die vollständige FAQ-Liste (`faq.items`), die sich Startseite und `/faq` teilen
- `funktionen.ts` – die 9 Kernfunktionen auf `/funktionen`
- `pricing.ts` – Free-/Pro-Plan auf `/preisplan`
- `why.ts` – Usecase-Slider, Story ("Ein Tag mit myown") und Closing-Teaser auf `/warum-myown`
- `faq.ts` – Hero-Text der `/faq`-Seite (die Fragen selbst kommen aus `landing.ts`)

Farben und Abstände: `src/app/globals.css` (Tailwind v4 hat keine
`tailwind.config.js`). Die Brand-Farbe ist `#0000ff`, teils als Token
(`--color-brand-*`), teils als fest verdrahteter Hex-Wert dort, wo Farben
unabhängig vom OS-Farbschema bleiben sollen (siehe oben).

## Deployment

Repository in Vercel importieren — Next.js wird automatisch erkannt, weitere
Konfiguration ist nicht nötig. Live-URL: https://marketing-page-blond.vercel.app
(feste Projekt-URL, da es sich um eine Projektarbeit ohne eigene Domain handelt —
`siteConfig.url` und `siteConfig.appUrl` sind entsprechend darauf gesetzt).
Preview-Deployments werden über `robots.txt` automatisch von der Indexierung
ausgenommen und sind zusätzlich über Vercel Deployment Protection abgesichert.

## Security

Letzter Check: 2026-08-21, anhand einer allgemeinen Security-Checkliste für
Claude-Code/Vercel-Projekte.

Automatisiert geprüft und in Ordnung:

- Keine Secrets im Code, im Repo oder in der Git-History (`.env*` korrekt in
  `.gitignore`, nur `.env.example` ist getrackt)
- Keine Secrets im Client-Bundle (einzige `NEXT_PUBLIC_`-Variable ist die
  unkritische `NEXT_PUBLIC_SITE_URL`)
- `npm audit` ohne Findings, alle Dependencies real und bekannt
- Keine ungeschützten API-Routes/Server Actions – die Seite ist komplett
  statisch, es gibt nichts, das serverseitig Auth/Autorisierung bräuchte

Behoben in diesem Rahmen:

- Security-Headers ergänzt (`next.config.ts` → `headers()`): Content-Security-Policy,
  `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Strict-Transport-Security`. Details siehe [CLAUDE.md](CLAUDE.md#security).

Manuell kontrolliert (nicht von einer Code-Änderung aus prüfbar):

- **Vercel Deployment Protection**: aktiv.
- **Vercel Spend Management / Usage Alerts**: auf dem Free-Plan nicht verfügbar,
  daher nicht anwendbar.
- **GitHub**: Secret Scanning & Push Protection, Branch Protection auf `main`,
  Dependabot Alerts (Repo: `mrcldbrnr/marketing-page`) — bei Bedarf erneut prüfen.
- Live-URL auf [securityheaders.com](https://securityheaders.com) geprüft: **Ergebnis A**.

## Offene Punkte

Keine offenen Blocker mehr für den Livegang. Bewusste Entscheidungen für dieses
Projekt (keine echte Firma/Domain, da Projektarbeit):

- Rechtliche Prüfung von `/impressum` und `/datenschutz` wird nicht durchgeführt
  — kein reales Unternehmen, die Seiten legen das im Disclaimer offen.
- `siteConfig.url` und `siteConfig.appUrl` zeigen bewusst auf die
  Vercel-Projekt-URL statt auf eine eigene Domain.

Konventionen und Architektur für die Arbeit mit Claude Code: siehe [CLAUDE.md](CLAUDE.md).
