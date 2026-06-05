"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI Call Handling",
    desc: "An AI receptionist answers every inbound call around the clock — handling questions, qualifying the enquiry, and capturing every detail.",
    icon: (
      <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    ),
    featured: true,
  },
  {
    title: "Instant Lead Response",
    desc: "The moment a call is missed or a form is filled, an automatic message goes out — so the lead never goes cold and never reaches a competitor.",
    icon: (
      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    ),
  },
  {
    title: "Appointment Booking",
    desc: "Enquiries are booked straight into your calendar in real time, with automatic reminders that cut no-shows and keep your diary full.",
    icon: (
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
    ),
  },
  {
    title: "Lead Reactivation",
    desc: "We gently re-engage your dormant enquiries and past clients — turning a list you already own into fresh bookings.",
    icon: (
      <path d="M12 5V1L7 6l5 5V7a6 6 0 11-6 6H4a8 8 0 108-8z" />
    ),
  },
  {
    title: "Review Generation",
    desc: "After every appointment, an automated request invites happy clients to leave a Google review — lifting your reputation on autopilot.",
    icon: (
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    ),
  },
  {
    title: "Monthly ROI Reporting",
    desc: "A clear monthly report shows calls answered, leads captured and revenue recovered — so the value is never in doubt.",
    icon: (
      <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4 3h2v11h-2V10zm4-7h2v18h-2V3zm4 9h2v9h-2v-9z" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold"
          >
            What we do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-light leading-tight text-navy md:text-5xl"
          >
            One system that captures every opportunity.
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-xl border p-8 transition-all duration-300 ${
                s.featured
                  ? "border-navy bg-navy text-cream"
                  : "border-brand-border bg-white hover:border-gold/50 hover:shadow-[0_20px_50px_-25px_rgba(20,28,43,0.35)]"
              }`}
            >
              {s.featured && (
                <span className="absolute right-5 top-5 rounded-sm bg-gold px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-navy">
                  Core
                </span>
              )}
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300 ${
                  s.featured
                    ? "bg-gold/15"
                    : "bg-cream-mid group-hover:bg-gold/15"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={s.featured ? "#C8993A" : "#141C2B"}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  {s.icon}
                </svg>
              </div>
              <h3
                className={`font-serif text-2xl font-semibold ${
                  s.featured ? "text-cream" : "text-navy"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`mt-3 text-[14.5px] leading-relaxed ${
                  s.featured ? "text-cream/60" : "text-grey"
                }`}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
