import { Section, SectionHeading } from "@/components/ui/section";
import { faq } from "@/content/landing";

type FaqProps = {
  /** Pass "h1" when this section carries the page title (the /faq page). */
  headingLevel?: "h1" | "h2";
  className?: string;
};

/**
 * Uses native <details>/<summary> — accessible and keyboard-operable without
 * any client-side JavaScript.
 */
export function Faq({ headingLevel = "h2", className }: FaqProps) {
  return (
    <Section id="faq" containerWidth="narrow" className={className}>
      <SectionHeading as={headingLevel} eyebrow={faq.eyebrow} title={faq.title} />

      <div
        className={`${headingLevel === "h1" ? "mt-22" : "mt-12"} divide-y divide-border border-y border-border`}
      >
        {faq.items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              {item.question}
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-muted text-pretty">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
