import { Container } from "@/components/ui/container";
import { logos } from "@/content/landing";

/** Social proof strip. Swap the text placeholders for real customer logos. */
export function LogoCloud() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <Container>
        <p className="text-center text-sm font-medium text-muted">{logos.title}</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.items.map((name) => (
            <li key={name} className="text-lg font-semibold tracking-tight text-muted opacity-70">
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
