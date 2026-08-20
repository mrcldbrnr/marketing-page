/**
 * Copy for the /funktionen page. Each feature's "extra" content varies in
 * shape (plain bullets, a worked example, status badges, …), so `content` is
 * a discriminated union rather than one fixed shape — `FeatureRow` switches
 * on `content.kind` to render the right layout.
 */

export type FeatureContent =
  | { kind: "bulletsWithNote"; items: string[]; note?: string }
  | {
      kind: "bulletsWithExample";
      items: string[];
      example?: { search: string; hit: string; location: string };
    }
  | {
      kind: "statusExamples";
      items: { label: string; status: string }[];
      secondaryTitle?: string;
      secondaryItems?: string[];
    }
  | { kind: "pairs"; pairs: { from: string; to: string }[]; arrow: "→" | "↔"; note?: string }
  | { kind: "bulletsWithProgress"; items: string[]; example: { label: string; done: number; total: number } }
  | { kind: "badgeGroups"; groups: { label: string; kind: "zustand" | "status"; values: string[] }[]; note?: string }
  | { kind: "sumList"; items: string[]; note?: string };

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
      "Erfassen, finden, vorbereiten, erinnern: myown macht aus deinen Gegenständen ein persönliches Inventar, das dir im Alltag Arbeit abnimmt. Du weisst, was du hast, wo es ist und ob es bereit ist, wenn du es brauchst.",
    /** Shorter variant for the meta description — the paragraph above is too long for a SERP snippet. */
    metaDescription:
      "myown macht aus deinen Gegenständen ein persönliches Inventar: erfassen, finden, vorbereiten, erinnern – alles an einem Ort.",
  },

  features: [
    {
      kicker: "Persönliches Inventar",
      title: "Alles, was dir wichtig ist. An einem Ort.",
      description:
        "Du musst nicht deinen ganzen Haushalt katalogisieren. Starte mit den Dingen, die du häufig suchst, verleihst oder unterwegs brauchst. Für einen neuen Gegenstand genügt zunächst ein Name – Bilder, Standort, Kaufpreis und weitere Angaben ergänzt du nur, wenn sie für dich nützlich sind.",
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
      },
    },
    {
      kicker: "Finden statt suchen",
      title: "Wisse, wo deine Sachen sind.",
      description:
        "Durchsuche dein Inventar in Windeseile: Die Textsuche berücksichtigt alle erfassten Angaben und zeigt bereits während der Eingabe passende Treffer. Zudem stehen verschiedene Filter und Sortierungen zur Verfügung.",
      visualSrc: "/screenshots/funktion2_suche.gif",
      visualCaption: "Live-Suche im Inventar von myown",
      content: {
        kind: "bulletsWithExample",
        items: ["Kategorie", "Standort", "Zustand", "Status", "Kaufpreis", "Kaufdatum", "Marke / Hersteller"],
      },
    },
    {
      kicker: "Dashboard",
      title: "Alles unter Kontrolle.",
      description:
        "Das Dashboard zeigt Gegenstände, die deine Aufmerksamkeit benötigen, als grosse Kacheln. Zudem bietet es einen schnellen Überblick über Kaufwert und Anzahl deines Besitzes.",
      visualSrc: "/screenshots/funktion3_dashboard.png",
      visualCaption: "Dashboard mit Kacheln, die Aufmerksamkeit brauchen",
      content: {
        kind: "statusExamples",
        items: [
          { label: "Velo", status: "In Reparatur" },
          { label: "Inlineskates", status: "Wartung notwendig" },
          { label: "Kopfhörer", status: "Defekt" },
          { label: "Racletteofen", status: "Ausgeliehen" },
        ],
      },
    },
    {
      kicker: "Standorte",
      title: "Jeder Gegenstand hat seinen Platz.",
      description:
        "Standorte können zweistufig erfasst werden. So lässt sich nicht nur erkennen, in welchem Raum etwas liegt, sondern bei Bedarf auch der genaue Aufbewahrungsort.",
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
      },
    },
    {
      kicker: "Gegenstände verknüpfen",
      title: "Halte zusammen, was zusammengehört.",
      description:
        "Manche Dinge machen zusammen einfach mehr Spass. Verbinde mit wenigen Klicks Gegenstände, die gemeinsam ein absolutes Dream Team bilden.",
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
      },
    },
    {
      kicker: "Packlisten",
      title: "Pack ein, was du schon hast.",
      description: "Erstelle Packlisten, fülle sie mit deinem bestehenden Inventar und hake ab, was du bereits eingepackt hast.",
      visualSrc: "/screenshots/funktion6_packliste.png",
      visualCaption: "Packliste mit Fortschrittsanzeige",
      content: {
        kind: "bulletsWithProgress",
        items: [
          "Packliste erstellen",
          "Gegenstände auswählen",
          "als eingepackt markieren",
          "Packfortschritt anzeigen",
          "Hinweis zu nicht verfügbaren Gegenständen",
          "verknüpfte Gegenstände als Vorschlag erhalten",
        ],
        example: { label: "Weekend Tessin", done: 8, total: 12 },
      },
    },
    {
      kicker: "Zustand und Status",
      title: "Bereit, wenn du es brauchst.",
      description:
        "Zustand und Status werden getrennt geführt. Dadurch kann ein Gegenstand z. B. in sehr gutem Zustand, aber momentan in Reparatur sein.",
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
      },
    },
    {
      kicker: "Archiv",
      title: "Auch Dinge, die nicht mehr da sind, bleiben nachvollziehbar.",
      description:
        "Gegenstände, die sich nicht mehr in deinem Besitz befinden, können als Aussortiert markiert werden. So bleiben dir auch diese stets in Erinnerung.",
      visualSrc: "/screenshots/funktion8_archiv.png",
      visualCaption: "Liste aussortierter Gegenstände mit Grund",
      content: {
        kind: "bulletsWithNote",
        items: ["Verkauft", "Verschenkt", "Verloren", "Gestohlen", "Zerstört", "Entsorgt"],
      },
    },
    {
      kicker: "Kaufwerte",
      title: "Wissen, was du investiert hast.",
      description:
        "myown summiert die hinterlegten Kaufpreise deiner Gegenstände. So siehst du auf einen Blick, welchen Kaufwert du in deinem Inventar erfasst hast – insgesamt oder nach einzelnen Kategorien.",
      visualSrc: "/screenshots/funktion9_wert.png",
      visualCaption: "Kaufpreissumme, nach Kategorie gefiltert",
      content: {
        kind: "sumList",
        items: ["gesamtes Inventar", "einzelne Kategorien"],
      },
    },
  ] satisfies Feature[],

  cta: {
    title: "myown selbst ausprobieren",
    description:
      "Entdecke die aktuellen Funktionen in der Live-Demo. Du brauchst weder ein Konto noch eine Registrierung – einfach öffnen und ausprobieren.",
    label: "Live-Demo öffnen",
  },
} as const;
