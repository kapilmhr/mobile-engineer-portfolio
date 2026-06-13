/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState, ReactNode, FormEvent } from 'react';
import { ArrowUpRight, Code2, Smartphone, Terminal, Cpu, Layers, Github, Linkedin, Mail, MapPin, Navigation, Shield, Lock, TrendingUp, Plane, Ticket, QrCode, CreditCard, ArrowRight, Heart, Play, Plus, Database, Server, Activity, Zap, CheckCircle, Timer, Wifi, LineChart, User } from 'lucide-react';
import { siApple, siAndroid, siSwift, siKotlin, siReact, siFlutter, siBluetooth } from 'simple-icons';

function SimpleIcon({ icon, size = 24, className = "" }: { icon: any, size?: number, className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

import { HowItWorksSection } from './HowItWorksSection';
import { EngineeringSolutionsSection } from './EngineeringSolutionsSection';
import { SystemArchitectureSection } from './SystemArchitectureSection';
import { EngineeringDeepDivesSection } from './EngineeringDeepDivesSection';
import { ThoughtLeadershipSection } from './ThoughtLeadershipSection.tsx';
import { OpenSourceSection } from './OpenSourceSection';
import ContactFooter from './ContactFooter';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black text-white selection:bg-white/30">
      <div className="noise-bg" />
      
      {/* Custom Cursor Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      <main className="relative z-10">
        <HeroSection />
        {/* <AboutSection /> */}
        <ImpactMetricsSection />
        <HowItWorksSection />
        <SystemArchitectureSection />
        <EngineeringDeepDivesSection />
        <EngineeringSolutionsSection />
        <ThoughtLeadershipSection />
        <OpenSourceSection />
      </main>
      <ContactFooter />
    </div>
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 50, -30, 0], y: [0, -70, 40, 0], scale: [1, 1.18, 0.88, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute rounded-full"
        style={{
          top: '-15%', left: '-10%',
          width: '65vw', height: '65vw', maxWidth: 750, maxHeight: 750,
          background: 'var(--hero-orb-gradient-lg)',
          filter: 'blur(70px)',
        }}
      />
      <motion.div
        animate={{ x: [0, -50, 70, 0], y: [0, 60, -40, 0], scale: [1, 0.82, 1.12, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute rounded-full"
        style={{
          top: '25%', right: '-12%',
          width: '55vw', height: '55vw', maxWidth: 650, maxHeight: 650,
          background: 'var(--hero-orb-gradient-sm)',
          filter: 'blur(70px)',
        }}
      />
    </div>
  );
}

function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace('#', '');
  const safe = normalized.length === 3
    ? normalized.split('').map((c) => c + c).join('')
    : normalized;
  const int = Number.parseInt(safe, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function TechPill({ label, color }: { label: string; color: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2 }}
      className="inline-flex items-center gap-1.5 font-mono text-[10px] rounded-full px-3 py-1 tracking-[0.04em] cursor-default select-none"
      style={{
        color: hovered ? 'var(--hero-pill-text-hover)' : hexToRgba(color, 0.85),
        background: hovered ? hexToRgba(color, 0.1) : hexToRgba(color, 0.05),
        border: `1px solid ${hovered ? hexToRgba(color, 0.45) : hexToRgba(color, 0.25)}`,
        boxShadow: hovered ? `0 0 18px ${hexToRgba(color, 0.2)}` : 'none',
        transition: 'color 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{
          background: color,
          opacity: hovered ? 1 : 0.6,
          boxShadow: hovered ? `0 0 6px ${color}` : 'none',
          transition: 'opacity 0.25s ease, box-shadow 0.25s ease',
        }}
      />
      {label}
    </motion.span>
  );
}

function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const pills = [
    { label: 'iOS',            color: '#38bdf8' },
    { label: 'Android',           color: '#a78bfa' },
    { label: 'Flutter',   color: '#22d3ee' },
    { label: 'KMP',              color: '#60a5fa' },
    { label: 'SwiftUI',          color: '#f472b6' },
    { label: 'Jetpack Compose',  color: '#4ade80' },
    { label: 'React Native',     color: '#f59e0b' },
  ];

  const stats = [
    { icon: TrendingUp, value: '1M+', label: 'users · largest app shipped',   iconColor: '#4ade80', iconBg: 'rgba(74,222,128,0.10)',  iconBorder: 'rgba(74,222,128,0.22)'  },
    { icon: Timer,      value: '55%', label: 'TTI · crash · ANR gains',       iconColor: '#60a5fa', iconBg: 'rgba(96,165,250,0.10)',  iconBorder: 'rgba(96,165,250,0.22)'  },
    { icon: Layers,     value: '7+',  label: 'migrations led · every stack',  iconColor: '#fbbf24', iconBg: 'rgba(251,191,36,0.10)',  iconBorder: 'rgba(251,191,36,0.22)'  },
    { icon: User,       value: '7',   label: 'senior engineers mentored',     iconColor: '#a78bfa', iconBg: 'rgba(167,139,250,0.10)', iconBorder: 'rgba(167,139,250,0.22)' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: 'var(--hero-bg)' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 dot-grid" style={{ opacity: 0.45 }} />
      <FloatingOrbs />

      {/* Two-column layout */}
      <div className="relative z-10 flex-1 flex flex-row items-center px-6 lg:px-20 pt-24 pb-12 w-full max-w-7xl mx-auto gap-12 lg:gap-20">

        {/* Left: content */}
        <div className="flex-1 flex flex-col items-start text-left">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full"
            style={{ background: 'var(--hero-badge-bg)', border: '1px solid var(--hero-badge-border)', backdropFilter: 'blur(12px)' }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--hero-accent-success)', animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            <span className="font-mono text-[11px] tracking-[0.05em]" style={{ color: 'var(--hero-accent-success)' }}>
              Staff / Principal Engineer · Sydney AU
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[11px] tracking-[0.18em] uppercase mb-5"
            style={{ color: 'var(--hero-text-secondary)' }}
          >
            Staff Mobile Engineer · 12+ years production
          </motion.p>

          {/* Hero headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="font-black mb-6"
            style={{ color: 'var(--hero-text-primary)', fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.03, letterSpacing: '-0.04em' }}
          >
            I've shipped on<br />
            <span className="shimmer-text">every major</span><br />
            mobile stack.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-[15px] leading-relaxed mb-8"
            style={{ color: 'var(--hero-text-tertiary)' }}
          >
            Swift · Kotlin · Dart · KMP · React Native —{' '}
            not as a generalist, but someone who has led{' '}
            <span className="font-medium" style={{ color: 'var(--hero-text-secondary)' }}>7 production migrations</span>{' '}
            and shipped to{' '}
            <span className="font-medium" style={{ color: 'var(--hero-text-secondary)' }}>1M+ users</span>.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
            }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {pills.map(pill => (
              <TechPill key={pill.label} label={pill.label} color={pill.color} />
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('architecture')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
              style={{ background: 'var(--hero-cta-gradient)', boxShadow: 'var(--hero-cta-glow)', transition: 'box-shadow 0.2s ease' }}
            >
              <ArrowRight size={15} /> See the architecture
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, color: 'var(--hero-text-primary)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('problems')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-colors duration-200"
              style={{
                color: 'var(--hero-text-secondary)',
                background: 'var(--hero-button-secondary-bg)',
                border: '1px solid var(--hero-button-secondary-border)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Terminal size={15} /> Engineering deep dives
            </motion.button>
          </motion.div>

        </div>

        {/* Right: image only */}
        <motion.img
          src="/kapil_avatar.png"
          alt="Kapil — Staff Mobile Engineer"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block flex-shrink-0 w-[22vw] max-w-[300px] min-w-[180px] h-auto"
        />

      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
        style={{
          borderTop: '1px solid var(--hero-divider)',
          background: 'rgba(8,10,15,0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 pt-5 pb-3 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="glass-2 rounded-xl p-4 flex items-center gap-3 cursor-default"
            >
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                style={{ background: stat.iconBg, border: `1px solid ${stat.iconBorder}` }}
              >
                <stat.icon size={15} style={{ color: stat.iconColor }} />
              </div>
              <div>
                <div className="font-black text-[17px] leading-none mb-1" style={{ color: 'var(--hero-text-primary)' }}>{stat.value}</div>
                <div className="font-mono text-[10px] leading-tight" style={{ color: 'var(--hero-text-secondary)' }}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metadata row */}
        <div
          className="max-w-4xl mx-auto px-6 pb-5 flex flex-wrap items-center gap-4 font-mono text-[11px]"
          style={{
            color: 'var(--hero-text-secondary)',
            borderTop: '1px solid var(--hero-divider)',
            paddingTop: '12px',
          }}
        >
          <div className="flex items-center gap-1.5">
            <Github size={12} style={{ color: '#60a5fa' }} /> 50+ repos
          </div>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="flex items-center gap-1.5">
            <Timer size={12} style={{ color: '#fbbf24' }} /> 12+ years production mobile
          </div>
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div className="flex items-center gap-1.5">
            <MapPin size={12} style={{ color: '#22d3ee' }} /> Sydney, Australia · UTC+10
          </div>
          <div className="flex items-center gap-1.5 ml-auto" style={{ color: 'var(--hero-text-secondary)' }}>
            iOS · Android · Flutter · KMP · RN
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <div className="about-container">

        <div className="about-left">

          <div className="about-availability">
            <span className="avail-dot"></span>
            <span className="avail-text">Open to select opportunities</span>
          </div>

          <p className="about-label">// about</p>

          <h2 className="about-name">
            Staff<br/>
            <span>Engineer.</span>
          </h2>

          <div className="about-philosophy">
            <p className="phil-label">Engineering Philosophy</p>
            <blockquote className="phil-quote">
              "Ship with conviction, refactor with humility, 
              and always leave the codebase better than 
              you found it."
            </blockquote>
          </div>

          <div className="about-domains">
            <span className="domain-tag">Consumer</span>
            <span className="domain-tag">Enterprise</span>
            <span className="domain-tag">Mobile-First</span>
            <span className="domain-tag">Scale-up</span>
            <span className="domain-tag">Consulting</span>
          </div>

        </div>

        <div className="about-right">

          <div className="about-bio-card">
            <div className="bio-card-header">
              <span className="bio-card-label">bio.md</span>
              <span className="bio-card-lang">markdown</span>
            </div>
            <div className="bio-card-body">
              <p className="bio-text">
                Staff Engineer with 10+ years building mobile-first 
                products across <strong>consumer</strong> and 
                <strong>enterprise</strong> — two of the most 
                demanding domains for reliability, performance, 
                and user trust.
              </p>
              <p className="bio-text">
                I've shaped engineering culture and technical 
                direction at scale-ups, enterprise organisations, 
                and consulting environments, bringing the same 
                standard of craft to each context.
              </p>
              <p className="bio-text">
                Currently embedded in a cross-functional product 
                org, I work closely with a team of engineers across 
                mobile, full-stack, and platform — setting technical 
                direction, raising the bar on developer experience, 
                and turning ambiguous problems into clear, 
                scalable solutions.
              </p>
            </div>
          </div>

          <div className="about-stats-row">

            <div className="about-mini-stat">
              <span className="mini-stat-num">10<em>+</em></span>
              <span className="mini-stat-label">Years</span>
            </div>

            <div className="about-mini-stat">
              <span className="mini-stat-num">2</span>
              <span className="mini-stat-label">Domains</span>
            </div>

            <div className="about-mini-stat">
              <span className="mini-stat-num">3</span>
              <span className="mini-stat-label">Company Types</span>
            </div>

            <div className="about-mini-stat">
              <span className="mini-stat-num">15<em>+</em></span>
              <span className="mini-stat-label">Engineers Led</span>
            </div>

          </div>

          <div className="about-focus-row">
            <p className="focus-label">// focus areas</p>
            <div className="focus-items">
              <div className="focus-item">
                <span className="focus-icon">◈</span>
                <span>Native Mobile Engineering (Swift / Kotlin)</span>
              </div>
              <div className="focus-item">
                <span className="focus-icon">◈</span>
                <span>Cross-Platform & KMP Architecture</span>
              </div>
              <div className="focus-item">
                <span className="focus-icon">◈</span>
                <span>Developer Experience & Tooling</span>
              </div>
              <div className="focus-item">
                <span className="focus-icon">◈</span>
                <span>Technical Leadership & Mentorship</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function TechMarquee() {
  const row1 = [
    "swift/swift-original.svg", "kotlin/kotlin-original.svg", "apple/apple-original.svg", 
    "android/android-original.svg", "react/react-original.svg", "flutter/flutter-original.svg", 
    "typescript/typescript-original.svg", "tailwindcss/tailwindcss-original.svg", "figma/figma-original.svg"
  ];
  const row2 = [
    "nodejs/nodejs-original.svg", "python/python-original.svg", "go/go-original.svg", 
    "graphql/graphql-plain.svg", "firebase/firebase-original.svg", "googlecloud/googlecloud-original.svg", 
    "amazonwebservices/amazonwebservices-original-wordmark.svg", "mongodb/mongodb-original.svg", "postgresql/postgresql-original.svg"
  ];
  const row3 = [
    "docker/docker-original.svg", "kubernetes/kubernetes-plain.svg", "github/github-original.svg", 
    "gitlab/gitlab-original.svg", "jira/jira-original.svg", "slack/slack-original.svg", 
    "redis/redis-original.svg", "linux/linux-original.svg", "vercel/vercel-original.svg"
  ];

  const renderRow = (icons: string[], reverse: boolean = false) => (
    <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} w-max py-2`}>
      {[...icons, ...icons, ...icons].map((icon, i) => (
        <div 
          key={i} 
          className="mx-4 md:mx-6 w-16 h-16 md:w-20 md:h-20 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-center grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
        >
          <img 
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`} 
            alt="tech-logo" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain" 
          />
        </div>
      ))}
    </div>
  );

  return (
    <section id="stack" className="w-full overflow-hidden py-16 border-y border-white/5 bg-zinc-950/50 relative flex flex-col gap-2">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
      
      {renderRow(row1)}
      {renderRow(row2, true)}
      {renderRow(row3)}
    </section>
  );
}

