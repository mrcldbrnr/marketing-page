import { Section, SectionHeading } from "@/components/ui/section";
import { Prose } from "@/components/ui/prose";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Datenschutz",
  description: `Wie ${siteConfig.name} mit personenbezogenen Daten umgeht.`,
  path: "/datenschutz",
});

export default function PrivacyPage() {
  return (
    <Section containerWidth="narrow" className="pt-[2.25rem] lg:pt-[4.25rem]">
      <SectionHeading as="h1" title="Datenschutzerklärung" align="left" />

      <Prose className="mt-18">
        <p className="rounded-xl border border-border bg-surface p-4 text-sm">
          <strong>Platzhalter.</strong> Diese Seite enthält Beispieltext und ist keine
          Rechtsberatung. Erstelle eine auf deine tatsächliche Datenverarbeitung zugeschnittene
          Erklärung (revDSG, ggf. DSGVO) und lass sie prüfen.
        </p>

        <h2>Verantwortliche Stelle</h2>
        <p>
          {siteConfig.name}, {siteConfig.contact.address}. Kontakt: {siteConfig.contact.email}
        </p>

        <h2>Welche Daten wir bearbeiten</h2>
        <ul>
          <li>Server-Logdaten beim Aufruf der Website (IP-Adresse, Zeitpunkt, aufgerufene Seite)</li>
          <li>Angaben, die du im Kontaktformular freiwillig übermittelst</li>
          <li>Ggf. Nutzungsstatistiken, sofern eine Analyse-Lösung eingesetzt wird</li>
        </ul>

        <h2>Zweck und Rechtsgrundlage</h2>
        <p>
          Ergänze hier, zu welchem Zweck du die Daten bearbeitest und worauf sich die Bearbeitung
          stützt.
        </p>

        <h2>Weitergabe an Dritte</h2>
        <p>
          Nenne hier eingesetzte Auftragsbearbeiter, etwa Hosting (Vercel), E-Mail-Versand oder
          Analyse-Dienste, samt Standort der Datenbearbeitung.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung sowie Widerspruch. Wende dich dazu
          an {siteConfig.contact.email}.
        </p>
      </Prose>
    </Section>
  );
}
