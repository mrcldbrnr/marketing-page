import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section containerWidth="narrow">
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <p className="text-sm font-semibold tracking-wide text-accent uppercase">Fehler 404</p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Diese Seite gibt es nicht
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-muted text-pretty">
          Der Link ist womöglich veraltet oder die Seite wurde verschoben.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            Zur Startseite
          </ButtonLink>
          <ButtonLink href="/kontakt" size="lg" variant="secondary">
            Kontakt aufnehmen
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