function ImpactMetricsSection() {
  const [counts, setCounts] = useState({ users: 0, perf: 0, eng: 0, mig: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const techPillClassByLabel: Record<string, string> = {
    "React Native": "text-[#fbbf24] bg-[#f59e0b]/14 border-[#f59e0b]/35",
    "Native iOS + Android": "text-[#c4b5fd] bg-[#a78bfa]/14 border-[#a78bfa]/35",
    "Flutter": "text-[#67e8f9] bg-[#22d3ee]/14 border-[#22d3ee]/35",
    "Legacy iOS (ObjC/UIKit)": "text-[#cbd5e1] bg-[#94a3b8]/14 border-[#94a3b8]/35",
    "SwiftUI": "text-[#f9a8d4] bg-[#f472b6]/14 border-[#f472b6]/35",
    "Legacy Android (Java)": "text-[#cbd5e1] bg-[#94a3b8]/14 border-[#94a3b8]/35",
    "Jetpack Compose": "text-[#86efac] bg-[#4ade80]/14 border-[#4ade80]/35",
    "KMP shared logic": "text-[#93c5fd] bg-[#60a5fa]/14 border-[#60a5fa]/35"
  };

  const getTechPillClass = (label: string) =>
    techPillClassByLabel[label] ?? "text-[#cbd5e1] bg-[#334155]/20 border-[#475569]/40";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const start = Date.now();
          const timer = setInterval(() => {
            const now = Date.now();
            const elapsed = now - start;
            
            setCounts({
              users: Math.min(1000, Math.round((elapsed / 1200) * 1000)),
              perf: Math.min(55, Math.round((elapsed / 1000) * 55)),
              eng: Math.min(7, Math.round((elapsed / 900) * 7)),
              mig: Math.min(7, Math.round((elapsed / 900) * 7))
            });

            if (elapsed >= 1200) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const migrations = [
    { from: "React Native", to: "Flutter", note: "cross-platform consolidation" },
    { from: "React Native", to: "Native iOS + Android", note: "performance-critical rewrite" },
    { from: "Native iOS + Android", to: "Flutter", note: "single codebase, full parity" },
    { from: "Legacy iOS (ObjC/UIKit)", to: "SwiftUI", note: "incremental, zero downtime" },
    { from: "Legacy Android (Java)", to: "Jetpack Compose", note: "module-by-module migration" },
    { from: "Native iOS + Android", to: "KMP shared logic", note: "business layer extraction" },
    { from: "Native iOS + Android", to: "React Native", note: "team velocity optimisation" }
  ];

  return (
    <section id="stats" ref={sectionRef} className="pt-16 px-6 md:px-12 lg:px-24 bg-zinc-950">
      <div className="max-w-[960px] mx-auto">
        <div className="font-mono text-[11px] uppercase text-[#93c5fd] tracking-[0.1em] mb-3">
          Impact metrics
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-zinc-100 mb-3">
          Results That Scaled In Production
        </h2>
        <div className="text-sm md:text-[15px] text-zinc-300 leading-relaxed mb-8 max-w-2xl">
          12+ years shipping native iOS, Android, and cross-platform products, with measurable gains in performance, reliability, and delivery speed, including 7 end-to-end platform migrations.
        </div>

        {/* Block 1 — Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 mb-8">
          {/* Card 1 */}
          {[
            { value: counts.users >= 1000 ? `${(counts.users/1000).toFixed(1)}M+` : String(counts.users), label: 'Users Served', desc: 'Largest production app shipped across iOS & Android', color: '#4ade80', delay: 0.05 },
            { value: `${counts.perf}%`, label: 'Perf Improvement', desc: 'TTI, crash rate, ANR & app size across multiple apps', color: '#f59e0b', delay: 0.15 },
            { value: String(counts.eng), label: 'Engineers Mentored', desc: 'iOS, Android & Flutter engineers across cross-functional teams', color: '#a78bfa', delay: 0.25 },
            { value: `${counts.mig}+`, label: 'Migrations Led', desc: 'End-to-end platform rewrites across every major mobile stack', color: '#f472b6', delay: 0.35 },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative overflow-hidden glass-2 rounded-2xl p-6 group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(circle at 50% 0%, ${card.color}10, transparent 65%)` }} />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ background: card.color }} />
              <div className="text-[40px] font-black leading-none mb-2" style={{ color: card.color }}>{card.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] mb-3" style={{ color: `${card.color}99` }}>{card.label}</div>
              <div className="text-[12px] text-zinc-300 leading-relaxed">{card.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Block 2 — Migration track record strip */}
        <div className="bg-[#111827] border border-[#334155] rounded-xl p-5 mb-4">
          <div className="flex justify-between items-center mb-6">
            <div className="font-mono text-[11px] uppercase text-[#cbd5e1] tracking-[0.08em]">Migration track record</div>
            <div className="font-mono text-[11px] text-[#86efac] bg-[#4ade80]/15 border border-[#4ade80]/35 px-3 py-1 rounded-full">
              7 end-to-end rewrites
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {migrations.map((mig, i) => (
              <div key={i} className="flex items-center gap-2.5 overflow-hidden">
                <div className={`font-mono text-[11px] px-2.5 py-1 rounded-md border whitespace-nowrap ${getTechPillClass(mig.from)}`}>
                  {mig.from}
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
                <div className={`font-mono text-[11px] px-2.5 py-1 rounded-md border whitespace-nowrap ${getTechPillClass(mig.to)}`}>
                  {mig.to}
                </div>
                <div className="font-mono text-[11px] text-[#94a3b8] ml-auto hidden sm:block truncate mig-note">
                  {mig.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block 3 — Platform footnote */}
        <div className="text-center font-mono text-[11px] text-[#94a3b8] pt-1">
          iOS · Android · Flutter · KMP · React Native · SwiftUI · Jetpack Compose → shipped across all
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: "01",
      title: "High-Performance Mapping",
      category: "Performance",
      challenge: "Rendering 10,000+ custom markers on a map caused severe frame drops, UI freezing, and excessive battery drain on older mobile devices.",
      solution: "Implemented a custom QuadTree clustering algorithm in C++ and offloaded marker rendering directly to the GPU using Metal and OpenGL.",
      widget: <MapMarkersWidget />
    },
    {
      id: "02",
      title: "Real-Time Sync & Notifications",
      category: "Networking",
      challenge: "Push notifications were arriving out of order or getting lost entirely during poor cellular network conditions.",
      solution: "Built a robust local SQLite queuing system with optimistic UI updates and a background sync engine with conflict resolution.",
      widget: <PushNotifWidget />
    },
    {
      id: "03",
      title: "Dynamic Pathfinding Engine",
      category: "Algorithms",
      challenge: "Calculating complex, multi-stop delivery routes entirely on the client side was too slow and consumed excessive memory.",
      solution: "Developed a hybrid routing architecture. The server pre-calculates primary nodes, while the mobile client uses a lightweight A* algorithm.",
      widget: <MapRouteWidget />
    },
    {
      id: "04",
      title: "Resumable Download Manager",
      category: "Networking",
      challenge: "Downloading large 500MB+ asset bundles frequently failed on unstable 3G/4G connections, forcing users to restart.",
      solution: "Engineered a chunked, resumable download manager with dynamic bandwidth allocation and MD5 hash integrity verification.",
      widget: <DownloadWidget />
    },
    {
      id: "05",
      title: "E2E Encrypted Chat",
      category: "Security & UX",
      challenge: "Healthcare professionals needed to discuss patient data via chat, but standard messaging protocols didn't meet HIPAA compliance.",
      solution: "Implemented the Signal Protocol for true End-to-End Encryption (E2EE) using Curve25519 and AES-256. Messages are decrypted entirely on-device.",
      widget: <SecureChatWidget />
    },
    {
      id: "06",
      title: "Dynamic Premium Engine",
      category: "Algorithms",
      challenge: "The legacy insurance quoting engine required a full page reload and a 5-second server roundtrip for every parameter change.",
      solution: "Architected a local reactive rules engine using a directed acyclic graph (DAG) to instantly calculate premiums on-device.",
      widget: <InsuranceWidget />
    },
    {
      id: "07",
      title: "Real-Time Trading Engine",
      category: "Performance",
      challenge: "Rendering high-frequency financial data (candlestick charts, live order books) caused severe UI thread blocking and battery drain on mobile.",
      solution: "Implemented a custom WebGL/Canvas rendering pipeline for charts and utilized WebSockets with binary payloads (Protobuf) to minimize parsing overhead.",
      widget: <TradingWidget />
    },
    {
      id: "08",
      title: "Seamless Booking Flow",
      category: "Security & UX",
      challenge: "The flight booking process was disjointed, requiring multiple full-page loads which led to a 40% drop-off rate during checkout.",
      solution: "Architected a single-page animated transition flow using shared element transitions and optimistic pre-fetching for instant perceived load times.",
      widget: <FlightWidget />
    },
    {
      id: "09",
      title: "High-Speed Profile Matching",
      category: "Algorithms",
      challenge: "Matching users in real-time based on complex multi-dimensional vectors (like color preferences) was slow and resulted in stale recommendations.",
      solution: "Engineered an in-memory graph database and a WebSocket-driven matching engine that processes millions of vectors to instantly pair users.",
      widget: <DatingMatchWidget />
    },
    {
      id: "10",
      title: "Adaptive Video Streaming",
      category: "Networking",
      challenge: "Users on fluctuating 3G/4G networks experienced constant buffering and poor video quality during playback.",
      solution: "Implemented a custom HLS (HTTP Live Streaming) player with dynamic bitrate switching and edge-caching to ensure zero-buffering playback.",
      widget: <StreamingWidget />
    }
  ];

  const filters = ['All', 'Performance', 'Networking', 'Algorithms', 'Security & UX'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="solutions" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 flex justify-between items-end border-b border-white/10 pb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Engineering Solutions</h2>
          <span className="font-mono text-sm text-white/40">({filteredProjects.length})</span>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-16">
          {filters.map(filter => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                  : 'glass-2 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div 
                key={p.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-2 hover:border-white/[0.14] p-6 md:p-8 rounded-[2.5rem] flex flex-col items-center gap-8 transition-all duration-300 h-full group"
              >
                
                {/* Interactive Prototype */}
                <div className="shrink-0">
                  <MobileMockup title={`${p.id}. ${p.title}`}>
                    {p.widget}
                  </MobileMockup>
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col w-full">
                  <div className="mb-6">
                    <div className="font-mono text-xs text-white/40 mb-2">{p.id} // {p.category.toUpperCase()}</div>
                    <h3 className="text-2xl md:text-3xl font-bold">{p.title}</h3>
                  </div>
                
                  <div className="space-y-4 mt-auto">
                    <div className="glass-1 p-5 rounded-2xl">
                      <h4 className="text-white/80 font-mono text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        The Challenge
                      </h4>
                      <p className="text-white/60 leading-relaxed text-sm">{p.challenge}</p>
                    </div>

                    <div className="glass-1 p-5 rounded-2xl">
                      <h4 className="text-white/80 font-mono text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        The Solution
                      </h4>
                      <p className="text-white/60 leading-relaxed text-sm">{p.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function MobileMockup({ children, title }: { children: ReactNode, title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative w-[280px] h-[580px] rounded-[3rem] border-[8px] border-zinc-800 bg-black overflow-hidden shadow-2xl shadow-black/50 flex flex-col group"
    >
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50 flex items-center justify-between px-2">
        <div className="w-2 h-2 rounded-full bg-green-900/50" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
      </div>

      {/* Content */}
      <div className="flex-1 relative w-full h-full">
        {children}
      </div>

      {/* Overlay Label */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-40 pointer-events-none">
        <p className="font-mono text-xs text-white/60 tracking-widest uppercase">{title}</p>
      </div>
    </motion.div>
  );
}

const MockMapBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div 
      className="w-full h-full opacity-40"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundColor: '#1a1a2e'
      }}
    />
    <div className="absolute inset-0 bg-zinc-950/50" />
    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/80" />
  </div>
);

function MapMarkersWidget() {
  return (
    <div className="absolute inset-0 bg-zinc-950 overflow-hidden">
      <MockMapBackground />
      
      <div className="absolute top-[30%] left-[40%]">
        <MockMarker color="bg-white" />
      </div>
      <div className="absolute top-[60%] left-[20%]">
        <MockMarker color="bg-cyan-500" />
      </div>
      <div className="absolute top-[45%] left-[70%]">
        <MockMarker color="bg-emerald-500" />
      </div>
    </div>
  );
}

function MockMarker({ color }: { color: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div 
        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute w-10 h-10 rounded-full ${color} opacity-30`}
      />
      <div className={`w-4 h-4 rounded-full ${color} shadow-[0_0_15px_rgba(255,255,255,0.3)] border-2 border-zinc-900 z-10 flex items-center justify-center`} />
    </div>
  );
}

function MapRouteWidget() {
  return (
    <div className="absolute inset-0 bg-zinc-950 overflow-hidden">
      <MockMapBackground />
      
      <svg className="absolute inset-0 w-full h-full z-10">
        <motion.path
          d="M 60 150 Q 120 100 180 200 T 220 350"
          fill="none"
          stroke="#4285F4"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      
      <div className="absolute top-[150px] left-[60px] -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-5 h-5 rounded-full bg-white border-[4px] border-zinc-900 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-black rounded-full" />
        </div>
      </div>
      
      <div className="absolute top-[350px] left-[220px] -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-6 h-6 rounded-full bg-cyan-500 border-[4px] border-zinc-900 shadow-[0_0_15px_rgba(6,182,212,0.8)] flex items-center justify-center">
          <Navigation size={10} className="text-zinc-950 fill-zinc-950 rotate-45" />
        </div>
      </div>
    </div>
  );
}

function PushNotifWidget() {
  const [notifications, setNotifications] = useState<{id: number, title: string, body: string}[]>([]);

  useEffect(() => {
    let id = 0;
    const messages = [
      { id: 1, title: "Payment Received", body: "$4,200.00 from Client" },
      { id: 2, title: "System Alert", body: "Server CPU at 80%" },
      { id: 3, title: "New Message", body: "Are we still on for 3PM?" },
      { id: 4, title: "Deployment", body: "v2.0.4 successfully deployed" }
    ];

    const interval = setInterval(() => {
      if (id < messages.length) {
        const msg = messages[id];
        if (msg) {
          setNotifications(prev => [msg, ...prev]);
        }
        id++;
      } else {
        setNotifications([]);
        id = 0;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-zinc-950 p-4 pt-16 overflow-hidden flex flex-col gap-3">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="text-xs font-medium text-white/60 uppercase tracking-wider">{n.title}</span>
            </div>
            <p className="text-sm text-white">{n.body}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function DownloadWidget() {
  const [files, setFiles] = useState([
    { name: "core_engine.dll", progress: 0, speed: "2.4 MB/s" },
    { name: "assets_bundle.zip", progress: 0, speed: "5.1 MB/s" },
    { name: "config_prod.json", progress: 0, speed: "1.2 MB/s" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFiles(prev => prev.map(f => {
        if (f.progress >= 100) return { ...f, progress: 0 };
        return { ...f, progress: Math.min(100, f.progress + Math.random() * 15) };
      }));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-zinc-950 p-6 pt-16 flex flex-col gap-6">
      <h3 className="text-white/80 font-mono text-xs uppercase tracking-widest mb-2">Active Downloads</h3>
      {files.map((f, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-white">{f.name}</span>
            <span className="text-white/50">{Math.round(f.progress)}%</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${f.progress}%` }}
              transition={{ ease: "linear", duration: 0.5 }}
            />
          </div>
          <div className="text-[10px] font-mono text-white/40 text-right">{f.speed}</div>
        </div>
      ))}
    </div>
  );
}

function SecureChatWidget() {
  const [messages, setMessages] = useState<{id: number, text: string, sender: 'me' | 'them', decrypted: boolean}[]>([]);
  
  useEffect(() => {
    const script = [
      { text: "Patient labs are ready.", sender: 'them' },
      { text: "I'll review them now.", sender: 'me' },
      { text: "Dosage updated to 50mg.", sender: 'them' },
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < script.length) {
        const msg = { id: Date.now(), text: script[i].text, sender: script[i].sender as 'me'|'them', decrypted: false };
        setMessages(prev => [...prev, msg]);
        
        // Decrypt after 1.5s
        setTimeout(() => {
          setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, decrypted: true } : m));
        }, 1500);
        
        i++;
      } else {
        setMessages([]);
        i = 0;
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-zinc-950 flex flex-col">
      <div className="pt-12 pb-4 px-4 border-b border-white/10 bg-zinc-900/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center">
          <Shield size={14} className="text-white" />
        </div>
        <div>
          <div className="text-sm font-medium text-white">Dr. Sarah Jenkins</div>
          <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
            <Lock size={8} /> E2E Encrypted
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">
        <AnimatePresence>
          {messages.map(m => (
            <motion.div 
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.sender === 'me' ? 'bg-blue-600 text-white self-end rounded-tr-sm' : 'bg-zinc-800 text-white self-start rounded-tl-sm'}`}
            >
              {m.decrypted ? m.text : <EncryptedText length={m.text.length} />}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function EncryptedText({ length }: { length: number }) {
  const [text, setText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
  useEffect(() => {
    const interval = setInterval(() => {
      let str = "";
      for(let i=0; i<length; i++) str += chars[Math.floor(Math.random() * chars.length)];
      setText(str);
    }, 50);
    return () => clearInterval(interval);
  }, [length]);
  return <span className="font-mono text-xs opacity-70 break-all">{text}</span>;
}

function InsuranceWidget() {
  const [step, setStep] = useState<'input' | 'calculating' | 'result'>('input');
  const [plan, setPlan] = useState('Comprehensive');
  const [age, setAge] = useState(30);
  const [term, setTerm] = useState(20);
  const [sumAssured, setSumAssured] = useState(500000);
  const [premium, setPremium] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let timer: any;
    const wait = (ms: number) => new Promise(r => { timer = setTimeout(r, ms); });

    const runDemo = async () => {
      while (isMounted) {
        setStep('input');
        setPlan('Basic');
        setAge(25);
        setTerm(10);
        setSumAssured(250000);
        setIsPressed(false);

        await wait(1500);
        if (!isMounted) break;
        setPlan('Comprehensive');

        await wait(800);
        if (!isMounted) break;
        setAge(42);

        await wait(800);
        if (!isMounted) break;
        setTerm(20);

        await wait(800);
        if (!isMounted) break;
        setSumAssured(750000);

        await wait(1200);
        if (!isMounted) break;
        setIsPressed(true);

        await wait(200);
        if (!isMounted) break;
        setStep('calculating');

        await wait(1500);
        if (!isMounted) break;
        
        const baseRate = 1.5; // Comprehensive
        const calc = (750000 / 1000) * baseRate * (42 / 20) * (20 / 10);
        setPremium(calc);
        setStep('result');

        await wait(4000);
      }
    };

    runDemo();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-zinc-950 flex flex-col pointer-events-none">
      <AnimatePresence mode="wait">
        {step === 'input' && (
          <motion.div key="input" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="p-5 pt-10 flex-1 flex flex-col gap-6 overflow-y-auto">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium text-white/70">Plan Type</span>
              <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
                {['Basic', 'Comprehensive', 'Premium'].map(p => (
                  <div 
                    key={p} 
                    className={`flex-1 text-center text-[10px] py-2 rounded-md transition-colors ${plan === p ? 'bg-cyan-500 text-zinc-950 font-bold' : 'text-white/60'}`}
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Slider label="Age" value={age} min={18} max={70} step={1} format={(v: number) => `${v} yrs`} onChange={() => {}} />
              <Slider label="Term" value={term} min={5} max={30} step={5} format={(v: number) => `${v} yrs`} onChange={() => {}} />
              <Slider label="Sum Assured" value={sumAssured} min={100000} max={1000000} step={50000} format={(v: number) => `$${v/1000}k`} onChange={() => {}} />
            </div>
            
            <div className="mt-auto pt-4">
              <motion.div 
                animate={{ scale: isPressed ? 0.95 : 1, opacity: isPressed ? 0.8 : 1 }}
                className="w-full py-3 bg-cyan-500 text-zinc-950 rounded-xl font-bold text-center"
              >
                Calculate Premium
              </motion.div>
            </div>
          </motion.div>
        )}
        
        {step === 'calculating' && (
          <motion.div key="calc" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            <div className="text-xs text-cyan-400/60 font-mono animate-pulse">Running DAG Rules...</div>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div key="result" initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0}} className="p-6 pt-16 flex-1 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-white font-bold text-xl mb-1">Quote Ready</h3>
            <p className="text-white/50 text-xs mb-8">Based on your {plan} plan</p>
            
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 mb-auto">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                <span className="text-white/60 text-sm">Coverage</span>
                <span className="text-white font-medium">${sumAssured.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Monthly Premium</span>
                <span className="text-3xl font-bold text-white">${premium.toFixed(0)}</span>
              </div>
            </div>

            <div className="w-full py-3 bg-white/10 text-white rounded-xl font-medium mt-4 opacity-50">
              Recalculate
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Slider({ label, value, min, max, step, format, onChange }: any) {
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs font-medium">
        <span className="text-white/70">{label}</span>
        <span className="text-white">{format(value)}</span>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-cyan-500 rounded-full"
          animate={{ width: `${percentage}%` }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        />
        <input 
          type="range" 
          min={min} max={max} step={step} 
          value={value} 
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

function InteractiveTerminal() {
  const [history, setHistory] = useState<{cmd: string, output: ReactNode}[]>([
    { cmd: 'whoami', output: 'A passionate software engineer focused on building scalable, high-performance applications.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const commands = {
    'whoami': 'Staff Mobile Engineer with 10+ years shipping production apps across iOS, Android, Flutter, KMP, and React Native.',
    'skills': 'Native: Swift, Kotlin, SwiftUI, Jetpack Compose\nCross-Platform: Flutter, KMP, React Native\nTooling: CI/CD, Fastlane, Firebase, Datadog',
    'contact': 'Email: kapilmhr016@gmail.com\nGitHub: github.com/kapilmhr\nLinkedIn: linkedin.com/in/kapil-maharjan',
    'experience': 'Staff Mobile Engineer @ Current (2023-Present)\nSenior Mobile Engineer @ Enterprise (2020-2023)\nMobile Engineer @ Scale-up (2016-2020)',
    'clear': 'CLEAR'
  };

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;
    
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }
    
    const output = commands[cmd as keyof typeof commands] || `Command not found: ${cmd}. Try 'whoami', 'skills', 'experience', or 'contact'.`;
    setHistory(prev => [...prev, { cmd, output }]);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Interactive Terminal</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-4 text-xs font-mono text-zinc-400">guest@portfolio:~</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base h-[400px] overflow-y-auto flex flex-col gap-4">
            {history.map((entry, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>$</span>
                  <span>{entry.cmd}</span>
                </div>
                <div className="text-zinc-300 whitespace-pre-wrap pl-4 border-l-2 border-zinc-800">
                  {entry.output}
                </div>
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2 text-cyan-400 mt-2">
              <span>$</span>
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white caret-cyan-400"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>

        {/* Suggested Commands */}
        <div className="mt-8 flex flex-wrap gap-3 items-center">
          <span className="text-sm text-zinc-500 font-mono py-2">Try:</span>
          {Object.keys(commands).filter(c => c !== 'clear').map(cmd => (
            <button 
              key={cmd}
              onClick={() => {
                const output = commands[cmd as keyof typeof commands];
                setHistory(prev => [...prev, { cmd, output }]);
              }}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-mono text-cyan-400 hover:bg-white/10 transition-colors"
            >
              {cmd}
            </button>
          ))}
          <button 
            onClick={() => setHistory([])}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-mono text-zinc-400 hover:bg-white/10 transition-colors"
          >
            clear
          </button>
        </div>
      </div>
    </section>
  );
}

function EngineeringPrinciplesSection() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.ep-principles-card');
      cards.forEach((c, i) => {
        setTimeout(() => {
          c.classList.add('visible');
        }, 60 + i * 100);
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="principles" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-[11px] text-[#475569] tracking-[0.1em] mb-4 uppercase">
            // engineering principles
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Engineering Principles
          </h2>
          <p className="text-[14px] text-[#475569] leading-[1.6] max-w-[540px]">
            Opinions formed by making the wrong call first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
          {/* Card 1 */}
          <div
            className="ep-principles-card relative overflow-hidden glass-2 rounded-[14px] p-[24px] hover:border-[rgba(96,165,250,0.2)] transition-all duration-300 group cursor-default"
            style={{ '--ac': '#60a5fa' } as any}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--ac)] opacity-40 rounded-b-[14px] group-hover:opacity-80 transition-opacity duration-200" />
            <svg className="mb-[20px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 22l4-6 4 3 4-8 4 4" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="22" r="1.5" fill="#60a5fa"/>
              <circle cx="22" cy="15" r="1.5" fill="#60a5fa"/>
            </svg>
            <div className="inline-block mb-[16px] px-[9px] py-[3px] rounded-[20px] border border-[rgba(96,165,250,0.2)] bg-[rgba(96,165,250,0.08)] text-[#60a5fa] font-mono text-[9px] font-semibold tracking-[0.08em] uppercase">
              Performance
            </div>
            <h3 className="text-[17px] font-bold text-[#f1f5f9] tracking-[-0.01em] mb-[10px]">
              Instrument first. Never guess.
            </h3>
            <p className="text-[13px] text-[#64748b] leading-[1.75]">
              Profiler before hypothesis — always on a release build on a real device. Intuition about where the bottleneck is will be wrong more often than not.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="ep-principles-card relative overflow-hidden glass-2 rounded-[14px] p-[24px] hover:border-[rgba(251,191,36,0.2)] transition-all duration-300 group cursor-default"
            style={{ '--ac': '#fbbf24' } as any}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--ac)] opacity-40 rounded-b-[14px] group-hover:opacity-80 transition-opacity duration-200" />
            <svg className="mb-[20px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="8" width="18" height="13" rx="3" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M10 8V6a4 4 0 018 0v2" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="14" cy="14.5" r="2" fill="#fbbf24" opacity="0.7"/>
            </svg>
            <div className="inline-block mb-[16px] px-[9px] py-[3px] rounded-[20px] border border-[rgba(251,191,36,0.2)] bg-[rgba(251,191,36,0.08)] text-[#fbbf24] font-mono text-[9px] font-semibold tracking-[0.08em] uppercase">
              Architecture
            </div>
            <h3 className="text-[17px] font-bold text-[#f1f5f9] tracking-[-0.01em] mb-[10px]">
              Defer framework decisions until the last responsible moment.
            </h3>
            <p className="text-[13px] text-[#64748b] leading-[1.75]">
              Most migrations I've led existed because a team locked in a framework before requirements were stable. Decide when you have evidence, not enthusiasm.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="ep-principles-card relative overflow-hidden glass-2 rounded-[14px] p-[24px] hover:border-[rgba(167,139,250,0.2)] transition-all duration-300 group cursor-default"
            style={{ '--ac': '#a78bfa' } as any}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--ac)] opacity-40 rounded-b-[14px] group-hover:opacity-80 transition-opacity duration-200" />
            <svg className="mb-[20px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="6" width="9" height="16" rx="2.5" stroke="#a78bfa" strokeWidth="1.8"/>
              <rect x="15" y="6" width="9" height="16" rx="2.5" stroke="#a78bfa" strokeWidth="1.8"/>
              <path d="M13 14h2" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <div className="inline-block mb-[16px] px-[9px] py-[3px] rounded-[20px] border border-[rgba(167,139,250,0.2)] bg-[rgba(167,139,250,0.1)] text-[#a78bfa] font-mono text-[9px] font-semibold tracking-[0.08em] uppercase">
              Cross-Platform
            </div>
            <h3 className="text-[17px] font-bold text-[#f1f5f9] tracking-[-0.01em] mb-[10px]">
              Know what the abstraction is hiding.
            </h3>
            <p className="text-[13px] text-[#64748b] leading-[1.75]">
              Flutter, RN, and KMP all have a native layer underneath. The bugs that matter live there. Native depth is what lets you fix the problem instead of working around it.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="ep-principles-card relative overflow-hidden glass-2 rounded-[14px] p-[24px] hover:border-[rgba(74,222,128,0.2)] transition-all duration-300 group cursor-default"
            style={{ '--ac': '#4ade80' } as any}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--ac)] opacity-40 rounded-b-[14px] group-hover:opacity-80 transition-opacity duration-200" />
            <svg className="mb-[20px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 4v4 M14 20v4 M4 14h4 M20 14h4" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="14" cy="14" r="5" stroke="#4ade80" strokeWidth="1.8"/>
              <circle cx="14" cy="14" r="2" fill="#4ade80" opacity="0.5"/>
            </svg>
            <div className="inline-block mb-[16px] px-[9px] py-[3px] rounded-[20px] border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.08)] text-[#4ade80] font-mono text-[9px] font-semibold tracking-[0.08em] uppercase">
              Production
            </div>
            <h3 className="text-[17px] font-bold text-[#f1f5f9] tracking-[-0.01em] mb-[10px]">
              The simulator is a hypothesis. Production is the spec.
            </h3>
            <p className="text-[13px] text-[#64748b] leading-[1.75]">
              Real device, release build, throttled network. The bugs that matter never surface in CI — they show up on a 3-year-old mid-range Android on a flaky 4G connection.
            </p>
          </div>

          {/* Card 5 */}
          <div
            className="ep-principles-card relative overflow-hidden glass-2 rounded-[14px] p-[24px] hover:border-[rgba(244,114,182,0.2)] transition-all duration-300 group cursor-default"
            style={{ '--ac': '#f472b6' } as any}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--ac)] opacity-40 rounded-b-[14px] group-hover:opacity-80 transition-opacity duration-200" />
            <svg className="mb-[20px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14l5 5 9-9" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="14" cy="14" r="10" stroke="#f472b6" strokeWidth="1.8" opacity="0.3"/>
            </svg>
            <div className="inline-block mb-[16px] px-[9px] py-[3px] rounded-[20px] border border-[rgba(244,114,182,0.2)] bg-[rgba(244,114,182,0.08)] text-[#f472b6] font-mono text-[9px] font-semibold tracking-[0.08em] uppercase">
              Leadership
            </div>
            <h3 className="text-[17px] font-bold text-[#f1f5f9] tracking-[-0.01em] mb-[10px]">
              Raise the team's decision quality. Don't make all the decisions.
            </h3>
            <p className="text-[13px] text-[#64748b] leading-[1.75]">
              The worst thing a staff engineer can do is become a bottleneck. Write the ADR, run the spike, set the standard — then get out of the way.
            </p>
          </div>

          {/* Card 6 */}
          <div
            className="ep-principles-card relative overflow-hidden glass-2 rounded-[14px] p-[24px] hover:border-[rgba(248,113,113,0.2)] transition-all duration-300 group cursor-default"
            style={{ '--ac': '#f87171' } as any}
          >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--ac)] opacity-40 rounded-b-[14px] group-hover:opacity-80 transition-opacity duration-200" />
            <svg className="mb-[20px]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 5v9l5 3" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="14" cy="14" r="10" stroke="#f87171" strokeWidth="1.8" opacity="0.3"/>
              <path d="M4.5 9.5A10 10 0 014 14" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <div className="inline-block mb-[16px] px-[9px] py-[3px] rounded-[20px] border border-[rgba(248,113,113,0.2)] bg-[rgba(248,113,113,0.08)] text-[#f87171] font-mono text-[9px] font-semibold tracking-[0.08em] uppercase">
              Delivery
            </div>
            <h3 className="text-[17px] font-bold text-[#f1f5f9] tracking-[-0.01em] mb-[10px]">
              Incremental migration beats the big rewrite. Every time.
            </h3>
            <p className="text-[13px] text-[#64748b] leading-[1.75]">
              Keep the app shippable at every commit. Define done as 'old system deleted' not 'new system built.' The teams that shipped never stopped delivering features mid-migration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StackSection() {
  const skills = [
    { name: "iOS", level: "Expert", icon: <SimpleIcon icon={siApple} size={24} /> },
    { name: "Android", level: "Expert", icon: <SimpleIcon icon={siAndroid} size={24} /> },
    { name: "Swift & SwiftUI", level: "Expert", icon: <SimpleIcon icon={siSwift} size={24} /> },
    { name: "Kotlin & Compose", level: "Advanced", icon: <SimpleIcon icon={siKotlin} size={24} /> },
    { name: "React Native", level: "Expert", icon: <SimpleIcon icon={siReact} size={24} /> },
    { name: "Flutter", level: "Advanced", icon: <SimpleIcon icon={siFlutter} size={24} /> },
    { name: "CoreBluetooth", level: "Specialized", icon: <SimpleIcon icon={siBluetooth} size={24} /> },
    { name: "Metal & ARKit", level: "Specialized", icon: <Cpu size={24} /> },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex justify-between items-end border-b border-white/10 pb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Technical Arsenal</h2>
          <span className="font-mono text-sm text-white/40">STACK</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="p-4 rounded-2xl glass-panel text-white/50 group-hover:text-white transition-colors">
                {skill.icon}
              </div>
              <div>
                <h4 className="text-xl font-medium mb-1">{skill.name}</h4>
                <p className="font-mono text-xs text-white/40 uppercase tracking-wider">{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradingWidget() {
  const [price, setPrice] = useState(64250.00);
  const [data, setData] = useState<number[]>(Array.from({length: 40}, () => 64000 + Math.random() * 500));
  const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.48) * 50;
      setPrice(p => {
        const newP = p + change;
        setIsUp(newP >= p);
        setData(d => [...d.slice(1), newP]);
        return newP;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((d, i) => `${(i / 39) * 100},${100 - ((d - min) / range) * 100}`).join(' ');

  return (
    <div className="absolute inset-0 bg-zinc-950 flex flex-col font-mono text-xs select-none pointer-events-none">
      <div className="p-4 border-b border-white/10 flex justify-between items-end bg-zinc-900/50 pt-12">
        <div>
          <div className="text-white/50 mb-1 flex items-center gap-1"><TrendingUp size={12}/> BTC/USD</div>
          <div className={`text-2xl font-bold ${isUp ? 'text-emerald-400' : 'text-red-400'}`}>
            ${price.toFixed(2)}
          </div>
        </div>
        <div className={`text-right ${isUp ? 'text-emerald-400' : 'text-red-400'}`}>
          {isUp ? '+' : ''}{(price - 64000).toFixed(2)} ({( (price - 64000)/64000 * 100 ).toFixed(2)}%)
        </div>
      </div>
      
      <div className="h-40 relative border-b border-white/10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-80">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isUp ? '#34d399' : '#f87171'} stopOpacity="0.3" />
              <stop offset="100%" stopColor={isUp ? '#34d399' : '#f87171'} stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`0,100 ${points} 100,100`} fill="url(#chartGrad)" />
          <polyline points={points} fill="none" stroke={isUp ? '#34d399' : '#f87171'} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="flex-1 flex p-2 gap-2 overflow-hidden">
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-white/40 text-[9px] mb-1">BIDS</div>
          {Array.from({length: 8}).map((_, i) => (
            <div key={`bid-${i}`} className="flex justify-between text-emerald-400/80">
              <span>{(price - Math.random() * 10 - i * 5).toFixed(2)}</span>
              <span>{(Math.random() * 2).toFixed(3)}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-white/40 text-[9px] mb-1 text-right">ASKS</div>
          {Array.from({length: 8}).map((_, i) => (
            <div key={`ask-${i}`} className="flex justify-between text-red-400/80">
              <span>{(Math.random() * 2).toFixed(3)}</span>
              <span>{(price + Math.random() * 10 + i * 5).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlightWidget() {
  const [step, setStep] = useState<'list' | 'booking' | 'ticket'>('list');
  const [selected, setSelected] = useState(false);
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      while(isMounted) {
        setStep('list'); setSelected(false); setPaying(false);
        await new Promise(r => setTimeout(r, 2000));
        if(!isMounted) break;
        setSelected(true);
        await new Promise(r => setTimeout(r, 600));
        if(!isMounted) break;
        setStep('booking');
        await new Promise(r => setTimeout(r, 2000));
        if(!isMounted) break;
        setPaying(true);
        await new Promise(r => setTimeout(r, 1500));
        if(!isMounted) break;
        setStep('ticket');
        await new Promise(r => setTimeout(r, 4000));
      }
    };
    run();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="absolute inset-0 bg-zinc-950 flex flex-col pointer-events-none overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'list' && (
          <motion.div key="list" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, y: -20}} className="p-4 pt-12 flex-1 flex flex-col gap-4">
            <div className="text-white font-medium mb-2 flex items-center gap-2">
              SFO <ArrowRight size={14} className="text-white/50"/> JFK
            </div>
            
            <motion.div animate={{ scale: selected ? 0.95 : 1, opacity: selected ? 0.8 : 1 }} className={`bg-white/10 border ${selected ? 'border-cyan-500' : 'border-white/10'} rounded-2xl p-4`}>
              <div className="flex justify-between items-center mb-3">
                <div className="text-white font-bold text-lg">08:00</div>
                <div className="h-[1px] flex-1 bg-white/20 mx-3 relative">
                  <Plane size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50" />
                </div>
                <div className="text-white font-bold text-lg">16:30</div>
              </div>
              <div className="flex justify-between text-xs text-white/50">
                <span>Non-stop • 5h 30m</span>
                <span className="text-white font-medium">$450</span>
              </div>
            </motion.div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-4 opacity-50">
              <div className="flex justify-between items-center mb-3">
                <div className="text-white font-bold text-lg">11:15</div>
                <div className="h-[1px] flex-1 bg-white/20 mx-3 relative">
                  <Plane size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50" />
                </div>
                <div className="text-white font-bold text-lg">20:45</div>
              </div>
              <div className="flex justify-between text-xs text-white/50">
                <span>1 stop • 6h 30m</span>
                <span className="text-white font-medium">$380</span>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'booking' && (
          <motion.div key="booking" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, scale: 0.95}} className="p-4 pt-12 flex-1 flex flex-col">
            <div className="text-white font-medium mb-6">Checkout</div>
            
            <div className="bg-white/10 rounded-2xl p-4 mb-6">
              <div className="text-xs text-white/50 mb-1">Passenger</div>
              <div className="text-white font-medium">Alex Developer</div>
            </div>

            <div className="bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl p-4 mb-auto text-white shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <CreditCard size={20} />
                <span className="font-mono text-xs opacity-80">VISA</span>
              </div>
              <div className="font-mono tracking-widest mb-2">**** **** **** 4242</div>
              <div className="flex justify-between text-[10px] opacity-80">
                <span>ALEX DEVELOPER</span>
                <span>12/28</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-white mb-4">
                <span>Total</span>
                <span className="font-bold">$450.00</span>
              </div>
              <motion.div animate={{ scale: paying ? 0.95 : 1, opacity: paying ? 0.8 : 1 }} className="w-full py-3 bg-cyan-500 text-zinc-950 rounded-xl font-bold flex justify-center items-center h-12">
                {paying ? <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" /> : "Pay Now"}
              </motion.div>
            </div>
          </motion.div>
        )}

        {step === 'ticket' && (
          <motion.div key="ticket" initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0}} className="p-4 pt-12 flex-1 flex flex-col items-center justify-center">
            <div className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-blue-600 p-6 text-white text-center relative">
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-zinc-950 rounded-full" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-zinc-950 rounded-full" />
                <Plane size={24} className="mx-auto mb-2" />
                <div className="text-sm font-medium opacity-80">Boarding Pass</div>
              </div>
              
              <div className="p-6 border-b border-dashed border-zinc-300 relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-zinc-950 rounded-full" />
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-zinc-950 rounded-full" />
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-4xl font-bold text-zinc-900">SFO</div>
                    <div className="text-xs text-zinc-500">San Francisco</div>
                  </div>
                  <ArrowRight size={20} className="text-zinc-300" />
                  <div className="text-right">
                    <div className="text-4xl font-bold text-zinc-900">JFK</div>
                    <div className="text-xs text-zinc-500">New York</div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase">Flight</div>
                    <div className="font-bold text-zinc-800">DL 402</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase">Gate</div>
                    <div className="font-bold text-zinc-800">B12</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase">Seat</div>
                    <div className="font-bold text-zinc-800">14A</div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex justify-center bg-zinc-50">
                <QrCode size={100} className="text-zinc-800" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DatingMatchWidget() {
  const [phase, setPhase] = useState('scrolling');

  useEffect(() => {
    let isMounted = true;
    const run = async () => {
      while(isMounted) {
        setPhase('scrolling');
        await new Promise(r => setTimeout(r, 1500));
        if(!isMounted) break;
        setPhase('matching');
        await new Promise(r => setTimeout(r, 1500));
        if(!isMounted) break;
        setPhase('matched');
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    run();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="absolute inset-0 bg-zinc-950 overflow-hidden flex flex-col items-center justify-center">
      <AnimatePresence>
        {phase === 'matched' && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute z-50 flex flex-col items-center"
          >
            <Heart className="text-pink-500 fill-pink-500 w-16 h-16 mb-2 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
            <div className="text-pink-500 font-black text-3xl tracking-widest drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">MATCHED</div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        animate={{ 
          y: phase === 'scrolling' ? 0 : -120,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col gap-4 w-full px-6 absolute top-20"
      >
        <ProfileCard gender="male" active={false} phase={phase} />
        <ProfileCard gender="female" active={true} phase={phase} id="target1" />
        <ProfileCard gender="male" active={false} phase={phase} />
        <ProfileCard gender="male" active={true} phase={phase} id="target2" />
        <ProfileCard gender="female" active={false} phase={phase} />
      </motion.div>
    </div>
  );
}

function ProfileCard({ gender, active, phase, id }: { gender: 'male' | 'female', active: boolean, phase: string, id?: string }) {
  const isMatched = phase === 'matched' && active;
  const isMatching = phase === 'matching' && active;
  const isDimmed = (phase === 'matching' || phase === 'matched') && !active;

  let yOffset = 0;
  if (isMatched) {
    if (id === 'target1') yOffset = 100;
    if (id === 'target2') yOffset = -100;
  }

  return (
    <motion.div
      animate={{
        scale: isMatched ? 1.1 : isMatching ? 1.05 : isDimmed ? 0.9 : 1,
        opacity: isDimmed ? 0.2 : 1,
        y: yOffset,
        zIndex: active ? 10 : 1
      }}
      className={`w-full h-32 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 p-4 flex flex-col justify-end relative overflow-hidden shadow-lg`}
    >
      {isMatching && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}
          className="absolute inset-0 border-2 border-pink-500/50 rounded-2xl"
        />
      )}
      
      {/* Subtle Gender Icon Background */}
      <div className="absolute top-4 right-4 opacity-20">
        {gender === 'male' ? (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
            <circle cx="10" cy="14" r="5"/>
            <path d="M14 10l5-5"/>
            <path d="M19 5v5"/>
            <path d="M14 5h5"/>
          </svg>
        ) : (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
            <circle cx="12" cy="10" r="5"/>
            <path d="M12 15v7"/>
            <path d="M9 19h6"/>
          </svg>
        )}
      </div>

      <div className="w-1/2 h-4 bg-zinc-700/50 rounded-full mb-2 z-10" />
      <div className="w-3/4 h-3 bg-zinc-700/30 rounded-full z-10" />
    </motion.div>
  );
}

function StreamingWidget() {
  return (
    <div className="absolute inset-0 bg-zinc-950 flex flex-col overflow-hidden">
      {/* Hero Video Placeholder */}
      <div className="relative h-[55%] w-full bg-zinc-900 shrink-0">
        <div 
          className="w-full h-full opacity-60"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        
        <div className="absolute bottom-6 left-0 right-0 px-4 flex flex-col items-center">
          <div className="text-white font-black text-3xl tracking-widest mb-1 drop-shadow-lg">TEARS OF STEEL</div>
          <div className="text-white/80 text-xs font-medium mb-4 flex gap-2">
            <span className="text-green-400 font-bold">98% Match</span>
            <span>2012</span>
            <span className="border border-white/40 px-1 rounded text-[10px]">HD</span>
          </div>
          <div className="flex gap-3 w-full">
            <button className="flex-1 bg-white text-black py-2 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
              <Play size={16} fill="currentColor" /> Play
            </button>
            <button className="flex-1 bg-zinc-800/80 text-white py-2 rounded-md font-bold flex items-center justify-center gap-2 border border-white/10 hover:bg-zinc-700 transition-colors">
              <Plus size={16} /> My List
            </button>
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="flex-1 p-4 flex flex-col gap-6 overflow-hidden">
        <div>
          <div className="text-white font-bold text-sm mb-3">Trending Now</div>
          <div className="flex gap-3 overflow-hidden">
            {[['#4a1942','#6a0572'], ['#1a237e','#283593'], ['#004d40','#00695c'], ['#bf360c','#d84315']].map((colors, i) => (
              <div key={i} className="w-24 h-36 bg-zinc-800 rounded-md shrink-0 relative overflow-hidden">
                <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}