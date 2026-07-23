"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Boxes, Database, type LucideIcon } from "lucide-react";

interface SkillItem {
  name: string;
  detail: string;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  items: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "frontend.stack",
    icon: Code2,
    accent: "#00e5ff",
    items: [
      { name: "React", detail: "component architecture" },
      { name: "Next.js", detail: "SSR / app router" },
      { name: "TypeScript", detail: "type-safe systems" },
      { name: "Tailwind CSS", detail: "utility styling" },
      { name: "Framer Motion", detail: "motion & interaction" },
    ],
  },
{
  id: "backend",
  label: "backend.stack",
  icon: Server,
  accent: "#a78bfa",
  items: [
    { name: "Node.js", detail: "JavaScript runtime" },
    { name: "Express.js", detail: "backend framework" },
    { name: "REST API", detail: "API development" },
    { name: "Postman", detail: "API testing" },
  ],
},
  {
    id: "devops",
    label: "devops.stack",
    icon: Boxes,
    accent: "#fbbf24",
    items: [
      // { name: "Kubernetes", detail: "orchestration" },
      { name: "Docker", detail: "containerization" },
      // { name: "AWS", detail: "cloud infrastructure" },
      // { name: "Terraform", detail: "infra as code" },
      { name: "CI/CD", detail: "pipelines & release" },
    ],
  },
  {
    id: "data",
    label: "data.stack",
    icon: Database,
    accent: "#34d399",
 items: [
  { name: "MongoDB", detail: "NoSQL database" },
  { name: "SQL", detail: "database querying" },
  { name: "PostgreSQL", detail: "relational database" },
  { name: "TanStack Query", detail: "server-state cache" },
],
  },
];

export default function Skills() {
  const [active, setActive] = useState<string>(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === active)!;

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white/5"
    >
      <div className="max-w-6xl mx-auto">
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
            A modern, battle-tested toolchain for building resilient applications.
          </p>
        </div>

        <div className="glass rounded-3xl overflow-hidden reveal">
          {/* terminal chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-black/20">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 text-xs font-mono text-white/40">
              ~/shiva/stack
            </span>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* sidebar - file list */}
            <nav className="md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-white/10 p-3 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
              {skillCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = cat.id === active;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`flex items-center gap-2.5 shrink-0 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-mono transition-all
                      ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/45 hover:text-white/80 hover:bg-white/5"
                      }`}
                    style={{
                      borderLeft: isActive
                        ? `2px solid ${cat.accent}`
                        : "2px solid transparent",
                    }}
                  >
                    <Icon
                      size={15}
                      style={{ color: isActive ? cat.accent : undefined }}
                    />
                    {cat.label}
                  </button>
                );
              })}
            </nav>

            {/* content - code-like output */}
            <div className="flex-1 p-6 sm:p-8 font-mono text-sm min-h-[280px]">
              <div className="text-white/40 mb-4">
                <span className="text-[#28c840]">$</span> cat {activeCategory.label}
              </div>

              <AnimatePresence mode="wait">
                <motion.ul
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {activeCategory.items.map((item, i) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                      className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3"
                    >
                      <span className="text-white">
                        <span
                          className="mr-2"
                          style={{ color: activeCategory.accent }}
                        >
                          &gt;
                        </span>
                        {item.name}
                      </span>
                      <span className="text-white/35 text-xs text-right">
                        {item.detail}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>

              <div className="mt-4 text-white/40">
                <span className="text-[#28c840]">$</span>{" "}
                <span className="inline-block w-2 h-4 bg-white/60 align-middle animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}