import {
  HiOutlineChatAlt2,
  HiOutlineCode,
  HiOutlineChartBar,
} from "react-icons/hi";

export function About() {
  return (
   <section
  id="about"
  aria-labelledby="about-heading"
  className="w-full scroll-mt-24 bg-background"
>
  <div className="relative isolate overflow-hidden px-4 py-14 sm:py-16">
    {/* Background accent */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10"
    />

    <div className="mx-auto grid w-full max-w-[920px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
          {/* Introduction */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
              About me
            </p>

            <h2
              id="about-heading"
              className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-foreground sm:text-5xl"
            >
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
                A bit about me
              </span>
            </h2>

            <div className="mt-5 space-y-4 text-base leading-7 text-[var(--muted-text)]">
              <p>
                I’m Nisith, a Software Engineering undergraduate connecting
                thoughtful interfaces with the logic behind them.
              </p>

              <p>
                From browser-based machine learning with{" "}
                <span className="font-medium text-foreground">Confide</span> to
                live service tracking with{" "}
                <span className="font-medium text-foreground">FixTrack</span>, I
                learn by building and refining working applications.
              </p>

              <p>
                Seeking an internship to contribute, learn, and grow.
              </p>
            </div>

            {/* Focus areas */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 text-xs text-foreground">
                <HiOutlineCode
                  aria-hidden="true"
                  className="shrink-0 text-lg text-cyan-700 dark:text-cyan-400"
                />
                Full-stack development
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 text-xs text-foreground">
                <HiOutlineChartBar
                  aria-hidden="true"
                  className="shrink-0 text-lg text-blue-600 dark:text-blue-400"
                />
                Applied machine learning
              </span>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/15 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              <HiOutlineChatAlt2 aria-hidden="true" className="text-xl" />
              Let’s connect
            </a>
          </div>

          {/* Smaller portrait */}
          <figure className="mx-auto w-full max-w-[260px] lg:max-w-[280px]">
            {/* Only the photo and its glow move */}
            <div className="about-portrait-float relative isolate">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-gradient-to-br from-cyan-400/15 to-blue-600/20 blur-xl"
              />

              <div className="overflow-hidden rounded-[22px] border border-cyan-600/50 bg-[var(--surface-muted)] shadow-lg shadow-blue-950/10 dark:border-cyan-400/60 dark:shadow-black/25">
                <img
                  src="/profile.png"
                  alt="Portrait of Nisith Saranga"
                  width={551}
                  height={709}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>

            <figcaption className="mt-6 text-center">
              <p className="text-xl font-semibold tracking-tight text-foreground">
                Nisith Saranga
              </p>
              <p className="mt-1.5 text-sm text-[var(--muted-text)]">
                Full Stack Developer
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}