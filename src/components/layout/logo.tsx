import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/site";

/** Wordmark. Swap the span for an <Image> or inline SVG once a logo exists. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 rounded-sm text-lg font-semibold tracking-tight",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      )}
      aria-label={`${siteConfig.name} – zur Startseite`}
    >
      <span aria-hidden className="size-6 rounded-md bg-accent" />
      {siteConfig.name}
    </Link>
  );
}
