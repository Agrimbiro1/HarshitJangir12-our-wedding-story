import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "plain",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  tone?: "plain" | "muted";
}) {
  return (
    <section
      id={id}
      className={`px-6 py-24 ${tone === "muted" ? "bg-secondary/50" : ""}`}
    >
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? (
          <h2 className="mt-4 text-4xl">{title}</h2>
        ) : null}
        {eyebrow || title ? (
          <div className="mx-auto mt-6 mb-12 h-px w-16 bg-gold" />
        ) : null}
        {children}
      </div>
    </section>
  );
}
