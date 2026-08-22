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
  url: "https://marketing-page-blond.vercel.app",
  /** Live app instance the header CTA links to. */
  appUrl: "https://web-app-zeta-ruddy-63.vercel.app",
  locale: "de_CH",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Primary navigation, rendered in the header and the mobile menu. */
export const mainNav: NavItem[] = [
  { label: "Warum myown", href: "/warum-myown" },
  { label: "Funktionen", href: "/funktionen" },
  { label: "Preisplan", href: "/preisplan" },
  { label: "FAQ", href: "/faq" },
];

/** Footer link groups. Add or remove groups freely — the layout adapts. */
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Produkt",
    items: [
      { label: "Warum myown", href: "/warum-myown" },
      { label: "Funktionen", href: "/funktionen" },
      { label: "Preisplan", href: "/preisplan" },
      { label: "FAQ", href: "/faq" },
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
