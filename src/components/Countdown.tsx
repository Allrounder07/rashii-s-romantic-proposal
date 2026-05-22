import { useEffect, useState } from "react";

function getNextBirthday() {
  // Default: next occurrence of Dec 1 — user can edit this date later
  const now = new Date();
  const year = now.getMonth() >= 11 && now.getDate() > 1 ? now.getFullYear() + 1 : now.getFullYear();
  return new Date(year, 11, 1, 0, 0, 0).getTime();
}

export function Countdown() {
  const [target] = useState(getNextBirthday);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const items = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
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