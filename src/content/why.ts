/**
 * Copy for the /warum-myown page: concrete usecases, short testimonials and
 * fictional press mentions, showing myown in everyday situations.
 */

export type Usecase = {
  title: string;
  /** Short label for the slider tab, e.g. "Ordnen". */
  tabLabel: string;
  persona: string;
  quote: string;
  person: string;
  benefits: string[];
  /** Path under /public to the usecase visual. */
  visualSrc: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type PressMention = {
  outlet: string;
  quote: string;
};

export const why = {
  hero: {
    title: "Weniger suchen. Schneller finden. Mehr nutzen.",
    description:
      "Über 10’000 Personen nutzen myown bereits täglich, um den Überblick über ihren Besitz zu behalten, diesen effizient zu verwalten und ihren Alltag zu erleichtern. Erfahre, was für sie den Unterschied macht.",
  },

  usecases: [
    {
      title: "Ordnung im Keller",
      tabLabel: "Ordnen",
      persona: "Der Organisierte",
      quote: "Ich weiss endlich, was alles in meinem Keller liegt.",
      person: "Tom Bischofberger, Modellbauer",
      benefits: ["Standorte erfassen", "Gegenstände suchen", "nach Kategorien filtern", "Überblick behalten"],
      visualSrc: "/usecases/usecase-1_keller_Gemini_Generated_Image_65f04o65f04o65f0.jpg",
    },
    {
      title: "Reisen ohne jedes Mal neu anzufangen",
      tabLabel: "Vorbereiten",
      persona: "Die Reisende",
      quote: "Meine Packlisten beginnen nicht mehr jedes Mal bei null.",
      person: "Lina Greter, Travel-Bloggerin",
      benefits: [
        "Gegenstände direkt aus dem Inventar auswählen",
        "Packlisten wiederverwenden",
        "Packfortschritt sehen",
        "nicht verfügbare Gegenstände erkennen",
      ],
      visualSrc: "/usecases/usecase-2_reisen_Gemini_Generated_Image_dhxl81dhxl81dhxl.jpg",
    },
    {
      title: "Bereit fürs nächste Abenteuer",
      tabLabel: "Erinnern",
      persona: "Der Outdoor-Fan",
      quote: "Vor dem Wochenend-Ausflug sehe ich sofort, ob Velo, Ski oder Campingausrüstung bereit sind.",
      person: "Samuel Wetzel, Outdoor-Fan",
      benefits: ["Wartungsbedarf", "Reparaturen", "Zustand", "Status", "Dashboard «Aufmerksamkeit erforderlich»"],
      visualSrc: "/usecases/usecase-3_outdoor_Gemini_Generated_Image_ll0td9ll0td9ll0t.jpg",
    },
    {
      title: "Technik und Dokumente im Griff",
      tabLabel: "Dokumentieren",
      persona: "Die Technik-Sammlerin",
      quote: "Seriennummern, Kaufpreise und Belege sind endlich an einem Ort.",
      person: "Tamara Zimmermann, Technik-Sammlerin",
      benefits: ["Kaufpreis", "Seriennummern", "Dokumente", "Garantie", "Kaufdatum"],
      visualSrc: "/usecases/usecase-4_technik_Gemini_Generated_Image_m9yj7jm9yj7jm9yj.jpg",
    },
  ] satisfies Usecase[],

  /**
   * A longer narrative usecase. Paragraphs use `**text**` for inline
   * emphasis (rendered as bold by `UsecaseStory`) so the copy stays plain,
   * editable prose rather than JSX.
   */
  story: {
    title: "Ein Tag mit myown",
    paragraphs: [
      "Anna ist 32 Jahre alt, selbstständige Architektur-Fotografin und viel unterwegs. Sie lebt in einer 3,5-Zimmer-Wohnung am Stadtrand und mag es, wenn ihre Sachen ihren Platz haben – ohne dass sie ständig darüber nachdenken muss. Zwischen Fotoequipment, Sportausrüstung, Technik und Alltagsgegenständen hilft ihr **myown**, den Überblick zu behalten.",
      "Annas Tag startet mit Kaffee – und einer kleinen Erinnerung: Ihre Kolbenmaschine könnte dringend wieder einmal gepflegt werden. Gerade keine Zeit. Also kurz myown öffnen, Status auf **«Wartung notwendig»** setzen – erledigt und aus dem Kopf.",
      "Später trifft sie sich mit der Architektin eines neuen Schulhauses zur Besichtigung und zum Briefing für das kommende Shooting. Noch vor Ort erstellt Anna eine **Packliste** für den Fototermin: Kamera, Stativ, Akkus, Objektive, Fernauslöser. myown schlägt ihr dazu passende **verknüpfte Gegenstände** vor. Dabei fällt ihr auf, dass eines ihrer Objektive noch an ihren Kollegen Nik ausgeliehen ist. Gut, dass sie es jetzt merkt – sie plant einfach mit einem anderen.",
      "Am Nachmittag besorgt Anna noch einen Polarisationsfilter, den sie fürs Shooting brauchen kann. Sie erfasst ihn direkt in der App. Name, Hersteller, Kategorie und Kaufpreis reichen fürs Erste – den Rest kann sie später ergänzen.",
      "Zurück zuhause fragt sie sich: «Habe ich nicht noch irgendwo ein USB-C-Kabel herumliegen?» Die **Live-Suche** sagt: ja – im Arbeitszimmer, in der Schreibtischschublade. Kein Suchen, kein Rätseln.",
      "Vor dem Feierabend noch ein Blick aufs Dashboard: Bei ihren Inlineskates steht **«Wartung notwendig»**. Die Räder müssen gewechselt werden. Also kurz Werkzeug holen, neue Rollen montieren, Status zurück auf **«Einsatzbereit»** – und wenig später rollt Anna mit ihrem Freund Sven entspannt in den Sonnenuntergang.",
    ],
    closing: "myown behält ihre Sachen im Blick, damit Anna es nicht muss.",
  },

  testimonials: [
    {
      quote: "Ich habe nicht weniger Sachen als vorher. Aber sie brauchen deutlich weniger Platz in meinem Kopf.",
      author: "Nina, 34",
    },
    {
      quote: "Die Suche nach Dingen hat bei uns zuhause tatsächlich aufgehört.",
      author: "Marco, 41",
    },
    {
      quote: "Vor einer Reise sehe ich in fünf Minuten, was bereit ist und was noch fehlt.",
      author: "Sarah, 29",
    },
    {
      quote:
        "Gerade bei Sportausrüstung ist es praktisch zu wissen, ob etwas gewartet werden muss, bevor ich es brauche.",
      author: "David, 38",
    },
  ] satisfies Testimonial[],

  press: [
    { outlet: "Digital Living", quote: "Die App, die Ordnung nicht mit Minimalismus verwechselt." },
    { outlet: "Tech & Home", quote: "myown macht aus dem eigenen Besitz ein persönliches System." },
    { outlet: "Everyday", quote: "Weniger suchen, weniger merken: So funktioniert digitales Besitzmanagement." },
    { outlet: "Future Home", quote: "Ein digitaler Überblick über die Dinge, die unseren Alltag begleiten." },
  ] satisfies PressMention[],
} as const;
