import { pricing } from "@/content/pricing";

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

export function PricingPlans() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
      {pricing.plans.map((plan) =>
        plan.kind === "free" ? (
          <div key={plan.name} className="flex flex-col gap-6 rounded-3xl border-2 border-[#0000ff] bg-surface p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="text-sm text-muted">{plan.description}</p>
            </div>

            <p className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
              <span className="text-sm text-muted">{plan.interval}</span>
            </p>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-muted">Enthalten:</p>
              <ul className="flex flex-col gap-3 text-base">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div key={plan.name} className="flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">{plan.name}</h2>
                <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                  Coming Soon
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted">{plan.interval}</span>
              </p>
              <p className="text-sm text-muted">
                oder {plan.priceYearly} {plan.intervalYearly}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted">{plan.description}</p>
              <ul className="flex flex-col gap-4 text-base">
                {plan.highlights.map((highlight) => (
                  <li key={highlight.title} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>
                      <span className="font-semibold">{highlight.title}</span>
                      <span className="block text-muted">{highlight.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-auto text-xs text-muted">{plan.note}</p>
          </div>
        ),
      )}
    </div>
  );
}
