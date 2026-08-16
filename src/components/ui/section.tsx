import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

type SectionProps = React.ComponentProps<"section"> & {
  /** `surface` tints the band to separate it from its neighbours. */
  tone?: "default" | "surface";
  containerWidth?: React.ComponentProps<typeof Container>["width"];
};

/**
 * A full-bleed band with consistent vertical rhythm, wrapping its children in a
 * Container. Compose landing pages out of these rather than ad-hoc `<section>`s.
 */
export function Section({
  className,
  children,
  tone = "default",
  containerWidth = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-section lg:py-section-lg",
        tone === "surface" && "border-y border-border bg-surface",
        className,
      )}
      {...props}
    >
      <Container width={containerWidth}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  /** Small label above the headline. */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Renders as h1 on pages where the section carries the page title. */
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold tracking-wide text-accent uppercase">{eyebrow}</span>
      ) : null}
      <Heading
        className={cn(
          "font-extrabold tracking-tight text-balance",
          // h2 is 2px larger than h1 at every breakpoint (kept as a separate
          // class list rather than a shared one, since they must scale
          // independently).
          Heading === "h2" ? "text-[2rem] sm:text-[2.375rem]" : "text-3xl sm:text-4xl",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="text-lg leading-relaxed text-muted text-pretty">{description}</p>
      ) : null}
    </div>
  );
}
