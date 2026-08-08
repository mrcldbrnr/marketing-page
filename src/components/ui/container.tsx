import { cn } from "@/lib/cn";

type ContainerProps = React.ComponentProps<"div"> & {
  /** `default` fits most content, `narrow` suits long-form text. */
  width?: "default" | "narrow" | "wide";
};

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

/** Horizontal page gutter + max width. Every section body sits in one. */
export function Container({ className, width = "default", ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-6 lg:px-8", widths[width], className)} {...props} />;
}
