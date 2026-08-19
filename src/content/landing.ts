/**
 * Copy for the landing page. Sections read from here, so rewriting the page
 * means editing this file — not the components.
 */

export const hero = {
  title: "Alles, was du hast. Bereit, wenn du es brauchst.",
  description:
    "myown bringt Ordnung in deine Sachen und Ruhe in deinen Kopf. Du weisst, was du besitzt, wo es liegt und ob es bereit ist, wenn du es brauchst.",
  primaryCta: { label: "Kostenlos starten", href: "/kontakt" },
  secondaryCta: { label: "Funktionen ansehen", href: "#funktionen" },
  note: "Keine Kreditkarte nötig · 14 Tage testen",
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
      question: "Was ist myown?",
      answer:
        "myown ist eine App, mit der du deine physischen Gegenstände erfassen, organisieren, finden und für unterschiedliche Situationen nutzen kannst.",
    },
    {
      question: "Was kann ich mit myown erfassen?",
      answer:
        "Grundsätzlich alles, was dir gehört – von Möbeln und Kleidung bis zu Elektronik, Sportausrüstung oder Küchenutensilien.",
    },
    {
      question: "Muss ich jeden Gegenstand vollständig dokumentieren?",
      answer:
        "Nein. Nur der Name ist erforderlich. Alle weiteren Angaben wie Foto, Marke, Standort, Kaufpreis, Zustand oder Dokumente sind optional.",
    },
    {
      question: "Kann ich sehen, wo ein Gegenstand liegt?",
      answer:
        "Ja. Standorte können zweistufig erfasst werden, zum Beispiel Keller → Werkzeugregal oder Küche → Vorratsschrank.",
    },
    {
      question: "Wie finde ich einen Gegenstand?",
      answer:
        "Über die Live-Suche kannst du dein gesamtes Inventar durchsuchen. Dabei werden alle erfassten Felder berücksichtigt. Zusätzlich kannst du das Inventar nach Kategorie, Standort, Zustand, Status, Kaufpreis und weiteren Eigenschaften filtern.",
    },
    {
      question: "Kann myown mir zeigen, wenn etwas gewartet werden muss?",
      answer:
        "Ja. Das Dashboard zeigt Gegenstände, die Aufmerksamkeit benötigen, zum Beispiel bei Wartungsbedarf, Reparaturen oder einem defekten Zustand.",
    },
    {
      question: "Kann ich myown für Reisen nutzen?",
      answer:
        "Ja. Im Bereich «Ich verreise» kannst du Packlisten erstellen und dafür direkt Gegenstände aus deinem bestehenden Inventar auswählen.",
    },
    {
      question: "Was passiert mit Dingen, die ich nicht mehr besitze?",
      answer:
        "Sie können als «Aussortiert» markiert werden, zum Beispiel weil sie verkauft, verschenkt, verloren, gestohlen, zerstört oder entsorgt wurden. Dadurch verschwinden sie aus dem aktiven Inventar, bleiben aber nachvollziehbar.",
    },
    {
      question: "Was passiert, wenn ein aussortierter Gegenstand bereits auf einer Packliste steht?",
      answer:
        "Der Gegenstand bleibt auf der bestehenden Packliste sichtbar und erhält den Hinweis «Aussortiert». Er kann jedoch nicht neu zu einer Packliste hinzugefügt werden.",
    },
    {
      question: "Kann ich zusammengehörende Gegenstände miteinander verbinden?",
      answer:
        "Ja. Du kannst Gegenstände miteinander verknüpfen, zum Beispiel Ski und Skischuhe, Velo und Helm oder Kamera und Stativ. Die Verknüpfung funktioniert in beide Richtungen.",
    },
    {
      question: "Kann ich den Wert meines Inventars sehen?",
      answer:
        "myown summiert die hinterlegten Kaufpreise und zeigt den erfassten Kaufwert insgesamt sowie nach Kategorien. Es wird kein aktueller Zeitwert berechnet.",
    },
    {
      question: "Ist myown auch auf dem Smartphone nutzbar?",
      answer: "Ja. myown ist als responsive Web-App für Desktop, Tablet und Smartphone konzipiert.",
    },
    {
      question: "Was kostet myown?",
      answer:
        "Der Free-Plan enthält alle aktuellen Kernfunktionen. Der Pro-Plan ergänzt zusätzliche Services wie automatisierte Erfassung von Gegenständen per Foto-Upload, Marktplatz-Anbindungen, Versicherungsschutz und Reparaturservices.",
    },
    {
      question: "Gibt es geteilte Konten für mehrere Personen im gleichen Haushalt?",
      answer:
        "In der aktuellen Version nicht. Die Anwendung ist als Single-User-Applikation konzipiert. Multi-User-Funktionen sind derzeit nicht Bestandteil des Funktionsumfangs.",
    },
  ],
};

export const cta = {
  title: "Bereit, es auszuprobieren?",
  description: "Starte kostenlos oder lass dir in 20 Minuten zeigen, wie es für dich aussieht.",
  primaryCta: { label: "Kostenlos starten", href: "/kontakt" },
  secondaryCta: { label: "Funktionen ansehen", href: "/#funktionen" },
};
