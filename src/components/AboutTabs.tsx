"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Users, Images, Handshake } from "lucide-react";
import Reveal from "@/components/Reveal";

type TabId = "company" | "team" | "gallery" | "clients";

const TABS: { id: TabId; label: string; icon: typeof Building2 }[] = [
  { id: "company", label: "About the Company", icon: Building2 },
  { id: "team", label: "Our Team", icon: Users },
  { id: "gallery", label: "Gallery", icon: Images },
  { id: "clients", label: "Prominent Clients", icon: Handshake },
];

const TEAM = [
  {
    name: "Mesfin Getachew (LLB)",
    role: "Founder / Main Attorney and Consultant",
    blurb: "A leading commercial/financial-services sector and civil case practitioner in Ethiopia, holding an LLB from Addis Ababa University and registered as a Trade Mark agent.",
    photo: "/gallery/Mesfin-Getachew.jpg",
  },
  {
    name: "Andargachew Dagnew",
    role: "Associate / Main Attorney and Consultant",
    blurb: "Specialises in commercial dispute resolution, arbitration and conveyancing matters.",
    photo: "/gallery/WhatsApp-Image-2025-11-02-at-18.14.02_69d31f97-450x500.jpg",
  },
  {
    name: "Hana Giduma",
    role: "Liaison Officer",
    blurb: "Coordinates client communications and manages court and registry liaison.",
    photo: "/gallery/WhatsApp-Image-2025-11-02-at-18.15.03_bf3385791-450x500.png",
  },
];

const CLIENTS = [
  { name: "Addis Biz",                          logo: "/Prominent Clients/AddisBiz-Logo-2018.png" },
  { name: "Africa Freight Owners Association",   logo: "/Prominent Clients/Africa Freight Owners Association.png" },
  { name: "Alvima Foods Complex plc",            logo: "/Prominent Clients/alvima_foods_complex_plc.jpg" },
  { name: "Ascom Mining Ethiopia plc",           logo: "/Prominent Clients/ascnom.svg" },
  { name: "Ease Engineering plc",                logo: "/Prominent Clients/Ease Engineering plc.webp" },
  { name: "Frankun Et Automotive Engineering",   logo: "/Prominent Clients/FKlogo100x100.jpg" },
  { name: "Ibex Information Technology",         logo: "/Prominent Clients/Ibex Information Technology.png" },
  { name: "Yes Brands Food and Beverage plc",    logo: "/Prominent Clients/LOGO-1024x512.jpg" },
  { name: "Micropharma Pharmaceutical plc",      logo: "/Prominent Clients/Micropharama Pharmaceutical plc.png" },
  { name: "Panafrican Real Estate plc",          logo: "/Prominent Clients/Panafrican Real Estate plc.png" },
  { name: "Wubcon Construction plc",             logo: "/Prominent Clients/pict0-5407.jpg" },
  { name: "TgT Enterprise",                      logo: "/Prominent Clients/R.png" },
  { name: "Yerga Trading plc",                   logo: "/Prominent Clients/Yerga Trading plc.png" },
  { name: "Zhongmei Engineering Group Co. Ltd.", logo: "/Prominent Clients/Zhongmei Engineering Group Co. ltd..webp" },
];

const DELIVERY = [
  "Answering telephone calls within 15 seconds of ringing.",
  "Returning telephone calls within the same working day.",
  "Acknowledging receipt of emails & instructions within 24 hours of receipt.",
  "Replying to routine correspondences within two days of receipt.",
  "Preparation of standard form documentation within two days of receipt of instructions.",
];

