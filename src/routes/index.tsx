import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HudBar } from "@/components/HudBar";
import { playHover, playConfirm } from "@/lib/sfx";

// TODO: point this at wherever paint-bg.jpg actually lives, e.g.
//   import paintBg from "@/assets/paint-bg.jpg";
// or, if it's in /public, just use the string "/paint-bg.jpg" below directly.
import paintBg from "@/assets/paint-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Archive of the Seeker — Portfolio" },
      { name: "description", content: "A portfolio styled after the Metaphor: ReFantazio command menu." },
    ],
  }),
  component: HomePage,
});

type NavItem = {
  label: string;
  jp: string;
  to: "/" | "/about" | "/projects" | "/skills" | "/contact";
  size: string;
  rotate: number;
  indent: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "HOME",     jp: "起点",     to: "/",         size: "text-6xl sm:text-7xl md:text-8xl",  rotate: -3, indent: "ml-0" },
  { label: "ABOUT",    jp: "自己紹介", to: "/about",    size: "text-5xl sm:text-6xl md:text-7xl",  rotate: -2, indent: "ml-6 sm:ml-10" },
  { label: "PROJECTS", jp: "業績",     to: "/projects", size: "text-6xl sm:text-7xl md:text-8xl",  rotate: -2.5, indent: "ml-2 sm:ml-4" },
  { label: "SKILLS",   jp: "技能",     to: "/skills",   size: "text-5xl sm:text-6xl md:text-7xl",  rotate: -1.5, indent: "ml-12 sm:ml-20" },
  { label: "CONTACT",  jp: "連絡先",   to: "/contact",  size: "text-6xl sm:text-7xl md:text-8xl",  rotate: -2, indent: "ml-4 sm:ml-8" },
];

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background art + vignette + paint-grain overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${paintBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-vignette)" }}
      />
      <div className="paint-texture absolute inset-0" />

      {/* Diagonal color block behind the nav stack, like the reference's pink/teal slabs */}
      <div
        className="absolute -left-24 top-[8%] h-[55%] w-[85%] sm:w-[65%]"
        style={{
          background: "linear-gradient(100deg, var(--crimson) 0%, var(--magenta) 55%, transparent 100%)",
          opacity: 0.85,
          transform: "skewY(-4deg)",
        }}
      />

      {/* Vertical "SELECTED COMMAND"-style label, right edge */}
      <div className="jp-vertical pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-sm text-foreground/70 sm:right-8 sm:block sm:text-base">
        SELECTED · MENU
      </div>

      {/* Nav stack */}
      <nav className="relative z-10 flex min-h-screen flex-col justify-center gap-1 px-6 pb-32 pt-16 sm:gap-2 sm:px-12 md:px-20">
        <p className="mb-4 font-display text-xs uppercase tracking-[0.4em] text-foreground/60 sm:mb-6 sm:text-sm">
          Archive of the Seeker · Portfolio System
        </p>

        {NAV_ITEMS.map((item, i) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={item.indent}
            style={{ transform: `rotate(${item.rotate}deg)` }}
          >
            <Link
              to={item.to}
              onMouseEnter={playHover}
              onClick={playConfirm}
              className="metaphor-item group flex items-baseline gap-4"
            >
              <span className={`${item.size} leading-[0.9]`}>{item.label}</span>
              <span className="font-jp text-xs tracking-[0.3em] text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 sm:text-sm">
                {item.jp}
              </span>
            </Link>
          </motion.div>
        ))}
      </nav>

      <HudBar />
    </div>
  );
}