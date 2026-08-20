import { useState, useEffect } from "react";

export interface BlessingItem {
  id: string;
  name: string;
  message: string;
}

const initialBlessings: BlessingItem[] = [
  {
    id: "1",
    name: "Rajesh Sharma",
    message: "May your journey together always be filled with endless love, laughter, and eternal happiness.",
  },
  {
    id: "2",
    name: "Anita Sharma",
    message: "Wishing you both a lifetime of togetherness, warmth, and beautiful memories.",
  },
  {
    id: "3",
    name: "Kabir Sharma",
    message: "Heartiest congratulations! So excited to celebrate this wonderful new chapter with you both.",
  },
  {
    id: "4",
    name: "Harshit Jangir",
    message: "May your home be blessed with light, joy, and everlasting harmony.",
  },
  {
    id: "5",
    name: "Sunita Jangir",
    message: "With warm blessings and all our love as you begin your forever together.",
  },
  {
    id: "6",
    name: "Naina Jangir",
    message: "Wishing you the happiest forever! Love, smiles, and blessings always.",
  },
];

interface BlessingsSectionProps {
  id?: string;
  guestName?: string;
}

const sparkles = [
  // Top Header Area
  { top: "4%", left: "6%", size: 6, color: "#B8966B", duration: 3.2, delay: 0.2 },
  { top: "6%", left: "22%", size: 5, color: "#FFF8F0", duration: 2.8, delay: 1.5 },
  { top: "5%", right: "8%", size: 8, color: "#F5E6C8", duration: 2.7, delay: 1.1 },
  { top: "10%", right: "20%", size: 6, color: "#C88D94", duration: 3.5, delay: 0.8 },
  { top: "14%", left: "5%", size: 7, color: "#C88D94", duration: 3.8, delay: 0.7 },
  { top: "17%", right: "6%", size: 9, color: "#8C263E", duration: 3.1, delay: 2.1 },

  // Form Area
  { top: "22%", left: "4%", size: 5, color: "#F5E6C8", duration: 2.9, delay: 0.3 },
  { top: "25%", left: "12%", size: 7, color: "#B8966B", duration: 2.9, delay: 1.4 },
  { top: "26%", right: "5%", size: 6, color: "#D4AF37", duration: 3.4, delay: 0.9 },
  { top: "30%", left: "5%", size: 8, color: "#C88D94", duration: 3.2, delay: 1.8 },
  { top: "33%", right: "4%", size: 5, color: "#FFF8F0", duration: 3.5, delay: 0.4 },
  { top: "38%", left: "6%", size: 6, color: "#B8966B", duration: 2.7, delay: 2.2 },
  { top: "42%", right: "5%", size: 7, color: "#F5E6C8", duration: 3.6, delay: 1.2 },

  // Mid Section / Dividers
  { top: "46%", left: "8%", size: 8, color: "#F5E6C8", duration: 3.0, delay: 1.8 },
  { top: "49%", right: "6%", size: 6, color: "#B8966B", duration: 3.6, delay: 2.5 },
  { top: "52%", left: "4%", size: 5, color: "#8C263E", duration: 3.1, delay: 0.6 },
  { top: "54%", right: "7%", size: 8, color: "#D4AF37", duration: 2.9, delay: 1.3 },

  // Recent Blessings Cards Area
  { top: "58%", left: "6%", size: 7, color: "#C88D94", duration: 2.8, delay: 0.9 },
  { top: "62%", right: "5%", size: 6, color: "#FFF8F0", duration: 3.3, delay: 2.0 },
  { top: "67%", left: "4%", size: 5, color: "#B8966B", duration: 3.7, delay: 1.6 },
  { top: "70%", right: "4%", size: 9, color: "#B8966B", duration: 3.4, delay: 1.7 },
  { top: "75%", left: "5%", size: 7, color: "#F5E6C8", duration: 3.0, delay: 0.5 },
  { top: "78%", right: "5%", size: 6, color: "#8C263E", duration: 3.9, delay: 0.3 },

  // Bottom Button & Footer Area
  { top: "83%", left: "6%", size: 8, color: "#D4AF37", duration: 2.8, delay: 1.4 },
  { top: "86%", right: "6%", size: 8, color: "#F5E6C8", duration: 2.6, delay: 2.2 },
  { top: "90%", left: "8%", size: 6, color: "#C88D94", duration: 3.5, delay: 0.8 },
  { top: "92%", left: "18%", size: 5, color: "#B8966B", duration: 3.3, delay: 1.0 },
  { top: "94%", right: "8%", size: 7, color: "#C88D94", duration: 3.7, delay: 1.9 },
  { top: "96%", right: "22%", size: 6, color: "#FFF8F0", duration: 2.9, delay: 0.4 },
];

