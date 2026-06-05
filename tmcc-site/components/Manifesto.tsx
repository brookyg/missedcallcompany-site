"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gold py-28 lg:py-40"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border-[60px] border-navy/5"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[50px] border-navy/5"
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl font-light italic leading-[1.25] text-navy md:text-5xl lg:text-[3.5rem]"
        >
          &ldquo;The phone is still the moment a customer decides to trust
          you. Miss it, and you never knew they called.&rdquo;
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-navy/40" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70">
            The Missed Call Company
          </span>
          <span className="h-px w-10 bg-navy/40" />
        </motion.div>
      </div>
    </section>
  );
}
