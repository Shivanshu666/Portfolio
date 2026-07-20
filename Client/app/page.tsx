"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";

// ─── Hero code block, typed out character by character ─────────
const CODE_SEGMENTS = [
  { text: "// Shivanshu Prajapati · Full Stack Developer\n", cls: "comment" },
  { text: "const ", cls: "keyword" },
  { text: "engineer", cls: "function" },
  { text: " = {\n  name: ", cls: "" },
  { text: "'Shivanshu Prajapti'", cls: "string" },
  { text: ",\n  title: ", cls: "" },
  { text: "'Full-Stack Architect'", cls: "string" },
  { text: ",\n  location: ", cls: "" },
  { text: "'Chhattishgarh, India'", cls: "string" },
  { text: ",\n  experience: ", cls: "" },
  { text: "'1 years'", cls: "string" },
  { text: ",\n  stack: [", cls: "" },
  { text: "'React'", cls: "string" },
  { text: ", ", cls: "" },
  { text: "'Node'", cls: "string" },
  { text: ", ", cls: "" },
  { text: "'Next'", cls: "string" },
  { text: ", ", cls: "" },
  { text: "'Typescript'", cls: "string" },
  { text: "],\n  ", cls: "" },
  { text: "build", cls: "function" },
  { text: ": ", cls: "" },
  { text: "function", cls: "keyword" },
  { text: "() {\n    ", cls: "" },
  { text: "return ", cls: "keyword" },
  { text: "'scalable, robust systems'", cls: "string" },
  { text: ";\n  }\n};", cls: "" },
];
const CODE_LENGTH = CODE_SEGMENTS.reduce((n, s) => n + s.text.length, 0);

const HERO_TAGS = ["React", "Next.js", "Node", "TypeScript", "Kubernetes", "Go"];

// ─── Mock API (replace with your real endpoint) ────────────────
const fetchProjects = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return [
    {
      id: 1,
      title: "TaskFlow — AI Task Manager",
      description:
        "Full‑stack productivity app that learns how you work. TensorFlow.js models run on‑device to rank your day by urgency, energy level, and deadlines — no data ever leaves the browser. Built with Next.js server actions, Prisma, and PostgreSQL.",
      tech: ["Next.js", "TensorFlow.js", "Prisma", "PostgreSQL", "Tailwind"],
      link: "https://taskflow-demo.vercel.app",
      github: "https://github.com/shivanshu/taskflow",
      status: "Live",
      year: "2025",
      category: "Full‑Stack · AI",
      stats: [
        { label: "Active users", value: "2.4k" },
        { label: "Lighthouse", value: "99" },
        { label: "Uptime", value: "99.9%" },
      ],
      featured: true,
    },
    {
      id: 2,
      title: "PulseBoard",
      description:
        "Real‑time analytics dashboard streaming 50k+ events/min over WebSockets. D3 visualizations stay at 60fps thanks to canvas rendering and TanStack Query cache windows.",
      tech: ["React", "WebSockets", "D3", "TanStack Query"],
      link: "https://pulseboard-demo.vercel.app",
      github: "https://github.com/shivanshu/pulseboard",
      status: "Live",
      year: "2025",
      category: "Data Viz",
      featured: false,
    },
    {
      id: 3,
      title: "HelmScope",
      description:
        "Kubernetes operator written in Go with a React control plane. One-click canary deploys, automatic rollbacks, and live pod health across multi‑cluster setups.",
      tech: ["Go", "Kubernetes", "React", "TypeScript"],
      link: "https://helmscope.dev",
      github: "https://github.com/shivanshu/helmscope",
      status: "Beta",
      year: "2024",
      category: "DevOps",
      featured: false,
    },
    {
      id: 4,
      title: "ShopStream Commerce",
      description:
        "Headless e‑commerce storefront with edge‑rendered product pages, Stripe checkout, and Redis‑backed cart sessions. Sub‑second LCP on 3G networks.",
      tech: ["Next.js", "Stripe", "Redis", "GraphQL"],
      link: "https://shopstream-demo.vercel.app",
      github: "https://github.com/shivanshu/shopstream",
      status: "Live",
      year: "2024",
      category: "E‑Commerce",
      featured: false,
    },
    {
      id: 5,
      title: "DevLink Chat",
      description:
        "Slack‑style messaging for dev teams with threaded code snippets, syntax highlighting, and GitHub PR previews. Socket.io rooms with optimistic UI updates.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "https://devlink-chat.vercel.app",
      github: "https://github.com/shivanshu/devlink",
      status: "Beta",
      year: "2025",
      category: "Real‑time",
      featured: false,
    },
    {
      id: 6,
      title: "SnapDocs API",
      description:
        "Documentation generator that turns OpenAPI specs into beautiful, searchable docs sites. Powers docs for 30+ open source projects.",
      tech: ["TypeScript", "Node.js", "Algolia", "Vite"],
      link: "https://snapdocs.dev",
      github: "https://github.com/shivanshu/snapdocs",
      status: "Live",
      year: "2024",
      category: "Dev Tools",
      featured: false,
    },
    {
      id: 7,
      title: "Open Source Work",
      description:
        "Active contributor to TanStack Query, Next.js, and Tailwind CSS — 40+ merged PRs across bug fixes, docs, and performance patches.",
      tech: ["Open Source", "TypeScript", "React"],
      link: "https://github.com/shivanshu",
      github: "https://github.com/shivanshu",
      status: "Ongoing",
      year: "2024 – Now",
      category: "Community",
      featured: false,
    },
  ];
};

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind", icon: "🎨" },
  { name: "GraphQL", icon: "📊" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "🔀" },
  { name: "Figma", icon: "🎯" },
];
  const tripledStack = [...technologies, ...technologies, ...technologies];


