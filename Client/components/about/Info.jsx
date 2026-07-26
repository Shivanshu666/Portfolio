"use client";
import Image from "next/image";
import Dp from "./Dp.png"
// import Dp from "../../components/about/Dp.png";

import { useEffect, useRef, useState } from "react";
import "./info.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach(el => el.classList.add("visible"));
  }, []);

  // ─── 3D Tilt Handler ──────────────────────────────
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max ±8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setRotation({ x: rotateX, y: rotateY });
    
    // Update glow position
    const glow = cardRef.current.querySelector('.tilt-glow');
    if (glow) {
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      glow.style.setProperty('--mouse-x', `${percentX}%`);
      glow.style.setProperty('--mouse-y', `${percentY}%`);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="min-h-screen bg-[#0b0e14] pt-24 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ─── ABOUT INTRO ─────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-10">
          {/* Left – Text */}
          <div className="reveal-left space-y-8">
            <span className="text-[#4f8cff] text-xs uppercase tracking-wider">
              ✦ More About Me...
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
            <div className="w-9 sm:w-12 h-1  bg-[#4f8cff] rounded"></div>
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
           <div className="flex justify-center items-center gap-6 pt-4">
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
    aria-label="GitHub"
  >
    <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
  </a>

  <a
    href="https://linkedin.com/in/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/70 hover:text-[#0A66C2] transition-all duration-300 hover:scale-110"
    aria-label="LinkedIn"
  >
    <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
  </a>

  <a
    href="mailto:your@email.com"
    className="text-white/70 hover:text-[#4f8cff] transition-all duration-300 hover:scale-110"
    aria-label="Email"
  >
    <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
  </a>
</div>
          </div>

          {/* Right – Enhanced Profile Card */}
          <div className="reveal-right flex justify-center">
            <div 
              className="relative w-full max-w-md profile-card-wrapper"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* ─── Floating Blobs ─────────────────────────────── */}
              <div className="floating-blob floating-blob-1"></div>
              <div className="floating-blob floating-blob-2"></div>
              <div className="floating-blob floating-blob-3"></div>

              {/* ─── Main Card ──────────────────────────────────── */}
              <div 
                className="profile-card"
                style={{
                  transform: isHovering 
                    ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)` 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: 'transform 0.1s ease-out',
                }}
              >
                {/* Tilt Glow */}
                <div className="tilt-glow"></div>

                {/* ─── Avatar with Pulsing Rings ────────────────── */}
                <div className="avatar-ring">
                  <div className="pulse-ring"></div>
                  <div className="pulse-ring"></div>
                  <div className="pulse-ring"></div>
   
   <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#4f8cff]/30 relative z-10">
  <Image
    src={Dp}
    alt="Profile"
    width={128}
    height={128}
    className="w-full h-full object-cover"
    priority
  />
</div>
                </div>

                {/* ─── Content ──────────────────────────────────── */}
                <h3 className="text-xl font-bold text-white mt-4">Shivanshu Prajapati</h3>
                <p className="text-white/60">Full-Stack Developer</p>
                <p className="text-xs text-white/40 mt-1">Chhattisgarh, India</p>
                
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                  <span className="skill-tag-dark">React</span>
                  <span className="skill-tag-dark">Next.js</span>
                  <span className="skill-tag-dark">Node</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-center gap-4 text-sm text-white/40">
                  <span>📧 shivanshuofficial123@gmail.com</span>
                </div>
                
                {/* ─── Availability with Animated Dot ────────────── */}
                <div className="mt-2 flex items-center justify-center gap-2 text-sm text-white/40">
                  <span className="availability-dot"></span>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}