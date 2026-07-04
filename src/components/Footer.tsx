import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const QUICK_LINKS = [
  "Commercial Code of Ethiopia",
  "Civil Code of Ethiopia",
  "Constitution of Ethiopia",
  "Penal Code of Ethiopia",
  "Family Code of Ethiopia",
  "Civil Procedure Code of Ethiopia",
  "The New Labor Law of Ethiopia",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* background image */}
      <img
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "rgba(8,6,3,0.88)" }} />

      {/* top gold light glow */}
      <div className="absolute inset-x-0 top-0 h-32 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(220,184,119,0.18) 0%, transparent 100%)" }} />
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(220,184,119,0.6), transparent)" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image src="/logo/MGlogo.png" alt="MG Logo" width={64} height={64} className="rounded-full object-contain" />
              <span className="font-display text-lg text-white">Mesfin Getachew &amp; Associates</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Founded by Mesfin Getachew, a leading full-service law office in Ethiopia with
              over 20 years of experience advising and representing clients across civil,
              commercial, labour and intellectual-property matters.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2"><Phone size={14} style={{ color: "var(--gold)" }} /> +251 911 226 650 / +251 911 600 053</div>
              <div className="flex items-center gap-2"><Phone size={14} style={{ color: "var(--gold)" }} /> +251 911 529 550</div>
              <div className="flex items-center gap-2"><Mail size={14} style={{ color: "var(--gold)" }} /> Mesfingmolla@gmail.com</div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                Liberia Street Nur Building, 5th Floor, Office #06, Addis Ababa, Ethiopia
              </div>
            </div>
            <div className="mt-6 flex gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border transition-colors hover:border-[var(--gold)]"
                  style={{ borderColor: "rgba(220,184,119,0.3)" }}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="var(--gold-light)"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border transition-colors hover:border-[var(--gold)]"
                  style={{ borderColor: "rgba(220,184,119,0.3)" }}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="var(--gold-light)"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
          </div>

          <div>
            <p className="font-display text-sm uppercase tracking-[0.18em]" style={{ color: "var(--gold-light)" }}>Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {QUICK_LINKS.map((l) => (
                <li key={l} className="cursor-default transition-colors hover:text-[var(--gold-light)]">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm uppercase tracking-[0.18em]" style={{ color: "var(--gold-light)" }}>Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><Link className="transition-colors hover:text-[var(--gold-light)]" href="/">Home</Link></li>
              <li><a className="transition-colors hover:text-[var(--gold-light)]" href="/#about">About Us</a></li>
              <li><a className="transition-colors hover:text-[var(--gold-light)]" href="/#practice-areas">Practice Area</a></li>
              <li><a className="transition-colors hover:text-[var(--gold-light)]" href="/#publications">Publications</a></li>
              <li><a className="transition-colors hover:text-[var(--gold-light)]" href="/#contact">Contact</a></li>
            </ul>
            <div className="mt-6">
              <Image src="/Membership-1.png" alt="Membership" width={110} height={110} className="object-contain opacity-90" />
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(220,184,119,0.3), transparent)" }} />
        <p className="mt-6 text-center text-xs text-white/40">
          Mesfin Getachew &amp; Associates Law Office © 2026 All rights reserved. Terms of use and Privacy Policy
        </p>
        <p className="mt-2 text-center text-xs text-white/20">
          Developer: oncolo — 0960277455
        </p>
      </div>
    </footer>
  );
}
