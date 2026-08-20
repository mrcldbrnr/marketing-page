/**
 * Copy for the /warum-myown page: concrete usecases, presented as worked
 * examples, plus a longer narrative usecase ("Ein Tag mit myown").
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

export type StoryBeat = {
  /** e.g. "07:30 – Wartung? Für später merken." */
  heading: string;
  paragraphs: string[];
};

export const why = {
  hero: {
    title: "Weniger suchen. Schneller finden. Mehr nutzen.",
    description:
      "Ob Keller, Reisegepäck, Sportausrüstung oder Technik: myown hilft dir dabei, deine Sachen so zu organisieren, dass sie im richtigen Moment zur Hand sind. Entdecke typische Alltagssituationen, in denen ein persönliches Inventar den Unterschied macht.",
  },

  examplesIntro: {
    title: "So kann myown deinen Alltag erleichtern.",
    description:
      "Nicht jeder besitzt die gleichen Dinge – und nicht jeder braucht myown für dasselbe. Vier Beispiele zeigen, wie unterschiedlich ein persönliches Inventar im Alltag eingesetzt werden kann.",
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

  /** A longer narrative usecase, told as a series of timestamped beats through Anna's day. */
  story: {
    title: "Ein Tag mit myown",
    imageSrc: "/usecases/userstory_anna_Gemini_Generated_Image_xgzmquxgzmquxgzm.jpg",
    imageAlt: "Anna, Architektur-Fotografin",
    intro:
      "Anna ist 32 Jahre alt, selbstständige Architektur-Fotografin und viel unterwegs. Zwischen Fotoequipment, Sportausrüstung, Technik und Alltagsgegenständen hilft ihr myown, den Überblick zu behalten – ohne dass sie ständig darüber nachdenken muss.",
    beats: [
      {
        heading: "07:30 – Wartung? Für später merken.",
        paragraphs: [
          "Annas Tag startet mit Kaffee – und einer kleinen Erinnerung: Ihre Kolbenmaschine könnte dringend wieder einmal gepflegt werden. Gerade keine Zeit. Also kurz myown öffnen, Status auf «Wartung notwendig» setzen – erledigt und aus dem Kopf.",
        ],
      },
      {
        heading: "10:15 – Vorbereiten, bevor etwas fehlt.",
        paragraphs: [
          "Später trifft sie sich mit der Architektin eines neuen Schulhauses zum Briefing für ein Shooting. Noch vor Ort erstellt Anna eine Packliste: Kamera, Stativ, Akkus, Objektive und Fernauslöser.",
          "myown schlägt ihr passende verknüpfte Gegenstände vor. Dabei fällt ihr auf, dass eines ihrer Objektive noch bei ihrem Kollegen Nik ist. Gut, dass sie es jetzt merkt – sie plant einfach mit einem anderen.",
        ],
      },
      {
        heading: "15:40 – Neu gekauft, schnell erfasst.",
        paragraphs: [
          "Am Nachmittag kauft Anna noch einen Polarisationsfilter. Sie erfasst ihn direkt in myown. Name, Hersteller, Kategorie und Kaufpreis reichen fürs Erste – alles Weitere kann sie später ergänzen.",
        ],
      },
      {
        heading: "18:10 – Finden statt suchen.",
        paragraphs: [
          "Zurück zuhause fragt sie sich: «Habe ich nicht noch irgendwo ein USB-C-Kabel herumliegen?»",
          "Ein kurzer Blick in die Live-Suche: Arbeitszimmer, Schreibtischschublade. Kein Suchen, kein Rätseln.",
        ],
      },
      {
        heading: "18:30 – Erledigen und abhaken.",
        paragraphs: [
          "Vor dem Feierabend zeigt das Dashboard: Bei Annas Inlineskates steht noch «Wartung notwendig». Die Räder müssen gewechselt werden.",
          "Werkzeug holen, neue Rollen montieren, Status zurück auf «Einsatzbereit» – und wenig später rollt Anna mit ihrem Freund Sven entspannt in den Sonnenuntergang.",
        ],
      },
    ] satisfies StoryBeat[],
    closing: "myown behält Annas Sachen im Blick, damit sie es nicht muss.",
  },

  closingTeaser: {
    title: "Dein Besitz ist persönlich. Dein System darf es auch sein.",
    description:
      "Du entscheidest selbst, was du in myown erfasst und wie genau du es dokumentieren möchtest. Vom einzelnen Lieblingsstück bis zum umfassenden Inventar.",
  },
} as const;
