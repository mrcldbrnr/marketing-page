import { cn } from "@/lib/cn";

/**
 * Typographic defaults for long-form text (legal pages, blog posts).
 * Kept hand-rolled so the project does not need @tailwindcss/typography;
 * swap in that plugin if the content ever gets richer than this.
 */
export function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 leading-relaxed text-muted",
        "[&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground",
        "[&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground",
        "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4",
        "[&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6",
        "[&_strong]:text-foreground",
        className,
      )}
      {...props}
    />
  );
}
