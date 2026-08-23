import { useEffect, useState } from "react";
import countdownFrameImg from "@/assets/countdown.png";

const TARGET = new Date("2026-12-04T19:00:00+05:30").getTime();

function calculateDiff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    isArrived: ms === 0,
  };
}

function VenueArchitecturalSketch({ className = "w-full max-w-[270px]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      fill="none"
      stroke="#5C1D2A"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ground & Terraces */}
      <line x1="20" y1="180" x2="380" y2="180" strokeWidth="1.6" />
      <line x1="40" y1="185" x2="360" y2="185" strokeWidth="0.8" strokeDasharray="3 3" />

      {/* Central Fountain Base */}
      <ellipse cx="200" cy="180" rx="35" ry="6" fill="#FAF6F0" strokeWidth="1.1" />
      <path d="M 185 180 Q 200 165 215 180" strokeWidth="1" />
      <path d="M 195 168 Q 200 155 205 168" strokeWidth="0.9" />

      {/* Main Central Palace Block */}
      <rect x="130" y="70" width="140" height="110" fill="#FAF6F0" strokeWidth="1.4" />
      {/* Triangular Central Pediment */}
      <polygon points="125,70 200,30 275,70" fill="#FAF6F0" strokeWidth="1.5" />
      <polygon points="140,68 200,38 260,68" strokeWidth="0.8" />
      <circle cx="200" cy="52" r="6" strokeWidth="1" />

      {/* Left Wing */}
      <rect x="50" y="90" width="80" height="90" fill="#FAF6F0" strokeWidth="1.3" />
      <polygon points="45,90 90,65 135,90" fill="#FAF6F0" strokeWidth="1.2" />

      {/* Right Wing */}
      <rect x="270" y="90" width="80" height="90" fill="#FAF6F0" strokeWidth="1.3" />
      <polygon points="265,90 310,65 355,90" fill="#FAF6F0" strokeWidth="1.2" />

      {/* Roof Domes / Finials */}
      <path d="M 196 30 C 196 20, 204 20, 204 30 Z" fill="#5C1D2A" />
      <line x1="200" y1="20" x2="200" y2="12" strokeWidth="1" />
      <path d="M 88 65 C 88 57, 92 57, 92 65 Z" fill="#5C1D2A" />
      <path d="M 308 65 C 308 57, 312 57, 312 65 Z" fill="#5C1D2A" />

      {/* Main Grand Arch Entrance */}
      <path d="M 180 180 V 135 A 20 20 0 0 1 220 135 V 180 Z" fill="#FAF6F0" strokeWidth="1.4" />
      <path d="M 186 180 V 140 A 14 14 0 0 1 214 140 V 180 Z" strokeWidth="0.9" />
      <line x1="200" y1="126" x2="200" y2="180" strokeWidth="0.7" />

      {/* Balcony Railings */}
      <line x1="130" y1="120" x2="270" y2="120" strokeWidth="1.2" />
      <line x1="130" y1="124" x2="270" y2="124" strokeWidth="0.8" />
      {Array.from({ length: 15 }).map((_, i) => (
        <line key={i} x1={135 + i * 9} y1="120" x2={135 + i * 9} y2="124" strokeWidth="0.7" />
      ))}

      {/* Arched Upper Windows (Central) */}
      <path d="M 148 110 V 92 A 7 7 0 0 1 162 92 V 110 Z" strokeWidth="0.9" />
      <path d="M 173 110 V 92 A 7 7 0 0 1 187 92 V 110 Z" strokeWidth="0.9" />
      <path d="M 213 110 V 92 A 7 7 0 0 1 227 92 V 110 Z" strokeWidth="0.9" />
      <path d="M 238 110 V 92 A 7 7 0 0 1 252 92 V 110 Z" strokeWidth="0.9" />

      {/* Left Wing Windows */}
      <rect x="65" y="105" width="18" height="28" rx="2" strokeWidth="0.9" />
      <rect x="95" y="105" width="18" height="28" rx="2" strokeWidth="0.9" />
      <rect x="65" y="145" width="18" height="35" rx="2" strokeWidth="0.9" />
      <rect x="95" y="145" width="18" height="35" rx="2" strokeWidth="0.9" />

      {/* Right Wing Windows */}
      <rect x="287" y="105" width="18" height="28" rx="2" strokeWidth="0.9" />
      <rect x="317" y="105" width="18" height="28" rx="2" strokeWidth="0.9" />
      <rect x="287" y="145" width="18" height="35" rx="2" strokeWidth="0.9" />
      <rect x="317" y="145" width="18" height="35" rx="2" strokeWidth="0.9" />

      {/* Flanking Cypress Trees */}
      <path d="M 30 180 C 25 150 22 120 30 100 C 38 120 35 150 30 180 Z" fill="#FAF6F0" strokeWidth="1" />
      <path d="M 370 180 C 365 150 362 120 370 100 C 378 120 375 150 370 180 Z" fill="#FAF6F0" strokeWidth="1" />
      <path d="M 120 180 C 117 160 115 140 120 125 C 125 140 123 160 120 180 Z" fill="#FAF6F0" strokeWidth="0.9" />
      <path d="M 280 180 C 277 160 275 140 280 125 C 285 140 283 160 280 180 Z" fill="#FAF6F0" strokeWidth="0.9" />
    </svg>
  );
}

