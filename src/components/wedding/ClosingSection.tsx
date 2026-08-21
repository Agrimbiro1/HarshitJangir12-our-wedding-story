import { FC } from "react";
import lastSectionRibbonImg from "@/assets/last section.png";

interface ClosingSectionProps {
  id?: string;
  guestName?: string;
  coupleNames?: string;
  weddingDate?: string;
  location?: string;
}

// Ambient Sparkling Stars Background Config
const closingSparkles = [
  { top: "8%", left: "9%", size: 7, color: "#B8966B", duration: 3.2, delay: 0.2 },
  { top: "12%", right: "8%", size: 9, color: "#8C263E", duration: 2.8, delay: 1.1 },
  { top: "28%", left: "7%", size: 6, color: "#D4AF37", duration: 3.5, delay: 0.6 },
  { top: "36%", right: "6%", size: 8, color: "#B8966B", duration: 2.9, delay: 1.4 },
  { top: "54%", left: "8%", size: 7, color: "#8C263E", duration: 3.1, delay: 0.3 },
  { top: "70%", right: "7%", size: 8, color: "#D4AF37", duration: 3.6, delay: 1.2 },
  { top: "84%", left: "6%", size: 6, color: "#B8966B", duration: 2.7, delay: 0.8 },
  { top: "92%", right: "9%", size: 8, color: "#8C263E", duration: 3.4, delay: 1.7 },
];

/**
 * Top Corner Botanical & Floral Line-Art SVG Ornament
 */
const CornerFloralSVG: FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 10 10 Q 50 15 80 80 Q 15 50 10 10 Z"
      fill="#8C263E"
      fillOpacity="0.05"
      stroke="#8C263E"
      strokeWidth="1.2"
      strokeOpacity="0.35"
    />
    <path
      d="M 10 10 Q 30 55 65 85 Q 40 35 10 10 Z"
      fill="#B8966B"
      fillOpacity="0.08"
      stroke="#B8966B"
      strokeWidth="1"
      strokeOpacity="0.4"
    />
    <circle cx="80" cy="80" r="2.5" fill="#B8966B" opacity="0.6" />
    <circle cx="65" cy="85" r="2" fill="#8C263E" opacity="0.5" />
    <circle cx="10" cy="10" r="3" fill="#D4AF37" opacity="0.7" />
  </svg>
);

/**
 * Intertwined Rings & Laurel Crest SVG Motif
 */
const IntertwinedRingsMotifSVG: FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <svg
    className={className}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Outer Laurel Botanical Leaves Arch */}
    <g stroke="#B8966B" strokeWidth="1.2" strokeLinecap="round" opacity="0.75">
      {/* Left Branch */}
      <path d="M 20 85 C 10 60 20 35 45 20" />
      <path d="M 16 75 Q 10 70 14 62" />
      <path d="M 18 55 Q 12 50 18 42" />
      <path d="M 27 38 Q 22 30 30 25" />
      {/* Right Branch */}
      <path d="M 100 85 C 110 60 100 35 75 20" />
      <path d="M 104 75 Q 110 70 106 62" />
      <path d="M 102 55 Q 108 50 102 42" />
      <path d="M 93 38 Q 98 30 90 25" />
    </g>

    {/* Intertwined Golden Wedding Rings */}
    <g strokeWidth="2">
      {/* Left Ring (Groom) */}
      <circle cx="50" cy="62" r="21" stroke="url(#ringGoldGrad1)" fill="none" />
      <circle cx="50" cy="62" r="18.5" stroke="#B8966B" strokeWidth="0.8" opacity="0.4" fill="none" />

      {/* Right Ring (Bride) with Solitaire Diamond */}
      <circle cx="70" cy="62" r="21" stroke="url(#ringGoldGrad2)" fill="none" />
      <circle cx="70" cy="62" r="18.5" stroke="#B8966B" strokeWidth="0.8" opacity="0.4" fill="none" />

      {/* Solitaire Diamond Sparkle on Right Ring */}
      <path d="M 70 37 L 73 41 L 70 45 L 67 41 Z" fill="#8C263E" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="70" cy="41" r="1.5" fill="#FFFFFF" />
    </g>

    {/* Center Interlocking Heart Shadow Line */}
    <path
      d="M 60 48 Q 50 40 44 48 Q 40 56 60 74 Q 80 56 76 48 Q 70 40 60 48 Z"
      fill="#8C263E"
      fillOpacity="0.07"
      stroke="#8C263E"
      strokeWidth="0.8"
      strokeDasharray="2 2"
      opacity="0.6"
    />

    {/* Sparkling Star Accents */}
    <path d="M 60 16 L 62 21 L 67 23 L 62 25 L 60 30 L 58 25 L 53 23 L 58 21 Z" fill="#D4AF37" />

    <defs>
      <linearGradient id="ringGoldGrad1" x1="29" y1="41" x2="71" y2="83" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5E6C8" />
        <stop offset="0.5" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#B8966B" />
      </linearGradient>
      <linearGradient id="ringGoldGrad2" x1="49" y1="41" x2="91" y2="83" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF9EE" />
        <stop offset="0.5" stopColor="#E6C280" />
        <stop offset="1" stopColor="#8C263E" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Curved Guest Name overlay following the vintage ribbon's natural upward arch
 */
