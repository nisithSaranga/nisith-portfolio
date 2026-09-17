"use client";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { HiX } from "react-icons/hi";

type Project = {
  id: string;
  title: string;
  cardTitle: string;
  summary: string;
  images: string[];
  overview: string;
  features: string[];
  stack: string[];
  github: string;
};

const projects: Project[] = [
  {
    id: "fifa",
    summary:
     "Full-stack prediction platform built with the MERN stack in typeScript",
    title: "FIFA 2026 World Cup — Bracket Challenge",
    cardTitle: "FIFA 2026 Bracket Challenge",
    images: [
      "/fifa1.jpg",
      "/fifa2.png",
      "/fifa3.png",
      "/fifa4.png",
    ],
    overview:
      "Complete prediction platform for FIFA World Cup 2026, that lets users predict match scores before kick offs, build a tournament bracket from group stage to the finals and compete on a real time leaderboard. It brings predictions, live match updates and automatic scoring system together so participants can follow their picks throughout the tournament.",
    features: [
      "Submit score predictions before kickoff, with late submissions blocked by the server.",
      "Earn points automatically for correct scorelines and match outcomes.",
      "Follow live scores, group standings and leaderboard rankings.",
      "Build a tournament bracket through to the final and generate a shareable champion poster.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Docker",
      "football-data.org API",
    ],
    github:
      "https://github.com/nisithSaranga/fifa26-bracket-challenge",
  },
  {
    id: "confide",
    summary:"Privacy-preserving deep learning system for STI Visual Screening of Men",
    title: "Confide — Private STI Screening for Men",
    cardTitle: "Confide",
    images: [
      "/confide1.png",
      "/confide2.png",
      "/confide3.png",
      "/confide4.png",
    ],
    overview:
      "The Final Dissertation project exploring privacy-preserving preliminary visual screening of male anogenital presentations associated with HPV, HSV & Syphilis. Confide addresses the sensitivity of sharing screening photographs by processing them entirely on the user’s device, offering an initial indication and guidance toward clinical care rather than a diagnosis.",
    features: [
      "Capture or upload an image and analyze it locally in the browser.",
      "Check for plausible skin content before running the classification models.",
      "Display condition-specific guidance or an inconclusive result when confidence falls below the configured threshold.",
      "Support guest screening and optional, consent-based saving of text-only results for registered users.",
    ],
    stack: [
      "Python",
      "TensorFlow",
      "TensorFlow.js",
      "Next.js",
      "FastAPI",
      "MongoDB",
    ],
    github: "https://github.com/nisithSaranga/Confide",
  },
  {
    id: "fixtrack",
    summary:"Smart vehicle service platform with real-time service tracking",
    title: "FixTrack — Vehicle Breakdown & Service Management Platform",
    cardTitle: "FixTrack",
    images: [
      "/fixtrack1.jpg",
      "/fixtrack2.jpg",
      "/fixtrack3.jpg",
    ],
    overview:
      "A vehicle service platform that helps drivers request breakdown assistance and coordinate repairs with nearby garages. It connects location-based garage matching, repair-status updates, and payment handling in one workflow, giving customers and service providers a shared view of each request.",
    features: [
      "Send SOS alerts with the driver’s location to nearby garages through SMS.",
      "Match breakdown requests to the closest available garage.",
      "Follow repair-status changes through real-time updates.",
      "Manage vehicles and service requests through client, garage/mechanic, and administrator portals.",
      "Complete Stripe test-mode checkout with payment status verified by the server.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Firebase",
      "Stripe",
      "Twilio",
      "Geolocation API",
    ],
    github: "https://github.com/nisithSaranga/Fixtrack",
  },
  {
    id: "oceanview",
    summary:"Resort reservation management system for internal use ",
    title: "OceanView Resort — Reservation Management System",
    cardTitle: "OceanView Resort",
    images: [
      "/oceanview1.png",
      "/oceanview2.png",
    ],
    overview:
      "Internal reservation management application for resort staff and administrators. It centralises booking administration and billing, helping staff prevent reservation conflicts, manage changes to guest bookings and generate invoices through a single system.",
    features: [
      "Create reservations and retrieve bookings by reservation number.",
      "Update, relocate, cancel, or delete reservations.",
      "Prevent booking conflicts and calculate prices by room type.",
      "Generate invoices and retrieve billing records for existing reservations.",
    ],
    stack: [
      "Java",
      "Java Servlets",
      "MySQL",
      "JDBC",
      "Tomcat",
      "Maven",
    ],
    github:
      "https://github.com/nisithSaranga/oceanview-resort-rms",
  },
  {
    id: "spc",
    summary:"Service-oriented web application for managing pharmacy operations and business workflows.",
    title: "SPC Pharmacy Network — Pharmacy Management System",
    cardTitle: "SPC Pharmacy Network",
    images: [
      "/soc1.png",
      "/soc2.png",
      "/soc3.png",
      "/soc4.png",
    ],
    overview:
      "Pharmacy management system that brings drug inventory, orders, pharmacy records and supplier information into one application. It helps administrators coordinate routine pharmacy operations, check stock before accepting order and keep inventory quantities updated.",
    features: [
      "Manage drug records, quantities and prices.",
      "Place orders with stock validation and automatic inventory deduction.",
      "Register suppliers and maintain pharmacy details and integration-status records.",
      "Provide separate administrator and user dashboards with role-based navigation.",
    ],
    stack: [
      "React",
      "C#",
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
    ],
    github: "https://github.com/nisithSaranga/PharmacyApp",
  },
];

