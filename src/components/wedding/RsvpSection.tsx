import { useState, useRef, useEffect, type FormEvent, type MouseEvent } from "react";
import confetti from "canvas-confetti";

interface RsvpSectionProps {
  id?: string;
  coupleNames?: string;
  initialGuestName?: string;
}

const rsvpSparkles = [
  { top: "6%", left: "8%", size: 6, color: "#B8966B", duration: 3.2, delay: 0.2 },
  { top: "8%", right: "10%", size: 8, color: "#F5E6C8", duration: 2.7, delay: 1.1 },
  { top: "18%", left: "6%", size: 5, color: "#C88D94", duration: 3.8, delay: 0.7 },
  { top: "20%", right: "8%", size: 9, color: "#8C263E", duration: 3.1, delay: 2.1 },
  { top: "35%", left: "7%", size: 7, color: "#B8966B", duration: 2.9, delay: 1.4 },
  { top: "38%", right: "6%", size: 5, color: "#FFF8F0", duration: 3.5, delay: 0.4 },
  { top: "54%", left: "6%", size: 8, color: "#F5E6C8", duration: 3.0, delay: 1.8 },
  { top: "58%", right: "7%", size: 6, color: "#B8966B", duration: 3.6, delay: 2.5 },
  { top: "72%", left: "8%", size: 7, color: "#C88D94", duration: 2.8, delay: 0.9 },
  { top: "78%", right: "6%", size: 9, color: "#B8966B", duration: 3.4, delay: 1.7 },
  { top: "88%", left: "10%", size: 5, color: "#B8966B", duration: 3.3, delay: 1.0 },
  { top: "92%", right: "12%", size: 7, color: "#C88D94", duration: 3.7, delay: 1.9 },
];

const burstParticles = [
  { angle: 0, distance: 160, size: 10, color: "#D4AF37" },
  { angle: 30, distance: 200, size: 8, color: "#C88D94" },
  { angle: 60, distance: 170, size: 12, color: "#8C263E" },
  { angle: 90, distance: 220, size: 9, color: "#F5E6C8" },
  { angle: 120, distance: 180, size: 14, color: "#D4AF37" },
  { angle: 150, distance: 160, size: 8, color: "#C88D94" },
  { angle: 180, distance: 210, size: 11, color: "#FFF8F0" },
  { angle: 210, distance: 175, size: 9, color: "#8C263E" },
  { angle: 240, distance: 190, size: 12, color: "#F5E6C8" },
  { angle: 270, distance: 230, size: 8, color: "#D4AF37" },
  { angle: 300, distance: 170, size: 11, color: "#C88D94" },
  { angle: 330, distance: 195, size: 10, color: "#8C263E" },
];

function triggerCrazyCelebration() {
  if (typeof window === "undefined") return;

  // Stage 1: Left & Right Explosive Cannons
  confetti({
    particleCount: 90,
    angle: 60,
    spread: 75,
    origin: { x: 0, y: 0.75 },
    colors: ["#D4AF37", "#8C263E", "#FAF6F0", "#C88D94", "#F5E6C8"],
    shapes: ["star", "circle"],
    scalar: 1.3,
    zIndex: 999,
  });

  confetti({
    particleCount: 90,
    angle: 120,
    spread: 75,
    origin: { x: 1, y: 0.75 },
    colors: ["#D4AF37", "#8C263E", "#FAF6F0", "#C88D94", "#F5E6C8"],
    shapes: ["star", "circle"],
    scalar: 1.3,
    zIndex: 999,
  });

  // Stage 2: Central Fireworks Grand Blast
  setTimeout(() => {
    confetti({
      particleCount: 140,
      spread: 110,
      origin: { y: 0.5 },
      colors: ["#FFD700", "#8C263E", "#E6C280", "#FFFFFF", "#E11D48"],
      scalar: 1.5,
      zIndex: 999,
    });
  }, 350);

  // Stage 3: Golden Star Rain
  setTimeout(() => {
    confetti({
      particleCount: 70,
      angle: 90,
      spread: 130,
      startVelocity: 45,
      origin: { x: 0.5, y: 0.25 },
      colors: ["#D4AF37", "#F5E6C8", "#FFD700"],
      shapes: ["star"],
      scalar: 1.1,
      zIndex: 999,
    });
  }, 900);
}

