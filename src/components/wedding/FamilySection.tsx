import { useState, useRef, useCallback, useEffect } from "react";
import familyPhotoImg from "@/assets/family photo.png";

export interface FamilyMember {
  name: string;
  role?: string;
}

export interface FamilyData {
  groom: {
    title: string;
    subtitle: string;
    father: FamilyMember;
    mother: FamilyMember;
    siblings: FamilyMember[];
    otherMembers: FamilyMember[];
    note: string;
  };
  bride: {
    title: string;
    subtitle: string;
    father: FamilyMember;
    mother: FamilyMember;
    siblings: FamilyMember[];
    otherMembers: FamilyMember[];
    note: string;
  };
}

const defaultData: FamilyData = {
  groom: {
    title: "The Groom's Family",
    subtitle: "THE GROOM",
    father: { name: "Mr. Rajesh Sharma", role: "Father" },
    mother: { name: "Mrs. Anita Sharma", role: "Mother" },
    siblings: [{ name: "Kabir Sharma", role: "Brother" }],
    otherMembers: [
      { name: "Ajay Sharma" },
      { name: "Pooja Sharma" },
      { name: "Sunita Sharma" },
      { name: "Vikram Sharma" },
      { name: "Neha Sharma" },
      { name: "Rohan Sharma" },
      { name: "Dev Sharma" },
      { name: "Isha Sharma" },
    ],
    note: "Together with their families, warmly inviting you to share in the joy of their celebration.",
  },
  bride: {
    title: "The Bride's Family",
    subtitle: "THE BRIDE",
    father: { name: "Mr. Harshit Jangir", role: "Father" },
    mother: { name: "Mrs. Sunita Jangir", role: "Mother" },
    siblings: [{ name: "Naina Jangir", role: "Sister" }],
    otherMembers: [
      { name: "Rakesh Jangir" },
      { name: "Priya Jangir" },
      { name: "Meena Jangir" },
      { name: "Manoj Jangir" },
      { name: "Anjali Jangir" },
      { name: "Kunal Jangir" },
      { name: "Tanya Jangir" },
      { name: "Vinay Jangir" },
    ],
    note: "Together with their families, warmly inviting you to share in the joy of their celebration.",
  },
};

interface FamilySectionProps {
  id?: string;
  data?: FamilyData;
}

