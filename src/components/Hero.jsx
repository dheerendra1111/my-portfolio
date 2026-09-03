import { useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon, EmailIcon, ArrowDownIcon } from "./Icons";

/* ── Particle Canvas ──────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let animId;

    const PARTICLE_COUNT = 90;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15,
      twinkleSpeed: Math.random() * 0.008 + 0.003,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    }));

    const LINE_DIST = 130;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.twinkleSpeed * p.twinkleDir;
        if (p.alpha > 0.65 || p.alpha < 0.1) p.twinkleDir *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 160, 255, ${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            const opacity = (1 - dist / LINE_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ── Profile Photo Visual ─────────────────────────────────── */
function ProfileVisual() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent-500/25 to-violet-600/15 blur-3xl animate-[pulse-glow_6s_ease-in-out_infinite]" />
      </div>

      {/* Second glow layer – offset for depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-56 h-56 rounded-full blur-2xl opacity-30"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
        />
      </div>

      {/* Rotating gradient ring */}
      <div
        className="relative rounded-full p-[3px]"
        style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa, #4f46e5, #6366f1)",
          backgroundSize: "200% 200%",
          animation: "ring-spin 4s linear infinite",
        }}
      >
        {/* Inner dark ring spacer */}
        <div className="rounded-full p-1 bg-dark-950">
          {/* Photo */}
          <img
            src="/profile.jpg"
            alt="Dheerendra Singh Lodhi"
            className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top"
            style={{ filter: "brightness(1.05) contrast(1.02)" }}
          />
        </div>
      </div>

      {/* Available badge — top-right */}
      <div className="absolute -top-2 -right-2 flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 backdrop-blur-sm float">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-semibold text-emerald-400 whitespace-nowrap">
          Open to Work
        </span>
      </div>

      {/* Floating tech badges */}
      <div className="absolute -bottom-3 -left-4 glass-light rounded-full px-3 py-1.5 text-xs font-medium text-accent-400 float-delay hidden sm:block">
        React
      </div>
      <div className="absolute top-6 -left-8 glass-light rounded-full px-3 py-1.5 text-xs font-medium text-accent-400 float hidden lg:block">
        Node.js
      </div>
      <div className="absolute bottom-10 -right-6 glass-light rounded-full px-3 py-1.5 text-xs font-medium text-accent-400 float-delay-2 hidden lg:block">
        C++
      </div>
      <div className="absolute top-1/2 -right-10 glass-light rounded-full px-3 py-1.5 text-xs font-medium text-accent-400 float hidden sm:block">
        MongoDB
      </div>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-20 overflow-hidden"
    >
      {/* Particle canvas */}
      <ParticleCanvas />

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-5 sm:px-8 md:flex-row md:gap-16 lg:gap-20 relative z-10">
        {/* Left — Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="hero-anim-1 mb-3 text-sm font-medium uppercase tracking-widest text-accent-400">
            Software Engineer
          </p>
          <h1 className="hero-anim-2 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm {personalInfo.firstName}{" "}
            <span className="inline-block origin-[70%_70%] animate-[wave_2.5s_ease-in-out_infinite]">
              👋
            </span>
          </h1>
          <p className="hero-anim-3 mt-4 text-xl font-semibold text-gray-300 sm:text-2xl lg:text-3xl">
            {personalInfo.tagline}
          </p>
          <p className="hero-anim-4 mt-5 max-w-lg text-base leading-relaxed text-gray-400 md:text-lg">
            {personalInfo.description}
          </p>

          {/* Buttons */}
          <div className="hero-anim-5 mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href="#projects"
              className="btn-primary rounded-xl px-7 py-3.5 text-sm font-semibold text-white"
              id="hero-cta-work"
            >
              <span>View My Work</span>
            </a>
            <a
              href="#contact"
              className="btn-outline rounded-xl px-7 py-3.5 text-sm font-semibold text-gray-300"
              id="hero-cta-connect"
            >
              Let's Connect
            </a>
          </div>

          {/* Social icons */}
          <div className="hero-anim-5 mt-8 flex items-center justify-center gap-4 md:justify-start">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-gray-400 transition-colors hover:bg-dark-600 hover:text-white"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-gray-400 transition-colors hover:bg-dark-600 hover:text-white"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-lg p-2.5 text-gray-400 transition-colors hover:bg-dark-600 hover:text-white"
              aria-label="Send email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* Right — Profile Photo */}
        <div className="hero-visual flex-1 flex items-center justify-center">
          <ProfileVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex">
        <span className="text-xs text-gray-500">Scroll down</span>
        <ArrowDownIcon className="w-4 h-4 text-gray-500 animate-bounce" />
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes ring-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
