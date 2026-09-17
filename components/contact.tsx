import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nisith-saranga-0529732a5/",
    icon: FaLinkedinIn,
    hoverClass:
      "hover:border-[#0a66c2]/70 hover:text-[#0a66c2] dark:hover:text-[#5ba7e8]",
  },
  {
    label: "GitHub",
    href: "https://github.com/nisithSaranga",
    icon: FaGithub,
    hoverClass:
      "hover:border-cyan-500/60 hover:text-cyan-700 dark:hover:text-cyan-300",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/94712698980",
    icon: FaWhatsapp,
    hoverClass:
      "hover:border-emerald-500/60 hover:text-emerald-600 dark:hover:text-emerald-400",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full scroll-mt-24 bg-background py-6 sm:py-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(380px,500px)] lg:gap-14">
        {/* Invitation */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
            Contact
          </p>

          <h2
            id="contact-heading"
            className="mt-4 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-5xl"
          >
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
              meaningful
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-text)]">
            I&apos;m open to internship opportunities, collaborations, and
            professional connections.
          </p>
        </div>

        {/* Contact actions */}
        <div className="lg:border-l lg:border-[var(--border)] lg:pl-12">
          {/* Main email action */}
          <a
            href="mailto:nisithsaranga13@gmail.com"
            className="group flex w-full cursor-pointer items-center justify-between rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/15 transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500 sm:text-base"
          >
            <span className="flex items-center gap-3">
              <FaEnvelope aria-hidden="true" className="text-xl" />
              Send an email
            </span>

            <HiArrowRight
              aria-hidden="true"
              className="text-xl transition-transform group-hover:translate-x-1"
            />
          </a>

          <p className="mt-3 text-center text-sm text-[var(--muted-text)]">
            nisithsaranga13@gmail.com
          </p>

          {/* Social links */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {socialLinks.map(
              ({ label, href, icon: Icon, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit my ${label} profile`}
                  className={[
                    "group flex min-h-24 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl",
                    "border border-[var(--border)] bg-[var(--surface)] text-foreground",
                    "transition duration-300 hover:-translate-y-1",
                    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-500",
                    hoverClass,
                  ].join(" ")}
                >
                  <Icon
                    aria-hidden="true"
                    className="text-2xl transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="text-xs font-medium sm:text-sm">
                    {label}
                  </span>
                </a>
              )
            )}
          </div>

          <p className="mt-5 text-center text-xs text-[var(--muted-text)]">
            Best reached by email or LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
}