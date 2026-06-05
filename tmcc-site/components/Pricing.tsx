"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Essential",
    tagline: "For getting every call answered",
    price: "£500",
    period: "/month",
    setup: "£1,000 setup",
    features: [
      "24/7 AI call answering",
      "Enquiry qualification",
      "Instant call summaries by text",
      "Missed-call text-back",
      "Monthly performance report",
    ],
    featured: false,
  },
  {
    name: "Flagship",
    tagline: "Our complete lead-capture system",
    price: "£750",
    period: "/month",
    setup: "£1,500 setup",
    features: [
      "Everything in Essential",
      "Live calendar booking",
      "Automated appointment reminders",
      "Weekly call review & tuning",
      "Detailed ROI reporting",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Growth",
    tagline: "For clinics ready to scale",
    price: "Custom",
    period: "",
    setup: "Tailored",
    features: [
      "Everything in Flagship",
      "Lead reactivation campaigns",
      "Review generation engine",
      "Multi-location handling",
      "Dedicated account management",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl"
          >
            Less than the bookings you&apos;re losing.
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 ${
                t.featured
                  ? "border-2 border-gold bg-navy-mid shadow-[0_30px_80px_-30px_rgba(200,153,58,0.4)]"
                  : "border border-white/10 bg-white/[0.02]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm bg-gold px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-navy">
                  Most popular
                </span>
              )}
              <h3 className="font-serif text-2xl font-semibold text-cream">
                {t.name}
              </h3>
              <p className="mt-1 text-[13px] text-cream/50">{t.tagline}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-5xl font-medium text-gold">
                  {t.price}
                </span>
                <span className="text-sm text-cream/50">{t.period}</span>
              </div>
              <p className="mt-1 text-[12px] uppercase tracking-wider text-cream/40">
                {t.setup}
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[14px] text-cream/75"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#C8993A"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                  t.featured
                    ? "bg-gold text-navy hover:bg-gold-light"
                    : "border border-cream/20 text-cream/80 hover:border-gold hover:text-gold"
                }`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-[13px] text-cream/40">
          No long contracts. Cancel any time. Setup fees cover full build,
          testing and onboarding.
        </p>
      </div>
    </section>
  );
}
