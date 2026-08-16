import { Section, SectionHeading } from "@/components/ui/section";
import { Prose } from "@/components/ui/prose";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Impressum",
  description: `Impressum und Kontaktangaben von ${siteConfig.name}.`,
  path: "/impressum",
});

export default function ImprintPage() {
  return (
    <Section containerWidth="narrow" className="pt-[2.25rem] lg:pt-[4.25rem]">
      <SectionHeading as="h1" title="Impressum" align="left" />

      <Prose className="mt-8">
        <p className="rounded-xl border border-border bg-surface p-4 text-sm">
          <strong>Platzhalter.</strong> Diese Seite enthält Beispieltext. Ergänze die tatsächlichen
          Angaben deines Unternehmens und lass sie rechtlich prüfen, bevor die Website live geht.
        </p>

        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          {siteConfig.name}
          <br />
          {siteConfig.contact.address}
          <br />
          Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: {siteConfig.contact.email}
          <br />
          Telefon: {siteConfig.contact.phone}
        </p>

        <h2>Handelsregister</h2>
        <p>UID: CHE-000.000.000 · Eingetragen im Handelsregister des Kantons Zürich.</p>

        <h2>Haftungsausschluss</h2>
        <p>
          Hier folgt der Haftungsausschluss für Inhalte, Links und Urheberrechte. Ersetze diesen
          Abschnitt durch eine geprüfte Fassung.
        </p>
      </Prose>
    </Section>
  );
}
