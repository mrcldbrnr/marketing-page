import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { footerNav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white bg-[#0000ff]">
      <Container width="wide">
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_2fr]">
          <div className="flex flex-col gap-4">
            <Logo tone="dark" />
          </div>

          <div className="grid grid-cols-2 gap-8">
            {footerNav.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
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
      </Container>
    </footer>
  );
}
