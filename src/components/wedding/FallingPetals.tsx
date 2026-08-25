import React from "react";

/**
 * FallingPetals Component
 * Adds a subtle, elegant falling petal and tiny leaf animation
 * strictly contained within the background of the Wedding Events section.
 */

interface PetalData {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
  opacity: number;
  shapeType: number;
  animName: string;
}

const PETAL_DATA: PetalData[] = [
  {
    id: 1,
    left: "4%",
    size: 14,
    duration: 8.5,
    delay: 0.2,
    color: "#F6C1CB",
    opacity: 0.8,
    shapeType: 0,
    animName: "petalFallA",
  },
  {
    id: 2,
    left: "11%",
    size: 11,
    duration: 9.8,
    delay: 3.4,
    color: "#C88D94",
    opacity: 0.75,
    shapeType: 1,
    animName: "petalFallB",
  },
  {
    id: 3,
    left: "19%",
    size: 16,
    duration: 7.6,
    delay: 1.1,
    color: "#E6C594",
    opacity: 0.85,
    shapeType: 0,
    animName: "petalFallC",
  },
  {
    id: 4,
    left: "27%",
    size: 10,
    duration: 11.2,
    delay: 5.8,
    color: "#9CAF88",
    opacity: 0.7,
    shapeType: 2,
    animName: "petalFallA",
  }, // tiny leaf
  {
    id: 5,
    left: "34%",
    size: 13,
    duration: 8.9,
    delay: 2.3,
    color: "#FFF6EF",
    opacity: 0.8,
    shapeType: 3,
    animName: "petalFallB",
  },
  {
    id: 6,
    left: "42%",
    size: 15,
    duration: 10.4,
    delay: 6.7,
    color: "#FCD5CE",
    opacity: 0.85,
    shapeType: 0,
    animName: "petalFallC",
  },
  {
    id: 7,
    left: "50%",
    size: 12,
    duration: 7.9,
    delay: 0.8,
    color: "#EAA0B0",
    opacity: 0.75,
    shapeType: 1,
    animName: "petalFallA",
  },
  {
    id: 8,
    left: "57%",
    size: 17,
    duration: 9.2,
    delay: 4.1,
    color: "#B86B77",
    opacity: 0.8,
    shapeType: 4,
    animName: "petalFallB",
  },
  {
    id: 9,
    left: "65%",
    size: 11,
    duration: 11.8,
    delay: 1.9,
    color: "#8A9A86",
    opacity: 0.7,
    shapeType: 2,
    animName: "petalFallC",
  }, // tiny leaf
  {
    id: 10,
    left: "72%",
    size: 14,
    duration: 8.2,
    delay: 5.2,
    color: "#D8B27B",
    opacity: 0.85,
    shapeType: 0,
    animName: "petalFallA",
  },
  {
    id: 11,
    left: "80%",
    size: 16,
    duration: 10.1,
    delay: 2.7,
    color: "#F6C1CB",
    opacity: 0.8,
    shapeType: 3,
    animName: "petalFallB",
  },
  {
    id: 12,
    left: "88%",
    size: 12,
    duration: 7.4,
    delay: 0.5,
    color: "#FCD5CE",
    opacity: 0.75,
    shapeType: 1,
    animName: "petalFallC",
  },
  {
    id: 13,
    left: "94%",
    size: 15,
    duration: 9.5,
    delay: 6.1,
    color: "#C88D94",
    opacity: 0.85,
    shapeType: 4,
    animName: "petalFallA",
  },
  {
    id: 14,
    left: "15%",
    size: 13,
    duration: 12.0,
    delay: 7.5,
    color: "#FFF6EF",
    opacity: 0.7,
    shapeType: 0,
    animName: "petalFallB",
  },
  {
    id: 15,
    left: "83%",
    size: 10,
    duration: 8.8,
    delay: 8.3,
    color: "#9CAF88",
    opacity: 0.7,
    shapeType: 2,
    animName: "petalFallC",
  }, // tiny leaf
];

