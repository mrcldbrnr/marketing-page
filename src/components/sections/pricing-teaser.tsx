import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { pricingTeaser } from "@/content/landing";

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

export function PricingTeaser() {
  return (
    <Section>
      <SectionHeading title={pricingTeaser.title} />

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-3xl border-2 border-[#0000ff] bg-background p-8">
          <h3 className="text-lg font-semibold">{pricingTeaser.free.title}</h3>
          <p className="text-muted">{pricingTeaser.free.description}</p>
          <ul className="flex flex-col gap-2.5 text-base">
            {pricingTeaser.free.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border-2 border-border bg-background p-8">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">{pricingTeaser.pro.title}</h3>
            <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
              {pricingTeaser.pro.badge}
            </span>
          </div>
          <p className="text-muted">{pricingTeaser.pro.description}</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <ButtonLink href="/preisplan" variant="primary" size="lg">
          {pricingTeaser.cta}
          <Icon name="arrowRight" className="size-4" />
        </ButtonLink>
      </div>
    </Section>
  );
}
