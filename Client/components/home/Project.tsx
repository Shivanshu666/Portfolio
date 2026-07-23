"use client"
import Link from "next/link";

// ─── DATA ──────────────────────────────────────────────────────────
interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "live" | "dev";
  liveUrl: string;
  codeUrl: string;
  previewUrl?: string;
}

const projects: Project[] = [
{
  id: "nivpharma",
  title: "NIV Pharma",
  tagline: "Pharmaceutical Import & Export Website",
  description:
    '<span class="text-[#c792ea]">const</span> website = <span class="text-[#00e5ff]">launch</span>(<span class="text-[#c3e88d]">"business"</span>) → built a responsive corporate website with <span class="text-[#00e5ff]">PDF viewing & download</span>, a backend-powered <span class="text-[#00e5ff]">contact form</span> integrated with business email, and implemented <span class="text-[#00e5ff]">SEO optimization</span> with Google Search Console, helping the website rank at the top for branded searches like <span class="text-[#c3e88d]">"NIV Pharma"</span>.',
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "SEO",
    "Google Search Console",
    "Vercel"
  ],
  status: "live",
  liveUrl: "https://www.nivpharma.org.in/",
  codeUrl: "https://github.com/Shivanshu666/Import-Export_Pharma"
},
{
  id: "aruhkoncepts",
  title: "AruhKoncepts",
  tagline: "Interior Design Business Website",
  description:
    '<span class="text-[#c792ea]">const</span> website = <span class="text-[#00e5ff]">craft</span>(<span class="text-[#c3e88d]">"creative"</span>) → developed a modern interior design website with <span class="text-[#00e5ff]">lazy loading</span>, <span class="text-[#00e5ff]">code splitting</span>, and <span class="text-[#00e5ff]">image optimization</span> for faster performance, implemented <span class="text-[#00e5ff]">SEO best practices</span>, and integrated a backend-powered <span class="text-[#00e5ff]">contact form</span> with business email notifications before deploying it on a custom domain.',
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "SEO",
    "Custom Domain"
  ],
  status: "live",
  liveUrl: "https://aruh-koncepts-interior-website-bicp.vercel.app/",
  codeUrl: "https://github.com/Shivanshu666/AruhKoncepts_InteriorWebsite"
},
{
  id: "interviewpilot-ai",
  title: "InterviewPilot AI",
  tagline: "AI-Powered Interview Preparation Platform",
  description:
    '<span class="text-[#c792ea]">const</span> platform = <span class="text-[#00e5ff]">build</span>(<span class="text-[#c3e88d]">"AI"</span>) → developed a full-stack interview platform with <span class="text-[#00e5ff]">JWT authentication</span>, <span class="text-[#00e5ff]">Gemini AI</span>-powered resume analysis, ATS compatibility reports, AI-generated interview questions, <span class="text-[#00e5ff]">PDF parsing</span>, resume optimization, and secure REST APIs deployed on Vercel & Render.',
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Gemini AI",
    "JWT"
  ],
  status: "live",
  liveUrl: "https://interview-plain-ai.vercel.app/login",
  codeUrl: "https://github.com/Shivanshu666/InterviewPlain_Ai"
},
  {
  id: "revive-auto-studio",
  title: "Revive",
  tagline: "Auto Studio & Car Garage Website",
  description:
    '<span class="text-[#c792ea]">const</span> website = <span class="text-[#00e5ff]">build</span>(<span class="text-[#c3e88d]">"automotive"</span>) → developed a responsive business website featuring a <span class="text-[#00e5ff]">service catalog</span>, a backend-powered <span class="text-[#00e5ff]">contact form</span> with email notifications, <span class="text-[#00e5ff]">SEO optimization</span>, and performance enhancements through lazy loading, code splitting, and image optimization before deploying it on a custom domain.',
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "SEO",
    "Custom Domain"
  ],
  status: "live",
  liveUrl: "https://revive-shivanshu.vercel.app/",
  codeUrl: "https://github.com/Shivanshu666/Revive-Shivanshu"
}
];

// ─── PROJECT CARD COMPONENT ──────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLive = project.status === "live";
  const delay = index * 0.08;

  return (
    <div
      className="glass rounded-3xl overflow-hidden card-hover border border-white/5 reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
          <span className="w-3 h-3 rounded-full bg-[#f5a623]"></span>
          <span className="w-3 h-3 rounded-full bg-[#3ddc84]"></span>
        </div>
        <span className="text-xs text-white/30 font-mono">{project.id}.tsx</span>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8">
        <p className="text-xs text-[#00e5ff]/70 font-mono mb-3 tracking-wider">
          PROJECT / {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-white/40 mb-4">{project.tagline}</p>

        <p
          className="text-sm text-white/60 leading-relaxed mb-5 font-mono"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span
              className={`w-2 h-2 rounded-full ${
                isLive
                  ? "bg-[#3ddc84] shadow-lg shadow-[#3ddc84]/50"
                  : "bg-[#f5a623] shadow-lg shadow-[#f5a623]/50"
              }`}
            ></span>
            {isLive ? "Live in production" : "In active development"}
          </div>

          <div className="flex gap-2">
            <Link
              href={project.codeUrl}
              className="p-2 rounded-lg border border-white/10 text-white/40 hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all duration-300"
              aria-label="View source code"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.99 3.24 9.22 7.73 10.72.56.1.77-.24.77-.54 0-.27-.01-1.15-.02-2.09-3.14.68-3.8-1.34-3.8-1.34-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.12 1.16a10.8 10.8 0 0 1 5.68 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54A10.98 10.98 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
              </svg>
            </Link>
            <Link
              href={isLive ? project.liveUrl : project.previewUrl || "#"}
              className={`p-2 rounded-lg border transition-all duration-300 flex items-center gap-1 text-xs ${
                isLive
                  ? "border-[#00e5ff]/30 text-[#00e5ff] hover:bg-[#00e5ff]/10"
                  : "border-white/10 text-white/40 hover:text-[#00e5ff] hover:border-[#00e5ff]/30"
              }`}
            >
              {isLive ? "Live" : "Preview"}
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PROJECTS COMPONENT ─────────────────────────────────────
export default function Projects() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            <span className="text-white">Projects I've </span>
            <span className="gradient-cyan font-mono">shipped</span>
          </h2>
          <div className="w-16 h-1 bg-[#00e5ff] rounded mx-auto mt-4"></div>
       
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 text-white/60 hover:text-[#00e5ff] hover:border-[#00e5ff]/50 transition-all duration-300 text-sm font-medium"
          >
            View all projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}