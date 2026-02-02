"use client";

import React, { useEffect, useState } from "react";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiExpress,
} from "react-icons/si";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only show loader once per browser session
    try {
      const key = "nisith_portfolio_loader_seen";
      const seen = sessionStorage.getItem(key);

      if (!seen) {
        setShowLoader(true);
        sessionStorage.setItem(key, "1");

        // Loader duration (matches bar animation)
        const t = window.setTimeout(() => {
          setShowLoader(false);
        }, 1600);

        return () => window.clearTimeout(t);
      }
    } catch {
      // If sessionStorage is blocked, just don't show loader
      setShowLoader(false);
    } finally {
      setMounted(true);
    }
  }, []);

  return (
    <>
      {showLoader && <Preloader />}

      {/* Keep your site exactly as-is, just fade it in after loader */}
      <main
        className={[
          "min-h-screen bg-zinc-950 text-zinc-100 transition-opacity duration-700",
          showLoader ? "opacity-0" : "opacity-100",
          mounted ? "" : "opacity-0",
        ].join(" ")}
      >
        {/* Top bar */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <div className="font-semibold tracking-tight">
              Nisith <span className="text-zinc-400">Saranga</span>
            </div>
            <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
              <a className="hover:text-white" href="#about">About</a>
              <a className="hover:text-white" href="#skills">Skills</a>
              <a className="hover:text-white" href="#projects">Projects</a>
              <a className="hover:text-white" href="#education">Education</a>
              <a className="hover:text-white" href="#contact">Contact</a>
            </nav>
            <a
              className="rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/30"
              href="#contact"
            >
              Let&apos;s talk
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-1/2 top-[-120px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-fuchsia-500/25 blur-3xl" />
            <div className="absolute right-[-120px] top-[140px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-20">
            {/* HERO GRID (text + photo) */}
            <div className="grid items-center gap-10 lg:grid-cols-12">
              {/* Left: Hero text */}
              <div className="lg:col-span-8">
                <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">
                  Software Engineering Undergraduate • IT Intern Candidate
                </p>

                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  I'm Nisith, a Full stack Developer...
                  <br />
                  <span className="text-zinc-300"></span>
                </h1>

                <p className="mt-6 max-w-2xl text-zinc-300">
                  I build web and software solutions using modern stacks. Here are my projects,
                  skills, and education - optimized for internship selection boards: clear, real,
                  and easy to verify.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:opacity-90"
                  >
                    View Projects
                  </a>
                  <a
                    href="/Nisith_Saranga_CV.pdf"
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-100 hover:border-white/30"
                  >
                    Download CV
                  </a>
                  <a
                    href="https://github.com/nisithSaranga"
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-100 hover:border-white/30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <div className="mt-14 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-zinc-400">Focus</p>
                    <p className="mt-2 font-medium">Full-stack projects & internship readiness</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-zinc-400">Stack</p>
                    <p className="mt-2 font-medium">Next.js • Node/Express • .NET • SQL Server</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-zinc-400">Location</p>
                    <p className="mt-2 font-medium">Sri Lanka (open to remote)</p>
                  </div>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="lg:col-span-4">
                <div className="mx-auto w-full max-w-sm">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    {/* Placeholder image path:
                        Put your photo at public/profile.jpg
                        (or change src below) */}
                    <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <img
                        src="/profile.png"
                        alt="Nisith Saranga"
                        className="h-full w-full object-cover"
                      />

                      <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-zinc-400">
                        Add your photo: <br />
                        <span className="text-zinc-300">public/profile.jpg</span>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">
                      Tip: use a clean headshot, good lighting, neutral background.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END HERO GRID */}
          </div>
        </section>

        {/* Sections */}
        <Section id="about" title="About">
          <p className="text-zinc-300">
            I’m Nisith Saranga, a software engineering undergraduate pursuing an IT internship.
            I enjoy building practical systems end-to-end: clean UI, solid APIs, and data-backed features.
            I care about readable code, clear documentation, and shipping complete work.
          </p>
        </Section>

        {/* SKILLS (amended: icon grid) */}
        <Section id="skills" title="Skills">
          <div className="grid gap-3 sm:grid-cols-2">
            <SkillItem icon={SiJavascript} label="JavaScript" color="text-yellow-400" />
            <SkillItem icon={SiTypescript} label="TypeScript" color="text-blue-400" />
            <SkillItem icon={FaReact} label="React / Next.js" color="text-cyan-400" />
            <SkillItem icon={SiNextdotjs} label="Next.js" color="text-zinc-200" />
            <SkillItem icon={SiTailwindcss} label="Tailwind CSS" color="text-sky-400" />
            <SkillItem icon={FaHtml5} label="HTML5" color="text-orange-400" />
            <SkillItem icon={FaCss3Alt} label="CSS3" color="text-blue-300" />
            <SkillItem icon={FaNodeJs} label="Node.js" color="text-green-400" />
            <SkillItem icon={SiExpress} label="Express.js" color="text-zinc-300" />
            <SkillItem icon={SiDotnet} label="ASP.NET Core" color="text-violet-400" />
            <SkillItem icon={FaDatabase} label="SQL Server" color="text-red-400" />
            <SkillItem icon={FaJava} label="Java" color="text-amber-300" />
            <SkillItem icon={FaGithub} label="Git & GitHub" color="text-zinc-300" />
          </div>
        </Section>

        {/* PROJECTS (amended: image slots per project) */}
        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            <ProjectCard
              title="FixTrack – Vehicle Service Platform"
              desc="Final-year project platform for booking, tracking, and managing vehicle services."
              tags={["Next.js", "APIs", "Database"]}
              imageSrc="/projects/fixtrack.jpg"
              imageAlt="FixTrack project screenshot"
              imageHint="Add image: public/projects/fixtrack.jpg"
            />
            <ProjectCard
              title="SPC Pharmacy Network – Service-Oriented Web App"
              desc="Service-oriented web application for managing pharmacy operations and workflows."
              tags={["Web App", "Services", "SQL"]}
              imageSrc="/projects/spc.jpg"
              imageAlt="SPC Pharmacy Network project screenshot"
              imageHint="Add image: public/projects/spc.jpg"
            />
            <ProjectCard
              title="LuxeVista Resort – Mobile App"
              desc="Mobile app concept for resort browsing, booking support, and user experience."
              tags={["Mobile", "UI/UX", "App"]}
              imageSrc="/projects/luxevista.jpg"
              imageAlt="LuxeVista Resort project screenshot"
              imageHint="Add image: public/projects/luxevista.jpg"
            />
            <ProjectCard
              title="FitZone Fitness Center – Web App"
              desc="Web application for fitness center operations and member-facing features."
              tags={["Web", "CRUD", "Forms"]}
              imageSrc="/projects/fitzone.jpg"
              imageAlt="FitZone Fitness Center project screenshot"
              imageHint="Add image: public/projects/fitzone.jpg"
            />
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            Next: I’ll add screenshots, repo/demo links, and short case studies for each project.
          </p>
        </Section>

        <Section id="education" title="Education & Certification">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-zinc-400">Higher Diploma</p>
              <p className="mt-2 font-medium">Higher Diploma in Computing and Software Engineering (Merit)</p>
              <p className="mt-2 text-sm text-zinc-300">
                Cardiff Metropolitan University (awarded)
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-zinc-400">Certificate</p>
              <p className="mt-2 font-medium">HND Certificate (Scan)</p>
              <p className="mt-2 text-sm text-zinc-300">
                We’ll add a clean PDF/image link and a dedicated “Certificates” section.
              </p>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-zinc-300">
              Best way: email me and I’ll reply fast.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:opacity-90" href="mailto:nisithsaranga13@gmail.com">
                Email me
              </a>
              <a className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-white/30" href="https://www.linkedin.com/in/nisith-saranga-0529732a5/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-white/30" href="https://github.com/nisithSaranga" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Replace email + LinkedIn with your real links from the CV.
            </p>
          </div>
        </Section>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-6xl px-4 text-sm text-zinc-500">
            © {new Date().getFullYear()} Nisith Saranga. Built with Next.js.
          </div>
        </footer>
      </main>
    </>
  );
}

