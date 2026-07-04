"use client";

import { motion } from "framer-motion";
import { Scale, ShieldCheck, Gavel, Landmark, Phone, Mail, MapPin, Clock, Briefcase, Building2, FileCheck2, BookOpen } from "lucide-react";
import Reveal from "@/components/Reveal";
import HeroScales from "@/components/HeroScales";
import AboutTabs from "@/components/AboutTabs";
import ContactForm from "@/components/ContactForm";
import PublicationCard from "@/components/PublicationCard";

const PRACTICE = [
  { n: "01", t: "Property Rights and Real Estate", d: "Ownership, land rights, transactions and conveyancing.", icon: Landmark },
  { n: "02", t: "Mining and Energy", d: "Counsel for mining, oil, gas and energy sector clients.", icon: Gavel },
  { n: "03", t: "Litigation and Dispute", d: "Strategic litigation and ADR before all courts and tribunals.", icon: Scale },
  { n: "04", t: "Intellectual Property", d: "Trade mark registration, patent agency and IP disputes.", icon: ShieldCheck },
  { n: "05", t: "Criminal Defense", d: "Vigorous defense for individuals and entities facing criminal charges at all levels.", icon: Gavel },
  { n: "06", t: "Labour and Employment", d: "Advising and representing employers and employees on all aspects of labour and employment law.", icon: Briefcase },
  { n: "07", t: "Mergers and Acquisitions", d: "Legal advisory for corporate mergers, acquisitions, private equity and company restructuring.", icon: Building2 },
  { n: "08", t: "Insurance", d: "Legal counsel for insurance companies, policyholders and insurance dispute resolution.", icon: FileCheck2 },
];

const PROCESS = [
  { n: "01", t: "Initial Consultation", d: "We listen to your case in detail and outline the direction for a solution, guided by Ethiopian law." },
  { n: "02", t: "Legal Assessment", d: "Documents are reviewed under Ethiopian civil and commercial law to identify strengths and weaknesses." },
  { n: "03", t: "Strategy", d: "We prepare a negotiation or litigation strategy in full compliance with Federal Court procedures." },
  { n: "04", t: "Representation", d: "We represent you before Ethiopian Federal and Regional courts, closely through to the final decision." },
];

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

