"use client";

import { useRef, useState } from "react";
import type { IconType } from "react-icons";
import { DiAndroid } from "react-icons/di";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaChartLine,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiDotnet,
  SiPhp,
  SiFastapi,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTensorflow,
  SiNumpy,
  SiScikitlearn,
  SiPostman,
  SiGooglecolab,
  SiKaggle,
  SiJupyter,
  SiGithubactions,
  SiPandas,
  SiR,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
  type: string;
  description: string;
  features: string[];
};

const skills: Record<string, Skill> = {
  java: {
    name: "Java",
    icon: FaJava,
    color: "text-orange-700 dark:text-orange-400",
    type: "Programming language",
    description:
      "An object-oriented language for building applications using the Java platform.",
    features: ["Object-oriented", "JVM", "Applications"],
  },
  javascript: {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-700 dark:text-yellow-400",
    type: "Programming language",
    description:
      "A language for interactive web interfaces and server-side applications.",
    features: ["Web", "Events", "Async programming"],
  },
  typescript: {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600 dark:text-blue-400",
    type: "Programming language",
    description:
      "JavaScript with a type system that helps catch mistakes during development.",
    features: ["Static types", "JavaScript", "Tooling"],
  },
  python: {
    name: "Python",
    icon: FaPython,
    color: "text-blue-600 dark:text-blue-400",
    type: "Programming language",
    description:
      "A general-purpose language used for application development, automation, and data processing.",
    features: ["Automation", "Data", "Applications"],
  },
  csharp: {
    name: "C#",
    icon: TbBrandCSharp,
    color: "text-purple-700 dark:text-purple-400",
    type: "Programming language",
    description:
      "A strongly typed language used with .NET to build web, desktop, and other applications.",
    features: [".NET", "Static types", "Object-oriented"],
  },
  react: {
    name: "React",
    icon: FaReact,
    color: "text-cyan-700 dark:text-cyan-400",
    type: "UI library",
    description:
      "A library for building interfaces from reusable components, with state-driven updates.",
    features: ["Components", "State", "Interfaces"],
  },
  nextjs: {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-foreground",
    type: "React framework",
    description:
      "A React framework for building web applications with routing, rendering, and server-side features.",
    features: ["Routing", "Rendering", "React"],
  },
  html: {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-600 dark:text-orange-400",
    type: "Markup language",
    description:
      "The markup language used to structure web content with headings, forms, links, and semantic elements.",
    features: ["Structure", "Semantics", "Forms"],
  },
  css: {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-600 dark:text-blue-400",
    type: "Style sheet language",
    description:
      "The styling language used to control web layouts, colours, typography, and animations.",
    features: ["Layouts", "Responsive design", "Animation"],
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-700 dark:text-cyan-400",
    type: "CSS framework",
    description:
      "A utility-first CSS framework for composing responsive interfaces directly in markup.",
    features: ["Utilities", "Responsive styles", "Themes"],
  },
  bootstrap: {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-purple-700 dark:text-purple-400",
    type: "Frontend toolkit",
    description:
      "A toolkit providing a responsive grid, styling utilities, and reusable interface components.",
    features: ["Grid", "Components", "Responsive design"],
  },
  node: {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-700 dark:text-green-400",
    type: "JavaScript runtime",
    description:
      "A runtime for executing JavaScript outside the browser, including servers and development tools.",
    features: ["JavaScript", "Servers", "Async I/O"],
  },
  express: {
    name: "Express.js",
    icon: SiExpress,
    color: "text-foreground",
    type: "Backend framework",
    description:
      "A minimal Node.js framework for defining routes, middleware, and web APIs.",
    features: ["Routing", "Middleware", "APIs"],
  },
  dotnet: {
    name: ".NET",
    icon: SiDotnet,
    color: "text-purple-700 dark:text-purple-400",
    type: "Development platform",
    description:
      "A development platform with libraries and tooling for web, desktop, and other applications.",
    features: ["C#", "Libraries", "Applications"],
  },
  php: {
    name: "PHP",
    icon: SiPhp,
    color: "text-indigo-700 dark:text-indigo-400",
    type: "Server-side language",
    description:
      "A scripting language commonly used to handle web requests and generate dynamic page content.",
    features: ["Web", "Server-side", "Dynamic pages"],
  },
  fastapi: {
    name: "FastAPI",
    icon: SiFastapi,
    color: "text-teal-700 dark:text-teal-400",
    type: "Python API framework",
    description:
      "A framework for building APIs using Python type hints, request validation, and generated API documentation.",
    features: ["Python", "Validation", "OpenAPI"],
  },
  socket: {
    name: "Socket.IO",
    icon: SiSocketdotio,
    color: "text-foreground",
    type: "Communication library",
    description:
      "A library for bidirectional, event-based communication between clients and servers.",
    features: ["Events", "Real-time", "Client–server"],
  },
  mongodb: {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-700 dark:text-green-400",
    type: "Document database",
    description:
      "A database that stores data in flexible documents and supports querying and aggregation.",
    features: ["Documents", "Queries", "Aggregation"],
  },
  mysql: {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-700 dark:text-blue-400",
    type: "Relational database",
    description:
      "A relational database for organising structured data into tables and working with it through SQL.",
    features: ["SQL", "Tables", "Relations"],
  },
  sqlserver: {
    name: "SQL Server",
    icon: FaServer,
    color: "text-red-700 dark:text-red-400",
    type: "Relational database",
    description:
      "Microsoft’s relational database system for storing, querying, and managing structured data.",
    features: ["T-SQL", "Relations", "Transactions"],
  },
  firebase: {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-amber-700 dark:text-amber-400",
    type: "Application platform",
    description:
      "A platform offering managed services such as authentication, databases, hosting, and storage.",
    features: ["Authentication", "Databases", "Hosting"],
  },
  tensorflow: {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "text-orange-600 dark:text-orange-400",
    type: "Machine learning framework",
    description:
      "A framework for building, training, and running machine learning models.",
    features: ["Tensors", "Training", "Inference"],
  },
  tensorflowjs: {
    name: "TensorFlow.js",
    icon: SiTensorflow,
    color: "text-orange-600 dark:text-orange-400",
    type: "JavaScript ML library",
    description:
      "A library for training and running machine learning models in JavaScript, including in the browser.",
    features: ["JavaScript", "Browser ML", "Inference"],
  },
  numpy: {
    name: "NumPy",
    icon: SiNumpy,
    color: "text-blue-700 dark:text-blue-400",
    type: "Numerical computing library",
    description:
      "A Python library for multidimensional arrays and numerical operations.",
    features: ["Arrays", "Vectorisation", "Mathematics"],
  },
  sklearn: {
    name: "Scikit-learn",
    icon: SiScikitlearn,
    color: "text-orange-600 dark:text-orange-400",
    type: "Machine learning library",
    description:
      "A Python library providing tools for preprocessing, machine learning, and model evaluation.",
    features: ["Preprocessing", "Models", "Evaluation"],
  },
  matplotlib: {
    name: "Matplotlib",
    icon: FaChartLine,
    color: "text-blue-700 dark:text-blue-400",
    type: "Visualisation library",
    description:
      "A Python library for creating plots and customising data visualisations.",
    features: ["Charts", "Figures", "Data visualisation"],
  },
  github: {
    name: "Git & GitHub",
    icon: FaGithub,
    color: "text-foreground",
    type: "Version control & collaboration",
    description:
      "Git tracks code changes; GitHub hosts repositories and supports collaboration through pull requests and issues.",
    features: ["Commits", "Branches", "Code review"],
  },
  postman: {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-600 dark:text-orange-400",
    type: "API development tool",
    description:
      "A tool for sending API requests, inspecting responses, and organising API tests.",
    features: ["Requests", "Collections", "Testing"],
  },
  android: {
    name: "Android Studio",
    icon: DiAndroid,
    color: "text-green-700 dark:text-green-400",
    type: "Development environment",
    description:
      "An integrated development environment for building, debugging, and testing Android applications.",
    features: ["Android", "Emulator", "Debugging"],
  },
  colab: {
    name: "Google Colab",
    icon: SiGooglecolab,
    color: "text-amber-700 dark:text-amber-400",
    type: "Hosted notebook environment",
    description:
      "A browser-based notebook environment for writing and running Python code.",
    features: ["Python", "Notebooks", "Cloud runtime"],
  },
  kaggle: {
    name: "Kaggle Notebook",
    icon: SiKaggle,
    color: "text-sky-700 dark:text-sky-400",
    type: "Data science environment",
    description:
      "A hosted notebook environment for exploring datasets and running data science experiments.",
    features: ["Datasets", "Notebooks", "Experiments"],
  },
  jupyter: {
    name: "Jupyter Notebook",
    icon: SiJupyter,
    color: "text-orange-600 dark:text-orange-400",
    type: "Interactive notebook",
    description:
      "An environment combining executable code, explanatory text, and visual outputs in one document.",
    features: ["Code cells", "Markdown", "Visualisation"],
  },
    githubactions: {
    name: "GitHub Actions",
    icon: SiGithubactions,
    color: "text-blue-600 dark:text-blue-400",
    type: "Workflow automation",
    description:
      "A GitHub service for automating repository workflows, including building, testing, and deploying applications.",
    features: ["Workflows", "CI/CD", "Automation"],
  },
  pandas: {
    name: "Pandas",
    icon: SiPandas,
    color: "text-indigo-700 dark:text-indigo-400",
    type: "Data analysis library",
    description:
      "A Python library for cleaning, transforming, and analysing tabular data using DataFrames.",
    features: ["DataFrames", "Data cleaning", "Analysis"],
  },
  r: {
    name: "R",
    icon: SiR,
    color: "text-blue-600 dark:text-blue-400",
    type: "Programming language",
    description:
      "A language and environment for statistical computing, data analysis, and visualisation.",
    features: ["Statistics", "Data analysis", "Visualisation"],
  },
  rstudio: {
    name: "RStudio",
    icon: SiR,
    color: "text-blue-600 dark:text-blue-400",
    type: "Development environment",
    description:
      "An integrated development environment with tools for writing R code, inspecting data, and viewing plots.",
    features: ["R", "Data exploration", "Plots"],
  },
  aspnetcore: {
    name: "ASP.NET Core",
    icon: SiDotnet,
    color: "text-purple-700 dark:text-purple-400",
    type: "Web framework",
    description:
      "A .NET framework for building web applications and HTTP APIs with routing, middleware, and dependency injection.",
    features: ["Web APIs", "Middleware", "Dependency injection"],
  },
  docker: {
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-600 dark:text-blue-400",
    type: "Container platform",
    description:
      "A platform for packaging applications and their dependencies into images and running them as containers.",
    features: ["Images", "Containers", "Dockerfiles"],
  },
  kubernetes: {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "text-blue-600 dark:text-blue-400",
    type: "Container orchestration",
    description:
      "A system for managing containerised applications through deployments, networking, and scaling.",
    features: ["Pods", "Deployments", "Services"],
  },
};

