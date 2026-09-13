import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout } from "@/components/SubPageLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Archive of the Seeker" },
      { name: "description", content: "Shalin Geddis — Computer Information Systems student and developer." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SubPageLayout title="About" jpTitle="自己紹介 · Origin">
      <div className="mx-auto grid max-w-4xl gap-6">
        <div className="quest-card p-6 sm:p-8">
          <p className="font-serif text-lg leading-relaxed sm:text-xl">
            I'm Shalin Geddis, a Computer Information Systems student at the
            University of South Carolina with a minor in Business Management.
            I like building interfaces that feel considered rather than
            default — which is part of why this portfolio borrows its visual
            language from <em>Metaphor: ReFantazio</em>'s command menu.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Based in", value: "Columbia, SC" },
            { label: "Studying", value: "Computer Information Systems, B.S." },
            { label: "Minor", value: "Business Management" },
            { label: "School", value: "University of South Carolina · 2022–2027" },
          ].map((row) => (
            <div key={row.label} className="border-l-4 border-primary bg-card/60 p-4 backdrop-blur-sm">
              <p className="font-display text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                {row.label}
              </p>
              <p className="mt-1 font-display text-lg text-foreground">{row.value}</p>
            </div>
          ))}
        </div>

        <div className="quest-card p-6 sm:p-8">
          <p className="font-jp text-[10px] tracking-[0.3em] text-ink/50">経験 · Experience</p>
          <h3 className="mt-1 font-display text-xl uppercase text-ink sm:text-2xl">Professional Experience</h3>
          <div className="mt-4 grid gap-4">
            <div>
              <p className="font-display text-base uppercase text-ink">Barista/Cashier — Starbucks</p>
              <p className="font-serif text-sm text-ink/70">Columbia, SC · May 2025 – Present</p>
            </div>
            <div>
              <p className="font-display text-base uppercase text-ink">Floor Staff — Regal Entertainment</p>
              <p className="font-serif text-sm text-ink/70">Columbia, SC · September 2024 – November 2025</p>
            </div>
          </div>
        </div>

        <div className="quest-card p-6 sm:p-8">
          <p className="font-jp text-[10px] tracking-[0.3em] text-ink/50">経歴 · Coursework</p>
          <h3 className="mt-1 font-display text-xl uppercase text-ink sm:text-2xl">Relevant Coursework</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Database Management Systems",
              "Data Structures & Problem-Solving",
              "Object-Oriented Programming",
              "Systems Analysis",
              "Debugging & Testing",
            ].map((c) => (
              <span
                key={c}
                className="border border-ink/30 px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-ink/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}