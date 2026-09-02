"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className="block h-10 w-10 rounded-full border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-blue-400/60 dark:hover:text-blue-300"
    >
      {isDark ? (
        <HiOutlineSun className="text-lg" />
      ) : (
        <HiOutlineMoon className="text-lg" />
      )}
    </button>
  );
}