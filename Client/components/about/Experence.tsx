"use client";

import { useEffect, useRef, useState } from "react";

// ─── DATA ──────────────────────────────────────────────────────────
interface Experience {
  period: string;
  title: string;
  company: string;
  desc: string;
  tags: string[];
  icon: string;
  color: string;
}

const experiences: Experience[] = [
  {
    period: "2023 — Present",
    title: "Senior Full Stack Engineer",
    company: "Nexus Technologies",
    desc: "Leading a team of 8 engineers building AI-powered developer tools. Architected microservices handling 10M+ daily requests with 99.99% uptime.",
    tags: ["React", "Node.js", "AWS", "AI/ML"],
    icon: "🚀",
    color: "#4f8cff",
  },
  {
    period: "2021 — 2023",
    title: "Frontend Architect",
    company: "CloudSphere Inc.",
    desc: "Designed and implemented component library used across 40+ products. Reduced bundle size by 65% and improved Core Web Vitals by 40%.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Storybook"],
    icon: "⚡",
    color: "#00e5ff",
  },
  {
    period: "2019 — 2021",
    title: "Full Stack Developer",
    company: "DataFlow Labs",
    desc: "Built real-time analytics dashboard for enterprise clients. Implemented WebSocket connections handling 50K+ concurrent users.",
    tags: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    icon: "📊",
    color: "#f5a623",
  },
  {
    period: "2018 — 2019",
    title: "Junior Developer",
    company: "StartupHub",
    desc: "Developed MVP for 3 startups in fintech and healthtech sectors. Delivered 5 production-ready applications in 12 months.",
    tags: ["React", "Firebase", "Express", "MongoDB"],
    icon: "💡",
    color: "#3ddc84",
  },
];

// ─── EXPERIENCE CARD COMPONENT ──────────────────────────────────
function ExperienceCard({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col lg:flex-row gap-6 mb-16 lg:mb-20 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-start`}
    >
      {/* Mobile Timeline Dot */}
      <div className="lg:hidden absolute left-[-12px] top-4 w-5 h-5 rounded-full bg-[#4f8cff] border-3 border-[#0b0e14] shadow-2xl z-10">
        <div className="absolute inset-0 rounded-full bg-[#4f8cff]/30 animate-ping"></div>
      </div>

      {/* Content */}
      <div
        className={`lg:w-1/2 pl-8 lg:pl-0 ${
          isEven ? "lg:pr-12 xl:pr-16" : "lg:pl-12 xl:pl-16"
        }`}
      >
        <div
          className={`transform transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : isEven
              ? "opacity-0 -translate-x-12"
              : "opacity-0 translate-x-12"
          }`}
        >
          <div className="group relative">
            {/* Glow effect */}
            <div
              className="absolute -inset-1 rounded-2xl blur-2xl transition-all duration-500 group-hover:blur-3xl"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${exp.color}15, transparent 70%)`,
              }}
            ></div>

            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-1">
              {/* Icon & Period */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{exp.icon}</span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: exp.color }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg opacity-20 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: `${exp.color}20` }}
                >
                  <span className="text-xl">→</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {exp.title}
              </h3>
              <p className="text-white/50 font-medium mb-3">{exp.company}</p>
              <p className="text-white/60 leading-relaxed mb-4">{exp.desc}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
                    style={{
                      borderColor: `${exp.color}30`,
                      color: exp.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Timeline Dot */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative">
        <div
          className={`transform transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="relative">
            {/* Outer glow rings */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full animate-pulse"
              style={{ background: `${exp.color}10` }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full animate-spin-slow"
              style={{
                border: `2px solid ${exp.color}20`,
                borderTopColor: exp.color,
              }}
            ></div>

            {/* Dot */}
            <div
              className="relative w-5 h-5 rounded-full border-4 border-[#0b0e14] shadow-2xl z-10"
              style={{ background: exp.color }}
            >
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: `${exp.color}50` }}
              ></div>
            </div>

            {/* Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 text-xs font-mono text-white/20">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>

      {/* Connecting line between cards - hidden on mobile */}
      {index < experiences.length - 1 && (
        <div className="hidden lg:block absolute left-1/2 top-12 bottom-[-30px] w-0.5 -translate-x-1/2">
          <div
            className="w-full h-full bg-gradient-to-b"
            style={{
              background: `linear-gradient(to bottom, ${exp.color}40, ${experiences[index + 1].color}40)`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN EXPERIENCE COMPONENT ─────────────────────────────────
export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white/5 relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#4f8cff]/5 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#00e5ff]/5 blur-3xl animate-float-delayed"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/5 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-[#4f8cff] text-sm font-semibold tracking-[0.15em] uppercase">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            <span className="text-white">My Professional </span>
            <span className="gradient-cyan">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4f8cff] to-[#00e5ff] rounded mx-auto mt-4"></div>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
            Over 5 years of building products that impact millions of users
            worldwide.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Background timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#4f8cff] via-[#00e5ff] to-[#3ddc84] opacity-30"></div>

          <div className="space-y-0">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4f8cff] to-[#00e5ff] text-white font-semibold hover:shadow-2xl hover:shadow-[#4f8cff]/30 transition-all duration-300 hover:scale-105 group"
          >
            <span>View Full Resume</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </section>
  );
}