"use client";

import { useEffect, useRef, useState } from "react";
import "@/components/home/hero.css";

const CODE_SEGMENTS = [
  { text: "// Shivanshu Prajapati · Full Stack Developer\n", cls: "comment" },
  { text: "const ", cls: "keyword" },
  { text: "engineer", cls: "function" },
  { text: " = {\n  name: ", cls: "" },
  { text: "'Shivanshu Prajapati'", cls: "string" },
  { text: ",\n  title: ", cls: "" },
  { text: "'Full-Stack Developer'", cls: "string" },
  { text: ",\n  location: ", cls: "" },
  { text: "'Chhattisgarh, India'", cls: "string" },
  { text: ",\n  experience: ", cls: "" },
  { text: "'1+ Years'", cls: "string" },
  { text: ",\n  stack: [", cls: "" },
  { text: "'React'", cls: "string" },
  { text: ", ", cls: "" },
  { text: "'Node.js'", cls: "string" },
  { text: ", ", cls: "" },
  { text: "'Next.js'", cls: "string" },
  { text: ", ", cls: "" },
  { text: "'TypeScript'", cls: "string" },
  { text: "],\n  ", cls: "" },
  { text: "build", cls: "function" },
  { text: ": function", cls: "keyword" },
  { text: "() {\n    ", cls: "" },
  { text: "return ", cls: "keyword" },
  { text: "'Scalable & Robust Systems'", cls: "string" },
  { text: ";\n  }\n};", cls: "" },
];

const CODE_LENGTH = CODE_SEGMENTS.reduce(
  (total, item) => total + item.text.length,
  0
);

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [typedCount, setTypedCount] = useState(0);

  // ------------------------------------------------------------
  // Typewriter effect
  // ------------------------------------------------------------
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedCount(CODE_LENGTH);
      return;
    }

    let count = 0;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      count = Math.min(count + 1 + ((count * 7) % 3), CODE_LENGTH);
      setTypedCount(count);

      if (count < CODE_LENGTH) {
        timer = setTimeout(type, 20 + ((count * 11) % 35));
      }
    };

    timer = setTimeout(type, 700);

    return () => clearTimeout(timer);
  }, []);

  // ------------------------------------------------------------
  // Mouse spotlight + 3D card tilt
  // ------------------------------------------------------------
  useEffect(() => {
    const hero = heroRef.current;
    const card = cardRef.current;

    if (!hero) return;
    if (window.matchMedia("(hover:none)").matches) return;

    let animationFrame = 0;

    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const heroRect = hero.getBoundingClientRect();

        hero.style.setProperty("--spot-x", `${event.clientX - heroRect.left}px`);
        hero.style.setProperty("--spot-y", `${event.clientY - heroRect.top}px`);

        if (!card) return;

        const cardRect = card.getBoundingClientRect();

        const rotateX =
          ((event.clientY - cardRect.top - cardRect.height / 2) /
            cardRect.height) *
          -8;

        const rotateY =
          ((event.clientX - cardRect.left - cardRect.width / 2) /
            cardRect.width) *
          8;

        const inside =
          event.clientX > cardRect.left - 120 &&
          event.clientX < cardRect.right + 120 &&
          event.clientY > cardRect.top - 120 &&
          event.clientY < cardRect.bottom + 120;

        card.style.transform = inside
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      });
    };

    hero.addEventListener("mousemove", handleMove);

    return () => {
      hero.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden hero-pattern hero-spotlight pt-20 sm:pt-24"
    >
      {/* BACKGROUND GRID */}
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      {/* AURORA BLOBS */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#00e5ff]/10 blur-3xl float-shape aurora" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#00e5ff]/10 blur-3xl float-shape-2 aurora-2" />

      {/* ORBIT RING 1 */}
      <div className="absolute top-[58%] left-0 -translate-x-1/2 -translate-y-1/2 orbit-ring rounded-full">
        <span className="orbit-dot" />
      </div>

      {/* ORBIT RING 2 */}
      <div className="absolute top-[58%] left-0 -translate-x-1/2 -translate-y-1/2 orbit-ring orbit-ring-reverse rounded-full">
        <span className="orbit-dot orbit-dot-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="software font-bold leading-tight">
              <span className="word-mask">
                <span className="word-reveal" style={{ animationDelay: "0.15s" }}>
                  <span className="text-white">Full&nbsp;</span>
                  <span className="gradient-blue gradient-animate font-mono">
                    Stack
                  </span>
                </span>
              </span>

              <span className="word-mask block">
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
              I develop modern full-stack applications using the MERN stack,
              focusing on performance, scalable architecture, and clean,
              maintainable code. 1+ years of hands-on experience building
              real-world web applications.
            </p>

            <div
              className="hero-enter flex flex-wrap gap-4"
              style={{ animationDelay: "0.68s" }}
            >
              <a
                href="#contact"
                className="hero-btn px-8 py-4 rounded-full bg-[#00e5ff] text-white font-medium hover:bg-[#00b3c6] transition-all shadow-xl shadow-[#00e5ff]/20 inline-flex items-center gap-2"
              >
                Let's build
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shivanshu-prajapati-b38012331/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/10 text-white/80 hover:border-[#00e5ff] hover:text-white transition-all inline-flex items-center gap-2"
              >
                Connect on LinkedIn
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT CODE CARD */}
          <div
            className="hero-enter relative flex justify-center lg:justify-end"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-full max-w-md">
              <div ref={cardRef} className="tilt-card">
                <div className="code-block code-glow overflow-x-auto">
                  {/* WINDOW HEADER */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-xs text-white/40 font-mono">
                      portfolio.ts
                    </span>
                  </div>

                  {/* TYPEWRITER CODE */}
                  <pre className="text-xs sm:text-sm whitespace-pre-wrap break-words min-h-[230px] font-mono">
                    {(() => {
                      let remaining = typedCount;

                      return CODE_SEGMENTS.map((segment, index) => {
                        if (remaining <= 0) return null;

                        const text = segment.text.slice(0, remaining);
                        remaining -= segment.text.length;

                        return (
                          <span key={index} className={segment.cls || ""}>
                            {text}
                          </span>
                        );
                      });
                    })()}

                    <span
                      aria-hidden="true"
                      className={`type-cursor ${
                        typedCount >= CODE_LENGTH ? "type-cursor-done" : ""
                      }`}
                    />
                  </pre>
                </div>
              </div>

              {/* STATUS */}
              <div className="hero-status mt-5 flex flex-wrap justify-center gap-5">
                <span className="flex items-center gap-2">
                  <span className="glow-dot" />
                  Available for work
                </span>

                <span className="flex items-center gap-2 font-mono">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 2.997-.403 1.017.003 2.037.136 2.997.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.242 2.86.118 3.16.768.84 1.236 1.911 1.236 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                  <span>github.com/Shivanshu666</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}