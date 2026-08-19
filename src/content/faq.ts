/**
 * Page-specific copy for /faq — the hero and closing CTA. The actual
 * questions/answers live in `landing.ts`'s `faq.items`, shared with the
 * homepage's FAQ teaser section.
 */

export const faqPage = {
  hero: {
    title: "Fragen? Hier findest du die Antworten.",
    description: "Alles Wichtige zu myown, deinen Gegenständen und den Funktionen der App.",
  },
  cta: {
    title: "Noch nicht überzeugt? Schau dir myown in Aktion an.",
    label: "Funktionen ansehen",
    secondaryLabel: "Preispläne vergleichen",
  },
} as const;
