import { useState } from "react";
import memoriesFrameImg from "@/assets/memories page.png";
import memoriesBgImg from "@/assets/memories background.jpg";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

export interface MemoryItem {
  src: string;
  alt: string;
  caption: string;
}

const defaultMemories: MemoryItem[] = [
  {
    src: memory1,
    alt: "The couple at golden hour",
    caption: "Golden hour in Jaipur",
  },
  {
    src: memory2,
    alt: "Marigold garlands on silk",
    caption: "Marigold & silk details",
  },
  {
    src: memory3,
    alt: "The decorated mandap at dusk",
    caption: "Mandap illuminated at dusk",
  },
];

interface MemoriesSectionProps {
  id?: string;
  items?: MemoryItem[];
}

export function MemoriesSection({ id = "memories", items = defaultMemories }: MemoriesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentMemory = items[currentIndex] || items[0] || { src: "", alt: "", caption: "" };

  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-between overflow-hidden bg-[#FAF6F2] py-8 px-4 text-center select-none"
    >
      {/* Memories Background Image Layer (scattered burgundy hearts on warm ivory paper) */}
      <img
        src={memoriesBgImg}
        alt="Memories page romantic background with scattered hearts"
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none z-0 opacity-20"
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex flex-1 h-full w-full max-w-[340px] flex-col items-center justify-between py-3 md:py-4">
        {/* ========================================================================= */}
        {/* 1. TOP HEADER & HEADING */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center">
          {/* Top Pill Label */}
          <span className="inline-block rounded-full border border-[#B8966B]/60 bg-[#FAF6F0] px-3.5 py-0.5 text-[8.5px] font-bold tracking-[0.26em] uppercase text-[#8C263E] shadow-2xs">
            OUR STORY
          </span>

          {/* Eyebrow Header */}
          <p className="font-display text-[8.5px] md:text-[9px] tracking-[0.32em] uppercase text-[#6B5744] font-semibold mt-1.5">
            PRECIOUS MOMENTS
          </p>

          {/* Calligraphic Script Title */}
          <h2 className="script text-3xl sm:text-4xl md:text-[40px] text-[#5C1D2A] mt-0.5 font-normal leading-tight drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]">
            Memories
          </h2>

          {/* Gold Ornament Divider */}
          <div className="mx-auto my-1.5 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
            <span className="h-px w-10 bg-[#B8966B]/60" />
            <span>❖</span>
            <span className="h-px w-10 bg-[#B8966B]/60" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. VINTAGE STITCHED FABRIC PHOTO FRAME DISPLAY */}
        {/* ========================================================================= */}
        <div className="my-2 relative w-full flex flex-col items-center">
          {/* Frame Container */}
          <div className="relative w-[280px] sm:w-[300px] h-[350px] sm:h-[370px] flex items-center justify-center drop-shadow-md transition-transform duration-300 hover:scale-[1.01]">
            {/* PNG Vintage Stitched Frame Base Overlay (Layer 0) */}
            <img
              src={memoriesFrameImg}
              alt="Vintage stitched fabric photo frame"
              className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
            />

            {/* Memory Photo (Layered ON TOP inside the inner stitched rectangle area) */}
            <div className="absolute inset-y-[13.5%] inset-x-[13.5%] z-10 overflow-hidden rounded-xs border border-[#B8966B]/30 shadow-inner flex items-center justify-center bg-[#FAF6F0]">
              <img
                src={currentMemory.src}
                alt={currentMemory.alt}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
            </div>
          </div>

          {/* Memory Caption */}
          <p className="font-display italic text-xs md:text-sm text-[#6B5744] mt-3 font-medium">
            &ldquo;{currentMemory.caption}&rdquo;
          </p>

          {/* Navigation Controls (If multiple memories exist) */}
          {items.length > 1 && (
            <div className="mt-3 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous memory photo"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8C263E]/40 bg-[#FAF6F0] text-[#8C263E] shadow-2xs hover:bg-[#8C263E] hover:text-white transition-colors cursor-pointer"
              >
                ‹
              </button>
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to memory photo ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex
                      ? "w-5 bg-[#8C263E]"
                      : "w-2 bg-[#B8966B]/50 hover:bg-[#B8966B]"
                      }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next memory photo"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8C263E]/40 bg-[#FAF6F0] text-[#8C263E] shadow-2xs hover:bg-[#8C263E] hover:text-white transition-colors cursor-pointer"
              >
                ›
              </button>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM DECORATIVE SEPARATOR */}
        {/* ========================================================================= */}
        <div className="my-1 flex items-center justify-center gap-2 text-xs text-[#B8966B] w-full">
          <span className="h-px w-12 bg-[#B8966B]/50" />
          <svg className="w-3.5 h-3.5 text-[#B8966B]" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15,12 12,22 9,12" />
          </svg>
          <span className="h-px w-12 bg-[#B8966B]/50" />
        </div>
      </div>
    </section>
  );
}
