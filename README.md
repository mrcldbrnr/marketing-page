# Dokumentation

## Links

Video-Walkthrough:
https://youtu.be/zMXNjHJsMeQ

Webseite:
https://marketing-page-blond.vercel.app/

Web-App:
https://web-app-zeta-ruddy-63.vercel.app/

Repositories:
https://github.com/mrcldbrnr/marketing-page
https://github.com/mrcldbrnr/web-app


## Projektbeschreibung

Im Modul «Viben und Coden» entwickelte ich «myown», eine Web-App zur Verwaltung persönlicher Gegenstände. Ziel war, jeglichen physischen Besitz – von Möbeln und Kleidung über Elektronik und Sportgeräte bis zu Küchenutensilien – zentral verwalten und digital abbilden zu können. 

Gegenstände können mit Basisdaten wie Name, Foto, Marke, Kategorie, Standort, Kaufpreis, Zustand und Status erfasst werden. So kann beispielsweise genau abgefragt werden, wie viel etwas gekostet hat, wo es aufbewahrt wird, in welchem Zustand es sich befindet, wann eine Wartung ansteht etc. 

Der Prototyp sollte bewusst überschaubar bleiben, weshalb ich mich auf wesentliche Funktionen beschränkte: Erfassen und Bearbeiten von Gegenständen (Kernfunktion), eine Inventarliste mit Suche und Filtern, ein Dashboard als Startseite sowie eine Packliste als praktisches Alltags-Feature.

Die Idee für die App stammt aus meiner eigenen Alltagserfahrung: Ich suche zu Hause regelmässig Gegenstände – ohne zu wissen, dass ich sie längst entsorgt habe. Ebenso vergesse ich immer wieder, Dinge rechtzeitig zu warten. So stand ich schon mit ungewachsten Ski auf der Piste oder startete mit einem platten Reifen zur Velotour. myown soll genau das verhindern.


## Entwicklungsprozess

Zu Beginn schärfte ich die Grundidee der App mithilfe von ChatGPT. In einer sehr strukturierten, rund dreistündigen Chat-Session konkretisierte ich den Funktionsumfang und die Spezifikationen der App: Vom Datenmodell der Einträge über die benötigten Eingabefelder und Zusatzfelder je Objektkategorie, die Darstellung des Dashboards bis hin zur Inventarliste und dem Packlisten-Feature. Auch wurden bereits erste Inputs und Entscheidungen zum Design getroffen und festgehalten.

Anhand des PRD Template aus dem Unterricht liess ich ChatGPT schliesslich ein detailliertes PRD erstellen. Dieses liess ich anschliessend durch Claude kritisch prüfen und anpassen. Diesen Prozess wiederholte ich ein weiteres Mal mit jedem der beiden KI-Modelle. Eine wichtige und auch witzige Erfahrung war, dass die beiden LLM Fehler oder Blindspots des jeweils anderen aufdeckten – sich gegenseitig aber auch dafür lobten. Das hat mir gezeigt, dass es durchaus Sinn macht, in eine komplexe Aufgabe mehr als ein KI-Modell einzubeziehen. Das finale PRD diente als Grundlage für die eigentliche Umsetzung in Claude Code, mit dem ich über den gesamten Verlauf iterativ zusammengearbeitet habe.

Schon vom ersten Entwicklungsstand, der von Claude Code erstellt wurde, war ich extrem begeistert. Aufbau und Funktionen der App waren genau, wie ich es mir vorgestellt hatte. Auch waren bereits Details darin enthalten, an die ich noch gar nicht gedacht hatte – beispielsweise die Darstellung von Labels, funktionalen Buttons oder Eigenschaften zur Sortierung der Inventarliste. Auch realistische Demo-Daten hat Claude Code erstellt, womit die App von Anfang an sinnvoll testbar war.

Der grösste Teil der Zusammenarbeit bestand aus vielen kleinen, aufeinanderfolgenden Anpassungsrunden: von Layout-Korrekturen über zusätzliche Funktionen (Gegenstände duplizieren, Schnellbearbeitungsmenüs, Notizfeld bei Packlisten) bis zum Aufbau eines konsistenten Design-Systems. Eine wichtige Erkenntnis dabei: Vage formulierte Anpassungswünsche wurden von Claude Code teils zu breit interpretiert; präzisere Formulierungen oder ein als Bild mitgelieferter Entwurf führten deutlich zuverlässiger zum gewünschten Resultat.

Mehrfach zeigten sich auch Darstellungsprobleme, die erst nach mehreren Korrekturrunden und genauer Fehlersuche (u. a. mit den Browser-Entwicklertools) sauber behoben werden konnten. Das hat mir gezeigt, dass automatisierte Prüfungen allein nicht ausreichen; erst die visuelle Kontrolle im Browser auf verschiedenen Bildschirmgrössen deckte einige Darstellungsfehler zuverlässig auf.

Nachdem ich mit Aufbau, Funktion und Design der Web-App zufrieden war, entwickelte ich mit ChatGPT die Struktur der Marketing-Website – mit Startseite, Funktionen, Preisplan, FAQ und Usecases. Für Claude Code entstanden dabei separate Inhaltsbriefings, welche ich in das Grundgerüst der Marketing-Website umsetzen liess. Die Anpassungen an Layout, Typografie und Struktur der einzelnen Seiten erfolgten danach wiederum iterativ mit vielen einzelnen Anpassungsrunden in Claude Code. 

