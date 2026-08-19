import { Section } from "@/components/ui/section";
import { benefits } from "@/content/landing";

export function Benefits() {
  return (
    <Section>
      <ul className="grid gap-6 sm:grid-cols-3">
        {benefits.items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 rounded-3xl border-2 border-[#0000ff] bg-background p-8 text-center"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-lg text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
