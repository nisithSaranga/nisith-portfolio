import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import { RoleRotator } from "@/components/role-rotator";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Python",
];

export function Hero() {
  return (
    <section className="portfolio-hero relative isolate min-h-[calc(100svh-75px)] overflow-hidden bg-background text-foreground">
      {/* Light workspace background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-[70%_center] bg-no-repeat lg:bg-[length:auto_100%] lg:bg-right-bottom dark:hidden"
        style={{
          backgroundImage: "url('/hero-workspace-light.png')",
        }}
      />

      {/* Dark workspace background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden bg-cover bg-[70%_center] bg-no-repeat lg:bg-[length:auto_100%] lg:bg-right-bottom dark:block"
        style={{
          backgroundImage: "url('/hero-workspace.png')",
        }}
      />

      {/* Mobile overlay keeps text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-background/95 sm:bg-background/90 lg:hidden"
      />

      {/* Desktop fade softens the image's left boundary */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, var(--background) 0%, var(--background) 24%, transparent 48%)",
        }}
      />

      <div className="hero-content relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-6xl items-center px-4 py-20 sm:px-6 lg:py-24">
        <div className="w-full max-w-[680px] lg:-translate-x-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-foreground shadow-lg backdrop-blur-md dark:border-white/15 dark:bg-black/40">
           <span
              aria-hidden="true"
              className="relative flex h-2.5 w-2.5 items-center justify-center"
            >
              <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_12px_rgba(34,211,238,0.85)]" />
            </span>
            <span className="text-xs">
              open to opportunities
            </span>
          </div>
          {/* Main heading */}
          <h1 className="mt-10 lg:mt-6 text-5xl font-semibold leading-none tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
            Nisith Saranga
          </h1>

          <p className="mt-5 min-h-[36px] text-xl font-medium tracking-tight text-[var(--muted-text)] sm:min-h-[40px] sm:text-2xl lg:min-h-[44px] lg:text-3xl">
            <RoleRotator />
          </p>

          <div className="mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />

          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted-text)] sm:text-lg">
            Building full-stack, AI-powered and data-driven applications.
          </p>

          {/* Technology line */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-cyan-800 dark:text-cyan-200 sm:text-base">
            <span
              aria-hidden="true"
              className="text-cyan-700 dark:text-cyan-400"
            >
              &lt;
            </span>

            {technologies.map((technology, index) => (
              <span key={technology} className="flex items-center gap-3">
                {technology}

                {index < technologies.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    •
                  </span>
                )}
              </span>
            ))}

            <span
              aria-hidden="true"
              className="text-cyan-700 dark:text-cyan-400"
            >
              /&gt;
            </span>
          </div>

          {/* Hero actions */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-b from-cyan-400 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition hover:-translate-y-0.5 hover:brightness-110 sm:text-base"
            >
              View Projects

              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://github.com/nisithSaranga"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Nisith Saranga's GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xl text-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-600 hover:text-cyan-700 dark:border-white/20 dark:bg-black/30 dark:hover:border-cyan-400/70 dark:hover:text-cyan-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nisith-saranga-0529732a5/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Nisith Saranga's LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xl text-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-600 hover:text-cyan-700 dark:border-white/20 dark:bg-black/30 dark:hover:border-cyan-400/70 dark:hover:text-cyan-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#projects"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted-text)] transition hover:text-cyan-700 dark:hover:text-cyan-300 md:flex"
        >
          Scroll to explore

          <HiArrowDown className="text-lg text-cyan-700 dark:text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
