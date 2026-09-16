"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const rotatingRoles = [
  "a Full-stack Developer",
  "an Undergraduate",
  "an IT Intern Candidate",
];

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

      <main
        className={[
          "min-h-screen overflow-x-clip bg-background text-foreground transition-opacity duration-700",
          showLoader ? "pointer-events-none opacity-0" : "opacity-100",
        ].join(" ")}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills/>

        <Section id="projects" title="Projects">
          <div className="grid gap-5 md:grid-cols-2">
            <ProjectCard
              title="FIFA 2026 World Cup Bracket Challenge"
              desc="A full-stack prediction platform built with the MERN stack in TypeScript."
              tags={["MERN", "Typescript", "Docker", "football-data.org API"]}
              projectImages={[
                "/fifa1.jpg",
                "/fifa2.png",
                "/fifa3.png",
                "/fifa4.png",
              ]}
              imageAlt="FIFA 2026 World Cup Bracket Challenge project screenshots"
            />

            <ProjectCard
              title="Confide - Private STI Screening for Men"
              desc="A Privacy-Preserving Deep Learning System for Preliminary Visual Screening of Male Anogenital Sexually Transmitted Infections."
              tags={[
                "Transfer Learning",
                "Convolutional Neural Network",
                "FastAPI",
                "Tensorflow.js",
              ]}
              projectImages={[
                "/confide1.png",
                "/confide2.png",
                "/confide3.png",
                "/confide4.png",
              ]}
              imageAlt="Confide project screenshots"
            />

            <ProjectCard
              title="FixTrack - Vehicle Service Platform"
              desc="A full-stack platform for breakdown reporting, live tracking, and mechanic dispatch."
              tags={["Express.js", "Next.js", "Firebase"]}
              projectImages={[
                "/fixtrack1.jpg",
                "/fixtrack2.jpg",
                "/fixtrack3.jpg",
              ]}
              imageAlt="FixTrack project screenshots"
            />

            <ProjectCard
              title="OceanView Resort - Reservation Management System"
              desc="Java EE web application to manage resort reservations, prevent booking conflicts & generate invoices."
              tags={["Java EE", "MySQL", "HTML5", "Bootstrap"]}
              projectImages={["/oceanview1.png", "/oceanview2.png"]}
              imageAlt="Oceanview RMS project screenshots"
            />

            <ProjectCard
              title="SPC Pharmacy Network - Service Oriented Web App"
              desc="Service-oriented web application for managing pharmacy operations and business workflows."
              tags={["ASP.NET Core", "React", "SQL Server"]}
              projectImages={[
                "/soc1.png",
                "/soc2.png",
                "/soc3.png",
                "/soc4.png",
              ]}
              imageAlt="SPC Pharmacy Network project screenshots"
            />

            <ProjectCard
              title="FitZone Fitness Center - Web App"
              desc="Web application for fitness center operations and member-facing features."
              tags={["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"]}
              projectImages={[
                "/fitzone1.jpg",
                "/fitzone3.jpg",
              ]}
              imageAlt="FitZone Fitness Center project screenshots"
            />
          </div>
        </Section>

        <Section id="education" title="Education & Certifications">
          <div className="flex flex-col items-center gap-6">
            {/* Degree details */}
            <div className="w-full max-w-4xl space-y-3 pb-4">
              {/* BSc */}
              <div className="group flex items-start gap-3 p-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400" />

                <div>
                  <p className="bg-gradient-to-r from-slate-900 to-cyan-700 bg-clip-text font-semibold text-foreground transition group-hover:text-transparent dark:from-white dark:to-cyan-400">
                    BSc (Hons) in Software Engineering (Reading)
                  </p>
                  <p className="text-sm text-[var(--muted-text)]">
                    Cardiff Metropolitan University (Reading)
                  </p>
                </div>
              </div>

              {/* HND */}
              <div className="group flex items-start gap-3 p-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400" />

                <div>
                  <p className="bg-gradient-to-r from-slate-900 via-pink-700 to-cyan-700 bg-clip-text font-semibold text-foreground transition group-hover:text-transparent dark:from-white dark:via-pink-400 dark:to-cyan-400">
                    HND in Computing & Software Engineering
                  </p>
                  <p className="text-sm text-[var(--muted-text)]">
                    Cardiff Metropolitan University
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate container */}
            <div className="w-full max-w-4xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
              <p className="text-center text-sm text-[var(--muted-text)]">
                Certificate
              </p>

              <p className="mt-2 text-center text-lg font-medium text-foreground">
                HND in Computing & Software Engineering
              </p>

              <div className="mt-5 flex justify-center">
                <a
                  href="/hnd1.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-full max-w-[300px]"
                >
                  <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]">
                    <img
                      src="/hnd1.jpg"
                      alt="HND Certificate front"
                      className="h-64 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </a>
              </div>

              <p className="mt-4 text-center text-sm text-[var(--muted-text)]">
                Click to view the full image.
              </p>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-2xl shadow-black/5 dark:shadow-black/20">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-cyan-400/20 ring-1 ring-[var(--border)]">
              <FaEnvelope className="text-2xl text-foreground" />
            </div>

            <p className="mt-5 text-lg font-medium text-foreground">
              Let’s connect
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--muted-text)] sm:text-base">
              I’m open to internship opportunities, collaborations, and
              professional connections.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:nisithsaranga13@gmail.com"
                aria-label="Email"
                title="Email"
                className={contactLinkClass}
              >
                <FaEnvelope className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/nisith-saranga-0529732a5/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className={contactLinkClass}
              >
                <FaLinkedinIn className="text-xl" />
              </a>

              <a
                href="https://github.com/nisithSaranga"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className={contactLinkClass}
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://wa.me/94712698980"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className={contactLinkClass}
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>

            <p className="mt-6 text-xs text-[var(--muted-text)]">
              Best reached by email or LinkedIn.
            </p>
          </div>
        </Section>

        <footer className="relative overflow-hidden border-t border-[var(--border)] bg-background">
          {/* Gradient background matching layout */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-40 w-60 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-40 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-background/40" />
          </div>

          <div className="relative mx-auto max-w-6xl py-16 sm:py-10">
            {/* Back to top button */}
            <div className="flex flex-col items-center gap-6">
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="group flex flex-col items-center gap-2 text-[var(--muted-text)] transition hover:text-foreground"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xl transition group-hover:-translate-y-1 group-hover:border-fuchsia-400/50 group-hover:bg-fuchsia-500/10">
                  ↑
                </span>
                <span className="text-xs uppercase tracking-widest">
                  Back to Top
                </span>
              </button>

              <div className="h-px w-24 rounded-full bg-gradient-to-r from-fuchsia-500/50 via-violet-400/50 to-cyan-400/50" />

              <p className="bg-gradient-to-r from-fuchsia-700 via-violet-700 to-cyan-700 bg-clip-text text-2xl font-semibold tracking-tight text-transparent dark:from-fuchsia-400 dark:via-violet-300 dark:to-cyan-400">
                Nisith Saranga
              </p>

              <p className="max-w-sm text-center text-sm text-[var(--muted-text)]">
                Your next intern just built this.
              </p>

              <p className="text-center text-xs text-[var(--muted-text)]">
                © {new Date().getFullYear()} Developed by Nisith Saranga. All
                rights reserved.
              </p>
            </div>
          </div>
        </footer>
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

        <div className="mt-2 min-h-[28px] text-sm text-[var(--muted-text)]">
          <TypewriterRotator words={rotatingRoles} />
        </div>

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

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 text-left shadow-lg shadow-black/10">
      <p className="text-sm text-[var(--muted-text)]">{label}</p>
      <p className="mt-2 font-medium leading-7 text-foreground">{value}</p>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  projectImages,
  imageAlt,
}: {
  title: string;
  desc: string;
  tags: string[];
  projectImages: string[];
  imageAlt: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewing, setPreviewing] = useState(false);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  useEffect(() => {
    if (!previewing || projectImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectImages.length);
    }, 1200);

    return () => window.clearInterval(interval);
  }, [previewing, projectImages.length]);

  return (
    <div
      className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:border-[var(--accent)] hover:bg-[var(--surface-muted)]"
      onMouseEnter={() => setPreviewing(true)}
      onMouseLeave={() => {
        setPreviewing(false);
        setCurrentIndex(0);
      }}
      onTouchStart={() => setPreviewing(true)}
      onTouchEnd={() => {
        window.setTimeout(() => setPreviewing(false), 1400);
      }}
    >
      <div className="mb-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]">
        <div className="relative aspect-video w-full overflow-hidden">
          {projectImages.length > 0 ? (
            <div
              className="flex h-full w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projectImages.map((img, index) => (
                <div key={index} className="h-full w-full shrink-0">
                  {!failedImages.includes(img) ? (
                    <img
                      src={img}
                      alt={`${imageAlt} ${index + 1}`}
                      className="h-full w-full object-cover"
                      onError={() => {
                        setFailedImages((prev) =>
                          prev.includes(img) ? prev : [...prev, img]
                        );
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-4 text-center text-sm text-[var(--muted-text)]">
                      Failed to load: {img}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center p-4 text-center text-sm text-[var(--muted-text)]">
              No images provided
            </div>
          )}

          {projectImages.length > 1 && (
            <div className="absolute right-3 top-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[11px] text-foreground backdrop-blur" />
          )}
        </div>
      </div>

      {projectImages.length > 1 && (
        <div className="mb-4 flex justify-center gap-2">
          {projectImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "w-6 bg-foreground"
                  : "bg-[var(--border)] hover:bg-[var(--muted-text)]",
              ].join(" ")}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      )}

      <h3 className="text-lg font-semibold text-foreground">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
        {desc}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}