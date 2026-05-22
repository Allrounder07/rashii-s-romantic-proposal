import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

// Soft romantic ambient piano loop (royalty-free)
const MUSIC_URL =
  "https://cdn.pixabay.com/download/audio/2022/10/30/audio_347111d654.mp3?filename=romantic-piano-126529.mp3";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio(MUSIC_URL);
    a.loop = true;
    a.volume = 0.35;
    audioRef.current = a;
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play romantic music"}
      className="glass-card fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full text-rose transition hover:scale-110 md:right-6 md:top-6"
    >
      {playing ? (
        <Music className="h-5 w-5 animate-pulse" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </button>
  );
}