import { Section, SectionHeading } from "@/components/ui/section";
import { testimonials } from "@/content/landing";

export function Testimonials() {
  return (
    <Section tone="surface">
      <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />

      <ul className="mt-16 grid gap-6 lg:grid-cols-3">
        {testimonials.items.map((item) => (
          <li
            key={item.author}
            className="flex flex-col gap-6 rounded-2xl border border-border bg-background p-6"
          >
            <blockquote className="leading-relaxed text-pretty">“{item.quote}”</blockquote>
            <div className="mt-auto flex items-center gap-3">
              <span
                aria-hidden
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent"
              >
                {initials(item.author)}
              </span>
              <div className="text-sm">
                <p className="font-medium">{item.author}</p>
                <p className="text-muted">{item.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}
