import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { featuresTeaser } from "@/content/landing";

export function FeaturesTeaser() {
  return (
    <Section tone="surface">
      <SectionHeading title={featuresTeaser.title} />

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:col-span-6">
          <Image
            src={featuresTeaser.screenshotSrc}
            alt={featuresTeaser.screenshotAlt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
          {featuresTeaser.items.map((item) => (
            <li
              key={item}
              className="flex items-center justify-center rounded-3xl border-2 border-border bg-background p-6 text-center font-medium text-pretty"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex justify-center">
        <ButtonLink href="/funktionen" variant="primary" size="lg">
          {featuresTeaser.cta}
          <Icon name="arrowRight" className="size-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
