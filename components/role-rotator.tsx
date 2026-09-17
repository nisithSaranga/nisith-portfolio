"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Tech Explorer",
];

export function RoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const finishedTyping =
      !deleting && characterIndex === currentRole.length;
    const finishedDeleting = deleting && characterIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (finishedTyping) {
          setDeleting(true);
          return;
        }

        if (finishedDeleting) {
          setDeleting(false);
          setRoleIndex((current) => (current + 1) % roles.length);
          return;
        }

        setCharacterIndex((current) =>
          deleting ? current - 1 : current + 1
        );
      },
      finishedTyping ? 1400 : deleting ? 40 : 75
    );

    return () => window.clearTimeout(timeout);
  }, [roleIndex, characterIndex, deleting]);

  return (
    <>
      <span className="sr-only">
        Full Stack Developer, AI/ML Enthusiast and Tech Explorer
      </span>
      <span
        aria-hidden="true"
        className="inline-flex min-h-[1.25em] items-center"
        >
        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
            {roles[roleIndex].slice(0, characterIndex)}
        </span>

        <span className="ml-1.5 inline-block h-[1em] w-[2px] animate-pulse bg-gradient-to-b from-cyan-400 to-blue-600" />
        </span>
    </>
  );
}