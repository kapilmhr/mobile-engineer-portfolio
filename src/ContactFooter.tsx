import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Clock, ArrowUpRight, Terminal, Copy, Check } from 'lucide-react';

/* ── Live Clock Hook ── */
function useClock(timezone: string = 'Australia/Sydney') {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString('en-AU', {
        timeZone: timezone,
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
      }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);
  return time;
}

/* ── Copy Email Button ── */
function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} className="group flex items-center space-x-2 font-mono text-sm text-[var(--foreground)] transition-colors">
      <Mail className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
      <span>{email}</span>
      {copied
        ? <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
        : <Copy className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />}
    </button>
  );
}

/* ── Main Footer ── */
export default function ContactFooter() {
  const time = useClock('Australia/Sydney');

  const name = 'Kapil Maharjan';
  const role = 'Staff Mobile Engineer';
  const location = 'Sydney, Australia · UTC+10';
  const email = 'kapilmhr016@gmail.com';
  const availability = 'Available for strategic collaborations';
  const brandInitials = 'KM';
  const yearsExp = '12+ yrs';

  const links = [
    { label: 'GitHub', href: 'https://github.com/kapilmhr', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kapil-maharjan/', icon: Linkedin },
    { label: 'Email', href: `mailto:${email}`, icon: Mail },
  ];

  const stack = ['Swift · SwiftUI', 'Kotlin · Compose', 'Flutter · Dart', 'KMP · Ktor', 'React Native'];

  return (
    <footer id="contact" className="border-t border-[var(--border)] bg-transparent">

      {/* ── CTA Band ── */}
      <div className="border-b border-[var(--border)] bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Headline */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
              style={{
                background: 'var(--hero-badge-bg)',
                border: '1px solid var(--hero-badge-border)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'var(--hero-accent-success)', animation: 'pulse-dot 2s ease-in-out infinite' }}
              />
              <span className="font-mono text-[11px] tracking-[0.05em]" style={{ color: 'var(--hero-accent-success)' }}>
                {availability}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none text-[var(--foreground)] mb-4">
              Let's ship mobile products<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-400">that scale.</span>
            </h2>
            <p className="text-[var(--foreground)]/82 text-base max-w-md leading-relaxed mt-5">
              Staff-level mobile engineering for teams building at scale. Whether you are migrating stacks, optimizing performance, or architecting from scratch, let's talk.
            </p>
          </div>

          {/* Right — Terminal Card + CTA Button */}
          <div className="flex flex-col space-y-4">

            {/* Terminal Card */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] overflow-hidden">
              {/* Title bar with traffic lights */}
              <div className="flex items-center space-x-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--secondary)]/50">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <Terminal className="w-3 h-3 text-[var(--muted-foreground)] ml-2" />
                <span className="text-[10px] font-mono text-[var(--muted-foreground)]">contact.sh</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-3">
                <div>
                  <span className="text-[var(--primary)]">$ </span>
                  <span className="text-[var(--muted-foreground)]">whoami</span>
                  <p className="text-[var(--foreground)] mt-1 ml-2">{name} — {role}</p>
                </div>
                <div>
                  <span className="text-[var(--primary)]">$ </span>
                  <span className="text-[var(--muted-foreground)]">cat location.txt</span>
                  <p className="text-[var(--foreground)] mt-1 ml-2 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                    {location}
                    <span className="flex items-center gap-1 text-[var(--muted-foreground)] text-[10px]">
                      <Clock className="w-3 h-3" />{time}
                    </span>
                  </p>
                </div>
                <div>
                  <span className="text-[var(--primary)]">$ </span>
                  <span className="text-[var(--muted-foreground)]">echo $EMAIL</span>
                  <div className="mt-1 ml-2">
                    <CopyEmail email={email} />
                  </div>
                </div>

                {/* Social link pills */}
                <div className="flex items-center space-x-3 pt-2 border-t border-[var(--border)]">
                  {links.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${label}`}
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-white/[0.02] text-[var(--foreground)]/85 text-xs font-mono transition-[transform,border-color,background-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)]/70 hover:bg-blue-500/10 hover:text-[var(--foreground)] hover:shadow-[0_0_18px_rgba(59,130,246,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(59,130,246,0.45)]"
                    >
                      <Icon className="w-3.5 h-3.5 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors" />
                      <span>{label}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Primary CTA button */}
            <a
              href={`mailto:${email}`}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: 'var(--hero-cta-gradient)', boxShadow: 'var(--hero-cta-glow)', transition: 'box-shadow 0.2s ease' }}
            >
              <Mail className="w-4 h-4" />
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-3 space-y-1 md:space-y-0">
            <div className="text-2xl font-bold font-mono tracking-tighter text-[var(--foreground)]">
              {brandInitials}<span className="text-[var(--primary)]">.</span>
            </div>
            <span className="hidden md:inline text-[var(--foreground)]/45 text-[10px]">•</span>
            <span className="text-[10px] font-mono text-[var(--foreground)]/80 uppercase tracking-widest">{role} · {yearsExp}</span>
          </div>

          {/* Stack strip (hidden on small screens) */}
          <div className="hidden lg:flex items-center space-x-2">
            {stack.map((s, i) => (
              <React.Fragment key={s}>
                <span className="text-[10px] font-mono text-[var(--foreground)]/75">{s}</span>
                {i < stack.length - 1 && <span className="text-[var(--foreground)]/35 text-[10px]">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Copyright + links */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-[var(--foreground)]/72">
            <span>© {new Date().getFullYear()} {name}</span>
            <span className="text-[var(--foreground)]/35">·</span>
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--foreground)]/92 hover:text-[var(--primary)] focus-visible:text-[var(--primary)] focus-visible:outline-none transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
