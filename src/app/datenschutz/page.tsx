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
          Diese Erklärung beschreibt die tatsächliche technische Umsetzung dieser Website (siehe
          auch das <a href="/impressum">Impressum</a>). Sie ersetzt keine Rechtsberatung.
        </p>

        <h2>Verantwortliche Person</h2>
        <p>
          Marcel Debrunner
          <br />
          E-Mail: marcel.debrunner@students.fhgr.ch
        </p>

        <h2>Hosting und Server-Logs</h2>
        <p>
          Diese Website ist eine vollständig statische Next.js-Anwendung ohne eigene Datenbank und
          ohne Server-Logik: Es gibt keine Formulare, keine Benutzerkonten und keine Möglichkeit,
          direkt über diese Website personenbezogene Daten einzugeben.
        </p>
        <p>
          Gehostet wird die Website bei Vercel Inc. (USA), das die Seiten über ein globales
          Content-Delivery-Netzwerk ausliefert. Wie bei jedem Website-Aufruf üblich, verarbeitet
          Vercel dabei automatisch technische Zugriffsdaten (u. a. IP-Adresse, Zeitpunkt, aufgerufene
          URL, User-Agent) in Server-Logs, um den Betrieb sicherzustellen und Missbrauch zu erkennen.
          Eine Datenübermittlung in die USA ist damit nicht ausgeschlossen.
        </p>

        <h2>Cookies und Tracking</h2>
        <p>
          Diese Website setzt keine Cookies und keine Analyse-, Tracking- oder Marketing-Tools ein.
          Es findet keine Auswertung des Nutzungsverhaltens statt, und es wird nichts im
          Local Storage des Browsers gespeichert.
        </p>

        <h2>Schriftarten</h2>
        <p>
          Die verwendete Schrift («Figtree») wird beim Build in die Website eingebettet und lokal von
          dieser Website ausgeliefert. Beim Seitenaufruf findet keine Verbindung zu Google-Servern
          statt.
        </p>

        <h2>Live-Demo</h2>
        <p>
          Der Button «Live-Demo öffnen» führt zu einer separaten Webapplikation ausserhalb dieser
          Website. Für die dortige Datenverarbeitung gelten die Bestimmungen dieser Anwendung, nicht
          diese Erklärung.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Da diese Website selbst keine personenbezogenen Daten erhebt oder speichert, bestehen hier
          in der Regel keine Auskunfts- oder Löschungsansprüche gegenüber ihr. Fragen zur
          Datenverarbeitung beim Hosting-Anbieter richtest du an Vercel Inc.; allgemeine Fragen zu
          dieser Website an marcel.debrunner@students.fhgr.ch.
        </p>
      </Prose>
    </Section>
  );
}
