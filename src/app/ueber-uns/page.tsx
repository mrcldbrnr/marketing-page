import { Section, SectionHeading } from "@/components/ui/section";
import { Cta } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Über uns",
  description: "Wer wir sind und warum wir dieses Produkt bauen.",
  path: "/ueber-uns",
});

const stats = [
  { value: "2019", label: "gegründet in Zürich" },
  { value: "24", label: "Mitarbeitende" },
  { value: "400+", label: "Teams weltweit" },
  { value: "99.9 %", label: "Verfügbarkeit" },
];

export default function AboutPage() {
  return (
    <>
      <Section containerWidth="narrow" className="pt-[2.25rem] lg:pt-[4.25rem]">
        <SectionHeading
          as="h1"
          eyebrow="Über uns"
          title="Wir bauen Werkzeuge, die im Weg stehen – im guten Sinn nicht"
          description="Aus der Erfahrung, dass gute Teams an schlechten Tools scheitern, ist dieses Produkt entstanden."
          align="left"
        />

        <div className="mt-10 flex flex-col gap-4 text-lg leading-relaxed text-muted text-pretty">
          <p>
            Ersetze diesen Text durch deine Geschichte: Wie ist das Unternehmen entstanden, welches
            Problem hast du selbst erlebt, und was macht deinen Ansatz anders?
          </p>
          <p>
            Ein zweiter Absatz eignet sich gut für Werte oder Arbeitsweise – konkret formuliert,
            nicht als Floskel. Wer hier ehrlich schreibt, gewinnt mehr Vertrauen als mit jeder
            Superlativ-Sammlung.
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-extrabold tracking-tight">{stat.value}</dd>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </dl>
      </Section>
      <Cta />
    </>
  );
}
