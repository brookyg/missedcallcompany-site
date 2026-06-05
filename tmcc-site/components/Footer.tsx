import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-deep py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Logo size={48} />
            <div>
              <p className="font-serif text-2xl font-light text-cream">
                The Missed Call{" "}
                <span className="text-gold">Company</span>
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-gold/70">
                Never lose a lead again
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 text-[14px] text-cream/55 md:items-end">
            <a
              href="mailto:hello@missedcallcompany.com"
              className="transition-colors hover:text-gold"
            >
              hello@missedcallcompany.com
            </a>
            <a
              href="https://missedcallcompany.com"
              className="transition-colors hover:text-gold"
            >
              missedcallcompany.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-[12px] text-cream/35 md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} The Missed Call Company. All
            rights reserved.
          </p>
          <p>AI call handling for ambitious businesses.</p>
        </div>
      </div>
    </footer>
  );
}
