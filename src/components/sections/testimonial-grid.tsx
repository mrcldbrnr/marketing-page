import { why } from "@/content/why";

export function TestimonialGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {why.testimonials.map((item) => (
        <li
          key={item.author}
          className="flex flex-col gap-6 rounded-3xl border-2 border-[#0000ff] bg-white p-10 text-[#0000ff]"
        >
          <blockquote className="text-[1.75rem] leading-snug font-semibold text-pretty">«{item.quote}»</blockquote>
          <p className="mt-auto text-[1.125rem]">{item.author}</p>
        </li>
      ))}
    </ul>
  );
}
