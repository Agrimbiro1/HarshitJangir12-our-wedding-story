import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Section } from "@/components/wedding/Section";
import { Countdown } from "@/components/wedding/Countdown";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import openingVideo from "@/assets/opening animation.mp4";

import welcomePageImg from "@/assets/welcome page.jpg";
import couplePageImg from "@/assets/couple page.jpg";
import eventPageImg from "@/assets/event.png";
import eventBgImg from "@/assets/event background.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarav & Meera — Wedding Celebrations, 4 December 2026" },
      {
        name: "description",
        content:
          "Join Aarav and Meera as they begin forever. Events, venue, countdown, family and RSVP for the 4 December 2026 wedding in Jaipur.",
      },
      { property: "og:title", content: "Aarav & Meera — Wedding Celebrations" },
      {
        property: "og:description",
        content:
          "Events, venue, countdown and RSVP for Aarav and Meera's wedding on 4 December 2026 in Jaipur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function HaldiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11C4 16 7.5 19 12 19C16.5 19 20 16 20 11H4Z" />
      <path d="M3 11H21" />
      <path d="M6.5 11C7 8.5 9 7 12 7C15 7 17 8.5 17.5 11" />
      <path d="M12 7C12 4 10 3 10 3C10 3 11 5 12 7Z" />
      <path d="M12 7C12 4.5 14 3.5 14 3.5C14 3.5 13.5 5.5 12 7Z" />
    </svg>
  );
}

function MehndiIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C12 3 8 7 8 11C8 13.2 9.8 15 12 15C14.2 15 16 13.2 16 11C16 7 12 3 12 3Z" />
      <circle cx="12" cy="11" r="1.8" />
      <path d="M12 15V21" />
      <path d="M9 18C10.5 17 12 19 12 21" />
      <path d="M15 18C13.5 17 12 19 12 21" />
      <path d="M7 11C5 11 4 9.5 4 9.5" />
      <path d="M17 11C19 11 20 9.5 20 9.5" />
    </svg>
  );
}

function SangeetIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V8L18 5V15" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="15.5" cy="15" r="2.5" />
      <path d="M9 11L18 8" />
    </svg>
  );
}

function WeddingIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L12 5" />
      <path d="M12 5C8 5 5 7.5 5 10H19C19 7.5 16 5 12 5Z" />
      <path d="M6 10V20" />
      <path d="M18 10V20" />
      <path d="M6 14C8.5 12.5 15.5 12.5 18 14" />
      <path d="M4 20H20" />
    </svg>
  );
}

function LocationIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21C16 16.5 18 13.2 18 10C18 6.7 15.3 4 12 4C8.7 4 6 6.7 6 10C6 13.2 8 16.5 12 21Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function SearchExpandIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="6" />
      <path d="M15.5 15.5L20 20" />
      <path d="M11 8V14" strokeWidth="1.2" />
      <path d="M8 11H14" strokeWidth="1.2" />
    </svg>
  );
}

const events = [
  {
    name: "Haldi Ceremony",
    date: "3 DECEMBER 2026",
    time: "11:00 AM ONWARDS",
    place: "GARDEN TERRACE",
    location: "JAIPUR, RAJASTHAN",
    mapQuery: "Garden+Terrace+Jaipur",
    IconComponent: HaldiIcon,
  },
  {
    name: "Mehndi Ceremony",
    date: "2 DECEMBER 2026",
    time: "04:00 PM ONWARDS",
    place: "COURTYARD LAWN",
    location: "JAIPUR, RAJASTHAN",
    mapQuery: "Courtyard+Lawn+Jaipur",
    IconComponent: MehndiIcon,
  },
  {
    name: "Sangeet Night",
    date: "3 DECEMBER 2026",
    time: "08:00 PM ONWARDS",
    place: "GRAND BALLROOM",
    location: "JAIPUR, RAJASTHAN",
    mapQuery: "Grand+Ballroom+Jaipur",
    IconComponent: SangeetIcon,
  },
  {
    name: "Wedding Ceremony",
    date: "4 DECEMBER 2026",
    time: "07:00 PM ONWARDS",
    place: "AMBER MANDAP",
    location: "JAIPUR, RAJASTHAN",
    mapQuery: "Amber+Mandap+Jaipur",
    IconComponent: WeddingIcon,
  },
];

const memories = [
  { src: memory1, alt: "The couple at golden hour" },
  { src: memory2, alt: "Marigold garlands on silk" },
  { src: memory3, alt: "The decorated mandap at dusk" },
];

