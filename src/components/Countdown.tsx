import { useEffect, useState } from "react";

// Rashii Ammu's birthday — 27 June 2026
const BIRTHDAY_TS = new Date(2026, 5, 27, 0, 0, 0).getTime();

export function Countdown() {
  const [target] = useState(BIRTHDAY_TS);
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = now === null ? 0 : Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const items = [
    { label: "ದಿನಗಳು", value: days },
    { label: "ಗಂಟೆಗಳು", value: hours },
    { label: "ನಿಮಿಷಗಳು", value: minutes },
    { label: "ಸೆಕೆಂಡುಗಳು", value: seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6">
      {items.map((it) => (
        <div
          key={it.label}
          className="glass-card rounded-2xl px-3 py-5 text-center md:px-6 md:py-7"
        >
          <div className="font-display text-3xl text-gradient-romance md:text-5xl">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}