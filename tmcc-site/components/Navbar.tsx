"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why us", href: "#why" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-navy-deep/90 py-3 backdrop-blur-md"
          : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <Logo size={36} />
          <span className="hidden font-serif text-lg font-medium leading-none text-cream sm:block">
            The Missed Call
            <span className="ml-1.5 text-[10px] uppercase tracking-[0.22em] text-gold">
              Co.
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-wide text-cream/60 transition-colors duration-200 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-sm bg-gold px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-navy transition-all duration-200 hover:bg-gold-light hover:shadow-[0_8px_30px_-8px_rgba(200,153,58,0.6)]"
        >
          Book a call
        </a>
      </nav>
    </motion.header>
  );
}