const familySparkles = [
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

function PanelContent({
  sideData,
  isGroom,
}: {
  sideData: FamilyData["groom"] | FamilyData["bride"];
  isGroom: boolean;
}) {
  return (
    <div className="relative z-10 mx-auto flex flex-1 h-full w-full max-w-[340px] flex-col items-center justify-between pt-10 md:pt-14 pb-5 md:pb-3 px-2 text-center">
      {/* Sparkle Background Layer for Family Panel */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
        <style>{`
          @keyframes familySparkleTwinkle {
            0%, 100% { opacity: 0; transform: scale(0.35) rotate(0deg); }
            50% { opacity: 0.95; transform: scale(1.15) rotate(22deg); }
          }
        `}</style>
        {familySparkles.map((sp, idx) => (
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
              animation: `familySparkleTwinkle ${sp.duration}s ease-in-out ${sp.delay}s infinite`,
              filter: `drop-shadow(0 0 3px ${sp.color})`,
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </div>
        ))}
      </div>
      {/* 1. TOP HEADING AREA */}
      <div className="flex flex-col items-center">
        {/* Top Pill Label */}
        <span className="inline-block rounded-full border border-[#B8966B]/50 bg-[#FAF6F0] px-3.5 py-0.5 text-[8px] font-bold tracking-[0.24em] uppercase text-[#8C5B67] shadow-2xs">
          {sideData.subtitle}
        </span>

        {/* Eyebrow Header */}
        <p className="font-display text-[8.5px] md:text-[9px] tracking-[0.32em] uppercase text-[#6B5744] font-semibold mt-1.5">
          WITH BLESSINGS OF
        </p>

        {/* Calligraphic Script Title */}
        <h2 className="script text-2xl sm:text-3xl md:text-[34px] text-[#5C1D2A] mt-0.5 font-normal leading-tight">
          {sideData.title}
        </h2>

        {/* Gold Ornament Divider */}
        <div className="mx-auto my-1 flex items-center justify-center gap-1.5 text-[10px] text-[#B8966B]">
          <span className="h-px w-8 bg-[#B8966B]/60" />
          <span>❖</span>
          <span className="h-px w-8 bg-[#B8966B]/60" />
        </div>
      </div>

      {/* 2. FAMILY PHOTO ILLUSTRATION */}
      <div className="my-0.5 flex justify-center w-full">
        <img
          src={familyPhotoImg}
          alt="Family watercolor illustration"
          className="w-[58%] max-w-[210px] h-auto object-contain pointer-events-none select-none drop-shadow-xs"
        />
      </div>

      {/* 3. PARENTS SECTION */}
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 w-full max-w-[260px] mb-1">
          <span className="h-px flex-1 bg-[#B8966B]/40" />
          <span className="font-display text-[8px] md:text-[8.5px] tracking-[0.22em] uppercase text-[#8C263E] font-bold">
            {isGroom ? "GROOM'S PARENTS" : "BRIDE'S PARENTS"}
          </span>
          <span className="h-px flex-1 bg-[#B8966B]/40" />
        </div>

        {/* Father Box */}
        <div className="w-full max-w-[260px] rounded-lg border border-[#E6DCCF] bg-[#FAF6F0]/90 py-1.5 px-3 text-center shadow-2xs">
          <p className="font-display text-xs sm:text-sm font-bold tracking-[0.01em] text-[#3B2518]">
            {sideData.father.name}
          </p>
          <p className="font-display text-[9.5px] italic text-[#6B5744]">
            {sideData.father.role || "Father"}
          </p>
        </div>

        <div className="my-0.5 text-[7px] text-[#B8966B] select-none">✦</div>

        {/* Mother Box */}
        <div className="w-full max-w-[260px] rounded-lg border border-[#E6DCCF] bg-[#FAF6F0]/90 py-1.5 px-3 text-center shadow-2xs">
          <p className="font-display text-xs sm:text-sm font-bold tracking-[0.01em] text-[#3B2518]">
            {sideData.mother.name}
          </p>
          <p className="font-display text-[9.5px] italic text-[#6B5744]">
            {sideData.mother.role || "Mother"}
          </p>
        </div>
      </div>

      {/* 4. SIBLINGS SECTION */}
      {sideData.siblings && sideData.siblings.length > 0 && (
        <div className="w-full flex flex-col items-center mt-1.5">
          <div className="flex items-center justify-center gap-2 w-full max-w-[260px] mb-1">
            <span className="h-px flex-1 bg-[#B8966B]/40" />
            <span className="font-display text-[8px] tracking-[0.2em] uppercase text-[#8C263E] font-bold">
              {sideData.siblings[0]?.role?.toUpperCase() || "SIBLING"}
            </span>
            <span className="h-px flex-1 bg-[#B8966B]/40" />
          </div>

          {sideData.siblings.map((sib) => (
            <div
              key={sib.name}
              className="w-full max-w-[260px] rounded-lg border border-[#E6DCCF] bg-[#FAF6F0]/90 py-1.5 px-3 text-center shadow-2xs"
            >
              <p className="font-display text-xs sm:text-sm font-bold tracking-[0.01em] text-[#3B2518]">
                {sib.name}
              </p>
              {sib.role && (
                <p className="font-display text-[9.5px] italic text-[#6B5744]">{sib.role}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 5. OTHER FAMILY MEMBERS GRID */}
      {sideData.otherMembers && sideData.otherMembers.length > 0 && (
        <div className="w-full flex flex-col items-center mt-1.5">
          <div className="flex items-center justify-center gap-2 w-full max-w-[260px] mb-1">
            <span className="h-px flex-1 bg-[#B8966B]/40" />
            <span className="font-display text-[8px] tracking-[0.2em] uppercase text-[#8C263E] font-bold">
              FAMILY MEMBERS
            </span>
            <span className="h-px flex-1 bg-[#B8966B]/40" />
          </div>

          <div className="grid grid-cols-2 gap-1 w-full max-w-[260px]">
            {sideData.otherMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-md border border-[#E6DCCF] bg-[#FAF6F0]/90 py-1 px-2 text-center shadow-2xs"
              >
                <p className="font-display text-[10.5px] md:text-[11px] font-semibold text-[#3B2518] truncate">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. BOTTOM FAMILY QUOTE */}
      <div className="mt-2 mb-1">
        <p className="font-display italic text-[9.5px] md:text-[10px] text-[#6B5744] max-w-[260px] leading-snug">
          &ldquo;{sideData.note}&rdquo;
        </p>
      </div>

      {/* 7. WATERCOLOR BOTANICAL LEAF ACCENT AT BOTTOM */}
      <div className="w-full flex justify-between items-end px-2 -mb-2 pointer-events-none select-none opacity-80">
        <svg className="w-12 h-6 text-[#6B705C]" viewBox="0 0 100 50" fill="currentColor">
          <path
            d="M10 40 Q 30 10 50 40 Q 70 10 90 40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="20" cy="25" r="4" opacity="0.6" />
          <circle cx="40" cy="20" r="5" opacity="0.6" />
          <circle cx="60" cy="22" r="4.5" opacity="0.6" />
          <circle cx="80" cy="28" r="4" opacity="0.6" />
        </svg>
        <svg
          className="w-12 h-6 text-[#6B705C] scale-x-[-1]"
          viewBox="0 0 100 50"
          fill="currentColor"
        >
          <path
            d="M10 40 Q 30 10 50 40 Q 70 10 90 40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="20" cy="25" r="4" opacity="0.6" />
          <circle cx="40" cy="20" r="5" opacity="0.6" />
          <circle cx="60" cy="22" r="4.5" opacity="0.6" />
          <circle cx="80" cy="28" r="4" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
}

export function FamilySection({ id = "family", data = defaultData }: FamilySectionProps) {
  // sliderPos is percentage (0..100) of Groom panel width. Initial position = 78%
  const [sliderPos, setSliderPos] = useState(78);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Update slider position from pointer X coordinate
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    // Clamp slider position between 10% and 90%
    const clamped = Math.max(10, Math.min(90, percentage));
    setSliderPos(clamped);
  }, []);

  // Handle pointer down on divider/handle
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setIsAnimating(false);
    setHasInteracted(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  // Handle pointer move during drag
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updatePosition(e.clientX);
  };

  // Handle pointer release
  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore fallback
      }
    }
  };

  // Click/tap interaction to toggle smoothly between Groom (78%) and Bride (22%)
  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasInteracted(true);
    setIsAnimating(true);
    if (sliderPos > 50) {
      setSliderPos(22); // Reveal Bride side
    } else {
      setSliderPos(78); // Reveal Groom side
    }
  };

  // Reset animation state after transition completes
  useEffect(() => {
    if (!isAnimating) return;
    const timer = setTimeout(() => setIsAnimating(false), 550);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  const { groom, bride } = data;

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-center overflow-hidden select-none bg-[#FAF6F0]"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* ========================================================================= */}
      {/* UNDERLAY PANEL — BRIDE'S FAMILY (Revealed as slider moves left) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 h-full w-full bg-[#FAF6F0] flex flex-col items-center justify-start overflow-y-auto no-scrollbar z-10">
        <PanelContent sideData={bride} isGroom={false} />
      </div>

      {/* ========================================================================= */}
      {/* OVERLAY PANEL — GROOM'S FAMILY (Left side, clipped by sliderPos) */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 top-0 left-0 bottom-0 overflow-hidden z-20 bg-[#FAF6F0] border-r border-[#8C263E]/20 shadow-[4px_0_18px_rgba(0,0,0,0.08)] ${
          isAnimating ? "transition-[width] duration-500 ease-out" : ""
        }`}
        style={{ width: `${sliderPos}%` }}
      >
        {/* Full Section Background & Stationary Content for Groom Side */}
        <div className="absolute inset-0 h-full w-[390px] md:w-full min-w-[320px] bg-[#FAF6F0] flex flex-col items-center justify-start overflow-y-auto no-scrollbar">
          <PanelContent sideData={groom} isGroom={true} />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DRAGGABLE VERTICAL DIVIDER & CIRCULAR SLIDER HANDLE */}
      {/* ========================================================================= */}
      <div
        className={`absolute top-0 bottom-0 z-30 flex flex-col items-center select-none touch-none -translate-x-1/2 cursor-ew-resize ${
          isAnimating ? "transition-[left] duration-500 ease-out" : ""
        }`}
        style={{ left: `${sliderPos}%` }}
        onPointerDown={handlePointerDown}
      >
        {/* Vertical Divider Line */}
        <div className="w-[2px] h-full bg-[#7A2638] shadow-[0_0_10px_rgba(122,38,56,0.45)]" />

        {/* Circular Handle Button (44px visible handle size) */}
        <div className="absolute top-[50%] -translate-y-1/2 flex items-center justify-center p-2.5 cursor-pointer">
          <button
            type="button"
            onClick={handleToggleClick}
            aria-label="Slide or tap to switch between Groom and Bride families"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7A2638] text-white shadow-xl border border-white/75 transition-transform hover:scale-110 active:scale-95 cursor-pointer focus:outline-none"
          >
            {/* Minimal SVG Chevron Arrows (‹ ›) */}
            <svg
              className="w-5 h-5 text-[#FAF6F0]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="14 18 8 12 14 6" />
              <polyline points="10 18 16 12 10 6" />
            </svg>
          </button>
        </div>

        {/* Subtle Guidance Hint — Fades out after interaction */}
        {!hasInteracted && (
          <div className="absolute top-[57%] whitespace-nowrap animate-pulse pointer-events-none">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#B8966B]/60 bg-[#FAF6F0]/95 px-2.5 py-1 font-display text-[8.5px] font-bold tracking-[0.2em] uppercase text-[#7A2638] shadow-md backdrop-blur-xs">
              ‹ SLIDE TO MEET FAMILIES ›
            </span>
          </div>
        )}
      </div>
      {/* Soft Top Transition Overlay (Events -> Family) */}
      <div className="absolute top-0 left-0 right-0 h-[60px] sm:h-[75px] md:h-[90px] bg-gradient-to-t from-transparent via-[#FAF6F2]/45 to-[#FAF6F2]/80 pointer-events-none z-40" />

      {/* Soft Bottom Transition Overlay (Family -> Countdown) */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] sm:h-[85px] md:h-[100px] bg-gradient-to-b from-transparent via-[#FAF6F2]/45 to-[#FAF6F2] pointer-events-none z-40" />
    </section>
  );
}
