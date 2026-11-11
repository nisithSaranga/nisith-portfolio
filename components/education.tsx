"use client";

import { HiOutlineExternalLink } from "react-icons/hi";
import { useEffect, useRef } from "react";
import type { KeyboardEvent, PointerEvent } from "react";

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  logo: string;
  logoAlt: string;
  credentialUrl: string;
  credentialId?: string;
};

const certifications: Certification[] = [
   {
    title: "CertDirectory Workshop 2 Attendee - October 2026",
    issuer:
      "CertDirectory.io",
    issued: "October 2026",
    logo: "/certdirectory-logo.png",
    logoAlt: "CertDirectory.io logo",
    credentialUrl: "https://credentials.certdirectory.io/verify/CRD-AUTETSES",
    credentialId: "CRD-AUTETSES",
  },
   {
    title: "CertDirectory Workshop 1 Attendee - October 2026",
    issuer:
      "CertDirectory.io",
    issued: "October 2026",
    logo: "/certdirectory-logo.png",
    logoAlt: "CertDirectory.io logo",
    credentialUrl: "https://credentials.certdirectory.io/verify/CRD-DCKE67VL",
    credentialId: "CRD-DCKE67VL",
  },
  {
    title: "AWS Certification Roadmap: Learn, Build, Get Certiifed",
    issuer:
      "AWS Student Builder Group at ICBT Campus Colombo",
    issued: "October 2026",
    logo: "/aws-icbt-logo.png",
    logoAlt: "AWS Student Builder Group ICBT logo",
    credentialUrl: "/aws-icbt-certificate.png",
    credentialId: "AWS-2026-S01-072",
  },
  {
    title: "Applied AI Foundations",
    issuer:
      "OpenAI Academy",
    issued: "September 2026",
    logo: "/open-ai-logo.png",
    logoAlt: "OpenAI Academy logo",
    credentialUrl: "https://oaiacademy.credential.net/127998d9-8087-4f09-9ee3-4f18cadedf6f#acc.OQtb8JG5",
    credentialId: "",
  },
   {
    title: "AI Foundations",
    issuer:
      "OpenAI Academy",
    issued: "September 2026",
    logo: "/open-ai-logo.png",
    logoAlt: "OpenAI Academy logo",
    credentialUrl: "https://oaiacademy.credential.net/50abdbe5-25ee-4aa6-ab76-cc4c4044f135#acc.E6pJaRCP",
    credentialId: "",
  },
    {
    title: "AWS Student Builder Group SUSL Kickoff: Connect, Learn & Build",
    issuer:
      "AWS Student Builder Group at Sabaragamuwa University of Sri Lanka",
    issued: "September 2026",
    logo: "/aws-susl-logo.png",
    logoAlt: "AWS Student Builder Group SUSL logo",
    credentialUrl: "/aws-susl-certificate.png",
    credentialId: "AWS-2026-S01-072",
  },
  {
    title: "From Idea to Market Workshop",
    issuer: "AIconomy Summit",
    issued: "September 2026",
    logo: "/aiconomy-logo.png",
    logoAlt: "AIconomy Summit logo",
    credentialUrl: "https://www.aiconomysummit.com/certificate/certificate-template-2.png",
    credentialId: "ACS-2027-3634AC296",
  },
  {
    title: "AI/ML Engineer – Stage 1",
    issuer: "SLIIT",
    issued: "May 2026",
    logo: "/sliit-logo.png",
    logoAlt: "SLIIT logo",
    credentialUrl: "https://code.sliit.org/certificates/elhnfwgnmb",
  },
];

function CertificationCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(certifications.length);
  const suppressClick = useRef(false);
  const drag = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScroll: 0,
    startIndex: certifications.length,
    moved: false,
  });

  function getStep() {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 0;

    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement;
    return second.offsetLeft - first.offsetLeft;
  }

  function handleScroll() {
    const viewport = viewportRef.current;
    const step = getStep();

    if (!viewport || !step || drag.current.active) return;

    const cycleWidth = certifications.length * step;
    const currentScroll = viewport.scrollLeft;
    let nextScroll = currentScroll;

    if (currentScroll < cycleWidth) {
      nextScroll += cycleWidth;
    } else if (currentScroll >= cycleWidth * 2) {
      nextScroll -= cycleWidth;
    }

    positionRef.current = Math.round(nextScroll / step);

    if (nextScroll !== currentScroll) {
      viewport.scrollTo({ left: nextScroll, behavior: "instant" });
    }
  }

  function moveTo(index: number) {
    const viewport = viewportRef.current;
    const step = getStep();

    if (!viewport || !step) return;

    positionRef.current = index;
    viewport.scrollTo({
      left: index * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const currentViewport = viewport;

    function alignCarousel() {
      const step = getStep();
      if (step) currentViewport.scrollLeft = positionRef.current * step;
    }

    alignCarousel();
    const observer = new ResizeObserver(alignCarousel);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    suppressClick.current = false;
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const viewport = viewportRef.current;
    const step = getStep();
    if (!viewport || !step) return;

    drag.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: viewport.scrollLeft,
      startIndex: Math.round(viewport.scrollLeft / step),
      moved: false,
    };
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    const state = drag.current;
    if (!viewport || !state.active) return;

    const distance = event.clientX - state.startX;
    if (!state.moved && Math.abs(distance) > 6) {
      state.moved = true;
      suppressClick.current = true;
      viewport.dataset.dragging = "true";
      viewport.setPointerCapture(event.pointerId);
    }

    if (state.moved) {
      event.preventDefault();
      const step = getStep();
      const limitedDistance = Math.max(-step, Math.min(step, distance));
      viewport.scrollLeft = state.startScroll - limitedDistance;
    }
  }

  function finishDrag(event: PointerEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    const state = drag.current;
    if (!viewport || !state.active) return;

    state.active = false;
    delete viewport.dataset.dragging;
    if (viewport.hasPointerCapture(state.pointerId)) {
      viewport.releasePointerCapture(state.pointerId);
    }

    if (!state.moved) return;

    const distance = event.clientX - state.startX;
    const direction =
      Math.abs(distance) < 35 ? 0 : distance < 0 ? 1 : -1;
    moveTo(state.startIndex + direction);
  }

  function cancelDrag() {
    const viewport = viewportRef.current;
    const state = drag.current;
    if (!viewport || !state.active) return;

    state.active = false;
    delete viewport.dataset.dragging;
    if (viewport.hasPointerCapture(state.pointerId)) {
      viewport.releasePointerCapture(state.pointerId);
    }
    moveTo(state.startIndex);
  }

  function handleKeyboard(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      if (event.key === "Enter" || event.key === " ") {
        suppressClick.current = false;
      }
      return;
    }

    event.preventDefault();
    const step = getStep();
    const viewport = viewportRef.current;
    if (!viewport || !step) return;

    moveTo(
      Math.round(viewport.scrollLeft / step) +
        (event.key === "ArrowRight" ? 1 : -1)
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-6xl px-4">
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Certifications. Swipe, drag, or use the left and right arrow keys."
        tabIndex={0}
        className="projects-carousel-viewport rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={cancelDrag}
        onPointerLeave={(event) => {
          if (drag.current.active && !drag.current.moved) finishDrag(event);
        }}
        onKeyDown={handleKeyboard}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => {
          if (suppressClick.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}
      >
      <div ref={trackRef} className="projects-carousel-track">
        {[0, 1, 2].map((copy) =>
          certifications.map((certification) => (
            <article
              key={`${copy}-${certification.title}`}
              className="project-preview-card group flex h-[280px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 text-left transition-colors duration-300 hover:border-cyan-500/70"
            >
              <div className="flex h-20 w-full shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3">
                <img
                  src={certification.logo}
                  alt={certification.logoAlt}
                  width={120}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className={[
                    "max-h-full max-w-full object-contain",
                    certification.logo === "/open-ai-logo.png"
                      ? "dark:invert"
                      : "",
                  ].join(" ")}
                />
              </div>

              <div className="min-h-0 min-w-0 overflow-hidden px-2 pb-2 pt-3">
                <h4 className="text-base font-semibold leading-5 tracking-tight text-foreground">
                  {certification.title}
                </h4>
                <p className="mt-1 text-xs leading-5 text-cyan-700 dark:text-cyan-400">
                  {certification.issuer}
                </p>
                <p className="mt-1 text-[11px] text-[var(--muted-text)]">
                  Issued {certification.issued}
                </p>
                {certification.credentialId && (
                  <p className="mt-1 break-all text-[11px] text-[var(--muted-text)]">
                    Credential ID: {certification.credentialId}
                  </p>
                )}
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={copy === 1 ? 0 : -1}
                  className="mt-2 inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-cyan-700 transition hover:text-blue-600 dark:text-cyan-400 dark:hover:text-blue-400"
                >
                  View credential
                  <HiOutlineExternalLink aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
    </div>
  );
}

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="w-full scroll-mt-24 bg-background pt-6 pb-8 sm:pt-8 sm:pb-10"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
            Learning and growth
          </p>

          <h2
            id="education-heading"
            className="mt-4 inline-flex items-center gap-3 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl"
          >
            Education &{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500"> &nbsp;Certifications</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted-text)]">
            A snapshot of my academic journey and professional certifications.
          </p>
        </div>

        {/* Split layout */}
        <div className="mt-10 grid gap-8">
          {/* Education timeline */}
          <div>
            <div className="relative">
              <div className="grid gap-8 sm:grid-cols-2">
                {/* BSc */}
                <article className="relative flex gap-5 pb-8 sm:pb-0">
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-2 h-[11px] w-[11px] shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                />

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-semibold leading-6 text-foreground sm:text-lg">
                      BSc (Hons) in Software Engineering
                    </h4>

                    <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-700 dark:text-cyan-300">
                      Reading
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                    Cardiff Metropolitan University, UK
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">2025-2028 (expected)</p>
                </div>
                </article>

                {/* HND */}
                <a
                  href="/hnd1.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex gap-5 rounded-xl sm:justify-self-end sm:-translate-x-5"
                >
                  <span
                    aria-hidden="true"
                    className="relative z-10 mt-2 h-[11px] w-[11px] shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.35)]"
                  />

                  <div className="min-w-0">
                    <h4 className="inline-flex items-center gap-2 text-base font-semibold leading-6 text-foreground transition-colors group-hover:text-cyan-700 sm:text-lg dark:group-hover:text-cyan-400">
                      HND in Computing &amp; Software Engineering
                      <HiOutlineExternalLink
                        aria-hidden="true"
                        className="shrink-0 text-foreground transition-colors group-hover:text-cyan-700 dark:group-hover:text-cyan-400"
                      />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                      Cardiff Metropolitan University, UK
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                      2023-2025
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-5 flex flex-col items-center text-center">
              {/*<span className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
                Certifications & &nbsp;
              
              <span className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">Badges</span></span>
*/}
            </div>
            <CertificationCarousel />
          {/*  <p className="mt-3 text-right text-xs text-[var(--muted-text)]">
              {certifications.length} certificates
             {/* <span className="hidden lg:inline"> · Scroll or drag to explore</span>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}