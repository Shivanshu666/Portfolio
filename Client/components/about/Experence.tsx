// Experience.tsx - Desktop with description below title

"use client";

import { useEffect, useRef, useState } from "react";
import "./experience.css";

// ─── SIMPLE ICONS (Unicode & HTML) ─────────────────────────────
const Icons = {
  Code: () => <span className="text-xl">⌨️</span>,
  Zap: () => <span className="text-xl">⚡</span>,
  Database: () => <span className="text-xl">🗄️</span>,
  Briefcase: () => <span className="text-xl">💼</span>,
  Cloud: () => <span className="text-xl">☁️</span>,
  Terminal: () => <span className="text-xl">💻</span>,
  Cpu: () => <span className="text-xl">⚙️</span>,
  Star: () => <span className="text-xl">⭐</span>,
  Gear: () => <span className="text-xl">🔧</span>,
  Home: () => <span className="text-xl">🏠</span>,
  Office: () => <span className="text-xl">🏢</span>,
  Remote: () => <span className="text-xl">🌐</span>,
  Paid: () => <span className="text-xl">💳</span>,
};

// ─── EXPERIENCE DATA FROM YOUR RESUME ──────────────────────────
interface Experience {
  period: string;
  title: string;
  company: string;
  type: "onsite" | "remote" | "freelance";
  location: string;
  desc: string[];
  tags: string[];
  icon: React.ReactNode;
  color: string;
  isPaid?: boolean;
}

const experiences: Experience[] = [
  // ─── FREELANCE (Top) ──────────────────────────────────────────
  {
    period: "Dec 2025 — Present",
    title: "Freelance MERN Stack Developer",
    company: "Self-Employed",
    type: "freelance",
    location: "Remote",
    desc: [
      "Delivering full-stack web applications for clients in e-commerce, pharmaceuticals, and home services",
      "Managing complete project lifecycle from requirements gathering to live deployment",
      "Integrating payment gateways (Razorpay/Stripe), contact form backends, and third-party APIs",
      "Configuring custom domains, SSL, and deployment pipelines on Vercel, Netlify, and Render"
    ],
    tags: ["React.js", "Node.js", "MongoDB", "Razorpay", "Vercel", "Netlify"],
    icon: <Icons.Star />,
    color: "#f5a623",
  },
  
  // ─── PAID REMOTE INTERNSHIP ──────────────────────────────────
  {
    period: "Aug 2025 — Dec 2025",
    title: "Full-Stack Developer Intern",
    company: "Zenith Studio, Suravika Technologies Pvt. Ltd",
    type: "remote",
    location: "Hyderabad (Remote)",
    isPaid: true,
    desc: [
      "Designed and developed responsive front-end interfaces using React.js, Tailwind CSS, and vanilla JavaScript",
      "Reduced page load time from 4s to 1.5s (62% faster) through component-level rendering optimization and code splitting",
      "Built and integrated RESTful APIs with Node.js and Express.js, implementing JWT-based authentication and role-based access control",
      "Managed MongoDB databases including schema design, indexing, and CRUD operations for a multi-user appointment management system",
      "Collaborated with cross-functional team using Git workflows (branches, PRs, code reviews)"
    ],
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "Git"],
    icon: <Icons.Paid />,
    color: "#4f8cff",
  },
];

