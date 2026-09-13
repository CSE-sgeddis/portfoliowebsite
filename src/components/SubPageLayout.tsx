import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { HudBar } from "@/components/HudBar";

interface SubPageLayoutProps {
  title: string;
  jpTitle?: string;
  children: ReactNode;
}

export function SubPageLayout({ title, jpTitle, children }: SubPageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="paint-texture absolute inset-0 opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />

      <div className="relative z-10 px-6 pb-32 pt-16 sm:px-12 md:px-20">
        <motion.header
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14"
        >
          {jpTitle && (
            <p className="mb-2 font-jp text-xs uppercase tracking-[0.4em] text-foreground/50 sm:text-sm">
              {jpTitle}
            </p>
          )}
          <h1 className="metaphor-item text-5xl sm:text-6xl md:text-7xl" style={{ transform: "rotate(-2deg)" }}>
            {title}
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>

      <HudBar />
    </div>
  );
}