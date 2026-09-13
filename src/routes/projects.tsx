import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SubPageLayout } from "@/components/SubPageLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Archive of the Seeker" },
      { name: "description", content: "Completed quests and ongoing work." },
    ],
  }),
  component: ProjectsPage,
});

// TODO: add more projects here as you build them — this array is easy to extend
const PROJECTS = [
  {
    title: "MazeRunners",
    jp: "討伐記録・01",
    status: "Completed",
    description:
      "A Java-based virtual escape room built as part of a software engineering team project — rooms, puzzles, player management, scoring, and time tracking. Contributed to both front-end and back-end functionality, system planning, implementation, and testing.",
    tags: ["Java", "Git/GitHub", "Object-Oriented Design"],
    href: "https://github.com/CSE-sgeddis",
  },
];

function ProjectsPage() {
  return (
    <SubPageLayout title="Projects" jpTitle="業績 · Completed Quests">
      <div className="mx-auto grid max-w-5xl gap-6">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="quest-card block p-6 transition-transform hover:-translate-y-1 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="font-jp text-[10px] tracking-[0.3em] text-ink/50">{p.jp}</p>
                <h3 className="font-display text-2xl uppercase text-ink sm:text-3xl">{p.title}</h3>
              </div>
              <span className="border border-ink/40 px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-ink/70">
                {p.status}
              </span>
            </div>

            <p className="mt-3 font-serif text-base text-ink/80">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="border border-ink/30 px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-ink/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </SubPageLayout>
  );
}