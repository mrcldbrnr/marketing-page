import { why } from "@/content/why";

export function TestimonialGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {why.testimonials.map((item) => (
        <li key={item.author} className="flex flex-col gap-6 rounded-3xl bg-[#0000ff] p-10 text-white">
          <blockquote className="text-[1.75rem] leading-snug font-semibold text-pretty italic">
            «{item.quote}»
          </blockquote>
          <p className="mt-auto text-[1.75rem]">{item.author}</p>
        </li>
      ))}
    </ul>
  );
}
