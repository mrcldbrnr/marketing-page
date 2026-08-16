/**
 * Copy for the /funktionen page. Each feature's "extra" content varies in
 * shape (plain bullets, a worked example, status badges, …), so `content` is
 * a discriminated union rather than one fixed shape — `FeatureRow` switches
 * on `content.kind` to render the right layout.
 */

export type FeatureContent =
  | { kind: "bulletsWithNote"; items: string[]; note: string }
  | { kind: "bulletsWithExample"; items: string[]; example: { search: string; hit: string; location: string } }
  | { kind: "statusExamples"; items: { label: string; status: string }[]; secondaryTitle: string; secondaryItems: string[] }
  | { kind: "pairs"; pairs: { from: string; to: string }[]; arrow: "→" | "↔"; note?: string }
  | { kind: "bulletsWithProgress"; items: string[]; example: { label: string; done: number; total: number } }
  | { kind: "badgeGroups"; groups: { label: string; kind: "zustand" | "status"; values: string[] }[]; note: string }
  | { kind: "sumList"; items: string[]; note: string };

export type Feature = {
  /** Short kicker label shown above the title, e.g. "Gegenstände erfassen". */
  kicker: string;
  title: string;
  description: string;
  /** Path under /public to the real UI screenshot. */
  visualSrc: string;
  /** Alt text for the screenshot. */
  visualCaption: string;
  content: FeatureContent;
};

