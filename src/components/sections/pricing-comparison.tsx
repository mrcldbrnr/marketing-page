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

/** Responsive via horizontal scroll on narrow viewports rather than reflowing rows. */
export function PricingComparison() {
  return (
    <div className="mx-auto max-w-5xl overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse text-[1.75rem]">
        <thead>
          <tr className="border-b border-border text-left">
            <th className="py-5 pr-4 font-semibold">Funktion</th>
            <th className="w-24 py-5 px-4 text-center font-semibold">Free</th>
            <th className="w-24 py-5 pl-4 text-center font-semibold">Pro</th>
          </tr>
        </thead>
        <tbody>
          {pricing.comparison.rows.map((row) => (
            <tr key={row.feature} className="border-b border-border">
              <td className="py-5 pr-4">{row.feature}</td>
              <td className="py-5 px-4 text-center">
                {row.free ? (
                  <CheckIcon className="mx-auto size-7 text-accent" />
                ) : (
                  <span aria-hidden className="text-muted">
                    –
                  </span>
                )}
                <span className="sr-only">{row.free ? "im Free-Plan enthalten" : "nicht im Free-Plan enthalten"}</span>
              </td>
              <td className="py-5 pl-4 text-center">
                {row.pro ? (
                  <CheckIcon className="mx-auto size-7 text-accent" />
                ) : (
                  <span aria-hidden className="text-muted">
                    –
                  </span>
                )}
                <span className="sr-only">{row.pro ? "im Pro-Plan enthalten" : "nicht im Pro-Plan enthalten"}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
