/**
 * Global site configuration: identity, navigation, footer, social links.
 * Everything that appears in the header/footer or in metadata comes from here.
 */

export const siteConfig = {
  name: "myown",
  /** Used as the `%s | <tagline>` metadata template and in the footer. */
  tagline: "Dein Besitz immer im Blick",
  description:
    "myown ist die App für dein persönliches Inventar: Gegenstände erfassen, finden und im Blick behalten – für mehr Ordnung im Alltag.",
  /**
   * Canonical production URL, without trailing slash.
   * On Vercel this is set automatically, see `src/lib/metadata.ts`.
   */
  url: "https://example.com",
  /** Live app instance the header CTA links to. */
  appUrl: "https://web-app-zeta-ruddy-63.vercel.app",
  locale: "de_CH",
  /** Shown in the footer and used by the contact page. */
  contact: {
    email: "hallo@example.com",
    phone: "+41 44 000 00 00",
    address: "Musterstrasse 1, 8000 Zürich",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Primary navigation, rendered in the header and the mobile menu. */
export const mainNav: NavItem[] = [
  { label: "Funktionen", href: "/funktionen" },
  { label: "Preisplan", href: "/preisplan" },
  { label: "Warum myown", href: "/warum-myown" },
  { label: "FAQ", href: "/faq" },
];

/** Footer link groups. Add or remove groups freely — the layout adapts. */
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Produkt",
    items: [
      { label: "Funktionen", href: "/funktionen" },
      { label: "Preisplan", href: "/preisplan" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Unternehmen",
    items: [
      { label: "Warum myown", href: "/warum-myown" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    items: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];
