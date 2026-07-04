"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-parchment flex flex-col items-center justify-center gap-3 rounded-[2rem] py-16 text-center"
      >
        <CheckCircle2 size={44} className="text-[var(--burgundy)]" />
        <p className="font-display text-xl">Message received</p>
        <p className="max-w-xs text-sm opacity-70">
          Thank you — a member of our team will reach out within one working day.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="card-parchment rounded-[2rem] p-8">
      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
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
          className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:brightness-110 icon-bg"
          style={{ color: "var(--gold-light)" }}
        >
          Send Message <Send size={15} />
        </motion.button>
      </form>
    </div>
  );
}
