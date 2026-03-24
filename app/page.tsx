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
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const rotatingRoles = [
  "Full-stack Developer",
  "Frontend Builder",
  "Backend Problem Solver",
  "IT Intern Candidate",
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const skillItems = [
  { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400", level: 88 },
  { icon: SiTypescript, label: "TypeScript", color: "text-blue-400", level: 78 },
  { icon: FaReact, label: "React", color: "text-cyan-400", level: 84 },
  { icon: SiNextdotjs, label: "Next.js", color: "text-zinc-200", level: 82 },
  { icon: FaNodeJs, label: "Node.js", color: "text-green-400", level: 80 },
  { icon: SiExpress, label: "Express.js", color: "text-zinc-300", level: 74 },
  { icon: FaHtml5, label: "HTML5", color: "text-orange-400", level: 92 },
  { icon: FaCss3Alt, label: "CSS3", color: "text-blue-300", level: 88 },
  { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-sky-400", level: 86 },
  { icon: SiDotnet, label: "ASP.NET Core", color: "text-violet-400", level: 76 },
  { icon: FaDatabase, label: "SQL Server", color: "text-red-400", level: 78 },
  { icon: FaJava, label: "Java", color: "text-amber-300", level: 75 },
  { icon: FaGithub, label: "Git & GitHub", color: "text-zinc-300", level: 84 },
];

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const key = "nisith_portfolio_loader_seen";
      const seen = sessionStorage.getItem(key);

      if (!seen) {
        setShowLoader(true);
        sessionStorage.setItem(key, "1");

        const timer = window.setTimeout(() => {
          setShowLoader(false);
        }, 2100);

        return () => window.clearTimeout(timer);
      }
    } catch {
      setShowLoader(false);
    }
  }, []);

  return (
    <>
      {showLoader && <Preloader />}

      <main
        className={[
          "min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100 transition-opacity duration-700",
          mounted ? "opacity-100" : "opacity-0",
          showLoader ? "pointer-events-none opacity-0" : "opacity-100",
        ].join(" ")}
      >
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
            <a href="#" className="min-w-0 font-semibold tracking-tight">
              Nisith <span className="text-zinc-400">Saranga</span>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
              {navItems.map((item) => (
                <a key={item.href} className="transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                className="hidden rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-white/30 md:inline-flex"
                href="#contact"
              >
                Let&apos;s talk
              </a>

              <button
                type="button"
                className="inline-flex rounded-full border border-white/15 p-2 text-zinc-200 transition hover:border-white/30 md:hidden"
                aria-label="Toggle navigation"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                {mobileMenuOpen ? <HiX className="text-2xl" /> : <HiOutlineMenuAlt3 className="text-2xl" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-white/10 md:hidden">
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 rounded-xl bg-white px-3 py-3 text-center text-sm font-medium text-zinc-950"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let&apos;s talk
                </a>
              </div>
            </div>
          )}
        </header>

        <section className="relative overflow-x-clip">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute left-1/2 top-[-120px] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl sm:h-[340px] sm:w-[340px]" />
            <div className="absolute right-[-100px] top-[140px] h-[240px] w-[240px] rounded-full bg-cyan-500/15 blur-3xl sm:right-[-40px] sm:h-[340px] sm:w-[340px]" />
            <div className="absolute bottom-[-80px] left-[-60px] h-[200px] w-[200px] rounded-full bg-violet-500/10 blur-3xl sm:h-[280px] sm:w-[280px]" />
          </div>

          <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pb-20 sm:pt-16 lg:pt-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,420px)]">
              <div className="min-w-0 text-center lg:text-left">
                <p className="mx-auto mb-4 inline-flex max-w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300 lg:mx-0">
                  Software Engineering Undergraduate • IT Intern Candidate
                </p>

                <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:mx-0 lg:text-6xl">
                  I&apos;m Nisith,
                  <br />
                  <span className="text-white">building clean digital products.</span>
                </h1>

                <div className="mt-4 min-h-[38px] text-lg font-medium text-zinc-300 sm:text-xl lg:text-2xl">
                  <span className="text-zinc-400">I am a </span>
                  <span className="bg-gradient-to-r from-fuchsia-400 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                    <TypewriterRotator words={rotatingRoles} />
                  </span>
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base lg:mx-0">
                  I build web and software solutions with a strong focus on clean UI, practical APIs,
                  and data-backed systems. This portfolio highlights my projects, skills, and academic
                  background in a format that is easy for internship recruiters to review.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <a
                    href="#projects"
                    className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90"
                  >
                    View Projects
                  </a>
                  <a
                    href="/Nisith_Saranga_CV.pdf"
                    className="rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-100 transition hover:border-white/30"
                  >
                    Download CV
                  </a>
                  <a
                    href="https://github.com/nisithSaranga"
                    className="rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-100 transition hover:border-white/30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  <InfoCard
                    label="Focus"
                    value="Full-stack projects & internship readiness"
                  />
                  <InfoCard
                    label="Stack"
                    value="Next.js • Node/Express • .NET • SQL Server"
                  />
                  <InfoCard
                    label="Location"
                    value="Sri Lanka (open to remote)"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <div className="mx-auto w-full max-w-sm">
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30">
                    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/30">
                      <img
                        src="/profile.png"
                        alt="Nisith Saranga"
                        className="aspect-[4/5] h-full w-full object-cover"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-medium text-white">Nisith Saranga</p>
                      <p className="mt-1 text-sm text-zinc-400">
                        Software Engineering undergraduate looking for IT internship opportunities.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
                          Full-stack
                        </span>
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
                          Problem solving
                        </span>
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
                          Internship ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About Me">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7">
            <p className="text-zinc-300 leading-7">
              I&apos;m Nisith Saranga, a Software Engineering undergraduate pursuing an IT internship.
              I enjoy building practical systems end-to-end: clean interfaces, structured backend logic,
              and reliable database-driven features. I care about readable code, clear documentation,
              and delivering work that feels complete and professional.
            </p>
          </div>
        </Section>

        <Section id="skills" title="My Skills" subtitle="Technologies I work with">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {skillItems.map((skill) => (
              <SkillMeterCard
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                color={skill.color}
                level={skill.level}
              />
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-5 md:grid-cols-2">
            <ProjectCard
              title="FixTrack – Vehicle Service Platform"
              desc="A full-stack platform for breakdown reporting, live tracking, and mechanic dispatch."
              tags={["Express.js", "Next.js", "Firebase"]}
              projectImages={["/fixtrack1.jpg", "/fixtrack2.jpg", "/fixtrack3.jpg"]}
              imageAlt="FixTrack project screenshots"
            />

            <ProjectCard
              title="SPC Pharmacy Network – Service-Oriented Web App"
              desc="Service-oriented web application for managing pharmacy operations and business workflows."
              tags={["ASP.NET Core", "React", "SQL Server"]}
              projectImages={["/soc1.jpg", "/soc2.jpg", "/soc3.jpg"]}
              imageAlt="SPC Pharmacy Network project screenshots"
            />

            <ProjectCard
              title="LuxeVista Resort – Mobile App"
              desc="Mobile app concept for resort browsing, booking support, and smoother user experience."
              tags={["Android Studio", "Java", "MySQL"]}
              projectImages={["/luxe1.jpg", "/luxe2.jpg"]}
              imageAlt="LuxeVista Resort project screenshots"
            />

            <ProjectCard
              title="FitZone Fitness Center – Web App"
              desc="Web application for fitness center operations and member-facing features."
              tags={["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"]}
              projectImages={["/fitzone1.jpg","/fitzone2.jpg","/fitzone3.jpg]"}
              imageAlt="FitZone Fitness Center project screenshots"
            />
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            More project breakdowns, repository links, and live previews can be added next.
          </p>
        </Section>

        <Section id="education" title="Education & Certifications">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-sm text-zinc-400">Certificate</p>
              <p className="mt-2 text-lg font-medium text-white">HND in Computing & Software Engineering</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <a href="/hnd1.jpg" target="_blank" rel="noreferrer" className="group">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <img
                      src="/hnd1.jpg"
                      alt="HND Certificate front"
                      className="h-64 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </a>

                <a href="/hnd2.jpg" target="_blank" rel="noreferrer" className="group">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <img
                      src="/hnd2.jpg"
                      alt="HND Certificate back"
                      className="h-64 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </a>
              </div>

              <p className="mt-4 text-sm text-zinc-300">
                Click either certificate to open the full image.
              </p>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-zinc-300">
              I&apos;m open to internship opportunities, project collaboration, and professional networking.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90"
                href="mailto:nisithsaranga13@gmail.com"
              >
                Email me
              </a>
              <a
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-100 transition hover:border-white/30"
                href="https://www.linkedin.com/in/nisith-saranga-0529732a5/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-100 transition hover:border-white/30"
                href="https://github.com/nisithSaranga"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Usually the fastest response will be through email or LinkedIn.
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-zinc-950 px-6">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-[16%] h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[18%] right-[12%] h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl shadow-black/40 backdrop-blur">
        <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5">
          <img
            src="/profile.png"
            alt="Nisith Saranga"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="mt-5 text-2xl font-semibold tracking-tight text-white">
          Nisith Saranga
        </p>

        <div className="mt-2 min-h-[28px] text-sm text-zinc-300">
          <TypewriterRotator words={rotatingRoles} />
        </div>

        <p className="mt-2 text-xs uppercase tracking-[0.28em] text-zinc-500">
          Loading portfolio
        </p>

        <div className="mt-7 h-[4px] w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-[nisithLoad_1.9s_ease-in-out_forwards] bg-gradient-to-r from-fuchsia-400 via-white to-cyan-400" />
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
      finishedTyping ? 1100 : deleting ? 45 : 80
    );

    return () => window.clearTimeout(timeout);
  }, [words, wordIndex, subIndex, deleting]);

  return (
    <span className="inline-flex items-center">
      {words[wordIndex].substring(0, subIndex)}
      <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-white/80" />
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
    <section id={id} className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-400" />
            <p className="mt-4 text-zinc-400">{subtitle}</p>
          </>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left shadow-lg shadow-black/10">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-2 font-medium leading-7 text-white">{value}</p>
    </div>
  );
}

function SkillMeterCard({
  icon: Icon,
  label,
  color,
  level,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
  level: number;
}) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-800/70 ring-1 ring-white/10">
        <Icon className={`text-4xl ${color}`} />
      </div>

      <p className="mt-4 text-lg font-semibold text-white">{label}</p>

      <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-400"
          style={{ width: `${level}%` }}
        />
      </div>
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

  useEffect(() => {
    setCurrentIndex(0);
    setFailedImages([]);
  }, [projectImages]);

  return (
    <div
      className="rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
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
      <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
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
                    <div className="flex h-full w-full items-center justify-center p-4 text-center text-sm text-zinc-400">
                      Failed to load: {img}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center p-4 text-center text-sm text-zinc-400">
              No images provided
            </div>
          )}

          {projectImages.length > 1 && (
            <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] text-zinc-200 backdrop-blur">
              Hover preview
            </div>
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
                currentIndex === index ? "w-6 bg-white" : "bg-zinc-600 hover:bg-zinc-400",
              ].join(" ")}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      )}

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}