function PetalSvg({ shapeType, color }: { shapeType: number; color: string }) {
  switch (shapeType) {
    case 0:
      // Teardrop Rose Petal
      return (
        <svg
          viewBox="0 0 24 24"
          fill={color}
          className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
        >
          <path d="M12 2C8.5 4 4.5 8.5 4.5 13.5C4.5 17.5 7.5 21.5 12 22C16.5 21.5 19.5 17.5 19.5 13.5C19.5 8.5 15.5 4 12 2Z" />
        </svg>
      );
    case 1:
      // Notched Blossom Petal
      return (
        <svg
          viewBox="0 0 24 24"
          fill={color}
          className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
        >
          <path d="M12 4.5C10 2.5 7 2 4.5 4.5C2 7 2.5 10.5 5 13.5C8 17 11 20 12 21.5C13 20 16 17 19 13.5C21.5 10.5 22 7 19.5 4.5C17 2 14 2.5 12 4.5Z" />
        </svg>
      );
    case 2:
      // Tiny Muted Green Leaf
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
          <path
            fill={color}
            d="M12 2C7.5 6 5.5 11 5.5 15.5C5.5 19 8 21.5 12 22C16 21.5 18.5 19 18.5 15.5C18.5 11 16.5 6 12 2Z"
          />
          <path
            d="M12 4.5V19.5"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      );
    case 3:
      // Fluttering Curved Single Petal
      return (
        <svg
          viewBox="0 0 24 24"
          fill={color}
          className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
        >
          <path d="M12 2.5C7.5 3.5 4.5 8 5 13C5.5 17.5 9 20.5 13 21C17.5 20.5 20 16.5 19.5 12C19 7.5 16 3.5 12 2.5Z" />
        </svg>
      );
    case 4:
    default:
      // Asymmetrical Delicate Petal
      return (
        <svg
          viewBox="0 0 24 24"
          fill={color}
          className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
        >
          <path d="M12 2C10 3 6 7 5.5 11.5C5 16 8 20 11.5 21.5C15 21 18.5 17.5 19 13C19.5 8.5 15.5 4 12 2Z" />
        </svg>
      );
  }
}

export function FallingPetals() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes petalFallA {
          0% {
            top: -12%;
            transform: translate3d(0, 0, 0) rotate(0deg) rotateY(0deg) scale(0.85);
            opacity: 0;
          }
          8% {
            opacity: 0.85;
          }
          30% {
            transform: translate3d(22px, 0, 0) rotate(45deg) rotateY(60deg) scale(1);
          }
          55% {
            transform: translate3d(-18px, 0, 0) rotate(125deg) rotateY(180deg) scale(0.95);
            opacity: 0.9;
          }
          80% {
            transform: translate3d(16px, 0, 0) rotate(220deg) rotateY(280deg) scale(1.02);
            opacity: 0.8;
          }
          94% {
            opacity: 0.7;
          }
          100% {
            top: 106%;
            transform: translate3d(-10px, 0, 0) rotate(340deg) rotateY(360deg) scale(0.85);
            opacity: 0;
          }
        }

        @keyframes petalFallB {
          0% {
            top: -12%;
            transform: translate3d(0, 0, 0) rotate(0deg) rotateX(0deg) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          35% {
            transform: translate3d(-24px, 0, 0) rotate(-60deg) rotateX(90deg) scale(0.9);
          }
          65% {
            transform: translate3d(20px, 0, 0) rotate(90deg) rotateX(200deg) scale(1.05);
            opacity: 0.85;
          }
          92% {
            opacity: 0.75;
          }
          100% {
            top: 106%;
            transform: translate3d(-14px, 0, 0) rotate(180deg) rotateX(360deg) scale(0.95);
            opacity: 0;
          }
        }

        @keyframes petalFallC {
          0% {
            top: -12%;
            transform: translate3d(0, 0, 0) rotate(15deg) scale(0.85);
            opacity: 0;
          }
          12% {
            opacity: 0.85;
          }
          40% {
            transform: translate3d(26px, 0, 0) rotate(90deg) scale(1);
          }
          70% {
            transform: translate3d(-20px, 0, 0) rotate(210deg) scale(0.92);
            opacity: 0.9;
          }
          95% {
            opacity: 0.65;
          }
          100% {
            top: 106%;
            transform: translate3d(12px, 0, 0) rotate(360deg) scale(0.85);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .falling-petal-item {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>

      {PETAL_DATA.map((petal) => (
        <div
          key={petal.id}
          className="falling-petal-item absolute pointer-events-none select-none"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            opacity: petal.opacity,
            animationName: petal.animName,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            willChange: "top, transform, opacity",
          }}
        >
          <PetalSvg shapeType={petal.shapeType} color={petal.color} />
        </div>
      ))}
    </div>
  );
}
