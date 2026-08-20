/**
 * Copy for the landing page. Sections read from here, so rewriting the page
 * means editing this file — not the components. The page is a teaser/router
 * to the four subpages (Funktionen, Preisplan, Warum myown, FAQ); it doesn't
 * explain every feature in depth.
 */

export const hero = {
  title: "Alles im Blick. Alles am richtigen Ort. Bereit, wenn du es brauchst.",
  description:
    "myown ist dein persönliches Inventar für alles, was dir gehört. Erfasse deine Sachen, finde sie wieder und behalte im Blick, was deine Aufmerksamkeit braucht. So hast du weniger von deinen Dingen im Kopf – und mehr davon im Alltag.",
  primaryCtaLabel: "Live-Demo öffnen",
  secondaryCta: { label: "Funktionen ansehen", href: "/funktionen" },
};

export const problem = {
  title: "Dein Hab und Gut – nur einen Klick entfernt",
  imageSrc: "/usecases/userstory_anna_Gemini_Generated_Image_xgzmquxgzmquxgzm.jpg",
  imageAlt: "Anna, Architektur-Fotografin",
  situations: [
    "Wo war nochmal die Powerbank?",
    "Sind meine Skis bereit fürs Wochenende?",
    "Was liegt eigentlich alles im Keller?",
    "Habe ich nicht schon so ein Kabel?",
  ],
  resolution: "myown behält deine Sachen im Blick, damit du es nicht musst.",
  cta: "Usecases entdecken",
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
  title: "myown kostenlos ausprobieren.",
  free: {
    title: "Free",
    description: "Die Kernfunktionen von myown werden dauerhaft kostenlos nutzbar sein.",
    items: [
      "Persönliches Inventar",
      "Suche und Filter",
      "Dashboard",
      "Packlisten",
      "Zustand und Status",
      "Verknüpfte Gegenstände",
    ],
  },
  pro: {
    title: "Pro",
    badge: "Geplant",
    description: "Zusätzliche Komfortfunktionen sind später in einem optionalen Pro-Plan vorgesehen.",
  },
  cta: "Preispläne vergleichen",
};

export const whyTeaser = {
  quote:
    "Seit ich myown nutze, muss ich nicht mehr überlegen, wo ich was aufbewahre, in welchem Zustand es sich befindet und ob alles parat für den nächsten Einsatz ist.",
  person: "Marcel Debrunner",
  role: "myown-Gründer",
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
      question: "Muss ich wirklich alle meine Sachen erfassen?",
      answer:
        "Nein. Du entscheidest selbst, welche Gegenstände du in myown aufnehmen möchtest. Starte zum Beispiel mit Dingen, die du häufig suchst, verleihst, wartest oder für Reisen brauchst. Auch bei der Erfassung selbst bleibt es einfach: Nur der Name ist erforderlich. Alle weiteren Angaben sind optional und können jederzeit ergänzt werden.",
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
      question: "Wofür kann ich Packlisten verwenden?",
      answer:
        "Mit Packlisten stellst du direkt aus deinem Inventar zusammen, was du für eine Reise, einen Ausflug, einen Arbeitstermin oder einen anderen Anlass brauchst. Du kannst Gegenstände hinzufügen, Eingepacktes abhaken und siehst sofort, wenn etwas momentan nicht verfügbar ist.",
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
        "myown summiert die von dir hinterlegten Kaufpreise – für das gesamte Inventar oder einzelne Kategorien. Angezeigt wird damit der erfasste Kaufwert; einen aktuellen Zeit- oder Wiederbeschaffungswert berechnet myown nicht.",
    },
    {
      question: "Ist myown auch auf dem Smartphone nutzbar?",
      answer: "Ja. myown ist als responsive Web-App für Desktop, Tablet und Smartphone konzipiert.",
    },
    {
      question: "Was kostet myown?",
      answer:
        "Die aktuelle Version kannst du kostenlos als Live-Demo ausprobieren. Für eine spätere Veröffentlichung ist ein Free-Plan mit allen Kernfunktionen sowie ein optionaler Pro-Plan vorgesehen. Geplante Pro-Funktionen sind unter anderem automatische Produkterkennung, Belegerfassung, Marktplatz-Anbindungen und intelligente Packvorschläge.",
    },
    {
      question: "Gibt es geteilte Konten für mehrere Personen im gleichen Haushalt?",
      answer:
        "In der aktuellen Version nicht. Die Anwendung ist als Single-User-Applikation konzipiert. Multi-User-Funktionen sind derzeit nicht Bestandteil des Funktionsumfangs.",
    },
  ],
};

/**
 * The closing CTA, used identically on the homepage and every subpage (see
 * `funktionen.cta` / `pricing.cta`, which carry the same title/description/label).
 */
export const cta = {
  title: "myown selbst ausprobieren",
  description:
    "Entdecke die aktuellen Funktionen in der Live-Demo. Du brauchst weder ein Konto noch eine Registrierung – einfach öffnen und ausprobieren.",
  primaryCta: { label: "Live-Demo öffnen", href: "/funktionen" },
  secondaryCta: null,
};