// ─── EXPERIENCE CARD COMPONENT ──────────────────────────────────
function ExperienceCard({
  exp,
  index,
  isLast,
}: {
  exp: Experience;
  index: number;
  isLast: boolean;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  // Get badge color based on type
  const getTypeBadge = (type: string) => {
    switch(type) {
      case "freelance":
        return { bg: "bg-[#f5a623]/20", text: "text-[#f5a623]", label: "⭐ Freelance" };
      case "remote":
        return { bg: "bg-[#4f8cff]/20", text: "text-[#4f8cff]", label: "🌐 Remote" };
      case "onsite":
        return { bg: "bg-[#3ddc84]/20", text: "text-[#3ddc84]", label: "🏢 Onsite" };
      default:
        return { bg: "bg-white/10", text: "text-white/50", label: "💼 Work" };
    }
  };

  const badge = getTypeBadge(exp.type);

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col lg:flex-row gap-6 sm:gap-8 pb-12 sm:pb-16 ${
        isLast ? "pb-0" : ""
      }`}
    >
      {/* ─── LEFT COLUMN (Desktop) ──────────────────────────────── */}
      <div className="hidden lg:block lg:w-5/12">
        <div
          className={`h-full flex items-center justify-end pr-8 xl:pr-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : isEven ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"
          }`}
        >
          {isEven ? (
            <div className="text-right w-full">
              {/* Period Badge */}
              <span
                className="period-badge"
                style={{ color: exp.color, borderColor: `${exp.color}30` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                {exp.period}
              </span>
              
              {/* Title */}
              <h3 className="text-xl xl:text-2xl font-bold text-white mt-3 mb-1">
                {exp.title}
              </h3>
              
              {/* Company */}
              <p className="text-white/50 font-medium text-sm xl:text-base">{exp.company}</p>
              
              {/* Badges */}
              <div className="flex items-center justify-end gap-2 mt-2 flex-wrap">
                <span className={`inline-block text-xs px-3 py-1 rounded-full ${badge.bg} ${badge.text} border border-current/20`}>
                  {badge.label}
                </span>
                {exp.isPaid && (
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#3ddc84]/20 text-[#3ddc84] border border-[#3ddc84]/20">
                    💳 Paid Internship
                  </span>
                )}
              </div>
              
              {/* Location */}
              <p className="text-white/40 text-sm mt-1">{exp.location}</p>
              
              {/* ─── DESCRIPTION (Added) ───────────────────────────── */}
              <ul className="space-y-2 mt-4 text-right">
                {exp.desc.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-white/60 text-sm leading-relaxed flex items-start gap-2 justify-end"
                  >
                    <span>{item}</span>
                    <span
                      className="inline-block mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: exp.color }}
                    ></span>
                  </li>
                ))}
              </ul>
              
              {/* ─── TAGS (Added) ──────────────────────────────────── */}
              <div className="flex flex-wrap gap-2 mt-4 justify-end">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="experience-tag text-xs px-3 py-1"
                    style={{
                      borderColor: `${exp.color}25`,
                      color: exp.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full"></div>
          )}
        </div>
      </div>

      {/* ─── TIMELINE NODE ──────────────────────────────────────── */}
      <div className="hidden lg:flex lg:w-2/12 justify-center relative">
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="timeline-node" style={{ borderColor: exp.color }}>
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring"></div>
            <span className="text-2xl" style={{ color: exp.color }}>
              {exp.icon}
            </span>
            <span className="timeline-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Connector line */}
        {!isLast && (
          <div className="absolute top-12 bottom-0 left-1/2 -translate-x-1/2 w-0.5">
            <div
              className="w-full h-full bg-gradient-to-b opacity-30"
              style={{
                background: `linear-gradient(to bottom, ${exp.color}60, ${experiences[index + 1].color}60)`,
              }}
            ></div>
          </div>
        )}
      </div>

      {/* ─── RIGHT COLUMN (Desktop) ─────────────────────────────── */}
      <div className="hidden lg:block lg:w-5/12">
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : isEven ? "opacity-0 translate-x-12" : "opacity-0 -translate-x-12"
          }`}
        >
          {!isEven ? (
            <div className="text-left pl-8 xl:pl-12 w-full">
              {/* Period Badge */}
              <span
                className="period-badge"
                style={{ color: exp.color, borderColor: `${exp.color}30` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                {exp.period}
              </span>
              
              {/* Title */}
              <h3 className="text-xl xl:text-2xl font-bold text-white mt-3 mb-1">
                {exp.title}
              </h3>
              
              {/* Company */}
              <p className="text-white/50 font-medium text-sm xl:text-base">{exp.company}</p>
              
              {/* Badges */}
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className={`inline-block text-xs px-3 py-1 rounded-full ${badge.bg} ${badge.text} border border-current/20`}>
                  {badge.label}
                </span>
                {exp.isPaid && (
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#3ddc84]/20 text-[#3ddc84] border border-[#3ddc84]/20">
                    💳 Paid Internship
                  </span>
                )}
              </div>
              
              {/* Location */}
              <p className="text-white/40 text-sm mt-1">{exp.location}</p>
              
              {/* ─── DESCRIPTION (Added) ───────────────────────────── */}
              <ul className="space-y-2 mt-4">
                {exp.desc.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-white/60 text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span
                      className="inline-block mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: exp.color }}
                    ></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* ─── TAGS (Added) ──────────────────────────────────── */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="experience-tag text-xs px-3 py-1"
                    style={{
                      borderColor: `${exp.color}25`,
                      color: exp.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full"></div>
          )}
        </div>
      </div>

      {/* ─── MOBILE CARD ────────────────────────────────────────── */}
      <div className="lg:hidden w-full">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative pl-10 sm:pl-12">
            {/* Mobile timeline line */}
            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5">
              <div
                className="w-full h-full bg-gradient-to-b opacity-30"
                style={{
                  background: `linear-gradient(to bottom, ${exp.color}60, ${isLast ? 'transparent' : experiences[index + 1].color + '60'})`,
                }}
              ></div>
            </div>

            {/* Mobile timeline dot */}
            <div className="absolute left-0 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 z-10 bg-[#0b0e14]">
              <div
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                style={{ background: exp.color }}
              ></div>
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: `${exp.color}30` }}
              ></div>
            </div>

            {/* Mobile card content */}
            <div className="experience-glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  className="card-icon-wrapper w-10 h-10 sm:w-12 sm:h-12"
                  style={{ background: `${exp.color}15`, color: exp.color }}
                >
                  {exp.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-white truncate">
                    {exp.title}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm truncate">{exp.company}</p>
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-1 flex-wrap">
                    <span
                      className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${badge.bg} ${badge.text} border border-current/20`}
                    >
                      {badge.label}
                    </span>
                    {exp.isPaid && (
                      <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-[#3ddc84]/20 text-[#3ddc84] border border-[#3ddc84]/20">
                        💳 Paid
                      </span>
                    )}
                    <span className="text-[10px] sm:text-xs text-white/40 truncate">{exp.location}</span>
                  </div>
                  <span
                    className="text-[10px] sm:text-xs font-medium mt-1 inline-block"
                    style={{ color: exp.color }}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                {exp.desc.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-white/60 text-xs sm:text-sm leading-relaxed flex items-start gap-1.5 sm:gap-2"
                  >
                    <span
                      className="inline-block mt-1 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0"
                      style={{ background: exp.color }}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="experience-tag text-[10px] sm:text-xs px-2 sm:px-3 py-1"
                    style={{
                      borderColor: `${exp.color}25`,
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
    </div>
  );
}

// ─── MAIN EXPERIENCE COMPONENT ─────────────────────────────────
export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(true);

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

  // ─── Resume Download Handler ──────────────────────────────────
  const handleDownloadResume = () => {
    const resumeUrl = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Shivanshu_Prajapati_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Get counts for stats
  const totalExperiences = experiences.length;
  const freelanceCount = experiences.filter(e => e.type === "freelance").length;
  const remoteCount = experiences.filter(e => e.type === "remote").length;
  const paidCount = experiences.filter(e => e.isPaid).length;

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0e14] overflow-hidden"
    >
      {/* ─── DECORATIVE ELEMENTS ─────────────────────────────────── */}
      <div className="section-ornament section-ornament-1"></div>
      <div className="section-ornament section-ornament-2"></div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 140, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 140, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ─── SECTION HEADER ────────────────────────────────────── */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-700 ${
            isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
            <span className="text-white">Professional </span>
            <span className="gradient-cyan">Experience</span>
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#4f8cff] to-[#00e5ff] rounded-full mx-auto mt-3 sm:mt-4"></div>

          <p className="text-white/50 mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm lg:text-base px-4">
            Full-Stack MERN Developer with 6+ months of internship experience
            and hands-on freelance client work. Specialized in building
            production-ready web applications.
          </p>

          {/* ─── STATS ────────────────────────────────────────────── */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#f5a623] text-lg sm:text-xl">⭐</span>
              <span className="text-white/60 text-xs sm:text-sm">
                <span className="font-bold text-white">{freelanceCount}</span> Freelance
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#4f8cff] text-lg sm:text-xl">🌐</span>
              <span className="text-white/60 text-xs sm:text-sm">
                <span className="font-bold text-white">{remoteCount}</span> Remote
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#3ddc84] text-lg sm:text-xl">💳</span>
              <span className="text-white/60 text-xs sm:text-sm">
                <span className="font-bold text-white">{paidCount}</span> Paid
              </span>
            </div>
          </div>
        </div>

        {/* ─── TIMELINE ───────────────────────────────────────────── */}
        <div className="relative">
          {/* Background gradient line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-14 bottom-0 w-0.5 -translate-x-1/2 opacity-20">
            <div className="w-full h-full bg-gradient-to-b from-[#f5a623] via-[#4f8cff] to-[#00e5ff]"></div>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, idx) => (
              <ExperienceCard
                key={idx}
                exp={exp}
                index={idx}
                isLast={idx === experiences.length - 1}
              />
            ))}
          </div>
        </div>

        {/* ─── BOTTOM CTA - Download Resume ──────────────────────── */}
        <div
          className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-700 delay-500 ${
            isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={handleDownloadResume}
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#4f8cff] to-[#00e5ff] text-white font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-[#4f8cff]/30 transition-all duration-300 hover:scale-105"
          >
            <span>📄 Download Resume</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
          <p className="text-white/30 text-[10px] sm:text-xs mt-3 sm:mt-4 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            <span>📄 Resume updated: December 2025</span>
            <span className="hidden xs:inline w-1 h-1 rounded-full bg-white/20"></span>
            <span>{totalExperiences} experiences</span>
            <span className="hidden xs:inline w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-[#3ddc84]">💳 {paidCount} paid</span>
          </p>
        </div>
      </div>
    </section>
  );
}