/**
 * Copy for the /warum-myown page: concrete usecases, short testimonials and
 * fictional press mentions, showing myown in everyday situations.
 */

export type Usecase = {
  title: string;
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
      persona: "Der Organisierte",
      quote: "Ich weiss endlich, was alles in meinem Keller liegt.",
      person: "Tom Bischofberger, Modellbauer",
      benefits: ["Standorte erfassen", "Gegenstände suchen", "nach Kategorien filtern", "Überblick behalten"],
      visualSrc: "/usecases/usecase-1_keller_Gemini_Generated_Image_65f04o65f04o65f0.jpg",
    },
    {
      title: "Reisen ohne jedes Mal neu anzufangen",
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
      persona: "Der Outdoor-Fan",
      quote: "Vor dem Wochenend-Ausflug sehe ich sofort, ob Velo, Ski oder Campingausrüstung bereit sind.",
      person: "Samuel Wetzel, Outdoor-Fan",
      benefits: ["Wartungsbedarf", "Reparaturen", "Zustand", "Status", "Dashboard «Aufmerksamkeit erforderlich»"],
      visualSrc: "/usecases/usecase-3_outdoor_Gemini_Generated_Image_ll0td9ll0td9ll0t.jpg",
    },
    {
      title: "Technik und Dokumente im Griff",
      persona: "Die Technik-Sammlerin",
      quote: "Seriennummern, Kaufpreise und Belege sind endlich an einem Ort.",
      person: "Tamara Zimmermann, Technik-Sammlerin",
      benefits: ["Kaufpreis", "Seriennummern", "Dokumente", "Garantie", "Kaufdatum"],
      visualSrc: "/usecases/usecase-4_technik_Gemini_Generated_Image_m9yj7jm9yj7jm9yj.jpg",
    },
  ] satisfies Usecase[],

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
