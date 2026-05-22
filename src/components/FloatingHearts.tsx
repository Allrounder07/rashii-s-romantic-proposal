import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function FloatingHearts({ count = 18 }: { count?: number }) {
  const [hearts, setHearts] = useState<Array<{id:number;left:number;size:number;duration:number;delay:number;opacity:number}>>([]);
  useEffect(() => {
    setHearts(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 22,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    );
  }, [count]);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="absolute animate-float-heart fill-rose text-rose"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
            filter: "drop-shadow(0 0 6px oklch(0.72 0.18 5 / 0.7))",
          }}
        />
      ))}
    </div>
  );
}

export function Sparkles({ count = 30 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Array<{id:number;top:number;left:number;size:number;delay:number}>>([]);
  useEffect(() => {
    setSparkles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 3,
      })),
    );
  }, [count]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute animate-sparkle rounded-full bg-gold"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px oklch(0.82 0.13 85 / 0.9)",
          }}
        />
      ))}
    </div>
  );
}