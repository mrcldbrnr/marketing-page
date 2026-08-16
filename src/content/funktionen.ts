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
  title: string;
  description: string;
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
      title: "Alles, was dir gehört. An einem Ort.",
      description: "Gegenstände können mit genau so vielen Informationen erfasst werden, wie benötigt.",
      visualCaption: "UI-Screenshot oder beispielhafte Detailkarte eines Gegenstands",
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
      title: "Weiss, wo deine Sachen sind.",
      description:
        "Die Suche berücksichtigt alle erfassten Felder und zeigt bereits während der Eingabe passende Treffer.",
      visualCaption: "UI-Screenshot der Suche mit Live-Treffern",
      content: {
        kind: "bulletsWithExample",
        items: ["Kategorie", "Standort", "Zustand", "Status", "Kaufpreis", "Kaufdatum", "Marke / Hersteller"],
        example: { search: "Powerbank", hit: "Anker PowerCore", location: "Schlafzimmer → Schublade" },
      },
    },
    {
      title: "Sieh, was deine Aufmerksamkeit braucht.",
      description: "Das Dashboard zeigt relevante Gegenstände als grosse Kacheln.",
      visualCaption: "UI-Screenshot des Dashboards mit Kacheln",
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
      title: "Jeder Gegenstand hat seinen Platz.",
      description: "Standorte werden zweistufig erfasst.",
      visualCaption: "UI-Screenshot der Standort-Auswahl",
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
      title: "Was zusammengehört, bleibt zusammen.",
      description: "Gegenstände können miteinander verknüpft werden.",
      visualCaption: "UI-Screenshot verknüpfter Gegenstände",
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
      title: "Pack, was du schon hast.",
      description: "Packlisten werden direkt aus dem bestehenden Inventar erstellt.",
      visualCaption: "UI-Screenshot einer Packliste mit Fortschritt",
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
      title: "Bereit, wenn du es brauchst.",
      description: "Zustand und Status werden getrennt geführt.",
      visualCaption: "UI-Screenshot von Zustand- und Status-Badges",
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
      title: "Auch Dinge, die nicht mehr da sind, bleiben nachvollziehbar.",
      description: "Gegenstände können als Aussortiert markiert werden.",
      visualCaption: "UI-Screenshot der Aussortiert-Markierung",
      content: {
        kind: "bulletsWithNote",
        items: ["Verkauft", "Verschenkt", "Verloren", "Gestohlen", "Zerstört", "Entsorgt"],
        note: "Aussortierte Gegenstände werden im aktiven Inventar ausgeblendet, bleiben aber nachvollziehbar.",
      },
    },
    {
      title: "Wissen, was du investiert hast.",
      description: "myown zeigt die Summe der hinterlegten Kaufpreise.",
      visualCaption: "UI-Screenshot der Kaufwert-Übersicht",
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
