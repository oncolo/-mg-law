import Reveal from "@/components/Reveal";
import { BookOpen } from "lucide-react";

const PUBLICATIONS = [
  "Personal Injury",
  "Labour and Employment",
  "Corporate and Business",
  "Mining and Energy",
  "Banking & Finance",
  "Litigation and Dispute",
  "Civil Litigation",
  "Criminal Defense",
];

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-28" style={{ position: "relative", zIndex: 1 }}>
      <Reveal>
        <div className="py-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--burgundy)]">Home › Publications</p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl" style={{ color: "var(--gold-light)" }}>Our Publications</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Notes and legal commentary from our practice areas, prepared under
            Ethiopian civil, commercial and procedural law.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PUBLICATIONS.map((p, i) => (
          <Reveal key={p} delay={(i % 4) * 0.08}>
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1.5 border" style={{ borderColor: "rgba(220,184,119,0.2)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(14px)" }}>
              <span
                className="icon-bg grid h-11 w-11 place-items-center rounded-full"
              >
                <BookOpen size={18} style={{ color: "var(--gold-light)" }} />
              </span>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.45)" }}>Legal Service</p>
                <h3 className="mt-1 font-display text-lg" style={{ color: "white" }}>{p}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
