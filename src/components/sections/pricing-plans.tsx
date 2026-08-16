import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button";
import { pricing } from "@/content/pricing";

export function PricingPlans() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricing.plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8",
            plan.featured && "border-accent ring-1 ring-accent",
          )}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              {plan.featured ? (
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  Beliebt
                </span>
              ) : null}
            </div>
            <p className="text-sm text-muted">{plan.description}</p>
          </div>

          <p className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
            {plan.interval ? <span className="text-sm text-muted">{plan.interval}</span> : null}
          </p>

          <ul className="flex flex-col gap-3 text-sm">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 size-4 shrink-0 text-accent"
                >
                  <path d="m5 12 5 5L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <ButtonLink
            href={plan.cta.href}
            variant={plan.featured ? "primary" : "secondary"}
            className="mt-auto w-full"
          >
            {plan.cta.label}
          </ButtonLink>
        </div>
      ))}
    </div>
  );
}
