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

      <Prose className="mt-18">
        <h2>Disclaimer</h2>
        <p>
          Die App <strong>«myown»</strong> sowie sämtliche auf dieser Website dargestellten
          Funktionen, Angebote und Inhalte sind <strong>rein fiktiv</strong>. Sie wurden als
          Projektarbeit im Rahmen des <strong>CAS Artificial Intelligence in Media Production</strong>{" "}
          an der FH Graubünden entwickelt.
        </p>
        <p>
          Jegliche Ähnlichkeit mit bestehenden Produkten, Dienstleistungen, Unternehmen oder Marken
          mit vergleichbarem Charakter oder ähnlichen Eigenschaften ist rein zufällig und
          unbeabsichtigt. Aus den dargestellten Inhalten können keine Ansprüche, Forderungen oder
          sonstigen Rechte abgeleitet werden.
        </p>

        <h2>Konzeption, Umsetzung und Inhalte</h2>
        <p>Marcel Debrunner, in Zusammenarbeit mit Claude und ChatGPT</p>

        <h2>Kontakt</h2>
        <p>
          Marcel Debrunner
          <br />
          E-Mail: marcel.debrunner@students.fhgr.ch
        </p>
      </Prose>
    </Section>
  );
}
