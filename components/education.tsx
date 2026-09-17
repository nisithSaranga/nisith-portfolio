import {
  HiOutlineAcademicCap,
  HiOutlineExternalLink,
} from "react-icons/hi";

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

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="w-full scroll-mt-24 bg-background pt-6 pb-16 sm:pt-8 sm:pb-20"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
            Learning and growth
          </p>

          <h2
            id="education-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl"
          >
            Education &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
              certifications
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted-text)]">
            A snapshot of my academic journey and professional certifications.
          </p>
        </div>

        {/* Split layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Education timeline */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]">
                <HiOutlineAcademicCap
                  aria-hidden="true"
                  className="text-xl text-cyan-700 dark:text-cyan-400"
                />
              </span>

              <h3 className="text-lg font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-[5px] top-6 w-px bg-[var(--border)]"
              />

              {/* BSc */}
              <article className="relative flex gap-5 pb-8">
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
                    Cardiff Metropolitan University
                  </p>
                </div>
              </article>

              {/* HND */}
              <article className="relative flex gap-5">
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-2 h-[11px] w-[11px] shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.35)]"
                />

                <div className="min-w-0">
                  <h4 className="text-base font-semibold leading-6 text-foreground sm:text-lg">
                    HND in Computing &amp; Software Engineering
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted-text)]">
                    Cardiff Metropolitan University
                  </p>

                  <a
                    href="/hnd1.jpg"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-700 transition hover:text-blue-600 dark:text-cyan-400 dark:hover:text-blue-400"
                  >
                    View certificate
                    <HiOutlineExternalLink aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]">
                <span
                  aria-hidden="true"
                  className="h-3 w-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600"
                />
              </span>

              <h3 className="text-lg font-semibold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((certification) => (
                <article
                  key={certification.title}
                  className="group flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/60 sm:flex-row sm:items-center"
                >
                  {/* Organisation logo */}
                  <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white p-2">
                    <img
                      src={certification.logo}
                      alt={certification.logoAlt}
                      width={80}
                      height={64}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-semibold leading-6 text-foreground">
                      {certification.title}
                    </h4>

                    <p className="mt-1 text-sm font-medium text-cyan-700 dark:text-cyan-400">
                      {certification.issuer}
                    </p>

                    <p className="mt-1 text-xs text-[var(--muted-text)]">
                      Issued {certification.issued}
                    </p>

                    {certification.credentialId && (
                      <p className="mt-1 break-all text-xs text-[var(--muted-text)]">
                        Credential ID: {certification.credentialId}
                      </p>
                    )}

                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-cyan-700 transition hover:text-blue-600 dark:text-cyan-400 dark:hover:text-blue-400"
                    >
                      View credential
                      <HiOutlineExternalLink aria-hidden="true" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}