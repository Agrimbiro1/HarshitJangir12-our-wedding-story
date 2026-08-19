import type { ReactNode } from "react";
import desktopBgImg from "@/assets/desktop background.jpg";

/**
 * Renders the whole site inside a real-size iPhone 15 frame (390 x 844 CSS px)
 * on tablet/desktop. On phones the site fills the screen normally.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Mobile: plain full-screen app */}
      <div className="md:hidden">{children}</div>

      {/* Desktop / tablet: iPhone mockup on outer desktop floral background */}
      <div className="relative hidden h-screen w-full items-center justify-center overflow-hidden bg-[#FAF6F2] md:flex">
        {/* Desktop Outer Background Image (visible on desktop/tablet only) */}
        <img
          src={desktopBgImg}
          alt="Outer desktop floral background"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
        />

        {/* Ambient backdrop overlay for soft visual balance */}
        <div className="pointer-events-none absolute inset-0 bg-black/10 backdrop-blur-[1px]" aria-hidden />

        {/* Centered Phone Mockup Frame */}
        <div className="phone-scale relative z-10">
          <div className="rounded-[3.2rem] border border-border bg-ink p-[14px] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.45)]">
            <div className="relative h-[844px] w-[390px] overflow-hidden rounded-[2.5rem] bg-background">
              {/* notch */}
              <div className="pointer-events-none absolute left-1/2 top-2 z-[60] h-[26px] w-[110px] -translate-x-1/2 rounded-full bg-ink" />
              <div className="h-full w-full overflow-y-auto overflow-x-hidden no-scrollbar">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
