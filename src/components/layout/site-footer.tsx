import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { footerNav, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white bg-[#0000ff]">
      <Container width="wide">
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_2fr]">
          <div className="flex flex-col gap-4">
            <Logo tone="dark" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-white">{group.title}</h2>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-white hover:text-white/70">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white py-6 text-sm text-white sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <p>{siteConfig.contact.address}</p>
        </div>
      </Container>
    </footer>
  );
}