export const funktionen = {
  intro: {
    title: "Alles, was du brauchst, um deine Sachen im Blick zu behalten.",
    description:
      "myown hilft dir, deine Dinge zu erfassen, zu finden, zu organisieren und im richtigen Moment zu nutzen.",
  },

  features: [
    {
      kicker: "Gegenstände erfassen",
      title: "Alles, was dir gehört. An einem Ort.",
      description: "Gegenstände können mit genau so vielen Informationen erfasst werden, wie benötigt.",
      visualSrc: "/screenshots/funktion1_erfassen.png",
      visualCaption: "Detailkarte eines erfassten Gegenstands in myown",
      content: {
        kind: "bulletsWithNote",
        items: [
          "Bild",
          "Name",
          "Marke / Hersteller",
          "Kategorie",
          "Standort",
          "Kaufdatum",
          "Kaufpreis",
          "Zustand",
          "Status",
          "Dokumente",
          "Notizen",
        ],
        note: "Nur der Name ist Pflicht.",
      },
    },
    {
      kicker: "Suchfunktion",
      title: "Weiss, wo deine Sachen sind.",
      description:
        "Die Suche berücksichtigt alle erfassten Felder und zeigt bereits während der Eingabe passende Treffer.",
      visualSrc: "/screenshots/funktion2_suche.gif",
      visualCaption: "Live-Suche im Inventar von myown",
      content: {
        kind: "bulletsWithExample",
        items: ["Kategorie", "Standort", "Zustand", "Status", "Kaufpreis", "Kaufdatum", "Marke / Hersteller"],
        example: { search: "Powerbank", hit: "Anker PowerCore", location: "Schlafzimmer → Schublade" },
      },
    },
    {
      kicker: "Dashboard",
      title: "Sieh, was deine Aufmerksamkeit braucht.",
      description: "Das Dashboard zeigt relevante Gegenstände als grosse Kacheln.",
      visualSrc: "/screenshots/funktion3_dashboard.png",
      visualCaption: "Dashboard mit Kacheln, die Aufmerksamkeit brauchen",
      content: {
        kind: "statusExamples",
        items: [
          { label: "Velo", status: "In Reparatur" },
          { label: "Inlineskates", status: "Wartung notwendig" },
          { label: "Kopfhörer", status: "Defekt" },
          { label: "ausgeliehene oder nicht verfügbare Gegenstände", status: "Ausgeliehen" },
        ],
        secondaryTitle: "Zusätzlich zeigt das Dashboard",
        secondaryItems: ["Anzahl Gegenstände", "Kaufwerte", "Übersicht nach Kategorien"],
      },
    },
    {
      kicker: "Standorte",
      title: "Jeder Gegenstand hat seinen Platz.",
      description: "Standorte werden zweistufig erfasst.",
      visualSrc: "/screenshots/funktion4_standorte.png",
      visualCaption: "Zweistufige Standort-Verwaltung in den Einstellungen",
      content: {
        kind: "pairs",
        arrow: "→",
        pairs: [
          { from: "Küche", to: "Vorratsschrank" },
          { from: "Keller", to: "Veloraum" },
          { from: "Büro", to: "Schublade" },
        ],
        note: "So lässt sich nicht nur erkennen, in welchem Raum etwas liegt, sondern bei Bedarf auch der genaue Aufbewahrungsort.",
      },
    },
    {
      kicker: "Verknüpfungen",
      title: "Was zusammengehört, bleibt zusammen.",
      description: "Gegenstände können miteinander verknüpft werden.",
      visualSrc: "/screenshots/funktion5_verknuepfen.png",
      visualCaption: "Dialog zum Verknüpfen zweier Gegenstände",
      content: {
        kind: "pairs",
        arrow: "↔",
        pairs: [
          { from: "Ski", to: "Skischuhe" },
          { from: "Velo", to: "Helm" },
          { from: "Kamera", to: "Stativ" },
          { from: "Laptop", to: "Ladegerät" },
        ],
        note: "Verknüpfungen funktionieren beidseitig.",
      },
    },
    {
      kicker: "Packlisten",
      title: "Pack, was du schon hast.",
      description: "Packlisten werden direkt aus dem bestehenden Inventar erstellt.",
      visualSrc: "/screenshots/funktion6_packliste.png",
      visualCaption: "Packliste mit Fortschrittsanzeige",
      content: {
        kind: "bulletsWithProgress",
        items: [
          "Packliste erstellen",
          "Gegenstände auswählen",
          "nach Kategorien gruppieren",
          "als eingepackt markieren",
          "Packfortschritt anzeigen",
          "Hinweise bei nicht verfügbaren Gegenständen",
          "verknüpfte Gegenstände als Ergänzung anzeigen",
        ],
        example: { label: "Weekend Tessin", done: 8, total: 12 },
      },
    },
    {
      kicker: "Zustand und Status",
      title: "Bereit, wenn du es brauchst.",
      description: "Zustand und Status werden getrennt geführt.",
      visualSrc: "/screenshots/funktion7_zustand-status.png",
      visualCaption: "Gegenstand mit separat ausgewiesenem Zustand und Status",
      content: {
        kind: "badgeGroups",
        groups: [
          { label: "Zustand", kind: "zustand", values: ["Neu", "Sehr gut", "Gut", "Stark gebraucht", "Defekt"] },
          {
            label: "Status",
            kind: "status",
            values: ["Einsatzbereit", "Wartung notwendig", "In Reparatur", "Ausgeliehen", "Nicht verfügbar", "Aussortiert"],
          },
        ],
        note: "Dadurch kann ein Gegenstand z. B. in sehr gutem Zustand, aber momentan in Reparatur sein.",
      },
    },
    {
      kicker: "Archiv",
      title: "Auch Dinge, die nicht mehr da sind, bleiben nachvollziehbar.",
      description: "Gegenstände können als Aussortiert markiert werden.",
      visualSrc: "/screenshots/funktion8_archiv.png",
      visualCaption: "Liste aussortierter Gegenstände mit Grund",
      content: {
        kind: "bulletsWithNote",
        items: ["Verkauft", "Verschenkt", "Verloren", "Gestohlen", "Zerstört", "Entsorgt"],
        note: "Aussortierte Gegenstände werden im aktiven Inventar ausgeblendet, bleiben aber nachvollziehbar.",
      },
    },
    {
      kicker: "Kaufwerte",
      title: "Wissen, was du investiert hast.",
      description: "myown zeigt die Summe der hinterlegten Kaufpreise.",
      visualSrc: "/screenshots/funktion9_wert.png",
      visualCaption: "Kaufpreissumme, nach Kategorie gefiltert",
      content: {
        kind: "sumList",
        items: ["gesamtes Inventar", "nach Kategorien"],
        note: "Es wird bewusst kein aktueller Zeitwert berechnet.",
      },
    },
  ] satisfies Feature[],

  cta: {
    title: "Alles im Blick. Alles am richtigen Ort.",
    label: "myown entdecken",
  },
} as const;
