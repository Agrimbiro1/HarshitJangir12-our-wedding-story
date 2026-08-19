import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Section } from "@/components/wedding/Section";
import { Countdown } from "@/components/wedding/Countdown";
import coupleImg from "@/assets/couple.jpg";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

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

const events = [
  { name: "Mehndi", date: "2 December 2026", time: "4:00 PM", place: "Courtyard Lawn" },
  { name: "Haldi", date: "3 December 2026", time: "11:00 AM", place: "Garden Terrace" },
  { name: "Sangeet", date: "3 December 2026", time: "8:00 PM", place: "Grand Ballroom" },
  { name: "Wedding", date: "4 December 2026", time: "7:00 PM", place: "Amber Mandap" },
];

const memories = [
  { src: memory1, alt: "The couple at golden hour" },
  { src: memory2, alt: "Marigold garlands on silk" },
  { src: memory3, alt: "The decorated mandap at dusk" },
];

function Opening() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(id);
  }, []);

  if (done) return null;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-background"
      style={{ animation: "veil-up 900ms 1.7s cubic-bezier(0.7,0,0.2,1) forwards" }}
      aria-hidden
    >
      <div className="text-center" style={{ animation: "soft-rise 1.2s ease-out both" }}>
        <p className="eyebrow">The wedding of</p>
        <p className="script mt-4 text-5xl text-primary">Aarav &amp; Meera</p>
        <div
          className="mx-auto mt-6 h-px w-24 bg-gold origin-left"
          style={{ animation: "line-grow 1.2s 0.5s ease-out both" }}
        />
      </div>
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="relative">
      <Opening />

      {/* 2 — Welcome */}
      <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center md:min-h-[844px]">
        <p className="eyebrow">Together with their families</p>
        <h1 className="script mt-6 text-6xl text-primary">Aarav &amp; Meera</h1>
        <div className="mx-auto my-8 h-px w-20 bg-gold" />
        <p className="font-display text-2xl">4 December 2026 · Jaipur</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          We invite you to share in the joy of our wedding, and in the small moments
          that will make it a lifetime.
        </p>
      </section>

      {/* 3 — Couple */}
      <Section id="couple" eyebrow="The Couple" title="Two hearts, one journey" tone="muted">
        <img
          src={coupleImg}
          alt="Aarav and Meera together"
          width={1200}
          height={900}
          loading="lazy"
          className="mx-auto mb-10 w-full max-w-xl object-cover"
        />
        <div className="grid gap-10 text-center">
          <div>
            <h3 className="text-2xl">Aarav Sharma</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              An architect from Delhi who loves old cities, filter coffee and long drives.
            </p>
          </div>
          <div>
            <h3 className="text-2xl">Meera Jangir</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A designer from Jaipur who collects books, sunsets and stray poems.
            </p>
          </div>
        </div>
      </Section>

      {/* 4 — Events */}
      <Section id="events" eyebrow="Celebrations" title="Events">
        <div className="grid gap-px bg-border">
          {events.map((ev) => (
            <div key={ev.name} className="bg-background px-6 py-10">
              <h3 className="text-2xl text-primary">{ev.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{ev.date}</p>
              <p className="text-sm text-muted-foreground">{ev.time}</p>
              <p className="mt-2 text-sm">{ev.place}</p>
            </div>
          ))}
        </div>
      </Section>

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
