import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Heart,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Grid,
  Maximize2,
  Sparkles,
  MapPin,
  Calendar,
  X,
  SlidersHorizontal,
} from "lucide-react";

import memoriesFrameImg from "@/assets/memories page.png";
import memoriesBgImg from "@/assets/memories background.jpg";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import coupleImg from "@/assets/couple.jpg";
import newCoupleImg from "@/assets/new_couple_photo.png";

export interface MemoryItem {
  id?: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  caption: string;
  location?: string;
  date?: string;
  likes?: number;
}

const defaultMemories: MemoryItem[] = [
  {
    id: "mem-1",
    src: memory1,
    alt: "The couple at golden hour in Jaipur",
    title: "Golden Hour Whispers",
    category: "JAIPUR SUNSET",
    caption:
      "Chasing Jaipur's warm evening glow, where time slowed down and every smile felt eternal.",
    location: "Amber Fort • Jaipur",
    date: "November 2025",
    likes: 184,
  },
  {
    id: "mem-2",
    src: memory2,
    alt: "Marigold garlands on traditional silk",
    title: "Marigold & Silk Whispers",
    category: "TRADITIONS & SILK",
    caption:
      "The fragrance of fresh marigolds and handwoven silk mark the start of our forever celebrations.",
    location: "Courtyard Lawn • Jaipur",
    date: "December 2025",
    likes: 239,
  },
  {
    id: "mem-3",
    src: memory3,
    alt: "The decorated mandap at dusk",
    title: "Mandap Stars at Dusk",
    category: "ROYAL MANDAP",
    caption:
      "Soft amber lights illuminating the sacred mandap as we prepare for the seven holy vows.",
    location: "Amber Mandap • Jaipur",
    date: "December 2026",
    likes: 312,
  },
  {
    id: "mem-4",
    src: coupleImg,
    alt: "Aarav & Meera shared moments",
    title: "A Quiet Promise",
    category: "FIRST CHAPTER",
    caption: "In the middle of noisy crowds, finding that quiet comfort in each other's presence.",
    location: "Jaipur, Rajasthan",
    date: "October 2024",
    likes: 198,
  },
  {
    id: "mem-5",
    src: newCoupleImg,
    alt: "Pre-wedding bliss in traditional attire",
    title: "The Celebration Begins",
    category: "ROYAL ELEGANCE",
    caption: "Dressed in hues of rose maroon and gold, taking steps towards our new beginning.",
    location: "Palace Gardens",
    date: "November 2026",
    likes: 275,
  },
];

const memorySparkles = [
  { top: "8%", left: "10%", size: 6, color: "#B8966B", duration: 2.8, delay: 0.1 },
  { top: "14%", right: "12%", size: 8, color: "#F5E6C8", duration: 3.2, delay: 0.6 },
  { top: "42%", left: "6%", size: 7, color: "#C88D94", duration: 2.5, delay: 1.2 },
  { top: "48%", right: "8%", size: 9, color: "#8C263E", duration: 3.4, delay: 0.3 },
  { top: "78%", left: "12%", size: 6, color: "#B8966B", duration: 3.0, delay: 1.5 },
  { top: "82%", right: "10%", size: 8, color: "#F5E6C8", duration: 2.7, delay: 0.8 },
];

interface MemoriesSectionProps {
  id?: string;
  items?: MemoryItem[];
}

