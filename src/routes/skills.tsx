import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SubPageLayout } from "@/components/SubPageLayout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Archive of the Seeker" },
      { name: "description", content: "Programming languages, tools, and professional skills." },
    ],
  }),
  component: SkillsPage,
});

// NOTE: the "level" numbers below are placeholders meant to reflect rough
// self-rated comfort, not a formal metric — adjust them to whatever feels
// honest to you.
const CATEGORIES = [
  {
    name: "Programming Languages",
    jp: "プログラミング言語",
    level: 75,
    skills: ["Java", "C++", "JavaScript", "HTML/CSS"],
  },
  {
    name: "Tools & Technologies",
    jp: "開発環境",
    level: 70,
    skills: ["Git", "GitHub", "VS Code", "Eclipse", "UNIX/Linux", "Microsoft Office Suite"],
  },
  {
    name: "Professional Skills",
    jp: "対人能力",
    level: 85,
    skills: [
      "Customer Service",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Problem Solving",
      "Adaptability",
      "Attention to Detail",
    ],
  },
  {
    name: "Languages",
    jp: "言語",
    level: 60,
    skills: ["English (native)", "Chinese (intermediate)"],
  },
];

function SkillsPage() {
  return (
    <SubPageLayout title="Skills" jpTitle="スキル · Archetype Tree">
      <div className="mx-auto grid max-w-6xl gap-5">
        {CATEGORIES.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="border-l-4 border-primary bg-card/60 p-5 backdrop-blur-sm"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="font-jp text-[10px] tracking-[0.3em] text-foreground/50">{a.jp}</p>
                <h3 className="font-display text-2xl uppercase text-foreground">{a.name}</h3>
              </div>
              <div className="text-right">
                <p className="font-display text-[10px] uppercase tracking-[0.3em] text-foreground/60">Comfort</p>
                <p className="font-display text-3xl text-primary">{a.level}</p>
              </div>
            </div>

            <div className="mt-3 stat-bar">
              <motion.div
                className="stat-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${a.level}%` }}
                transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {a.skills.map((s) => (
                <span
                  key={s}
                  className="border border-primary/50 px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-foreground/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SubPageLayout>
  );
}