interface CountdownSectionProps {
  id?: string;
}

const countdownSparkles = [
  { top: "6%", left: "8%", size: 6, color: "#B8966B", duration: 3.2, delay: 0.2 },
  { top: "8%", right: "10%", size: 8, color: "#F5E6C8", duration: 2.7, delay: 1.1 },
  { top: "16%", left: "6%", size: 5, color: "#C88D94", duration: 3.8, delay: 0.7 },
  { top: "18%", right: "8%", size: 9, color: "#8C263E", duration: 3.1, delay: 2.1 },
  { top: "28%", left: "5%", size: 7, color: "#B8966B", duration: 2.9, delay: 1.4 },
  { top: "32%", right: "6%", size: 5, color: "#FFF8F0", duration: 3.5, delay: 0.4 },
  { top: "44%", left: "7%", size: 8, color: "#F5E6C8", duration: 3.0, delay: 1.8 },
  { top: "48%", right: "7%", size: 6, color: "#B8966B", duration: 3.6, delay: 2.5 },
  { top: "58%", left: "6%", size: 7, color: "#C88D94", duration: 2.8, delay: 0.9 },
  { top: "65%", right: "5%", size: 9, color: "#B8966B", duration: 3.4, delay: 1.7 },
  { top: "76%", left: "7%", size: 6, color: "#8C263E", duration: 3.9, delay: 0.3 },
  { top: "84%", right: "8%", size: 8, color: "#F5E6C8", duration: 2.6, delay: 2.2 },
  { top: "92%", left: "10%", size: 5, color: "#B8966B", duration: 3.3, delay: 1.0 },
  { top: "94%", right: "12%", size: 7, color: "#C88D94", duration: 3.7, delay: 1.9 },
];

