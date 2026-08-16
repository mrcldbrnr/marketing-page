"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { mainNav, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
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

  // The header is pinned to a fixed white background regardless of colour
  // scheme, so every colour inside it is pinned to its light-mode value too
  // (arbitrary values instead of the `foreground`/`accent`/`background`
  // tokens, which would otherwise flip to their dark-mode variants and
  // become unreadable against the white bar).
  const navLinkClass = (active: boolean) =>
    cn(
      "rounded-full px-4 py-2 text-[21px] font-semibold transition-colors",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ff]",
      active ? "bg-[#0000ff]/10 text-[#0a0a0a]" : "text-[#0000ff] hover:text-[#0a0a0a]",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-[#cbcbcb] bg-white">
      <Container width="default">
        <div className="relative flex h-16 items-center gap-6">
          <Logo tone="light" className="shrink-0" />

          <nav
            aria-label="Hauptnavigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={navLinkClass(isActive(item.href))}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden md:block">
              <ButtonLink
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="bg-[#0a0a0a] text-white hover:bg-[#0000ff] hover:text-white"
              >
                myown jetzt live testen
                <Icon name="external" className="size-4" />
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="-mr-2 rounded-md p-2 text-[#0a0a0a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0000ff] md:hidden"
            >
              <span className="sr-only">{open ? "Menü schliessen" : "Menü öffnen"}</span>
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-[#cbcbcb] bg-white md:hidden">
          <Container width="default">
            <nav aria-label="Hauptnavigation mobil" className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  // Hash links on the current page don't change the pathname.
                  onClick={() => setOpen(false)}
                  className={navLinkClass(isActive(item.href))}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 w-full bg-[#0a0a0a] text-white hover:bg-[#0000ff] hover:text-white"
              >
                myown jetzt live testen
                <Icon name="external" className="size-4" />
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
