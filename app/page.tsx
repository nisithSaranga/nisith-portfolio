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
        <Education/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-[16%] h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[18%] right-[12%] h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-2xl shadow-black/10 backdrop-blur dark:shadow-black/40">
        <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-muted)] ring-2 ring-fuchsia-500/20">
          <img
            src="/profile.png"
            alt="Nisith Saranga"
            className="h-full w-full object-cover object-[center_12%]"
          />
        </div>

        <p className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
          Nisith Saranga
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[var(--muted-text)]">
          Loading portfolio
        </p>

        <div className="mt-7 h-[4px] w-full overflow-hidden rounded-full bg-[var(--border)]">
          <div className="h-full w-full origin-left animate-[nisithLoad_1.7s_ease-in-out_forwards] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 dark:from-fuchsia-400 dark:via-white dark:to-cyan-400" />
        </div>

        <style jsx>{`
          @keyframes nisithLoad {
            0% {
              transform: scaleX(0);
              opacity: 0.8;
            }
            35% {
              transform: scaleX(0.45);
              opacity: 1;
            }
            100% {
              transform: scaleX(1);
              opacity: 1;
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
            <p className="mt-4 text-[var(--muted-text)]">{subtitle}</p>
          </>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
}