"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-12 pt-28">
      <Reveal>
        <div className="py-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--burgundy)]">Home › Contact</p>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Get In Touch</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed opacity-70">
            Send us a few words about what you are looking to achieve and we can
            schedule a free initial consultation to discuss your problems and goals.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="rounded-[2rem] p-8 border" style={{ borderColor: "rgba(220,184,119,0.2)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(14px)" }}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-3 py-16 text-center"
              >
                <CheckCircle2 size={44} className="text-[var(--burgundy)]" />
                <p className="font-display text-xl">Message received</p>
                <p className="max-w-xs text-sm opacity-70">
                  Thank you — a member of our team will reach out within one working day.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] opacity-60">Name</label>
                  <input
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[var(--gold)]"
                    style={{ borderColor: "var(--line)" }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] opacity-60">E-mail</label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[var(--gold)]"
                    style={{ borderColor: "var(--line)" }}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] opacity-60">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your case..."
                    className="mt-2 w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[var(--gold)]"
                    style={{ borderColor: "var(--line)" }}
                  />
                </div>
                <label className="flex items-start gap-2.5 text-xs leading-relaxed opacity-70">
                  <input required type="checkbox" className="mt-0.5" />
                  I agree that my submitted data is being collected and stored. For
                  further details on handling user data, see our Privacy Policy.
                </label>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-[var(--parchment)] transition hover:brightness-110"
                  style={{ background: "var(--ink)" }}
                >
                  Send Message <Send size={15} />
                </motion.button>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Our Office Address", body: "Liberia Street Nur Building, 5th Floor, Office #06, Addis Ababa, Ethiopia" },
              { icon: Phone, title: "Our Phone Numbers", body: "+251 911 226 650 / +251 911 600 053\n+251 911 529 550" },
              { icon: Mail, title: "Email Us", body: "Mesfingmolla@gmail.com" },
              { icon: Clock, title: "Our Open Hours", body: "Monday – Saturday: 8:00 – 18:00" },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl p-5 border" style={{ borderColor: "rgba(220,184,119,0.2)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}>
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full" style={{ background: "var(--ink)" }}>
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
  );
}