export default function AboutTabs({ initialTab }: { initialTab: TabId }) {
  const [tab, setTab] = useState<TabId>(initialTab);

  return (
    <div
      className="relative"
      style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", background: "var(--ink-soft)" }}
    >
      {/* ── animated scales of justice background ── */}
      <svg
        viewBox="0 0 800 600"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        style={{ opacity: 0.07 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.g
          style={{ originX: "400px", originY: "200px" }}
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
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

      {/* ── hero banner ── */}
      <div className="relative z-10" style={{ height: 280 }}>
        {/* centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: "var(--gold)" }}>About Us</p>
          <h2 className="mt-2 font-display text-4xl font-black md:text-5xl" style={{ color: "var(--ink)" }}>About the Company</h2>
        </div>

        {/* tab bar pinned to bottom of banner */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4">
        <div
            className="flex flex-wrap justify-center gap-1 rounded-2xl border p-1.5 backdrop-blur-xl sm:rounded-full sm:gap-1.5"
            style={{ borderColor: "rgba(220,184,119,0.3)", background: "rgba(18,21,28,0.7)" }}
          >
            {TABS.map((t) => {
              const active = tab === t.id;
              return (
                  <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className="relative flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition sm:gap-1.5 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {active && (
                    <motion.span
                      layoutId="about-tab-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "#dcb877" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <t.icon size={14} className="relative z-10" style={{ color: active ? "#12151c" : "rgba(220,184,119,0.7)" }} />
                  <span className="relative z-10" style={{ color: active ? "#12151c" : "rgba(255,255,255,0.6)" }}>
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── tab content ── */}
      <AnimatePresence mode="wait">
        {tab === "company" && (
          <motion.section
            key="company"
            className="relative z-10 mx-auto max-w-6xl px-6 py-16"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <Reveal>
                <div className="relative mx-auto max-w-xs">
                  <div className="overflow-hidden rounded-[2rem] border shadow-lg" style={{ borderColor: "var(--line)" }}>
                    <Image
                      src="/gallery/Mesfin-Getachew.jpg"
                      alt="Mesfin Getachew Molla, Founder & Main Attorney"
                      width={480}
                      height={560}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                  <div
                    className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border px-4 py-3 text-center shadow-md"
                    style={{ borderColor: "rgba(220,184,119,0.3)", background: "rgba(18,21,28,0.85)", backdropFilter: "blur(12px)" }}
                  >
                    <p className="font-display text-sm text-white">Mesfin Getachew Molla</p>
                    <p className="text-[0.7rem] uppercase tracking-[0.12em] text-white/50">Founder &amp; Main Attorney</p>
                  </div>
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold-light)" }}>About the Company</p>
                  <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">Mesfin Getachew &amp; Associates Law Office</h2>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-5 leading-relaxed text-white/70">
                    An Ethiopian law office providing various legal services to corporate
                    and private clients in Addis Ababa and all over Ethiopia. Formed in
                    2004 by Mesfin Getachew Molla, a distinguished legal practitioner,
                    we are uniquely positioned as a pioneering civil, labour,
                    patent/trade mark and commercial legal practice, with a varied and
                    prestigious client base from the very beginning.
                  </p>
                </Reveal>
                <Reveal delay={0.14}>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Registered at the Federal Democratic Republic of Ethiopia General Attorney office since 2004.",
                      "Advocacy License Number: 627/98",
                      "Registered Patent Agent — Ethiopian Intellectual Property Office License No. 32/11",
                      "Tax Registration Number: 0002247143 · VAT: ET 10352800821",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border p-4 text-sm leading-relaxed text-white/75" style={{ borderColor: "rgba(220,184,119,0.2)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}>{item}</div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <h3 className="mt-10 font-display text-xl text-white">Service Delivery Standards</h3>
                  <ul className="mt-4 space-y-2.5">
                    {DELIVERY.map((d) => (
                      <li key={d} className="flex gap-3 text-sm leading-relaxed text-white/70">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "var(--gold)" }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </motion.section>
        )}

        {tab === "team" && (
          <motion.section
            key="team"
            className="relative z-10 mx-auto max-w-6xl px-6 py-16"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold-light)" }}>Meet Our Team</p>
              <h2 className="mt-3 text-center font-display text-3xl leading-tight text-white md:text-4xl">The people behind every case</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {TEAM.map((member, i) => (
                <Reveal key={member.name} delay={i * 0.1}>
                  <motion.div
                    className="group rounded-3xl p-7 h-full flex flex-col border"
                    style={{ borderColor: "rgba(220,184,119,0.2)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(14px)" }}
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(220,184,119,0.18)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                      <Image src={member.photo} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="mt-5 font-display text-lg text-white">{member.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--gold-light)" }}>{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/60 flex-1">{member.blurb}</p>
                    <div className="mt-4 flex gap-2">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                        className="grid h-8 w-8 place-items-center rounded-full border transition-colors hover:border-[var(--gold)]"
                        style={{ borderColor: "rgba(220,184,119,0.25)" }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="var(--gold-light)"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                        className="grid h-8 w-8 place-items-center rounded-full border transition-colors hover:border-[var(--gold)]"
                        style={{ borderColor: "rgba(220,184,119,0.25)" }}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="var(--gold-light)"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                    </div>
                    <motion.div
                      className="mt-5 h-px w-full rounded-full"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(220,184,119,0.6), transparent)" }}
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </motion.section>
        )}

        {tab === "gallery" && (
          <motion.section
            key="gallery"
            className="relative z-10 mx-auto max-w-6xl px-6 py-16"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold-light)" }}>Events &amp; Activities</p>
              <h2 className="mt-3 text-center font-display text-3xl leading-tight text-white md:text-4xl">Gallery</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { src: "/gallery1/Information-Technolgy-Training-01.jpg", cap: "Information Technology Training" },
                { src: "/gallery1/Information-Technolgy-Training-02.jpg", cap: "Information Technology Training" },
                { src: "/gallery1/Information-Technolgy-Training-03.jpg", cap: "Information Technology Training" },
                { src: "/gallery1/Information-Technolgy-Training-04.jpg", cap: "Information Technology Training" },
              ].map((item, i) => (
                <Reveal key={item.src} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-3xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                      <Image src={item.src} alt={item.cap} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-sm font-semibold text-white">{item.cap}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

          </motion.section>
        )}

        {tab === "clients" && (
          <motion.section
            key="clients"
            className="relative z-10 mx-auto max-w-6xl px-6 py-16"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold-light)" }}>Trusted by Leading Organizations</p>
              <h2 className="mt-3 text-center font-display text-3xl leading-tight text-white md:text-4xl">Prominent Clients</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {CLIENTS.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.05}>
                  <motion.div
                    className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border p-6"
                    style={{ borderColor: "rgba(220,184,119,0.2)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}
                    whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(220,184,119,0.2)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    {/* gold top border on hover */}
                    <motion.div
                      className="absolute inset-x-0 top-0 h-px"
                      style={{ background: "linear-gradient(90deg, transparent, #dcb877, transparent)", scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* logo */}
                    <div className="relative h-16 w-full">
                      <Image
                        src={c.logo}
                        alt={c.name}
                        fill
                        className="object-contain transition-all duration-500 group-hover:scale-105"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                    {/* name */}
                    <p className="text-center text-xs font-medium leading-snug text-white/60 transition-colors duration-300 group-hover:text-white/90">
                      {c.name}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
