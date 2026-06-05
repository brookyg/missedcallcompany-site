"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Built for high-value businesses",
    desc: "We work with businesses where a single client is worth thousands — clinics, aesthetics, premium services. One captured booking pays for us many times over.",
  },
  {
    title: "A real person behind it",
    desc: "The technology is AI; the relationship is human. You get an owner who knows your business, not a faceless dashboard and a help ticket.",
  },
  {
    title: "Proven, not experimental",
    desc: "Every system is tested against hundreds of real-world scenarios before it answers a single client call. Nothing goes live until it's flawless.",
  },
  {
    title: "You see the return",
    desc: "Most providers go quiet after setup. We send you a clear monthly report — calls answered, leads captured, revenue recovered. No guesswork.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold"
            >
              Why us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl font-light leading-tight text-navy md:text-5xl"
            >
              Anyone can buy the software. We make it work.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-md text-base leading-relaxed text-grey"
            >
              The difference between a missed-call system that pays for itself
              and one that gathers dust isn&apos;t the tool. It&apos;s the
              craft, the tuning, and the care behind it.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl border border-brand-border bg-white p-7"
              >
                <div className="mb-4 h-8 w-8 rounded-full border-2 border-gold" />
                <h3 className="font-serif text-xl font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-grey">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