const chipClass =
  "rounded-full border border-[var(--border)] " +
  "bg-[var(--surface-muted)] px-2 py-1 text-[11px] leading-4";

const chipTextClass =
  "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent";

function ProjectCarousel({
  selectedId,
  onSelect,
}: {
  selectedId?: string;
  onSelect: (
    project: Project,
    trigger: HTMLButtonElement
  ) => void;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const positionRef = useRef(projects.length);
  const suppressClick = useRef(false);

  const drag = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScroll: 0,
    startIndex: projects.length,
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

  const count = projects.length;
  const cycleWidth = count * step;
  const currentScroll = viewport.scrollLeft;

  let nextScroll = currentScroll;

  // Move to the identical position in the middle copy immediately.
  // Preserve the partial distance between cards instead of rounding it.
  if (currentScroll < cycleWidth) {
    nextScroll += cycleWidth;
  } else if (currentScroll >= cycleWidth * 2) {
    nextScroll -= cycleWidth;
  }

  positionRef.current = Math.round(nextScroll / step);

  if (nextScroll !== currentScroll) {
    viewport.scrollTo({
      left: nextScroll,
      behavior: "instant",
    });
  }
}

  function moveTo(index: number) {
    const viewport = viewportRef.current;
    const step = getStep();

    if (!viewport || !step) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    positionRef.current = index;

    viewport.scrollTo({
      left: index * step,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    function alignCarousel() {
      const track = trackRef.current;
      if (!track || track.children.length < 2) return;

      const first = track.children[0] as HTMLElement;
      const second = track.children[1] as HTMLElement;
      const step = second.offsetLeft - first.offsetLeft;

      if (viewport) {
        viewport.scrollLeft = positionRef.current * step;
      }
    }

     alignCarousel();

    const observer = new ResizeObserver(alignCarousel);
    observer.observe(viewport);

    return () => {
      observer.disconnect();
    };
  }, []);

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    // Clear any click suppression left by the previous gesture.
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
      const limitedDistance = Math.max(
        -step,
        Math.min(step, distance)
      );

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

    const viewport = viewportRef.current;
    const step = getStep();

    if (!viewport || !step) return;

    const currentIndex = Math.round(viewport.scrollLeft / step);
    const direction = event.key === "ArrowRight" ? 1 : -1;

    moveTo(currentIndex + direction);
  }

  return (
    <div className="mx-auto mt-8 max-w-6xl px-4">
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects. Swipe, drag, or use the left and right arrow keys."
        tabIndex={0}
        className="projects-carousel-viewport rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={cancelDrag}
        onPointerLeave={(event) => {
          if (drag.current.active && !drag.current.moved) {
            finishDrag(event);
          }
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
            projects.map((project) => (
              <article
                key={`${copy}-${project.id}`}
                className={[
                  "project-preview-card group flex flex-col overflow-hidden rounded-2xl border bg-[var(--surface)] p-3 text-left",
                  "transition-colors duration-300",
                  selectedId === project.id
                    ? "border-cyan-500 shadow-[0_0_24px_rgba(6,182,212,0.15)]"
                    : "border-[var(--border)] hover:border-cyan-500/70",
                ].join(" ")}
              >
                {/* Static screenshot in the circular card list */}
                <button
                  type="button"
                  tabIndex={copy === 1 ? 0 : -1}
                  aria-label={`View ${project.title}`}
                  aria-haspopup="dialog"
                  onClick={(event) =>
                    onSelect(project, event.currentTarget)
                  }
                  className="block w-full cursor-pointer overflow-hidden rounded-xl p-0 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-cyan-500"
                >
                  <ProjectImage
                    src={project.images[0]}
                    alt={`${project.cardTitle} application screenshot`}
                    className="aspect-video w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]"
                  />
                </button>

                <button
                  type="button"
                  tabIndex={copy === 1 ? 0 : -1}
                  aria-label={`View ${project.title}`}
                  aria-haspopup="dialog"
                  onClick={(event) =>
                    onSelect(project, event.currentTarget)
                  }
                  className="flex flex-1 cursor-pointer flex-col rounded-xl px-2 pb-3 pt-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan-500"
                >
                 <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.cardTitle}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((technology) => (
                    <span key={technology} className={chipClass}>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {technology}
                      </span>
                    </span>
                  ))}
                </div>
                </button>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selected) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) {
      dialog.showModal();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  function openProject(
    project: Project,
    trigger: HTMLButtonElement
  ) {
    triggerRef.current = trigger;
    setSelected(project);
  }

  function closeProject() {
    dialogRef.current?.close();
  }

  function handleClosed() {
    setSelected(null);
    triggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full scroll-mt-24 overflow-hidden bg-background pt-2 pb-8 sm:pt-8 sm:pb-8"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
            Projects
          </p>

            <h2
              id="projects-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl"
            >
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
              projects
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--muted-text)]">
            Explore what I’ve been building so far
          </p>
        </div>
      </div>

      {/* Manual cyclic carousel */}
      <ProjectCarousel
        selectedId={selected?.id}
        onSelect={openProject}
      />

      {/* Project details drawer */}
      <dialog
        ref={dialogRef}
        aria-labelledby="project-drawer-title"
        onClose={handleClosed}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeProject();
          }
        }}
        className="project-drawer fixed inset-0 m-0 ml-auto h-dvh max-h-none w-full max-w-[560px] overflow-hidden border-0 border-l border-[var(--border)] bg-[var(--surface)] p-0 text-foreground shadow-2xl"
      >
        {selected && (
          <div className="flex h-full min-h-0 flex-col">
            {/* Fixed drawer header */}
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[var(--border)] px-5 py-4 sm:px-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-400">
                Project details
              </p>

              <button
                type="button"
                autoFocus
                onClick={closeProject}
                aria-label="Close project details"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-text)] transition hover:border-cyan-500 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
              >
                <HiX aria-hidden="true" className="text-xl" />
              </button>
            </div>

            {/* Scrollable project details */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7">
              <h3
                id="project-drawer-title"
                className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl"
              >
                {selected.title}
              </h3>

              <ScreenshotPreview
                key={selected.id}
                images={selected.images}
                title={selected.cardTitle}
              />

              <div className="mt-7">
                <DetailHeading>Overview</DetailHeading>

                <p className="mt-3 text-sm leading-7 text-[var(--muted-text)]">
                  {selected.overview}
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--border)] pt-6">
                <DetailHeading>Key features</DetailHeading>

                <ul className="mt-3 space-y-3">
                  {selected.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-[var(--muted-text)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-[var(--border)] pt-6">
                <DetailHeading>Tech stack</DetailHeading>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {selected.stack.map((technology) => (
                    <span key={technology} className={chipClass}>
                      <span className={chipTextClass}>
                        {technology}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fixed GitHub link */}
            <div className="shrink-0 border-t border-[var(--border)] bg-[var(--surface)] px-5 py-4 sm:px-7">
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
              >
                View on GitHub
                <span className="sr-only">
                  {" "}(opens in a new tab)
                </span>
              </a>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

function DetailHeading({ children }: { children: string }) {
  return (
    <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-400">
      {children}
    </h4>
  );
}

function ProjectImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`overflow-hidden ${className}`}>
      {failed ? (
        <div className="flex h-full min-h-32 items-center justify-center p-4 text-center text-xs text-[var(--muted-text)]">
          Screenshot unavailable
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
  
}


// Used only inside the selected project's details drawer.

function ScreenshotPreview({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [dotsHovered, setDotsHovered] = useState(false);

  useEffect(() => {
    if (!dotsHovered || images.length < 2) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 1200);

    return () => window.clearInterval(timer);
  }, [dotsHovered, images.length]);

  return (
    <div className="mx-auto mt-5 w-full max-w-[340px]">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((src, imageIndex) => (
            <div
              key={`${src}-${imageIndex}`}
              aria-hidden={imageIndex !== index}
              className="h-full w-full shrink-0"
            >
              <ProjectImage
                src={src}
                alt={`${title}, screenshot ${imageIndex + 1}`}
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div
          role="group"
          aria-label={`${title} screenshots`}
          className="mt-3 flex justify-center"
          onMouseLeave={() => setDotsHovered(false)}
        >
          {images.map((src, imageIndex) => (
            <button
              key={`${src}-dot-${imageIndex}`}
              type="button"
              aria-label={`Show ${title} screenshot ${imageIndex + 1}`}
              aria-pressed={imageIndex === index}
              onMouseEnter={() => setDotsHovered(true)}
              onMouseLeave={() => setDotsHovered(false)}
              onFocus={() => setIndex(imageIndex)}
              onClick={() => setIndex(imageIndex)}
              className="flex h-9 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
            >
              <span
                aria-hidden="true"
                className={[
                  "pointer-events-none block h-2.5 rounded-full transition-all duration-200 motion-reduce:transition-none",
                  imageIndex === index
                    ? "w-7 bg-foreground"
                    : "w-2.5 bg-[var(--border)]",
                ].join(" ")}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}