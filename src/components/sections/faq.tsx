import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { faq } from "@/content/landing";

type FaqProps = {
  /** Pass "h1" when this section carries the page title (the /faq page). */
  headingLevel?: "h1" | "h2";
  title?: string;
  description?: string;
  /** Subset of `faq.items` to show, e.g. for the homepage teaser. Defaults to all items. */
  items?: typeof faq.items;
  /** Optional "view all" link below the accordion, e.g. to the full /faq page. */
  cta?: { label: string; href: string };
  className?: string;
};

/**
 * Uses native <details>/<summary> — accessible and keyboard-operable without
 * any client-side JavaScript. The first item starts open so the accordion
 * doesn't read as fully collapsed/empty on load.
 */
export function Faq({
  headingLevel = "h2",
  title = faq.title,
  description,
  items = faq.items,
  cta,
  className,
}: FaqProps) {
  return (
    <Section id="faq" containerWidth="narrow" className={className}>
      <SectionHeading as={headingLevel} eyebrow={faq.eyebrow} title={title} description={description} />

      <div
        className={`${headingLevel === "h1" ? "mt-22" : "mt-12"} divide-y divide-border border-y border-border`}
      >
        {items.map((item, index) => (
          <details key={item.question} className="group py-5" open={index === 0}>
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

      {cta ? (
        <div className="mt-10 flex justify-center">
          <ButtonLink href={cta.href} variant="secondary" size="lg">
            {cta.label}
            <Icon name="arrowRight" className="size-4" />
          </ButtonLink>
        </div>
      ) : null}
    </Section>
  );
}
