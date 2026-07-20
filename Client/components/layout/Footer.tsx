"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] border-t border-white/5 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-white">AR<span className="gradient-blue">.</span>dev</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#4f8cff] bg-[#4f8cff]/10 px-3 py-1 rounded-full">Senior Engineer</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="text-sm text-white/30 text-center">
            <p>© 2026 Alex Rivera · All rights reserved</p>
            <p className="text-[10px] text-white/20">Built with Next.js, TanStack, and ❤️</p>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <span>Architected for performance · Scalable · Open source</span>
          <span>UK based · Remote friendly</span>
        </div>
      </div>
    </footer>
  );
}