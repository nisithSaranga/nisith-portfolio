export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
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
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">
            Software Engineering Undergraduate • IT Intern Candidate
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Nisith Saranga — full-stack projects, clean UI, practical systems.
          </h1>

          <p className="mt-6 max-w-2xl text-zinc-300">
            I build web and software solutions using modern stacks. Here are my projects,
            skills, and education — optimized for internship selection boards: clear, real,
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
      </section>

      {/* Sections */}
      <Section id="about" title="About">
        <p className="text-zinc-300">
          I’m Nisith Saranga, a software engineering undergraduate pursuing an IT internship.
          I enjoy building practical systems end-to-end: clean UI, solid APIs, and data-backed features.
          I care about readable code, clear documentation, and shipping complete work.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid gap-3 sm:grid-cols-2">
          <SkillCard title="Languages" items={["JavaScript/TypeScript", "C#", "Java", "SQL"]} />
          <SkillCard title="Frontend" items={["Next.js / React", "HTML/CSS", "Tailwind"]} />
          <SkillCard title="Backend" items={["Node.js / Express", "ASP.NET Core", "REST APIs"]} />
          <SkillCard title="Database & Tools" items={["SQL Server", "Git/GitHub", "Postman"]} />
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-4 md:grid-cols-2">
          <ProjectCard
            title="FixTrack – Vehicle Service Platform"
            desc="Final-year project platform for booking, tracking, and managing vehicle services."
            tags={["Next.js", "APIs", "Database"]}
          />
          <ProjectCard
            title="SPC Pharmacy Network – Service-Oriented Web App"
            desc="Service-oriented web application for managing pharmacy operations and workflows."
            tags={["Web App", "Services", "SQL"]}
          />
          <ProjectCard
            title="LuxeVista Resort – Mobile App"
            desc="Mobile app concept for resort browsing, booking support, and user experience."
            tags={["Mobile", "UI/UX", "App"]}
          />
          <ProjectCard
            title="FitZone Fitness Center – Web App"
            desc="Web application for fitness center operations and member-facing features."
            tags={["Web", "CRUD", "Forms"]}
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

function ProjectCard({
  title,
  desc,
  tags,
}: {
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20">
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