export default function SoftwareEngineerPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5,
  });

  // ─── Typewriter for the hero code block ───────────────────────
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedCount(CODE_LENGTH);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      // type in small uneven bursts so it feels human, not metronomic
      i = Math.min(i + 1 + ((i * 7) % 3), CODE_LENGTH);
      setTypedCount(i);
      if (i < CODE_LENGTH) timer = setTimeout(tick, 14 + ((i * 13) % 40));
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  // ─── Cursor spotlight + card tilt (desktop only) ──────────────
  useEffect(() => {
    const hero = heroRef.current;
    const card = cardRef.current;
    if (!hero || window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const heroRect = hero.getBoundingClientRect();
        hero.style.setProperty("--spot-x", `${e.clientX - heroRect.left}px`);
        hero.style.setProperty("--spot-y", `${e.clientY - heroRect.top}px`);
        if (card) {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left - r.width / 2) / r.width;
          const py = (e.clientY - r.top - r.height / 2) / r.height;
          const near =
            e.clientX > r.left - 120 &&
            e.clientX < r.right + 120 &&
            e.clientY > r.top - 120 &&
            e.clientY < r.bottom + 120;
          card.style.transform = near
            ? `perspective(900px) rotateY(${px * 6}deg) rotateX(${py * -6}deg)`
            : "perspective(900px) rotateY(0deg) rotateX(0deg)";
        }
      });
    };
    hero.addEventListener("mousemove", handleMove);
    return () => {
      hero.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // ─── Scroll listener & Intersection Observer ──────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    // Reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));

    // Mobile menu toggle (no inline script)
    const toggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    if (toggle && mobileMenu) {
      const handleToggle = () => mobileMenu.classList.toggle("hidden");
      toggle.addEventListener("click", handleToggle);
      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center relative overflow-hidden hero-pattern hero-spotlight pt-20 sm:pt-24"
      >
     

        {/* faint drifting grid + aurora blobs */}
        <div className="hero-grid absolute inset-0" aria-hidden="true"></div>
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#00e5ff]/10 blur-3xl float-shape aurora"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#00e5ff]/10 blur-3xl float-shape-2 aurora-2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#00e5ff]/10 orbit-ring">
          <span className="orbit-dot" aria-hidden="true"></span>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-[#00e5ff]/10 orbit-ring orbit-ring-reverse">
          <span className="orbit-dot orbit-dot-sm" aria-hidden="true"></span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
         

              <h1 className=" software text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                <span className="word-mask">
                  <span className="word-reveal" style={{ animationDelay: "0.15s" }}>
                    <span className="text-white">Senior&nbsp;</span>
                    <span className="gradient-blue gradient-animate font-mono">
                      Software
                    </span>
                  </span>
                </span>
                <span className="word-mask">
                  <span className="word-reveal" style={{ animationDelay: "0.32s" }}>
                    <span className="text-white">Engineer</span>
                    <span className="gradient-cyan">.</span>
                  </span>
                </span>
              </h1>

              <p
                className="hero-enter text-base sm:text-lg text-white/60 max-w-lg leading-relaxed"
                style={{ animationDelay: "0.55s" }}
              >
                I architect full‑stack solutions with a focus on performance, clean
                code, and developer experience. 8+ years of shipping products used by
                millions.
              </p>

              <div
                className="hero-enter flex flex-wrap gap-3 sm:gap-4 pt-2"
                style={{ animationDelay: "0.68s" }}
              >
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#00e5ff] text-white font-medium hover:bg-[#00b3c6] transition-all shadow-xl shadow-[#00e5ff]/20 hover:shadow-2xl hover:shadow-[#00e5ff]/40 hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-base group"
                >
                  Let's build
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 text-white/80 hover:border-[#00e5ff] hover:text-white hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm sm:text-base group"
                >
                  View my work
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
              </div>

              {/* <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                {HERO_TAGS.map((tag, i) => (
                  <span
                    key={tag}
                    className="skill-tag tag-pop"
                    style={{ animationDelay: `${0.85 + i * 0.07}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </div>

            {/* right: code block, typed live + cursor tilt */}
            <div
              className="hero-enter relative flex justify-center lg:justify-end"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-full max-w-md">
                <div ref={cardRef} className="tilt-card">
                  <div className="code-block code-glow overflow-x-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-xs text-white/40 ml-2 font-mono">
                        portfolio.ts
                      </span>
                    </div>
                    <pre className="text-xs sm:text-sm whitespace-pre-wrap break-words min-h-[13.5em]">
                      {(() => {
                        let remaining = typedCount;
                        return CODE_SEGMENTS.map((seg, i) => {
                          if (remaining <= 0) return null;
                          const slice = seg.text.slice(0, remaining);
                          remaining -= seg.text.length;
                          return (
                            <span key={i} className={seg.cls || undefined}>
                              {slice}
                            </span>
                          );
                        });
                      })()}
                      <span
                        className={`type-cursor ${
                          typedCount >= CODE_LENGTH ? "type-cursor-done" : ""
                        }`}
                        aria-hidden="true"
                      ></span>
                    </pre>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-4 text-white/40 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>{" "}
                    Available for work
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 2.997-.403 1.017.003 2.037.136 2.997.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.242 2.86.118 3.16.768.84 1.236 1.911 1.236 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>github.com/alexrivera</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="scroll-line" aria-hidden="true"></span>
        </div>
      </section>

{/* // teck stack  */}
      <section>
 {/* ─── TECH STACK (integrated with hero) ───────────────────── */}
 <div className="w-full overflow-hidden relative py-4">
      <div className="flex gap-6 animate-scroll-left w-max">
        {tripledStack.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-md text-slate-700 text-sm whitespace-nowrap shadow-sm glow-pulse"
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>

      </section>

    {/* 2nd section  */}
      <section id="about" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left space-y-6">
           
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
                <span className="text-white">Code that </span>
                <span className="gradient-blue font-mono">scales</span>
                <span className="text-white">,</span>
                <br />
                <span className="text-white">teams that </span>
                <span className="gradient-cyan">thrive</span>
              </h2>
              <div className="w-16 h-1 bg-[#00e5ff] rounded"></div>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                I believe great engineering is a blend of{" "}
                <strong className="text-white">technical excellence</strong> and{" "}
                <strong className="text-white">human collaboration</strong>. I've led
                teams, architected microservices, and contributed to open source
                projects used by thousands.
              </p>
              <p className="text-white/60 leading-relaxed">
                From fintech to healthtech, I bring a product‑minded approach to every
                line of code, ensuring performance, reliability, and developer joy.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/5">
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    8<span className="text-[#00e5ff]">+</span>
                  </p>
                  <p className="text-xs sm:text-sm text-white/40">Years of experience</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/5">
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    15<span className="text-[#00e5ff]">+</span>
                  </p>
                  <p className="text-xs sm:text-sm text-white/40">Projects shipped</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/5">
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    12M<span className="text-[#00e5ff]">+</span>
                  </p>
                  <p className="text-xs sm:text-sm text-white/40">Users impacted</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/5">
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    4<span className="text-[#00e5ff]">×</span>
                  </p>
                  <p className="text-xs sm:text-sm text-white/40">
                    Open source contributor
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-right relative">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#00e5ff]/10 border border-white/5">
                  <div className="w-full h-full bg-gradient-to-br from-[#141a24] to-[#0b0e14] flex items-center justify-center p-6 sm:p-12">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#00e5ff]/10 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 text-[#00e5ff]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      <blockquote className="text-lg sm:text-xl font-mono italic text-white/80 leading-relaxed">
                        "Alex writes code that's not only efficient but a joy to read.
                        A true force multiplier."
                      </blockquote>
                      <div>
                        <p className="font-semibold text-white">— Dr. Sarah Chen, CTO</p>
                        <p className="text-sm text-white/40">HealthTech Innovations</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#00e5ff]/5 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[#5ce1ff]/5 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ───────────────────────────────────────────────── */}
      <section id="skills" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal">
            <span className="text-[#00e5ff] text-sm font-semibold tracking-[0.15em] uppercase">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
              <span className="text-white">Tech stack & </span>
              <span className="gradient-cyan font-mono">tools</span>
            </h2>
            <div className="w-16 h-1 bg-[#00e5ff] rounded mx-auto mt-4"></div>
            <p className="text-white/60 mt-6 leading-relaxed">
              A modern, battle‑tested toolchain for building resilient applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                name: "Frontend",
                items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
              },
              {
                name: "Backend",
                items: ["Node.js", "Go", "Python", "GraphQL", "REST"],
              },
              {
                name: "DevOps",
                items: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"],
              },
              {
                name: "Other",
                items: [
                  "TanStack Query",
                  "Prisma",
                  "PostgreSQL",
                  "Redis",
                  "WebSockets",
                ],
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="glass rounded-3xl p-6 sm:p-8 card-hover reveal"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="skill-tag text-xs px-3 py-1.5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ────────────────────────────────────────────── */}
      <section id="projects" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* ambient glow behind the section */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#00e5ff]/5 blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-[#7b61ff]/5 blur-3xl pointer-events-none" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16 reveal">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[#00e5ff] text-sm font-semibold tracking-[0.15em] uppercase">
                <span className="w-8 h-px bg-[#00e5ff]" aria-hidden="true"></span>
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                <span className="text-white">Featured </span>
                <span className="gradient-blue font-mono">projects</span>
              </h2>
              <p className="text-white/60 mt-4 leading-relaxed">
                Each project reflects a commitment to quality, scalability, and user
                delight.
              </p>
            </div>
            <a
              href="/work"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/70 hover:border-[#00e5ff]/50 hover:text-white transition-all text-sm group shrink-0"
            >
              All projects
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {isLoading && (
            <div className="space-y-6 sm:space-y-8">
              <div className="project-skeleton rounded-3xl h-72 sm:h-80"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="project-skeleton rounded-3xl h-64" style={{ animationDelay: `${i * 0.15}s` }}></div>
                ))}
              </div>
            </div>
          )}
          {error && (
            <div className="text-center py-12 text-red-400">
              <p>Failed to load projects. Please try again later.</p>
            </div>
          )}
          {!isLoading && !error && projects && (() => {
            const featured = projects.find((p) => p.featured) ?? projects[0];
            const rest = projects.filter((p) => p.id !== featured.id);
            return (
              <div className="space-y-6 sm:space-y-8">
                {/* ── Spotlight: featured project ── */}
                <article className="project-featured group relative rounded-3xl overflow-hidden reveal">
                  <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center">
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="project-status project-status-live">
                          <span className="status-dot" aria-hidden="true"></span>
                          {featured.status}
                        </span>
                        <span className="text-white/30 text-xs font-mono uppercase tracking-widest">
                          {featured.category} · {featured.year}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {featured.title}
                      </h3>

                      <p className="text-white/60 leading-relaxed text-sm sm:text-base max-w-lg">
                        {featured.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {featured.tech.map((tech) => (
                          <span key={tech} className="skill-tag">{tech}</span>
                        ))}
                      </div>

                      {featured.stats && (
                        <div className="grid grid-cols-3 gap-3 pt-2 max-w-sm">
                          {featured.stats.map((s) => (
                            <div key={s.label} className="rounded-2xl bg-white/[0.03] border border-white/5 px-3 py-3 text-center">
                              <p className="text-lg sm:text-xl font-bold text-white font-mono">{s.value}</p>
                              <p className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">{s.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a
                          href={featured.link}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00e5ff] text-[#0b0e14] font-semibold text-sm hover:bg-[#5ce1ff] transition-all shadow-lg shadow-[#00e5ff]/20 hover:shadow-[#00e5ff]/40 hover:-translate-y-0.5"
                        >
                          Live demo
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a
                          href={featured.github}
                          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 2.997-.403 1.017.003 2.037.136 2.997.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.242 2.86.118 3.16.768.84 1.236 1.911 1.236 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          Source code
                        </a>
                      </div>
                    </div>

                    {/* mock browser preview */}
                    <div className="relative hidden lg:block">
                      <div className="project-preview rounded-2xl border border-white/10 bg-[#141a24] overflow-hidden shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                          <span className="ml-3 flex-1 text-center">
                            <span className="inline-block px-4 py-1 rounded-md bg-white/5 text-white/40 text-[11px] font-mono">
                              taskflow.app
                            </span>
                          </span>
                        </div>
                        <div className="p-5 space-y-3" aria-hidden="true">
                          <div className="flex items-center justify-between">
                            <div className="h-3 w-24 rounded bg-[#00e5ff]/30"></div>
                            <div className="h-6 w-6 rounded-full bg-[#7b61ff]/30"></div>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="h-16 rounded-lg bg-white/5 border border-white/5"></div>
                            <div className="h-16 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/20"></div>
                            <div className="h-16 rounded-lg bg-white/5 border border-white/5"></div>
                          </div>
                          <div className="h-2.5 w-full rounded bg-white/10"></div>
                          <div className="h-2.5 w-4/5 rounded bg-white/10"></div>
                          <div className="h-2.5 w-3/5 rounded bg-white/5"></div>
                          <div className="flex gap-2 pt-1">
                            <div className="h-7 w-20 rounded-full bg-[#00e5ff]/25"></div>
                            <div className="h-7 w-20 rounded-full bg-white/5"></div>
                          </div>
                        </div>
                      </div>
                      {/* floating accent chip */}
                      <div className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-3 shadow-xl border border-white/10 flex items-center gap-3 float-shape">
                        <span className="w-8 h-8 rounded-full bg-[#00e5ff]/15 flex items-center justify-center text-[#00e5ff]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-white">AI‑ranked tasks</p>
                          <p className="text-[10px] text-white/40">TensorFlow.js on‑device</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                {/* ── Grid: remaining projects ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {rest.map((project, index) => (
                    <article
                      key={project.id}
                      className="project-card group relative rounded-3xl p-6 sm:p-7 flex flex-col reveal"
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      {/* top row: index number + links */}
                      <div className="flex items-start justify-between mb-5">
                        <span className="project-index font-mono" aria-hidden="true">
                          0{index + 2}
                        </span>
                        <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          <a
                            href={project.github}
                            aria-label={`${project.title} source code`}
                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00e5ff]/50 transition-all"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 2.997-.403 1.017.003 2.037.136 2.997.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.242 2.86.118 3.16.768.84 1.236 1.911 1.236 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                          </a>
                          <a
                            href={project.link}
                            aria-label={`View ${project.title}`}
                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00e5ff]/50 transition-all"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 mb-3">
                        <span className={`project-status ${
                          project.status === "Live"
                            ? "project-status-live"
                            : project.status === "Beta"
                            ? "project-status-beta"
                            : "project-status-ongoing"
                        }`}>
                          <span className="status-dot" aria-hidden="true"></span>
                          {project.status}
                        </span>
                        <span className="text-white/30 text-[11px] font-mono uppercase tracking-widest">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#5ce1ff] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-white/60 mt-3 leading-relaxed text-sm flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/5">
                        {project.tech.map((tech) => (
                          <span key={tech} className="skill-tag">{tech}</span>
                        ))}
                      </div>

                      {/* bottom accent line that draws on hover */}
                      <span className="project-underline" aria-hidden="true"></span>
                    </article>
                  ))}
                </div>

                {/* mobile "all projects" link */}
                <div className="sm:hidden text-center pt-2">
                  <a
                    href="/work"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/70 text-sm"
                  >
                    All projects
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      </section>
      {/* ─── CONTACT ────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#00e5ff]/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#5ce1ff]/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="reveal-left space-y-6 sm:space-y-8">
              <span className="text-[#00e5ff] text-sm font-semibold tracking-[0.15em] uppercase">
                Let's connect
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
                <span className="text-white">Have a project </span>
                <span className="gradient-blue font-mono">in mind?</span>
              </h2>
              <div className="w-16 h-1 bg-[#00e5ff] rounded"></div>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-md">
                I'm always open to discussing new opportunities, interesting
                challenges, or just geeking out about tech.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <a
                      href="mailto:alex@ar.dev"
                      className="text-white/60 hover:text-[#00e5ff] transition-colors"
                    >
                      alex@ar.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Location</p>
                    <p className="text-white/60">London · United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 2.997-.403 1.017.003 2.037.136 2.997.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.242 2.86.118 3.16.768.84 1.236 1.911 1.236 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">GitHub</p>
                    <a
                      href="#"
                      className="text-white/60 hover:text-[#00e5ff] transition-colors"
                    >
                      github.com/alexrivera
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="glass rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send a message
                </h3>
                <p className="text-white/40 text-sm mb-6">
                  I'll respond within 24 hours.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      "Thank you for reaching out! I'll get back to you soon. 🚀"
                    );
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 input-focus transition-all text-white placeholder:text-white/30"
                      placeholder="Alex Rivera"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 input-focus transition-all text-white placeholder:text-white/30"
                      placeholder="alex@ar.dev"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">
                      Project idea
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 input-focus transition-all text-white placeholder:text-white/30 resize-none"
                      placeholder="Tell me about your project or challenge…"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#00e5ff] text-white font-medium hover:bg-[#00b3c6] transition-all shadow-xl shadow-[#00e5ff]/20 flex items-center justify-center gap-2 group"
                  >
                    Send message
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                  <p className="text-center text-xs text-white/30">
                    Your information is kept confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}