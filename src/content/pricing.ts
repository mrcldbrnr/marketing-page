/**
 * Copy for the /preisplan page. Free and Pro differ enough in shape (a plain
 * feature checklist with a real price vs. named highlight blocks with their
 * own description, marked "Geplant" with no price yet) that `Plan` is a
 * discriminated union rather than one fixed shape.
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
      badge: string;
      description: string;
      highlights: { title: string; description: string }[];
      note: string;
    };

export const pricing = {
  hero: {
    title: "Jetzt kostenlos starten.",
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
      badge: "Geplant",
      description: "Alles aus myown Free plus zusätzliche Komfortfunktionen:",
      highlights: [
        {
          title: "Automatische Produkterkennung",
          description: "Fotografiere einen Gegenstand und lass grundlegende Produktinformationen automatisch erkennen und ergänzen.",
        },
        {
          title: "Belege automatisch erfassen",
          description: "Fotografiere Quittungen und übernimm Angaben wie Kaufpreis, Kaufdatum oder Garantie direkt in myown.",
        },
        {
          title: "Direkt verkaufen",
          description: "Übertrage aussortierte Gegenstände direkt an angebundene Online-Marktplätze.",
        },
        {
          title: "Smart Packing",
          description: "Erhalte Packvorschläge passend zu Reiseziel, Wetter und den Gegenständen, die du bereits besitzt.",
        },
      ],
      note: "Wir benachrichtigen dich, sobald myown Pro verfügbar ist.",
    },
  ] satisfies Plan[],

  cta: {
    title: "myown selbst ausprobieren",
    description:
      "Entdecke die aktuellen Funktionen in der Live-Demo. Du brauchst weder ein Konto noch eine Registrierung – einfach öffnen und ausprobieren.",
    label: "Live-Demo öffnen",
  },
} as const;
