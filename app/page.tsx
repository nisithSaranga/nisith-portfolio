"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const contactLinkClass =
  "flex h-14 w-14 items-center justify-center rounded-2xl " +
  "border border-[var(--border)] bg-[var(--surface)] text-foreground " +
  "transition hover:-translate-y-1 hover:border-fuchsia-500/60 " +
  "hover:text-fuchsia-700 dark:hover:text-fuchsia-300";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <Preloader />}

      <main id="top"
        className={[
          "min-h-screen overflow-x-clip bg-background text-foreground transition-opacity duration-700",
          showLoader ? "pointer-events-none opacity-0" : "opacity-100",
        ].join(" ")}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Education />
      <div className="flex min-h-[calc(100svh-4rem)] flex-col border-t border-[var(--border)]">
        <Contact />
        <Footer />
      </div>
      </main>
    </>
  );
}

function Preloader() {
  const loaderSteps = ["UI", "PROJECTS", "READY"];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background px-6">
      {/* Full-screen gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 18% 24%,
              rgba(6, 182, 212, 0.14),
              transparent 32%
            ),
            radial-gradient(
              circle at 82% 72%,
              rgba(37, 99, 235, 0.16),
              transparent 34%
            ),
            radial-gradient(
              circle at 50% 48%,
              rgba(14, 165, 233, 0.08),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              rgba(2, 6, 23, 0.04),
              rgba(8, 47, 73, 0.07),
              rgba(30, 64, 175, 0.06)
            )
          `,
        }}
      >
        <div className="absolute left-[12%] top-[18%] h-56 w-56 rounded-full bg-cyan-400/5 blur-[100px]" />

        <div className="absolute bottom-[15%] right-[14%] h-64 w-64 rounded-full bg-blue-600/10 blur-[110px]" />
      </div>

      {/* Loader card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-[#0b1729]/95 via-[#07101f]/95 to-[#030812]/95 px-8 py-9 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.5),0_0_55px_rgba(14,165,233,0.08)] backdrop-blur-xl">
        {/* Subtle card glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.08),transparent_42%)]"
        />

        <div className="relative z-10">
          {/* NS logo */}
          <div
            aria-label="Nisith Saranga"
            className="flex items-center justify-center text-4xl font-bold tracking-[-0.06em]"
          >
            <span className="bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              &lt;
            </span>

            <span className="mx-1 text-white">NS</span>

            <span className="bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              /&gt;
            </span>
          </div>

          <p className="mt-5 font-mono text-xs uppercase tracking-[0.28em] text-slate-400">
            Initializing portfolio
          </p>

          {/* Main loading bar */}
          <div className="mt-7 h-[4px] w-full overflow-visible rounded-full bg-slate-800">
            <div className="relative h-full w-full origin-left animate-[nisithLoad_2.1s_ease-in-out_forwards] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_14px_rgba(34,211,238,0.55)]">
              <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
            </div>
          </div>

          {/* UI, Projects and Ready indicators */}
          <div className="mt-7 grid grid-cols-[auto_1fr_auto_1fr_auto] items-start gap-3">
            {loaderSteps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center gap-2">
                  {/* This is the indicator dot */}
                  <span
                    aria-hidden="true"
                    className="h-3 w-3 rounded-full border border-cyan-500/50 bg-[#07101f] opacity-40 animate-[nisithStep_0.35s_ease_forwards]"
                    style={{
                      animationDelay: `${0.2 + index * 0.7}s`,
                    }}
                  />

                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
                    {step}
                  </span>
                </div>

                {/* Connector between indicator dots */}
                {index < loaderSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mt-[5px] h-px w-full bg-slate-800"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Loader animations */}
        <style jsx global>{`
          @keyframes nisithLoad {
            0% {
              transform: scaleX(0);
              opacity: 0.75;
            }

            35% {
              transform: scaleX(0.42);
              opacity: 1;
            }

            70% {
              transform: scaleX(0.76);
              opacity: 1;
            }

            100% {
              transform: scaleX(1);
              opacity: 1;
            }
          }

          @keyframes nisithStep {
            from {
              background: #07101f;
              border-color: rgba(6, 182, 212, 0.4);
              box-shadow: none;
              opacity: 0.4;
            }

            to {
              background: rgb(34, 211, 238);
              border-color: rgb(34, 211, 238);
              box-shadow: 0 0 12px rgba(34, 211, 238, 0.75);
              opacity: 1;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-\\[nisithLoad_2\\.1s_ease-in-out_forwards\\],
            .animate-\\[nisithStep_0\\.35s_ease_forwards\\] {
              animation-duration: 0.01ms !important;
              animation-delay: 0ms !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function TypewriterRotator({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const finishedTyping = !deleting && subIndex === currentWord.length;
    const finishedDeleting = deleting && subIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (finishedTyping) {
          setDeleting(true);
          return;
        }

        if (finishedDeleting) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }

        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      finishedTyping ? 1000 : deleting ? 45 : 80
    );

    return () => window.clearTimeout(timeout);
  }, [words, wordIndex, subIndex, deleting]);

  return (
    <span className="inline-flex items-center">
      {words[wordIndex].substring(0, subIndex)}
      <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-foreground/80" />
    </span>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:py-20"
    >
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>

        {subtitle && (
          <>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-400" />
            <p className="mt-4 text-slate-400">{subtitle}</p>
          </>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
}