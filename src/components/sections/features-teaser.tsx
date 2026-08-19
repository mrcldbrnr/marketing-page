import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { featuresTeaser } from "@/content/landing";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m5 12 5 5L19 7" />
    </svg>
  );
}

export function FeaturesTeaser() {
  return (
    <Section tone="surface">
      <SectionHeading title={featuresTeaser.title} />

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:col-span-7">
          <Image
            src={featuresTeaser.screenshotSrc}
            alt={featuresTeaser.screenshotAlt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>

        <ul className="flex flex-col gap-4 text-base lg:col-span-5">
          {featuresTeaser.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
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
