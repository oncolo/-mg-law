"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Scale, Sun, Moon } from "lucide-react";

const ABOUT_ITEMS = [
  { label: "About the Company", href: "/#about" },
  { label: "Our Team", href: "/#about" },
  { label: "Gallery", href: "/#about" },
  { label: "Prominent Clients", href: "/#about" },
];

const NAV = [
  { label: "Home", href: "/" },
  { label: "Practice Area", href: "/#practice-areas" },
  { label: "Publications", href: "/#publications" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") { document.documentElement.classList.add("dark"); setDark(true); }
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-5">
        <div
          className="flex items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl"
          style={{ borderColor: "var(--line)", background: dark ? "rgba(15,17,23,0.82)" : "rgba(245,239,226,0.72)" }}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/logo/MGlogo.png" alt="MG Logo" width={40} height={40} className="rounded-full object-contain" />
            <span className="font-display text-[0.9rem] leading-none tracking-tight sm:text-[1.05rem]">
              Mesfin Getachew
              <span className="block text-[0.6rem] font-body tracking-[0.22em] uppercase opacity-60">
                &amp; Associates Law Office
              </span>
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link href={NAV[0].href} className="rounded-full px-4 py-2 text-sm font-medium opacity-80 transition hover:opacity-100">
              {NAV[0].label}
            </Link>

            {/* About Us dropdown */}
            <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium opacity-80 transition hover:opacity-100"
                onClick={() => setAboutOpen((v) => !v)}
              >
                About Us
                <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border p-2 shadow-xl"
                    style={{ borderColor: "var(--line)", background: dark ? "#181c26" : "#fbf7ec" }}
                  >
                    {ABOUT_ITEMS.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i, duration: 0.25 }}
                      >
                        <Link
                          href={item.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm transition hover:bg-[var(--parchment-dim)]"
                          onClick={() => setAboutOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium opacity-80 transition hover:opacity-100">
                {item.label}
              </Link>
            ))}

            {/* dark mode toggle */}
            <button
              onClick={toggleDark}
              className="ml-2 grid h-9 w-9 place-items-center rounded-full border transition-colors hover:border-[var(--gold)]"
              style={{ borderColor: "var(--line)", background: "transparent" }}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={dark ? "sun" : "moon"}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun size={15} style={{ color: "var(--gold-light)" }} /> : <Moon size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </nav>

          {/* mobile: dark toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDark}
              className="grid h-9 w-9 place-items-center rounded-full border"
              style={{ borderColor: "var(--line)" }}
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={15} style={{ color: "var(--gold-light)" }} /> : <Moon size={15} />}
            </button>
            <button
              className="grid h-9 w-9 place-items-center rounded-full"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* mobile panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 overflow-hidden rounded-3xl border p-4 backdrop-blur-xl md:hidden"
              style={{ borderColor: "var(--line)", background: dark ? "rgba(15,17,23,0.95)" : "rgba(245,239,226,0.92)" }}
            >
              <Link href="/" className="block rounded-xl px-3 py-2.5 text-sm" onClick={() => setMobileOpen(false)}>Home</Link>
              <p className="px-3 pt-2 pb-1 text-[0.65rem] uppercase tracking-[0.2em] opacity-50">About Us</p>
              {ABOUT_ITEMS.map((item) => (
                <Link key={item.label} href={item.href} className="block rounded-xl px-3 py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
              {NAV.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2.5 text-sm" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
