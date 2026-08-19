import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { featuresTeaser } from "@/content/landing";

export function FeaturesTeaser() {
  return (
    <Section tone="surface">
      <SectionHeading title={featuresTeaser.title} />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuresTeaser.items.map((item) => (
          <li
            key={item}
            className="flex items-center justify-center rounded-3xl border-2 border-[#0000ff] bg-background p-6 text-center font-medium text-pretty"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <ButtonLink href="/funktionen" variant="primary" size="lg">
          {featuresTeaser.cta}
          <Icon name="arrowRight" className="size-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
