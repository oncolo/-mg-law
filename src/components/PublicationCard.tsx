"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function PublicationCard({ title }: { title: string }) {
  return (
    <motion.div
      className="card-parchment group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6"
      style={{ minHeight: 200 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(180,140,60,0.18)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {/* animated scales of justice */}
      <svg
        viewBox="0 0 120 100"
        className="absolute right-2 bottom-2 w-28 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.18]"
        aria-hidden
      >
        {/* pole */}
        <line x1="60" y1="18" x2="60" y2="85" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="16" r="3" fill="currentColor" />
        {/* swinging arm */}
        <motion.g
          style={{ originX: "60px", originY: "30px" }}
          animate={{ rotate: [0, -10, 10, -6, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
        >
          <line x1="20" y1="30" x2="100" y2="30" stroke="currentColor" strokeWidth="2" />
          {/* left pan */}
          <line x1="20" y1="30" x2="12" y2="52" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="30" x2="28" y2="52" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 52 Q20 59 30 52" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* right pan */}
          <line x1="100" y1="30" x2="92" y2="52" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="30" x2="108" y2="52" stroke="currentColor" strokeWidth="1.5" />
          <path d="M90 52 Q100 59 110 52" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </motion.g>
        {/* base */}
        <line x1="48" y1="85" x2="72" y2="85" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* top shimmer on hover */}
      <div className="absolute inset-x-0 top-0 h-px scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />

      <div className="relative z-10">
        <span
          className="grid h-11 w-11 place-items-center rounded-full transition-colors duration-500 group-hover:bg-[var(--ink)]"
          style={{ background: "var(--parchment-dim)" }}
        >
          <BookOpen size={18} className="transition-colors duration-500 group-hover:text-[var(--gold-light)]" />
        </span>
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.12em] opacity-50">Legal Service</p>
          <h3 className="mt-1 font-display text-lg">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
