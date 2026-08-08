import { Section, SectionHeading } from "@/components/ui/section";
import { Icon, type IconName } from "@/components/ui/icon";
import { features } from "@/content/landing";

export function Features() {
  return (
    <Section id="funktionen">
      <SectionHeading
        eyebrow={features.eyebrow}
        title={features.title}
        description={features.description}
      />

      <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((feature) => (
          <li
            key={feature.title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon name={feature.icon as IconName} className="size-5" />
            </span>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="leading-relaxed text-muted">{feature.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
