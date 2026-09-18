import { HiArrowUp } from "react-icons/hi";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-cyan-500/30 bg-background">
      {/* Subtle cyan/blue glow — no purple */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(34,211,238,0.07),transparent_28%),radial-gradient(circle_at_75%_50%,rgba(37,99,235,0.06),transparent_28%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-5 px-4 py-6 sm:px-6 md:grid-cols-3 md:gap-6">
        {/* Branding */}
        <div className="flex items-center justify-center gap-3 md:justify-start">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/60 bg-[var(--surface)] text-xs font-semibold text-foreground shadow-[0_0_18px_rgba(34,211,238,0.12)]">
            &lt;NS/&gt;
          </div>

          <p className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-sm font-semibold text-transparent">
            Nisith Saranga
          </p>
        </div>

        {/* Back to top */}
        <a
          href="#top"
          aria-label="Back to the top of the page"
          className="group mx-auto flex cursor-pointer flex-col items-center gap-1.5 text-xs text-[var(--muted-text)] transition hover:text-cyan-600 dark:hover:text-cyan-300"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-[var(--surface)] text-lg text-cyan-600 shadow-[0_0_18px_rgba(34,211,238,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400 group-hover:text-cyan-500 dark:text-cyan-300">
            <HiArrowUp aria-hidden="true" />
          </span>

          <span className="uppercase tracking-[0.16em]">Back to top</span>
        </a>

        {/* Copyright */}
        <p className="text-center text-xs text-[var(--muted-text)] md:text-right">
          © 2026 Nisith Saranga. All rights reserved.
        </p>
      </div>
    </footer>
  );
}