export default function Home() {
  return (
    <div>
      <HeroScales />

      {/* ABOUT */}
      <section id="about">
        <AboutTabs initialTab="company" />
      </section>

      {/* PRACTICE AREAS — full width bg */}
      <section id="practice-areas" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,6,3,0.82) 0%, rgba(8,6,3,0.75) 60%, rgba(8,6,3,0.92) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">What We Do</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-white md:text-4xl">Practice areas built on two decades of trust</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
              Legal aid is essential to guaranteeing equal access to justice for all, as
              provided for by the International Convention on Human Rights regarding
              criminal law cases.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICE.map((p, i) => (
              <Reveal key={p.n} delay={(i % 4) * 0.07}>
                <div
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-default"
                  style={{ borderColor: "rgba(220,184,119,0.18)", background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse at top, rgba(220,184,119,0.12) 0%, transparent 70%)" }} />
                  <div className="absolute inset-x-0 top-0 h-px scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100" style={{ background: "linear-gradient(90deg, transparent, #dcb877, transparent)" }} />
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-display text-2xl font-black" style={{ color: "rgba(220,184,119,0.25)" }}>{p.n}</span>
                      <span className="grid h-10 w-10 place-items-center rounded-full transition-all duration-500 group-hover:scale-110" style={{ background: "rgba(220,184,119,0.12)" }}>
                        <p.icon size={16} className="transition-colors duration-500 group-hover:text-[var(--gold-light)]" style={{ color: "rgba(220,184,119,0.6)" }} />
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base leading-snug text-white">{p.t}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/40 transition-colors duration-500 group-hover:text-white/60">{p.d}</p>
                  </div>
                  <div className="mt-5 h-px w-full scale-x-0 rounded-full transition-transform duration-700 group-hover:scale-x-100" style={{ background: "linear-gradient(90deg, transparent, rgba(220,184,119,0.5), transparent)" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 overflow-hidden" style={{ background: "var(--ink-soft)" }}>
        <svg viewBox="0 0 800 600" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" style={{ opacity: 0.07 }} preserveAspectRatio="xMidYMid slice">
          <motion.g style={{ originX: "400px", originY: "200px" }} animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            <line x1="160" y1="200" x2="640" y2="200" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
            <line x1="160" y1="200" x2="80" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <line x1="160" y1="200" x2="240" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M80 360 a80 80 0 0 0 160 0" stroke="var(--gold)" strokeWidth="2" fill="none" />
            <line x1="640" y1="200" x2="560" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <line x1="640" y1="200" x2="720" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M560 360 a80 80 0 0 0 160 0" stroke="var(--gold)" strokeWidth="2" fill="none" />
          </motion.g>
          <line x1="400" y1="480" x2="400" y2="200" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
          <line x1="300" y1="480" x2="500" y2="480" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="400" cy="178" r="24" fill="var(--gold)" />
        </svg>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold-light)" }}>Our Process</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-white md:text-4xl">From first contact to resolution — four clear steps</h2>
          </Reveal>
          <div className="relative mt-14 grid gap-10 md:grid-cols-4">
            {/* animated connector line */}
            <motion.div
              className="absolute left-0 right-0 top-6 hidden h-px md:block"
              style={{ background: "linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent)", originX: 0 }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.n}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="relative z-10 grid h-12 w-12 place-items-center rounded-full font-display text-sm icon-bg"
                  style={{ color: "var(--gold-light)" }}
                  initial={{ scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2, type: "spring", stiffness: 260, damping: 18 }}
                >
                  {s.n}
                </motion.div>
                <h3 className="mt-5 font-display text-lg" style={{ color: "var(--gold-light)" }}>{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="relative py-20 overflow-hidden" style={{ background: "var(--ink-soft)" }}>
        <svg viewBox="0 0 800 600" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" style={{ opacity: 0.07 }} preserveAspectRatio="xMidYMid slice">
          <motion.g style={{ originX: "400px", originY: "200px" }} animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            <line x1="160" y1="200" x2="640" y2="200" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
            <line x1="160" y1="200" x2="80" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <line x1="160" y1="200" x2="240" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M80 360 a80 80 0 0 0 160 0" stroke="var(--gold)" strokeWidth="2" fill="none" />
            <line x1="640" y1="200" x2="560" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <line x1="640" y1="200" x2="720" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M560 360 a80 80 0 0 0 160 0" stroke="var(--gold)" strokeWidth="2" fill="none" />
          </motion.g>
          <line x1="400" y1="480" x2="400" y2="200" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
          <line x1="300" y1="480" x2="500" y2="480" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="400" cy="178" r="24" fill="var(--gold)" />
        </svg>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold-light)" }}>Publications</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">Our Publications</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65">
                Notes and legal commentary from our practice areas, prepared under
                Ethiopian civil, commercial and procedural law.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {PUBLICATIONS.map((p, i) => (
              <Reveal key={p} delay={(i % 4) * 0.08}>
                <PublicationCard title={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-20 pb-24 overflow-hidden" style={{ background: "var(--ink-soft)" }}>
        <svg viewBox="0 0 800 600" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" style={{ opacity: 0.07 }} preserveAspectRatio="xMidYMid slice">
          <motion.g style={{ originX: "400px", originY: "200px" }} animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            <line x1="160" y1="200" x2="640" y2="200" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
            <line x1="160" y1="200" x2="80" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <line x1="160" y1="200" x2="240" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M80 360 a80 80 0 0 0 160 0" stroke="var(--gold)" strokeWidth="2" fill="none" />
            <line x1="640" y1="200" x2="560" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <line x1="640" y1="200" x2="720" y2="360" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M560 360 a80 80 0 0 0 160 0" stroke="var(--gold)" strokeWidth="2" fill="none" />
          </motion.g>
          <line x1="400" y1="480" x2="400" y2="200" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
          <line x1="300" y1="480" x2="500" y2="480" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="400" cy="178" r="24" fill="var(--gold)" />
        </svg>
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold-light)" }}>Contact</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">Get In Touch</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65">
                Send us a few words about what you are looking to achieve and we can
                schedule a free initial consultation to discuss your problems and goals.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: "Our Office Address", body: "Liberia Street Nur Building, 5th Floor, Office #06, Addis Ababa, Ethiopia" },
                  { icon: Phone, title: "Our Phone Numbers", body: "+251 911 226 650 / +251 911 600 053\n+251 911 529 550" },
                  { icon: Mail, title: "Email Us", body: "Mesfingmolla@gmail.com" },
                  { icon: Clock, title: "Our Open Hours", body: "Monday – Saturday: 8:00 – 18:00" },
                ].map((c) => (
                  <div key={c.title} className="card-parchment flex gap-4 rounded-2xl p-5">
                    <span className="icon-bg grid h-11 w-11 flex-shrink-0 place-items-center rounded-full">
                      <c.icon size={17} color="var(--gold-light)" />
                    </span>
                    <div>
                      <p className="font-display text-base">{c.title}</p>
                      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed opacity-70">{c.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