export function MemoriesSection({
  id = "memories",
  items = defaultMemories,
}: MemoriesSectionProps) {
  const memoryList = items && items.length > 0 ? items : defaultMemories;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<"spotlight" | "grid">("spotlight");
  const [lightboxMemory, setLightboxMemory] = useState<MemoryItem | null>(null);

  const [likesMap, setLikesMap] = useState<{ [key: string]: number }>(() => {
    const initial: { [key: string]: number } = {};
    memoryList.forEach((item, idx) => {
      const key = item.id || `mem-${idx}`;
      initial[key] = item.likes || 120 + idx * 25;
    });
    return initial;
  });

  const [hasLikedMap, setHasLikedMap] = useState<{ [key: string]: boolean }>({});

  const fallbackMemory: MemoryItem = defaultMemories[0]!;
  const currentMemory: MemoryItem = memoryList[currentIndex] || memoryList[0] || fallbackMemory;
  const currentKey = currentMemory.id || `mem-${currentIndex}`;

  useEffect(() => {
    if (!isPlaying || viewMode !== "spotlight") return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % memoryList.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, viewMode, memoryList.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % memoryList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + memoryList.length) % memoryList.length);
  };

  const handleLike = (e: React.MouseEvent, item: MemoryItem, index: number) => {
    e.stopPropagation();
    const key = item.id || `mem-${index}`;
    const alreadyLiked = hasLikedMap[key];

    confetti({
      particleCount: alreadyLiked ? 15 : 35,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#8C263E", "#B8966B", "#F5E6C8", "#E6C594", "#D4AF37"],
      scalar: 0.9,
    });

    setLikesMap((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + (alreadyLiked ? 1 : 1),
    }));

    setHasLikedMap((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-between overflow-hidden bg-[#FAF6F2] py-6 px-4 text-center select-none"
    >
      <img
        src={memoriesBgImg}
        alt="Memories page romantic background"
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none z-0 opacity-20"
      />

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
        <style>{`
          @keyframes memorySparkleTwinkle {
            0%, 100% { opacity: 0; transform: scale(0.3) rotate(0deg); }
            50% { opacity: 0.9; transform: scale(1.15) rotate(25deg); }
          }
          @keyframes slideProgress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
        {memorySparkles.map((sp, idx) => (
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
              animation: `memorySparkleTwinkle ${sp.duration}s ease-in-out ${sp.delay}s infinite`,
              filter: `drop-shadow(0 0 3px ${sp.color})`,
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex flex-1 h-full w-full max-w-[350px] flex-col items-center justify-between py-2 md:py-3">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-between w-full px-2 mb-1">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#B8966B]/60 bg-[#FAF6F0] px-3 py-0.5 text-[8.5px] font-bold tracking-[0.24em] uppercase text-[#8C263E] shadow-2xs">
              <Sparkles className="w-2.5 h-2.5 text-[#B8966B]" />
              OUR STORY
            </span>

            <div className="flex items-center gap-1 bg-[#FAF6F0]/90 p-0.5 rounded-full border border-[#B8966B]/30 shadow-2xs">
              <button
                type="button"
                onClick={() => setViewMode("spotlight")}
                title="Spotlight View"
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[8.5px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  viewMode === "spotlight"
                    ? "bg-[#8C263E] text-white shadow-2xs"
                    : "text-[#6B5744] hover:text-[#8C263E]"
                }`}
              >
                <SlidersHorizontal className="w-2.5 h-2.5" />
                Featured
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                title="Grid Gallery View"
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[8.5px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#8C263E] text-white shadow-2xs"
                    : "text-[#6B5744] hover:text-[#8C263E]"
                }`}
              >
                <Grid className="w-2.5 h-2.5" />
                Grid
              </button>
            </div>
          </div>

          <p className="font-display text-[8.5px] md:text-[9px] tracking-[0.32em] uppercase text-[#6B5744] font-semibold mt-1">
            PRECIOUS MOMENTS &amp; MEMORIES
          </p>

          <h2 className="script text-3xl sm:text-4xl md:text-[38px] text-[#5C1D2A] mt-0.5 font-normal leading-tight drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]">
            Our Journey
          </h2>

          <div className="mx-auto my-1 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
            <span className="h-px w-10 bg-[#B8966B]/60" />
            <span className="text-[10px]">❖</span>
            <span className="h-px w-10 bg-[#B8966B]/60" />
          </div>
        </div>

        {viewMode === "spotlight" ? (
          <div className="my-1.5 relative w-full flex flex-col items-center flex-1 justify-center">
            {isPlaying && (
              <div className="w-[260px] h-[2px] bg-[#B8966B]/20 rounded-full overflow-hidden mb-2">
                <div
                  key={currentIndex}
                  className="h-full bg-[#8C263E]"
                  style={{ animation: "slideProgress 4.5s linear forwards" }}
                />
              </div>
            )}

            <div
              className="relative w-[275px] sm:w-[295px] h-[330px] sm:h-[355px] flex items-center justify-center drop-shadow-md transition-transform duration-300 hover:scale-[1.015] cursor-pointer group"
              onClick={() => setLightboxMemory(currentMemory)}
            >
              <img
                src={memoriesFrameImg}
                alt="Vintage stitched fabric photo frame"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
              />

              <div className="absolute top-[8.5%] right-[9.5%] z-20 bg-[#FAF6F0]/90 p-1 rounded-full border border-[#B8966B]/40 text-[#8C263E] opacity-90 group-hover:scale-110 transition-transform">
                <Maximize2 className="w-3 h-3" />
              </div>

              <div className="absolute inset-y-[13.2%] inset-x-[13.2%] z-10 overflow-hidden rounded-xs border border-[#B8966B]/30 shadow-inner flex items-center justify-center bg-[#FAF6F0]">
                <img
                  key={currentMemory.src}
                  src={currentMemory.src}
                  alt={currentMemory.alt}
                  className="w-full h-full object-cover object-center transition-all duration-700 animate-in fade-in zoom-in-95"
                />
              </div>

              <div className="absolute bottom-[8.5%] left-0 right-0 z-20 flex justify-center px-6">
                <button
                  type="button"
                  onClick={(e) => handleLike(e, currentMemory, currentIndex)}
                  className="bg-[#FAF6F0]/95 backdrop-blur-[3px] border border-[#B8966B]/40 px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 text-[9px] font-bold text-[#8C263E] hover:scale-110 transition-transform cursor-pointer"
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      hasLikedMap[currentKey] ? "fill-[#8C263E] text-[#8C263E]" : "text-[#8C263E]"
                    }`}
                  />
                  <span>{likesMap[currentKey] || 0}</span>
                </button>
              </div>
            </div>

            <div className="mt-2 max-w-[310px] px-2 flex flex-col items-center">
              <p className="font-display italic text-xs md:text-[13px] text-[#6B5744] font-medium leading-snug">
                &ldquo;{currentMemory.caption}&rdquo;
              </p>
            </div>

            <div className="mt-2.5 flex items-center justify-center gap-3 w-full">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous memory photo"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#8C263E]/40 bg-[#FAF6F0] text-[#8C263E] shadow-2xs hover:bg-[#8C263E] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[8px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
                  isPlaying
                    ? "border-[#8C263E] bg-[#8C263E] text-white shadow-2xs"
                    : "border-[#B8966B]/50 bg-[#FAF6F0] text-[#6B5744] hover:border-[#8C263E]"
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-2.5 h-2.5" />
                ) : (
                  <Play className="w-2.5 h-2.5 fill-current" />
                )}
                {isPlaying ? "Pause" : "Auto Play"}
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next memory photo"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#8C263E]/40 bg-[#FAF6F0] text-[#8C263E] shadow-2xs hover:bg-[#8C263E] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-center gap-1.5 overflow-x-auto py-1 px-2 max-w-full no-scrollbar">
              {memoryList.map((item, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative h-10 w-10 sm:h-11 sm:w-11 rounded-md overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                      isSelected
                        ? "border-[#8C263E] scale-110 shadow-md ring-2 ring-[#B8966B]/40"
                        : "border-[#B8966B]/30 opacity-70 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#8C263E]/15 pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="my-2 w-full flex-1 overflow-y-auto max-h-[460px] px-1 no-scrollbar animate-in fade-in">
            <div className="grid grid-cols-2 gap-2.5 w-full">
              {memoryList.map((item, idx) => {
                const key = item.id || `mem-${idx}`;
                return (
                  <div
                    key={key}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setViewMode("spotlight");
                    }}
                    className="group relative flex flex-col items-center rounded-xl border border-[#B8966B]/40 bg-[#FAF6F0] p-1.5 shadow-sm transition-transform duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden"
                  >
                    <div className="relative w-full h-[115px] rounded-lg overflow-hidden border border-[#B8966B]/20 bg-[#FAF2F4]">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[8.5px] font-bold uppercase tracking-wider">
                        View Spotlight
                      </div>
                    </div>

                    <div className="mt-1.5 w-full flex items-center justify-center px-1">
                      <button
                        type="button"
                        onClick={(e) => handleLike(e, item, idx)}
                        className="flex items-center gap-1 text-[8.5px] font-semibold text-[#8C263E] hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Heart className={`w-3 h-3 ${hasLikedMap[key] ? "fill-[#8C263E]" : ""}`} />
                        <span>{likesMap[key] || 0}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="my-1 flex items-center justify-center gap-2 text-xs text-[#B8966B] w-full">
          <span className="h-px w-12 bg-[#B8966B]/50" />
          <svg className="w-3.5 h-3.5 text-[#B8966B]" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15,12 12,22 9,12" />
          </svg>
          <span className="h-px w-12 bg-[#B8966B]/50" />
        </div>
      </div>

      {lightboxMemory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 transition-opacity animate-in fade-in"
          onClick={() => setLightboxMemory(null)}
        >
          <div
            className="relative w-full max-w-[360px] bg-[#FAF6F0] rounded-2xl border border-[#B8966B]/60 p-4 shadow-2xl flex flex-col items-center animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxMemory(null)}
              className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#8C263E] text-white shadow-md hover:scale-110 transition-transform cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-full h-[280px] rounded-xl overflow-hidden border border-[#B8966B]/30 bg-black/5 shadow-inner">
              <img
                src={lightboxMemory.src}
                alt={lightboxMemory.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="mt-3 text-center w-full">
              <p className="font-display italic text-xs text-[#6B5744] mt-1 px-2">
                &ldquo;{lightboxMemory.caption}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-0 left-0 right-0 h-[60px] sm:h-[75px] md:h-[90px] bg-gradient-to-t from-transparent via-[#FAF6F2]/50 to-[#FAF6F2] pointer-events-none z-20" />

      <div className="absolute bottom-0 left-0 right-0 h-[70px] sm:h-[85px] md:h-[100px] bg-gradient-to-b from-transparent via-[#FAF6F2]/50 to-[#FAF6F2] pointer-events-none z-20" />
    </section>
  );
}