const categories = [
  {
    id: "languages",
    label: "Languages",
    items: ["java", "javascript", "typescript", "python", "csharp", "r"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["react", "nextjs", "html", "css", "tailwind", "bootstrap"],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "node",
      "express",
      "dotnet",
      "aspnetcore",
      "php",
      "fastapi",
      "socket",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["mongodb", "mysql", "sqlserver", "firebase"],
  },
  {
    id: "ml",
    label: "ML & Data",
    items: [
      "tensorflow",
      "tensorflowjs",
      "numpy",
      "pandas",
      "sklearn",
      "matplotlib",
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    items: ["docker", "kubernetes", "githubactions"],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      "github",
      "postman",
      "android",
      "colab",
      "kaggle",
      "jupyter",
      "rstudio",
    ],
  },
];

const stripSkills = [
  "react",
  "nextjs",
  "typescript",
  "node",
  "python",
  "mongodb",
  "tensorflow",
  "github",
];

export function Skills() {
  const [categoryIndex, setCategoryIndex] = useState(1);
  const [selectedId, setSelectedId] = useState("nextjs");
  const [paused, setPaused] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const category = categories[categoryIndex];
  const selected = skills[selectedId];
  const SelectedIcon = selected.icon;

  function changeCategory(index: number) {
    setCategoryIndex(index);
    setSelectedId(categories[index].items[0]);
  }

  function handleTabKey(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % categories.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + categories.length) % categories.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = categories.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    changeCategory(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full scroll-mt-24 bg-background px-4 py-6 sm:py-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
            Skills
          </p>

          <h2
            id="skills-heading"
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl"
          >
            My technical{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
              toolkit
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted-text)]">
            Explore the languages, frameworks and tools I work with across the full-stack development.
          </p>
        </div>

        {/* Category tabs */}
      <div className="mt-9 overflow-x-auto pb-1">
        <div
            role="tablist"
            aria-label="Skill categories"
            className="relative grid min-w-[720px] border-b border-[var(--border)]"
            style={{
                gridTemplateColumns: `repeat(${categories.length}, minmax(0, 1fr))`,
            }}
            >
            {categories.map((item, index) => (
              <button
                key={item.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`skills-tab-${item.id}`}
                role="tab"
                type="button"
                aria-selected={categoryIndex === index}
                aria-controls={`skills-panel-${item.id}`}
                tabIndex={categoryIndex === index ? 0 : -1}
                onClick={() => changeCategory(index)}
                onKeyDown={(event) => handleTabKey(event, index)}
                className={[
                  "rounded-t-lg px-3 py-4 text-sm font-medium transition-colors",
                  "focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-cyan-500",
                  categoryIndex === index
                    ? "text-cyan-700 dark:text-cyan-400"
                    : "text-[var(--muted-text)] hover:text-foreground",
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}

            <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-[3px] px-4 transition-transform duration-300 ease-out"
                style={{
                    width: `${100 / categories.length}%`,
                    transform: `translateX(${categoryIndex * 100}%)`,
                }}
                >
                <span className="block h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </span>
          </div>
        </div>

        {/* Panels remain associated with their corresponding tabs */}
        {categories.map((item, index) => (
          <div
            key={item.id}
            id={`skills-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`skills-tab-${item.id}`}
            hidden={categoryIndex !== index}
          >
            {categoryIndex === index && (
              <div className="skills-panel-enter mt-6 grid items-stretch gap-5 lg:grid-cols-[1.65fr_1fr]">
                {/* Technology tiles */}
                <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {category.items.map((id) => {
                    const skill = skills[id];
                    const Icon = skill.icon;
                    const active = selectedId === id;

                    return (
                      <button
                        key={id}
                        type="button"
                        aria-pressed={active}
                        aria-controls="skill-description"
                        onClick={() => setSelectedId(id)}
                        className={[
                          "flex min-h-[140px] flex-col items-center justify-center gap-4 rounded-2xl border p-4 sm:min-h-[165px]",
                          "transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500",
                          "motion-safe:hover:-translate-y-1",
                          active
                            ? "border-cyan-500 bg-[var(--accent-soft)] shadow-[0_0_20px_rgba(6,182,212,0.10)]"
                            : "border-[var(--border)] bg-[var(--surface)] hover:border-cyan-600/60 dark:hover:border-cyan-400/50",
                        ].join(" ")}
                      >
                        <Icon
                          aria-hidden="true"
                          className={`text-4xl sm:text-5xl ${skill.color}`}
                        />
                        <span className="text-center text-sm font-semibold text-foreground sm:text-base">
                          {skill.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected technology */}
                <aside
                  id="skill-description"
                  aria-live="polite"
                  aria-atomic="true"
                  className="min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7"
                >
                  <div key={selectedId} className="skills-detail-enter">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)]">
                        <SelectedIcon
                          aria-hidden="true"
                          className={`text-4xl ${selected.color}`}
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                          {selected.name}
                        </h3>
                        <p className="mt-2 text-xs font-medium text-cyan-700 dark:text-cyan-400">
                          {selected.type}
                        </p>
                      </div>
                    </div>

                    <div className="my-6 h-px bg-[var(--border)]" />

                    <p className="text-base leading-7 text-[var(--muted-text)]">
                      {selected.description}
                    </p>

                    <div className="my-6 h-px bg-[var(--border)]" />

                    <ul
                      aria-label="Key features"
                      className="flex flex-wrap gap-2"
                    >
                      {selected.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs text-foreground"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            )}
          </div>
        ))}

        {/* Moving technology strip */}
        <div className="mt-7 flex items-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <div
            className="skills-marquee-window min-w-0 flex-1 overflow-hidden py-5"
            aria-label="Featured technologies"
          >
            <div
              className="skills-marquee-track flex w-max"
              style={{
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className="flex shrink-0 items-center gap-8 pr-8"
                >
                  {stripSkills.map((id) => {
                    const skill = skills[id];
                    const Icon = skill.icon;

                    return (
                      <li
                        key={id}
                        className="flex shrink-0 items-center gap-3"
                      >
                        <Icon
                          aria-hidden="true"
                          className={`text-2xl ${skill.color}`}
                        />
                        <span className="whitespace-nowrap text-xs font-medium text-foreground">
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>

          <div className="shrink-0 border-l border-[var(--border)] px-3">
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-label={
                paused ? "Resume technology animation" : "Pause technology animation"
              }
              aria-pressed={paused}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-foreground transition hover:border-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
            >
              {paused ? (
                <HiOutlinePlay aria-hidden="true" className="text-xl" />
              ) : (
                <HiOutlinePause aria-hidden="true" className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}