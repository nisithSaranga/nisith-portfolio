import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TensorFlow",
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#02050b] text-white">
      {/* Complete workspace background with all three cards */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-[70%_center] bg-no-repeat opacity-40 lg:bg-[length:auto_100%] lg:bg-right-bottom lg:opacity-100"
        style={{
          backgroundImage: "url('/hero-workspace.png')",
        }}
      />

      {/* Mobile readability overlay; transparent on desktop */}
      <div className="absolute inset-0 -z-20 bg-[#02050b]/65 lg:bg-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-6xl items-center px-4 py-20 sm:px-6 lg:py-24">
        <div className="w-full max-w-[680px]">
          {/* Internship badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-zinc-200 shadow-lg backdrop-blur-md">
            <span
              aria-hidden="true"
              className="text-xs text-zinc-200"
            >
              ⚡Software Engineering Undergraduate
            </span>

            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          </div>

          {/* Main heading */}
          <h1 className="mt-10 text-5xl font-semibold leading-none tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Nisith Saranga
          </h1>

          <p className="mt-5 text-xl font-medium tracking-tight text-zinc-300 sm:text-2xl lg:text-3xl">
            Full Stack Developer 
          </p>

          <div className="mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />

          <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Building full-stack, AI-powered and data-driven applications.
          </p>

          {/* Technology line */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-cyan-200 sm:text-base">
            <span
              aria-hidden="true"
              className="text-cyan-400"
            >
              &lt;
            </span>

            {technologies.map((technology, index) => (
              <span
                key={technology}
                className="flex items-center gap-3"
              >
                {technology}

                {index < technologies.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="text-blue-400"
                  >
                    •
                  </span>
                )}
              </span>
            ))}

            <span
              aria-hidden="true"
              className="text-cyan-400"
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
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-xl text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nisith-saranga-0529732a5/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Nisith Saranga's LinkedIn profile"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-xl text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:text-cyan-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#projects"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition hover:text-cyan-300 md:flex"
        >
          Scroll to explore

          <HiArrowDown className="text-lg text-cyan-400" />
        </a>
      </div>
    </section>
  );
}