// Lightweight SFX helpers. Swap the URLs for real files under /public/sfx/
// once you have them — these no-op safely if a sound is missing.

let hoverAudio: HTMLAudioElement | null = null;
let backAudio: HTMLAudioElement | null = null;
let confirmAudio: HTMLAudioElement | null = null;

function isMuted() {
  if (typeof window === "undefined") return true;
  return window.localStorage.getItem("sfx-muted") === "true";
}

function play(audio: HTMLAudioElement | null) {
  if (!audio || isMuted()) return;
  try {
    audio.currentTime = 0;
    void audio.play();
  } catch {
    // Autoplay/interaction restrictions — fail silently.
  }
}

function getAudio(ref: HTMLAudioElement | null, src: string): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!ref) {
    ref = new Audio(src);
    ref.volume = 0.4;
  }
  return ref;
}

export function playHover() {
  hoverAudio = getAudio(hoverAudio, "/sfx/hover.mp3");
  play(hoverAudio);
}

export function playBack() {
  backAudio = getAudio(backAudio, "/sfx/back.mp3");
  play(backAudio);
}

export function playConfirm() {
  confirmAudio = getAudio(confirmAudio, "/sfx/confirm.mp3");
  play(confirmAudio);
}