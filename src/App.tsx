/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState, ReactNode, FormEvent, PointerEvent } from 'react';
import { ArrowUpRight, Code2, Smartphone, Terminal, Cpu, Layers, Github, Linkedin, Mail, MapPin, Navigation, Shield, Lock, TrendingUp, Plane, Ticket, QrCode, CreditCard, ArrowRight, Heart, Play, Plus, Star, GitFork, ExternalLink, Database, Server, Activity, Zap, CheckCircle, WifiOff, Cloud, RefreshCw, ShieldCheck, Timer, Wifi, LineChart, User } from 'lucide-react';
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
        <AboutSection />
        <TechMarquee />
        <ImpactMetricsSection />
        <EngineeringPrinciplesSection />
        <HowItWorksSection />
        <SystemArchitectureSection />
        <EngineeringDeepDivesSection />
        <WorkSection />
        <InteractiveTerminal />
        <ThoughtLeadershipSection />
        <OpenSourceSection />
        <ContactSection />
      </main>
    </div>
  );
}

function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[520px] bg-[#080a0f] overflow-hidden pt-[60px]">
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
          `,
          backgroundSize: '52px 52px'
        }}
      />

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_320px_220px] gap-8 items-start" style={{ padding: '48px 44px 40px' }}>
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="inline-flex items-center gap-[8px] font-mono text-[10px] text-[#22d3ee] tracking-[0.06em] mb-[26px]"
            style={{
              background: 'rgba(34,211,238,0.07)',
              border: '1px solid rgba(34,211,238,0.18)',
              padding: '4px 12px',
              borderRadius: '20px'
            }}
          >
            <div className="w-[6px] h-[6px] rounded-full bg-[#22d3ee] animate-pulse" style={{ animationDuration: '2s' }} />
            Staff Mobile Engineer · 10+ years
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="font-bold text-[#f8fafc] mb-[22px]"
            style={{ fontSize: '46px', lineHeight: 1.06, letterSpacing: '-0.03em' }}
          >
            I've shipped on<br/>
            <span className="text-[#60a5fa]">every major</span><br/>
            mobile stack.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="font-mono text-[13px] text-[#475569] mb-[28px]"
            style={{ borderLeft: '2px solid #1e2a3a', paddingLeft: '14px', lineHeight: 1.85 }}
          >
            Swift · Kotlin · Dart · KMP · React Native.<br/>
            <span className="text-[#94a3b8] font-medium">Not as a generalist who dabbles</span> — as someone who has<br/>
            led <span className="text-[#60a5fa]">7 production migrations</span> between them,<br/>
            shipped to <span className="text-[#60a5fa]">1M+ users</span>, and knows exactly<br/>
            when to use each one and <span className="text-[#94a3b8] font-medium">why</span>.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="flex flex-wrap gap-[5px] mb-[30px]"
          >
            {[
              { label: 'Swift', color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.2)' },
              { label: 'Kotlin', color: '#4ade80', bg: 'rgba(74,222,128,0.08)', border: 'rgba(74,222,128,0.2)' },
              { label: 'Dart', color: '#54c5f8', bg: 'rgba(84,197,248,0.08)', border: 'rgba(84,197,248,0.2)' },
              { label: 'KMP', color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
              { label: 'SwiftUI', color: '#f472b6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.2)' },
              { label: 'Jetpack Compose', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)' },
              { label: 'React Native', color: '#60a5fa', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.2)' },
            ].map(pill => (
              <span key={pill.label} className="font-mono text-[10px] rounded-[5px]" style={{ padding: '3px 9px', color: pill.color, background: pill.bg, border: `1px solid ${pill.border}` }}>
                {pill.label}
              </span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap gap-[10px]"
          >
            <button 
              onClick={() => scrollToSection('architecture')}
              className="flex items-center gap-[6px] bg-[#60a5fa] text-[#042c53] font-mono text-[11px] font-semibold uppercase tracking-[0.05em] rounded-[8px] hover:bg-[#93c5fd] transition-colors"
              style={{ padding: '11px 20px', border: 'none' }}
            >
              <ArrowRight size={13} />
              See the architecture
            </button>
            <button 
              onClick={() => scrollToSection('engineering-principles')}
              className="flex items-center gap-[6px] bg-transparent text-[#60a5fa] font-mono text-[11px] font-medium uppercase tracking-[0.05em] rounded-[8px] hover:bg-[rgba(96,165,250,0.1)] transition-colors"
              style={{ padding: '11px 20px', border: '1px solid rgba(96,165,250,0.22)' }}
            >
              <Terminal size={13} />
              View decision log
            </button>
          </motion.div>
        </div>

        {/* CENTER COLUMN */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="relative flex flex-col items-center px-[16px] lg:col-span-1 md:col-span-2 lg:row-auto md:row-start-2"
        >
          <div className="relative w-full max-w-[290px]">
            <img
              src="avatar.png"
              alt="Kapil — Staff Mobile Engineer"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '20px',
                border: '1px solid #1e2a3a',
                display: 'block'
              }}
            />

            {/* Floating Badge - Available */}
            <div 
              className="absolute flex items-center gap-[6px] bg-[#0f172a] rounded-[10px]"
              style={{ top: '16px', left: '-20px', border: '1px solid rgba(74,222,128,0.2)', padding: '7px 12px' }}
            >
              <div className="w-[6px] h-[6px] rounded-full bg-[#4ade80] animate-pulse" style={{ animationDuration: '2s' }} />
              <span className="font-mono text-[10px] text-[#4ade80]">Available</span>
            </div>

            {/* Floating Badge - Repos */}
            <div 
              className="absolute flex items-center gap-[8px] bg-[#0f172a] rounded-[10px]"
              style={{ top: '16px', right: '-20px', border: '1px solid #1e2a3a', padding: '8px 12px' }}
            >
              <Github size={16} className="text-[#475569]" />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-[15px] text-[#f1f5f9] leading-none">50+</span>
                <span className="font-mono text-[9px] text-[#475569] tracking-[0.06em]">Open Source</span>
              </div>
            </div>

            {/* Floating Badge - Role */}
            <div 
              className="absolute flex items-center gap-[10px] bg-[#0f172a] rounded-[12px] whitespace-nowrap min-w-[220px]"
              style={{ bottom: '-16px', left: '50%', transform: 'translateX(-50%)', border: '1px solid #1e2a3a', padding: '10px 16px' }}
            >
              <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[8px]" style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}>
                <Code2 size={16} className="text-[#60a5fa]" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-semibold text-[13px] text-[#f1f5f9]">Staff Mobile Engineer</span>
                <span className="font-mono text-[10px] text-[#475569]">iOS · Android · Flutter · KMP</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-[9px] pt-[4px] pl-[8px] lg:col-span-1 md:col-span-2">
          
          {/* Stat 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="flex items-center gap-[10px] bg-[#0f172a] rounded-[11px] hover:border-[#2d3f55] transition-colors duration-200"
            style={{ border: '1px solid #1e2a3a', padding: '13px 15px' }}
          >
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[7px]" style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.15)' }}>
              <TrendingUp size={16} className="text-[#4ade80]" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[18px] text-[#4ade80] leading-none mb-[2px]">1M+</span>
              <span className="font-mono text-[9px] text-[#475569] tracking-[0.06em]">users · largest app shipped</span>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
            className="flex items-center gap-[10px] bg-[#0f172a] rounded-[11px] hover:border-[#2d3f55] transition-colors duration-200"
            style={{ border: '1px solid #1e2a3a', padding: '13px 15px' }}
          >
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[7px]" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.15)' }}>
              <Timer size={16} className="text-[#fbbf24]" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[18px] text-[#fbbf24] leading-none mb-[2px]">55%</span>
              <span className="font-mono text-[9px] text-[#475569] tracking-[0.06em]">TTI · crash · ANR gains</span>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.51, ease: "easeOut" }}
            className="flex items-center gap-[10px] bg-[#0f172a] rounded-[11px] hover:border-[#2d3f55] transition-colors duration-200"
            style={{ border: '1px solid #1e2a3a', padding: '13px 15px' }}
          >
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[7px]" style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.15)' }}>
              <ArrowRight size={16} className="text-[#a78bfa]" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[18px] text-[#a78bfa] leading-none mb-[2px]">7+</span>
              <span className="font-mono text-[9px] text-[#475569] tracking-[0.06em]">migrations · every direction</span>
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.51, ease: "easeOut" }}
            className="flex items-center gap-[10px] bg-[#0f172a] rounded-[11px] hover:border-[#2d3f55] transition-colors duration-200"
            style={{ border: '1px solid #1e2a3a', padding: '13px 15px' }}
          >
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[7px]" style={{ background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.15)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f472b6]">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-[18px] text-[#f472b6] leading-none mb-[2px]">7</span>
              <span className="font-mono text-[9px] text-[#475569] tracking-[0.06em]">senior engineers mentored</span>
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.64, ease: "easeOut" }}
            className="bg-[#0f172a] rounded-[11px] hover:border-[#2d3f55] transition-colors duration-200"
            style={{ border: '1px solid #1e2a3a', padding: '13px 15px' }}
          >
            <div className="font-mono text-[9px] text-[#334155] uppercase tracking-[0.1em] mb-[9px]">full stack · every platform</div>
            <div className="flex flex-wrap gap-[4px]">
              {[
                { label: 'UIKit', color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.2)' },
                { label: 'SwiftUI', color: '#f472b6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.2)' },
                { label: 'XML', color: '#94a3b8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.15)' },
                { label: 'Compose', color: '#4ade80', bg: 'rgba(74,222,128,0.08)', border: 'rgba(74,222,128,0.2)' },
                { label: 'Flutter', color: '#54c5f8', bg: 'rgba(84,197,248,0.08)', border: 'rgba(84,197,248,0.2)' },
                { label: 'KMP', color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)' },
                { label: 'RN', color: '#60a5fa', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.2)' },
              ].map(pill => (
                <span key={pill.label} className="font-mono text-[9px] rounded-[4px]" style={{ padding: '2px 7px', color: pill.color, background: pill.bg, border: `1px solid ${pill.border}` }}>
                  {pill.label}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Strip */}
      <div 
        className="relative z-10 flex flex-wrap items-center gap-[24px]"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '13px 44px' }}
      >
        <div className="flex items-center gap-[6px] font-mono text-[10px] text-[#334155]">
          <Github size={12} />
          50+ repos
        </div>
        <div className="w-[3px] h-[3px] rounded-full bg-[#1e2a3a]" />
        <div className="flex items-center gap-[6px] font-mono text-[10px] text-[#334155]">
          <Timer size={12} />
          10+ years production mobile
        </div>
        <div className="w-[3px] h-[3px] rounded-full bg-[#1e2a3a]" />
        <div className="flex items-center gap-[6px] font-mono text-[10px] text-[#334155]">
          <MapPin size={12} />
          Sydney, Australia · UTC+11
        </div>
        
        <div className="flex items-center gap-[6px] font-mono text-[10px] text-[#334155] ml-auto">
          <div className="w-[6px] h-[6px] rounded-full bg-[#4ade80] animate-pulse" style={{ animationDuration: '2s' }} />
          Open to staff / principal roles
        </div>
      </div>
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
    { from: "React Native", to: "Flutter", note: "cross-platform consolidation", fromColor: "text-[#60a5fa] bg-[#60a5fa]/10 border-[#60a5fa]/30", toColor: "text-[#54c5f8] bg-[#54c5f8]/10 border-[#54c5f8]/30" },
    { from: "React Native", to: "Native iOS + Android", note: "performance-critical rewrite", fromColor: "text-[#60a5fa] bg-[#60a5fa]/10 border-[#60a5fa]/30", toColor: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/30" },
    { from: "Native iOS + Android", to: "Flutter", note: "single codebase, full parity", fromColor: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/30", toColor: "text-[#54c5f8] bg-[#54c5f8]/10 border-[#54c5f8]/30" },
    { from: "Legacy iOS (ObjC/UIKit)", to: "SwiftUI", note: "incremental, zero downtime", fromColor: "text-[#94a3b8] bg-[#94a3b8]/10 border-[#94a3b8]/30", toColor: "text-[#f472b6] bg-[#f472b6]/10 border-[#f472b6]/30" },
    { from: "Legacy Android (Java)", to: "Jetpack Compose", note: "module-by-module migration", fromColor: "text-[#94a3b8] bg-[#94a3b8]/10 border-[#94a3b8]/30", toColor: "text-[#4ade80] bg-[#4ade80]/10 border-[#4ade80]/30" },
    { from: "Native iOS + Android", to: "KMP shared logic", note: "business layer extraction", fromColor: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/30", toColor: "text-[#fbbf24] bg-[#fbbf24]/10 border-[#fbbf24]/30" },
    { from: "Native iOS + Android", to: "React Native", note: "team velocity optimisation", fromColor: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/30", toColor: "text-[#60a5fa] bg-[#60a5fa]/10 border-[#60a5fa]/30" }
  ];

  return (
    <section id="stats" ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950">
      <div className="max-w-[960px] mx-auto">
        <div className="font-mono text-[11px] text-zinc-500 tracking-[0.1em] mb-8">
          // by the numbers — 10+ years shipping native iOS, Android & cross-platform
        </div>

        {/* Block 1 — Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 mb-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="bg-[#161b27] border-t border-b border-r border-[#1e2a3a] border-l-[3px] border-l-[#4ade80] p-6 rounded-tl-xl sm:rounded-bl-xl"
          >
            <div className="text-[36px] font-bold text-[#4ade80] leading-none mb-2 font-sans">
              {counts.users >= 1000 ? `${(counts.users / 1000).toFixed(1)}M+` : counts.users}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500 mb-3">users served</div>
            <div className="text-[12px] text-zinc-400 leading-relaxed">Largest production app shipped across iOS & Android</div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="bg-[#161b27] border-t border-b border-r border-[#1e2a3a] border-l-[3px] border-l-[#f59e0b] p-6 rounded-tr-xl sm:rounded-none"
          >
            <div className="text-[36px] font-bold text-[#f59e0b] leading-none mb-2 font-sans">
              {counts.perf}<span className="text-[22px]">%</span>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500 mb-3">perf improvement</div>
            <div className="text-[12px] text-zinc-400 leading-relaxed">TTI, crash rate, ANR & app size — across multiple apps</div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="bg-[#161b27] border-b sm:border-t border-r border-[#1e2a3a] border-l-[3px] border-l-[#a78bfa] p-6 rounded-bl-xl sm:rounded-none"
          >
            <div className="text-[36px] font-bold text-[#a78bfa] leading-none mb-2 font-sans">
              {counts.eng}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500 mb-3">senior engineers mentored</div>
            <div className="text-[12px] text-zinc-400 leading-relaxed">iOS, Android & Flutter engineers across cross-functional teams</div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="bg-[#161b27] border-b sm:border-t border-r border-[#1e2a3a] border-l-[3px] border-l-[#f472b6] p-6 rounded-br-xl sm:rounded-tr-xl"
          >
            <div className="text-[36px] font-bold text-[#f472b6] leading-none mb-2 font-sans">
              {counts.mig}+
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-500 mb-3">migrations led</div>
            <div className="text-[12px] text-zinc-400 leading-relaxed">End-to-end platform rewrites across every major mobile stack</div>
          </motion.div>
        </div>

        {/* Block 2 — Migration track record strip */}
        <div className="bg-[#161b27] border border-[#1e2a3a] rounded-xl p-5 mb-4">
          <div className="flex justify-between items-center mb-6">
            <div className="font-mono text-[11px] uppercase text-zinc-500 tracking-[0.08em]">Migration track record</div>
            <div className="font-mono text-[11px] text-[#4ade80] bg-[#4ade80]/10 border border-[#4ade80]/20 px-3 py-1 rounded-full">
              7 end-to-end rewrites
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {migrations.map((mig, i) => (
              <div key={i} className="flex items-center gap-2.5 overflow-hidden">
                <div className={`font-mono text-[11px] px-2.5 py-1 rounded-md border whitespace-nowrap ${mig.fromColor}`}>
                  {mig.from}
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
                <div className={`font-mono text-[11px] px-2.5 py-1 rounded-md border whitespace-nowrap ${mig.toColor}`}>
                  {mig.to}
                </div>
                <div className="font-mono text-[11px] text-[#475569] ml-auto hidden sm:block truncate mig-note">
                  {mig.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block 3 — Platform footnote */}
        <div className="text-center font-mono text-[11px] text-[#334155] pt-1">
          iOS · Android · Flutter · KMP · React Native · SwiftUI · Jetpack Compose — shipped across all
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
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-mono text-sm transition-colors ${
                activeFilter === filter 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {filter}
            </button>
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
                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2.5rem] flex flex-col items-center gap-8 hover:bg-white/[0.07] transition-colors h-full"
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
                    <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                      <h4 className="text-white/80 font-mono text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        The Challenge
                      </h4>
                      <p className="text-white/60 leading-relaxed text-sm">{p.challenge}</p>
                    </div>

                    <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
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
    <img 
      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" 
      alt="Map background" 
      className="w-full h-full object-cover grayscale invert opacity-40 contrast-125"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-zinc-950/50 mix-blend-multiply" />
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
    'whoami': 'A passionate software engineer focused on building scalable, high-performance applications.',
    'skills': 'Frontend: React, Vue, Tailwind\nBackend: Node.js, Python, Go\nDevOps: Docker, AWS, CI/CD',
    'contact': 'Email: stackflutter@gmail.com\nGitHub: github.com/stackflutter',
    'experience': 'Lead Mobile Engineer @ FinTech Unicorn (2023-Present)\nSenior iOS Developer @ HealthCare Startup (2020-2023)',
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

function ThoughtLeadershipSection() {
  const items = [
    {
      type: "Conference Talk",
      title: "Navigating the KMP Migration Minefield",
      event: "Droidcon / iOS Conf",
      year: "2024",
      link: "#",
      icon: <Play size={18} className="text-cyan-400" />
    },
    {
      type: "Article",
      title: "Why We Chose Flutter for the Enterprise Rewrite",
      event: "External Engineering Blog",
      year: "2023",
      link: "#",
      icon: <ExternalLink size={18} className="text-green-400" />
    },
    {
      type: "Architecture Decision (ADR)",
      title: "ADR-014: Unified State Management across iOS & Android",
      event: "Internal Engineering Wiki",
      year: "2023",
      link: "#",
      icon: <ShieldCheck size={18} className="text-purple-400" />
    },
    {
      type: "RFC",
      title: "RFC-089: Modularizing the Monolith for 50+ Engineers",
      event: "Internal RFC Process",
      year: "2022",
      link: "#",
      icon: <Layers size={18} className="text-amber-400" />
    }
  ];

  return (
    <section id="thought-leadership" className="py-24 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Thought Leadership</h2>
          <p className="mt-4 text-zinc-400 font-mono text-sm max-w-2xl">
            // conference talks, articles, and notable architectural decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/40 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors group relative flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <span className="font-mono text-[10px] text-zinc-500 px-2 py-1 rounded-full border border-white/10 bg-black/50">
                  {item.year}
                </span>
              </div>
              
              <div className="font-mono text-[10px] text-zinc-400 mb-2 uppercase tracking-wider">{item.type}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-snug">{item.title}</h3>
              <p className="text-sm text-zinc-500 mt-auto pt-4">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSourceSection() {
  const projects = [
    {
      name: "Hatch",
      description: "A comprehensive developer tool aimed at improving mobile workflow and productivity. Resolves the architectural bottleneck of inconsistent local development environments across teams.",
      url: "https://github.com/kapilmhr/hatch",
      language: "Dart"
    },
    {
      name: "Easy Folder Picker",
      description: "A seamless and highly customizable folder picker utility. Solves the real-world problem of fragmented file system access and permissions across different mobile OS versions.",
      url: "https://github.com/kapilmhr/Easy-Folder-Picker",
      language: "Dart"
    }
  ];

  return (
    <section id="oss" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Open Source Solutions</h2>
            <p className="mt-4 text-zinc-400 font-mono text-sm max-w-2xl">
              // architectural and real-world problem solutions built for the community
            </p>
          </div>
          <a href="https://github.com/kapilmhr" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm shrink-0">
            View GitHub <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-black/40 p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-colors group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <Github className="text-white/70 group-hover:text-cyan-400 transition-colors" size={24} />
                </div>
                <div className="flex gap-3 text-sm font-mono text-zinc-500">
                  <div className="flex items-center gap-1"><Star size={14} /></div>
                  <div className="flex items-center gap-1"><GitFork size={14} /></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8 relative z-10 flex-1">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between relative z-10 mt-auto">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                  {project.language}
                </span>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                >
                  Repository <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
          <a href="https://github.com/kapilmhr" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm">
            View GitHub <ExternalLink size={16} />
          </a>
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
            className="ep-principles-card relative overflow-hidden bg-[#111827] border-[0.5px] border-[#1e2a3a] rounded-[14px] p-[24px] hover:border-[#2d3f55] transition-colors duration-200 group"
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
            className="ep-principles-card relative overflow-hidden bg-[#111827] border-[0.5px] border-[#1e2a3a] rounded-[14px] p-[24px] hover:border-[#2d3f55] transition-colors duration-200 group"
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
            className="ep-principles-card relative overflow-hidden bg-[#111827] border-[0.5px] border-[#1e2a3a] rounded-[14px] p-[24px] hover:border-[#2d3f55] transition-colors duration-200 group"
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
            className="ep-principles-card relative overflow-hidden bg-[#111827] border-[0.5px] border-[#1e2a3a] rounded-[14px] p-[24px] hover:border-[#2d3f55] transition-colors duration-200 group"
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
            className="ep-principles-card relative overflow-hidden bg-[#111827] border-[0.5px] border-[#1e2a3a] rounded-[14px] p-[24px] hover:border-[#2d3f55] transition-colors duration-200 group"
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
            className="ep-principles-card relative overflow-hidden bg-[#111827] border-[0.5px] border-[#1e2a3a] rounded-[14px] p-[24px] hover:border-[#2d3f55] transition-colors duration-200 group"
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

function SystemArchitectureSection() {
  const [activeFlow, setActiveFlow] = useState('all');
  const [speed, setSpeed] = useState('normal');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const speeds = { slow: 3, normal: 1.5, fast: 0.5 };
  const currentSpeed = speeds[speed as keyof typeof speeds];

  const layers = [
    { id: 'cicd', label: 'CI/CD Pipeline', color: '#a855f7', y: 60 },
    { id: 'client', label: 'Client Layer', color: '#3b82f6', y: 180 },
    { id: 'edge', label: 'Edge / CDN Layer', color: '#06b6d4', y: 300 },
    { id: 'api', label: 'API Gateway & Auth', color: '#10b981', y: 420 },
    { id: 'services', label: 'Microservices Layer', color: '#f97316', y: 540 },
    { id: 'data', label: 'Data Layer', color: '#f43f5e', y: 660 },
    { id: 'obs', label: 'Observability', color: '#64748b', y: 780 },
  ];

  const nodes = [
    // CI/CD
    { id: 'github', label: 'GitHub', sub: 'Trunk-based dev', layer: 'cicd', x: 40, y: 60, color: '#a855f7', details: 'Trunk-based development with strict branch protection rules and automated PR checks.' },
    { id: 'actions', label: 'GitHub Actions', sub: '80% coverage', layer: 'cicd', x: 165, y: 60, color: '#a855f7', details: 'Automated CI pipelines running unit, UI, and E2E tests. Enforces an 80% code coverage gate.' },
    { id: 'quality', label: 'Quality Gates', sub: 'SonarQube+Snyk', layer: 'cicd', x: 290, y: 60, color: '#a855f7', details: 'Static code analysis and vulnerability scanning (SonarQube + Snyk + CodeQL) integrated directly into the PR workflow.' },
    { id: 'build', label: 'Build & Release', sub: 'Fastlane+EAS', layer: 'cicd', x: 415, y: 60, color: '#a855f7', details: 'Automated app signing, semantic versioning, and deployment to App Store/Play Store using Fastlane and EAS.' },
    { id: 'iac', label: 'Infra as Code', sub: 'Terraform+ArgoCD', layer: 'cicd', x: 540, y: 60, color: '#a855f7', details: 'Declarative infrastructure provisioning (Terraform + Helm) and GitOps-based continuous delivery to EKS via ArgoCD.' },

    // Client
    { id: 'ios', label: 'iOS', sub: 'SwiftUI+Combine', layer: 'client', x: 70, y: 180, color: '#3b82f6', details: 'Native iOS app with SwiftUI, Combine for reactive flows, and SQLite for offline-first capabilities.' },
    { id: 'android', label: 'Android', sub: 'Compose+Room', layer: 'client', x: 210, y: 180, color: '#3b82f6', details: 'Modern Android app using Jetpack Compose for UI and Room database for robust local caching.' },
    { id: 'kmm', label: 'Shared KMM', sub: 'Ktor+Coroutines', layer: 'client', x: 350, y: 180, color: '#3b82f6', dashed: true, details: 'Kotlin Multiplatform Mobile SDK sharing core business logic, networking (Ktor), and state across platforms.' },
    { id: 'web', label: 'Web PWA', sub: 'React+Workbox', layer: 'client', x: 490, y: 180, color: '#3b82f6', details: 'Progressive Web App with React, utilizing Workbox for service workers and IndexedDB for offline support.' },

    // Edge
    { id: 'cloudfront', label: 'CloudFront+WAF', sub: 'DDoS, TLS', layer: 'edge', x: 135, y: 300, color: '#06b6d4', details: 'Global CDN caching static assets, terminating TLS, and WAF protecting against DDoS and SQLi.' },
    { id: 'flags', label: 'Feature Flags', sub: 'LaunchDarkly', layer: 'edge', x: 285, y: 300, color: '#06b6d4', details: 'Real-time feature toggling and A/B testing infrastructure at the edge.' },
    { id: 'push', label: 'Push / WS', sub: 'APNs, FCM', layer: 'edge', x: 435, y: 300, color: '#06b6d4', pulsing: true, details: 'Real-time bi-directional communication via WebSockets (Socket.io) and native push notifications (APNs, FCM).' },

    // API
    { id: 'kong', label: 'Kong Gateway', sub: 'Rate limit, JWT', layer: 'api', x: 135, y: 420, color: '#10b981', details: 'API Gateway handling rate limiting, JWT validation, circuit breaking, and certificate pinning enforcement.' },
    { id: 'auth', label: 'Auth Service', sub: 'OAuth2+PKCE', layer: 'api', x: 285, y: 420, color: '#10b981', details: 'Centralized authentication handling OAuth2 flows, biometric login validation, refresh token rotation, and device fingerprint binding.' },
    { id: 'graphql', label: 'GraphQL BFF', sub: 'Mobile-optimized', layer: 'api', x: 435, y: 420, color: '#10b981', details: 'Backend-for-Frontend aggregating microservices. Mobile-optimized with field masking, query cost limits, persisted queries, and DataLoader for N+1 prevention.' },

    // Microservices
    { id: 'user', label: 'User Service', sub: 'Golang, gRPC', layer: 'services', x: 40, y: 540, color: '#f97316', details: 'High-performance Go service managing user profiles and preferences via gRPC.' },
    { id: 'content', label: 'Content Service', sub: 'Node.js, Cache', layer: 'services', x: 165, y: 540, color: '#f97316', details: 'Node.js microservice serving personalized feeds with cursor pagination and Redis cache.' },
    { id: 'notif', label: 'Notification', sub: 'Python, Fan-out', layer: 'services', x: 290, y: 540, color: '#f97316', details: 'Python service consuming Kafka events to fan-out millions of push notifications via APNs/FCM.' },
    { id: 'sync', label: 'Sync Engine', sub: 'Rust, CRDT', layer: 'services', x: 415, y: 540, color: '#f97316', dashed: true, pulsing: true, details: 'High-throughput Rust engine resolving offline data conflicts using CRDTs and Operational Transformation.' },
    { id: 'ml', label: 'ML Inference', sub: 'SageMaker+CoreML', layer: 'services', x: 540, y: 540, color: '#f97316', details: 'PyTorch models deployed on SageMaker for real-time content ranking, with Core ML / TFLite on-device fallback.' },

    // Data
    { id: 'postgres', label: 'PostgreSQL', sub: 'Multi-AZ, RLS', layer: 'data', x: 70, y: 660, color: '#f43f5e', details: 'Primary relational datastore configured for Multi-AZ high availability, PgBouncer pooling, and Row-Level Security.' },
    { id: 'redis', label: 'Redis Cluster', sub: 'Pub/Sub, Session', layer: 'data', x: 210, y: 660, color: '#f43f5e', details: 'In-memory data grid (ElastiCache) for session store, caching, and pub/sub message broker.' },
    { id: 'kafka', label: 'Kafka', sub: 'MSK, Outbox', layer: 'data', x: 350, y: 660, color: '#f43f5e', pulsing: true, details: 'Event streaming backbone using Amazon MSK, event log for offline sync, Transactional Outbox pattern, and Avro schema registry.' },
    { id: 's3', label: 'S3 + CloudFront', sub: 'Media Storage', layer: 'data', x: 490, y: 660, color: '#f43f5e', details: 'Media storage, image CDN, and adaptive video streaming infrastructure.' },

    // Observability
    { id: 'obs_mobile1', label: 'Mobile Crash', sub: 'Sentry+Crashlytics', layer: 'obs', x: 70, y: 780, color: '#64748b', details: 'Sentry (crash reporting + release health) and Firebase Crashlytics (ANR + crash-free rate).' },
    { id: 'obs_mobile2', label: 'Mobile Perf', sub: 'Datadog+Firebase', layer: 'obs', x: 210, y: 780, color: '#64748b', details: 'Datadog RUM (real user monitoring, session replay, mobile vitals) and Firebase Performance (app start time, HTTP traces, screen render).' },
    { id: 'obs_server1', label: 'Server APM', sub: 'Datadog+Prometheus', layer: 'obs', x: 350, y: 780, color: '#64748b', details: 'Datadog APM (distributed traces, service map) and Prometheus + Grafana (infrastructure metrics, SLO dashboards).' },
    { id: 'obs_server2', label: 'Incident Mgmt', sub: 'PagerDuty', layer: 'obs', x: 490, y: 780, color: '#64748b', details: 'PagerDuty for on-call escalation and incident management.' },
  ];

  const connections = [
    // CI/CD
    { from: 'build', to: 'ios', flows: ['cicd'] },
    { from: 'build', to: 'android', flows: ['cicd'] },
    { from: 'iac', to: 'kong', flows: ['cicd'] },
    { from: 'iac', to: 'postgres', flows: ['cicd'] },
    
    // Client to Edge
    { from: 'ios', to: 'cloudfront', flows: ['read', 'write'] },
    { from: 'android', to: 'cloudfront', flows: ['read', 'write'] },
    { from: 'web', to: 'cloudfront', flows: ['read', 'write'] },
    { from: 'ios', to: 'push', flows: ['sync'] },
    { from: 'android', to: 'push', flows: ['sync'] },
    { from: 'kmm', to: 'kong', flows: ['read', 'write'] },
    { from: 'kmm', to: 'sync', flows: ['sync'] },

    // Edge to API
    { from: 'cloudfront', to: 'kong', flows: ['read', 'write'] },
    { from: 'cloudfront', to: 's3', flows: ['read'] },
    { from: 'flags', to: 'kong', flows: ['read'] },
    { from: 'push', to: 'sync', flows: ['sync'] },
    
    // API to Microservices
    { from: 'kong', to: 'auth', flows: ['read', 'write'] },
    { from: 'kong', to: 'graphql', flows: ['read', 'write'] },
    { from: 'graphql', to: 'user', flows: ['write'] },
    { from: 'graphql', to: 'content', flows: ['read'] },
    { from: 'graphql', to: 'ml', flows: ['read'] },
    
    // Microservices to Data
    { from: 'user', to: 'postgres', flows: ['write'] },
    { from: 'content', to: 'redis', flows: ['read'] },
    { from: 'content', to: 'postgres', flows: ['read'] },
    { from: 'sync', to: 'kafka', flows: ['sync', 'write'] },
    { from: 'sync', to: 'postgres', flows: ['sync'] },
    { from: 'ml', to: 'redis', flows: ['read'] },
    
    // Async / Event Driven
    { from: 'kafka', to: 'notif', flows: ['write', 'sync'] },
    { from: 'notif', to: 'push', flows: ['sync'] },
    
    // Observability
    { from: 'ios', to: 'obs_mobile1', flows: ['all'] },
    { from: 'android', to: 'obs_mobile2', flows: ['all'] },
    { from: 'kong', to: 'obs_server1', flows: ['all'] },
    { from: 'postgres', to: 'obs_server1', flows: ['all'] },
    { from: 'obs_server1', to: 'obs_server2', flows: ['all'] },
  ];

  const generatePath = (fromId: string, toId: string) => {
    const fromNode = nodes.find(n => n.id === fromId);
    const toNode = nodes.find(n => n.id === toId);
    if (!fromNode || !toNode) return '';
    
    if (toNode.y > fromNode.y) {
      // Flowing downwards
      const x1 = fromNode.x + 55;
      const y1 = fromNode.y + 50;
      const x2 = toNode.x + 55;
      const y2 = toNode.y;
      return `M ${x1} ${y1} C ${x1} ${y1 + 40}, ${x2} ${y2 - 40}, ${x2} ${y2}`;
    } else if (toNode.y < fromNode.y) {
      // Flowing upwards
      const x1 = fromNode.x + 55;
      const y1 = fromNode.y;
      const x2 = toNode.x + 55;
      const y2 = toNode.y + 50;
      return `M ${x1} ${y1} C ${x1} ${y1 - 40}, ${x2} ${y2 + 40}, ${x2} ${y2}`;
    } else {
      // Flowing horizontally
      const isRight = toNode.x > fromNode.x;
      const x1 = isRight ? fromNode.x + 110 : fromNode.x;
      const y1 = fromNode.y + 25;
      const x2 = isRight ? toNode.x : toNode.x + 110;
      const y2 = toNode.y + 25;
      return `M ${x1} ${y1} C ${x1 + (isRight ? 40 : -40)} ${y1}, ${x2 + (isRight ? -40 : 40)} ${y2}, ${x2} ${y2}`;
    }
  };

  return (
    <section id="architecture" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-4">
            <Shield size={14} /> Staff Engineer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Platform Architecture</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            An interactive blueprint of a scalable, resilient mobile ecosystem. Hover over nodes for technical details, and use the filters to trace data flows.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 bg-zinc-900/50 p-4 rounded-2xl border border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-2">Flows:</span>
            {['all', 'read', 'write', 'sync', 'cicd'].map(f => (
              <button
                key={f}
                onClick={() => setActiveFlow(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${activeFlow === f ? 'bg-white text-black' : 'bg-white/5 text-zinc-400 hover:bg-white/10'}`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-2">Speed:</span>
            {['slow', 'normal', 'fast'].map(s => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${speed === s ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-white/5 text-zinc-400 hover:bg-white/10 border border-transparent'}`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto bg-zinc-900/20 rounded-3xl border border-white/5 p-4 md:p-8 overflow-x-auto">
          <div className="min-w-[680px]">
            <svg viewBox="0 0 680 860" className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}>
              <defs>
                <style>
                  {`
                    .flow-line-platform {
                      stroke-dasharray: 6;
                      animation: dash-platform linear infinite;
                    }
                    @keyframes dash-platform {
                      to { stroke-dashoffset: -12; }
                    }
                  `}
                </style>
              </defs>

              {layers.map(layer => (
                <g key={layer.id}>
                  <rect x="10" y={layer.y - 20} width="660" height="100" rx="12" fill={`${layer.color}05`} stroke={`${layer.color}20`} strokeWidth="1" strokeDasharray="4 4" />
                  <text x="20" y={layer.y - 5} fill={layer.color} fontSize="10" fontWeight="bold" letterSpacing="1" opacity="0.7" className="uppercase font-mono">{layer.label}</text>
                </g>
              ))}

              {connections.map((conn, i) => {
                const isActive = activeFlow === 'all' || conn.flows.includes(activeFlow);
                return (
                  <path
                    key={i}
                    d={generatePath(conn.from, conn.to)}
                    fill="none"
                    stroke={isActive ? '#fff' : '#ffffff10'}
                    strokeWidth={isActive ? 2 : 1}
                    opacity={isActive ? 0.6 : 0.2}
                    className={isActive ? 'flow-line-platform' : ''}
                    style={{ animationDuration: `${currentSpeed}s` }}
                  />
                );
              })}

              {nodes.map(node => {
                const isHovered = hoveredNode === node.id;
                return (
                  <g 
                    key={node.id} 
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className="cursor-pointer transition-transform duration-300"
                    style={{ transformOrigin: `${node.x + 55}px ${node.y + 25}px`, transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                  >
                    <rect 
                      x={node.x} y={node.y} 
                      width="110" height="50" rx="8" 
                      fill={`${node.color}15`} 
                      stroke={node.color} 
                      strokeWidth={isHovered ? 3 : 1.5} 
                      strokeDasharray={node.dashed ? "4 4" : "none"}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    <text x={node.x + 55} y={node.y + 22} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" style={{ pointerEvents: 'none' }}>{node.label}</text>
                    <text x={node.x + 55} y={node.y + 38} textAnchor="middle" fill={`${node.color}cc`} fontSize="9" className="font-mono" style={{ pointerEvents: 'none' }}>{node.sub}</text>
                    
                    {node.pulsing && (
                      <circle cx={node.x + 110} cy={node.y} r="4" fill="#ef4444">
                        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          <AnimatePresence>
            {hoveredNode && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-800/95 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl w-[90%] md:w-[400px] pointer-events-none z-50"
              >
                {(() => {
                  const node = nodes.find(n => n.id === hoveredNode);
                  if (!node) return null;
                  return (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: node.color }} />
                        <h4 className="font-bold text-white text-sm">{node.label}</h4>
                        <span className="text-xs font-mono text-zinc-400 ml-auto">{node.sub}</span>
                      </div>
                      <p className="text-zinc-300 text-xs leading-relaxed">{node.details}</p>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6">
          {layers.map(layer => (
            <div key={layer.id} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: layer.color }} />
              <span className="text-xs font-mono text-zinc-400 uppercase">{layer.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineeringDeepDivesSection() {
  return (
    <section id="problems" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-zinc-500" />
            <span className="text-zinc-400 font-mono text-sm tracking-wider uppercase">Engineering Deep Dives</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solving Hard Mobile Problems
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Beyond high-level architecture, true engineering happens in the details. Explore interactive deep dives into offline sync, zero-trust auth, and startup performance.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          <OfflineSyncDiagram />
          <AuthSequenceDiagram />
          <StartupPerformanceDiagram />
        </div>
      </div>
    </section>
  );
}

function OfflineSyncDiagram() {
  const [isOnline, setIsOnline] = useState(true);
  const [pendingMutations, setPendingMutations] = useState(0);
  const [isFlushing, setIsFlushing] = useState(false);
  const [particles, setParticles] = useState<{ id: number; path: string; color: string; dur: string }[]>([]);
  const [uiFlash, setUiFlash] = useState(false);
  const [mqFlash, setMqFlash] = useState(false);

  const spawnParticle = (path: string, color: string, dur: string) => {
    const id = Date.now() + Math.random();
    setParticles(prev => [...prev, { id, path, color, dur }]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, parseFloat(dur) * 1000 + 100);
  };

  const toggleNetwork = () => {
    if (!isOnline) {
      setIsOnline(true);
      if (pendingMutations > 0) {
        setIsFlushing(true);
        for (let i = 0; i < Math.min(pendingMutations, 10); i++) {
          setTimeout(() => {
            spawnParticle('M 410 200 L 480 200', '#15803d', '0.9s');
          }, i * 150);
        }
        setTimeout(() => {
          setPendingMutations(0);
          setIsFlushing(false);
        }, 2000);
      }
    } else {
      setIsOnline(false);
    }
  };

  const simulateMutation = () => {
    if (isOnline) {
      spawnParticle('M 410 200 L 480 200', '#15803d', '0.9s');
      setUiFlash(true);
      setTimeout(() => setUiFlash(false), 300);
    } else {
      spawnParticle('M 130 120 L 230 180', '#b45309', '0.7s');
      setPendingMutations(prev => prev + 1);
      setMqFlash(true);
      setTimeout(() => setMqFlash(false), 300);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full bg-[#0d0f14] p-6 md:p-10 rounded-3xl border border-white/10"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <style>{`
        .font-mono-jb { font-family: 'JetBrains Mono', monospace; }
        .flow-line { fill: none; stroke-width: 2; stroke-dasharray: 6 6; animation: dash 20s linear infinite; }
        .flow-line.solid { stroke-dasharray: none; animation: none; }
        .flow-line.slow { animation: dash 40s linear infinite; }
        .flow-line.reverse { animation: dash-reverse 20s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -1000; } }
        @keyframes dash-reverse { to { stroke-dashoffset: 1000; } }
        .pulse-shadow { animation: pulse-shadow 1.5s infinite; }
        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 0 0 rgba(252, 165, 165, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(252, 165, 165, 0); }
          100% { box-shadow: 0 0 0 0 rgba(252, 165, 165, 0); }
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1d4ed8]/15 text-[#93c5fd] border border-[#1d4ed8]/30">Architecture</span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#15803d]/15 text-[#4ade80] border border-[#15803d]/30">Offline-First</span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#7c3aed]/15 text-[#c4b5fd] border border-[#7c3aed]/30">CRDT Resolution</span>
        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#b45309]/15 text-[#fbbf24] border border-[#b45309]/30">Optimistic UI</span>
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">Offline-First Sync & CRDT Resolution</h3>
      <div className="text-[#9ca3af] text-sm mb-8 font-mono-jb">// Optimistic UI updates with background mutation queueing</div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <button onClick={toggleNetwork} className="bg-[#161b27] border border-gray-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors">
          <div className={`w-2.5 h-2.5 rounded-full ${isOnline ? 'bg-[#4ade80] shadow-[0_0_8px_#4ade80]' : 'bg-[#fca5a5] shadow-[0_0_8px_#fca5a5] pulse-shadow'}`} />
          Network: {isOnline ? 'Online' : 'Offline'}
        </button>
        <button onClick={simulateMutation} className="bg-[#161b27] border border-gray-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">
          + Simulate mutation
        </button>
        {(!isOnline && pendingMutations > 0) && (
          <div className="px-4 py-1.5 rounded-full text-[13px] font-semibold font-mono-jb bg-[#fbbf24]/10 border border-[#fbbf24]/25 text-[#fbbf24] flex items-center">
            ⏳ {pendingMutations} mutations queued
          </div>
        )}
        {(isOnline && isFlushing) && (
          <div className="px-4 py-1.5 rounded-full text-[13px] font-semibold font-mono-jb bg-[#4ade80]/10 border border-[#4ade80]/25 text-[#4ade80] flex items-center">
            ✅ Flushing {pendingMutations} mutations...
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 bg-[#161b27] p-3 px-5 rounded-xl mb-6 border border-gray-800">
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-6 h-0.5 bg-[#15803d]"></div> Mutation flow (online)
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-6 h-0 border-b-2 border-dashed border-[#1d4ed8]"></div> DB sync / schema replication
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-6 h-0.5 bg-[#7c3aed]"></div> CRDT resolution pipeline
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <div className="w-6 h-0 border-b-2 border-dashed border-[#b91c1c]"></div> Blocked (offline)
        </div>
      </div>

      {/* Diagram Container */}
      <div className="bg-[#161b27] border border-gray-800 rounded-2xl p-6 mb-8 overflow-x-auto">
        <svg viewBox="0 0 900 400" className="min-w-[800px] w-full h-auto block">
          <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#1d4ed8" />
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#b45309" />
            </marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#15803d" />
            </marker>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed" />
            </marker>
          </defs>

          {/* Regions */}
          <rect x="10" y="10" width="420" height="380" rx="12" stroke="#1e3a5f" strokeDasharray="8 4" fill="transparent" strokeWidth="2" />
          <text x="30" y="35" fill="#1e3a5f" fontSize="12" fontWeight="bold" letterSpacing="2" className="font-mono-jb">MOBILE CLIENT</text>

          <rect x="450" y="10" width="440" height="380" rx="12" stroke="#3d2e5e" strokeDasharray="8 4" fill="transparent" strokeWidth="2" />
          <text x="470" y="35" fill="#3d2e5e" fontSize="12" fontWeight="bold" letterSpacing="2" className="font-mono-jb">CLOUD INFRASTRUCTURE</text>

          {/* Cloud Overlay */}
          <rect x="450" y="10" width="440" height="380" rx="12" fill="#000" opacity={isOnline ? 0 : 0.55} style={{ transition: 'opacity 0.3s' }} />

          {/* Flow Lines */}
          <path d="M 130 120 L 230 180" className="flow-line" stroke="#b45309" markerEnd="url(#arrow-amber)" />
          <text x="190" y="140" fill="#fbbf24" fontSize="10" className="font-mono-jb" transform="rotate(28, 190, 140)">optimistic write</text>
          
          <path d="M 130 120 L 130 280" className="flow-line slow" stroke="#1d4ed8" markerEnd="url(#arrow-blue)" />
          <text x="140" y="200" fill="#93c5fd" fontSize="10" className="font-mono-jb">local cache</text>

          {/* Line 3: MQ -> API Gateway */}
          <g opacity={isOnline ? 1 : 0} style={{ transition: 'opacity 0.3s' }}>
            <path d="M 410 200 L 480 200" className="flow-line solid" stroke="#15803d" markerEnd="url(#arrow-green)" />
            <text x="445" y="190" fill="#4ade80" fontSize="10" className="font-mono-jb" textAnchor="middle">flush mutations</text>
          </g>

          {/* Blocked Line */}
          <g opacity={isOnline ? 0 : 1} style={{ transition: 'opacity 0.3s' }}>
            <path d="M 410 200 L 480 200" fill="none" stroke="#b91c1c" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="445" cy="200" r="8" fill="#0d0f14" stroke="#b91c1c" strokeWidth="2" />
            <path d="M 441 196 L 449 204 M 449 196 L 441 204" stroke="#b91c1c" strokeWidth="2" />
          </g>

          {/* Line 4, 5, 6, 7 */}
          <g opacity={isOnline ? 1 : 0} style={{ transition: 'opacity 0.3s' }}>
            <path d="M 570 165 C 570 100, 690 100, 690 85" className="flow-line solid" stroke="#7c3aed" markerEnd="url(#arrow-purple)" />
            <text x="630" y="110" fill="#c4b5fd" fontSize="10" className="font-mono-jb" textAnchor="middle">resolve conflicts</text>

            <path d="M 750 120 L 750 280" className="flow-line solid" stroke="#7c3aed" markerEnd="url(#arrow-purple)" />
            <text x="760" y="200" fill="#c4b5fd" fontSize="10" className="font-mono-jb">write resolved state</text>

            <path d="M 220 315 L 690 315" className="flow-line slow" stroke="#1d4ed8" markerEnd="url(#arrow-blue)" />
            <text x="450" y="305" fill="#93c5fd" fontSize="10" className="font-mono-jb" textAnchor="middle">schema mirrors (via Sync Engine)</text>

            <path d="M 810 280 L 810 120" className="flow-line solid reverse" stroke="#7c3aed" markerEnd="url(#arrow-purple)" />
            <text x="820" y="200" fill="#c4b5fd" fontSize="10" className="font-mono-jb">ack</text>
          </g>

          {/* Nodes */}
          <rect x="40" y="50" width="180" height="70" rx="10" fill="#0d0f14" stroke={uiFlash ? '#15803d' : '#1d4ed8'} strokeWidth="2" style={{ transition: 'stroke 0.3s' }} />
          <text x="130" y="80" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">React Native UI</text>
          <text x="130" y="100" textAnchor="middle" fill="#93c5fd" fontSize="10" className="font-mono-jb">Optimistic updates</text>

          <rect x="40" y="280" width="180" height="70" rx="10" fill="#0d0f14" stroke="#1d4ed8" strokeWidth="2" />
          <text x="130" y="305" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">SQLite</text>
          <text x="130" y="320" textAnchor="middle" fill="#93c5fd" fontSize="10" className="font-mono-jb">Room (Android)</text>
          <text x="130" y="335" textAnchor="middle" fill="#93c5fd" fontSize="10" className="font-mono-jb">FMDB / CoreData (iOS)</text>

          <rect x="230" y="165" width="180" height="70" rx="10" fill="#0d0f14" stroke={mqFlash ? '#fff' : '#b45309'} strokeWidth="2" style={{ transition: 'stroke 0.3s' }} />
          <text x="320" y="195" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">Mutation Queue</text>
          <text x="320" y="215" textAnchor="middle" fill="#fbbf24" fontSize="10" className="font-mono-jb">persisted to disk</text>
          <text x="320" y="155" textAnchor="middle" fill="#fbbf24" fontSize="12" className="font-mono-jb" opacity={isOnline ? 0 : 1} style={{ transition: 'opacity 0.3s' }}>Queueing...</text>

          <rect x="480" y="165" width="180" height="70" rx="10" fill="#0d0f14" stroke="#15803d" strokeWidth="2" />
          <text x="570" y="195" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">API Gateway</text>
          <text x="570" y="215" textAnchor="middle" fill="#4ade80" fontSize="10" className="font-mono-jb">Auth + rate limiting</text>

          <rect x="690" y="50" width="180" height="70" rx="10" fill="#0d0f14" stroke="#7c3aed" strokeWidth="2" />
          <text x="780" y="75" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">Sync Engine</text>
          <text x="780" y="95" textAnchor="middle" fill="#c4b5fd" fontSize="10" className="font-mono-jb">CRDT merge logic</text>
          <text x="780" y="110" textAnchor="middle" fill="#c4b5fd" fontSize="10" className="font-mono-jb">vector clocks</text>
          <rect x="690" y="50" width="180" height="70" rx="10" fill="none" stroke="#7c3aed" strokeWidth="2">
            <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
            <animate attributeName="transform" type="scale" values="1;1.05" dur="2s" repeatCount="indefinite" transformOrigin="780 85" />
          </rect>

          <rect x="690" y="280" width="180" height="70" rx="10" fill="#0d0f14" stroke="#b91c1c" strokeWidth="2" />
          <text x="780" y="310" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">PostgreSQL</text>
          <text x="780" y="330" textAnchor="middle" fill="#fca5a5" fontSize="10" className="font-mono-jb">source of truth</text>
          <text x="780" y="345" textAnchor="middle" fill="#fca5a5" fontSize="10" className="font-mono-jb">CRDT state columns</text>

          {/* Step Number Badges */}
          <g transform="translate(145, 135)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#b45309" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#fbbf24" fontSize="10" textAnchor="middle" className="font-mono-jb">1</text>
          </g>
          <g transform="translate(130, 150)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#93c5fd" fontSize="10" textAnchor="middle" className="font-mono-jb">2</text>
          </g>
          <g transform="translate(425, 200)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#15803d" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#4ade80" fontSize="10" textAnchor="middle" className="font-mono-jb">3</text>
          </g>
          <g transform="translate(585, 140)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#c4b5fd" fontSize="10" textAnchor="middle" className="font-mono-jb">4</text>
          </g>
          <g transform="translate(750, 150)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#7c3aed" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#c4b5fd" fontSize="10" textAnchor="middle" className="font-mono-jb">5</text>
          </g>
          <g transform="translate(250, 315)">
            <circle cx="0" cy="0" r="8" fill="#0d0f14" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="0" y="3.5" fill="#93c5fd" fontSize="10" textAnchor="middle" className="font-mono-jb">6</text>
          </g>

          {/* Particles */}
          {particles.map(p => (
            <circle key={p.id} r="5" fill={p.color}>
              <animateMotion path={p.path} dur={p.dur} fill="freeze" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur={p.dur} fill="freeze" />
            </circle>
          ))}
        </svg>
      </div>

      {/* Description Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#161b27] border border-gray-800 rounded-xl p-5">
          <h4 className="text-[#fbbf24] font-bold mb-3 text-base">① Optimistic UI Write</h4>
          <ul className="list-disc pl-5 text-[#9ca3af] text-sm space-y-2">
            <li>UI updates instantly without waiting for network response.</li>
            <li>Mutations are serialized with unique UUIDs.</li>
            <li>Written simultaneously to the local SQLite database.</li>
          </ul>
        </div>
        <div className="bg-[#161b27] border border-gray-800 rounded-xl p-5">
          <h4 className="text-[#93c5fd] font-bold mb-3 text-base">② Local Cache (SQLite)</h4>
          <ul className="list-disc pl-5 text-[#9ca3af] text-sm space-y-2">
            <li>Uses Room (Android) or CoreData/FMDB (iOS) for persistence.</li>
            <li>Schema mirrors the cloud database structure.</li>
            <li>Serves as the primary read cache post-sync.</li>
          </ul>
        </div>
        <div className="bg-[#161b27] border border-gray-800 rounded-xl p-5">
          <h4 className="text-[#4ade80] font-bold mb-3 text-base">③ Mutation Flush → API Gateway</h4>
          <ul className="list-disc pl-5 text-[#9ca3af] text-sm space-y-2">
            <li>Flushes queue immediately when online.</li>
            <li>Accumulates mutations safely to disk when offline.</li>
            <li>Gateway enforces auth, rate limits, and payload validation.</li>
          </ul>
        </div>
        <div className="bg-[#161b27] border border-gray-800 rounded-xl p-5">
          <h4 className="text-[#c4b5fd] font-bold mb-3 text-base">④⑤ CRDT Resolution → PostgreSQL</h4>
          <ul className="list-disc pl-5 text-[#9ca3af] text-sm space-y-2">
            <li>Sync Engine applies CRDT merge logic to resolve conflicts.</li>
            <li>Utilizes vector clocks to determine causality.</li>
            <li>Writes the final resolved state to PostgreSQL source of truth.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function AuthSequenceDiagram() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const particlesGroupRef = useRef<SVGGElement>(null);
  const timerRef = useRef<number | null>(null);

  const STEP_DURATION = 1600;
  const PAUSE_AFTER_LAST = 3200;
  const TOTAL_STEPS = 7;

  const steps = [
    {
      id: 0,
      title: "PRE: PKCE Setup",
      color: "#a78bfa",
      desc: "App generates a random code_verifier and derives the S256 code_challenge. Both stay on the device for now."
    },
    {
      id: 1,
      title: "1. Prompt Biometric",
      color: "#60a5fa",
      desc: "App requests biometric authentication. The Secure Enclave (SEP/StrongBox) is activated. The private key never leaves the hardware."
    },
    {
      id: 2,
      title: "2. Return Signed Challenge",
      color: "#c084fc",
      desc: "The Secure Enclave signs the challenge using the hardware-bound private key and returns the assertion to the App."
    },
    {
      id: 3,
      title: "3. PKCE + Signed Challenge",
      color: "#4ade80",
      desc: "App sends the PKCE challenge and the biometric signature directly to the Auth Server, bypassing the Enclave."
    },
    {
      id: 4,
      title: "4. Access JWT + Refresh Token",
      color: "#f472b6",
      desc: "Server validates the signature and PKCE, then returns a short-lived JWT (15 min TTL) and a rotating refresh token."
    },
    {
      id: 5,
      title: "5. Store in Keystore / Keychain",
      color: "#fbbf24",
      desc: "Tokens are securely stored in the hardware-backed Keystore (Android) or Keychain (iOS), encrypted at rest."
    },
    {
      id: 6,
      title: "Alt / Failure Paths",
      color: "#f87171",
      desc: "If biometrics fail, the attempt is aborted. If the JWT expires, a silent refresh rotates tokens. If the refresh token expires, full re-auth is required."
    }
  ];

  const spawnParticle = (pathD: string, color: string, duration: string) => {
    if (!particlesGroupRef.current) return;
    const svgNS = "http://www.w3.org/2000/svg";
    const particle = document.createElementNS(svgNS, "circle");
    particle.setAttribute("r", "4");
    particle.setAttribute("fill", color);

    const motion = document.createElementNS(svgNS, "animateMotion");
    motion.setAttribute("path", pathD);
    motion.setAttribute("dur", duration);
    motion.setAttribute("fill", "freeze");

    const fade = document.createElementNS(svgNS, "animate");
    fade.setAttribute("attributeName", "opacity");
    fade.setAttribute("values", "1;1;0");
    fade.setAttribute("keyTimes", "0;0.8;1");
    fade.setAttribute("dur", duration);
    fade.setAttribute("fill", "freeze");

    particle.appendChild(motion);
    particle.appendChild(fade);
    particlesGroupRef.current.appendChild(particle);

    // @ts-ignore
    motion.beginElement();
    // @ts-ignore
    fade.beginElement();

    setTimeout(() => {
      if (particlesGroupRef.current && particlesGroupRef.current.contains(particle)) {
        particlesGroupRef.current.removeChild(particle);
      }
    }, parseFloat(duration) * 1000 + 100);
  };

  const executeStep = (step: number) => {
    if (!svgRef.current) return;
    const svg = svgRef.current;

    // Helper to toggle visibility
    const show = (selector: string, condition: boolean) => {
      svg.querySelectorAll(selector).forEach(el => {
        el.setAttribute('opacity', condition ? '1' : '0');
      });
    };

    // Step 0
    show('.step-0', step >= 0);
    
    // Step 1
    show('.step-1', step >= 1);
    if (step === 1) spawnParticle("M 141 158 L 420 158", "#60a5fa", "0.7s");

    // Step 2
    show('.step-2', step >= 2);
    if (step === 2) spawnParticle("M 420 218 L 141 218", "#c084fc", "0.7s");

    // Step 3
    show('.step-3', step >= 3);
    if (step === 3) spawnParticle("M 141 278 L 719 278", "#4ade80", "0.7s");

    // Step 4
    show('.step-4', step >= 4);
    if (step === 4) spawnParticle("M 719 340 L 141 340", "#f472b6", "0.7s");

    // Step 5
    show('.step-5', step >= 5);
    if (step === 5) spawnParticle("M 141 393 L 420 393", "#fbbf24", "0.7s");

    // Step 6
    show('.step-6', step >= 6);
  };

  useEffect(() => {
    if (isPlaying) {
      executeStep(currentStep);
      timerRef.current = window.setTimeout(() => {
        if (currentStep < TOTAL_STEPS - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          timerRef.current = window.setTimeout(() => {
            setCurrentStep(0);
          }, PAUSE_AFTER_LAST);
        }
      }, STEP_DURATION);
    } else {
      executeStep(currentStep);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentStep, isPlaying]);

  const handleRestart = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handleJump = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentStep(index);
    setIsPlaying(false);
  };

  return (
    <motion.div 
      id="zero-trust-auth"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative w-full bg-[#161b27] rounded-3xl border border-[#1e2a3a] p-6 md:p-10 overflow-hidden"
    >
      {/* Badge Row */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">OAuth2</span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">PKCE</span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">Biometric</span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">Zero-Trust</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f1f5f9]">Zero-Trust Auth Sequence (OAuth2 + PKCE)</h2>
        <p className="text-[#94a3b8] text-sm mt-2 font-mono">// Secure biometric login with hardware-backed keystore and token rotation</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-black/30 p-4 rounded-xl border border-[#1e2a3a]">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e2a3a] hover:bg-[#2a3b52] text-white transition-colors"
          >
            {isPlaying ? <div className="w-3 h-3 border-l-2 border-r-2 border-white" /> : <Play size={16} className="ml-1" />}
          </button>
          <button 
            onClick={handleRestart}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e2a3a] hover:bg-[#2a3b52] text-white text-sm font-medium transition-colors"
          >
            <RefreshCw size={14} /> Restart
          </button>
        </div>
        <div className="text-sm font-mono text-[#94a3b8]">
          Status: <span style={{ color: steps[currentStep].color }}>{steps[currentStep].title}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-1 bg-[#1e2a3a] rounded-full mb-12">
        <div 
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out"
          style={{ 
            width: `${(currentStep / (TOTAL_STEPS - 1)) * 100}%`,
            backgroundColor: steps[currentStep].color 
          }}
        />
        <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2 px-1">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => handleJump(i)}
              className="w-4 h-4 rounded-full border-2 border-[#161b27] transition-colors z-10"
              style={{
                backgroundColor: i <= currentStep ? step.color : '#1e2a3a',
                transform: i === currentStep ? 'scale(1.2)' : 'scale(1)'
              }}
              title={step.title}
            />
          ))}
        </div>
      </div>

      {/* Diagram Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 overflow-x-auto">
          <svg ref={svgRef} viewBox="0 0 860 500" className="w-full min-w-[700px] h-auto font-mono">
            <defs>
              <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa" />
              </marker>
              <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#c084fc" />
              </marker>
              <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4ade80" />
              </marker>
              <marker id="arrow-pink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f472b6" />
              </marker>
              <marker id="arrow-yellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
              </marker>
              <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f87171" />
              </marker>
            </defs>

            {/* Highlight Band */}
            <rect 
              x="0" 
              y={currentStep === 0 ? 90 : currentStep === 1 ? 138 : currentStep === 2 ? 198 : currentStep === 3 ? 258 : currentStep === 4 ? 320 : currentStep === 5 ? 373 : 410} 
              width="860" 
              height={currentStep === 0 ? 40 : currentStep === 6 ? 80 : 40} 
              fill={steps[currentStep].color} 
              opacity="0.05" 
              className="transition-all duration-300"
              rx="8"
            />

            {/* Lifelines */}
            <line x1="135" y1="60" x2="135" y2="490" stroke="#1e2a3a" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="426" y1="60" x2="426" y2="490" stroke="#1e2a3a" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="727" y1="60" x2="727" y2="490" stroke="#1e2a3a" strokeWidth="2" strokeDasharray="4 4" />

            {/* Actors */}
            <g transform="translate(55, 10)">
              <rect width="160" height="50" rx="10" fill="#0d0f14" stroke="#1d4ed8" strokeWidth="2" />
              <text x="80" y="22" fill="#93c5fd" fontSize="14" fontWeight="bold" textAnchor="middle">Mobile App</text>
              <text x="80" y="40" fill="#64748b" fontSize="10" textAnchor="middle">iOS / Android</text>
            </g>

            <g transform="translate(346, 10)">
              <rect width="160" height="50" rx="10" fill="#0d0f14" stroke="#7c3aed" strokeWidth="2" />
              <text x="80" y="22" fill="#c4b5fd" fontSize="14" fontWeight="bold" textAnchor="middle">Secure Enclave</text>
              <text x="80" y="40" fill="#64748b" fontSize="10" textAnchor="middle">SEP / StrongBox</text>
            </g>

            <g transform="translate(647, 10)">
              <rect width="160" height="50" rx="10" fill="#0d0f14" stroke="#15803d" strokeWidth="2" />
              <text x="80" y="22" fill="#4ade80" fontSize="14" fontWeight="bold" textAnchor="middle">Auth Server</text>
              <text x="80" y="40" fill="#64748b" fontSize="10" textAnchor="middle">OAuth2 + PKCE</text>
            </g>

            {/* Step 0: PRE */}
            <g className="step-0 transition-opacity duration-300">
              <rect x="75" y="100" width="120" height="24" rx="4" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1" />
              <text x="135" y="116" fill="#a78bfa" fontSize="10" textAnchor="middle">PRE: generate code_verifier + S256</text>
            </g>

            {/* Step 1: Prompt Biometric */}
            <g className="step-1 transition-opacity duration-300">
              <path d="M 141 158 L 414 158" fill="none" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#arrow-blue)" />
              <text x="280" y="150" fill="#60a5fa" fontSize="12" textAnchor="middle">1. Prompt Biometric</text>
              <circle cx="280" cy="158" r="3" fill="#60a5fa" />
              <rect x="420" y="148" width="12" height="44" rx="2" fill="rgba(167,139,250,0.22)" stroke="#7c3aed" strokeWidth="1" />
            </g>

            {/* Step 2: Return Signed Challenge */}
            <g className="step-2 transition-opacity duration-300">
              <path d="M 420 218 L 147 218" fill="none" stroke="#c084fc" strokeWidth="2" markerEnd="url(#arrow-purple)" />
              <text x="280" y="210" fill="#c084fc" fontSize="12" textAnchor="middle">2. Return Signed Challenge</text>
              <rect x="129" y="208" width="12" height="38" rx="2" fill="rgba(96,165,250,0.2)" stroke="#1d4ed8" strokeWidth="1" />
            </g>

            {/* Step 3: PKCE + Signed Challenge */}
            <g className="step-3 transition-opacity duration-300">
              <path d="M 141 278 L 713 278" fill="none" stroke="#4ade80" strokeWidth="2" markerEnd="url(#arrow-green)" />
              <text x="280" y="270" fill="#4ade80" fontSize="12" textAnchor="middle">3. PKCE + Signed Challenge</text>
              
              {/* Bypass Indicator */}
              <circle cx="426" cy="278" r="5" fill="#0d0f14" stroke="#4ade80" strokeWidth="2" />
              <text x="426" y="292" fill="#4ade80" fontSize="9" textAnchor="middle">bypasses enclave</text>
              
              <rect x="721" y="262" width="12" height="46" rx="2" fill="rgba(74,222,128,0.2)" stroke="#15803d" strokeWidth="1" />
            </g>

            {/* Step 4: Access JWT + Refresh Token */}
            <g className="step-4 transition-opacity duration-300">
              <path d="M 721 340 L 147 340" fill="none" stroke="#f472b6" strokeWidth="2" markerEnd="url(#arrow-pink)" />
              <text x="580" y="332" fill="#f472b6" fontSize="12" textAnchor="middle">4. Access JWT + Refresh Token</text>
              
              {/* Bypass Indicator */}
              <circle cx="426" cy="340" r="5" fill="#0d0f14" stroke="#f472b6" strokeWidth="2" />
              <text x="426" y="354" fill="#f472b6" fontSize="9" textAnchor="middle">bypasses enclave</text>
              
              <rect x="129" y="324" width="12" height="38" rx="2" fill="rgba(96,165,250,0.2)" stroke="#1d4ed8" strokeWidth="1" />
            </g>

            {/* Step 5: Store in Keystore */}
            <g className="step-5 transition-opacity duration-300">
              <path d="M 141 393 L 414 393" fill="none" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrow-yellow)" />
              <text x="280" y="385" fill="#fbbf24" fontSize="12" textAnchor="middle">5. Store in Keystore / Keychain</text>
              <rect x="420" y="382" width="12" height="38" rx="2" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" strokeWidth="1" />
            </g>

            {/* Step 6: Alt / Failure Paths */}
            <g className="step-6 transition-opacity duration-300">
              <rect x="44" y="420" width="772" height="62" rx="8" fill="none" stroke="#f87171" strokeWidth="2" strokeDasharray="6 4" />
              <text x="54" y="436" fill="#f87171" fontSize="10" fontWeight="bold">ALT / FAILURE PATHS</text>
              
              <path d="M 420 445 L 147 445" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-red)" />
              <text x="280" y="440" fill="#f87171" fontSize="10" textAnchor="middle">biometric fail → abort, clear attempt</text>

              <path d="M 721 465 L 147 465" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-red)" />
              <text x="430" y="460" fill="#f87171" fontSize="10" textAnchor="middle">JWT expiry → refresh_token rotation → re-issue</text>
            </g>

            {/* Particles Group */}
            <g ref={particlesGroupRef} id="particles"></g>
          </svg>
        </div>

        {/* Live Info Card */}
        <div className="flex flex-col">
          <div 
            className="flex-1 rounded-xl p-6 border-l-4 transition-all duration-300"
            style={{ 
              backgroundColor: `${steps[currentStep].color}10`,
              borderColor: steps[currentStep].color
            }}
          >
            <h3 
              className="text-lg font-bold mb-4 transition-colors duration-300"
              style={{ color: steps[currentStep].color }}
            >
              {steps[currentStep].title}
            </h3>
            <p className="text-[#f1f5f9] leading-relaxed text-sm">
              {steps[currentStep].desc}
            </p>
          </div>
        </div>
      </div>

      {/* Static Note Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0d0f14] border border-[#1e2a3a] rounded-xl p-6">
          <h4 className="text-[#c084fc] font-bold mb-4 flex items-center gap-2">
            <Shield size={18} /> PKCE (S256 Method)
          </h4>
          <ul className="space-y-3 text-sm text-[#94a3b8]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] mt-1.5 shrink-0" />
              <span><code className="text-[#c4b5fd] bg-[#c084fc]/10 px-1 rounded">code_verifier</code> = random 43–128 char secret, generated and kept on device.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] mt-1.5 shrink-0" />
              <span><code className="text-[#c4b5fd] bg-[#c084fc]/10 px-1 rounded">code_challenge</code> = BASE64URL(SHA256(verifier)) sent to server initially.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] mt-1.5 shrink-0" />
              <span>Intercepted auth codes are useless without the original verifier.</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#0d0f14] border border-[#1e2a3a] rounded-xl p-6">
          <h4 className="text-[#f87171] font-bold mb-4 flex items-center gap-2">
            <WifiOff size={18} /> Failure Paths
          </h4>
          <ul className="space-y-3 text-sm text-[#94a3b8]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
              <span><strong>Biometric fail:</strong> Enclave rejects signature request → abort, clear challenge.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
              <span><strong>JWT expiry:</strong> Silent refresh → server rotates both access and refresh tokens.</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f87171] mt-1.5 shrink-0" />
              <span><strong>Refresh expiry:</strong> Full re-auth required, biometric re-prompt from step 1.</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function StartupPerformanceDiagram() {
  const [isOptimised, setIsOptimised] = useState(true);
  const [scrubberPos, setScrubberPos] = useState(290);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setScrubberPos(isOptimised ? 290 : 650);
  }, [isOptimised]);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateScrubber(e.clientX);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateScrubber(e.clientX);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const updateScrubber = (clientX: number) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    // SVG viewBox is 0 0 860 260, width is 100%
    const scale = 860 / rect.width;
    const svgX = x * scale;
    // timeline starts at 120px (0ms)
    const msPerPx = 1; // 1px = 1ms
    let ms = Math.round((svgX - 120) / msPerPx);
    // snap to 10ms
    ms = Math.round(ms / 10) * 10;
    const maxMs = isOptimised ? 550 : 700;
    ms = Math.max(0, Math.min(ms, maxMs));
    setScrubberPos(ms);
  };

  const tasks = [
    { id: 'os', name: 'OS Init', start: 0, end: 80, thread: 'Main Thread', color: '#ef4444', subtitle: 'cold start', critical: true, platform: 'dyld on iOS, ART on Android' },
    { id: 'di', name: 'DI Setup', start: 80, end: 160, thread: 'Main Thread', color: '#f59e0b', subtitle: 'Dagger/Hilt', critical: true, platform: 'Dagger/Hilt on Android' },
    { id: 'ui', name: 'UI Render', start: 160, end: isOptimised ? 260 : 300, thread: 'Main Thread', color: '#3b82f6', subtitle: 'inflate & draw', critical: true, platform: 'Compose / SwiftUI' },
    { id: 'db', name: 'Local DB Hydration', start: isOptimised ? 80 : 300, end: isOptimised ? 220 : 430, thread: isOptimised ? 'Background' : 'Main Thread', color: '#a855f7', subtitle: 'SQLite warm-up', badge: isOptimised ? 'non-blocking' : '', critical: !isOptimised, platform: 'Room / CoreData' },
    { id: 'api', name: 'Prefetch API Data', start: isOptimised ? 160 : 430, end: isOptimised ? 360 : 570, thread: isOptimised ? 'Network' : 'Main Thread', color: '#06b6d4', subtitle: 'URLSession/OkHttp', badge: isOptimised ? 'non-blocking' : '', critical: !isOptimised, platform: 'OkHttp / URLSession' },
    { id: 'analytics', name: 'Analytics Init', start: isOptimised ? 290 : 570, end: isOptimised ? 430 : 650, thread: isOptimised ? 'Background' : 'Main Thread', color: '#6b7280', subtitle: 'Firebase/Amplitude', badge: isOptimised ? 'deferred ✓' : '', critical: !isOptimised, platform: 'Firebase SDK' },
  ];

  const getThreadY = (thread: string) => {
    if (thread === 'Main Thread') return 50;
    if (thread === 'Background') return 110;
    if (thread === 'Network') return 170;
    return 50;
  };

  const activeTasks = tasks.filter(t => scrubberPos >= t.start && scrubberPos < t.end);

  const tti = isOptimised ? 290 : 650;
  const fmp = isOptimised ? 260 : 300;

  return (
    <section id="startup-critical-path" className="py-24 relative overflow-hidden bg-zinc-950" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-zinc-400 font-mono text-sm tracking-wider uppercase">Startup Critical Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            App Startup Critical Path
          </h2>
          <div className="text-zinc-400 text-sm mb-8 font-mono">
            // Optimizing Time-to-Interactive (TTI) by deferring non-critical tasks to background threads
          </div>
          
          {/* Badge row */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">Performance</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-500/15 text-green-400 border border-green-500/30">TTI Optimisation</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30">Threading</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-500/15 text-red-400 border border-red-500/30">Cold Start</span>
          </div>
        </div>

        {/* Diagram Card */}
        <div className="relative w-full bg-[#161b27] rounded-3xl border border-[#1e2a3a] p-6 md:p-10 shadow-2xl">
          
          {/* Controls & Stats */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex bg-black/40 p-1 rounded-lg border border-white/10">
              <button 
                onClick={() => setIsOptimised(false)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${!isOptimised ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                Before
              </button>
              <button 
                onClick={() => setIsOptimised(true)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isOptimised ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400 hover:text-white'}`}
              >
                After
              </button>
            </div>

            <div className={`px-4 py-2 rounded-xl border flex items-center gap-3 transition-colors duration-500 ${isOptimised ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
              <div className="font-mono font-bold">TTI: ~{tti}ms</div>
              {isOptimised && <div className="text-xs font-bold bg-green-500/20 px-2 py-0.5 rounded-full">↓ 55%</div>}
            </div>
          </div>

          {/* Timeline SVG */}
          <div 
            className="overflow-x-auto select-none touch-none pb-4"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div className="min-w-[860px] relative pt-8">
              <svg ref={svgRef} viewBox="0 0 860 260" className="w-full h-auto">
                <defs>
                  <pattern id="grid" width="100" height="260" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="20" x2="0" y2="240" stroke="#1e2a3a" strokeWidth="1" strokeDasharray="4 4" />
                  </pattern>
                </defs>

                {/* Grid */}
                <rect x="120" y="20" width="700" height="220" fill="url(#grid)" />
                
                {/* Time markers */}
                {[0, 100, 200, 300, 400, 500, 600, 700].map((ms) => (
                  <text key={ms} x={120 + ms} y="15" fill="#64748b" fontSize="10" textAnchor="middle" className="font-mono">{ms}ms</text>
                ))}

                {/* Thread Labels */}
                <text x="100" y="65" fill="#e2e8f0" fontSize="12" textAnchor="end" fontWeight="600">Main Thread</text>
                {isOptimised && (
                  <>
                    <text x="100" y="125" fill="#e2e8f0" fontSize="12" textAnchor="end" fontWeight="600">Background</text>
                    <text x="100" y="185" fill="#e2e8f0" fontSize="12" textAnchor="end" fontWeight="600">Network</text>
                  </>
                )}

                {/* Critical Path Line */}
                {inView && (
                  <g className="transition-opacity duration-1000 delay-500" opacity="1">
                    <line x1="120" y1="40" x2={120 + fmp} y2="40" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
                    <text x={120 + fmp / 2} y="35" fill="#f59e0b" fontSize="10" textAnchor="middle" className="font-mono">critical path</text>
                    <line x1="120" y1="35" x2="120" y2="45" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
                    <line x1={120 + fmp} y1="35" x2={120 + fmp} y2="45" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
                  </g>
                )}

                {/* Tasks */}
                {tasks.map(task => {
                  const y = getThreadY(task.thread);
                  const width = task.end - task.start;
                  const isActive = scrubberPos >= task.start && scrubberPos < task.end;
                  const opacity = isDragging ? (isActive ? 1 : 0.3) : 0.9;
                  
                  return (
                    <g 
                      key={task.id} 
                      className="transition-all duration-500 ease-out"
                      style={{ transform: `translate(${120 + task.start}px, ${y}px)` }}
                      onMouseEnter={() => setHoveredTask(task.id)}
                      onMouseLeave={() => setHoveredTask(null)}
                      opacity={opacity}
                    >
                      <rect 
                        x="0" y="0" 
                        width={inView ? width : 0} 
                        height="36" 
                        rx="6" 
                        fill={task.color} 
                        className="transition-all duration-700 ease-out"
                      />
                      {inView && width > 40 && (
                        <text x="10" y="15" fill="white" fontSize="11" fontWeight="600" className="pointer-events-none">{task.name}</text>
                      )}
                      {inView && width > 90 && task.subtitle && (
                        <text x="10" y="28" fill="white" fillOpacity="0.7" fontSize="9" className="font-mono pointer-events-none">{task.subtitle}</text>
                      )}
                    </g>
                  );
                })}

                {/* FMP Marker */}
                {inView && (
                  <g className="transition-all duration-500" style={{ transform: `translateX(${120 + fmp}px)` }}>
                    <line x1="0" y1="20" x2="0" y2="240" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="5 4" />
                    <rect x="-20" y="20" width="40" height="16" rx="4" fill="#161b27" />
                    <text x="0" y="32" fill="#2dd4bf" fontSize="10" fontWeight="bold" textAnchor="middle" className="font-mono">FMP</text>
                    <text x="5" y="235" fill="#2dd4bf" fontSize="10" className="font-mono">↑ UI Render complete</text>
                  </g>
                )}

                {/* TTI Marker */}
                {inView && (
                  <g className="transition-all duration-500" style={{ transform: `translateX(${120 + tti}px)` }}>
                    <line x1="0" y1="20" x2="0" y2="240" stroke="#e2e8f0" strokeWidth="2" opacity="0.6" />
                    <rect x="-20" y="20" width="40" height="16" rx="4" fill="#161b27" />
                    <text x="0" y="32" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle" className="font-mono">TTI</text>
                  </g>
                )}

                {/* Scrubber Line */}
                <g className="transition-transform duration-75" style={{ transform: `translateX(${120 + scrubberPos}px)` }}>
                  <line x1="0" y1="0" x2="0" y2="240" stroke="#38bdf8" strokeWidth="2" opacity={isDragging ? 0.8 : 0.4} />
                  <polygon points="-6,0 6,0 0,8" fill="#38bdf8" opacity={isDragging ? 0.8 : 0.4} />
                </g>
              </svg>

              {/* Scrubber Label & Active Tasks */}
              <div 
                className="absolute top-0 pointer-events-none transition-all duration-75 flex flex-col items-center"
                style={{ left: `${((120 + scrubberPos) / 860) * 100}%`, transform: 'translateX(-50%)' }}
              >
                <div className="bg-[#0d0f14] border border-[#1e2a3a] text-[#38bdf8] font-mono text-xs px-2 py-1 rounded shadow-lg">
                  t = {scrubberPos}ms
                </div>
                {isDragging && activeTasks.length > 0 && (
                  <div className="mt-2 bg-[#0d0f14]/90 backdrop-blur border border-[#1e2a3a] rounded p-2 shadow-xl flex flex-col gap-1 w-max max-w-[150px]">
                    <div className="text-[9px] text-zinc-500 uppercase tracking-wider mb-1">Active Tasks</div>
                    {activeTasks.map(t => (
                      <div key={t.id} className="flex items-center gap-1.5 text-[10px] text-zinc-300 truncate">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: t.color }} />
                        <span className="truncate">{t.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tooltip */}
              {hoveredTask && !isDragging && (
                <div className="absolute top-4 right-4 bg-[#0d0f14] border border-[#1e2a3a] rounded-lg p-4 shadow-2xl w-64 pointer-events-none z-10 font-mono">
                  {tasks.filter(t => t.id === hoveredTask).map(t => (
                    <div key={t.id}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }} />
                        <div className="font-bold text-white text-sm">{t.name}</div>
                      </div>
                      <div className="text-zinc-400 text-xs mb-1">Duration: <span className="text-white">{t.end - t.start}ms</span></div>
                      <div className="text-zinc-400 text-xs mb-1">Thread: <span className="text-white">{t.thread}</span></div>
                      <div className="text-zinc-400 text-xs mb-1">Platform: <span className="text-white">{t.platform}</span></div>
                      <div className="text-zinc-400 text-xs mt-2 pt-2 border-t border-white/10">
                        Critical path: <span className={t.critical ? 'text-amber-400' : 'text-green-400'}>{t.critical ? 'Yes' : 'No'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-6 text-center text-[11px] text-zinc-500 font-mono">
            Measured on release builds · Pixel 6 (Android 13) · iPhone 13 (iOS 16) · No debugger attached
          </div>
        </div>

        {/* Annotation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-[#161b27] border border-[#1e2a3a] p-6 rounded-2xl">
            <h4 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Critical Path
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">OS Init → DI Setup → UI Render</strong> is the blocking sequence.</li>
              <li>Any task on this chain directly delays FMP and TTI.</li>
              <li>DI graph construction (Hilt/Dagger) is often the largest optimisation target — lazy injection can cut 30–60ms.</li>
            </ul>
          </div>
          
          <div className="bg-[#161b27] border border-[#1e2a3a] p-6 rounded-2xl">
            <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              What we deferred
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Local DB Hydration moved off main thread → <strong className="text-green-400">saves ~140ms</strong></li>
              <li>Analytics Init pushed post-TTI → <strong className="text-green-400">saves ~80ms</strong></li>
              <li>API Prefetch parallelised with UI Render → net cost on critical path = 0ms.</li>
            </ul>
          </div>

          <div className="bg-[#161b27] border border-[#1e2a3a] p-6 rounded-2xl">
            <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Threading model
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">Main Thread:</strong> UI work only — inflate, measure, draw.</li>
              <li><strong className="text-zinc-300">Background:</strong> Kotlin Coroutines (Dispatchers.IO) / GCD global queue.</li>
              <li><strong className="text-zinc-300">Network:</strong> OkHttp dispatcher / URLSession background configuration.</li>
            </ul>
          </div>

          <div className="bg-[#161b27] border border-[#1e2a3a] p-6 rounded-2xl">
            <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Before vs After
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">Before:</strong> all tasks sequential on Main Thread, TTI ~650ms.</li>
              <li><strong className="text-zinc-300">After:</strong> parallelised, TTI ~290ms.</li>
              <li><strong className="text-zinc-300">Improvement:</strong> ~55% reduction in cold start time to interactive.</li>
            </ul>
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

function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[10vw] md:text-[8vw] leading-none font-bold tracking-tighter uppercase mb-8">
            Let's Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-light">Together</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Currently accepting new projects for Q3 2026. If you're building something ambitious, I'd love to hear about it.
          </p>
          
          <a 
            href="mailto:stackflutter@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            <Mail size={20} />
            Start a Conversation
          </a>
          
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-white/40 uppercase tracking-wider">
            <p>© 2026 Kapil</p>
            <div className="flex gap-6">
              <a href="https://github.com/kapilmhr" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Github size={14} /> GitHub</a>
              <a href="https://www.linkedin.com/in/kapil-maharjan/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin size={14} /> LinkedIn</a>
            </div>
            <p>Designed in California</p>
          </div>
        </motion.div>
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
        <img 
          src="https://picsum.photos/seed/scifi/800/600" 
          className="w-full h-full object-cover opacity-60"
          alt="Hero"
          referrerPolicy="no-referrer"
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
            {[1,2,3,4].map(i => (
              <div key={i} className="w-24 h-36 bg-zinc-800 rounded-md shrink-0 relative overflow-hidden">
                <img src={`https://picsum.photos/seed/movie${i}/200/300`} className="w-full h-full object-cover opacity-60" alt="thumbnail" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}