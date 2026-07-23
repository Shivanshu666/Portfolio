"use client";

import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import Project from "../components/home/Project";
import Skills from "../components/home/Skills";

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
                    <span className="text-white">Full&nbsp;</span>
                    <span className="gradient-blue gradient-animate font-mono">
                      Stack
                    </span>
                  </span>
                </span>
                <span className="word-mask">
                  <span className="word-reveal" style={{ animationDelay: "0.32s" }}>
                    <span className="text-white">Developer</span>
                    <span className="gradient-cyan">.</span>
                  </span>
                </span>
              </h1>

             <p
  className="hero-enter text-base sm:text-lg text-white/60 max-w-lg leading-relaxed"
  style={{ animationDelay: "0.55s" }}
>
  I develop modern full-stack applications using the MERN stack, focusing on
  performance, scalable architecture, and clean, maintainable code. 1+ years
  of hands-on experience building real-world web applications.
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
  href="https://www.linkedin.com/in/shivanshu-prajapati-b38012331/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 text-white/80 hover:border-[#00e5ff] hover:text-white hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm sm:text-base group"
>
  Connect on LinkedIn
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
      d="M5 12h14m-6-6 6 6-6 6"
    />
  </svg>
</a>
              </div>
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
                    <span>https://github.com/Shivanshu666</span>
                  </div>
                </div>
              </div>
            </div>
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
  I'm a <strong className="text-white">Full Stack Developer</strong> with
  <strong className="text-white"> 1 year of hands-on experience</strong> building
  modern web applications. I enjoy creating responsive user interfaces,
  developing secure backend APIs, and delivering reliable, high-performance
  solutions from concept to deployment.
</p>

<p className="text-white/60 leading-relaxed">
  I work with modern JavaScript technologies to build scalable applications,
  focusing on clean code, performance, and maintainability. Every project is an
  opportunity to learn, improve, and create software that makes an impact.
</p>
             <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/5">
    <p className="text-2xl sm:text-3xl font-bold text-white">
      1<span className="text-[#00e5ff]">+</span>
    </p>
    <p className="text-xs sm:text-sm text-white/40">
      Years Experience
    </p>
  </div>

  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/5">
    <p className="text-2xl sm:text-3xl font-bold text-white">
      15<span className="text-[#00e5ff]">+</span>
    </p>
    <p className="text-xs sm:text-sm text-white/40">
      Projects Completed
    </p>
  </div>

  {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/5">
    <p className="text-2xl sm:text-3xl font-bold text-white">
      8<span className="text-[#00e5ff]">+</span>
    </p>
    <p className="text-xs sm:text-sm text-white/40">
      Technologies
    </p>
  </div>

  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/5">
    <p className="text-2xl sm:text-3xl font-bold text-white">
      100<span className="text-[#00e5ff]">%</span>
    </p>
    <p className="text-xs sm:text-sm text-white/40">
      Dedication
    </p>
  </div> */}
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
                        "In this world, winning is everything. As long as I win in the end... that's all that matters."
                      </blockquote>
                    
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
    <Skills/>

      {/* ─── PROJECTS ────────────────────────────────────────────── */}
        <Project/>
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
                      shivanshuofficial123@gmail.com
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
                    <p className="text-white/60">Chhattishgarh · India</p>
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
                      https://github.com/Shivanshu666
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
                      placeholder="Shivanshu Prajapati"
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
                      placeholder="shivanshuofficial123@gmail.com"
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