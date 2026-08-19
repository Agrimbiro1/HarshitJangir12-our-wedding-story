import type { ReactNode } from "react";

/**
 * Renders the whole site inside a real-size iPhone 15 frame (390 x 844 CSS px)
 * on tablet/desktop. On phones the site fills the screen normally.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Mobile: plain full-screen app */}
      <div className="md:hidden">{children}</div>

      {/* Desktop / tablet: iPhone mockup on an animated backdrop */}
      <div className="relative hidden min-h-screen items-center justify-center overflow-hidden bg-secondary/60 p-8 md:flex">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="orb orb-c" />
          <div className="petals" />
        </div>

        <div className="relative">
          <div className="rounded-[3.2rem] border border-border bg-ink p-[14px] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.45)]">
            <div className="relative h-[844px] w-[390px] overflow-hidden rounded-[2.5rem] bg-background">
              {/* notch */}
              <div className="pointer-events-none absolute left-1/2 top-2 z-[60] h-[26px] w-[110px] -translate-x-1/2 rounded-full bg-ink" />
              <div className="h-full w-full overflow-y-auto overflow-x-hidden">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
