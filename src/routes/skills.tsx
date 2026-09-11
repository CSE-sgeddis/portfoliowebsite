import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SubPageLayout } from "@/components/SubPageLayout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Archive of the Seeker" },
      { name: "description", content: "The seeker's archetypes and stat distribution." },
    ],
  }),
  component: SkillsPage,
});

const ARCHETYPES = [
  { name: "Frontend Mage", level: 92, jp: "前衛魔術師", skills: ["React", "TypeScript", "Tailwind", "Framer Motion"] },
  { name: "Backend Knight", level: 78, jp: "後衛騎士", skills: ["Node", "Postgres", "Redis", "Edge Functions"] },
  { name: "Design Bard",    level: 70, jp: "意匠の吟遊詩人", skills: ["Figma", "Type", "Color", "Motion"] },
  { name: "DevOps Ranger",  level: 60, jp: "辺境の追跡者", skills: ["Docker", "CI/CD", "Cloudflare", "Observability"] },
];

function SkillsPage() {
  return (
    <SubPageLayout title="Skills" jpTitle="スキル · Archetype Tree">
      <div className="mx-auto grid max-w-6xl gap-5">
        {ARCHETYPES.map((a, i) => (
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
                <p className="font-display text-[10px] uppercase tracking-[0.3em] text-foreground/60">Mastery</p>
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
                <span key={s} className="border border-primary/50 px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-foreground/80">
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