"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const trust = [
  { icon: "🕐", text: "Called back within 1 working hour" },
  { icon: "🎙️", text: "Live demo answering as your clinic" },
  { icon: "📋", text: "No contract — cancel any time" },
  { icon: "✅", text: "30-day results guarantee" },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-deep py-24 lg:py-32"
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(200,153,58,0.06)_0%,rgba(12,18,29,0)_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — headline + trust */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              Book a free demo
            </p>
            <h2 className="font-serif text-4xl font-light leading-[1.05] text-cream md:text-5xl lg:text-6xl">
              Hear it answering
              <br />
              <span className="italic text-gold">as your clinic.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/55">
              Fill in the form and we&apos;ll record a personalised 90-second demo
              of your virtual receptionist — answering, qualifying and booking —
              then walk you through it on a short call.
            </p>

            {/* Trust signals */}
            <ul className="mt-10 flex flex-col gap-3">
              {trust.map((t) => (
                <li key={t.text} className="flex items-center gap-3 text-[14px] text-cream/70">
                  <span className="text-base">{t.icon}</span>
                  {t.text}
                </li>
              ))}
            </ul>

            {/* Direct email fallback */}
            <p className="mt-10 text-[13px] text-cream/40">
              Prefer email?{" "}
              <a
                href="mailto:hello@missedcallcompany.com"
                className="text-cream/60 underline underline-offset-4 transition-colors hover:text-gold"
              >
                hello@missedcallcompany.com
              </a>
            </p>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 lg:p-10"
          >
            <h3 className="mb-6 font-serif text-xl font-semibold text-cream">
              Get your free demo
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
