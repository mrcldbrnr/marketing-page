import { Section } from "@/components/ui/section";
import { problem } from "@/content/landing";

/** Short, emotional problem/resolution beat — deliberately light, not technical. */
export function Problem() {
  return (
    <Section tone="surface">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <h2 className="text-[2rem] font-extrabold tracking-tight text-balance sm:text-[2.375rem]">
          {problem.title}
        </h2>
        <ul className="flex flex-col gap-3 text-lg text-muted">
          {problem.situations.map((situation) => (
            <li key={situation}>{situation}</li>
          ))}
        </ul>
        <p className="text-2xl font-semibold text-balance">{problem.resolution}</p>
      </div>
    </Section>
  );
}
