import { Section, SectionHeading } from "@/components/ui/section";
import { Icon, type IconName } from "@/components/ui/icon";
import { Cta } from "@/components/sections/cta";
import { why } from "@/content/why";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Warum myown",
  description: why.description,
  path: "/warum-myown",
});

export default function WhyPage() {
  return (
    <>
      <Section>
        <SectionHeading as="h1" eyebrow={why.eyebrow} title={why.title} description={why.description} />

        <ul className="mt-16 grid gap-8 sm:grid-cols-2">
          {why.reasons.map((reason) => (
            <li
              key={reason.title}
              className="flex flex-col gap-3 rounded-3xl border border-border bg-surface p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name={reason.icon as IconName} className="size-5" />
              </span>
              <h2 className="text-lg font-semibold">{reason.title}</h2>
              <p className="leading-relaxed text-muted">{reason.description}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Cta />
    </>
  );
}
