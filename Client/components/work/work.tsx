// app/work/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

// ─── अभी सिर्फ 1 प्रोजेक्ट (यह पोर्टफोलियो खुद) ──────────────
// जैसे-जैसे नए प्रोजेक्ट बनेंगे, आप इसमें ऑब्जेक्ट ऐड करते जाएंगे।
const projects = [
  {
    id: 1,
    title: 'Portfolio (this site)',
    description:
      'Minimalist, high‑performance portfolio with dark mode, terminal aesthetics, and full responsiveness. Built to score 100 on Lighthouse and represent my personal brand.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    icon: '🖥️',
    liveUrl: '/', // आपकी लाइव साइट
    githubUrl: 'https://github.com/Shivanshu666', // आपका GitHub
    year: '2025',
    featured: true,
  },
];

// ─── Component ──────────────────────────────────────────────────────────
export default function WorkPage() {
  const hasProjects = projects.length > 0;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-20 bg-[#0a0a0f] text-[#f0f0f5] font-sans min-h-screen bg-[radial-gradient(ellipse_80%_50%_at_10%_20%,rgba(0,255,136,0.04)_0%,transparent_70%),radial-gradient(ellipse_60%_40%_at_90%_80%,rgba(0,255,136,0.03)_0%,transparent_70%)] bg-fixed">

      {/* ─── Page Header ─── */}
      <header className="pt-12 md:pt-16 pb-6">
        <div className="flex items-center gap-2.5 text-[#6a6a82] font-mono text-sm font-medium mb-3">
          <span>~/</span><span>work</span><span className="text-[#6a6a82] font-light">·</span><span>projects</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          My <span className="text-[#00ff88]">Work</span>
        </h1>
        <p className="text-[#a0a0b8] text-base md:text-lg max-w-xl mt-2.5 font-normal">
          Currently crafting scalable full-stack solutions. Here is my featured
          project — more are in the pipeline.
        </p>
      </header>

      {/* ─── Terminal Block ─── */}
      <div className="my-4 mb-12 bg-[#111118] rounded-xl p-4 md:p-5 border border-white/5 font-mono text-sm overflow-x-auto">
        <div className="flex items-center gap-3 text-[#a0a0b8] py-0.5">
          <span className="text-[#6a6a82]">$</span>
          <span className="text-[#00ff88]">cat</span>
          <span className="text-[#a0a0b8]">portfolio.ts</span>
        </div>
        <div className="flex items-center gap-3 text-[#a0a0b8] py-0.5">
          <span className="text-[#6a6a82]">// Shivanshu Prajapati · Full Stack Developer</span>
        </div>
        <div className="flex items-center gap-3 text-[#a0a0b8] py-0.5">
          <span className="text-[#6a6a82]">const</span>
          <span className="text-[#00ff88]">engineer</span>
          <span className="text-[#6a6a82]">=</span>
          <span className="text-[#a0a0b8]">{'{'}</span>
        </div>
        <div className="flex items-center gap-3 text-[#a0a0b8] py-0.5 pl-5">
          <span className="text-[#6a6a82]">name:</span>
          <span className="text-[#00ff88]">'Shivanshu Prajapati'</span>
          <span className="text-[#6a6a82]">,</span>
        </div>
        <div className="flex items-center gap-3 text-[#a0a0b8] py-0.5 pl-5">
          <span className="text-[#6a6a82]">status:</span>
          <span className="text-[#00ff88]">'building new projects'</span>
          <span className="text-[#6a6a82]">,</span>
        </div>
        <div className="flex items-center gap-3 text-[#a0a0b8] py-0.5 pl-5">
          <span className="text-[#6a6a82]">projects:</span>
          <span className="text-[#a0a0b8]">{projects.length} live + more soon</span>
        </div>
        <div className="flex items-center gap-3 text-[#a0a0b8] py-0.5">
          <span className="text-[#6a6a82]">{'}'}</span>
        </div>
      </div>

      {/* ─── Project Grid ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 pt-2 pb-5">
        
        {/* Existing Projects (अगर हैं तो) */}
        {hasProjects &&
          projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#16161f] rounded-2xl p-6 md:p-7 border border-white/5 transition-all duration-200 hover:bg-[#1c1c2a] hover:-translate-y-1 hover:shadow-2xl hover:border-[rgba(0,255,136,0.15)] flex flex-col overflow-hidden"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 text-[0.55rem] font-semibold uppercase tracking-wider text-[#00ff88] bg-[rgba(0,255,136,0.12)] px-3 py-0.5 rounded-full border border-[rgba(0,255,136,0.12)]">
                  ⭐ Featured
                </div>
              )}

              {/* Top row */}
              <div className="flex items-start justify-between mb-3.5">
                <div className="w-11 h-11 rounded-xl bg-[rgba(0,255,136,0.12)] flex items-center justify-center text-xl flex-shrink-0 border border-[rgba(0,255,136,0.08)]">
                  {project.icon}
                </div>
                <div className="flex gap-2.5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-[#a0a0b8] hover:bg-[rgba(0,255,136,0.12)] hover:text-[#00ff88] transition-all duration-200 border border-transparent hover:scale-105 no-underline text-sm"
                      aria-label="Live demo"
                    >
                      🔗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-[#a0a0b8] hover:bg-[rgba(0,255,136,0.12)] hover:text-[#00ff88] transition-all duration-200 border border-transparent hover:scale-105 no-underline text-sm"
                      aria-label="GitHub"
                    >
                      🐙
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2 text-[#f0f0f5]">
                {project.title}
              </h3>
              <p className="text-[#a0a0b8] text-sm md:text-[0.92rem] leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/5 text-[#a0a0b8] text-[0.65rem] font-medium px-3 py-1 rounded-full border border-white/5 transition-all duration-200 font-mono hover:bg-[rgba(0,255,136,0.12)] hover:text-[#00ff88]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[#6a6a82] text-xs font-mono">{project.year}</span>
              </div>
            </div>
          ))}

        {/* ─── "Currently Crafting" बैनर (यह फेक 'Coming Soon' नहीं है) ─── */}
        <div className="col-span-1 md:col-span-1 relative bg-gradient-to-br from-[#111118] to-[#0f0f18] rounded-2xl p-8 border border-dashed border-[rgba(0,255,136,0.2)] flex flex-col items-center justify-center text-center min-h-[280px] hover:border-[rgba(0,255,136,0.4)] transition-all duration-300 group">
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
            🚧
          </div>
          <h3 className="text-xl font-bold text-[#f0f0f5] mb-2">
            Building the Next Big Thing
          </h3>
          <p className="text-[#a0a0b8] text-sm max-w-xs mx-auto">
            I’m currently architecting new full-stack applications. 
            <br />
            <span className="text-[#00ff88] font-mono text-xs block mt-3">
              &gt; work_in_progress.exe
            </span>
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/Shivanshu666"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#00ff88] text-[#0a0a0f] font-semibold text-sm rounded-lg hover:bg-[#00dd77] transition-colors shadow-lg shadow-[rgba(0,255,136,0.2)]"
            >
              View GitHub
            </a>
            <Link
              href="/contact"
              className="px-5 py-2 bg-white/5 text-[#f0f0f5] font-semibold text-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Extra Call to Action for HR ─── */}
      <div className="mt-8 p-6 bg-[rgba(0,255,136,0.04)] rounded-2xl border border-[rgba(0,255,136,0.08)] text-center">
        <p className="text-[#a0a0b8] text-sm">
          👋 <span className="text-[#f0f0f5] font-medium">Looking for a dedicated developer?</span> 
          <br className="sm:hidden" /> I’m available for freelance or full-time roles. 
          <Link href="/contact" className="text-[#00ff88] font-medium hover:underline ml-1">
            Let’s build something great together.
          </Link>
        </p>
      </div>
    </div>
  );
}