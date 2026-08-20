import { useState } from "react";

interface RsvpSectionProps {
  id?: string;
  coupleNames?: string;
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
  { angle: 0, distance: 110, size: 8, color: "#D4AF37" },
  { angle: 30, distance: 140, size: 6, color: "#C88D94" },
  { angle: 60, distance: 120, size: 9, color: "#8C263E" },
  { angle: 90, distance: 150, size: 7, color: "#F5E6C8" },
  { angle: 120, distance: 130, size: 10, color: "#D4AF37" },
  { angle: 150, distance: 115, size: 6, color: "#C88D94" },
  { angle: 180, distance: 145, size: 8, color: "#FFF8F0" },
  { angle: 210, distance: 125, size: 7, color: "#8C263E" },
  { angle: 240, distance: 135, size: 9, color: "#F5E6C8" },
  { angle: 270, distance: 160, size: 6, color: "#D4AF37" },
  { angle: 300, distance: 120, size: 8, color: "#C88D94" },
  { angle: 330, distance: 140, size: 7, color: "#8C263E" },
];

export function RsvpSection({ id = "rsvp", coupleNames = "Aarav & Meera" }: RsvpSectionProps) {
  const [status, setStatus] = useState<"initial" | "animating" | "accepted">("initial");

  const handleAccept = () => {
    setStatus("animating");
    setTimeout(() => {
      setStatus("accepted");
    }, 3200);
  };

  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-between overflow-hidden bg-[#FAF6F2] pt-11 md:pt-14 pb-6 px-4 text-center select-none"
    >
      {/* Soft Editorial Paper Texture & Gradient Background */}
      <div className="absolute inset-0 bg-radial from-[#FFFFFF]/70 via-[#FAF6F2] to-[#F3EFE6]/80 pointer-events-none" />

      {/* Sparkle Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
        <style>{`
          @keyframes rsvpSparkleTwinkle {
            0%, 100% { opacity: 0; transform: scale(0.35) rotate(0deg); }
            50% { opacity: 0.95; transform: scale(1.15) rotate(22deg); }
          }
          @keyframes glowPulse {
            0%, 100% { opacity: 0.3; transform: scale(0.8); }
            50% { opacity: 0.9; transform: scale(1.25); }
          }
          @keyframes particleFloat {
            0% { opacity: 0; transform: translate(0, 0) scale(0.3) rotate(0deg); }
            40% { opacity: 1; transform: translate(var(--tx), var(--ty)) scale(1.1) rotate(180deg); }
            100% { opacity: 0; transform: translate(calc(var(--tx) * 1.3), calc(var(--ty) * 1.3)) scale(0.5) rotate(360deg); }
          }
        `}</style>
        {rsvpSparkles.map((sp, idx) => (
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
              animation: `rsvpSparkleTwinkle ${sp.duration}s ease-in-out ${sp.delay}s infinite`,
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
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[340px] flex-col items-center justify-between py-2">
        {/* ========================================================================= */}
        {/* 1. INITIAL RSVP STATE */}
        {/* ========================================================================= */}
        {status === "initial" && (
          <div className="flex flex-col items-center justify-between h-full w-full animate-in fade-in duration-500 py-4">
            {/* Top Badge & Header */}
            <div className="flex flex-col items-center">
              <span className="inline-block rounded-full border border-[#B8966B]/60 bg-[#FAF6F0] px-3.5 py-0.5 text-[8.5px] font-bold tracking-[0.28em] uppercase text-[#8C263E] shadow-2xs">
                R S V P
              </span>

              {/* Main Heading */}
              <h2 className="script text-3xl sm:text-4xl md:text-[40px] text-[#5C1D2A] mt-2 font-normal leading-tight drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)] max-w-[280px]">
                We Would Love To Celebrate With You
              </h2>

              {/* Gold Ornament Divider */}
              <div className="mx-auto my-2 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
                <span className="h-px w-10 bg-[#B8966B]/60" />
                <span>✦</span>
                <span className="h-px w-10 bg-[#B8966B]/60" />
              </div>

              {/* Subtitle Line */}
              <p className="font-display italic text-xs md:text-sm text-[#6B5744] mt-1 max-w-[260px] leading-relaxed">
                &ldquo;Your presence would make our celebration even more special.&rdquo;
              </p>
            </div>

            {/* Center Decorative Illustration Motif */}
            <div className="my-4 flex items-center justify-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#B8966B]/30 bg-[#FAF6F0]/80 shadow-2xs">
                <svg className="w-10 h-10 text-[#8C263E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#8C263E" fillOpacity="0.15" />
                </svg>
              </div>
            </div>

            {/* Accept Invitation CTA Button */}
            <div className="mb-4">
              <button
                type="button"
                onClick={handleAccept}
                className="inline-flex items-center justify-center rounded-full border border-[#B8966B]/70 bg-[#FAF6F0] px-7 py-3 text-[10px] font-bold tracking-[0.28em] uppercase text-[#8C263E] shadow-2xs hover:bg-[#8C263E] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                ACCEPT INVITATION
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. CINEMATIC CELEBRATION ANIMATION STATE */}
        {/* ========================================================================= */}
        {status === "animating" && (
          <div className="relative flex flex-col items-center justify-center h-full w-full z-30">
            {/* Golden Glowing Orb */}
            <div className="absolute h-36 w-36 rounded-full bg-radial from-[#D4AF37]/40 via-[#B8966B]/20 to-transparent blur-md animate-[glowPulse_2.5s_infinite_ease-in-out]" />

            {/* Center Golden Sparkle Core */}
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#B8966B] bg-[#FAF6F0] shadow-xl animate-pulse">
              <svg className="w-8 h-8 text-[#8C263E]" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15,12 12,22 9,12" />
              </svg>
            </div>

            {/* Floating Wedding Radiating Particles */}
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
                    animation: `particleFloat 2.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`,
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                  </svg>
                </div>
              );
            })}

            <p className="font-display italic text-sm text-[#8C263E] mt-6 font-semibold animate-pulse">
              Joyfully Accepting...
            </p>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. REVEALED THANK YOU STATIONERY CARD STATE */}
        {/* ========================================================================= */}
        {status === "accepted" && (
          <div className="my-auto flex flex-col items-center justify-center w-full animate-in fade-in zoom-in-95 duration-700 py-4">
            {/* Stationery Thank You Card Container */}
            <div className="relative w-full max-w-[315px] rounded-2xl border border-[#E6DCCF] bg-[#FAF6F0] p-6 text-center shadow-md ring-1 ring-[#FAF6F0]">
              {/* Corner Gold Dot Accents */}
              <span className="absolute top-2 left-3 text-[7px] text-[#B8966B] select-none">✦</span>
              <span className="absolute top-2 right-3 text-[7px] text-[#B8966B] select-none">✦</span>
              <span className="absolute bottom-2 left-3 text-[7px] text-[#B8966B] select-none">✦</span>
              <span className="absolute bottom-2 right-3 text-[7px] text-[#B8966B] select-none">✦</span>

              {/* Top Badge */}
              <span className="inline-block rounded-full border border-[#B8966B]/60 bg-[#FAF6F0] px-3.5 py-0.5 text-[8.5px] font-bold tracking-[0.28em] uppercase text-[#8C263E] shadow-2xs mb-2">
                THANK YOU
              </span>

              {/* Main Thank You Title */}
              <h2 className="script text-3xl sm:text-4xl text-[#5C1D2A] mt-1 font-normal leading-tight drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]">
                Thank You
              </h2>
              <p className="font-display text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#8C263E] font-bold mt-1">
                FOR BEING PART OF OUR CELEBRATION
              </p>

              {/* Gold Ornament Line */}
              <div className="mx-auto my-3 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
                <span className="h-px w-10 bg-[#B8966B]/60" />
                <span>❖</span>
                <span className="h-px w-10 bg-[#B8966B]/60" />
              </div>

              {/* Message */}
              <p className="font-display italic text-xs md:text-sm text-[#6B5744] my-2 leading-relaxed">
                &ldquo;We can&apos;t wait to celebrate this beautiful day with you.&rdquo;
              </p>

              {/* Signature */}
              <div className="mt-4 pt-3 border-t border-[#B8966B]/30 flex flex-col items-center">
                <span className="font-display text-[9px] tracking-[0.24em] uppercase text-[#8C263E] font-bold">
                  WITH LOVE,
                </span>
                <span className="script text-2xl sm:text-3xl text-[#5C1D2A] mt-1 block">
                  {coupleNames}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
