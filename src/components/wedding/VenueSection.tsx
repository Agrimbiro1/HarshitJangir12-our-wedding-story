import { FC } from "react";
import venueBgImg from "@/assets/venue.png";

export interface Coordinator {
  id: string;
  name: string;
  role: string;
  phone: string;
  whatsapp?: string;
}

export interface VenueData {
  name: string;
  city: string;
  date: string;
  mapUrl: string;
  coordinators: Coordinator[];
}

export const defaultVenueData: VenueData = {
  name: "Rambagh Gardens",
  city: "Jaipur, Rajasthan",
  date: "4 December 2026",
  mapUrl: "https://maps.google.com/?q=Rambagh+Palace+Jaipur",
  coordinators: [
    {
      id: "coord-1",
      name: "Rajesh Sharma",
      role: "Wedding Coordinator",
      phone: "+919876543210",
      whatsapp: "919876543210",
    },
    {
      id: "coord-2",
      name: "Anita Sharma",
      role: "Wedding Coordinator",
      phone: "+919876543211",
      whatsapp: "919876543211",
    },
  ],
};

interface VenueSectionProps {
  id?: string;
  data?: VenueData;
}

// Sparkle background layer configuration
const venueSparkles = [
  { top: "6%", left: "8%", size: 7, color: "#B8966B", duration: 3.2, delay: 0.2 },
  { top: "10%", right: "9%", size: 9, color: "#8C263E", duration: 2.8, delay: 1.1 },
  { top: "24%", left: "6%", size: 6, color: "#D4AF37", duration: 3.5, delay: 0.7 },
  { top: "35%", right: "7%", size: 8, color: "#B8966B", duration: 2.9, delay: 1.5 },
  { top: "52%", left: "8%", size: 7, color: "#8C263E", duration: 3.1, delay: 0.4 },
  { top: "68%", right: "6%", size: 8, color: "#D4AF37", duration: 3.6, delay: 1.2 },
  { top: "82%", left: "7%", size: 6, color: "#B8966B", duration: 2.7, delay: 0.8 },
  { top: "92%", right: "10%", size: 8, color: "#8C263E", duration: 3.4, delay: 1.8 },
];

/**
 * Hand-drawn heritage palace line-art SVG vector artwork
 */
const VenuePalaceIllustration: FC<{ className?: string }> = ({ className = "w-full h-auto" }) => (
  <svg
    className={className}
    viewBox="0 0 320 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Base Ground Line & Accent Dots */}
    <line x1="20" y1="116" x2="300" y2="116" stroke="#8C263E" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
    <line x1="10" y1="120" x2="310" y2="120" stroke="#B8966B" strokeWidth="1.5" opacity="0.7" />

    {/* Side Trees Foliage Line Art */}
    <g opacity="0.65" stroke="#6B705C" strokeWidth="1">
      {/* Left Tree */}
      <path d="M 28 120 Q 22 95 28 75 Q 34 95 28 120 Z" fill="#6B705C" fillOpacity="0.08" />
      <line x1="28" y1="120" x2="28" y2="70" />
      {/* Right Tree */}
      <path d="M 292 120 Q 286 95 292 75 Q 298 95 292 120 Z" fill="#6B705C" fillOpacity="0.08" />
      <line x1="292" y1="120" x2="292" y2="70" />
    </g>

    {/* Left Wing Outer Building */}
    <g stroke="#8C263E" strokeWidth="1.2">
      <rect x="42" y="60" width="55" height="60" rx="1" fill="#FAF6F0" />
      {/* Roof Pediment */}
      <path d="M 40 60 L 69.5 40 L 99 60 Z" fill="#FAF6F0" />
      {/* Windows */}
      <rect x="52" y="70" width="14" height="20" rx="7" fill="#8C263E" fillOpacity="0.08" strokeWidth="1" />
      <rect x="73" y="70" width="14" height="20" rx="7" fill="#8C263E" fillOpacity="0.08" strokeWidth="1" />
      <rect x="52" y="98" width="14" height="18" rx="1" strokeWidth="1" />
      <rect x="73" y="98" width="14" height="18" rx="1" strokeWidth="1" />
    </g>

    {/* Right Wing Outer Building */}
    <g stroke="#8C263E" strokeWidth="1.2">
      <rect x="223" y="60" width="55" height="60" rx="1" fill="#FAF6F0" />
      {/* Roof Pediment */}
      <path d="M 221 60 L 250.5 40 L 280 60 Z" fill="#FAF6F0" />
      {/* Windows */}
      <rect x="233" y="70" width="14" height="20" rx="7" fill="#8C263E" fillOpacity="0.08" strokeWidth="1" />
      <rect x="254" y="70" width="14" height="20" rx="7" fill="#8C263E" fillOpacity="0.08" strokeWidth="1" />
      <rect x="233" y="98" width="14" height="18" rx="1" strokeWidth="1" />
      <rect x="254" y="98" width="14" height="18" rx="1" strokeWidth="1" />
    </g>

    {/* Center Grand Main Palace Facade */}
    <g stroke="#8C263E" strokeWidth="1.3">
      <rect x="92" y="44" width="136" height="76" fill="#FAF6F0" />
      {/* Main Classical Triangular Pediment */}
      <path d="M 88 44 L 160 16 L 232 44 Z" fill="#FAF6F0" />

      {/* Spire & Finial Ornament */}
      <line x1="160" y1="16" x2="160" y2="4" stroke="#B8966B" strokeWidth="1.5" />
      <circle cx="160" cy="4" r="2.5" fill="#B8966B" stroke="none" />

      {/* Pediment Rosette Window */}
      <circle cx="160" cy="32" r="6" fill="#B8966B" fillOpacity="0.15" stroke="#B8966B" strokeWidth="1" />
      <circle cx="160" cy="32" r="2" fill="#B8966B" stroke="none" />

      {/* Decorative Balustrade Horizon */}
      <line x1="92" y1="62" x2="228" y2="62" stroke="#B8966B" strokeWidth="1" />

      {/* Upper Arch Windows */}
      <g strokeWidth="1">
        <rect x="108" y="48" width="16" height="12" rx="6" fill="#8C263E" fillOpacity="0.08" />
        <rect x="132" y="48" width="16" height="12" rx="6" fill="#8C263E" fillOpacity="0.08" />
        <rect x="172" y="48" width="16" height="12" rx="6" fill="#8C263E" fillOpacity="0.08" />
        <rect x="196" y="48" width="16" height="12" rx="6" fill="#8C263E" fillOpacity="0.08" />
      </g>

      {/* Grand Arch Entrance Portico */}
      <path d="M 134 120 V 82 C 134 68 186 68 186 82 V 120 Z" fill="#FAF6F0" stroke="#8C263E" strokeWidth="1.4" />
      <path d="M 142 120 V 87 C 142 76 178 76 178 87 V 120 Z" fill="#8C263E" fillOpacity="0.06" stroke="#B8966B" strokeWidth="1" />
      <line x1="160" y1="74" x2="160" y2="120" stroke="#B8966B" strokeWidth="0.8" strokeDasharray="2 2" />

      {/* Flanking Decorative Pillars */}
      <line x1="102" y1="62" x2="102" y2="120" stroke="#B8966B" strokeWidth="1.2" />
      <line x1="218" y1="62" x2="218" y2="120" stroke="#B8966B" strokeWidth="1.2" />
    </g>

    {/* Top Ornamental Gold Accents */}
    <g fill="#B8966B">
      <circle cx="69.5" cy="37" r="2" />
      <circle cx="250.5" cy="37" r="2" />
    </g>
  </svg>
);

