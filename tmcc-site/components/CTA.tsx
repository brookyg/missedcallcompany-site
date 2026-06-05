"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-deep py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,153,58,0.08)_0%,rgba(12,18,29,0)_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl font-light leading-[1.05] text-cream md:text-6xl lg:text-7xl"
        >
          Stop losing leads
          <br />
          <span className="italic text-gold">tonight.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-cream/55"
        >
          Book a 15-minute discovery call and we&apos;ll show you a live demo of
          your AI receptionist — answering, qualifying, and booking, in your
          voice.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:hello@missedcallcompany.com"
            className="group inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-navy transition-all duration-200 hover:bg-gold-light hover:shadow-[0_12px_40px_-10px_rgba(200,153,58,0.7)]"
          >
            Book a discovery call
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="mailto:hello@missedcallcompany.com"
            className="text-[14px] text-cream/60 underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            hello@missedcallcompany.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