export function BlessingsSection({ id = "blessings", guestName = "Rajesh Sharma" }: BlessingsSectionProps) {
  const [blessings, setBlessings] = useState<BlessingItem[]>(initialBlessings);
  const [blessingText, setBlessingText] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showAllModal, setShowAllModal] = useState(false);

  // Rotation index for showing 2 cards at a time
  const [rotateIndex, setRotateIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const MAX_CHARS = 160;

  // Auto-rotate blessings every 3.5 seconds
  useEffect(() => {
    if (blessings.length <= 2) return;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRotateIndex((prev) => (prev + 2) % blessings.length);
        setIsFading(false);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, [blessings.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = blessingText.trim();
    if (!trimmed || trimmed.length > MAX_CHARS) return;

    const newBlessing: BlessingItem = {
      id: String(Date.now()),
      name: guestName,
      message: trimmed,
    };

    setBlessings((prev) => [newBlessing, ...prev]);
    setBlessingText("");
    setSuccessMsg("Your blessing has been added with love.");

    setTimeout(() => {
      setSuccessMsg("");
    }, 3500);
  };

  // Get current pair of rotating blessings
  const visibleBlessings =
    blessings.length <= 2
      ? blessings
      : [
          blessings[rotateIndex % blessings.length],
          blessings[(rotateIndex + 1) % blessings.length],
        ].filter(Boolean);

  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-between overflow-hidden bg-[#FAF6F2] pt-11 md:pt-13 pb-5 px-4 text-center select-none"
    >
      {/* Soft Editorial Paper Texture Gradient Background */}
      <div className="absolute inset-0 bg-radial from-[#FFFFFF]/70 via-[#FAF6F2] to-[#F3EFE6]/80 pointer-events-none" />

      {/* Sparkle Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
        <style>{`
          @keyframes sparkleTwinkle {
            0%, 100% { opacity: 0; transform: scale(0.35) rotate(0deg); }
            50% { opacity: 0.95; transform: scale(1.15) rotate(22deg); }
          }
        `}</style>
        {sparkles.map((sp, idx) => (
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
              animation: `sparkleTwinkle ${sp.duration}s ease-in-out ${sp.delay}s infinite`,
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
        {/* 1. HEADER & TYPOGRAPHY (Matching Family Section) */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center">
          {/* Top Pill Label */}
          <span className="inline-block rounded-full border border-[#B8966B]/60 bg-[#FAF6F0] px-3.5 py-0.5 text-[8.5px] font-bold tracking-[0.26em] uppercase text-[#8C263E] shadow-2xs">
            BLESSINGS
          </span>

          {/* Eyebrow Subtitle */}
          <p className="font-display text-[8.5px] md:text-[9px] tracking-[0.32em] uppercase text-[#6B5744] font-semibold mt-1.5">
            SHUBH AASHIRWAD
          </p>

          {/* Calligraphic Main Title */}
          <h2 className="script text-3xl sm:text-4xl md:text-[40px] text-[#5C1D2A] mt-0.5 font-normal leading-tight drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]">
            With Love &amp; Blessings
          </h2>

          {/* Gold Ornament Divider */}
          <div className="mx-auto my-1.5 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
            <span className="h-px w-10 bg-[#B8966B]/60" />
            <span>✦</span>
            <span className="h-px w-10 bg-[#B8966B]/60" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. BLESSING SUBMISSION FORM */}
        {/* ========================================================================= */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center my-1.5">
          {/* Fixed Non-Editable Giver Name Badge */}
          <div className="mb-1.5 flex items-center justify-center gap-1.5">
            <span className="font-display text-[8px] md:text-[8.5px] tracking-[0.22em] uppercase text-[#8C263E] font-bold">
              BLESSING FROM:
            </span>
            <span className="font-display text-xs md:text-sm font-bold text-[#3B2518] bg-[#FAF6F0] px-2.5 py-0.5 rounded-md border border-[#E6DCCF] shadow-2xs">
              {guestName}
            </span>
          </div>

          {/* Textarea Box */}
          <div className="relative w-full max-w-[310px]">
            <textarea
              rows={3}
              maxLength={MAX_CHARS}
              value={blessingText}
              onChange={(e) => setBlessingText(e.target.value)}
              placeholder="Write your blessings for the couple..."
              className="w-full rounded-xl border border-[#E6DCCF] bg-[#FAF6F0]/95 p-3 font-display text-xs text-[#3B2518] placeholder-[#9C8275] shadow-2xs outline-none focus:border-[#8C263E] transition-all resize-none"
            />
            {/* Character Limit Counter */}
            <div className="absolute bottom-2 right-3 font-display text-[9px] text-[#9C8275]">
              {blessingText.length} / {MAX_CHARS}
            </div>
          </div>

          {/* Submit Button & Feedback */}
          <div className="mt-2 flex flex-col items-center">
            <button
              type="submit"
              disabled={!blessingText.trim()}
              className="inline-flex items-center justify-center rounded-full border border-[#5C1D2A] bg-[#5C1D2A] px-5 py-1.5 text-[9px] font-bold tracking-[0.24em] uppercase text-[#FAF6F0] shadow-xs hover:bg-[#7A2638] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
            >
              SEND BLESSING
            </button>

            {successMsg && (
              <p className="font-display italic text-[10px] text-[#8C263E] mt-1.5 animate-in fade-in">
                {successMsg}
              </p>
            )}
          </div>
        </form>

        {/* Decorative Separator */}
        <div className="my-1.5 flex items-center justify-center gap-2 text-xs text-[#B8966B] w-full">
          <span className="h-px w-10 bg-[#B8966B]/50" />
          <span>❖</span>
          <span className="h-px w-10 bg-[#B8966B]/50" />
        </div>

        {/* ========================================================================= */}
        {/* 3. RECENT BLESSINGS ROTATING DISPLAY (2 Cards, Auto-rotates every 3.5s) */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col items-center my-1 min-h-[140px]">
          <span className="font-display text-[8px] md:text-[8.5px] tracking-[0.2em] uppercase text-[#8C263E] font-bold mb-1.5">
            RECENT BLESSINGS
          </span>

          {blessings.length === 0 ? (
            <p className="font-display italic text-xs text-[#6B5744] my-4">
              Be the first to leave your blessings.
            </p>
          ) : (
            <div
              className={`w-full max-w-[310px] space-y-2 transition-opacity duration-400 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {visibleBlessings
                .filter((item): item is BlessingItem => Boolean(item))
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative rounded-xl border border-[#E6DCCF] bg-[#FAF6F0]/90 p-2.5 text-center shadow-2xs transition-all duration-300"
                  >
                    <p className="font-display italic text-xs text-[#3B2518] leading-snug">
                      &ldquo;{item.message}&rdquo;
                    </p>
                    <p className="font-display text-[10.5px] font-bold text-[#8C263E] mt-1 text-right">
                      — {item.name}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 4. FANCY "SHOW ALL BLESSINGS" BUTTON */}
        {/* ========================================================================= */}
        <div className="mt-2 mb-1">
          <button
            type="button"
            onClick={() => setShowAllModal(true)}
            className="inline-flex items-center justify-center rounded-full border border-[#B8966B]/70 bg-[#FAF6F0] px-5 py-1.5 text-[9px] font-bold tracking-[0.24em] uppercase text-[#8C263E] shadow-2xs hover:bg-[#8C263E] hover:text-white transition-all cursor-pointer"
          >
            SHOW ALL BLESSINGS
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. EXPANDED ALL BLESSINGS FULL-SCREEN OVERLAY MODAL */}
      {/* ========================================================================= */}
      {showAllModal && (
        <div className="absolute inset-0 z-50 flex flex-col bg-[#FAF6F2] p-4 text-center animate-in fade-in duration-300">
          {/* Top Close Bar */}
          <div className="flex items-center justify-between border-b border-[#B8966B]/30 pb-3 pt-2">
            <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-[#8C263E]">
              ALL BLESSINGS ({blessings.length})
            </span>
            <button
              type="button"
              onClick={() => setShowAllModal(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8C263E] text-white text-xs shadow-md transition-transform hover:scale-110 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Scrollable List of All Blessings */}
          <div className="flex-1 overflow-y-auto no-scrollbar py-4 space-y-3 px-1">
            {blessings.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-[#E6DCCF] bg-[#FAF6F0] p-3 text-left shadow-2xs"
              >
                <p className="font-display italic text-xs md:text-sm text-[#3B2518] leading-relaxed">
                  &ldquo;{item.message}&rdquo;
                </p>
                <p className="font-display text-xs font-bold text-[#8C263E] mt-2 text-right">
                  — {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Back Button */}
          <div className="pt-2 border-t border-[#B8966B]/30">
            <button
              type="button"
              onClick={() => setShowAllModal(false)}
              className="w-full rounded-full border border-[#8C263E] bg-[#8C263E] py-2 text-[9px] font-bold tracking-[0.24em] uppercase text-white shadow-xs hover:bg-[#7A2638] transition-colors cursor-pointer"
            >
              BACK TO INVITATION
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
