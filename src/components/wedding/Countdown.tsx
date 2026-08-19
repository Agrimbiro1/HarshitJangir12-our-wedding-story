import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-04T19:00:00+05:30").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown() {
  const [t, setT] = useState(() => diff());

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ] as const;

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6">
      {items.map(([label, value]) => (
        <div key={label} className="border border-border bg-card px-2 py-6">
          <div className="font-display text-4xl md:text-5xl text-primary tabular-nums">
            {String(value).padStart(2, "0")}
          </div>
          <div className="eyebrow mt-2">{label}</div>
        </div>
      ))}
    </div>
  );
}
