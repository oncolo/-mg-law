import Reveal from "@/components/Reveal";
import Link from "next/link";
import { ArrowRight, Landmark, Flame, Scale, ShieldCheck, Gavel, Briefcase, Building2, FileCheck2 } from "lucide-react";

const AREAS = [
  { n: "01", t: "Property Rights and Real Estate", icon: Landmark, d: "Legal representation for property ownership, land rights, real estate transactions and conveyancing." },
  { n: "02", t: "Mining and Energy", icon: Flame, d: "Legal services for mining, oil, gas, and energy sector clients across Ethiopia." },
  { n: "03", t: "Litigation and Dispute", icon: Scale, d: "Strategic litigation and alternative dispute resolution before all courts and tribunals." },
  { n: "04", t: "Intellectual Property", icon: ShieldCheck, d: "Trade mark registration, patent agency, copyright protection and IP dispute resolution." },
  { n: "05", t: "Criminal Defense", icon: Gavel, d: "Vigorous defense for individuals and entities facing criminal charges at all levels." },
  { n: "06", t: "Labour and Employment", icon: Briefcase, d: "Advising and representing employers and employees on all aspects of labour and employment law." },
  { n: "07", t: "Mergers and Acquisitions", icon: Building2, d: "Legal advisory for corporate mergers, acquisitions, private equity and company restructuring." },
  { n: "08", t: "Insurance", icon: FileCheck2, d: "Legal counsel for insurance companies, policyholders and insurance dispute resolution." },
];

export default function PracticeAreasPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-28">
      <Reveal>
        <div className="py-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--burgundy)]">Home › Practice Area</p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">What We Do</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed opacity-70">
            Legal aid is essential to guaranteeing equal access to justice for all, as
            provided for by the International Convention on Human Rights regarding
            criminal law cases.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((a, i) => (
          <Reveal key={a.n} delay={(i % 3) * 0.08}>
            <div className="card-parchment group relative overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5">
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl opacity-20">{a.n}</span>
                <span
                  className="grid h-11 w-11 place-items-center rounded-full transition-colors duration-500 group-hover:bg-[var(--ink)]"
                  style={{ background: "var(--parchment-dim)" }}
                >
                  <a.icon size={18} className="transition-colors duration-500 group-hover:text-[var(--gold-light)]" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl">{a.t}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-70">{a.d}</p>
              <div className="shimmer-line mt-6 h-px w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-16 flex flex-col items-center gap-4 rounded-[2rem] p-10 text-center" style={{ background: "var(--ink)" }}>
          <p className="font-display text-2xl text-[var(--parchment)]">Not sure which area applies to you?</p>
          <p className="max-w-md text-sm text-[var(--parchment)] opacity-70">
            Book a free initial consultation and we&rsquo;ll point you in the right direction.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:brightness-110"
            style={{ background: "var(--gold-light)", color: "var(--ink)" }}
          >
            Talk to Us <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
