"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/experience", label: "More" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const activeKey = hovered ?? pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = linkRefs.current[activeKey];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeKey, scrolled]);

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto transition-all duration-500 ease-out">
      <div
        className={`flex items-center justify-between sm:justify-center gap-2 sm:gap-6 rounded-full border transition-all duration-500 ease-out px-3 sm:px-3 py-2 ${
          scrolled
            ? "bg-white/[0.06] backdrop-blur-xl border-white/10 shadow-lg shadow-black/40"
            : "bg-white/[0.04] backdrop-blur-md border-white/10 shadow-md shadow-black/30"
        }`}
      >
        {/* Desktop nav links with sliding indicator */}
        <div
          className="relative hidden md:flex items-center gap-1"
          onMouseLeave={() => setHovered(null)}
        >
          <span
            className="absolute top-0 h-full rounded-full bg-white/10 ring-1 ring-inset ring-white/10 transition-all duration-300 ease-out"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              ref={(el) => {
                linkRefs.current[link.href] = el;
              }}
              onMouseEnter={() => setHovered(link.href)}
              className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search icon */}
        {/* <button
          aria-label="Search"
          className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button> */}

        {/* Book a Call CTA */}
   <Button
  href="/contact"
  className="hidden sm:inline-flex"
>
  Book a Call
</Button>

        {/* Mobile hamburger */}
        <button
          aria-label="Menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 rounded-3xl bg-[#0b0e14]/90 backdrop-blur-xl border border-white/10 shadow-lg p-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="cta-btn relative mt-1 text-center px-4 py-3 rounded-full text-sm font-semibold text-white overflow-hidden"
          >
            <span className="cta-shine" aria-hidden="true" />
            <span className="relative z-10">Book a Call</span>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .cta-btn {
          background: linear-gradient(135deg, #4f8cff, #7c6fff, #4f8cff);
          background-size: 200% 200%;
          background-position: 0% 50%;
          box-shadow: 0 4px 18px rgba(79, 140, 255, 0.35);
          animation: cta-gradient-shift 4s ease infinite, cta-glow-pulse 2.4s ease-in-out infinite;
        }
        .cta-btn:hover {
          background-position: 100% 50%;
          box-shadow: 0 0 0 6px rgba(79, 140, 255, 0.12), 0 6px 24px rgba(124, 111, 255, 0.5);
          transform: translateY(-1px);
        }
        .cta-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 40%;
          height: 100%;
          pointer-events: none;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          transform: translateX(-250%) skewX(-20deg);
          animation: cta-shine-sweep 2.8s ease-in-out infinite;
        }
        @keyframes cta-shine-sweep {
          0% {
            transform: translateX(-250%) skewX(-20deg);
          }
          55%,
          100% {
            transform: translateX(350%) skewX(-20deg);
          }
        }
        @keyframes cta-gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes cta-glow-pulse {
          0%,
          100% {
            box-shadow: 0 4px 18px rgba(79, 140, 255, 0.3);
          }
          50% {
            box-shadow: 0 4px 22px rgba(124, 111, 255, 0.5);
          }
        }
      `}</style>
    </nav>
  );
}