function Opening() {
  const [isDone, setIsDone] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoEndedRef = useRef(false);

  const handleVideoEnd = () => {
    if (videoEndedRef.current) return;
    videoEndedRef.current = true;
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setHasEnded(true);
  };

  const handleOpenInvitation = () => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflow = "";
      document.documentElement.style.overflowY = "auto";
    }
    setIsFading(true);
    setTimeout(() => {
      setIsDone(true);
    }, 700);
  };

  useEffect(() => {
    if (typeof document !== "undefined" && !isDone) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
        document.body.style.overflowY = "auto";
        document.documentElement.style.overflow = "";
        document.documentElement.style.overflowY = "auto";
      }
    };
  }, [isDone]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay promise rejected:", err);
        });
      }
    }
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`absolute top-0 left-0 right-0 h-[100dvh] md:h-[844px] w-full z-40 flex items-center justify-center overflow-hidden bg-black transition-opacity duration-700 ease-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onWheel={(e) => !hasEnded && e.preventDefault()}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nobuttons noremoteplayback"
        onEnded={handleVideoEnd}
        onError={(e) => {
          console.error("Opening video loading failed:", e);
          handleVideoEnd();
        }}
        onTimeUpdate={() => {
          if (videoRef.current) {
            const { currentTime, duration } = videoRef.current;
            if (duration && duration > 0 && currentTime >= duration - 0.15) {
              handleVideoEnd();
            }
          }
        }}
        onLoadedMetadata={() => {
          if (videoRef.current?.duration) {
            const durationMs = videoRef.current.duration * 1000;
            setTimeout(handleVideoEnd, durationMs);
          }
        }}
        className="h-full w-full object-cover block"
      >
        <source src={openingVideo} type="video/mp4" />
        <source src="/opening-animation.mp4" type="video/mp4" />
        <source src="/opening animation.mp4" type="video/mp4" />
      </video>

      {/* Printed typography overlay over final frozen frame */}
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-between pt-16 md:pt-20 pb-12 md:pb-16 px-6 text-center transition-opacity duration-500 ease-out bg-transparent ${
          hasEnded
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top Text Group */}
        <div className="flex flex-col items-center mt-2 md:mt-4">
          <p className="font-display tracking-[0.38em] text-[#4E4B3E]/90 text-[0.7rem] uppercase font-normal">
            The Wedding Of
          </p>

          <h1 className="script mt-3 text-5xl md:text-6xl text-[#444135] font-normal leading-tight">
            Aarav &amp; Meera
          </h1>

          <div className="mx-auto my-4 h-px w-16 bg-[#525042]/35" />

          <p className="font-display text-xs md:text-sm tracking-[0.28em] text-[#4E4B3E]/90 uppercase font-normal">
            4 December 2026 · Jaipur
          </p>
        </div>

        {/* Bottom Button Group */}
        <div className="mb-4 md:mb-6">
          <button
            onClick={handleOpenInvitation}
            className="inline-flex items-center justify-center rounded-full border border-[#525042]/40 bg-[#525042]/08 px-8 py-3 text-[11px] font-normal tracking-[0.32em] text-[#444135] uppercase transition-all duration-300 hover:bg-[#525042]/15 hover:border-[#444135] hover:text-[#2D2B23] cursor-pointer"
          >
            Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
}

function useGuestName(): string {
  const [guestName, setGuestName] = useState("Guest");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const name =
        params.get("guest") ||
        params.get("name") ||
        params.get("to") ||
        params.get("guestName");
      if (name && name.trim()) {
        setGuestName(name.trim());
      }
    }
  }, []);

  return guestName;
}

function Index() {
  const [sent, setSent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null);
  const guestName = useGuestName();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="relative">
      <Opening />

      {/* 2 — Welcome */}
      <section className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-center overflow-hidden bg-[#FAF6F0]">
        {/* Background Wedding Illustration Artwork */}
        <img
          src={welcomePageImg}
          alt="Wedding celebration floral illustration"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
        />

        {/* Content safely typeset inside the central cream frame */}
        <div className="relative z-10 mx-auto flex max-w-[310px] flex-col items-center px-4 text-center -translate-y-[4.2rem] md:-translate-y-[4.8rem]">
          <p className="font-display text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-[#6B5744] font-normal">
            Together with their families
          </p>

          <h1 className="script mt-1.5 text-4xl md:text-5xl text-[#3D2E1E] font-normal leading-tight">
            Aarav &amp; Meera
          </h1>

          <div className="mx-auto my-2 h-px w-14 bg-[#B8966B]/50" />

          <p className="font-display text-[10px] md:text-[11px] tracking-[0.25em] text-[#5C4A38] uppercase font-normal">
            4 December 2026 · Jaipur
          </p>

          <p className="mt-2 text-[10px] md:text-[11px] leading-relaxed text-[#5C4A38]/90 font-display italic max-w-[270px]">
            We invite you to share in the joy of our wedding, and in the small moments
            that will make it a lifetime.
          </p>

          {/* Guest Personalization Block */}
          <div className="mt-3 flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-[#B8966B]/50 text-[9px]">
              <span>━━</span>
              <span className="text-[7px]">❖</span>
              <span>━━</span>
            </div>

            <p className="font-display text-[11px] italic text-[#7C5C42] mt-0.5">
              Dear
            </p>

            <h2 className="script text-2xl md:text-3xl text-[#823B44] mt-0.5 leading-snug">
              {guestName}
            </h2>

            <span className="text-[8px] text-[#823B44]/75 my-0.5">♥</span>

            <p className="font-display text-[11px] tracking-wider text-[#7C5C42]">
              &amp; Family
            </p>

            <div className="flex items-center gap-1.5 text-[#B8966B]/50 text-[9px] mt-0.5">
              <span>━━</span>
              <span className="text-[7px]">❖</span>
              <span>━━</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Couple */}
      <section id="couple" className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-center overflow-hidden bg-[#FAF2F4]">
        {/* Background Artwork with Mandap Illustration */}
        <img
          src={couplePageImg}
          alt="Save the Date watercolor mandap illustration"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
        />

        {/* Content safely typeset in upper empty area */}
        <div className="relative z-10 mx-auto flex max-w-[310px] flex-col items-center px-4 text-center -translate-y-[8.8rem] md:-translate-y-[9.5rem]">
          {/* Heading */}
          <h2 className="font-display text-xs md:text-sm tracking-[0.38em] uppercase text-[#7A4B59] font-semibold">
            SAVE THE DATE
          </h2>

          <div className="flex items-center gap-1.5 text-[#B8966B]/60 text-[9px] my-1">
            <span>━━</span>
            <span className="text-[7px]">❖</span>
            <span>━━</span>
          </div>

          {/* Main Date Typography */}
          <h1 className="font-display text-2xl md:text-3xl tracking-[0.22em] text-[#5A3841] font-normal uppercase leading-tight my-0.5">
            4 DECEMBER 2026
          </h1>

          <div className="flex items-center gap-1.5 text-[#B8966B]/60 text-[9px] my-1">
            <span>━━</span>
            <span className="text-[7px]">❖</span>
            <span>━━</span>
          </div>

          {/* Tagline */}
          <p className="font-display text-[10px] md:text-[11px] tracking-[0.25em] text-[#7A4B59] uppercase font-normal mt-1">
            TWO HEARTS, ONE JOURNEY
          </p>

          <div className="mx-auto my-2 h-px w-10 bg-[#C4939B]/40" />

          {/* Couple Bios */}
          <div className="mt-1 grid gap-2.5 text-center max-w-[280px]">
            <div>
              <h3 className="font-display text-xs md:text-sm font-medium tracking-wide text-[#4A2E35]">
                Aarav Sharma
              </h3>
              <p className="mt-0.5 text-[10px] md:text-[11px] leading-relaxed text-[#6E4B54]/95 font-display italic">
                An architect from Delhi who loves old cities, filter coffee and long drives.
              </p>
            </div>

            <div className="mx-auto h-px w-6 bg-[#C4939B]/35" />

            <div>
              <h3 className="font-display text-xs md:text-sm font-medium tracking-wide text-[#4A2E35]">
                Meera Jangir
              </h3>
              <p className="mt-0.5 text-[10px] md:text-[11px] leading-relaxed text-[#6E4B54]/95 font-display italic">
                A designer from Jaipur who collects books, sunsets and stray poems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Events */}
      <section id="events" className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-center overflow-hidden bg-[#FAF6F2]">
        {/* Main Background Image (soft textured paper with pink lotus flowers) */}
        <img
          src={eventBgImg}
          alt="Events page lotus watercolor background"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
        />

        {/* Section Header */}
        <div className="relative z-10 pt-2 pb-1 text-center -translate-y-2 md:-translate-y-3">
          <p className="font-display text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-[#8C5B67] font-normal">
            Celebrations
          </p>
          <h2 className="script mt-0.5 text-2xl md:text-3xl text-[#4A2E35]">
            Wedding Events
          </h2>
          <div className="mx-auto mt-1 h-px w-10 bg-[#B8966B]/50" />
        </div>

        {/* 2x2 Grid of 4 Parchment Event Cards */}
        <div className="relative z-10 mx-auto grid grid-cols-2 gap-2.5 md:gap-3.5 w-full max-w-[350px] px-3 text-center -translate-y-1.5 md:-translate-y-2">
          {events.map((ev) => {
            const Icon = ev.IconComponent;
            return (
              <button
                key={ev.name}
                type="button"
                onClick={() => setSelectedEvent(ev)}
                className="group relative flex h-[215px] md:h-[230px] w-full flex-col items-center justify-center overflow-hidden rounded-xl shadow-sm transition-transform duration-300 hover:scale-[1.03] cursor-pointer focus:outline-none"
              >
                {/* Background Parchment Artwork */}
                <img
                  src={eventPageImg}
                  alt={`${ev.name} parchment card`}
                  className="absolute inset-0 h-full w-full object-fill pointer-events-none select-none"
                />

                {/* Grid Card Content Typeset Directly On Parchment */}
                <div className="relative z-10 flex h-[74%] w-[78%] flex-col items-center justify-center text-center">
                  {/* Event SVG Icon */}
                  <div className="mb-0.5 select-none">
                    <Icon className="w-4 h-4 text-[#8C263E] drop-shadow-[0_1px_0.5px_rgba(255,255,255,0.6)]" />
                  </div>

                  {/* Event Name */}
                  <h3 className="script text-sm sm:text-[15px] md:text-base text-[#5C1D2A] font-semibold leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                    {ev.name}
                  </h3>

                  {/* Gold Divider */}
                  <div className="mx-auto my-1 flex items-center gap-1 text-[7px] text-[#B8966B]">
                    <span className="h-px w-4 bg-[#B8966B]/60" />
                    <span>❖</span>
                    <span className="h-px w-4 bg-[#B8966B]/60" />
                  </div>

                  {/* Date */}
                  <p className="font-display text-[8.5px] md:text-[9.5px] tracking-[0.1em] text-[#3B2518] uppercase font-bold drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)] whitespace-nowrap">
                    {ev.date}
                  </p>

                  {/* Time */}
                  <p className="font-display text-[7.5px] md:text-[8.5px] tracking-[0.08em] text-[#593E30] uppercase font-medium mt-0.5 whitespace-nowrap">
                    {ev.time}
                  </p>

                  {/* Tap to Expand Tag */}
                  <span className="mt-1.5 inline-flex items-center gap-0.5 rounded-full border border-[#8C263E]/30 bg-[#8C263E]/08 px-2 py-0.5 text-[6.5px] md:text-[7.5px] font-bold tracking-[0.14em] uppercase text-[#8C263E] transition-all duration-300 group-hover:bg-[#8C263E] group-hover:text-white whitespace-nowrap">
                    Tap to view <SearchExpandIcon className="w-2 h-2" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Full-size Expanded Parchment Card Modal */}
        {selectedEvent && (
          <div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-3 transition-opacity duration-300 animate-in fade-in"
            onClick={() => setSelectedEvent(null)}
          >
            <div
              className="relative flex h-[85%] w-[90%] max-w-[350px] flex-col items-center justify-center overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-[#8C263E] text-white text-sm shadow-md transition-transform hover:scale-110 cursor-pointer"
                aria-label="Close card"
              >
                ✕
              </button>

              {/* Background Parchment Artwork */}
              <img
                src={eventPageImg}
                alt="Full size event parchment card"
                className="absolute inset-0 h-full w-full object-fill pointer-events-none select-none"
              />

              {/* Full Size Event Content Typeset Perfectly HD On Parchment */}
              <div className="relative z-10 flex h-[78%] w-[76%] flex-col items-center justify-center text-center">
                {/* Event SVG Icon */}
                <div className="mb-1 select-none">
                  <selectedEvent.IconComponent className="w-6 h-6 md:w-7 md:h-7 text-[#8C263E] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]" />
                </div>

                {/* Event Name */}
                <h3 className="script text-2xl sm:text-3xl md:text-[34px] font-semibold leading-tight text-[#5C1D2A] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] max-w-full">
                  {selectedEvent.name}
                </h3>

                {/* Gold Ornament Divider */}
                <div className="mx-auto my-2 flex items-center gap-1.5 text-xs text-[#B8966B]">
                  <span className="h-px w-8 bg-[#B8966B]/70" />
                  <span>❖</span>
                  <span className="h-px w-8 bg-[#B8966B]/70" />
                </div>

                {/* Date */}
                <p className="font-display text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#3B2518] drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]">
                  {selectedEvent.date}
                </p>

                {/* Time */}
                <p className="font-display mt-0.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-[#593E30]">
                  {selectedEvent.time}
                </p>

                {/* Location Marker */}
                <div className="my-1.5 select-none">
                  <LocationIcon className="w-3.5 h-3.5 text-[#8C263E] mx-auto drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.7)]" />
                </div>

                {/* Venue Name */}
                <p className="font-display max-w-[190px] text-xs md:text-sm font-extrabold leading-snug uppercase tracking-[0.18em] text-[#3B2518] drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]">
                  {selectedEvent.place}
                </p>

                {/* City */}
                <p className="font-display mt-0.5 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.12em] text-[#593E30]">
                  {selectedEvent.location}
                </p>

                {/* View Location Button */}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent((selectedEvent.mapQuery || selectedEvent.place) + " Jaipur")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 px-3.5 py-1 rounded-full border border-[#8C263E]/40 bg-[#8C263E]/08 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C263E] shadow-xs hover:bg-[#8C263E] hover:text-white transition-colors"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 5 — Family */}
      <Section id="family" eyebrow="With Blessings Of" title="Our Families" tone="muted">
        <div className="grid gap-12">
          <div>
            <p className="eyebrow">Groom&apos;s Family</p>
            <p className="mt-4 font-display text-xl">Mr. Rajesh Sharma</p>
            <p className="font-display text-xl">Mrs. Anita Sharma</p>
            <p className="mt-2 text-sm text-muted-foreground">Brother · Kabir Sharma</p>
          </div>
          <div>
            <p className="eyebrow">Bride&apos;s Family</p>
            <p className="mt-4 font-display text-xl">Mr. Harshit Jangir</p>
            <p className="font-display text-xl">Mrs. Sunita Jangir</p>
            <p className="mt-2 text-sm text-muted-foreground">Sister · Naina Jangir</p>
          </div>
        </div>
      </Section>

      {/* 6 — Countdown */}
      <Section id="countdown" eyebrow="Counting Down" title="Until we say yes">
        <Countdown />
      </Section>

      {/* 7 — Memories */}
      <Section id="memories" eyebrow="Our Story" title="Memories" tone="muted">
        <div className="grid gap-4">
          {memories.map((m) => (
            <img
              key={m.alt}
              src={m.src}
              alt={m.alt}
              width={900}
              height={1200}
              loading="lazy"
              className="h-72 w-full object-cover"
            />
          ))}
        </div>
      </Section>

      {/* 8 — Blessings */}
      <Section id="blessings" eyebrow="Shubh Aashirwad" title="Blessings">
        <p className="font-display text-2xl italic leading-relaxed">
          &ldquo;May your days be long, your love be gentle, and your home be full of
          light and laughter.&rdquo;
        </p>
        <p className="eyebrow mt-8">With love, from all of us</p>
      </Section>

      {/* 9 — RSVP */}
      <Section id="rsvp" eyebrow="Kindly Reply" title="RSVP" tone="muted">
        {sent ? (
          <p className="font-display text-2xl">
            Thank you — we can&apos;t wait to celebrate with you.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-4 text-left">
            <input
              required
              placeholder="Your name"
              className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <select
              className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
              defaultValue="yes"
            >
              <option value="yes">Joyfully accepts</option>
              <option value="no">Regretfully declines</option>
            </select>
            <textarea
              rows={3}
              placeholder="A note for us (optional)"
              className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="w-full bg-primary px-6 py-3 text-sm tracking-[0.25em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send RSVP
            </button>
          </form>
        )}
      </Section>

      {/* 10 — Venue */}
      <Section id="venue" eyebrow="Where" title="The Venue">
        <p className="font-display text-2xl">Rambagh Gardens</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Bhawani Singh Road, Jaipur, Rajasthan 302005
        </p>
        <a
          href="https://maps.google.com/?q=Rambagh+Palace+Jaipur"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block border border-ink px-6 py-3 text-xs tracking-[0.25em] uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Open in maps
        </a>
      </Section>

      {/* 11 — Closing */}
      <footer className="border-t border-border px-6 py-24 text-center">
        <p className="script text-5xl text-primary">See you there</p>
        <div className="mx-auto my-6 h-px w-16 bg-gold" />
        <p className="eyebrow">Aarav &amp; Meera · 4 December 2026 · Jaipur</p>
      </footer>
    </main>
  );
}
