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
    try {
      const key = "nisith_portfolio_loader_seen";
      const seen = sessionStorage.getItem(key);

      if (!seen) {
        setShowLoader(true);
        sessionStorage.setItem(key, "1");

        const t = window.setTimeout(() => {
          setShowLoader(false);
        }, 1600);

        return () => window.clearTimeout(t);
      }
    } catch {
      setShowLoader(false);
    } finally {
      setMounted(true);
    }
  }, []);

  return (
    <>
      {showLoader && <Preloader />}

      <main
        className={[
          "min-h-screen bg-zinc-950 text-zinc-100 transition-opacity duration-700",
          showLoader ? "opacity-0" : "opacity-100",
          mounted ? "" : "opacity-0",
        ].join(" ")}
      >
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

        <section className="relative">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute left-1/2 top-[-120px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-fuchsia-500/25 blur-3xl" />
            <div className="absolute right-[-120px] top-[140px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">
                  Software Engineering Undergraduate • IT Intern Candidate
                </p>

                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  I&apos;m Nisith, a Full stack Developer...
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

              <div className="lg:col-span-4">
                <div className="mx-auto w-full max-w-sm">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <img
                        src="/profile.png"
                        alt="Nisith Saranga"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">
                      Tip: use a clean headshot, good lighting, neutral background.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About">
          <p className="text-zinc-300">
            I’m Nisith Saranga, a software engineering undergraduate pursuing an IT internship.
            I enjoy building practical systems end-to-end: clean UI, solid APIs, and data-backed features.
            I care about readable code, clear documentation, and shipping complete work.
          </p>
        </Section>

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

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            <ProjectCard
              title="FixTrack – Vehicle Service Platform"
              desc="a full-stack platform for breakdown reporting, live tracking & mechanic dispatch. "
              tags={["Node.js", "Next.js", "Firebase"]}
              projectImages={["/fixtrack1.jpg", "/fixtrack2.jpg", "/fixtrack3.jpg"]}
              imageAlt="FixTrack project screenshots"
            />

            <ProjectCard
              title="SPC Pharmacy Network – Service-Oriented Web App"
              desc="Service-oriented web application for managing pharmacy operations and workflows."
              tags={["ASP.NET Core", "React", "SQL Server"]}
              projectImages={["/soc1.jpg", "/soc2.jpg", "/soc3.jpg"]}
              imageAlt="SPC Pharmacy Network project screenshots"
            />

            <ProjectCard
              title="LuxeVista Resort – Mobile App"
              desc="Mobile app concept for resort browsing, booking support, and user experience."
              tags={["Android Studio", "Java", "MySQL"]}
              projectImages={["/luxe1.jpg", "/luxe2.jpg"]}
              imageAlt="LuxeVista Resort project screenshot"
            />

            <ProjectCard
              title="FitZone Fitness Center – Web App"
              desc="Web application for fitness center operations and member-facing features."
              tags={["Web", "CRUD", "Forms"]}
              projectImages={["/fitzone.jpg"]}
              imageAlt="FitZone Fitness Center project screenshot"
            />
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            Next: I’ll add screenshots, repo/demo links, and short case studies for each project.
          </p>
        </Section>

        <Section id="education" title="Education & Certification">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-zinc-400">Certificate</p>
              <p className="mt-2 font-medium">HND Certificate</p>

              <div className="mt-4 grid md:grid-cols-2 gap-6">
                <a href="/hnd1.jpg" target="_blank">
                  <img
                    src="/hnd1.jpg"
                    className="w-full max-h-72 object-contain rounded-xl border border-white/10 hover:scale-105 transition"
                  />
                </a>

                <a href="/hnd2.jpg" target="_blank">
                  <img
                    src="/hnd2.jpg"
                    className="w-full max-h-72 object-contain rounded-xl border border-white/10 hover:scale-105 transition"
                  />
                </a>
              </div>

              <p className="mt-3 text-sm text-zinc-300">
                Click a certificate to view full size
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
              <a
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:opacity-90"
                href="mailto:nisithsaranga13@gmail.com"
              >
                Email me
              </a>
              <a
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-white/30"
                href="https://www.linkedin.com/in/nisith-saranga-0529732a5/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm hover:border-white/30"
                href="https://github.com/nisithSaranga"
                target="_blank"
                rel="noreferrer"
              >
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

        <div className="mt-8 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-[nisithLoad_1.4s_ease-in-out_forwards] bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400" />
        </div>

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
          <li
            key={x}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-zinc-200"
          >
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
  const [isHovered, setIsHovered] = useState(false);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  useEffect(() => {
    if (!isHovered || projectImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectImages.length);
    }, 1200);

    return () => window.clearInterval(interval);
  }, [isHovered, projectImages.length]);

  useEffect(() => {
    setCurrentIndex(0);
    setFailedImages([]);
  }, [projectImages]);

  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentIndex(0);
      }}
    >
      <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/30">
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
                currentIndex === index ? "bg-white" : "bg-zinc-600 hover:bg-zinc-400",
              ].join(" ")}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      )}

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
