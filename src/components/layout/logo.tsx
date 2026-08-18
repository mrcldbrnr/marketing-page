import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/site";

type LogoProps = {
  className?: string;
  /**
   * "auto" (default) follows the current colour scheme via `fill-current` /
   * `fill-accent`. "light" pins the wordmark to its light-mode colours —
   * for contexts (like the header, forced to a fixed white background) that
   * don't follow the theme. "dark" pins it to solid white, for contexts
   * (like the footer, forced to a fixed brand-blue background) that need a
   * monochrome light wordmark instead.
   */
  tone?: "auto" | "light" | "dark";
};

/** Wordmark, inlined as SVG (not <Image>) so its colours can follow the theme. */
export function Logo({ className, tone = "auto" }: LogoProps) {
  const textFill = tone === "light" ? "fill-[#0a0a0a]" : tone === "dark" ? "fill-white" : "fill-current";
  const accentFill = tone === "light" ? "fill-[#0000ff]" : tone === "dark" ? "fill-white" : "fill-accent";

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center rounded-sm",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      )}
      aria-label={`${siteConfig.name} – zur Startseite`}
    >
      <svg aria-hidden viewBox="0 0 800 200" className={cn("h-8 w-auto", textFill)}>
        <path d="M45,157.52549V43.26813h14.36364l39.50054,58.43433,39.50054-58.43433h14.2007v114.25735h-13.71117v-92.05836l-39.99007,59.57634-39.99007-59.25046v91.73247h-13.87411Z" />
        <path d="M213.61036,157.52549v-47.82472l-40.96914-66.43263h15.99589l31.82883,52.39558,31.99178-52.39558h15.83295l-40.96914,66.43263v47.82472h-13.71117Z" />
        <path d="M515.14337,157.52549l-34.92968-114.25735h13.87411l28.56434,93.20107,27.58456-93.20107h13.71117l27.09503,92.87519,28.89093-92.87519h13.87411l-35.41992,114.25735h-14.85317l-26.44256-91.89542-27.25868,91.89542h-14.69023Z" />
        <path d="M659.02396,157.52549V43.26813h14.03776l68.06417,91.73247V43.26813h13.87411v114.25735h-13.87411l-68.22782-92.22201v92.22201h-13.87411Z" />
        <path d="M371.63477,136.89648c-20.12598,0-36.5-16.37402-36.5-36.5s16.37402-36.5,36.5-36.5,36.5,16.37402,36.5,36.5-16.37402,36.5-36.5,36.5ZM371.63477,76.89648c-12.95801,0-23.5,10.54199-23.5,23.5s10.54199,23.5,23.5,23.5,23.5-10.54199,23.5-23.5-10.54199-23.5-23.5-23.5Z" />
        <circle cx="421.28464" cy="38.30322" r="18.13609" className={accentFill} />
        <path
          className={accentFill}
          d="M371.63477,186.33301c-47.38525,0-85.93604-38.55078-85.93604-85.93652S324.24951,14.46094,371.63477,14.46094c6.69385,0,13.38037.78027,19.875,2.31836,3.49316.82812,5.65381,4.33008,4.82617,7.82324-.82715,3.49316-4.32959,5.65527-7.82324,4.82715-5.51367-1.30664-11.19238-1.96875-16.87793-1.96875-40.21729,0-72.93604,32.71875-72.93604,72.93555s32.71875,72.93652,72.93604,72.93652,72.93604-32.71875,72.93604-72.93652c0-11.25488-2.49609-22.04785-7.41846-32.0791-1.58105-3.22266-.25049-7.11719,2.97217-8.69824,3.22217-1.58301,7.11768-.25098,8.69873,2.97168,5.8042,11.8291,8.74805,24.54883,8.74805,37.80566,0,47.38574-38.55127,85.93652-85.93652,85.93652Z"
        />
      </svg>
    </Link>
  );
}
