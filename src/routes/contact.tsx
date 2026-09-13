import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout } from "@/components/SubPageLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Archive of the Seeker" },
      { name: "description", content: "Get in touch with Shalin Geddis." },
    ],
  }),
  component: ContactPage,
});

const LINKS = [
  { label: "Email", value: "shalindixon@gmail.com", href: "mailto:shalindixon@gmail.com" },
  { label: "GitHub", value: "github.com/CSE-sgeddis", href: "https://github.com/CSE-sgeddis" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shalin-geddis",
    href: "https://www.linkedin.com/in/shalin-geddis-10a477319",
  },
];

function ContactPage() {
  return (
    <SubPageLayout title="Contact" jpTitle="連絡先 · Send a Signal">
      <div className="mx-auto max-w-3xl">
        <div className="quest-card p-6 sm:p-8">
          <p className="font-serif text-lg text-ink/90">
            Have a project in mind, or just want to talk shop? Reach out below.
          </p>

          <div className="mt-6 grid gap-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-baseline justify-between border-b border-ink/20 pb-2 transition-colors hover:border-ink/60"
              >
                <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink/50">
                  {link.label}
                </span>
                <span className="font-display text-lg text-ink">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}