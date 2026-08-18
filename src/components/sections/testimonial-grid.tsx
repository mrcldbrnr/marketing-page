import { why } from "@/content/why";

export function TestimonialGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {why.testimonials.map((item) => (
        <li key={item.author} className="flex flex-col gap-4 rounded-3xl border border-border bg-background p-6">
          <blockquote className="text-sm leading-relaxed text-pretty">«{item.quote}»</blockquote>
          <p className="mt-auto text-sm font-medium">{item.author}</p>
        </li>
      ))}
    </ul>
  );
}