function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-md px-6">
        <div className="text-center">
          <div className="text-2xl font-semibold tracking-tight">
            Nisith <span className="text-zinc-400">Saranga</span>
          </div>
          <div className="mt-2 text-xs text-zinc-400">
            Loading portfolio…
          </div>
        </div>

        {/* Progress line */}
        <div className="mt-8 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-[nisithLoad_1.4s_ease-in-out_forwards] bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400" />
        </div>

        {/* Keyframes (scoped via styled-jsx) */}
        <style jsx>{`
          @keyframes nisithLoad {
            0% { transform: scaleX(0); opacity: 0.8; }
            30% { transform: scaleX(0.45); opacity: 1; }
            100% { transform: scaleX(1); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-sm text-zinc-400">{title}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((x) => (
          <li key={x} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-zinc-200">
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillItem({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <Icon className={`text-xl ${color}`} />
      <span className="text-sm text-zinc-200">{label}</span>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  imageSrc,
  imageAlt,
  imageHint,
}: {
  title: string;
  desc: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20">
      {/* Image slot */}
      <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <div className="aspect-video w-full">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            onError={(e) => {
              // hide broken image icon if not provided yet
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="flex h-full w-full items-center justify-center p-4 text-center text-sm text-zinc-400">
            {imageHint}
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