export function CountdownSection({ id = "countdown" }: CountdownSectionProps) {
  const [time, setTime] = useState(calculateDiff);

  useEffect(() => {
    setTime(calculateDiff());
    const intervalId = setInterval(() => {
      setTime(calculateDiff());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const units = [
    { label: "DAYS", value: String(time.days).padStart(2, "0") },
    { label: "HOURS", value: String(time.hours).padStart(2, "0") },
    { label: "MINUTES", value: String(time.minutes).padStart(2, "0") },
    { label: "SECONDS", value: String(time.seconds).padStart(2, "0") },
  ];

  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-between overflow-hidden bg-[#FAF6F2] pt-11 md:pt-14 pb-5 px-4 text-center select-none"
    >
      {/* Soft Editorial Paper Texture & Gradient Background */}
      <div className="absolute inset-0 bg-radial from-[#FFFFFF]/70 via-[#FAF6F2] to-[#F3EFE6]/80 pointer-events-none" />

      {/* Corner Botanical Watercolor Accents */}
      <div className="absolute top-2 left-2 pointer-events-none opacity-35">
        <svg className="w-10 h-10 text-[#6B705C]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M 10 10 Q 50 20 80 80 Q 20 50 10 10 Z" opacity="0.7" />
          <path d="M 10 10 Q 30 60 70 90 Q 40 40 10 10 Z" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute top-2 right-2 pointer-events-none opacity-35 scale-x-[-1]">
        <svg className="w-10 h-10 text-[#6B705C]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M 10 10 Q 50 20 80 80 Q 20 50 10 10 Z" opacity="0.7" />
          <path d="M 10 10 Q 30 60 70 90 Q 40 40 10 10 Z" opacity="0.5" />
        </svg>
      </div>

      {/* Sparkle Background Layer for Countdown Section */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
        <style>{`
          @keyframes countdownSparkleTwinkle {
            0%, 100% { opacity: 0; transform: scale(0.35) rotate(0deg); }
            50% { opacity: 0.95; transform: scale(1.15) rotate(22deg); }
          }
        `}</style>
        {countdownSparkles.map((sp, idx) => (
          <div
            key={idx}
            className="absolute flex items-center justify-center"
            style={{
              top: sp.top,
              left: sp.left,
              right: sp.right,
              width: `${sp.size}px`,
              height: `${sp.size}px`,
              color: sp.color,
              animation: `countdownSparkleTwinkle ${sp.duration}s ease-in-out ${sp.delay}s infinite`,
              filter: `drop-shadow(0 0 3px ${sp.color})`,
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main Content Composition */}
      <div className="relative z-10 mx-auto flex flex-1 h-full w-full max-w-[340px] flex-col items-center justify-between py-3 md:py-2">
        {/* ========================================================================= */}
        {/* 1. TOP HEADER & HEADING */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center">
          {/* Small Decorative Badge */}
          <span className="inline-block rounded-full border border-[#B8966B]/60 bg-[#FAF6F0] px-3.5 py-0.5 text-[8.5px] font-bold tracking-[0.26em] uppercase text-[#8C263E] shadow-2xs">
            THE BIG DAY
          </span>

          {/* Main Title */}
          <h2 className="script text-4xl sm:text-[44px] text-[#5C1D2A] mt-1 font-normal leading-tight drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]">
            Countdown
          </h2>

          {/* Gold Ornament Divider */}
          <div className="mx-auto my-1 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
            <span className="h-px w-10 bg-[#B8966B]/60" />
            <span>❖</span>
            <span className="h-px w-10 bg-[#B8966B]/60" />
          </div>

          {/* Romantic Subtitle */}
          <p className="font-display italic text-xs md:text-[13px] text-[#6B5744] mt-0.5">
            Counting every moment until we say &ldquo;I do&rdquo;
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. COUNTDOWN PLAQUE PANELS (The Main Centerpiece) */}
        {/* ========================================================================= */}
        <div className="my-auto py-2 w-full">
          {time.isArrived ? (
            <div className="rounded-xl border border-[#E6DCCF] bg-[#FAF6F0]/95 py-4 px-3 shadow-xs">
              <p className="font-display text-lg md:text-xl font-bold tracking-[0.15em] uppercase text-[#8C263E]">
                THE DAY HAS ARRIVED!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-1 sm:gap-2 w-full max-w-[345px] mx-auto px-0.5">
              {units.map((unit, idx) => (
                <div
                  key={unit.label}
                  className="relative flex flex-col items-center justify-center w-full h-[76px] sm:h-[88px] md:h-[96px] animate-in fade-in slide-in-from-bottom-2 duration-700"
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  {/* Separate Vintage Wooden Plaque PNG Frame Asset */}
                  <img
                    src={countdownFrameImg}
                    alt={`Vintage wooden frame for ${unit.label}`}
                    className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none drop-shadow-[0_2.5px_5px_rgba(0,0,0,0.2)]"
                  />

                  {/* Dynamic Value & Label Centered Safely Inside Inner Wooden Area */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-[78%] px-1 pt-0.5 pb-1">
                    <span className="font-display text-xl sm:text-2xl md:text-[26px] font-bold text-[#FAF6F0] tabular-nums leading-none block drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
                      {unit.value}
                    </span>
                    <span className="font-display text-[6px] sm:text-[7.5px] md:text-[8px] tracking-[0.1em] uppercase text-[#F5E6C8] font-bold mt-1 leading-none block drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.7)] whitespace-nowrap">
                      {unit.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Subtitle Under Plaque Boxes */}
          <p className="font-display italic text-xs md:text-[13.5px] text-[#6B5744] mt-2 text-center">
            until the big day
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3. DECORATIVE SEPARATOR */}
        {/* ========================================================================= */}
        <div className="my-1 flex items-center justify-center gap-2 text-xs text-[#B8966B] w-full">
          <span className="h-px w-12 bg-[#B8966B]/50" />
          <svg className="w-3.5 h-3.5 text-[#B8966B]" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15,12 12,22 9,12" />
          </svg>
          <span className="h-px w-12 bg-[#B8966B]/50" />
        </div>

        {/* ========================================================================= */}
        {/* 4. CONNECTED VENUE / CELEBRATION SECTION */}
        {/* ========================================================================= */}
        <div className="my-auto md:mt-12 md:mb-1 py-1 flex flex-col items-center w-full">
          {/* Small Heading */}
          <span className="font-display text-[8.5px] md:text-[9.5px] tracking-[0.26em] uppercase text-[#8C263E] font-bold mb-1.5">
            THE CELEBRATION WILL TAKE PLACE AT
          </span>

          {/* Architectural Sketch Frame */}
          <div className="relative my-1 p-1 rounded-lg border border-[#B8966B]/25 bg-[#FAF6F0]/70 shadow-2xs w-full max-w-[270px] flex justify-center">
            <VenueArchitecturalSketch className="w-[85%] max-w-[250px] h-auto" />
          </div>

          {/* Venue Name */}
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.02em] text-[#3B2518] mt-2">
            Rambagh Gardens
          </h3>

          {/* Venue Location */}
          <p className="font-display text-xs md:text-sm text-[#6B5744] mt-0.5">
            Jaipur, Rajasthan
          </p>

          {/* View Location CTA Button */}
          <a
            href="https://maps.google.com/?q=Rambagh+Palace+Jaipur"
            target="_blank"
            rel="noreferrer"
            className="mt-2.5 inline-flex items-center gap-1.5 px-4 py-1 rounded-full border border-[#8C263E]/40 bg-[#8C263E]/08 text-[9px] font-bold tracking-[0.24em] uppercase text-[#8C263E] shadow-2xs hover:bg-[#8C263E] hover:text-white transition-colors"
          >
            VIEW LOCATION
          </a>
        </div>
      </div>

      {/* Soft Top Transition Overlay (Family -> Countdown) */}
      <div className="absolute top-0 left-0 right-0 h-[60px] sm:h-[75px] md:h-[90px] bg-gradient-to-t from-transparent via-[#FAF6F0]/40 to-[#FAF6F0]/75 pointer-events-none z-20" />

      {/* Soft Bottom Transition Overlay (Countdown -> Memories) */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] sm:h-[85px] md:h-[100px] bg-gradient-to-b from-transparent via-[#FAF6F2]/50 to-[#FAF6F2] pointer-events-none z-20" />
    </section>
  );
}
