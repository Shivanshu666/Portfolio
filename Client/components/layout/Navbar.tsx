"use client";

import { useState, useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/work", label: "Work" },
  // { href: "/blog", label: "Blog" },
  // { href: "/experience", label: "More" },
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
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  handleScroll(); // run once immediately

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useLayoutEffect(() => {
  const update = () => {
    const el = linkRefs.current[activeKey];

    if (!el || !el.parentElement) return;

    const parentRect = el.parentElement.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  const raf = requestAnimationFrame(() => {
    document.fonts?.ready?.then(update);
  });

  window.addEventListener("resize", update);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", update);
  };
}, [activeKey]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto">
  {/* Navbar */}
  <div
    className={`flex items-center justify-between md:justify-center rounded-full px-3 text-sm py-1 transition-all duration-500 ${
      scrolled
        ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30"
        : "bg-white/5 backdrop-blur-md border border-white/10"
    }`}
  >
    {/* Desktop Navigation */}
    <div
      className="relative hidden md:flex items-center gap-1"
      onMouseLeave={() => setHovered(null)}
    >
      <span
        className="absolute inset-y-0 rounded-full bg-white/10 transition-all duration-300"
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
          className={`relative z-10 px-4 py-2 rounded-full text-sm transition ${
            pathname === link.href
              ? "text-white"
              : "text-white/60 hover:text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>

    {/* Desktop Button */}
    <div className="hidden md:flex ml-3">
      <Button href="#contact">Book a Call</Button>
    </div>

    {/* Mobile */}
    <div className="flex md:hidden items-center justify-between w-full">
      <span className="text-white font-semibold">Shivanshu</span>

      <button
        aria-label="Menu"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex flex-col justify-center items-center w-10 h-10"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            mobileOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${
            mobileOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden overflow-hidden transition-all duration-300 ${
      mobileOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
    }`}
  >
    <div className="rounded-3xl bg-[#0b0e14]/95 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-2">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setMobileOpen(false)}
          className={`px-4 py-3 rounded-xl transition ${
            pathname === link.href
              ? "bg-white/10 text-white"
              : "text-white/60 hover:bg-white/5 hover:text-white"
          }`}
        >
          {link.label}
        </Link>
      ))}

      <Button
        href="#contact"
        className="w-full justify-center mt-2"
      >
        Book a Call
      </Button>
    </div>
  </div>
</nav>
  );
}