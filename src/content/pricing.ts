/**
 * Copy for the /preisplan page. Free and Pro differ enough in shape (a plain
 * feature checklist vs. named highlight blocks with their own description,
 * plus a monthly/yearly price pair) that `Plan` is a discriminated union
 * rather than one fixed shape.
 */

export type Plan =
  | {
      kind: "free";
      name: string;
      price: string;
      interval: string;
      description: string;
      features: string[];
    }
  | {
      kind: "pro";
      name: string;
      price: string;
      interval: string;
      priceYearly: string;
      intervalYearly: string;
      description: string;
      highlights: { title: string; description: string }[];
      note: string;
    };

export const pricing = {
  hero: {
    title: "Starte kostenlos. Hol dir mehr, wenn du mehr brauchst.",
    description:
      "Die Kernfunktionen von myown sind im Free-Plan kostenlos verfügbar. Für noch mehr Komfort, zusätzliche Funktionen und Services steht dir schon bald myown Pro zur Verfügung.",
  },

  plans: [
    {
      kind: "free",
      name: "myown Free",
      price: "CHF 0",
      interval: "/ Monat",
      description: "Für alle, die ihren Besitz übersichtlich organisieren und im Alltag besser nutzen möchten.",
      features: [
        "unbegrenzt Gegenstände erfassen",
        "Inventarliste mit Such- und Filterfunktion",
        "Dashboard",
        "Packlisten",
        "Zustand und Status",
        "Gegenstände verknüpfen",
        "Kaufwert-Übersicht",
        "Gegenstände aussortieren",
      ],
    },
    {
      kind: "pro",
      name: "myown Pro",
      price: "CHF 8",
      interval: "/ Monat",
      priceYearly: "CHF 79",
      intervalYearly: "/ Jahr",
      description: "Alles aus dem Free-Plan plus folgende Zusatzfunktionen:",
      highlights: [
        {
          title: "Automatische Produkterkennung mit KI",
          description: "Foto aufnehmen und Produktdetails automatisch ergänzen.",
        },
        {
          title: "Belege automatisch erfassen",
          description: "Quittungen fotografieren und Kaufpreis, Kaufdatum und Garantie automatisch übernehmen.",
        },
        {
          title: "Direkt verkaufen",
          description: "Gegenstände direkt aus myown auf angebundene Online-Marktplätze übertragen.",
        },
        {
          title: "Smart Packing",
          description: "Packvorschläge anhand von Reiseziel, Wetter und bereits vorhandenen Gegenständen.",
        },
      ],
      note: "Wir benachrichtigen dich, sobald myown Pro verfügbar ist.",
    },
  ] satisfies Plan[],

  cta: {
    title: "Jetzt testen und kostenlos starten",
    description:
      "Erlebe die Funktionen von myown in unserer Live-Demo – ganz ohne Login, Anmeldung und Registrierung. Unverbindlich und garantiert kostenlos.",
    label: "myown jetzt live testen",
  },
} as const;
