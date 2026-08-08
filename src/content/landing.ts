/**
 * Copy for the landing page. Sections read from here, so rewriting the page
 * means editing this file — not the components.
 */

export const hero = {
  eyebrow: "Neu: Automatisierte Workflows",
  title: "Alles, was du hast. An einem Ort.",
  description:
    "Von der Idee bis zum Release: plane, priorisiere und liefere in einem Tool, das du wirklich gern benutzt.",
  primaryCta: { label: "Kostenlos starten", href: "/kontakt" },
  secondaryCta: { label: "Funktionen ansehen", href: "#funktionen" },
  note: "Keine Kreditkarte nötig · 14 Tage testen",
};

export const logos = {
  title: "Vertraut von Teams bei",
  items: ["Northwind", "Globex", "Initech", "Umbrella", "Soylent"],
};

export const features = {
  eyebrow: "Funktionen",
  title: "Gebaut für den Alltag, nicht für die Demo",
  description:
    "Jede Funktion löst ein konkretes Problem. Kein Feature-Zoo, den ohnehin niemand benutzt.",
  items: [
    {
      title: "Klare Planung",
      description:
        "Roadmaps, Sprints und Aufgaben in einer Ansicht. Alle sehen, was als Nächstes zählt.",
      icon: "map",
    },
    {
      title: "Automatisierte Workflows",
      description:
        "Wiederkehrende Schritte laufen von selbst. Weniger Statusmeetings, mehr Fortschritt.",
      icon: "bolt",
    },
    {
      title: "Verlässliche Zahlen",
      description: "Auslastung, Durchlaufzeit und Qualität – in Echtzeit statt im Monatsreport.",
      icon: "chart",
    },
    {
      title: "Sichere Zusammenarbeit",
      description: "Rollen, SSO und Audit-Logs ab dem ersten Tag. Hosting in der Schweiz und EU.",
      icon: "shield",
    },
    {
      title: "Offene Schnittstellen",
      description: "REST-API, Webhooks und fertige Integrationen für die Tools, die du schon hast.",
      icon: "plug",
    },
    {
      title: "Support, der antwortet",
      description: "Echte Menschen, mittlere Antwortzeit unter zwei Stunden während der Bürozeiten.",
      icon: "chat",
    },
  ],
} as const;

export const testimonials = {
  eyebrow: "Kundenstimmen",
  title: "Was Teams nach dem Umstieg sagen",
  items: [
    {
      quote:
        "Wir haben drei Tools ersetzt und trotzdem weniger Aufwand. Die Einführung dauerte einen Nachmittag.",
      author: "Lena Moser",
      role: "Head of Product, Northwind",
    },
    {
      quote:
        "Zum ersten Mal sehen wir ehrlich, wo ein Projekt steht – ohne dass jemand Zahlen zusammensucht.",
      author: "Tobias Frei",
      role: "CTO, Globex",
    },
    {
      quote: "Der Support hat uns beim Datenimport begleitet. Genau so stellt man sich das vor.",
      author: "Sara Keller",
      role: "Operations Lead, Initech",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  title: "Häufige Fragen",
  items: [
    {
      question: "Wie lange dauert die Einrichtung?",
      answer:
        "Die meisten Teams sind in unter einer Stunde startklar. Für Migrationen aus bestehenden Systemen unterstützen wir kostenlos.",
    },
    {
      question: "Wo liegen meine Daten?",
      answer:
        "In Rechenzentren in der Schweiz oder der EU – du wählst die Region bei der Einrichtung.",
    },
    {
      question: "Kann ich jederzeit kündigen?",
      answer:
        "Ja. Monatsabos sind auf Monatsende kündbar, Jahresabos zum Ablauf der Laufzeit. Ein Datenexport ist immer möglich.",
    },
    {
      question: "Gibt es Rabatte für Non-Profits?",
      answer:
        "Ja, gemeinnützige Organisationen und Bildungseinrichtungen erhalten 50 % Rabatt. Melde dich einfach bei uns.",
    },
  ],
};

export const cta = {
  title: "Bereit, es auszuprobieren?",
  description: "Starte kostenlos oder lass dir in 20 Minuten zeigen, wie es für dich aussieht.",
  primaryCta: { label: "Kostenlos starten", href: "/kontakt" },
  secondaryCta: { label: "Funktionen ansehen", href: "/#funktionen" },
};
