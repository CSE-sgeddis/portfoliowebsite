import { Link } from "@tanstack/react-router";
import { playBack, playHover } from "@/lib/sfx";

export function HudBar() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 flex items-end justify-between px-6 pb-4 sm:px-10">
      {/* Left: prompts */}
      <div className="pointer-events-auto flex items-center gap-4 text-parchment">
        <Link
          to="/"
          onMouseEnter={playHover}
          onClick={playBack}
          className="flex items-center gap-2 text-xs font-display uppercase tracking-[0.3em] text-foreground/80 hover:text-foreground"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-parchment text-[10px] font-bold">B</span>
          <span className="hidden sm:inline">戻る · Back</span>
        </Link>
      </div>

      {/* Right: stats */}
      <div className="pointer-events-auto">
        <div className="hud-frame flex flex-col gap-1 px-5 py-2 font-display text-sm tracking-wider sm:px-8 sm:text-base">
          <div className="flex items-center justify-between gap-8">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">Money</span>
            <span className="tabular-nums">¢ 31,992</span>
          </div>
          <div className="h-px bg-ink/30" />
          <div className="flex items-center justify-between gap-8">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">Mag</span>
            <span className="tabular-nums">✦ 22,327</span>
          </div>
        </div>
      </div>
    </div>
  );
}