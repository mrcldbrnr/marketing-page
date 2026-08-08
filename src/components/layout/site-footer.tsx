import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { footerNav, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container width="wide">
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_2fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">{siteConfig.description}</p>
            <div className="flex gap-4 text-sm text-muted">
              {siteConfig.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-foreground">{group.title}</h2>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <p>{siteConfig.contact.address}</p>
        </div>
      </Container>
    </footer>
  );
}
