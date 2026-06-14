"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type State = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    clinic: "",
    phone: "",
    email: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setState("success");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send.";
      setErrorMsg(message);
      setState("error");
    }
  }

  const inputCls =
    "w-full rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[14px] text-cream placeholder:text-cream/30 outline-none transition-all duration-200 focus:border-gold focus:bg-white/[0.07] focus:ring-0";

  const labelCls = "block mb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/50";

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-14 text-center"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="#C8993A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-light text-cream">We&apos;ll be in touch shortly.</h3>
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-cream/55">
              Thanks for reaching out. Harrison will call you within one working hour to arrange your free demo.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={submit}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {/* Name */}
            <div>
              <label htmlFor="cf-name" className={labelCls}>Your name <span className="text-gold">*</span></label>
              <input
                id="cf-name"
                type="text"
                placeholder="Sarah Johnson"
                required
                value={form.name}
                onChange={set("name")}
                className={inputCls}
              />
            </div>

            {/* Clinic */}
            <div>
              <label htmlFor="cf-clinic" className={labelCls}>Clinic / practice name</label>
              <input
                id="cf-clinic"
                type="text"
                placeholder="Luxe Aesthetics"
                value={form.clinic}
                onChange={set("clinic")}
                className={inputCls}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="cf-phone" className={labelCls}>Phone number <span className="text-gold">*</span></label>
              <input
                id="cf-phone"
                type="tel"
                placeholder="07700 900000"
                required
                value={form.phone}
                onChange={set("phone")}
                className={inputCls}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="cf-email" className={labelCls}>Email address <span className="text-gold">*</span></label>
              <input
                id="cf-email"
                type="email"
                placeholder="sarah@luxeaesthetics.co.uk"
                required
                value={form.email}
                onChange={set("email")}
                className={inputCls}
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="cf-msg" className={labelCls}>Anything you&apos;d like us to know</label>
              <textarea
                id="cf-msg"
                rows={3}
                placeholder="E.g. how many calls we typically receive, our opening hours..."
                value={form.message}
                onChange={set("message")}
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* Error */}
            {state === "error" && (
              <div className="sm:col-span-2 rounded-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-300">
                {errorMsg} — or email us at{" "}
                <a href="mailto:hello@missedcallcompany.com" className="underline underline-offset-2">
                  hello@missedcallcompany.com
                </a>
              </div>
            )}

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={state === "loading"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-navy transition-all duration-200 hover:bg-gold-light hover:shadow-[0_12px_40px_-10px_rgba(200,153,58,0.7)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {state === "loading" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Book a free demo
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </>
                )}
              </button>
              <p className="mt-3 text-[12px] text-cream/35">
                We&apos;ll call within one working hour. No commitment, no hard sell.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
