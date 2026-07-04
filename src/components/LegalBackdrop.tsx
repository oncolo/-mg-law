"use client";

import { motion } from "framer-motion";

/**
 * A fixed, full-viewport, animated legal-motif backdrop.
 * Pure SVG line-art (scales of justice, columns, a wax seal ring,
 * ledger rules) drifting slowly — subtle enough to sit behind any page
 * content without competing with it.
 */
export default function LegalBackdrop() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "var(--parchment)", transition: "background 0.3s" }}
    >
      {/* faint ledger rules */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 38px, var(--gold) 39px)",
        }}
      />

      {/* large drifting scales of justice, upper right */}
      <motion.svg
        className="absolute -right-24 -top-20 w-[560px] opacity-[0.10]"
        viewBox="0 0 400 400"
        initial={{ rotate: -2 }}
        animate={{ rotate: [-2, 2, -2], y: [0, -18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <g stroke="var(--ink)" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <line x1="200" y1="40" x2="200" y2="320" />
          <line x1="90" y1="330" x2="310" y2="330" />
          <line x1="60" y1="90" x2="340" y2="90" />
          <line x1="60" y1="90" x2="30" y2="150" />
          <line x1="60" y1="90" x2="90" y2="150" />
          <line x1="340" y1="90" x2="310" y2="150" />
          <line x1="340" y1="90" x2="370" y2="150" />
          <path d="M30 150 a30 30 0 0 0 60 0" />
          <path d="M310 150 a30 30 0 0 0 60 0" />
          <circle cx="200" cy="70" r="10" />
        </g>
      </motion.svg>

      {/* columns, bottom left */}
      <motion.svg
        className="absolute -left-16 bottom-0 w-[420px] opacity-[0.09]"
        viewBox="0 0 400 400"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <g stroke="var(--ink)" strokeWidth="2" fill="none">
          <line x1="60" y1="60" x2="60" y2="360" />
          <line x1="140" y1="60" x2="140" y2="360" />
          <line x1="220" y1="60" x2="220" y2="360" />
          <line x1="300" y1="60" x2="300" y2="360" />
          <line x1="40" y1="60" x2="320" y2="60" />
          <line x1="30" y1="40" x2="330" y2="40" />
          <line x1="30" y1="370" x2="330" y2="370" />
        </g>
      </motion.svg>

      {/* slow floating gold particles */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + (i % 3) * 2,
            height: 3 + (i % 3) * 2,
            left: `${8 + i * 9.2}%`,
            top: `${(i * 37) % 90}%`,
            background: "var(--gold)",
            opacity: 0.35,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.45, 0.15] }}
          transition={{
            duration: 10 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}

      {/* rotating wax-seal ring motif, center-right */}
      <motion.svg
        className="absolute right-[8%] top-[40%] w-40 opacity-[0.07]"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <g stroke="var(--burgundy)" strokeWidth="1.2" fill="none">
          <circle cx="50" cy="50" r="44" />
          <circle cx="50" cy="50" r="34" />
          {[...Array(16)].map((_, i) => {
            const a = (i / 16) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={50 + Math.cos(a) * 34}
                y1={50 + Math.sin(a) * 34}
                x2={50 + Math.cos(a) * 44}
                y2={50 + Math.sin(a) * 44}
              />
            );
          })}
        </g>
      </motion.svg>
    </div>
  );
}
