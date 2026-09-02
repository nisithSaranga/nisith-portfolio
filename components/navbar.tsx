"use client";

import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#070b14]/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center px-4">
        <a
          href="#"
          onClick={closeMenu}
          className="text-xl font-bold tracking-[-0.04em] text-zinc-950 dark:text-white"
          aria-label="Go to the top of the page"
        >
          NS<span className="text-blue-600 dark:text-blue-400">.</span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-7 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-6">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-xl text-zinc-700 transition hover:border-blue-400 hover:text-blue-600 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-blue-400/60 dark:hover:text-blue-300"
          >
            {mobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-[#070b14]"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-blue-50 hover:text-blue-700 dark:text-zinc-200 dark:hover:bg-white/5 dark:hover:text-blue-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}