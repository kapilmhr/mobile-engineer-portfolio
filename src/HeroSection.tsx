import { motion, useInView, useReducedMotion } from 'motion/react';
import { ArrowRight, Github, Layers, MapPin, Terminal, Timer, TrendingUp, User } from 'lucide-react';
import { useRef, useState } from 'react';

function FloatingOrbs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduceMotion = useReducedMotion();
  // Only run the infinite drift while the hero is on-screen and motion is allowed.
  const active = inView && !reduceMotion;

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={active ? { x: [0, 50, -30, 0], y: [0, -70, 40, 0], scale: [1, 1.18, 0.88, 1] } : { x: 0, y: 0, scale: 1 }}
        transition={active ? { duration: 20, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.4 }}
        className="absolute rounded-full"
        style={{
          top: '-15%', left: '-10%',
          width: '65vw', height: '65vw', maxWidth: 750, maxHeight: 750,
          background: 'var(--hero-orb-gradient-lg)',
          filter: 'blur(70px)',
        }}
      />
      <motion.div
        animate={active ? { x: [0, -50, 70, 0], y: [0, 60, -40, 0], scale: [1, 0.82, 1.12, 1] } : { x: 0, y: 0, scale: 1 }}
        transition={active ? { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 } : { duration: 0.4 }}
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

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const pills = [
    { label: 'iOS', color: '#38bdf8' },
    { label: 'Android', color: '#a78bfa' },
    { label: 'Flutter', color: '#22d3ee' },
    { label: 'KMP', color: '#60a5fa' },
    { label: 'SwiftUI', color: '#f472b6' },
    { label: 'Jetpack Compose', color: '#4ade80' },
    { label: 'React Native', color: '#f59e0b' },
  ];

  const stats = [
    { icon: TrendingUp, value: '1M+', label: 'users · largest app shipped', iconColor: '#4ade80', iconBg: 'rgba(74,222,128,0.10)', iconBorder: 'rgba(74,222,128,0.22)' },
    { icon: Timer, value: '55%', label: 'TTI · crash · ANR gains', iconColor: '#60a5fa', iconBg: 'rgba(96,165,250,0.10)', iconBorder: 'rgba(96,165,250,0.22)' },
    { icon: Layers, value: '7+', label: 'migrations led · every stack', iconColor: '#fbbf24', iconBg: 'rgba(251,191,36,0.10)', iconBorder: 'rgba(251,191,36,0.22)' },
    { icon: User, value: '7', label: 'senior engineers mentored', iconColor: '#a78bfa', iconBg: 'rgba(167,139,250,0.10)', iconBorder: 'rgba(167,139,250,0.22)' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: 'var(--hero-bg)' }}
    >
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 dot-grid" style={{ opacity: 0.45 }} />
      <FloatingOrbs />

      <div className="relative z-10 flex-1 flex flex-row items-center px-6 lg:px-20 pt-24 pb-12 w-full max-w-7xl mx-auto gap-12 lg:gap-20">
        <div className="flex-1 flex flex-col items-start text-left">
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
              Staff Mobile Engineer · Sydney, Australia
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-[11px] tracking-[0.18em] uppercase mb-5"
            style={{ color: 'var(--hero-text-secondary)' }}
          >
            AI-Assisted Staff Mobile Engineer · Sydney, Australia · 12+ years
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="font-black mb-6"
            style={{ color: 'var(--hero-text-primary)', fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.03, letterSpacing: '-0.04em' }}
          >
            <span className="sr-only">
              Kapil Maharjan — AI-assisted staff mobile engineer in Sydney, Australia,
              building for iOS, Android, Flutter, KMP and React Native.
            </span>
            <span aria-hidden="true">
              I've shipped on
              <br />
              <span className="shimmer-text">every major</span>
              <br />
              mobile stack.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-[15px] leading-relaxed mb-8"
            style={{ color: 'var(--hero-text-tertiary)' }}
          >
            Swift · Kotlin · Dart · KMP · React Native — not as a generalist, but someone who has led{' '}
            <span className="font-medium" style={{ color: 'var(--hero-text-secondary)' }}>7 production migrations</span>{' '}
            and shipped to{' '}
            <span className="font-medium" style={{ color: 'var(--hero-text-secondary)' }}>1M+ users</span>.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
            }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {pills.map((pill) => (
              <TechPill key={pill.label} label={pill.label} color={pill.color} />
            ))}
          </motion.div>

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

        <motion.img
          src="/kapil_avatar.png"
          alt="Kapil — Staff Mobile Engineer"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block flex-shrink-0 w-[22vw] max-w-[300px] min-w-[180px] h-auto"
        />
      </div>

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
