"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
  { name: "Addis Biz",                          src: "/Prominent Clients/AddisBiz-Logo-2018.png" },
  { name: "Africa Freight Owners Association",   src: "/Prominent Clients/Africa Freight Owners Association.png" },
  { name: "Alvima Foods Complex",                src: "/Prominent Clients/alvima_foods_complex_plc.jpg" },
  { name: "Ascom Mining Ethiopia",               src: "/Prominent Clients/ascnom.svg" },
  { name: "Ease Engineering",                    src: "/Prominent Clients/Ease Engineering plc.webp" },
  { name: "Frankun Et Automotive",               src: "/Prominent Clients/FKlogo100x100.jpg" },
  { name: "Ibex Information Technology",         src: "/Prominent Clients/Ibex Information Technology.png" },
  { name: "Yes Brands Food & Beverage",          src: "/Prominent Clients/LOGO-1024x512.jpg" },
  { name: "Micropharma Pharmaceutical",          src: "/Prominent Clients/Micropharama Pharmaceutical plc.png" },
  { name: "Panafrican Real Estate",              src: "/Prominent Clients/Panafrican Real Estate plc.png" },
  { name: "Wubcon Construction",                 src: "/Prominent Clients/pict0-5407.jpg" },
  { name: "TgT Enterprise",                      src: "/Prominent Clients/R.png" },
  { name: "Yerga Trading",                       src: "/Prominent Clients/Yerga Trading plc.png" },
  { name: "Zhongmei Engineering",                src: "/Prominent Clients/Zhongmei Engineering Group Co. ltd..webp" },
];

// duplicate for seamless loop
const TRACK = [...LOGOS, ...LOGOS];

export default function LogoTicker() {
  return (
    <section className="py-14 overflow-hidden">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--burgundy)]">
        Trusted by Leading Organizations
      </p>

      {/* fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, rgba(245,239,226,0.9), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, rgba(245,239,226,0.9), transparent)" }} />

        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {TRACK.map((logo, i) => (
            <div
              key={i}
              className="relative h-12 w-36 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain opacity-60 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
