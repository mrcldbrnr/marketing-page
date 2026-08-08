"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { mainNav } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu when the route changes — including via back/forward.
  // Adjusting state during render is React's recommended alternative to an effect.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    return path !== "/" && path !== "" && pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container width="wide">
        <div className="flex h-16 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors hover:text-foreground",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  isActive(item.href) ? "font-medium text-foreground" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <ButtonLink href="/kontakt" size="sm">
              Demo buchen
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-2 rounded-md p-2 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            <span className="sr-only">{open ? "Menü schliessen" : "Menü öffnen"}</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <Container width="wide">
            <nav aria-label="Hauptnavigation mobil" className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  // Hash links on the current page don't change the pathname.
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base text-foreground hover:bg-surface"
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/kontakt" onClick={() => setOpen(false)} className="mt-3 w-full">
                Demo buchen
              </ButtonLink>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      className="size-6"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}
