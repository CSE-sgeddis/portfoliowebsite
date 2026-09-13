import { useEffect, useState } from "react";

const STORAGE_KEY = "sfx-muted";

function getInitialMuted() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export function SoundToggle() {
  const [muted, setMuted] = useState(getInitialMuted);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(muted));
    window.dispatchEvent(new CustomEvent("sfx-mute-change", { detail: muted }));
  }, [muted]);

  return (
    <button
      onClick={() => setMuted((m) => !m)}
      aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}
      className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border-2 border-parchment/60 text-foreground/80 transition-colors hover:border-parchment hover:text-foreground"
    >
      {muted ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9v6h4l5 5V4L7 9H3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l5 8M21 8l-5 8" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9v6h4l5 5V4L7 9H3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a5 5 0 010 8M18.5 5.5a9 9 0 010 13" />
        </svg>
      )}
    </button>
  );
}