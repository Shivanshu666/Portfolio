"use client";

import { useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

const EvilEye = dynamic(() => import("./EvilEye"), { ssr: false });

export default function IntroEye({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

useEffect(() => {
  const html = document.documentElement;

  if (visible) {
    html.style.overflow = "hidden";
    html.style.scrollbarGutter = "stable";
  } else {
    html.style.overflow = "";
    html.style.scrollbarGutter = "stable";
  }

  return () => {
    html.style.overflow = "";
    html.style.scrollbarGutter = "";
  };
}, [visible]);
  // Auto-dismiss after a few seconds even if the user doesn't click
  useEffect(() => {
    const timer = setTimeout(() => handleEnter(), 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnter = () => {
    setClosing((prev) => {
      if (prev) return prev;
      setTimeout(() => {
  setVisible(false);

  requestAnimationFrame(() => {
    window.dispatchEvent(new Event("resize"));
  });
}, 900);
      return true;
    });
  };

  return (
    <>
      {visible && (
        <div
          onClick={handleEnter}
          className={`intro-overlay fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black px-6 transition-opacity duration-[900ms] ease-in-out ${
            closing ? "opacity-0 pointer-events-none" : "opacity-100 cursor-pointer"
          }`}
        >
          {/* Wide landscape canvas — the shader normalizes uv by canvas height, so a
              wider-than-tall box naturally produces the elongated horizontal eye
              shape (matches the react-bits reference), no square-crop needed. */}
       <div
  className={`eye-breathe relative
    w-[95vw]
    sm:w-[85vw]
    md:w-[78vw]
    lg:w-[70vw]
    xl:w-[65vw]
    aspect-[16/9]
    max-w-[1100px]
    max-h-[60vh]
    transition-transform duration-900 ease-in-out
    ${closing ? "scale-[2.2]" : "scale-100"}
  `}
>
            <EvilEye
              eyeColor="#4f8cff"
              intensity={1.7}
              pupilSize={0.6}
              irisWidth={0.25}
              glowIntensity={0.4}
              scale={0.8}
              noiseScale={1.1}
              pupilFollow={1.0}
              flameSpeed={1.1}
              backgroundColor="#000000"
            />
          </div>

          <p
            className={`enter-hint mt-8 font-mono text-[10px] tracking-[0.3em] text-white/40 transition-opacity duration-500 sm:text-xs ${
              closing ? "opacity-0" : "opacity-100"
            }`}
          >
            CLICK TO ENTER
          </p>
        </div>
      )}

      <div
        className={`site-content transition-opacity duration-700 ${
          visible && !closing ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>

      <style jsx global>{`
        .enter-hint {
          animation: hint-pulse 2s ease-in-out infinite;
        }
        @keyframes hint-pulse {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.9;
          }
        }
        .eye-breathe {
          animation: eye-breathe 4.5s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes eye-breathe {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.1);
          }
        }
      `}</style>
    </>
  );
}