Einen letzten Meilenstein bildete eine grosse Content-Überarbeitung: ChatGPT prüfte die veröffentlichte Website kritisch und lieferte eine strukturierte Liste an Verbesserungsvorschlägen. Diese liess ich von Claude Code selbstständig umsetzen – mit der expliziten Anweisung, bei Unklarheiten oder Widersprüchen nachzufragen.

### Prompt-Beispiele

Für die Web-App wurden bei Claude Code 118 Prompts/Nutzernachrichten eingegeben und für die Marketing-Website über 35 einzelne Prompts/Anpassungsrunden durchgeführt. Eine repräsentative Auswahl über verschiedene Arbeitstypen:

**Rebranding, global umgesetzt:**
> „passe den namen der app überall an. die marke heiss myown"

**Funktionsanpassung, präzise mit Regeln spezifiziert:**
> „die ansicht «zur packliste hinzufügen» soll alle packlisten mit datum in der Zukunft oder ohne Datum anzeigen. durch aktivieren einer checkbox kann gegenstand auf die liste hinzugefügt oder entfernt werden. Listen mit datum in der vergangenheit sollen nicht angezeigt werden"

**Funktionslücke entdeckt, mit Begründung gemeldet:**
> „in der packliste werden defekte gegenstände (z.B. Kopfhörer) aktuell nicht hervorgehoben. dies ist ein problem, da unter umständen ein kaputter gegenstand nicht erkannt wird. bitte zustand defekt in packliste anzeigen"

**Content-Überarbeitung** (nach ChatGPT-Review):
> „Hier ist die Liste [8 Verbesserungspunkte aus dem ChatGPT-Review]. Melde, wenn irgendwo Unklarheiten bestehen oder du anderer Meinung bist."

**Neue Funktion, präzise spezifiziert:**
> „Ich möchte eine Animation zwischen der Headline und dem Leadtext einfügen: die Bilder sollen nebeneinander in einer Endlosschleife von rechts nach links über den Screen laufen. Höhe der Bilder 300px, Durchlaufzeit pro Bild 7 Sekunden."

**Bugfixing / UX:**
> „Die Slider-Elemente im Abschnitt «So kann myown deinen Alltag erleichtern.» haben auf dem Mobile unterschiedliche Höhen. Der Inhalt unterhalb des Sliders verrutscht dadurch bei jedem Bildwechsel vertikal. Die Elemente sollten alle die Höhe des höchsten Elements übernehmen."


## SPEC-File
Das finale SPEC-File der Web-App ist in dessen Repository als separate Datei beigelegt
(PRD_Persoenliches-Inventar_final.md)


## Security-Checkliste

Sowohl Web-App als auch Marketing-Website wurden anhand der Security Checkliste durch
Claude Code geprüft. Die Ergebnisse sind in den jeweiligen README.md-Dateien eingetragen.
Für die Web-App liegt zudem die Security Checkliste als separate Datei bei.

## Persönliche Reflexion

Besonders überrascht war ich, wie leicht mir der Arbeitsprozess fiel und wie präzise meine Anweisungen umgesetzt wurden. Anfangs war ich noch vorsichtig und formulierte Anpassungen sehr ausführlich und detailliert. Mit der Zeit merkte ich aber, dass ich mich kürzer und einfacher fassen konnte, ohne dass die Qualität der Resultate darunter litt. Als wichtige Eingabemethode entdeckte ich Screenshots und Skizzen, die meine Vorstellungen oft präziser vermitteln als lange Textbeschreibungen.

Auf grössere Probleme bin ich nie gestossen. Herausfordernd war es jedoch, im Verlauf des Prozesses nicht die Übersicht zu verlieren. Während der Umsetzung kamen mir laufend neue Ideen, die ich ausprobieren wollte. Das ist auf die Dauer anstrengend und erfordert Durchhaltevermögen. Am meisten geholfen hat mir dabei, jeweils einen konkreten Plan zu haben, an dem ich mich orientieren konnte, statt einfach drauflos zu arbeiten.

Eine spannende Erkenntnis war, wie unterschiedlich ChatGPT und Claude bei der Überprüfung meines PRD vorgingen und sich dabei gegenseitig ergänzten, statt dieselben Punkte zu finden. Bei grösseren oder komplexeren Projekten werde ich dieses Vorgehen – bewusst mehrere Modelle gegeneinander gegenchecken zu lassen – wieder anwenden.

Die Umsetzung hat mir insgesamt grossen Spass gemacht. Nach einiger Zeit geriet ich jeweils in einen Flow-Zustand, in dem ich die Zeit vergass. Sowohl die iterative Konzeptionsphase mit ChatGPT als auch das Programmieren mit Claude Code fühlten sich streckenweise weniger wie die Bedienung eines Werkzeugs an, sondern eher wie die Zusammenarbeit mit einem Arbeitskollegen an einem gemeinsamen Projekt.

Am meisten mitnehmen werde ich, wie wichtig eine gute Planung und Vorbereitung für den Erfolg eines solchen Projekts ist. Das PRD war dabei eine wertvolle Hilfe, um von Anfang an schnell zu einem soliden Stand zu kommen. Beim nächsten Mal würde ich noch mehr Vorgaben zu Design und Inhalten von Beginn weg mitgeben, um noch gezielter zu besseren Ergebnissen zu kommen. Es war insgesamt viel Arbeit, aber ich bin sehr zufrieden mit dem Resultat – so sehr, dass ich ernsthaft überlege, myown für meinen eigenen Gebrauch tatsächlich weiterzuentwickeln und im Alltag zu nutzen.


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
