"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "We learn your business",
    desc: "In one onboarding call we capture your services, pricing, hours, FAQs and the way you like to speak to clients. Your AI is trained to sound like your business — not a robot.",
  },
  {
    n: "02",
    title: "We build & connect your agent",
    desc: "We configure your AI receptionist, give it a natural voice, and connect it to your calendar. Your existing number simply forwards unanswered and after-hours calls to it.",
  },
  {
    n: "03",
    title: "We test it relentlessly",
    desc: "Before a single real caller reaches it, we run dozens of test calls — accents, interruptions, tricky questions — and refine until it's flawless.",
  },
  {
    n: "04",
    title: "We go live & keep improving",
    desc: "Your phone is now answered 24/7. Every week we review real calls and fine-tune. Every month you get a report showing exactly what we captured for you.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-10">
        {/* Sticky left column */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
            How it works
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
            Live in 48 hours.<br />
            <span className="italic text-gold">Managed</span> forever.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/55">
            We don&apos;t hand you software and disappear. We build it, run it,
            and obsess over the details — so you never think about it again.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-gold/50 to-transparent" />
        </div>

        {/* Scrolling steps */}
        <div className="flex flex-col gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-gold/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-6">
                <span className="font-serif text-5xl font-light text-gold/40 transition-colors duration-300 group-hover:text-gold">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-cream/55">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