// Location Pin SVG Icon
const LocationPinIcon: FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Phone Call SVG Icon
const PhoneCallIcon: FC<{ className?: string }> = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// WhatsApp SVG Icon
const WhatsAppIcon: FC<{ className?: string }> = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export function VenueSection({ id = "venue", data = defaultVenueData }: VenueSectionProps) {
  const venue = data || defaultVenueData;

  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] md:h-[844px] w-full flex-col items-center justify-between overflow-hidden bg-[#FAF6F2] py-6 md:py-8 px-4 text-center select-none"
    >
      {/* Soft Editorial Paper Texture & Gradient Background */}
      <div className="absolute inset-0 bg-radial from-[#FFFFFF]/75 via-[#FAF6F2] to-[#F3EFE6]/85 pointer-events-none" />

      {/* Decorative Winding Road/Path Illustration Background Overlay (`venue.png`) */}
      <img
        src={venueBgImg}
        alt="Vintage decorative venue road and path illustration"
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none z-0 opacity-25 md:opacity-25 transition-opacity duration-700"
      />

      {/* Sparkle Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
        <style>{`
          @keyframes venueSparkleTwinkle {
            0%, 100% { opacity: 0; transform: scale(0.35) rotate(0deg); }
            50% { opacity: 0.95; transform: scale(1.15) rotate(22deg); }
          }
        `}</style>
        {venueSparkles.map((sp, idx) => (
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
              animation: `venueSparkleTwinkle ${sp.duration}s ease-in-out ${sp.delay}s infinite`,
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
        {/* 1. ELEGANT SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center animate-in fade-in duration-700">
          {/* Eyebrow Label */}
          <span className="font-display text-[8.5px] md:text-[9.5px] tracking-[0.28em] uppercase text-[#8C263E] font-bold">
            THE CELEBRATION
          </span>

          {/* Cursive Script Title */}
          <h2 className="script text-3xl sm:text-4xl md:text-[40px] text-[#5C1D2A] mt-0.5 font-normal leading-tight drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.8)]">
            Venue &amp; Contact
          </h2>

          {/* Thin Champagne Divider */}
          <div className="mx-auto my-1.5 flex items-center justify-center gap-2 text-xs text-[#B8966B]">
            <span className="h-px w-10 bg-[#B8966B]/60" />
            <span className="text-[9px]">✦</span>
            <span className="h-px w-10 bg-[#B8966B]/60" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. VENUE ARCHITECTURAL ILLUSTRATION & DETAILS */}
        {/* ========================================================================= */}
        <div className="my-auto py-1 flex flex-col items-center w-full animate-in fade-in slide-in-from-bottom-2 duration-700">
          {/* Architectural Line-Art Sketch Box */}
          <div className="relative my-1 p-2 rounded-xl border border-[#B8966B]/30 bg-[#FAF6F0]/80 shadow-2xs w-full max-w-[275px] flex justify-center transition-all duration-300 hover:border-[#B8966B]/60">
            <VenuePalaceIllustration className="w-[92%] max-w-[255px] h-auto" />
          </div>

          {/* Venue Name */}
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[0.06em] text-[#3B2518] uppercase mt-2">
            {venue.name}
          </h3>

          {/* Location & Date */}
          <p className="font-display text-xs md:text-sm tracking-[0.2em] uppercase text-[#6B5744] font-medium mt-0.5">
            {venue.city}
          </p>
          <p className="font-display text-[10px] md:text-[11px] tracking-[0.24em] uppercase text-[#8C263E] font-semibold mt-0.5">
            {venue.date}
          </p>

          {/* Outlined Location Action Button */}
          <a
            href={venue.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2.5 inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#8C263E]/40 bg-[#8C263E]/08 text-[9px] font-bold tracking-[0.26em] uppercase text-[#8C263E] shadow-2xs hover:bg-[#8C263E] hover:text-white transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            <LocationPinIcon className="w-3.5 h-3.5 text-[#8C263E] group-hover:text-white transition-colors" />
            <span>VIEW LOCATION</span>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 3. ASSISTANCE & COORDINATORS CONTACT SECTION */}
        {/* ========================================================================= */}
        <div className="my-auto py-1 flex flex-col items-center w-full animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150">
          {/* Contact Eyebrow Header */}
          <span className="font-display text-[8.5px] md:text-[9px] tracking-[0.28em] uppercase text-[#8C263E] font-bold mb-1">
            FOR ANY ASSISTANCE
          </span>

          {/* Section Subtitle & Decorative Line */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#B8966B] w-full mb-2">
            <span className="h-px w-8 bg-[#B8966B]/50" />
            <span className="font-display text-[9px] tracking-[0.2em] uppercase text-[#6B5744] font-medium">
              COORDINATORS
            </span>
            <span className="h-px w-8 bg-[#B8966B]/50" />
          </div>

          {/* Coordinators Stationery Cards Stack */}
          <div className="grid grid-cols-1 gap-2 w-full max-w-[315px]">
            {venue.coordinators.map((coord) => (
              <div
                key={coord.id}
                className="relative rounded-xl border border-[#E6DCCF] bg-gradient-to-b from-[#FAF6F0] via-[#FCF9F3] to-[#FAF6F0] p-2.5 text-center shadow-2xs transition-all duration-300 hover:border-[#B8966B]/60 flex flex-col items-center gap-1"
              >
                {/* Coordinator Name with Diamond Accent */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[7px] text-[#B8966B] select-none">◇</span>
                  <h4 className="font-display text-sm font-bold text-[#3B2518]">
                    {coord.name}
                  </h4>
                </div>

                {/* Coordinator Role */}
                <p className="font-display text-[9.5px] text-[#6B5744] tracking-[0.16em] uppercase font-medium">
                  {coord.role}
                </p>

                {/* Action Buttons Row (Call & WhatsApp) */}
                <div className="mt-1 flex items-center justify-center gap-2 w-full">
                  {/* Call Button */}
                  <a
                    href={`tel:${coord.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#8C263E]/30 bg-white/70 text-[8.5px] font-bold tracking-[0.18em] uppercase text-[#8C263E] shadow-2xs hover:bg-[#8C263E] hover:text-white transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    <PhoneCallIcon className="w-3 h-3" />
                    <span>CALL</span>
                  </a>

                  {/* WhatsApp Button */}
                  {coord.whatsapp && (
                    <a
                      href={`https://wa.me/${coord.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#25D366]/40 bg-[#25D366]/08 text-[8.5px] font-bold tracking-[0.18em] uppercase text-[#128C7E] shadow-2xs hover:bg-[#25D366] hover:text-white transition-all duration-200 cursor-pointer active:scale-95"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>WHATSAPP</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft Top Transition Overlay (RSVP -> Venue) */}
      <div className="absolute top-0 left-0 right-0 h-[60px] sm:h-[75px] md:h-[90px] bg-gradient-to-t from-transparent via-[#FAF6F2]/50 to-[#FAF6F2] pointer-events-none z-20" />

      {/* Soft Bottom Transition Overlay (Venue -> Closing) */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] sm:h-[85px] md:h-[100px] bg-gradient-to-b from-transparent via-[#FAF6F2]/50 to-[#FAF6F2] pointer-events-none z-20" />
    </section>
  );
}
