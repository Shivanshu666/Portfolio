"use client";

import { useEffect } from "react";
import "./info.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  useEffect(() => {
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach(el => el.classList.add("visible"));
  }, []);

  const experiences = [
    {
      period: "2024 – Present",
      title: "Senior Software Engineer",
      company: "FinTech Solutions · Remote",
      desc: "Architected event-driven microservices handling £2B+ in transactions. Led a team of 8, introduced DDD and CQRS patterns, reduced latency by 40%.",
      tags: ["Go", "Kafka", "React"],
    },
    {
      period: "2022 – 2024",
      title: "Full-Stack Developer",
      company: "HealthTech Innovations · Remote",
      desc: "Built a HIPAA-compliant patient portal used by 5M+ users. Implemented real-time notifications with WebSockets and improved test coverage to 92%.",
      tags: ["Node", "TypeScript", "PostgreSQL"],
    },
    {
      period: "2021 – 2022",
      title: "Junior Developer",
      company: "E-Commerce Giant · Manchester",
      desc: "Developed and maintained high-traffic e-commerce platform. Optimised database queries and reduced page load time by 60%.",
      tags: ["PHP", "React", "MySQL"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#0b0e14] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ─── ABOUT INTRO ─────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left – Text */}
          <div className="reveal-left space-y-8">
            <span className="text-[#4f8cff] text-xs uppercase">
              More About Me...
            </span>
          <h2 className="build text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
  Building experiences that <br />
  <span className="gradient-blue">
    <TypeAnimation
      sequence={[
        "make a difference",
        2000,
        "inspire people",
        2000,
        "solve real problems",
        2000,
        "shape the future",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      cursor={true}
    />
  </span>
</h2>
            <div className="w-12 h-1 bg-[#4f8cff] rounded"></div>
            <p className="text-white/70 leading-relaxed">
              I'm Shivanshu Prajapati, a proactive full‑stack developer passionate about creating
              dynamic web experiences. From frontend to backend, I thrive on solving complex
              problems with clean, efficient code. My expertise spans React, Next.js, and
              Node.js, and I'm always eager to learn more.
            </p>
            <p className="text-white/50 leading-relaxed">
              When I'm not immersed in work, I'm exploring new ideas and staying curious.
              Life's about balance, and I love embracing every part of it. I believe in
              waking up each day eager to make a difference!
            </p>
<div className="flex items-center gap-6 pt-4">
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
    aria-label="GitHub"
  >
    <FaGithub size={28} />
  </a>

  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/70 hover:text-[#0A66C2] transition-all duration-300 hover:scale-110"
    aria-label="LinkedIn"
  >
    <FaLinkedin size={28} />
  </a>

  <a
    href="mailto:your@email.com"
    className="text-white/70 hover:text-[#4f8cff] transition-all duration-300 hover:scale-110"
    aria-label="Email"
  >
    <FaEnvelope size={28} />
  </a>
</div>
          </div>

          {/* Right – Photo placeholder */}
          <div className="reveal-right flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="glass rounded-3xl p-8 text-center border border-white/5">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#4f8cff]/20 to-[#7b61ff]/20 flex items-center justify-center border-2 border-[#4f8cff]/30">
                  <span className="text-4xl font-bold text-[#4f8cff]">SP</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-4">Shivanshu Prajapati</h3>
                <p className="text-white/60">Full-Stack Architect</p>
                <p className="text-sm text-white/40 mt-1">📍 Chhattisgarh, India</p>
                <div className="flex justify-center gap-4 mt-4">
                  <span className="skill-tag-dark">React</span>
                  <span className="skill-tag-dark">Next.js</span>
                  <span className="skill-tag-dark">Node</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-center gap-4 text-sm text-white/40">
                  <span>📧 shivanshu@dev.com</span>
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 text-sm text-white/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Available for work</span>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#4f8cff]/5 blur-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#7b61ff]/5 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* ─── EXPERIENCE SECTION ──────────────────────────────── */}
        <div className="reveal mt-12">
          <div className="text-center mb-12">
            <span className="text-[#4f8cff] text-sm font-semibold tracking-wider uppercase">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              My <span className="gradient-cyan">journey</span>
            </h2>
            <div className="w-16 h-1 bg-[#4f8cff] rounded mx-auto mt-4"></div>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden sm:block absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#4f8cff]/20 -translate-x-1/2"></div>

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row gap-6 mb-12 reveal ${
                  idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                {/* Mobile dot */}
                <div className="sm:hidden absolute left-[-8px] top-3 w-4 h-4 rounded-full bg-[#4f8cff] border-2 border-[#0b0e14] shadow-lg"></div>

                <div className={`sm:w-1/2 ${idx % 2 === 0 ? "sm:pr-8 md:pr-12" : "sm:pl-8 md:pl-12"} pl-6 sm:pl-0`}>
                  <span className="text-sm font-semibold text-[#4f8cff]">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                  <p className="text-white/50 font-medium">{exp.company}</p>
                  <p className="text-white/60 mt-2 leading-relaxed">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-tag-dark">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Desktop dot */}
                <div className="hidden sm:flex sm:w-1/2 items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#4f8cff] border-2 border-[#0b0e14] shadow-lg glow-dot"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#4f8cff]/5 blur-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}