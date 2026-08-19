/**
 * Page-specific copy for /faq — the hero. The actual questions/answers live
 * in `landing.ts`'s `faq.items`, shared with the homepage's FAQ teaser
 * section. The closing CTA reuses `funktionen.cta` (see the page).
 */

export const faqPage = {
  hero: {
    title: "Fragen? Hier findest du die Antworten.",
    description: "Alles Wichtige zu myown, deinen Gegenständen und den Funktionen der App.",
  },
} as const;
