"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, to, count, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 85,
    suffix: "%",
    label: "of callers who reach voicemail never call back",
  },
  {
    value: 50,
    suffix: "%",
    label: "of customers choose the first business to respond",
  },
  {
    value: 24,
    suffix: "/7",
    label: "coverage — every call answered, day or night",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold"
        >
          The cost of a missed call
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl font-serif text-4xl font-light leading-tight text-cream md:text-5xl"
        >
          Every unanswered call is a customer walking to your competitor.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/5 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-navy p-10"
            >
              <div className="font-serif text-6xl font-medium text-gold md:text-7xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-cream/55">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
