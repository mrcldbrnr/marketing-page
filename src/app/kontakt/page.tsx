import { Section, SectionHeading } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Kontakt",
  description: "Schreib uns – wir melden uns in der Regel innerhalb eines Werktags.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <Section className="pt-[2.25rem] lg:pt-[4.25rem]">
      <SectionHeading
        as="h1"
        eyebrow="Kontakt"
        title="Sprechen wir darüber"
        description="Schreib uns kurz, worum es geht. Wir melden uns in der Regel innerhalb eines Werktags."
        align="left"
        className="max-w-3xl"
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem]">
        <ContactForm />

        <aside className="flex flex-col gap-6 rounded-3xl border border-border bg-surface p-6 text-sm">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold">E-Mail</h2>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-muted hover:text-accent">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold">Telefon</h2>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="text-muted hover:text-accent"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold">Adresse</h2>
            <p className="text-muted">{siteConfig.contact.address}</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
