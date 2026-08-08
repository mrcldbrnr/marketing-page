export type Plan = {
  name: string;
  price: string;
  interval?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  /** Exactly one plan should be highlighted. */
  featured?: boolean;
};

export const pricing = {
  title: "Preise, die mitwachsen",
  description:
    "Alle Pläne enthalten unbegrenzte Projekte und Support. Jährliche Zahlung spart zwei Monate.",
  plans: [
    {
      name: "Starter",
      price: "CHF 0",
      interval: "pro Monat",
      description: "Für kleine Teams, die gerade anfangen.",
      features: ["Bis 5 Mitglieder", "Unbegrenzte Projekte", "Community-Support", "1 GB Speicher"],
      cta: { label: "Kostenlos starten", href: "/kontakt" },
    },
    {
      name: "Team",
      price: "CHF 12",
      interval: "pro Person / Monat",
      description: "Für wachsende Teams mit echten Deadlines.",
      features: [
        "Unbegrenzte Mitglieder",
        "Automatisierte Workflows",
        "Auswertungen & Reports",
        "E-Mail-Support in 24 h",
        "100 GB Speicher",
      ],
      cta: { label: "Team testen", href: "/kontakt" },
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Auf Anfrage",
      description: "Für Organisationen mit besonderen Anforderungen.",
      features: [
        "Alles aus Team",
        "SSO & SCIM",
        "Audit-Logs",
        "Eigene Hosting-Region",
        "Dedizierter Ansprechpartner",
      ],
      cta: { label: "Kontakt aufnehmen", href: "/kontakt" },
    },
  ] satisfies Plan[],
};
