"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1600&q=80",
    headline: "Justice · Integrity · Counsel",
    sub: "Est. 2004 · Addis Ababa, Ethiopia",
  },
  {
    src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80",
    headline: "Federal Courts · All Regions",
    sub: "Civil · Labour · IP · Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1600&q=80",
    headline: "Two Decades of Trust",
    sub: "100+ Clients · 100% Positive Results",
  },
];

const INTERVAL = 5000;

const LOGOS = [
  { name: "Addis Biz",                        src: "/Prominent Clients/AddisBiz-Logo-2018.png" },
  { name: "Africa Freight Owners Association", src: "/Prominent Clients/Africa Freight Owners Association.png" },
  { name: "Alvima Foods Complex",              src: "/Prominent Clients/alvima_foods_complex_plc.jpg" },
  { name: "Ascom Mining Ethiopia",             src: "/Prominent Clients/ascnom.svg" },
  { name: "Ease Engineering",                  src: "/Prominent Clients/Ease Engineering plc.webp" },
  { name: "Frankun Et Automotive",             src: "/Prominent Clients/FKlogo100x100.jpg" },
  { name: "Ibex Information Technology",       src: "/Prominent Clients/Ibex Information Technology.png" },
  { name: "Yes Brands Food & Beverage",        src: "/Prominent Clients/LOGO-1024x512.jpg" },
  { name: "Micropharma Pharmaceutical",        src: "/Prominent Clients/Micropharama Pharmaceutical plc.png" },
  { name: "Panafrican Real Estate",            src: "/Prominent Clients/Panafrican Real Estate plc.png" },
  { name: "Wubcon Construction",               src: "/Prominent Clients/pict0-5407.jpg" },
  { name: "TgT Enterprise",                    src: "/Prominent Clients/R.png" },
  { name: "Yerga Trading",                     src: "/Prominent Clients/Yerga Trading plc.png" },
  { name: "Zhongmei Engineering",              src: "/Prominent Clients/Zhongmei Engineering Group Co. ltd..webp" },
];
const TICKER = [...LOGOS, ...LOGOS];


export default function HeroBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
      style={{ marginTop: "-7rem" }}
    >
      {/* ── background slides ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {SLIDES[current].src ? (
            <Image
              src={SLIDES[current].src!}
              alt={SLIDES[current].headline}
              fill
              className="object-cover"
              priority={current === 0}
            />
          ) : (
            <div className="h-full w-full" style={{ background: SLIDES[current].gradient }}>
              {/* subtle animated legal SVG watermark */}
              <svg
                viewBox="0 0 800 800"
                className="absolute inset-0 h-full w-full opacity-[0.06]"
                fill="none"
              >
                <g stroke="#dcb877" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <motion.g
                    style={{ originX: "400px", originY: "260px" }}
                    animate={{ rotate: [-4, 4, -4] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <line x1="150" y1="260" x2="650" y2="260" />
                    <line x1="150" y1="260" x2="80" y2="420" />
                    <line x1="150" y1="260" x2="220" y2="420" />
                    <path d="M80 420 a70 70 0 0 0 140 0" />
                    <line x1="650" y1="260" x2="580" y2="420" />
                    <line x1="650" y1="260" x2="720" y2="420" />
                    <path d="M580 420 a70 70 0 0 0 140 0" />
                  </motion.g>
                  <line x1="400" y1="620" x2="400" y2="260" />
                  <line x1="300" y1="620" x2="500" y2="620" />
                  <circle cx="400" cy="240" r="22" fill="#dcb877" stroke="none" opacity="0.6" />
                  <motion.circle
                    cx="400" cy="400" r="200"
                    strokeDasharray="8 16"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "400px", originY: "400px" }}
                  />
                  <circle cx="400" cy="400" r="320" strokeDasharray="3 20" opacity="0.4" />
                </g>
              </svg>
            </div>
          )}
          {/* === TOP LIGHT === */}
          {/* 1. ጠቅላላ ፎቶ ላይ ጨለማ base */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          {/* 2. ከላይ ብርሃን spotlight */}
          <div className="absolute inset-x-0 top-0 h-[55%]" style={{ background: "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255,240,180,0.55) 0%, rgba(255,220,120,0.18) 40%, transparent 100%)" }} />
          {/* 3. ከታች ጨለማ — text ይነበባል */}
          <div className="absolute inset-x-0 bottom-0 h-[60%]" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)" }} />
          {/* 4. ከግራ ጨለማ — heading ይነበባል */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />
        </motion.div>
      </AnimatePresence>

      {/* ── content overlay ── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-36 sm:px-6 sm:pt-48 md:pt-64">
        <div className="max-w-2xl">

          {/* eyebrow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`sub-${current}`}
              className="mb-8 flex items-center gap-4"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.5 }}
            >
              <span className="h-px w-10" style={{ background: "#dcb877" }} />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/50">
                {SLIDES[current].sub}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* main heading */}
          <div className="overflow-hidden leading-none">
            <motion.h1
              className="font-display leading-none"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="block font-black not-italic text-[2rem] sm:text-[3.2rem] md:text-[5.5rem]"
                style={{
                  background: "linear-gradient(95deg, #dcb877 0%, #fff8e7 50%, #b9915a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                &amp; Associates
              </span>
            </motion.h1>
          </div>

          <div className="overflow-hidden mt-2">
            <motion.p
              className="font-display text-base font-extralight tracking-[0.55em] text-white/30 uppercase md:text-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              Law &nbsp; Office
            </motion.p>
          </div>

          {/* divider */}
          <motion.div
            className="my-7 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="h-px flex-1 max-w-[3rem]" style={{ background: "rgba(220,184,119,0.35)" }} />
            <AnimatePresence mode="wait">
              <motion.span
                key={`hl-${current}`}
                className="text-[0.65rem] uppercase tracking-[0.22em] text-white/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {SLIDES[current].headline}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="max-w-sm text-[0.8rem] leading-loose text-white/35 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            Providing civil, labour, patent / trade mark and commercial legal services
            to corporate and private clients in Addis Ababa and all over Ethiopia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:brightness-110 sm:px-7 sm:py-3.5"
              style={{ background: "#dcb877", color: "#12151c" }}
            >
              Book Free Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#practice-areas"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-7 sm:py-3.5"
              style={{ borderColor: "rgba(220,184,119,0.5)" }}
            >
              Our Practice Areas
            </a>
          </motion.div>

          {/* stats */}
          <motion.div
            className="mt-10 flex gap-6 sm:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { v: "20+", l: "Years Experience" },
              { v: "100+", l: "Happy Clients" },
              { v: "100%", l: "Positive Results" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl" style={{ color: "#dcb877" }}>{s.v}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/50">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── dot indicators ── */}
      <div className="absolute bottom-28 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}>
            <motion.span
              className="block rounded-full"
              animate={{
                width: i === current ? 28 : 8,
                background: i === current ? "#dcb877" : "rgba(220,184,119,0.35)",
              }}
              style={{ height: 8 }}
              transition={{ duration: 0.35 }}
            />
          </button>
        ))}
      </div>


      {/* ── logo ticker ── */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-4">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
            style={{ background: "linear-gradient(to right, rgba(0,0,0,0.6), transparent)" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
            style={{ background: "linear-gradient(to left, rgba(0,0,0,0.6), transparent)" }} />
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {TICKER.map((logo, i) => (
              <div key={i} className="relative h-8 w-28 flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain opacity-50 transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