const CurvedRibbonGuestName: FC<{ name: string }> = ({ name }) => {
  const text = (name && name.trim() ? name : "Guest").toUpperCase();

  // Dynamic font sizing based on string length to guarantee zero overflow
  let fontSize = 21;
  let letterSpacing = "0.08em";
  if (text.length > 24) {
    fontSize = 13.5;
    letterSpacing = "0.02em";
  } else if (text.length > 18) {
    fontSize = 15.5;
    letterSpacing = "0.04em";
  } else if (text.length > 13) {
    fontSize = 17.5;
    letterSpacing = "0.05em";
  }

  return (
    <svg
      className="w-full h-full pointer-events-none select-none overflow-visible"
      viewBox="0 0 300 80"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Subtle convex arch path matching the vintage ribbon's parchment baseline */}
        <path id="ribbonArchPath" d="M 22 47 Q 150 29 278 47" fill="none" />
      </defs>
      <text
        fill="#8C263E"
        className="font-bold tracking-widest uppercase"
        style={{
          fontFamily: "'Playfair Display', 'Cinzel', 'Cormorant Garamond', serif",
          fontSize: `${fontSize}px`,
          letterSpacing: letterSpacing,
          filter: "drop-shadow(0 0.5px 0.5px rgba(255,255,255,0.75))",
        }}
      >
        <textPath href="#ribbonArchPath" startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export function ClosingSection({
  id = "closing",
  guestName = "",
  coupleNames = "Aarav & Meera",
  weddingDate = "4 DECEMBER 2026",
  location = "JAIPUR",
}: ClosingSectionProps) {
  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-between overflow-hidden bg-[#FAF6F2] py-8 px-4 text-center select-none"
    >
      {/* Soft Editorial Paper Texture & Radial Glow Background */}
      <div className="absolute inset-0 bg-radial from-[#FFFFFF]/85 via-[#FAF6F2] to-[#F3EFE6]/90 pointer-events-none" />

      {/* Decorative Corner SVG Elements */}
      <div className="absolute top-2 left-2 pointer-events-none opacity-45 z-10 animate-in fade-in duration-1000">
        <CornerFloralSVG className="w-14 sm:w-16 h-14 sm:h-16" />
      </div>
      <div className="absolute top-2 right-2 pointer-events-none opacity-45 scale-x-[-1] z-10 animate-in fade-in duration-1000">
        <CornerFloralSVG className="w-14 sm:w-16 h-14 sm:h-16" />
      </div>
      <div className="absolute bottom-2 left-2 pointer-events-none opacity-40 scale-y-[-1] z-10 animate-in fade-in duration-1000">
        <CornerFloralSVG className="w-14 sm:w-16 h-14 sm:h-16" />
      </div>
      <div className="absolute bottom-2 right-2 pointer-events-none opacity-40 scale-x-[-1] scale-y-[-1] z-10 animate-in fade-in duration-1000">
        <CornerFloralSVG className="w-14 sm:w-16 h-14 sm:h-16" />
      </div>

      {/* Sparkle Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
        <style>{`
          @keyframes closingSparkleTwinkle {
            0%, 100% { opacity: 0; transform: scale(0.35) rotate(0deg); }
            50% { opacity: 0.95; transform: scale(1.15) rotate(22deg); }
          }
        `}</style>
        {closingSparkles.map((sp, idx) => (
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
              animation: `closingSparkleTwinkle ${sp.duration}s ease-in-out ${sp.delay}s infinite`,
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
      <div className="relative z-10 mx-auto flex flex-1 h-full w-full max-w-[340px] flex-col items-center justify-between py-2">
        {/* ========================================================================= */}
        {/* 1. TOP ORNAMENTAL CREST & HEADING */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-3 duration-1000">
          {/* Top Vector Emblem Divider: ✦ ─── ❖ ─── ✦ */}
          <div className="mx-auto mb-2 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
            <span className="text-[9px]">✦</span>
            <span className="h-px w-10 bg-[#B8966B]/60" />
            <span className="text-[10px]">❖</span>
            <span className="h-px w-10 bg-[#B8966B]/60" />
            <span className="text-[9px]">✦</span>
          </div>

          {/* Small Eyebrow Label */}
          <span className="font-display text-[8.5px] md:text-[9.5px] tracking-[0.3em] uppercase text-[#8C263E] font-bold">
            WITH LOVE
          </span>

          {/* Main Couple Script Heading */}
          <h1 className="script text-4xl sm:text-5xl md:text-[54px] text-[#5C1D2A] mt-0.5 font-normal leading-tight drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]">
            {coupleNames}
          </h1>

          {/* Emotional Subtitle */}
          <p className="font-display italic text-xs md:text-sm text-[#6B5744] mt-1.5 max-w-[270px] leading-relaxed">
            Thank you for being a part of our special day.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. CENTER PIECE: VINTAGE RIBBON BANNER & INTERTWINED RINGS COMPOSITION */}
        {/* ========================================================================= */}
        <div className="my-auto py-1 flex flex-col items-center animate-in fade-in zoom-in-95 duration-1000 delay-200 w-full">
          {/* Vintage Ribbon/Banner Plaque Asset with Curved Guest Name Overlay */}
          <div className="relative flex items-center justify-center w-full max-w-[250px] sm:max-w-[275px]">
            <img
              src={lastSectionRibbonImg}
              alt="Vintage ribbon banner ornament"
              className="w-full h-auto object-contain pointer-events-none select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
            />

            {/* Dynamic Curved Guest Name Following Ribbon Arch */}
            <div className="absolute inset-0 flex items-center justify-center p-1 pointer-events-none">
              <CurvedRibbonGuestName name={guestName} />
            </div>
          </div>

          {/* Breathing Space and Ring SVG Illustration directly below */}
          <div className="mt-2.5 sm:mt-3 relative p-2.5 rounded-full border border-[#B8966B]/30 bg-[#FAF6F0]/80 shadow-2xs flex items-center justify-center transition-transform duration-500 hover:scale-105">
            <IntertwinedRingsMotifSVG className="w-20 sm:w-24 h-20 sm:h-24" />
          </div>

          {/* Romantic Emotional Tagline */}
          <p className="script text-2xl sm:text-3xl text-[#5C1D2A] mt-2.5 font-medium drop-shadow-2xs">
            With love, laughter &amp; happily ever after.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3. COUPLE STAMP & FINAL SIGNATURE */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-3 duration-1000 delay-300">
          {/* Couple Stamp */}
          <h2 className="font-display text-xs sm:text-sm font-bold tracking-[0.24em] uppercase text-[#3B2518]">
            {coupleNames.toUpperCase()}
          </h2>
          <p className="font-display text-[9.5px] md:text-[10.5px] tracking-[0.26em] uppercase text-[#8C263E] font-semibold mt-0.5">
            {weddingDate} · {location}
          </p>

          {/* Bottom Ornamental SVG Divider */}
          <div className="mx-auto my-2 flex items-center justify-center gap-2 text-xs text-[#B8966B] w-full">
            <span className="h-px w-14 bg-[#B8966B]/60" />
            <span className="text-[9px]">✦</span>
            <span className="h-px w-14 bg-[#B8966B]/60" />
          </div>

          {/* Final Whisper Note */}
          <p className="font-display italic text-xs tracking-widest text-[#6B5744] font-medium">
            Forever begins here.
          </p>
        </div>
      </div>
    </section>
  );
}
