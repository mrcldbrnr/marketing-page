/**
 * Copy for the landing page. Sections read from here, so rewriting the page
 * means editing this file — not the components. The page is a teaser/router
 * to the four subpages (Funktionen, Preisplan, Warum myown, FAQ); it doesn't
 * explain every feature in depth.
 */

export const hero = {
  title: "Alles im Blick. Alles am richtigen Ort. Bereit, wenn du es brauchst.",
  description:
    "myown bringt Ordnung in deine Sachen und Ruhe in deinen Kopf. Du weisst, was du besitzt, wo es liegt und ob es bereit ist, wenn du es brauchst.",
  primaryCtaLabel: "myown kostenlos testen",
  secondaryCta: { label: "Funktionen ansehen", href: "/funktionen" },
};

export const problem = {
  title: "Du musst dir nicht alles merken.",
  situations: [
    "Wo war nochmal die Powerbank?",
    "Sind meine Skis bereit fürs Wochenende?",
    "Was liegt eigentlich alles im Keller?",
    "Habe ich nicht schon so ein Kabel?",
  ],
  resolution: "myown behält deine Sachen im Blick, damit du es nicht musst.",
};

export const benefits = {
  items: [
    { title: "Weniger merken.", description: "Alles, was dir gehört, an einem Ort." },
    { title: "Schneller finden.", description: "Finde sofort, was du brauchst." },
    { title: "Alles im Blick.", description: "Sieh, was bereit ist oder Aufmerksamkeit braucht." },
  ],
};

export const featuresTeaser = {
  title: "Alles, was du brauchst, um deine Sachen im Griff zu behalten.",
  screenshotSrc: "/screenshots/funktion3_dashboard.png",
  screenshotAlt: "Dashboard mit Kacheln, die Aufmerksamkeit brauchen",
  items: [
    "Persönliches Inventar",
    "Schnelle Suche und Filter",
    "Dashboard mit Aufmerksamkeitshinweisen",
    "Packlisten für Reisen",
  ],
  cta: "Alle Funktionen entdecken",
};

export const pricingTeaser = {
  title: "Kostenlos starten. Bei Bedarf mehr rausholen.",
  free: {
    title: "Free",
    items: ["Persönliches Inventar", "Suche und Filter", "Dashboard", "Packlisten", "alle aktuellen Kernfunktionen"],
  },
  pro: {
    title: "Pro",
    badge: "Coming soon",
    items: [
      "Automatische Produkterkennung mit KI",
      "Belege automatisch erfassen",
      "Marktplatz-Anbindungen",
      "Intelligente Packvorschläge",
    ],
  },
  cta: "Preispläne vergleichen",
};

export const whyTeaser = {
  quote:
    "Seit ich myown nutze, muss ich nicht mehr überlegen, wo ich was aufbewahre, in welchem Zustand es sich befindet und ob alles parat für den nächsten Einsatz ist.",
  usecases: ["Ordnung im Keller", "Reisevorbereitung", "Wartung von Sportausrüstung"],
  cta: "Mehr Usecases entdecken",
};

export const faqTeaser = {
  questions: [
    "Was kann ich mit myown erfassen?",
    "Ist myown auch auf dem Smartphone nutzbar?",
    "Was kostet myown?",
  ],
  cta: "Alle Fragen und Antworten",
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

/** Default fallback for `<Cta />` when used without explicit props (currently no page relies on this). */
export const cta = {
  title: "Deine Sachen im Griff. Den Kopf frei.",
  description: "Alles im Blick. Alles am richtigen Ort. Bereit, wenn du es brauchst.",
  primaryCta: { label: "myown jetzt live testen", href: "/funktionen" },
  secondaryCta: null,
};
