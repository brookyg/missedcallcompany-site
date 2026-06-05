"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const headline = ["Never", "lose", "a", "lead", "again."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scaleOrb = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep"
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(30,42,62,0.9)_0%,rgba(12,18,29,0)_60%)]" />
        <div className="grain absolute inset-0 opacity-[0.06]" />
      </div>

      {/* Signal rings orb on the right */}
      <motion.div
        style={{ y: yOrb, scale: scaleOrb }}
        className="pointer-events-none absolute right-[-10%] top-1/2 hidden -translate-y-1/2 lg:block"
      >
        <div className="relative h-[420px] w-[420px]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="absolute inset-0 rounded-full border border-gold/30"
              style={{
                animation: `ring 4s ease-out ${i * 1}s infinite`,
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-navy-mid shadow-[0_0_60px_-10px_rgba(200,153,58,0.5)]">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="#FAF6EE"
                aria-hidden="true"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold"
        >
          AI Call Handling for Ambitious Businesses
        </motion.p>

        <h1 className="max-w-4xl font-serif text-[clamp(3rem,9vw,7rem)] font-light leading-[0.92] tracking-tight text-cream">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.35 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`mr-[0.25em] inline-block ${
                word === "again." ? "italic text-gold" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-cream/55 md:text-lg"
        >
          We answer every call, day or night — qualifying enquiries and booking
          appointments while you focus on your work. The calls you used to miss
          become the bookings you keep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-navy transition-all duration-200 hover:bg-gold-light hover:shadow-[0_12px_40px_-10px_rgba(200,153,58,0.7)]"
          >
            Book a discovery call
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-sm border border-cream/20 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream/80 transition-all duration-200 hover:border-gold hover:text-gold"
          >
            See how it works
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40">
            Scroll
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
