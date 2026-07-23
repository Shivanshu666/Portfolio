import Link from "next/link";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/Blog" },
  { label: "More", href: "/More" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0e14] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* soft ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4f8cff]/10 blur-[120px] rounded-full" />

      {/* gradient top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 text-center md:text-left">
          {/* brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white">
              AR<span className="bg-gradient-to-r from-[#4f8cff] to-[#8b5cf6] bg-clip-text text-transparent">.</span>dev
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#4f8cff] bg-gradient-to-r from-[#4f8cff]/10 to-[#8b5cf6]/10 border border-[#4f8cff]/20 px-3.5 py-1.5 rounded-full">
              Senior Engineer
            </span>
          </div>

          {/* nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-9 text-sm">
            {NAV.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="relative text-white/45 hover:text-white transition-colors duration-300 group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-gradient-to-r from-[#4f8cff] to-[#8b5cf6] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* copyright */}
          <div className="text-sm text-white/35">
            <p>© 2026 Shivanshu Prajapati</p>
            <p className="mt-1 text-[11px] text-white/20">
              Built with Next.js, TanStack &amp; <span className="text-[#4f8cff]/70">♥</span>
            </p>
          </div>
        </div>

        {/* bottom strip */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
          <span className="text-xs text-white/25 tracking-wide">
            Architected for performance · Scalable · Open source
          </span>
          <span className="flex items-center gap-2 text-xs text-white/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
            India based · Remote friendly
          </span>
        </div>
      </div>
    </footer>
  );
}