function playCelebrationChime(isMuted: boolean) {
  if (isMuted || typeof window === "undefined") return;
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // Euphoric ascending musical chord sweep (C5, E5, G5, C6, E6)
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.08 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 1.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 1.5);
    });
  } catch (err) {
    console.warn("Audio Context playback prevented:", err);
  }
}

export function RsvpSection({
  id = "rsvp",
  coupleNames = "Aarav & Meera",
  initialGuestName = "",
}: RsvpSectionProps) {
  const [status, setStatus] = useState<"initial" | "animating" | "accepted">("initial");
  const [guestName, setGuestName] = useState(initialGuestName);
  const [isMuted, setIsMuted] = useState(false);
  const [attendingCount, setAttendingCount] = useState<number>(1);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Sync initialGuestName if provided later
  useEffect(() => {
    if (initialGuestName && !guestName) {
      setGuestName(initialGuestName);
    }
  }, [initialGuestName, guestName]);

  const handleAccept = (e: FormEvent) => {
    e.preventDefault();
    setStatus("animating");
    playCelebrationChime(isMuted);
    triggerCrazyCelebration();

    setTimeout(() => {
      setStatus("accepted");
      triggerCrazyCelebration();
    }, 2800);
  };

  const handleReblast = () => {
    playCelebrationChime(isMuted);
    triggerCrazyCelebration();
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const displayGuestName = guestName.trim() || "Honored Guest";

  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-between overflow-hidden bg-[#FAF6F2] pt-11 md:pt-14 pb-6 px-4 text-center select-none"
    >
      {/* Soft Editorial Paper Texture & Gradient Background */}
      <div className="absolute inset-0 bg-radial from-[#FFFFFF]/80 via-[#FAF6F2] to-[#F3EFE6]/90 pointer-events-none" />

      {/* Sparkle Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
        <style>{`
          @keyframes rsvpSparkleTwinkle {
            0%, 100% { opacity: 0; transform: scale(0.35) rotate(0deg); }
            50% { opacity: 0.95; transform: scale(1.25) rotate(22deg); }
          }
          @keyframes glowPulse {
            0%, 100% { opacity: 0.4; transform: scale(0.85); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          @keyframes particleFloatCrazy {
            0% { opacity: 0; transform: translate(0, 0) scale(0.2) rotate(0deg); }
            35% { opacity: 1; transform: translate(var(--tx), var(--ty)) scale(1.3) rotate(240deg); }
            100% { opacity: 0; transform: translate(calc(var(--tx) * 1.5), calc(var(--ty) * 1.5)) scale(0.4) rotate(480deg); }
          }
          @keyframes cardShimmer {
            0% { transform: translateX(-100%) rotate(25deg); }
            100% { transform: translateX(200%) rotate(25deg); }
          }
          @keyframes shockwaveExpand {
            0% { transform: scale(0.2); opacity: 1; }
            100% { transform: scale(2.8); opacity: 0; }
          }
        `}</style>
        {rsvpSparkles.map((sp, idx) => (
          <div
            key={idx}
            className="absolute flex items-center justify-center pointer-events-none"
            style={{
              top: sp.top,
              left: sp.left,
              right: sp.right,
              width: `${sp.size}px`,
              height: `${sp.size}px`,
              color: sp.color,
              animation: `rsvpSparkleTwinkle ${sp.duration}s ease-in-out ${sp.delay}s infinite`,
              filter: `drop-shadow(0 0 4px ${sp.color})`,
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Top Controls: Sound Toggle */}
      <div className="absolute top-4 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B8966B]/50 bg-[#FAF6F0]/90 text-[#8C263E] shadow-sm hover:bg-[#8C263E] hover:text-white transition-colors cursor-pointer"
          title={isMuted ? "Unmute Celebration Chime" : "Mute Sound"}
        >
          {isMuted ? (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      </div>

      {/* Main Content Composition */}
      <div className="relative z-10 mx-auto flex flex-1 h-full w-full max-w-[350px] flex-col items-center justify-between py-2">
        {/* ========================================================================= */}
        {/* 1. INITIAL RSVP MINIMAL ELEGANT ACTION STATE */}
        {/* ========================================================================= */}
        {status === "initial" && (
          <div className="flex flex-col items-center justify-start w-full animate-in fade-in duration-700 pt-8 sm:pt-12 pb-4">
            {/* Top Badge & Header Stack (Upper 25-35% Area) */}
            <div className="flex flex-col items-center">
              <span className="inline-block rounded-full border border-[#B8966B]/60 bg-[#FAF6F0] px-3.5 py-0.5 text-[8.5px] font-bold tracking-[0.28em] uppercase text-[#8C263E] shadow-2xs">
                R S V P
              </span>

              {/* Main Heading */}
              <h2 className="script text-3xl sm:text-4xl md:text-[42px] text-[#5C1D2A] mt-2 font-normal leading-tight drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)] max-w-[310px]">
                We Would Love To Celebrate With You
              </h2>

              {/* Gold Ornament Divider */}
              <div className="mx-auto my-2.5 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
                <span className="h-px w-10 bg-[#B8966B]/60" />
                <span>✦</span>
                <span className="h-px w-10 bg-[#B8966B]/60" />
              </div>

              {/* Romantic Subtitle Quote */}
              <p className="font-display italic text-xs sm:text-sm text-[#6B5744] max-w-[270px] leading-relaxed">
                &ldquo;Your presence would make our celebration truly complete.&rdquo;
              </p>
            </div>

            {/* Accept Invitation CTA Button (Positioned Below with Natural Gap) */}
            <div className="w-full flex justify-center mt-7 sm:mt-9">
              <button
                type="button"
                onClick={handleAccept}
                className="group relative inline-flex w-full max-w-[250px] sm:max-w-[270px] items-center justify-center overflow-hidden rounded-full border border-[#B8966B] bg-gradient-to-r from-[#FAF6F0] via-[#FDFBF7] to-[#FAF6F0] px-7 py-3.5 text-[10.5px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[#8C263E] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#8C263E] hover:text-white active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>ACCEPT INVITATION</span>
                  <span className="text-xs transition-transform group-hover:translate-x-1">✦</span>
                </span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. CINEMATIC & EXPLOSIVE CELEBRATION ANIMATION STATE */}
        {/* ========================================================================= */}
        {status === "animating" && (
          <div className="relative flex flex-col items-center justify-center h-full w-full z-30 overflow-visible">
            {/* Shockwave Burst Ring */}
            <div className="absolute h-48 w-48 rounded-full border-2 border-[#D4AF37] animate-[shockwaveExpand_1.6s_ease-out_infinite] pointer-events-none" />
            <div className="absolute h-48 w-48 rounded-full border-2 border-[#8C263E] animate-[shockwaveExpand_2.2s_ease-out_0.5s_infinite] pointer-events-none" />

            {/* Golden Glowing Orb */}
            <div className="absolute h-48 w-48 rounded-full bg-radial from-[#D4AF37]/50 via-[#B8966B]/25 to-transparent blur-xl animate-[glowPulse_1.8s_infinite_ease-in-out]" />

            {/* Center Golden Celebration Emblem */}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-radial from-[#FFF9EE] via-[#FAF6F0] to-[#F5E8D0] shadow-2xl animate-bounce ring-4 ring-[#D4AF37]/30">
              <svg className="w-10 h-10 text-[#8C263E] drop-shadow-[0_2px_4px_rgba(140,38,62,0.35)] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 17L3.8 7.5L8.5 12L12 4L15.5 12L20.2 7.5L22 17H2Z" fill="url(#crownGoldGrad)" stroke="#8C263E" strokeWidth="1.2" />
                <circle cx="12" cy="4" r="1.3" fill="#D4AF37" />
                <circle cx="3.8" cy="7.5" r="1" fill="#8C263E" />
                <circle cx="20.2" cy="7.5" r="1" fill="#8C263E" />
                <circle cx="8.5" cy="12" r="0.8" fill="#D4AF37" />
                <circle cx="15.5" cy="12" r="0.8" fill="#D4AF37" />
                <path d="M4.5 19.5H19.5" stroke="#8C263E" strokeWidth="1.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="crownGoldGrad" x1="2" y1="4" x2="22" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F7E7C4" />
                    <stop offset="0.5" stopColor="#E2C275" />
                    <stop offset="1" stopColor="#C89D42" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Radiating Particles */}
            {burstParticles.map((pt, idx) => {
              const rad = (pt.angle * Math.PI) / 180;
              const tx = `${Math.cos(rad) * pt.distance}px`;
              const ty = `${Math.sin(rad) * pt.distance}px`;
              return (
                <div
                  key={idx}
                  className="absolute pointer-events-none"
                  style={{
                    width: `${pt.size}px`,
                    height: `${pt.size}px`,
                    color: pt.color,
                    ["--tx" as string]: tx,
                    ["--ty" as string]: ty,
                    animation: `particleFloatCrazy 2.5s cubic-bezier(0.15, 0.85, 0.35, 1.2) forwards`,
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                  </svg>
                </div>
              );
            })}

            {/* Euphoric Acceptance Announcement */}
            <div className="mt-8 flex flex-col items-center gap-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#8C263E] px-4.5 py-1.5 text-[9px] font-extrabold tracking-[0.28em] uppercase text-white shadow-lg animate-pulse">
                <svg className="w-3.5 h-3.5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                </svg>
                <span>INVITATION ACCEPTED!</span>
                <svg className="w-3.5 h-3.5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                </svg>
              </span>
              <p className="script text-2xl text-[#5C1D2A] font-semibold mt-2 drop-shadow-sm">
                Preparing Thank You Card for {displayGuestName}...
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. REVEALED PERSONALIZED THANK YOU CARD STATE (3D PERSPECTIVE TILT) */}
        {/* ========================================================================= */}
        {status === "accepted" && (
          <div className="my-auto flex flex-col items-center justify-center w-full animate-in fade-in zoom-in-90 duration-700 py-2 [perspective:1000px]">
            {/* Stationery Thank You Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              className="relative w-full max-w-[335px] overflow-hidden rounded-2xl border-2 border-[#E6DCCF] bg-gradient-to-b from-[#FAF6F0] via-[#FCF9F3] to-[#FAF6F0] p-6 text-center shadow-2xl ring-1 ring-[#D4AF37]/40"
            >
              {/* Shimmer Light Effect Across Card */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="h-full w-24 bg-gradient-to-r from-transparent via-white to-transparent animate-[cardShimmer_4s_infinite_linear]" />
              </div>

              {/* Corner Gold Dot & Sparkle Accents */}
              <span className="absolute top-2.5 left-3.5 text-[8px] text-[#B8966B] select-none">✦</span>
              <span className="absolute top-2.5 right-3.5 text-[8px] text-[#B8966B] select-none">✦</span>
              <span className="absolute bottom-2.5 left-3.5 text-[8px] text-[#B8966B] select-none">✦</span>
              <span className="absolute bottom-2.5 right-3.5 text-[8px] text-[#B8966B] select-none">✦</span>

              {/* Top Thank You Badge */}
              <span className="inline-block rounded-full border border-[#B8966B]/60 bg-[#FAF6F0] px-4 py-0.5 text-[9px] font-extrabold tracking-[0.3em] uppercase text-[#8C263E] shadow-2xs mb-2">
                THANK YOU
              </span>

              {/* Personalized Guest Name */}
              <div className="my-1 border-b border-t border-[#B8966B]/25 py-2">
                <p className="font-display text-[10px] uppercase tracking-[0.24em] text-[#8C263E] font-bold">
                  DEAREST GUEST
                </p>
                <h3 className="script text-3xl sm:text-4xl text-[#5C1D2A] mt-0.5 font-semibold drop-shadow-xs">
                  {displayGuestName}
                </h3>
              </div>

              {/* Main Thank You Title */}
              <p className="font-display text-[10.5px] md:text-[11.5px] tracking-[0.22em] uppercase text-[#8C263E] font-bold mt-2">
                FOR BEING PART OF OUR CELEBRATION
              </p>

              {/* Gold Ornament Line */}
              <div className="mx-auto my-2.5 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
                <span className="h-px w-10 bg-[#B8966B]/60" />
                <span>❖</span>
                <span className="h-px w-10 bg-[#B8966B]/60" />
              </div>

              {/* Message */}
              <p className="font-display italic text-xs md:text-sm text-[#6B5744] my-2 leading-relaxed max-w-[270px] mx-auto">
                &ldquo;We are overjoyed that you will be joining us on our special day! Your presence will make our wedding truly complete.&rdquo;
              </p>

              {/* Attendance Summary Pill */}
              <div className="my-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#B8966B]/40 bg-[#8C263E]/08 px-3 py-1 text-[8.5px] font-bold uppercase tracking-wider text-[#8C263E]">
                <span>RSVP: Attending ({attendingCount} {attendingCount === 1 ? "Guest" : "Guests"})</span>
                <span>✓</span>
              </div>

              {/* Signature */}
              <div className="mt-3 pt-3 border-t border-[#B8966B]/30 flex flex-col items-center">
                <span className="font-display text-[9px] tracking-[0.26em] uppercase text-[#8C263E] font-bold">
                  WITH LOVE &amp; GRATITUDE,
                </span>
                <span className="script text-2xl sm:text-3xl text-[#5C1D2A] mt-0.5 block font-medium">
                  {coupleNames}
                </span>
              </div>

              {/* Re-trigger Celebration Action Buttons */}
              <div className="mt-4 pt-2 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={handleReblast}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37] bg-[#FAF6F0] px-3.5 py-1.5 text-[8.5px] font-bold tracking-[0.2em] uppercase text-[#8C263E] shadow-xs hover:bg-[#8C263E] hover:text-white transition-all cursor-pointer group"
                >
                  <span>Re-blast Fireworks</span>
                  <svg className="w-3 h-3 text-[#D4AF37] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setStatus("initial")}
                  className="inline-flex items-center gap-1 rounded-full border border-[#B8966B]/40 bg-white/60 px-3 py-1.5 text-[8.5px] font-bold tracking-[0.18em] uppercase text-[#6B5744] hover:bg-[#FAF6F0] transition-all cursor-pointer"
                >
                  <span>Edit RSVP</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Soft Top Transition Overlay (Blessings -> RSVP) */}
      <div className="absolute top-0 left-0 right-0 h-[60px] sm:h-[75px] md:h-[90px] bg-gradient-to-t from-transparent via-[#FAF6F2]/50 to-[#FAF6F2] pointer-events-none z-20" />

      {/* Soft Bottom Transition Overlay (RSVP -> Venue) */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] sm:h-[85px] md:h-[100px] bg-gradient-to-b from-transparent via-[#FAF6F2]/50 to-[#FAF6F2] pointer-events-none z-20" />
    </section>
  );
}

